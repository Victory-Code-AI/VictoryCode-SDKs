// Hand-written test (overrides/java). Runs against tests/client/mock-api.mjs when MOCK_URL is set
// (tests/client/run.sh java); skipped otherwise.
package com.tactixai.victorycode.sdk;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.tactixai.victorycode.sdk.api.ClassificationApi;
import com.tactixai.victorycode.sdk.api.GamesApi;
import com.tactixai.victorycode.sdk.model.CreateClassificationDto;
import java.math.BigDecimal;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import org.junit.jupiter.api.Test;

class VictoryCodeClientTest {
  private static final String MOCK = System.getenv("MOCK_URL");
  private final OkHttpClient http = new OkHttpClient();

  private JsonObject mock(String path, String method) throws Exception {
    Request.Builder request = new Request.Builder().url(MOCK + "/__mock/" + path);
    if ("POST".equals(method)) request.post(RequestBody.create("", MediaType.get("application/json")));
    try (Response response = http.newCall(request.build()).execute()) {
      return JsonParser.parseString(response.body().string()).getAsJsonObject();
    }
  }

  @Test
  void reusesTokensRetriesThrottlingAndNeverRepeatsPosts() throws Exception {
    assumeTrue(MOCK != null, "MOCK_URL not set");
    mock("reset", "POST");
    VictoryCodeClient client = new VictoryCodeClient("test-app", "test-secret", MOCK);
    GamesApi games = new GamesApi(client);

    // 429, 429, then 200: retried with backoff, one token.
    assertEquals(0, games.getGames(BigDecimal.TEN, BigDecimal.ZERO, null).getTotal().intValue());
    JsonObject stats = mock("stats", "GET");
    assertEquals(1, stats.get("tokens").getAsInt());
    assertEquals(3, stats.get("games").getAsInt());

    // The token is reused.
    games.getGames(BigDecimal.TEN, BigDecimal.ZERO, null);
    assertEquals(1, mock("stats", "GET").get("tokens").getAsInt());

    // A revoked token gets a 401 once, then a new token and a retry.
    mock("revoke", "POST");
    games.getGames(BigDecimal.TEN, BigDecimal.ZERO, null);
    stats = mock("stats", "GET");
    assertEquals(2, stats.get("tokens").getAsInt());
    assertEquals(1, stats.get("unauthorized").getAsInt());

    // A POST that fails with 503 is not sent again.
    ApiException error =
        assertThrows(
            ApiException.class,
            () -> new ClassificationApi(client).createClassification(new CreateClassificationDto().name("Varsity").description("Test")));
    assertEquals(503, error.getCode());
    assertEquals(1, mock("stats", "GET").get("posts").getAsInt());
  }
}
