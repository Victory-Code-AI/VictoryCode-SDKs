# GamesApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
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
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = GamesApi()
val gameId : kotlin.String = gameId_example // kotlin.String | 
val addVideoToGameWithS3LinkDto : AddVideoToGameWithS3LinkDto =  // AddVideoToGameWithS3LinkDto | 
try {
    val result : SingleVideoResponseDto = apiInstance.addVideoToGame(gameId, addVideoToGameWithS3LinkDto)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GamesApi#addVideoToGame")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GamesApi#addVideoToGame")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **gameId** | **kotlin.String**|  | |
| **addVideoToGameWithS3LinkDto** | [**AddVideoToGameWithS3LinkDto**](AddVideoToGameWithS3LinkDto.md)|  | |

### Return type

[**SingleVideoResponseDto**](SingleVideoResponseDto.md)

### Authorization


Configure Client-App-Token statically:
```kotlin
ApiClient.accessToken = ""
```
Configure Client-App-Token dynamically:
```kotlin
apiInstance.accessTokenProvider = { "" }
```
Configure Client-App-Id:
    ApiClient.apiKey["App-Id"] = ""
    ApiClient.apiKeyPrefix["App-Id"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="createGameWithVideoUrl"></a>
# **createGameWithVideoUrl**
> GameDetailsResponse createGameWithVideoUrl(clientCreateGameWithVideoUrlDto)

Create a new Game with Video URL

Registers a new game and associates a video URL (e.g., from a third-party source) with it in a single step.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = GamesApi()
val clientCreateGameWithVideoUrlDto : ClientCreateGameWithVideoUrlDto =  // ClientCreateGameWithVideoUrlDto | 
try {
    val result : GameDetailsResponse = apiInstance.createGameWithVideoUrl(clientCreateGameWithVideoUrlDto)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GamesApi#createGameWithVideoUrl")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GamesApi#createGameWithVideoUrl")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **clientCreateGameWithVideoUrlDto** | [**ClientCreateGameWithVideoUrlDto**](ClientCreateGameWithVideoUrlDto.md)|  | |

### Return type

[**GameDetailsResponse**](GameDetailsResponse.md)

### Authorization


Configure Client-App-Token statically:
```kotlin
ApiClient.accessToken = ""
```
Configure Client-App-Token dynamically:
```kotlin
apiInstance.accessTokenProvider = { "" }
```
Configure Client-App-Id:
    ApiClient.apiKey["App-Id"] = ""
    ApiClient.apiKeyPrefix["App-Id"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="getGameDetails"></a>
# **getGameDetails**
> GameDetailsResponse getGameDetails(gameId)

Get a Single Game.

Retrieves the core metadata for a single game, including date, time, location, and teams who participated.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = GamesApi()
val gameId : kotlin.String = gameId_example // kotlin.String | 
try {
    val result : GameDetailsResponse = apiInstance.getGameDetails(gameId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GamesApi#getGameDetails")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GamesApi#getGameDetails")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **gameId** | **kotlin.String**|  | |

### Return type

[**GameDetailsResponse**](GameDetailsResponse.md)

### Authorization


Configure Client-App-Token statically:
```kotlin
ApiClient.accessToken = ""
```
Configure Client-App-Token dynamically:
```kotlin
apiInstance.accessTokenProvider = { "" }
```
Configure Client-App-Id:
    ApiClient.apiKey["App-Id"] = ""
    ApiClient.apiKeyPrefix["App-Id"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getGames"></a>
# **getGames**
> ListGamesPaginatedResponseDto getGames(limit, offset, search)

List and Filter Games.

Retrieves a paginated list of games, with optional filters for team, upload status, and date-time range.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = GamesApi()
val limit : java.math.BigDecimal = 8.14 // java.math.BigDecimal | The number of results to return per page.
val offset : java.math.BigDecimal = 8.14 // java.math.BigDecimal | The number of results to skip for pagination.
val search : kotlin.String = search_example // kotlin.String | 
try {
    val result : ListGamesPaginatedResponseDto = apiInstance.getGames(limit, offset, search)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GamesApi#getGames")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GamesApi#getGames")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **java.math.BigDecimal**| The number of results to return per page. | [optional] [default to 50] |
| **offset** | **java.math.BigDecimal**| The number of results to skip for pagination. | [optional] [default to 0] |
| **search** | **kotlin.String**|  | [optional] |

### Return type

[**ListGamesPaginatedResponseDto**](ListGamesPaginatedResponseDto.md)

### Authorization


Configure Client-App-Token statically:
```kotlin
ApiClient.accessToken = ""
```
Configure Client-App-Token dynamically:
```kotlin
apiInstance.accessTokenProvider = { "" }
```
Configure Client-App-Id:
    ApiClient.apiKey["App-Id"] = ""
    ApiClient.apiKeyPrefix["App-Id"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getVideosOfGame"></a>
# **getVideosOfGame**
> ListVideoPaginatedResponseDto getVideosOfGame(gameId, limit, offset)

Get a list of videos of a game

Retrieves a list of videos of a game.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = GamesApi()
val gameId : kotlin.String = gameId_example // kotlin.String | 
val limit : java.math.BigDecimal = 8.14 // java.math.BigDecimal | The number of results to return per page.
val offset : java.math.BigDecimal = 8.14 // java.math.BigDecimal | The number of results to skip for pagination.
try {
    val result : ListVideoPaginatedResponseDto = apiInstance.getVideosOfGame(gameId, limit, offset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GamesApi#getVideosOfGame")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GamesApi#getVideosOfGame")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **gameId** | **kotlin.String**|  | |
| **limit** | **java.math.BigDecimal**| The number of results to return per page. | [optional] [default to 50] |
| **offset** | **java.math.BigDecimal**| The number of results to skip for pagination. | [optional] [default to 0] |

### Return type

[**ListVideoPaginatedResponseDto**](ListVideoPaginatedResponseDto.md)

### Authorization


Configure Client-App-Token statically:
```kotlin
ApiClient.accessToken = ""
```
Configure Client-App-Token dynamically:
```kotlin
apiInstance.accessTokenProvider = { "" }
```
Configure Client-App-Id:
    ApiClient.apiKey["App-Id"] = ""
    ApiClient.apiKeyPrefix["App-Id"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

