# UploadsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getUploadStatus**](UploadsApi.md#getUploadStatus) | **GET** /api/v1/client/uploads/{uploadId} | Video file upload status |
| [**uploadVideoAndCreateGame**](UploadsApi.md#uploadVideoAndCreateGame) | **POST** /api/v1/client/uploads | Upload video and create new game |


<a id="getUploadStatus"></a>
# **getUploadStatus**
> GetUploadStatusResponse getUploadStatus(uploadId)

Video file upload status

This endpoint retrieves the status of an uploaded video file. It allows clients to check if their upload is still in progress, successfully processed, or failed.

### Example
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.UploadsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://sandbox.api.tactixai.com");
    
    // Configure API key authorization: AppToken
    ApiKeyAuth AppToken = (ApiKeyAuth) defaultClient.getAuthentication("AppToken");
    AppToken.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //AppToken.setApiKeyPrefix("Token");

    // Configure API key authorization: AppId
    ApiKeyAuth AppId = (ApiKeyAuth) defaultClient.getAuthentication("AppId");
    AppId.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //AppId.setApiKeyPrefix("Token");

    UploadsApi apiInstance = new UploadsApi(defaultClient);
    String uploadId = "uploadId_example"; // String | 
    try {
      GetUploadStatusResponse result = apiInstance.getUploadStatus(uploadId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling UploadsApi#getUploadStatus");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **uploadId** | **String**|  | |

### Return type

[**GetUploadStatusResponse**](GetUploadStatusResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="uploadVideoAndCreateGame"></a>
# **uploadVideoAndCreateGame**
> UploadVideoAndCreateGameResponse uploadVideoAndCreateGame(name, video, homeTeam, awayTeam, venue, location, description)

Upload video and create new game

This endpoint is used to upload a game video along with its metadata (teams, venue, location, etc.). Once uploaded, the video will be processed by the Tactix AI platform to generate clips, stats, and summaries.

### Example
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.UploadsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://sandbox.api.tactixai.com");
    
    // Configure API key authorization: AppToken
    ApiKeyAuth AppToken = (ApiKeyAuth) defaultClient.getAuthentication("AppToken");
    AppToken.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //AppToken.setApiKeyPrefix("Token");

    // Configure API key authorization: AppId
    ApiKeyAuth AppId = (ApiKeyAuth) defaultClient.getAuthentication("AppId");
    AppId.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //AppId.setApiKeyPrefix("Token");

    UploadsApi apiInstance = new UploadsApi(defaultClient);
    String name = "name_example"; // String | 
    File video = new File("/path/to/file"); // File | 
    String homeTeam = "homeTeam_example"; // String | ObjectId of home team
    String awayTeam = "awayTeam_example"; // String | ObjectId of away team
    String venue = "venue_example"; // String | 
    String location = "location_example"; // String | 
    String description = "description_example"; // String | 
    try {
      UploadVideoAndCreateGameResponse result = apiInstance.uploadVideoAndCreateGame(name, video, homeTeam, awayTeam, venue, location, description);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling UploadsApi#uploadVideoAndCreateGame");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | **String**|  | |
| **video** | **File**|  | |
| **homeTeam** | **String**| ObjectId of home team | |
| **awayTeam** | **String**| ObjectId of away team | |
| **venue** | **String**|  | |
| **location** | **String**|  | |
| **description** | **String**|  | [optional] |

### Return type

[**UploadVideoAndCreateGameResponse**](UploadVideoAndCreateGameResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |

