# UploadsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getUploadStatus**](UploadsApi.md#getUploadStatus) | **GET** /api/v1/client/uploads/{uploadId} | Video file upload status |
| [**uploadVideoAndCreateGame**](UploadsApi.md#uploadVideoAndCreateGame) | **POST** /api/v1/client/uploads | Upload video and create new game |


<a id="getUploadStatus"></a>
# **getUploadStatus**
> GetUploadStatusResponse getUploadStatus(uploadId)

Video file upload status

This endpoint retrieves the status of an uploaded video file. It allows clients to check if their upload is still in progress, successfully processed, or failed.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = UploadsApi()
val uploadId : kotlin.String = uploadId_example // kotlin.String | 
try {
    val result : GetUploadStatusResponse = apiInstance.getUploadStatus(uploadId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UploadsApi#getUploadStatus")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UploadsApi#getUploadStatus")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **uploadId** | **kotlin.String**|  | |

### Return type

[**GetUploadStatusResponse**](GetUploadStatusResponse.md)

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

<a id="uploadVideoAndCreateGame"></a>
# **uploadVideoAndCreateGame**
> UploadVideoAndCreateGameResponse uploadVideoAndCreateGame(name, video, homeTeam, awayTeam, venue, location, description)

Upload video and create new game

This endpoint is used to upload a game video along with its metadata (teams, venue, location, etc.). Once uploaded, the video will be processed by the Tactix AI platform to generate clips, stats, and summaries.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = UploadsApi()
val name : kotlin.String = name_example // kotlin.String | 
val video : java.io.File = BINARY_DATA_HERE // java.io.File | 
val homeTeam : kotlin.String = homeTeam_example // kotlin.String | ObjectId of home team
val awayTeam : kotlin.String = awayTeam_example // kotlin.String | ObjectId of away team
val venue : kotlin.String = venue_example // kotlin.String | 
val location : kotlin.String = location_example // kotlin.String | 
val description : kotlin.String = description_example // kotlin.String | 
try {
    val result : UploadVideoAndCreateGameResponse = apiInstance.uploadVideoAndCreateGame(name, video, homeTeam, awayTeam, venue, location, description)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UploadsApi#uploadVideoAndCreateGame")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UploadsApi#uploadVideoAndCreateGame")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **name** | **kotlin.String**|  | |
| **video** | **java.io.File**|  | |
| **homeTeam** | **kotlin.String**| ObjectId of home team | |
| **awayTeam** | **kotlin.String**| ObjectId of away team | |
| **venue** | **kotlin.String**|  | |
| **location** | **kotlin.String**|  | |
| **description** | **kotlin.String**|  | [optional] |

### Return type

[**UploadVideoAndCreateGameResponse**](UploadVideoAndCreateGameResponse.md)

### Authorization


Configure AppToken:
    ApiClient.apiKey["App-Token"] = ""
    ApiClient.apiKeyPrefix["App-Token"] = ""
Configure AppId:
    ApiClient.apiKey["App-Id"] = ""
    ApiClient.apiKeyPrefix["App-Id"] = ""

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

