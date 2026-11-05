// Hand-written helper (overrides/java): survives regeneration.
package com.tactixai.victorycode.sdk;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
import java.util.concurrent.ThreadLocalRandom;
import okhttp3.Interceptor;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

/**
 * An {@link ApiClient} that handles authentication and throttling for you.
 *
 * <ul>
 *   <li>Gets an access token with your App-Id and App-Secret, reuses it until shortly before it
 *       expires (tokens last 1 hour), and gets a new one after a 401.
 *   <li>Retries {@code 429 Too Many Requests} with exponential backoff, and retries server errors
 *       and network failures for requests that are safe to repeat (never a POST).
 * </ul>
 *
 * <pre>{@code
 * VictoryCodeClient client = new VictoryCodeClient(appId, appSecret, "https://api.tactixai.com");
 * ListGamesResponseDto games = new GamesApi(client).getGames(10, 0, null);
 * }</pre>
 *
 * <p>Thread-safe: share one instance.
 */
public class VictoryCodeClient extends ApiClient {
  static final String TOKEN_PATH = "/api/v1/client/auth/token";
  private static final long REFRESH_MARGIN_MILLIS = 60_000;
  private static final Set<String> IDEMPOTENT_METHODS =
      Collections.unmodifiableSet(new HashSet<>(Arrays.asList("GET", "HEAD", "OPTIONS", "PUT", "DELETE")));
  private static final Set<Integer> RETRYABLE_SERVER_ERRORS =
      Collections.unmodifiableSet(new HashSet<>(Arrays.asList(500, 502, 503, 504)));

  private final String appId;
  private final String appSecret;
  private final int maxRetries;
  private final OkHttpClient plainClient;
  private String token;
  private long refreshAt;

  /** Uses the SDK's default base URL (Sandbox). */
  public VictoryCodeClient(String appId, String appSecret) {
    this(appId, appSecret, null, 4);
  }

  /** @param basePath API base URL, e.g. https://api.tactixai.com */
  public VictoryCodeClient(String appId, String appSecret, String basePath) {
    this(appId, appSecret, basePath, 4);
  }

  /**
   * @param basePath API base URL, or null for the SDK's default (Sandbox)
   * @param maxRetries how many times a throttled or failed request is retried
   */
  public VictoryCodeClient(String appId, String appSecret, String basePath, int maxRetries) {
    super();
    this.appId = appId;
    this.appSecret = appSecret;
    this.maxRetries = maxRetries;
    if (basePath != null) setBasePath(basePath.replaceAll("/+$", ""));
    this.plainClient = getHttpClient().newBuilder().addInterceptor(this::retry).build();
    setHttpClient(getHttpClient().newBuilder().addInterceptor(this::authenticateAndRetry).build());
  }

  /** The current access token, requesting a new one when needed. */
  public synchronized String accessToken() throws IOException {
    if (token != null && System.currentTimeMillis() < refreshAt) return token;
    Request request =
        new Request.Builder()
            .url(getBasePath() + TOKEN_PATH)
            .header("App-Id", appId)
            .header("App-Secret", appSecret)
            .header("Accept", "application/json")
            .build();
    try (Response response = plainClient.newCall(request).execute()) {
      ResponseBody body = response.body();
      if (!response.isSuccessful() || body == null) {
        throw new IOException(
            "Victory Code: could not get an access token (HTTP " + response.code() + "). Check the App-Id and App-Secret.");
      }
      JsonObject json = JsonParser.parseString(body.string()).getAsJsonObject();
      if (!json.has("accessToken")) throw new IOException("Victory Code: the token response has no accessToken.");
      long lifetime = (json.has("expiresIn") ? json.get("expiresIn").getAsLong() : 3600) * 1000;
      token = json.get("accessToken").getAsString();
      refreshAt = System.currentTimeMillis() + Math.max(lifetime - REFRESH_MARGIN_MILLIS, lifetime / 2);
      return token;
    }
  }

  /** Forget the cached token; the next call requests a new one. */
  public synchronized void invalidateToken() {
    token = null;
  }

  private Response authenticateAndRetry(Interceptor.Chain chain) throws IOException {
    Request request = chain.request();
    if (request.url().encodedPath().endsWith(TOKEN_PATH)) return retry(chain);
    Request authenticated = withToken(request, accessToken());
    Response response = retry(chain, authenticated);
    if (response.code() == 401) {
      // The token was revoked or expired early: get a new one and try once more.
      response.close();
      invalidateToken();
      response = retry(chain, withToken(request, accessToken()));
    }
    return response;
  }

  private Request withToken(Request request, String accessToken) {
    Request.Builder builder = request.newBuilder().header("Authorization", "Bearer " + accessToken);
    if (request.header("App-Id") == null) builder.header("App-Id", appId);
    return builder.build();
  }

  private Response retry(Interceptor.Chain chain) throws IOException {
    return retry(chain, chain.request());
  }

  private Response retry(Interceptor.Chain chain, Request request) throws IOException {
    boolean idempotent = IDEMPOTENT_METHODS.contains(request.method().toUpperCase(Locale.ROOT));
    for (int attempt = 0; ; attempt++) {
      Response response;
      try {
        response = chain.proceed(request);
      } catch (IOException error) {
        if (!idempotent || attempt >= maxRetries) throw error;
        sleep(attempt);
        continue;
      }
      boolean retryable =
          response.code() == 429 || (idempotent && RETRYABLE_SERVER_ERRORS.contains(response.code()));
      if (!retryable || attempt >= maxRetries) return response;
      response.close();
      sleep(attempt);
    }
  }

  /** About 1 s, 2 s, 4 s… capped at 30 s, with jitter. */
  private static void sleep(int attempt) throws IOException {
    long base = Math.min(1000L << Math.min(attempt, 5), 30_000L);
    long delay = (long) (base * (0.5 + ThreadLocalRandom.current().nextDouble() / 2));
    try {
      Thread.sleep(delay);
    } catch (InterruptedException interrupted) {
      Thread.currentThread().interrupt();
      throw new IOException("Interrupted while waiting to retry", interrupted);
    }
  }
}
