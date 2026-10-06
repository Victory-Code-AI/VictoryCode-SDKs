# UploadsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**completeMultipartUpload**](UploadsApi.md#completeMultipartUpload) | **POST** /api/v1/client/complete-upload | Complete a multipart upload to S3 |
| [**getPresignedUrl**](UploadsApi.md#getPresignedUrl) | **GET** /api/v1/client/upload-presigned-url | Get a presigned URL for a specific part of a multipart upload |
| [**initiateUpload**](UploadsApi.md#initiateUpload) | **POST** /api/v1/client/initiate-upload | Initiate a multipart upload to S3 for a large file |


<a id="completeMultipartUpload"></a>
# **completeMultipartUpload**
> CompleteMultipartUploadResponseDto completeMultipartUpload(completeMultipartUploadDto)

Complete a multipart upload to S3

### Example
```java
// Import classes:
import com.tactixai.victorycode.sdk.ApiClient;
import com.tactixai.victorycode.sdk.ApiException;
import com.tactixai.victorycode.sdk.Configuration;
import com.tactixai.victorycode.sdk.auth.*;
import com.tactixai.victorycode.sdk.models.*;
import com.tactixai.victorycode.sdk.api.UploadsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://sandbox.api.tactixai.com");
    
    // Configure HTTP bearer authorization: Client-App-Token
    HttpBearerAuth Client-App-Token = (HttpBearerAuth) defaultClient.getAuthentication("Client-App-Token");
    Client-App-Token.setBearerToken("BEARER TOKEN");

    // Configure API key authorization: Client-App-Id
    ApiKeyAuth Client-App-Id = (ApiKeyAuth) defaultClient.getAuthentication("Client-App-Id");
    Client-App-Id.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Client-App-Id.setApiKeyPrefix("Token");

    UploadsApi apiInstance = new UploadsApi(defaultClient);
    CompleteMultipartUploadDto completeMultipartUploadDto = new CompleteMultipartUploadDto(); // CompleteMultipartUploadDto | 
    try {
      CompleteMultipartUploadResponseDto result = apiInstance.completeMultipartUpload(completeMultipartUploadDto);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling UploadsApi#completeMultipartUpload");
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
| **completeMultipartUploadDto** | [**CompleteMultipartUploadDto**](CompleteMultipartUploadDto.md)|  | |

### Return type

[**CompleteMultipartUploadResponseDto**](CompleteMultipartUploadResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Presigned URL for part generated successfully. |  -  |
| **400** | Validation error |  -  |

<a id="getPresignedUrl"></a>
# **getPresignedUrl**
> GetPartsPresignUrlResponseDto getPresignedUrl(uploadId, partNumber)

Get a presigned URL for a specific part of a multipart upload

### Example
```java
// Import classes:
import com.tactixai.victorycode.sdk.ApiClient;
import com.tactixai.victorycode.sdk.ApiException;
import com.tactixai.victorycode.sdk.Configuration;
import com.tactixai.victorycode.sdk.auth.*;
import com.tactixai.victorycode.sdk.models.*;
import com.tactixai.victorycode.sdk.api.UploadsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://sandbox.api.tactixai.com");
    
    // Configure HTTP bearer authorization: Client-App-Token
    HttpBearerAuth Client-App-Token = (HttpBearerAuth) defaultClient.getAuthentication("Client-App-Token");
    Client-App-Token.setBearerToken("BEARER TOKEN");

    // Configure API key authorization: Client-App-Id
    ApiKeyAuth Client-App-Id = (ApiKeyAuth) defaultClient.getAuthentication("Client-App-Id");
    Client-App-Id.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Client-App-Id.setApiKeyPrefix("Token");

    UploadsApi apiInstance = new UploadsApi(defaultClient);
    String uploadId = "uploadId_example"; // String | 
    BigDecimal partNumber = new BigDecimal(78); // BigDecimal | 
    try {
      GetPartsPresignUrlResponseDto result = apiInstance.getPresignedUrl(uploadId, partNumber);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling UploadsApi#getPresignedUrl");
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
| **partNumber** | **BigDecimal**|  | |

### Return type

[**GetPartsPresignUrlResponseDto**](GetPartsPresignUrlResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Presigned URL for part generated successfully. |  -  |
| **400** | Validation error |  -  |

<a id="initiateUpload"></a>
# **initiateUpload**
> InitiateMultipartUploadResponseDto initiateUpload(initiateMultipartUploadDto)

Initiate a multipart upload to S3 for a large file

### Example
```java
// Import classes:
import com.tactixai.victorycode.sdk.ApiClient;
import com.tactixai.victorycode.sdk.ApiException;
import com.tactixai.victorycode.sdk.Configuration;
import com.tactixai.victorycode.sdk.auth.*;
import com.tactixai.victorycode.sdk.models.*;
import com.tactixai.victorycode.sdk.api.UploadsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://sandbox.api.tactixai.com");
    
    // Configure HTTP bearer authorization: Client-App-Token
    HttpBearerAuth Client-App-Token = (HttpBearerAuth) defaultClient.getAuthentication("Client-App-Token");
    Client-App-Token.setBearerToken("BEARER TOKEN");

    // Configure API key authorization: Client-App-Id
    ApiKeyAuth Client-App-Id = (ApiKeyAuth) defaultClient.getAuthentication("Client-App-Id");
    Client-App-Id.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Client-App-Id.setApiKeyPrefix("Token");

    UploadsApi apiInstance = new UploadsApi(defaultClient);
    InitiateMultipartUploadDto initiateMultipartUploadDto = new InitiateMultipartUploadDto(); // InitiateMultipartUploadDto | 
    try {
      InitiateMultipartUploadResponseDto result = apiInstance.initiateUpload(initiateMultipartUploadDto);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling UploadsApi#initiateUpload");
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
| **initiateMultipartUploadDto** | [**InitiateMultipartUploadDto**](InitiateMultipartUploadDto.md)|  | |

### Return type

[**InitiateMultipartUploadResponseDto**](InitiateMultipartUploadResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Multipart upload initiated successfully, returns uploadId. |  -  |
| **400** | Validation error |  -  |

