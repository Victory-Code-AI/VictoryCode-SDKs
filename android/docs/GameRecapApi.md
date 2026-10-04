# GameRecapApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getGameRecapGameBoxScore**](GameRecapApi.md#getGameRecapGameBoxScore) | **GET** /api/v1/client/game-recap/{videoId}/game-box-score | Get the Game Recap Game Box Score for a specific Game. |
| [**getGameRecapScore**](GameRecapApi.md#getGameRecapScore) | **GET** /api/v1/client/game-recap/{videoId}/score | Get the Game Recap Score for a specific Game. |
| [**getGameRecapScoringSummary**](GameRecapApi.md#getGameRecapScoringSummary) | **GET** /api/v1/client/game-recap/{videoId}/scoring-summary | Get the Game Recap Scoring Summary for a specific Game. |
| [**getGameRecapScoringSummaryPro**](GameRecapApi.md#getGameRecapScoringSummaryPro) | **GET** /api/v1/client/game-recap/{videoId}/scoring-summary-pro | Get the Game Recap Scoring Summary Pro for a specific Game. |
| [**getGameRecapTeamStats**](GameRecapApi.md#getGameRecapTeamStats) | **GET** /api/v1/client/game-recap/{videoId}/team-stats | Get the Game Recap Team Stats for a specific Game. |


<a id="getGameRecapGameBoxScore"></a>
# **getGameRecapGameBoxScore**
> GameBoxScoreResponseDto getGameRecapGameBoxScore(videoId)

Get the Game Recap Game Box Score for a specific Game.

Retrieves full game box score stats for both teams and players for a specific game.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = GameRecapApi()
val videoId : kotlin.String = videoId_example // kotlin.String | 
try {
    val result : GameBoxScoreResponseDto = apiInstance.getGameRecapGameBoxScore(videoId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GameRecapApi#getGameRecapGameBoxScore")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GameRecapApi#getGameRecapGameBoxScore")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **videoId** | **kotlin.String**|  | |

### Return type

[**GameBoxScoreResponseDto**](GameBoxScoreResponseDto.md)

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

<a id="getGameRecapScore"></a>
# **getGameRecapScore**
> GameScoreResponse getGameRecapScore(videoId)

Get the Game Recap Score for a specific Game.

Retrieves the final score and the score breakdown by quarter and overtime periods for both the home and away teams.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = GameRecapApi()
val videoId : kotlin.String = videoId_example // kotlin.String | 
try {
    val result : GameScoreResponse = apiInstance.getGameRecapScore(videoId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GameRecapApi#getGameRecapScore")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GameRecapApi#getGameRecapScore")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **videoId** | **kotlin.String**|  | |

### Return type

[**GameScoreResponse**](GameScoreResponse.md)

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

<a id="getGameRecapScoringSummary"></a>
# **getGameRecapScoringSummary**
> GameRecapScoringSummaryResponse getGameRecapScoringSummary(videoId)

Get the Game Recap Scoring Summary for a specific Game.

Retrieves a chronological list of all scoring plays for a specific game, including details about the play, the drive, and the resulting score.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = GameRecapApi()
val videoId : kotlin.String = videoId_example // kotlin.String | 
try {
    val result : GameRecapScoringSummaryResponse = apiInstance.getGameRecapScoringSummary(videoId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GameRecapApi#getGameRecapScoringSummary")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GameRecapApi#getGameRecapScoringSummary")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **videoId** | **kotlin.String**|  | |

### Return type

[**GameRecapScoringSummaryResponse**](GameRecapScoringSummaryResponse.md)

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

<a id="getGameRecapScoringSummaryPro"></a>
# **getGameRecapScoringSummaryPro**
> GameRecapScoringSummaryProResponse getGameRecapScoringSummaryPro(videoId)

Get the Game Recap Scoring Summary Pro for a specific Game.

Retrieves the full pro scoring summary for a specific game with drive context and players involved for each scoring play.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = GameRecapApi()
val videoId : kotlin.String = videoId_example // kotlin.String | 
try {
    val result : GameRecapScoringSummaryProResponse = apiInstance.getGameRecapScoringSummaryPro(videoId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GameRecapApi#getGameRecapScoringSummaryPro")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GameRecapApi#getGameRecapScoringSummaryPro")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **videoId** | **kotlin.String**|  | |

### Return type

[**GameRecapScoringSummaryProResponse**](GameRecapScoringSummaryProResponse.md)

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

<a id="getGameRecapTeamStats"></a>
# **getGameRecapTeamStats**
> GameRecapTeamStatsResponse getGameRecapTeamStats(videoId)

Get the Game Recap Team Stats for a specific Game.

Retrieves a detailed statistical breakdown for both the home and away teams, covering offense, defense, and special teams performance.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = GameRecapApi()
val videoId : kotlin.String = videoId_example // kotlin.String | 
try {
    val result : GameRecapTeamStatsResponse = apiInstance.getGameRecapTeamStats(videoId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GameRecapApi#getGameRecapTeamStats")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GameRecapApi#getGameRecapTeamStats")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **videoId** | **kotlin.String**|  | |

### Return type

[**GameRecapTeamStatsResponse**](GameRecapTeamStatsResponse.md)

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

