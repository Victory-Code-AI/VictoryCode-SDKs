package ai.victorycode.sdk

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import okhttp3.HttpUrl
import okhttp3.HttpUrl.Companion.toHttpUrlOrNull
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.MultipartBody
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody
import okhttp3.RequestBody.Companion.asRequestBody
import org.json.JSONObject
import java.io.File
import java.util.concurrent.TimeUnit

class VictoryCodeClient(
    private val config: Config,
    private val httpClient: OkHttpClient = OkHttpClient.Builder()
        .callTimeout(config.timeoutSeconds, TimeUnit.SECONDS)
        .build(),
) {
    data class Config(
        val baseUrl: String,
        val appId: String? = System.getenv("VICTORYCODE_APP_ID"),
        val appSecret: String? = System.getenv("VICTORYCODE_APP_SECRET"),
        var appToken: String? = System.getenv("VICTORYCODE_APP_TOKEN"),
        val timeoutSeconds: Long = 30,
    ) {
        companion object {
            fun fromEnvironment(): Config {
                val baseUrl = System.getenv("VICTORYCODE_API_BASE_URL")
                    ?: throw IllegalStateException("Missing VICTORYCODE_API_BASE_URL")
                return Config(baseUrl = baseUrl.trimEnd('/'))
            }
        }
    }

    suspend fun generateAccessToken(): JSONObject {
        val appId = requireNotNull(config.appId) { "Missing VICTORYCODE_APP_ID" }
        val appSecret = requireNotNull(config.appSecret) { "Missing VICTORYCODE_APP_SECRET" }

        val payload = request(
            method = "GET",
            path = "/api/v1/client/auth/token",
            headers = mapOf(
                "app-id" to appId,
                "app-secret" to appSecret,
            ),
        )

        if (payload.has("token")) {
            config.appToken = payload.getString("token")
        }

        return payload
    }

    // Granular Play-by-Play
    suspend fun getUploadStatus(uploadId: String): JSONObject = request(
        method = "GET",
        path = "/api/v1/client/uploads/$uploadId",
        headers = tokenHeaders(),
    )

    suspend fun uploadVideoAndCreateGame(
        name: String,
        videoFile: File,
        homeTeam: String,
        awayTeam: String,
        venue: String,
        location: String,
        description: String? = null,
    ): JSONObject = withContext(Dispatchers.IO) {
        require(videoFile.exists()) { "Video file does not exist: ${videoFile.path}" }

        val bodyBuilder = MultipartBody.Builder()
            .setType(MultipartBody.FORM)
            .addFormDataPart("name", name)
            .addFormDataPart("homeTeam", homeTeam)
            .addFormDataPart("awayTeam", awayTeam)
            .addFormDataPart("venue", venue)
            .addFormDataPart("location", location)
            .addFormDataPart(
                "video",
                videoFile.name,
                videoFile.asRequestBody("application/octet-stream".toMediaType()),
            )

        if (!description.isNullOrBlank()) {
            bodyBuilder.addFormDataPart("description", description)
        }

        execute(
            Request.Builder()
                .url(buildUrl("/api/v1/client/uploads", emptyMap()))
                .headers(tokenHeaders(includeAccept = false).toHeaders())
                .post(bodyBuilder.build())
                .build(),
        )
    }

    suspend fun getGame(gameId: String): JSONObject = request(
        method = "GET",
        path = "/api/v1/client/games/$gameId",
        headers = tokenHeaders(),
    )

    suspend fun listGames(limit: Int = 10, page: Int = 1): JSONObject = request(
        method = "GET",
        path = "/api/v1/client/games",
        headers = tokenHeaders(),
        query = mapOf("limit" to limit.toString(), "page" to page.toString()),
    )

    // Aggregated Game Recaps
    suspend fun getGameRecapScore(gameId: String): JSONObject = request(
        method = "GET",
        path = "/api/v1/client/game-recap/$gameId/score",
        headers = tokenHeaders(),
    )

    suspend fun getGameRecapScoringSummary(gameId: String): JSONObject = request(
        method = "GET",
        path = "/api/v1/client/game-recap/$gameId/scoring-summary",
        headers = tokenHeaders(),
    )

    suspend fun getGameRecapTeamStats(gameId: String): JSONObject = request(
        method = "GET",
        path = "/api/v1/client/game-recap/$gameId/team-stats",
        headers = tokenHeaders(),
    )

    private suspend fun request(
        method: String,
        path: String,
        headers: Map<String, String>,
        query: Map<String, String> = emptyMap(),
        body: RequestBody? = null,
    ): JSONObject = withContext(Dispatchers.IO) {
        val builder = Request.Builder()
            .url(buildUrl(path, query))
            .headers(headers.toHeaders())

        when (method.uppercase()) {
            "GET" -> builder.get()
            "POST" -> builder.post(body ?: ByteArray(0).asRequestBody())
            "PATCH" -> builder.patch(body ?: ByteArray(0).asRequestBody())
            "DELETE" -> builder.delete(body)
            else -> throw IllegalArgumentException("Unsupported method: $method")
        }

        execute(builder.build())
    }

    private fun execute(request: Request): JSONObject {
        httpClient.newCall(request).execute().use { response ->
            val bodyString = response.body?.string().orEmpty().ifBlank { "{}" }
            val payload = JSONObject(bodyString)

            if (!response.isSuccessful) {
                val message = payload.optString("message", "Request failed")
                throw ApiException(response.code, bodyString, message)
            }

            return payload
        }
    }

    private fun buildUrl(path: String, query: Map<String, String>): HttpUrl {
        val parsed = (config.baseUrl + path).toHttpUrlOrNull()
            ?: throw IllegalStateException("Invalid URL: ${config.baseUrl}$path")

        val builder = parsed.newBuilder()
        for ((key, value) in query) {
            builder.addQueryParameter(key, value)
        }

        return builder.build()
    }

    private fun tokenHeaders(includeAccept: Boolean = true): Map<String, String> {
        val appId = requireNotNull(config.appId) { "Missing VICTORYCODE_APP_ID" }
        val appToken = requireNotNull(config.appToken) { "Missing VICTORYCODE_APP_TOKEN" }

        val headers = linkedMapOf(
            "App-Id" to appId,
            "App-Token" to appToken,
        )

        if (includeAccept) {
            headers["Accept"] = "application/json"
        }

        return headers
    }

    private fun Map<String, String>.toHeaders(): okhttp3.Headers {
        val builder = okhttp3.Headers.Builder()
        for ((key, value) in this) {
            builder.add(key, value)
        }
        return builder.build()
    }
}
