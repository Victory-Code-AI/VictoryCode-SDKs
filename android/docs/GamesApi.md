# GamesApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getGame**](GamesApi.md#getGame) | **GET** /api/v1/client/games/{gameId} | Get single game |
| [**listGames**](GamesApi.md#listGames) | **GET** /api/v1/client/games | Get All Games |


<a id="getGame"></a>
# **getGame**
> GetGameResponse getGame(gameId)

Get single game

Retrieves metadata for a specific game by gameId. The response includes core identifiers, participating teams, venue/location, timestamps, processing status, and any available high-level attributes required to render a game detail view.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = GamesApi()
val gameId : kotlin.String = gameId_example // kotlin.String | 
try {
    val result : GetGameResponse = apiInstance.getGame(gameId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GamesApi#getGame")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GamesApi#getGame")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **gameId** | **kotlin.String**|  | |

### Return type

[**GetGameResponse**](GetGameResponse.md)

### Authorization


Configure AppToken:
    ApiClient.apiKey["App-Token"] = ""
    ApiClient.apiKeyPrefix["App-Token"] = ""
Configure AppId:
    ApiClient.apiKey["App-Id"] = ""
    ApiClient.apiKeyPrefix["App-Id"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="listGames"></a>
# **listGames**
> ListGamesResponse listGames(limit, page)

Get All Games

Returns a paginated list of games accessible to the client. Useful for building game pickers and dashboards, or to obtain a gameId before fetching detailed resources.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = GamesApi()
val limit : kotlin.Int = 10 // kotlin.Int | 
val page : kotlin.Int = 1 // kotlin.Int | 
try {
    val result : ListGamesResponse = apiInstance.listGames(limit, page)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GamesApi#listGames")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GamesApi#listGames")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **kotlin.Int**|  | [optional] |
| **page** | **kotlin.Int**|  | [optional] |

### Return type

[**ListGamesResponse**](ListGamesResponse.md)

### Authorization


Configure AppToken:
    ApiClient.apiKey["App-Token"] = ""
    ApiClient.apiKeyPrefix["App-Token"] = ""
Configure AppId:
    ApiClient.apiKey["App-Id"] = ""
    ApiClient.apiKeyPrefix["App-Id"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

