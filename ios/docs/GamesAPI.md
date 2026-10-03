# GamesAPI

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGame**](GamesAPI.md#getgame) | **GET** /api/v1/client/games/{gameId} | Get single game
[**listGames**](GamesAPI.md#listgames) | **GET** /api/v1/client/games | Get All Games


# **getGame**
```swift
    open class func getGame(gameId: String, completion: @escaping (_ data: GetGameResponse?, _ error: Error?) -> Void)
```

Get single game

Retrieves metadata for a specific game by gameId. The response includes core identifiers, participating teams, venue/location, timestamps, processing status, and any available high-level attributes required to render a game detail view.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let gameId = "gameId_example" // String | 

// Get single game
GamesAPI.getGame(gameId: gameId) { (response, error) in
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

[**GetGameResponse**](GetGameResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listGames**
```swift
    open class func listGames(limit: Int? = nil, page: Int? = nil, completion: @escaping (_ data: ListGamesResponse?, _ error: Error?) -> Void)
```

Get All Games

Returns a paginated list of games accessible to the client. Useful for building game pickers and dashboards, or to obtain a gameId before fetching detailed resources.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let limit = 987 // Int |  (optional)
let page = 987 // Int |  (optional)

// Get All Games
GamesAPI.listGames(limit: limit, page: page) { (response, error) in
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
 **limit** | **Int** |  | [optional] 
 **page** | **Int** |  | [optional] 

### Return type

[**ListGamesResponse**](ListGamesResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

