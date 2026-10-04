# UploadsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**completeMultipartUpload**](UploadsApi.md#completeMultipartUpload) | **POST** /api/v1/client/complete-upload | Complete a multipart upload to S3 |
| [**getPresignedUrl**](UploadsApi.md#getPresignedUrl) | **GET** /api/v1/client/upload-presigned-url | Get a presigned URL for a specific part of a multipart upload |
| [**initiateUpload**](UploadsApi.md#initiateUpload) | **POST** /api/v1/client/initiate-upload | Initiate a multipart upload to S3 for a large file |


<a id="completeMultipartUpload"></a>
# **completeMultipartUpload**
> CompleteMultipartUploadResponseDto completeMultipartUpload(completeMultipartUploadDto)

Complete a multipart upload to S3

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = UploadsApi()
val completeMultipartUploadDto : CompleteMultipartUploadDto =  // CompleteMultipartUploadDto | 
try {
    val result : CompleteMultipartUploadResponseDto = apiInstance.completeMultipartUpload(completeMultipartUploadDto)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UploadsApi#completeMultipartUpload")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UploadsApi#completeMultipartUpload")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **completeMultipartUploadDto** | [**CompleteMultipartUploadDto**](CompleteMultipartUploadDto.md)|  | |

### Return type

[**CompleteMultipartUploadResponseDto**](CompleteMultipartUploadResponseDto.md)

### Authorization


Configure Client-App-Token statically:
```kotlin
ApiClient.accessToken = ""
```
Configure Client-App-Token dynamically:
```kotlin
apiInstance.accessTokenProvider = { "" }
```
Configure Client-App-Id:
    ApiClient.apiKey["App-Id"] = ""
    ApiClient.apiKeyPrefix["App-Id"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="getPresignedUrl"></a>
# **getPresignedUrl**
> GetPartsPresignUrlResponseDto getPresignedUrl(uploadId, partNumber)

Get a presigned URL for a specific part of a multipart upload

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = UploadsApi()
val uploadId : kotlin.String = uploadId_example // kotlin.String | 
val partNumber : java.math.BigDecimal = 8.14 // java.math.BigDecimal | 
try {
    val result : GetPartsPresignUrlResponseDto = apiInstance.getPresignedUrl(uploadId, partNumber)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UploadsApi#getPresignedUrl")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UploadsApi#getPresignedUrl")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **uploadId** | **kotlin.String**|  | |
| **partNumber** | **java.math.BigDecimal**|  | |

### Return type

[**GetPartsPresignUrlResponseDto**](GetPartsPresignUrlResponseDto.md)

### Authorization


Configure Client-App-Token statically:
```kotlin
ApiClient.accessToken = ""
```
Configure Client-App-Token dynamically:
```kotlin
apiInstance.accessTokenProvider = { "" }
```
Configure Client-App-Id:
    ApiClient.apiKey["App-Id"] = ""
    ApiClient.apiKeyPrefix["App-Id"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="initiateUpload"></a>
# **initiateUpload**
> InitiateMultipartUploadResponseDto initiateUpload(initiateMultipartUploadDto)

Initiate a multipart upload to S3 for a large file

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = UploadsApi()
val initiateMultipartUploadDto : InitiateMultipartUploadDto =  // InitiateMultipartUploadDto | 
try {
    val result : InitiateMultipartUploadResponseDto = apiInstance.initiateUpload(initiateMultipartUploadDto)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UploadsApi#initiateUpload")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UploadsApi#initiateUpload")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **initiateMultipartUploadDto** | [**InitiateMultipartUploadDto**](InitiateMultipartUploadDto.md)|  | |

### Return type

[**InitiateMultipartUploadResponseDto**](InitiateMultipartUploadResponseDto.md)

### Authorization


Configure Client-App-Token statically:
```kotlin
ApiClient.accessToken = ""
```
Configure Client-App-Token dynamically:
```kotlin
apiInstance.accessTokenProvider = { "" }
```
Configure Client-App-Id:
    ApiClient.apiKey["App-Id"] = ""
    ApiClient.apiKeyPrefix["App-Id"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

