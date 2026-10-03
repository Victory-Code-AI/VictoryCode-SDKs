# GameRecapApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getGameRecapScore**](GameRecapApi.md#getGameRecapScore) | **GET** /api/v1/client/game-recap/{gameId}/score | Get the Game Recap Score for a specific Game |
| [**getGameRecapScoringSummary**](GameRecapApi.md#getGameRecapScoringSummary) | **GET** /api/v1/client/game-recap/{gameId}/scoring-summary | Get the Game Recap Scoring Summary for a specific Game. |
| [**getGameRecapTeamStats**](GameRecapApi.md#getGameRecapTeamStats) | **GET** /api/v1/client/game-recap/{gameId}/team-stats | Get the Game Recap Team Stats for a specific Game. |


<a id="getGameRecapScore"></a>
# **getGameRecapScore**
> GetGameRecapScoreResponse getGameRecapScore(gameId)

Get the Game Recap Score for a specific Game

Retrieves the overall score for the specified game. This includes the final scoreline and also include period-by-period (quarters) breakdowns.

### Example
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.GameRecapApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://sandbox.api.tactixai.com");
    
    // Configure API key authorization: AppToken
    ApiKeyAuth AppToken = (ApiKeyAuth) defaultClient.getAuthentication("AppToken");
    AppToken.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //AppToken.setApiKeyPrefix("Token");

    // Configure API key authorization: AppId
    ApiKeyAuth AppId = (ApiKeyAuth) defaultClient.getAuthentication("AppId");
    AppId.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //AppId.setApiKeyPrefix("Token");

    GameRecapApi apiInstance = new GameRecapApi(defaultClient);
    String gameId = "gameId_example"; // String | 
    try {
      GetGameRecapScoreResponse result = apiInstance.getGameRecapScore(gameId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GameRecapApi#getGameRecapScore");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **gameId** | **String**|  | |

### Return type

[**GetGameRecapScoreResponse**](GetGameRecapScoreResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="getGameRecapScoringSummary"></a>
# **getGameRecapScoringSummary**
> GetGameRecapScoringSummaryResponse getGameRecapScoringSummary(gameId)

Get the Game Recap Scoring Summary for a specific Game.

Retrieves a chronological summary of all scoring plays for the specified game. Each record is linked to a playId, enabling clients to correlate the scoring event with detailed play data.

### Example
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.GameRecapApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://sandbox.api.tactixai.com");
    
    // Configure API key authorization: AppToken
    ApiKeyAuth AppToken = (ApiKeyAuth) defaultClient.getAuthentication("AppToken");
    AppToken.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //AppToken.setApiKeyPrefix("Token");

    // Configure API key authorization: AppId
    ApiKeyAuth AppId = (ApiKeyAuth) defaultClient.getAuthentication("AppId");
    AppId.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //AppId.setApiKeyPrefix("Token");

    GameRecapApi apiInstance = new GameRecapApi(defaultClient);
    String gameId = "gameId_example"; // String | 
    try {
      GetGameRecapScoringSummaryResponse result = apiInstance.getGameRecapScoringSummary(gameId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GameRecapApi#getGameRecapScoringSummary");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **gameId** | **String**|  | |

### Return type

[**GetGameRecapScoringSummaryResponse**](GetGameRecapScoringSummaryResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="getGameRecapTeamStats"></a>
# **getGameRecapTeamStats**
> GetGameRecapTeamStatsResponse getGameRecapTeamStats(gameId)

Get the Game Recap Team Stats for a specific Game.

Retrieves a statistical summary for both the home and away teams in a specific game. The response includes key offensive and first-down metrics, allowing clients to analyze game efficiency, offensive output, and team balance between rushing and passing plays.

### Example
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.GameRecapApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://sandbox.api.tactixai.com");
    
    // Configure API key authorization: AppToken
    ApiKeyAuth AppToken = (ApiKeyAuth) defaultClient.getAuthentication("AppToken");
    AppToken.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //AppToken.setApiKeyPrefix("Token");

    // Configure API key authorization: AppId
    ApiKeyAuth AppId = (ApiKeyAuth) defaultClient.getAuthentication("AppId");
    AppId.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //AppId.setApiKeyPrefix("Token");

    GameRecapApi apiInstance = new GameRecapApi(defaultClient);
    String gameId = "gameId_example"; // String | 
    try {
      GetGameRecapTeamStatsResponse result = apiInstance.getGameRecapTeamStats(gameId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GameRecapApi#getGameRecapTeamStats");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **gameId** | **String**|  | |

### Return type

[**GetGameRecapTeamStatsResponse**](GetGameRecapTeamStatsResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

