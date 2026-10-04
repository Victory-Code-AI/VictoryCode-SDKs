# GamesAPI

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addVideoToGame**](GamesAPI.md#addvideotogame) | **POST** /api/v1/client/games/{gameId}/video | Add new video to a game
[**createGameWithVideoUrl**](GamesAPI.md#creategamewithvideourl) | **POST** /api/v1/client/games | Create a new Game with Video URL
[**getGameDetails**](GamesAPI.md#getgamedetails) | **GET** /api/v1/client/games/{gameId} | Get a Single Game.
[**getGames**](GamesAPI.md#getgames) | **GET** /api/v1/client/games | List and Filter Games.
[**getVideosOfGame**](GamesAPI.md#getvideosofgame) | **GET** /api/v1/client/games/{gameId}/videos | Get a list of videos of a game


# **addVideoToGame**
```swift
    open class func addVideoToGame(gameId: String, addVideoToGameWithS3LinkDto: AddVideoToGameWithS3LinkDto, completion: @escaping (_ data: SingleVideoResponseDto?, _ error: Error?) -> Void)
```

Add new video to a game

Adds a new video to game.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let gameId = "gameId_example" // String | 
let addVideoToGameWithS3LinkDto = AddVideoToGameWithS3LinkDto(viewType: "viewType_example", s3Link: "s3Link_example") // AddVideoToGameWithS3LinkDto | 

// Add new video to a game
GamesAPI.addVideoToGame(gameId: gameId, addVideoToGameWithS3LinkDto: addVideoToGameWithS3LinkDto) { (response, error) in
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
 **addVideoToGameWithS3LinkDto** | [**AddVideoToGameWithS3LinkDto**](AddVideoToGameWithS3LinkDto.md) |  | 

### Return type

[**SingleVideoResponseDto**](SingleVideoResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createGameWithVideoUrl**
```swift
    open class func createGameWithVideoUrl(clientCreateGameWithVideoUrlDto: ClientCreateGameWithVideoUrlDto, completion: @escaping (_ data: GameDetailsResponse?, _ error: Error?) -> Void)
```

Create a new Game with Video URL

Registers a new game and associates a video URL (e.g., from a third-party source) with it in a single step.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let clientCreateGameWithVideoUrlDto = ClientCreateGameWithVideoUrlDto(name: "name_example", sourceGameId: "sourceGameId_example", s3Link: "s3Link_example", homeTeam: "homeTeam_example", awayTeam: "awayTeam_example", venue: "venue_example", season: "season_example", week: 123, competitionLevel: "competitionLevel_example", gameStatus: "gameStatus_example", gameDateTime: "gameDateTime_example", uploadId: "uploadId_example") // ClientCreateGameWithVideoUrlDto | 

// Create a new Game with Video URL
GamesAPI.createGameWithVideoUrl(clientCreateGameWithVideoUrlDto: clientCreateGameWithVideoUrlDto) { (response, error) in
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
 **clientCreateGameWithVideoUrlDto** | [**ClientCreateGameWithVideoUrlDto**](ClientCreateGameWithVideoUrlDto.md) |  | 

### Return type

[**GameDetailsResponse**](GameDetailsResponse.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGameDetails**
```swift
    open class func getGameDetails(gameId: String, completion: @escaping (_ data: GameDetailsResponse?, _ error: Error?) -> Void)
```

Get a Single Game.

Retrieves the core metadata for a single game, including date, time, location, and teams who participated.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let gameId = "gameId_example" // String | 

// Get a Single Game.
GamesAPI.getGameDetails(gameId: gameId) { (response, error) in
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

[**GameDetailsResponse**](GameDetailsResponse.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGames**
```swift
    open class func getGames(limit: Double? = nil, offset: Double? = nil, search: String? = nil, completion: @escaping (_ data: ListGamesPaginatedResponseDto?, _ error: Error?) -> Void)
```

List and Filter Games.

Retrieves a paginated list of games, with optional filters for team, upload status, and date-time range.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let limit = 987 // Double | The number of results to return per page. (optional) (default to 50)
let offset = 987 // Double | The number of results to skip for pagination. (optional) (default to 0)
let search = "search_example" // String |  (optional)

// List and Filter Games.
GamesAPI.getGames(limit: limit, offset: offset, search: search) { (response, error) in
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
 **limit** | **Double** | The number of results to return per page. | [optional] [default to 50]
 **offset** | **Double** | The number of results to skip for pagination. | [optional] [default to 0]
 **search** | **String** |  | [optional] 

### Return type

[**ListGamesPaginatedResponseDto**](ListGamesPaginatedResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getVideosOfGame**
```swift
    open class func getVideosOfGame(gameId: String, limit: Double? = nil, offset: Double? = nil, completion: @escaping (_ data: ListVideoPaginatedResponseDto?, _ error: Error?) -> Void)
```

Get a list of videos of a game

Retrieves a list of videos of a game.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let gameId = "gameId_example" // String | 
let limit = 987 // Double | The number of results to return per page. (optional) (default to 50)
let offset = 987 // Double | The number of results to skip for pagination. (optional) (default to 0)

// Get a list of videos of a game
GamesAPI.getVideosOfGame(gameId: gameId, limit: limit, offset: offset) { (response, error) in
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
 **limit** | **Double** | The number of results to return per page. | [optional] [default to 50]
 **offset** | **Double** | The number of results to skip for pagination. | [optional] [default to 0]

### Return type

[**ListVideoPaginatedResponseDto**](ListVideoPaginatedResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

