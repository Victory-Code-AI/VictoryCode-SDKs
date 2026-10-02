# GameRecapAPI

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGameRecapScore**](GameRecapAPI.md#getgamerecapscore) | **GET** /api/v1/client/game-recap/{gameId}/score | Get the Game Recap Score for a specific Game
[**getGameRecapScoringSummary**](GameRecapAPI.md#getgamerecapscoringsummary) | **GET** /api/v1/client/game-recap/{gameId}/scoring-summary | Get the Game Recap Scoring Summary for a specific Game.
[**getGameRecapTeamStats**](GameRecapAPI.md#getgamerecapteamstats) | **GET** /api/v1/client/game-recap/{gameId}/team-stats | Get the Game Recap Team Stats for a specific Game.


# **getGameRecapScore**
```swift
    open class func getGameRecapScore(gameId: String, completion: @escaping (_ data: GetGameRecapScoreResponse?, _ error: Error?) -> Void)
```

Get the Game Recap Score for a specific Game

Retrieves the overall score for the specified game. This includes the final scoreline and also include period-by-period (quarters) breakdowns.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let gameId = "gameId_example" // String | 

// Get the Game Recap Score for a specific Game
GameRecapAPI.getGameRecapScore(gameId: gameId) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | **String** |  | 

### Return type

[**GetGameRecapScoreResponse**](GetGameRecapScoreResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGameRecapScoringSummary**
```swift
    open class func getGameRecapScoringSummary(gameId: String, completion: @escaping (_ data: GetGameRecapScoringSummaryResponse?, _ error: Error?) -> Void)
```

Get the Game Recap Scoring Summary for a specific Game.

Retrieves a chronological summary of all scoring plays for the specified game. Each record is linked to a playId, enabling clients to correlate the scoring event with detailed play data.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let gameId = "gameId_example" // String | 

// Get the Game Recap Scoring Summary for a specific Game.
GameRecapAPI.getGameRecapScoringSummary(gameId: gameId) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | **String** |  | 

### Return type

[**GetGameRecapScoringSummaryResponse**](GetGameRecapScoringSummaryResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGameRecapTeamStats**
```swift
    open class func getGameRecapTeamStats(gameId: String, completion: @escaping (_ data: GetGameRecapTeamStatsResponse?, _ error: Error?) -> Void)
```

Get the Game Recap Team Stats for a specific Game.

Retrieves a statistical summary for both the home and away teams in a specific game. The response includes key offensive and first-down metrics, allowing clients to analyze game efficiency, offensive output, and team balance between rushing and passing plays.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let gameId = "gameId_example" // String | 

// Get the Game Recap Team Stats for a specific Game.
GameRecapAPI.getGameRecapTeamStats(gameId: gameId) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | **String** |  | 

### Return type

[**GetGameRecapTeamStatsResponse**](GetGameRecapTeamStatsResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

