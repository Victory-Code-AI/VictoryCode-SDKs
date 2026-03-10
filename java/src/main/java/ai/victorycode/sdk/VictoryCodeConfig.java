package ai.victorycode.sdk;

import java.time.Duration;

public final class VictoryCodeConfig {
  private final String baseUrl;
  private final String appId;
  private final String appSecret;
  private final String appToken;
  private final Duration timeout;

  private VictoryCodeConfig(Builder builder) {
    this.baseUrl = trimTrailingSlash(required("VICTORYCODE_API_BASE_URL", builder.baseUrl));
    this.appId = firstNonBlank(builder.appId, System.getenv("VICTORYCODE_APP_ID"));
    this.appSecret = firstNonBlank(builder.appSecret, System.getenv("VICTORYCODE_APP_SECRET"));
    this.appToken = firstNonBlank(builder.appToken, System.getenv("VICTORYCODE_APP_TOKEN"));
    this.timeout = builder.timeout != null ? builder.timeout : Duration.ofSeconds(30);
  }

  public static Builder builder() {
    return new Builder();
  }

  public static VictoryCodeConfig fromEnvironment() {
    return builder().baseUrl(System.getenv("VICTORYCODE_API_BASE_URL")).build();
  }

  public String getBaseUrl() {
    return baseUrl;
  }

  public String getAppId() {
    return appId;
  }

  public String getAppSecret() {
    return appSecret;
  }

  public String getAppToken() {
    return appToken;
  }

  public Duration getTimeout() {
    return timeout;
  }

  public static final class Builder {
    private String baseUrl;
    private String appId;
    private String appSecret;
    private String appToken;
    private Duration timeout;

    public Builder baseUrl(String baseUrl) {
      this.baseUrl = baseUrl;
      return this;
    }

    public Builder appId(String appId) {
      this.appId = appId;
      return this;
    }

    public Builder appSecret(String appSecret) {
      this.appSecret = appSecret;
      return this;
    }

    public Builder appToken(String appToken) {
      this.appToken = appToken;
      return this;
    }

    public Builder timeout(Duration timeout) {
      this.timeout = timeout;
      return this;
    }

    public VictoryCodeConfig build() {
      return new VictoryCodeConfig(this);
    }
  }

  private static String required(String key, String input) {
    String resolved = firstNonBlank(input, System.getenv(key));
    if (resolved == null) {
      throw new IllegalStateException("Missing required configuration: " + key);
    }
    return resolved;
  }

  private static String firstNonBlank(String first, String second) {
    if (first != null && !first.isBlank()) {
      return first;
    }
    if (second != null && !second.isBlank()) {
      return second;
    }
    return null;
  }

  private static String trimTrailingSlash(String value) {
    return value.replaceAll("/+$", "");
  }
}
