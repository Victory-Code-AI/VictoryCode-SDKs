# PlaysEventsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getPlayById**](PlaysEventsApi.md#getPlayById) | **GET** /api/v1/client/plays/{playId} | Get the single Play Clip |
| [**getPlaysOfGame**](PlaysEventsApi.md#getPlaysOfGame) | **GET** /api/v1/client/game/{gameId}/plays | Get a list of all plays for a game |
| [**getPlaysOfVideo**](PlaysEventsApi.md#getPlaysOfVideo) | **GET** /api/v1/client/videos/{videoId}/plays | Get a list of play clips for a video |


<a id="getPlayById"></a>
# **getPlayById**
> PlayClipListItemDto getPlayById(playId)

Get the single Play Clip

Retrieves the complete metadata for a single play clip by its unique ID.

### Example
```kotlin
// Import classes:
//import com.tactixai.victorycode.sdk.infrastructure.*
//import com.tactixai.victorycode.sdk.models.*

val apiInstance = PlaysEventsApi()
val playId : kotlin.String = playId_example // kotlin.String | 
try {
    val result : PlayClipListItemDto = apiInstance.getPlayById(playId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PlaysEventsApi#getPlayById")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PlaysEventsApi#getPlayById")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **playId** | **kotlin.String**|  | |

### Return type

[**PlayClipListItemDto**](PlayClipListItemDto.md)

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

<a id="getPlaysOfGame"></a>
# **getPlaysOfGame**
> ListGameAllPlaysResponseDto getPlaysOfGame(gameId, limit, offset, search, down, distanceZone, playType)

Get a list of all plays for a game

Retrieves a paginated list of all plays for a given game. The results can be filtered by various play attributes.

### Example
```kotlin
// Import classes:
//import com.tactixai.victorycode.sdk.infrastructure.*
//import com.tactixai.victorycode.sdk.models.*

val apiInstance = PlaysEventsApi()
val gameId : kotlin.String = gameId_example // kotlin.String | 
val limit : java.math.BigDecimal = 8.14 // java.math.BigDecimal | The number of results to return per page.
val offset : java.math.BigDecimal = 8.14 // java.math.BigDecimal | The number of results to skip for pagination.
val search : kotlin.String = search_example // kotlin.String | 
val down : kotlin.String = 1 // kotlin.String | Filter by down number
val distanceZone : kotlin.String = LONG // kotlin.String | Filter by distance zone (yards to go)
val playType : kotlin.String = PASS // kotlin.String | Filter by analyzed play type
try {
    val result : ListGameAllPlaysResponseDto = apiInstance.getPlaysOfGame(gameId, limit, offset, search, down, distanceZone, playType)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PlaysEventsApi#getPlaysOfGame")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PlaysEventsApi#getPlaysOfGame")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **gameId** | **kotlin.String**|  | |
| **limit** | **java.math.BigDecimal**| The number of results to return per page. | [optional] [default to 50] |
| **offset** | **java.math.BigDecimal**| The number of results to skip for pagination. | [optional] [default to 0] |
| **search** | **kotlin.String**|  | [optional] |
| **down** | **kotlin.String**| Filter by down number | [optional] [enum: 1, 2, 3, 4] |
| **distanceZone** | **kotlin.String**| Filter by distance zone (yards to go) | [optional] [enum: SHORT, MEDIUM, LONG, X_LONG] |
| **playType** | **kotlin.String**| Filter by analyzed play type | [optional] [enum: RUN, PASS, FIELD_GOAL, KICKOFF, PUNT, EXTRA_POINT, TWO_POINT_CONVERSION, NO_PLAY, UNIDENTIFIABLE] |

### Return type

[**ListGameAllPlaysResponseDto**](ListGameAllPlaysResponseDto.md)

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

<a id="getPlaysOfVideo"></a>
# **getPlaysOfVideo**
> ListPlayClipsResponseDto getPlaysOfVideo(videoId, limit, offset, search, down, distanceZone, playType)

Get a list of play clips for a video

Retrieves a paginated list of all play clips for a given video. The results can be filtered by various play attributes.

### Example
```kotlin
// Import classes:
//import com.tactixai.victorycode.sdk.infrastructure.*
//import com.tactixai.victorycode.sdk.models.*

val apiInstance = PlaysEventsApi()
val videoId : kotlin.String = videoId_example // kotlin.String | 
val limit : java.math.BigDecimal = 8.14 // java.math.BigDecimal | The number of results to return per page.
val offset : java.math.BigDecimal = 8.14 // java.math.BigDecimal | The number of results to skip for pagination.
val search : kotlin.String = search_example // kotlin.String | 
val down : kotlin.String = 1 // kotlin.String | Filter by down number
val distanceZone : kotlin.String = LONG // kotlin.String | Filter by distance zone (yards to go)
val playType : kotlin.String = PASS // kotlin.String | Filter by analyzed play type
try {
    val result : ListPlayClipsResponseDto = apiInstance.getPlaysOfVideo(videoId, limit, offset, search, down, distanceZone, playType)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PlaysEventsApi#getPlaysOfVideo")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PlaysEventsApi#getPlaysOfVideo")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **videoId** | **kotlin.String**|  | |
| **limit** | **java.math.BigDecimal**| The number of results to return per page. | [optional] [default to 50] |
| **offset** | **java.math.BigDecimal**| The number of results to skip for pagination. | [optional] [default to 0] |
| **search** | **kotlin.String**|  | [optional] |
| **down** | **kotlin.String**| Filter by down number | [optional] [enum: 1, 2, 3, 4] |
| **distanceZone** | **kotlin.String**| Filter by distance zone (yards to go) | [optional] [enum: SHORT, MEDIUM, LONG, X_LONG] |
| **playType** | **kotlin.String**| Filter by analyzed play type | [optional] [enum: RUN, PASS, FIELD_GOAL, KICKOFF, PUNT, EXTRA_POINT, TWO_POINT_CONVERSION, NO_PLAY, UNIDENTIFIABLE] |

### Return type

[**ListPlayClipsResponseDto**](ListPlayClipsResponseDto.md)

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

