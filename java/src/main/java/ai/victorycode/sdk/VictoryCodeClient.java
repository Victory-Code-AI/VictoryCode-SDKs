package ai.victorycode.sdk;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.Map;
import okhttp3.HttpUrl;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public final class VictoryCodeClient {
  private static final MediaType OCTET_STREAM = MediaType.parse("application/octet-stream");

  private final VictoryCodeConfig config;
  private final OkHttpClient http;
  private final ObjectMapper mapper;

  private String appToken;

  public VictoryCodeClient(VictoryCodeConfig config) {
    this.config = config;
    this.http = new OkHttpClient.Builder()
        .callTimeout(config.getTimeout())
        .build();
    this.mapper = new ObjectMapper();
    this.appToken = config.getAppToken();
  }

  public JsonNode generateAccessToken() throws IOException {
    String appId = require(config.getAppId(), "VICTORYCODE_APP_ID");
    String appSecret = require(config.getAppSecret(), "VICTORYCODE_APP_SECRET");

    Request request = new Request.Builder()
        .url(buildUrl("/api/v1/client/auth/token", Map.of()))
        .addHeader("app-id", appId)
        .addHeader("app-secret", appSecret)
        .get()
        .build();

    JsonNode payload = execute(request);
    if (payload.has("token")) {
      this.appToken = payload.get("token").asText();
    }
    return payload;
  }

  // Granular Play-by-Play
  public JsonNode getUploadStatus(String uploadId) throws IOException {
    Request request = requestBuilder("/api/v1/client/uploads/" + uploadId)
        .get()
        .build();
    return execute(request);
  }

  public JsonNode uploadVideoAndCreateGame(UploadVideoRequest input) throws IOException {
    if (input.videoPath() == null || !input.videoPath().toFile().exists()) {
      throw new IllegalArgumentException("videoPath must point to an existing file");
    }

    MultipartBody.Builder multipart = new MultipartBody.Builder().setType(MultipartBody.FORM)
        .addFormDataPart("name", input.name())
        .addFormDataPart("homeTeam", input.homeTeam())
        .addFormDataPart("awayTeam", input.awayTeam())
        .addFormDataPart("venue", input.venue())
        .addFormDataPart("location", input.location())
        .addFormDataPart(
            "video",
            input.videoPath().getFileName().toString(),
            RequestBody.create(input.videoPath().toFile(), OCTET_STREAM)
        );

    if (input.description() != null && !input.description().isBlank()) {
      multipart.addFormDataPart("description", input.description());
    }

    Request request = requestBuilder("/api/v1/client/uploads")
        .post(multipart.build())
        .build();
    return execute(request);
  }

  public JsonNode getGame(String gameId) throws IOException {
    Request request = requestBuilder("/api/v1/client/games/" + gameId)
        .get()
        .build();
    return execute(request);
  }

  public JsonNode listGames(int limit, int page) throws IOException {
    Map<String, String> query = new LinkedHashMap<>();
    query.put("limit", String.valueOf(limit));
    query.put("page", String.valueOf(page));

    Request request = requestBuilder("/api/v1/client/games", query)
        .get()
        .build();
    return execute(request);
  }

  // Aggregated Game Recaps
  public JsonNode getGameRecapScore(String gameId) throws IOException {
    Request request = requestBuilder("/api/v1/client/game-recap/" + gameId + "/score")
        .get()
        .build();
    return execute(request);
  }

  public JsonNode getGameRecapScoringSummary(String gameId) throws IOException {
    Request request = requestBuilder("/api/v1/client/game-recap/" + gameId + "/scoring-summary")
        .get()
        .build();
    return execute(request);
  }

  public JsonNode getGameRecapTeamStats(String gameId) throws IOException {
    Request request = requestBuilder("/api/v1/client/game-recap/" + gameId + "/team-stats")
        .get()
        .build();
    return execute(request);
  }

  private Request.Builder requestBuilder(String path) {
    return requestBuilder(path, Map.of());
  }

  private Request.Builder requestBuilder(String path, Map<String, String> query) {
    String token = require(this.appToken, "VICTORYCODE_APP_TOKEN");
    String appId = require(config.getAppId(), "VICTORYCODE_APP_ID");

    return new Request.Builder()
        .url(buildUrl(path, query))
        .addHeader("App-Id", appId)
        .addHeader("App-Token", token)
        .addHeader("Accept", "application/json");
  }

  private HttpUrl buildUrl(String path, Map<String, String> query) {
    HttpUrl base = HttpUrl.parse(config.getBaseUrl() + path);
    if (base == null) {
      throw new IllegalStateException("Invalid URL: " + config.getBaseUrl() + path);
    }

    HttpUrl.Builder builder = base.newBuilder();
    for (Map.Entry<String, String> entry : query.entrySet()) {
      builder.addQueryParameter(entry.getKey(), entry.getValue());
    }
    return builder.build();
  }

  private JsonNode execute(Request request) throws IOException {
    try (Response response = http.newCall(request).execute()) {
      String responseBody = response.body() != null ? response.body().string() : "{}";
      JsonNode payload = mapper.readTree(responseBody.isBlank() ? "{}" : responseBody);

      if (!response.isSuccessful()) {
        String message = payload.has("message")
            ? payload.get("message").asText()
            : "Request failed";
        throw new ApiException(response.code(), message, responseBody);
      }

      return payload;
    }
  }

  private static String require(String value, String key) {
    if (value == null || value.isBlank()) {
      throw new IllegalStateException("Missing required configuration: " + key);
    }
    return value;
  }
}
