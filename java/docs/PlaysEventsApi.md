# PlaysEventsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPlayById**](PlaysEventsApi.md#getPlayById) | **GET** /api/v1/client/plays/{playId} | Get the single Play Clip |
| [**getPlaysOfGame**](PlaysEventsApi.md#getPlaysOfGame) | **GET** /api/v1/client/game/{gameId}/plays | Get a list of all plays for a game |
| [**getPlaysOfVideo**](PlaysEventsApi.md#getPlaysOfVideo) | **GET** /api/v1/client/videos/{videoId}/plays | Get a list of play clips for a video |


<a id="getPlayById"></a>
# **getPlayById**
> PlayClipListItemDto getPlayById(playId)

Get the single Play Clip

Retrieves the complete metadata for a single play clip by its unique ID.

### Example
```java
// Import classes:
import com.tactixai.victorycode.sdk.ApiClient;
import com.tactixai.victorycode.sdk.ApiException;
import com.tactixai.victorycode.sdk.Configuration;
import com.tactixai.victorycode.sdk.auth.*;
import com.tactixai.victorycode.sdk.models.*;
import com.tactixai.victorycode.sdk.api.PlaysEventsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://sandbox.api.tactixai.com");
    
    // Configure HTTP bearer authorization: Client-App-Token
    HttpBearerAuth Client-App-Token = (HttpBearerAuth) defaultClient.getAuthentication("Client-App-Token");
    Client-App-Token.setBearerToken("BEARER TOKEN");

    // Configure API key authorization: Client-App-Id
    ApiKeyAuth Client-App-Id = (ApiKeyAuth) defaultClient.getAuthentication("Client-App-Id");
    Client-App-Id.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Client-App-Id.setApiKeyPrefix("Token");

    PlaysEventsApi apiInstance = new PlaysEventsApi(defaultClient);
    String playId = "playId_example"; // String | 
    try {
      PlayClipListItemDto result = apiInstance.getPlayById(playId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PlaysEventsApi#getPlayById");
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
| **playId** | **String**|  | |

### Return type

[**PlayClipListItemDto**](PlayClipListItemDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful retrieval of play clip details |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

<a id="getPlaysOfGame"></a>
# **getPlaysOfGame**
> ListGameAllPlaysResponseDto getPlaysOfGame(gameId, limit, offset, search, down, distanceZone, playType)

Get a list of all plays for a game

Retrieves a paginated list of all plays for a given game. The results can be filtered by various play attributes.

### Example
```java
// Import classes:
import com.tactixai.victorycode.sdk.ApiClient;
import com.tactixai.victorycode.sdk.ApiException;
import com.tactixai.victorycode.sdk.Configuration;
import com.tactixai.victorycode.sdk.auth.*;
import com.tactixai.victorycode.sdk.models.*;
import com.tactixai.victorycode.sdk.api.PlaysEventsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://sandbox.api.tactixai.com");
    
    // Configure HTTP bearer authorization: Client-App-Token
    HttpBearerAuth Client-App-Token = (HttpBearerAuth) defaultClient.getAuthentication("Client-App-Token");
    Client-App-Token.setBearerToken("BEARER TOKEN");

    // Configure API key authorization: Client-App-Id
    ApiKeyAuth Client-App-Id = (ApiKeyAuth) defaultClient.getAuthentication("Client-App-Id");
    Client-App-Id.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Client-App-Id.setApiKeyPrefix("Token");

    PlaysEventsApi apiInstance = new PlaysEventsApi(defaultClient);
    String gameId = "gameId_example"; // String | 
    BigDecimal limit = new BigDecimal("50"); // BigDecimal | The number of results to return per page.
    BigDecimal offset = new BigDecimal("0"); // BigDecimal | The number of results to skip for pagination.
    String search = "search_example"; // String | 
    String down = "1"; // String | Filter by down number
    String distanceZone = "SHORT"; // String | Filter by distance zone (yards to go)
    String playType = "RUN"; // String | Filter by analyzed play type
    try {
      ListGameAllPlaysResponseDto result = apiInstance.getPlaysOfGame(gameId, limit, offset, search, down, distanceZone, playType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PlaysEventsApi#getPlaysOfGame");
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
| **limit** | **BigDecimal**| The number of results to return per page. | [optional] [default to 50] |
| **offset** | **BigDecimal**| The number of results to skip for pagination. | [optional] [default to 0] |
| **search** | **String**|  | [optional] |
| **down** | **String**| Filter by down number | [optional] [enum: 1, 2, 3, 4] |
| **distanceZone** | **String**| Filter by distance zone (yards to go) | [optional] [enum: SHORT, MEDIUM, LONG, X_LONG] |
| **playType** | **String**| Filter by analyzed play type | [optional] [enum: RUN, PASS, FIELD_GOAL, KICKOFF, PUNT, EXTRA_POINT, TWO_POINT_CONVERSION, NO_PLAY, UNIDENTIFIABLE] |

### Return type

[**ListGameAllPlaysResponseDto**](ListGameAllPlaysResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A paginated list of plays. |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

<a id="getPlaysOfVideo"></a>
# **getPlaysOfVideo**
> ListPlayClipsResponseDto getPlaysOfVideo(videoId, limit, offset, search, down, distanceZone, playType)

Get a list of play clips for a video

Retrieves a paginated list of all play clips for a given video. The results can be filtered by various play attributes.

### Example
```java
// Import classes:
import com.tactixai.victorycode.sdk.ApiClient;
import com.tactixai.victorycode.sdk.ApiException;
import com.tactixai.victorycode.sdk.Configuration;
import com.tactixai.victorycode.sdk.auth.*;
import com.tactixai.victorycode.sdk.models.*;
import com.tactixai.victorycode.sdk.api.PlaysEventsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://sandbox.api.tactixai.com");
    
    // Configure HTTP bearer authorization: Client-App-Token
    HttpBearerAuth Client-App-Token = (HttpBearerAuth) defaultClient.getAuthentication("Client-App-Token");
    Client-App-Token.setBearerToken("BEARER TOKEN");

    // Configure API key authorization: Client-App-Id
    ApiKeyAuth Client-App-Id = (ApiKeyAuth) defaultClient.getAuthentication("Client-App-Id");
    Client-App-Id.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Client-App-Id.setApiKeyPrefix("Token");

    PlaysEventsApi apiInstance = new PlaysEventsApi(defaultClient);
    String videoId = "videoId_example"; // String | 
    BigDecimal limit = new BigDecimal("50"); // BigDecimal | The number of results to return per page.
    BigDecimal offset = new BigDecimal("0"); // BigDecimal | The number of results to skip for pagination.
    String search = "search_example"; // String | 
    String down = "1"; // String | Filter by down number
    String distanceZone = "SHORT"; // String | Filter by distance zone (yards to go)
    String playType = "RUN"; // String | Filter by analyzed play type
    try {
      ListPlayClipsResponseDto result = apiInstance.getPlaysOfVideo(videoId, limit, offset, search, down, distanceZone, playType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PlaysEventsApi#getPlaysOfVideo");
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
| **videoId** | **String**|  | |
| **limit** | **BigDecimal**| The number of results to return per page. | [optional] [default to 50] |
| **offset** | **BigDecimal**| The number of results to skip for pagination. | [optional] [default to 0] |
| **search** | **String**|  | [optional] |
| **down** | **String**| Filter by down number | [optional] [enum: 1, 2, 3, 4] |
| **distanceZone** | **String**| Filter by distance zone (yards to go) | [optional] [enum: SHORT, MEDIUM, LONG, X_LONG] |
| **playType** | **String**| Filter by analyzed play type | [optional] [enum: RUN, PASS, FIELD_GOAL, KICKOFF, PUNT, EXTRA_POINT, TWO_POINT_CONVERSION, NO_PLAY, UNIDENTIFIABLE] |

### Return type

[**ListPlayClipsResponseDto**](ListPlayClipsResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A paginated list of plays. |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

