# VictoryCode\SDK\UploadsApi

The Uploads endpoints allow clients to create new game uploads (video files with metadata) and check the status of ongoing uploads. These endpoints are essential for initiating the video processing pipeline, which generates clips, scoring summaries, and team statistics.

All URIs are relative to https://sandbox.api.tactixai.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getUploadStatus()**](UploadsApi.md#getUploadStatus) | **GET** /api/v1/client/uploads/{uploadId} | Video file upload status |
| [**uploadVideoAndCreateGame()**](UploadsApi.md#uploadVideoAndCreateGame) | **POST** /api/v1/client/uploads | Upload video and create new game |


## `getUploadStatus()`

```php
getUploadStatus($upload_id): \VictoryCode\SDK\Model\GetUploadStatusResponse
```

Video file upload status

This endpoint retrieves the status of an uploaded video file. It allows clients to check if their upload is still in progress, successfully processed, or failed.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: AppToken
$config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKey('App-Token', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('App-Token', 'Bearer');

// Configure API key authorization: AppId
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

try {
    $result = $apiInstance->getUploadStatus($upload_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UploadsApi->getUploadStatus: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **upload_id** | **string**|  | |

### Return type

[**\VictoryCode\SDK\Model\GetUploadStatusResponse**](../Model/GetUploadStatusResponse.md)

### Authorization

[AppToken](../../README.md#AppToken), [AppId](../../README.md#AppId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `uploadVideoAndCreateGame()`

```php
uploadVideoAndCreateGame($name, $video, $home_team, $away_team, $venue, $location, $description): \VictoryCode\SDK\Model\UploadVideoAndCreateGameResponse
```

Upload video and create new game

This endpoint is used to upload a game video along with its metadata (teams, venue, location, etc.). Once uploaded, the video will be processed by the Tactix AI platform to generate clips, stats, and summaries.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: AppToken
$config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKey('App-Token', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('App-Token', 'Bearer');

// Configure API key authorization: AppId
$config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKey('App-Id', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('App-Id', 'Bearer');


$apiInstance = new VictoryCode\SDK\Api\UploadsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$name = 'name_example'; // string
$video = '/path/to/file.txt'; // \SplFileObject
$home_team = 'home_team_example'; // string | ObjectId of home team
$away_team = 'away_team_example'; // string | ObjectId of away team
$venue = 'venue_example'; // string
$location = 'location_example'; // string
$description = 'description_example'; // string

try {
    $result = $apiInstance->uploadVideoAndCreateGame($name, $video, $home_team, $away_team, $venue, $location, $description);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UploadsApi->uploadVideoAndCreateGame: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **name** | **string**|  | |
| **video** | **\SplFileObject****\SplFileObject**|  | |
| **home_team** | **string**| ObjectId of home team | |
| **away_team** | **string**| ObjectId of away team | |
| **venue** | **string**|  | |
| **location** | **string**|  | |
| **description** | **string**|  | [optional] |

### Return type

[**\VictoryCode\SDK\Model\UploadVideoAndCreateGameResponse**](../Model/UploadVideoAndCreateGameResponse.md)

### Authorization

[AppToken](../../README.md#AppToken), [AppId](../../README.md#AppId)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
