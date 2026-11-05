// Hand-written helper (overrides/android): survives regeneration.
package com.tactixai.victorycode.sdk

import com.tactixai.victorycode.sdk.infrastructure.Serializer
import com.tactixai.victorycode.sdk.models.TokenResponse
import java.io.IOException
import java.util.concurrent.ThreadLocalRandom
import okhttp3.Interceptor
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Response

/**
 * An OkHttp client that handles authentication and throttling for you. Pass [basePath] and
 * [httpClient] to any API class:
 * ```kotlin
 * val client = VictoryCodeClient(appId, appSecret, "https://api.tactixai.com")
 * val games = GamesApi(client.basePath, client.httpClient).getGames()
 * ```
 * - Gets an access token with your App-Id and App-Secret, reuses it until shortly before it
 *   expires (tokens last 1 hour), and gets a new one after a 401.
 * - Retries `429 Too Many Requests` with exponential backoff, and retries server errors and network
 *   failures for requests that are safe to repeat (never a POST).
 *
 * Thread-safe: share one instance.
 */
class VictoryCodeClient(
    private val appId: String,
    private val appSecret: String,
    basePath: String = DEFAULT_BASE_PATH,
    private val maxRetries: Int = 4,
    baseClient: OkHttpClient = OkHttpClient(),
) {
    val basePath: String = basePath.trimEnd('/')

    private val plainClient: OkHttpClient =
        baseClient.newBuilder().addInterceptor { chain -> retry(chain, chain.request()) }.build()

    /** Use with any API class: `GamesApi(client.basePath, client.httpClient)`. */
    val httpClient: OkHttpClient =
        baseClient.newBuilder().addInterceptor { chain -> authenticateAndRetry(chain) }.build()

    private var token: String? = null
    private var refreshAt = 0L

    /** The current access token, requesting a new one when needed. */
    @Synchronized
    fun accessToken(): String {
        token?.let { if (System.currentTimeMillis() < refreshAt) return it }
        val request =
            Request.Builder()
                .url(basePath + TOKEN_PATH)
                .header("App-Id", appId)
                .header("App-Secret", appSecret)
                .header("Accept", "application/json")
                .build()
        plainClient.newCall(request).execute().use { response ->
            if (!response.isSuccessful) {
                throw IOException(
                    "Victory Code: could not get an access token (HTTP ${response.code}). Check the App-Id and App-Secret."
                )
            }
            val body =
                Serializer.moshi.adapter(TokenResponse::class.java).fromJson(response.body.string())
                    ?: throw IOException("Victory Code: the token response is empty.")
            val lifetime = body.expiresIn.toLong() * 1000
            token = body.accessToken
            refreshAt =
                System.currentTimeMillis() + maxOf(lifetime - REFRESH_MARGIN_MILLIS, lifetime / 2)
            return body.accessToken
        }
    }

    /** Forget the cached token; the next call requests a new one. */
    @Synchronized
    fun invalidateToken() {
        token = null
    }

    private fun authenticateAndRetry(chain: Interceptor.Chain): Response {
        val request = chain.request()
        if (request.url.encodedPath.endsWith(TOKEN_PATH)) return retry(chain, request)
        val response = retry(chain, withToken(request, accessToken()))
        if (response.code != 401) return response
        // The token was revoked or expired early: get a new one and try once more.
        response.close()
        invalidateToken()
        return retry(chain, withToken(request, accessToken()))
    }

    private fun withToken(request: Request, accessToken: String): Request {
        val builder = request.newBuilder().header("Authorization", "Bearer $accessToken")
        if (request.header("App-Id") == null) builder.header("App-Id", appId)
        return builder.build()
    }

    private fun retry(chain: Interceptor.Chain, request: Request): Response {
        val idempotent = request.method.uppercase() in IDEMPOTENT_METHODS
        var attempt = 0
        while (true) {
            val response =
                try {
                    chain.proceed(request)
                } catch (error: IOException) {
                    if (!idempotent || attempt >= maxRetries) throw error
                    sleep(attempt++)
                    continue
                }
            val retryable =
                response.code == 429 || (idempotent && response.code in RETRYABLE_SERVER_ERRORS)
            if (!retryable || attempt >= maxRetries) return response
            response.close()
            sleep(attempt++)
        }
    }

    companion object {
        const val DEFAULT_BASE_PATH = "https://sandbox.api.tactixai.com"
        private const val TOKEN_PATH = "/api/v1/client/auth/token"
        private const val REFRESH_MARGIN_MILLIS = 60_000L
        private val IDEMPOTENT_METHODS = setOf("GET", "HEAD", "OPTIONS", "PUT", "DELETE")
        private val RETRYABLE_SERVER_ERRORS = setOf(500, 502, 503, 504)

        /** About 1 s, 2 s, 4 s… capped at 30 s, with jitter. */
        private fun sleep(attempt: Int) {
            val base = minOf(1000L shl minOf(attempt, 5), 30_000L)
            Thread.sleep((base * (0.5 + ThreadLocalRandom.current().nextDouble() / 2)).toLong())
        }
    }
}
