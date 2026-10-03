# UploadsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getUploadStatus**](UploadsApi.md#getuploadstatus) | **GET** /api/v1/client/uploads/{uploadId} | Video file upload status |
| [**uploadVideoAndCreateGame**](UploadsApi.md#uploadvideoandcreategame) | **POST** /api/v1/client/uploads | Upload video and create new game |



## getUploadStatus

> GetUploadStatusResponse getUploadStatus(uploadId)

Video file upload status

This endpoint retrieves the status of an uploaded video file. It allows clients to check if their upload is still in progress, successfully processed, or failed.

### Example

```ts
import {
  Configuration,
  UploadsApi,
} from '@victorycode/sdk';
import type { GetUploadStatusRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: AppToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AppId
    apiKey: "YOUR API KEY",
  });
  const api = new UploadsApi(config);

  const body = {
    // string
    uploadId: uploadId_example,
  } satisfies GetUploadStatusRequest;

  try {
    const data = await api.getUploadStatus(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **uploadId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**GetUploadStatusResponse**](GetUploadStatusResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadVideoAndCreateGame

> UploadVideoAndCreateGameResponse uploadVideoAndCreateGame(name, video, homeTeam, awayTeam, venue, location, description)

Upload video and create new game

This endpoint is used to upload a game video along with its metadata (teams, venue, location, etc.). Once uploaded, the video will be processed by the Tactix AI platform to generate clips, stats, and summaries.

### Example

```ts
import {
  Configuration,
  UploadsApi,
} from '@victorycode/sdk';
import type { UploadVideoAndCreateGameRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: AppToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AppId
    apiKey: "YOUR API KEY",
  });
  const api = new UploadsApi(config);

  const body = {
    // string
    name: name_example,
    // Blob
    video: BINARY_DATA_HERE,
    // string | ObjectId of home team
    homeTeam: homeTeam_example,
    // string | ObjectId of away team
    awayTeam: awayTeam_example,
    // string
    venue: venue_example,
    // string
    location: location_example,
    // string (optional)
    description: description_example,
  } satisfies UploadVideoAndCreateGameRequest;

  try {
    const data = await api.uploadVideoAndCreateGame(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | `string` |  | [Defaults to `undefined`] |
| **video** | `Blob` |  | [Defaults to `undefined`] |
| **homeTeam** | `string` | ObjectId of home team | [Defaults to `undefined`] |
| **awayTeam** | `string` | ObjectId of away team | [Defaults to `undefined`] |
| **venue** | `string` |  | [Defaults to `undefined`] |
| **location** | `string` |  | [Defaults to `undefined`] |
| **description** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**UploadVideoAndCreateGameResponse**](UploadVideoAndCreateGameResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

