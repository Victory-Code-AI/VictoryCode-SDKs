# UploadsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**completeMultipartUpload**](UploadsApi.md#completemultipartupload) | **POST** /api/v1/client/complete-upload | Complete a multipart upload to S3 |
| [**getPresignedUrl**](UploadsApi.md#getpresignedurl) | **GET** /api/v1/client/upload-presigned-url | Get a presigned URL for a specific part of a multipart upload |
| [**initiateUpload**](UploadsApi.md#initiateupload) | **POST** /api/v1/client/initiate-upload | Initiate a multipart upload to S3 for a large file |



## completeMultipartUpload

> CompleteMultipartUploadResponseDto completeMultipartUpload(completeMultipartUploadDto)

Complete a multipart upload to S3

### Example

```ts
import {
  Configuration,
  UploadsApi,
} from '@victorycode/sdk';
import type { CompleteMultipartUploadRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new UploadsApi(config);

  const body = {
    // CompleteMultipartUploadDto
    completeMultipartUploadDto: ...,
  } satisfies CompleteMultipartUploadRequest;

  try {
    const data = await api.completeMultipartUpload(body);
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
| **completeMultipartUploadDto** | [CompleteMultipartUploadDto](CompleteMultipartUploadDto.md) |  | |

### Return type

[**CompleteMultipartUploadResponseDto**](CompleteMultipartUploadResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Presigned URL for part generated successfully. |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPresignedUrl

> GetPartsPresignUrlResponseDto getPresignedUrl(uploadId, partNumber)

Get a presigned URL for a specific part of a multipart upload

### Example

```ts
import {
  Configuration,
  UploadsApi,
} from '@victorycode/sdk';
import type { GetPresignedUrlRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new UploadsApi(config);

  const body = {
    // string
    uploadId: uploadId_example,
    // number
    partNumber: 8.14,
  } satisfies GetPresignedUrlRequest;

  try {
    const data = await api.getPresignedUrl(body);
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
| **partNumber** | `number` |  | [Defaults to `undefined`] |

### Return type

[**GetPartsPresignUrlResponseDto**](GetPartsPresignUrlResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Presigned URL for part generated successfully. |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## initiateUpload

> InitiateMultipartUploadResponseDto initiateUpload(initiateMultipartUploadDto)

Initiate a multipart upload to S3 for a large file

### Example

```ts
import {
  Configuration,
  UploadsApi,
} from '@victorycode/sdk';
import type { InitiateUploadRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new UploadsApi(config);

  const body = {
    // InitiateMultipartUploadDto
    initiateMultipartUploadDto: ...,
  } satisfies InitiateUploadRequest;

  try {
    const data = await api.initiateUpload(body);
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
| **initiateMultipartUploadDto** | [InitiateMultipartUploadDto](InitiateMultipartUploadDto.md) |  | |

### Return type

[**InitiateMultipartUploadResponseDto**](InitiateMultipartUploadResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Multipart upload initiated successfully, returns uploadId. |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

