# UploadsAPI

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUploadStatus**](UploadsAPI.md#getuploadstatus) | **GET** /api/v1/client/uploads/{uploadId} | Video file upload status
[**uploadVideoAndCreateGame**](UploadsAPI.md#uploadvideoandcreategame) | **POST** /api/v1/client/uploads | Upload video and create new game


# **getUploadStatus**
```swift
    open class func getUploadStatus(uploadId: String, completion: @escaping (_ data: GetUploadStatusResponse?, _ error: Error?) -> Void)
```

Video file upload status

This endpoint retrieves the status of an uploaded video file. It allows clients to check if their upload is still in progress, successfully processed, or failed.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let uploadId = "uploadId_example" // String | 

// Video file upload status
UploadsAPI.getUploadStatus(uploadId: uploadId) { (response, error) in
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
 **uploadId** | **String** |  | 

### Return type

[**GetUploadStatusResponse**](GetUploadStatusResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadVideoAndCreateGame**
```swift
    open class func uploadVideoAndCreateGame(name: String, video: URL, homeTeam: String, awayTeam: String, venue: String, location: String, description: String? = nil, completion: @escaping (_ data: UploadVideoAndCreateGameResponse?, _ error: Error?) -> Void)
```

Upload video and create new game

This endpoint is used to upload a game video along with its metadata (teams, venue, location, etc.). Once uploaded, the video will be processed by the Tactix AI platform to generate clips, stats, and summaries.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let name = "name_example" // String | 
let video = URL(string: "https://example.com")! // URL | 
let homeTeam = "homeTeam_example" // String | ObjectId of home team
let awayTeam = "awayTeam_example" // String | ObjectId of away team
let venue = "venue_example" // String | 
let location = "location_example" // String | 
let description = "description_example" // String |  (optional)

// Upload video and create new game
UploadsAPI.uploadVideoAndCreateGame(name: name, video: video, homeTeam: homeTeam, awayTeam: awayTeam, venue: venue, location: location, description: description) { (response, error) in
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
 **name** | **String** |  | 
 **video** | **URL** |  | 
 **homeTeam** | **String** | ObjectId of home team | 
 **awayTeam** | **String** | ObjectId of away team | 
 **venue** | **String** |  | 
 **location** | **String** |  | 
 **description** | **String** |  | [optional] 

### Return type

[**UploadVideoAndCreateGameResponse**](UploadVideoAndCreateGameResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

