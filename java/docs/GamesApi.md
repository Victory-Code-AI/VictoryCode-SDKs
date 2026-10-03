# GamesApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addVideoToGame**](GamesApi.md#addVideoToGame) | **POST** /api/v1/client/games/{gameId}/video | Add new video to a game |
| [**createGameWithVideoUrl**](GamesApi.md#createGameWithVideoUrl) | **POST** /api/v1/client/games | Create a new Game with Video URL |
| [**getGameDetails**](GamesApi.md#getGameDetails) | **GET** /api/v1/client/games/{gameId} | Get a Single Game. |
| [**getGames**](GamesApi.md#getGames) | **GET** /api/v1/client/games | List and Filter Games. |
| [**getVideosOfGame**](GamesApi.md#getVideosOfGame) | **GET** /api/v1/client/games/{gameId}/videos | Get a list of videos of a game |


<a id="addVideoToGame"></a>
# **addVideoToGame**
> SingleVideoResponseDto addVideoToGame(gameId, addVideoToGameWithS3LinkDto)

Add new video to a game

Adds a new video to game.

### Example
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.GamesApi;

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

    GamesApi apiInstance = new GamesApi(defaultClient);
    String gameId = "gameId_example"; // String | 
    AddVideoToGameWithS3LinkDto addVideoToGameWithS3LinkDto = new AddVideoToGameWithS3LinkDto(); // AddVideoToGameWithS3LinkDto | 
    try {
      SingleVideoResponseDto result = apiInstance.addVideoToGame(gameId, addVideoToGameWithS3LinkDto);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GamesApi#addVideoToGame");
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
| **addVideoToGameWithS3LinkDto** | [**AddVideoToGameWithS3LinkDto**](AddVideoToGameWithS3LinkDto.md)|  | |

### Return type

[**SingleVideoResponseDto**](SingleVideoResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Video added successfully |  -  |
| **400** | Validation error |  -  |
| **404** | Not found |  -  |

<a id="createGameWithVideoUrl"></a>
# **createGameWithVideoUrl**
> GameDetailsResponse createGameWithVideoUrl(clientCreateGameWithVideoUrlDto)

Create a new Game with Video URL

Registers a new game and associates a video URL (e.g., from a third-party source) with it in a single step.

### Example
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.GamesApi;

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

    GamesApi apiInstance = new GamesApi(defaultClient);
    ClientCreateGameWithVideoUrlDto clientCreateGameWithVideoUrlDto = new ClientCreateGameWithVideoUrlDto(); // ClientCreateGameWithVideoUrlDto | 
    try {
      GameDetailsResponse result = apiInstance.createGameWithVideoUrl(clientCreateGameWithVideoUrlDto);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GamesApi#createGameWithVideoUrl");
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
| **clientCreateGameWithVideoUrlDto** | [**ClientCreateGameWithVideoUrlDto**](ClientCreateGameWithVideoUrlDto.md)|  | |

### Return type

[**GameDetailsResponse**](GameDetailsResponse.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Game created successfully |  -  |
| **400** |  |  -  |
| **409** | Name already exists |  -  |

<a id="getGameDetails"></a>
# **getGameDetails**
> GameDetailsResponse getGameDetails(gameId)

Get a Single Game.

Retrieves the core metadata for a single game, including date, time, location, and teams who participated.

### Example
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.GamesApi;

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

    GamesApi apiInstance = new GamesApi(defaultClient);
    String gameId = "gameId_example"; // String | 
    try {
      GameDetailsResponse result = apiInstance.getGameDetails(gameId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GamesApi#getGameDetails");
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

[**GameDetailsResponse**](GameDetailsResponse.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful retrieval of the core game details |  -  |
| **401** | Unauthorized |  -  |
| **404** | Game not found |  -  |

<a id="getGames"></a>
# **getGames**
> ListGamesPaginatedResponseDto getGames(limit, offset, search)

List and Filter Games.

Retrieves a paginated list of games, with optional filters for team, upload status, and date-time range.

### Example
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.GamesApi;

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

    GamesApi apiInstance = new GamesApi(defaultClient);
    BigDecimal limit = new BigDecimal("50"); // BigDecimal | The number of results to return per page.
    BigDecimal offset = new BigDecimal("0"); // BigDecimal | The number of results to skip for pagination.
    String search = "search_example"; // String | 
    try {
      ListGamesPaginatedResponseDto result = apiInstance.getGames(limit, offset, search);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GamesApi#getGames");
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
| **limit** | **BigDecimal**| The number of results to return per page. | [optional] [default to 50] |
| **offset** | **BigDecimal**| The number of results to skip for pagination. | [optional] [default to 0] |
| **search** | **String**|  | [optional] |

### Return type

[**ListGamesPaginatedResponseDto**](ListGamesPaginatedResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful retrieval of the paginated list of games |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |

<a id="getVideosOfGame"></a>
# **getVideosOfGame**
> ListVideoPaginatedResponseDto getVideosOfGame(gameId, limit, offset)

Get a list of videos of a game

Retrieves a list of videos of a game.

### Example
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.GamesApi;

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

    GamesApi apiInstance = new GamesApi(defaultClient);
    String gameId = "gameId_example"; // String | 
    BigDecimal limit = new BigDecimal("50"); // BigDecimal | The number of results to return per page.
    BigDecimal offset = new BigDecimal("0"); // BigDecimal | The number of results to skip for pagination.
    try {
      ListVideoPaginatedResponseDto result = apiInstance.getVideosOfGame(gameId, limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GamesApi#getVideosOfGame");
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

### Return type

[**ListVideoPaginatedResponseDto**](ListVideoPaginatedResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful retrieval of the list of videos of a game |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

