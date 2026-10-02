# GameRecapApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getGameRecapScore**](GameRecapApi.md#getGameRecapScore) | **GET** /api/v1/client/game-recap/{gameId}/score | Get the Game Recap Score for a specific Game |
| [**getGameRecapScoringSummary**](GameRecapApi.md#getGameRecapScoringSummary) | **GET** /api/v1/client/game-recap/{gameId}/scoring-summary | Get the Game Recap Scoring Summary for a specific Game. |
| [**getGameRecapTeamStats**](GameRecapApi.md#getGameRecapTeamStats) | **GET** /api/v1/client/game-recap/{gameId}/team-stats | Get the Game Recap Team Stats for a specific Game. |


<a id="getGameRecapScore"></a>
# **getGameRecapScore**
> GetGameRecapScoreResponse getGameRecapScore(gameId)

Get the Game Recap Score for a specific Game

Retrieves the overall score for the specified game. This includes the final scoreline and also include period-by-period (quarters) breakdowns.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = GameRecapApi()
val gameId : kotlin.String = gameId_example // kotlin.String | 
try {
    val result : GetGameRecapScoreResponse = apiInstance.getGameRecapScore(gameId)
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
| **gameId** | **kotlin.String**|  | |

### Return type

[**GetGameRecapScoreResponse**](GetGameRecapScoreResponse.md)

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

<a id="getGameRecapScoringSummary"></a>
# **getGameRecapScoringSummary**
> GetGameRecapScoringSummaryResponse getGameRecapScoringSummary(gameId)

Get the Game Recap Scoring Summary for a specific Game.

Retrieves a chronological summary of all scoring plays for the specified game. Each record is linked to a playId, enabling clients to correlate the scoring event with detailed play data.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = GameRecapApi()
val gameId : kotlin.String = gameId_example // kotlin.String | 
try {
    val result : GetGameRecapScoringSummaryResponse = apiInstance.getGameRecapScoringSummary(gameId)
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
| **gameId** | **kotlin.String**|  | |

### Return type

[**GetGameRecapScoringSummaryResponse**](GetGameRecapScoringSummaryResponse.md)

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

<a id="getGameRecapTeamStats"></a>
# **getGameRecapTeamStats**
> GetGameRecapTeamStatsResponse getGameRecapTeamStats(gameId)

Get the Game Recap Team Stats for a specific Game.

Retrieves a statistical summary for both the home and away teams in a specific game. The response includes key offensive and first-down metrics, allowing clients to analyze game efficiency, offensive output, and team balance between rushing and passing plays.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = GameRecapApi()
val gameId : kotlin.String = gameId_example // kotlin.String | 
try {
    val result : GetGameRecapTeamStatsResponse = apiInstance.getGameRecapTeamStats(gameId)
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
| **gameId** | **kotlin.String**|  | |

### Return type

[**GetGameRecapTeamStatsResponse**](GetGameRecapTeamStatsResponse.md)

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

