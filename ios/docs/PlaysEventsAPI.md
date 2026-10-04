# PlaysEventsAPI

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPlayById**](PlaysEventsAPI.md#getplaybyid) | **GET** /api/v1/client/plays/{playId} | Get the single Play Clip
[**getPlaysOfGame**](PlaysEventsAPI.md#getplaysofgame) | **GET** /api/v1/client/game/{gameId}/plays | Get a list of all plays for a game
[**getPlaysOfVideo**](PlaysEventsAPI.md#getplaysofvideo) | **GET** /api/v1/client/videos/{videoId}/plays | Get a list of play clips for a video


# **getPlayById**
```swift
    open class func getPlayById(playId: String, completion: @escaping (_ data: PlayClipListItemDto?, _ error: Error?) -> Void)
```

Get the single Play Clip

Retrieves the complete metadata for a single play clip by its unique ID.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let playId = "playId_example" // String | 

// Get the single Play Clip
PlaysEventsAPI.getPlayById(playId: playId) { (response, error) in
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
 **playId** | **String** |  | 

### Return type

[**PlayClipListItemDto**](PlayClipListItemDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPlaysOfGame**
```swift
    open class func getPlaysOfGame(gameId: String, limit: Double? = nil, offset: Double? = nil, search: String? = nil, down: Down_getPlaysOfGame? = nil, distanceZone: DistanceZone_getPlaysOfGame? = nil, playType: PlayType_getPlaysOfGame? = nil, completion: @escaping (_ data: ListGameAllPlaysResponseDto?, _ error: Error?) -> Void)
```

Get a list of all plays for a game

Retrieves a paginated list of all plays for a given game. The results can be filtered by various play attributes.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let gameId = "gameId_example" // String | 
let limit = 987 // Double | The number of results to return per page. (optional) (default to 50)
let offset = 987 // Double | The number of results to skip for pagination. (optional) (default to 0)
let search = "search_example" // String |  (optional)
let down = "down_example" // String | Filter by down number (optional)
let distanceZone = "distanceZone_example" // String | Filter by distance zone (yards to go) (optional)
let playType = "playType_example" // String | Filter by analyzed play type (optional)

// Get a list of all plays for a game
PlaysEventsAPI.getPlaysOfGame(gameId: gameId, limit: limit, offset: offset, search: search, down: down, distanceZone: distanceZone, playType: playType) { (response, error) in
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
 **search** | **String** |  | [optional] 
 **down** | **String** | Filter by down number | [optional] 
 **distanceZone** | **String** | Filter by distance zone (yards to go) | [optional] 
 **playType** | **String** | Filter by analyzed play type | [optional] 

### Return type

[**ListGameAllPlaysResponseDto**](ListGameAllPlaysResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPlaysOfVideo**
```swift
    open class func getPlaysOfVideo(videoId: String, limit: Double? = nil, offset: Double? = nil, search: String? = nil, down: Down_getPlaysOfVideo? = nil, distanceZone: DistanceZone_getPlaysOfVideo? = nil, playType: PlayType_getPlaysOfVideo? = nil, completion: @escaping (_ data: ListPlayClipsResponseDto?, _ error: Error?) -> Void)
```

Get a list of play clips for a video

Retrieves a paginated list of all play clips for a given video. The results can be filtered by various play attributes.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let videoId = "videoId_example" // String | 
let limit = 987 // Double | The number of results to return per page. (optional) (default to 50)
let offset = 987 // Double | The number of results to skip for pagination. (optional) (default to 0)
let search = "search_example" // String |  (optional)
let down = "down_example" // String | Filter by down number (optional)
let distanceZone = "distanceZone_example" // String | Filter by distance zone (yards to go) (optional)
let playType = "playType_example" // String | Filter by analyzed play type (optional)

// Get a list of play clips for a video
PlaysEventsAPI.getPlaysOfVideo(videoId: videoId, limit: limit, offset: offset, search: search, down: down, distanceZone: distanceZone, playType: playType) { (response, error) in
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
 **limit** | **Double** | The number of results to return per page. | [optional] [default to 50]
 **offset** | **Double** | The number of results to skip for pagination. | [optional] [default to 0]
 **search** | **String** |  | [optional] 
 **down** | **String** | Filter by down number | [optional] 
 **distanceZone** | **String** | Filter by distance zone (yards to go) | [optional] 
 **playType** | **String** | Filter by analyzed play type | [optional] 

### Return type

[**ListPlayClipsResponseDto**](ListPlayClipsResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

