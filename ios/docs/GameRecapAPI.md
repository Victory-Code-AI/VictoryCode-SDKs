# GameRecapAPI

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGameRecapGameBoxScore**](GameRecapAPI.md#getgamerecapgameboxscore) | **GET** /api/v1/client/game-recap/{videoId}/game-box-score | Get the Game Recap Game Box Score for a specific Game.
[**getGameRecapScore**](GameRecapAPI.md#getgamerecapscore) | **GET** /api/v1/client/game-recap/{videoId}/score | Get the Game Recap Score for a specific Game.
[**getGameRecapScoringSummary**](GameRecapAPI.md#getgamerecapscoringsummary) | **GET** /api/v1/client/game-recap/{videoId}/scoring-summary | Get the Game Recap Scoring Summary for a specific Game.
[**getGameRecapScoringSummaryPro**](GameRecapAPI.md#getgamerecapscoringsummarypro) | **GET** /api/v1/client/game-recap/{videoId}/scoring-summary-pro | Get the Game Recap Scoring Summary Pro for a specific Game.
[**getGameRecapTeamStats**](GameRecapAPI.md#getgamerecapteamstats) | **GET** /api/v1/client/game-recap/{videoId}/team-stats | Get the Game Recap Team Stats for a specific Game.


# **getGameRecapGameBoxScore**
```swift
    open class func getGameRecapGameBoxScore(videoId: String, completion: @escaping (_ data: GameBoxScoreResponseDto?, _ error: Error?) -> Void)
```

Get the Game Recap Game Box Score for a specific Game.

Retrieves full game box score stats for both teams and players for a specific game.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let videoId = "videoId_example" // String | 

// Get the Game Recap Game Box Score for a specific Game.
GameRecapAPI.getGameRecapGameBoxScore(videoId: videoId) { (response, error) in
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
 **videoId** | **String** |  | 

### Return type

[**GameBoxScoreResponseDto**](GameBoxScoreResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGameRecapScore**
```swift
    open class func getGameRecapScore(videoId: String, completion: @escaping (_ data: GameScoreResponse?, _ error: Error?) -> Void)
```

Get the Game Recap Score for a specific Game.

Retrieves the final score and the score breakdown by quarter and overtime periods for both the home and away teams.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let videoId = "videoId_example" // String | 

// Get the Game Recap Score for a specific Game.
GameRecapAPI.getGameRecapScore(videoId: videoId) { (response, error) in
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
 **videoId** | **String** |  | 

### Return type

[**GameScoreResponse**](GameScoreResponse.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGameRecapScoringSummary**
```swift
    open class func getGameRecapScoringSummary(videoId: String, completion: @escaping (_ data: GameRecapScoringSummaryResponse?, _ error: Error?) -> Void)
```

Get the Game Recap Scoring Summary for a specific Game.

Retrieves a chronological list of all scoring plays for a specific game, including details about the play, the drive, and the resulting score.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let videoId = "videoId_example" // String | 

// Get the Game Recap Scoring Summary for a specific Game.
GameRecapAPI.getGameRecapScoringSummary(videoId: videoId) { (response, error) in
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
 **videoId** | **String** |  | 

### Return type

[**GameRecapScoringSummaryResponse**](GameRecapScoringSummaryResponse.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGameRecapScoringSummaryPro**
```swift
    open class func getGameRecapScoringSummaryPro(videoId: String, completion: @escaping (_ data: GameRecapScoringSummaryProResponse?, _ error: Error?) -> Void)
```

Get the Game Recap Scoring Summary Pro for a specific Game.

Retrieves the full pro scoring summary for a specific game with drive context and players involved for each scoring play.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let videoId = "videoId_example" // String | 

// Get the Game Recap Scoring Summary Pro for a specific Game.
GameRecapAPI.getGameRecapScoringSummaryPro(videoId: videoId) { (response, error) in
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
 **videoId** | **String** |  | 

### Return type

[**GameRecapScoringSummaryProResponse**](GameRecapScoringSummaryProResponse.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGameRecapTeamStats**
```swift
    open class func getGameRecapTeamStats(videoId: String, completion: @escaping (_ data: GameRecapTeamStatsResponse?, _ error: Error?) -> Void)
```

Get the Game Recap Team Stats for a specific Game.

Retrieves a detailed statistical breakdown for both the home and away teams, covering offense, defense, and special teams performance.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let videoId = "videoId_example" // String | 

// Get the Game Recap Team Stats for a specific Game.
GameRecapAPI.getGameRecapTeamStats(videoId: videoId) { (response, error) in
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
 **videoId** | **String** |  | 

### Return type

[**GameRecapTeamStatsResponse**](GameRecapTeamStatsResponse.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

