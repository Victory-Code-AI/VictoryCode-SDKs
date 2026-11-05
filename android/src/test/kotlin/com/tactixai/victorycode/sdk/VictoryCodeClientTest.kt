// Hand-written test (overrides/android). Runs against tests/client/mock-api.mjs when MOCK_URL is set
// (tests/client/run.sh android); does nothing otherwise.
package com.tactixai.victorycode.sdk

import com.tactixai.victorycode.sdk.apis.ClassificationApi
import com.tactixai.victorycode.sdk.apis.GamesApi
import com.tactixai.victorycode.sdk.infrastructure.ServerException
import com.tactixai.victorycode.sdk.models.CreateClassificationDto
import io.kotlintest.shouldBe
import io.kotlintest.shouldThrow
import io.kotlintest.specs.ShouldSpec
import java.math.BigDecimal
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody

class VictoryCodeClientTest : ShouldSpec() {
    private val mockUrl: String? = System.getenv("MOCK_URL")
    private val http = OkHttpClient()

    private fun mock(path: String, post: Boolean = true): Map<*, *> {
        val request = Request.Builder().url("$mockUrl/__mock/$path")
        if (post) request.post("".toRequestBody())
        http.newCall(request.build()).execute().use { response ->
            return com.tactixai.victorycode.sdk.infrastructure.Serializer.moshi
                .adapter(Map::class.java)
                .fromJson(response.body.string())!!
        }
    }

    private fun stat(name: String) = (mock("stats", post = false)[name] as Double).toInt()

    init {
        should("reuse tokens, retry throttling and never repeat a POST") {
            if (mockUrl != null) {
                mock("reset")
                val client = VictoryCodeClient("test-app", "test-secret", mockUrl)
                val games = GamesApi(client.basePath, client.httpClient)

                // 429, 429, then 200: retried with backoff, one token.
                games.getGames(BigDecimal.TEN, BigDecimal.ZERO).total.toInt() shouldBe 0
                stat("tokens") shouldBe 1
                stat("games") shouldBe 3

                // The token is reused.
                games.getGames(BigDecimal.TEN, BigDecimal.ZERO)
                stat("tokens") shouldBe 1

                // A revoked token gets a 401 once, then a new token and a retry.
                mock("revoke")
                games.getGames(BigDecimal.TEN, BigDecimal.ZERO)
                stat("tokens") shouldBe 2
                stat("unauthorized") shouldBe 1

                // A POST that fails with 503 is not sent again.
                val error =
                    shouldThrow<ServerException> {
                        ClassificationApi(client.basePath, client.httpClient)
                            .createClassification(CreateClassificationDto(name = "Varsity", description = "Test"))
                    }
                error.statusCode shouldBe 503
                stat("posts") shouldBe 1
            }
        }
    }
}
