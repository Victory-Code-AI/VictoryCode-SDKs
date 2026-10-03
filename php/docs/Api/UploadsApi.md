# VictoryCode\SDK\UploadsApi



All URIs are relative to https://sandbox.api.tactixai.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**completeMultipartUpload()**](UploadsApi.md#completeMultipartUpload) | **POST** /api/v1/client/complete-upload | Complete a multipart upload to S3 |
| [**getPresignedUrl()**](UploadsApi.md#getPresignedUrl) | **GET** /api/v1/client/upload-presigned-url | Get a presigned URL for a specific part of a multipart upload |
| [**initiateUpload()**](UploadsApi.md#initiateUpload) | **POST** /api/v1/client/initiate-upload | Initiate a multipart upload to S3 for a large file |


## `completeMultipartUpload()`

```php
completeMultipartUpload($complete_multipart_upload_dto): \VictoryCode\SDK\Model\CompleteMultipartUploadResponseDto
```

Complete a multipart upload to S3

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: Client-App-Token
$config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: Client-App-Id
$config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKey('App-Id', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('App-Id', 'Bearer');


$apiInstance = new VictoryCode\SDK\Api\UploadsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$complete_multipart_upload_dto = new \VictoryCode\SDK\Model\CompleteMultipartUploadDto(); // \VictoryCode\SDK\Model\CompleteMultipartUploadDto

try {
    $result = $apiInstance->completeMultipartUpload($complete_multipart_upload_dto);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UploadsApi->completeMultipartUpload: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **complete_multipart_upload_dto** | [**\VictoryCode\SDK\Model\CompleteMultipartUploadDto**](../Model/CompleteMultipartUploadDto.md)|  | |

### Return type

[**\VictoryCode\SDK\Model\CompleteMultipartUploadResponseDto**](../Model/CompleteMultipartUploadResponseDto.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getPresignedUrl()`

```php
getPresignedUrl($upload_id, $part_number): \VictoryCode\SDK\Model\GetPartsPresignUrlResponseDto
```

Get a presigned URL for a specific part of a multipart upload

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: Client-App-Token
$config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: Client-App-Id
$config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKey('App-Id', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('App-Id', 'Bearer');


$apiInstance = new VictoryCode\SDK\Api\UploadsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$upload_id = 'upload_id_example'; // string
$part_number = 3.4; // float

try {
    $result = $apiInstance->getPresignedUrl($upload_id, $part_number);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UploadsApi->getPresignedUrl: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **upload_id** | **string**|  | |
| **part_number** | **float**|  | |

### Return type

[**\VictoryCode\SDK\Model\GetPartsPresignUrlResponseDto**](../Model/GetPartsPresignUrlResponseDto.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `initiateUpload()`

```php
initiateUpload($initiate_multipart_upload_dto): \VictoryCode\SDK\Model\InitiateMultipartUploadResponseDto
```

Initiate a multipart upload to S3 for a large file

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: Client-App-Token
$config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: Client-App-Id
$config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKey('App-Id', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('App-Id', 'Bearer');


$apiInstance = new VictoryCode\SDK\Api\UploadsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$initiate_multipart_upload_dto = new \VictoryCode\SDK\Model\InitiateMultipartUploadDto(); // \VictoryCode\SDK\Model\InitiateMultipartUploadDto

try {
    $result = $apiInstance->initiateUpload($initiate_multipart_upload_dto);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UploadsApi->initiateUpload: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **initiate_multipart_upload_dto** | [**\VictoryCode\SDK\Model\InitiateMultipartUploadDto**](../Model/InitiateMultipartUploadDto.md)|  | |

### Return type

[**\VictoryCode\SDK\Model\InitiateMultipartUploadResponseDto**](../Model/InitiateMultipartUploadResponseDto.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
