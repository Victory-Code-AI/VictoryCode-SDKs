# VictoryCode\SDK\PlaysEventsApi



All URIs are relative to https://sandbox.api.tactixai.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getPlayById()**](PlaysEventsApi.md#getPlayById) | **GET** /api/v1/client/plays/{playId} | Get the single Play Clip |
| [**getPlaysOfGame()**](PlaysEventsApi.md#getPlaysOfGame) | **GET** /api/v1/client/game/{gameId}/plays | Get a list of all plays for a game |
| [**getPlaysOfVideo()**](PlaysEventsApi.md#getPlaysOfVideo) | **GET** /api/v1/client/videos/{videoId}/plays | Get a list of play clips for a video |


## `getPlayById()`

```php
getPlayById($play_id): \VictoryCode\SDK\Model\PlayClipListItemDto
```

Get the single Play Clip

Retrieves the complete metadata for a single play clip by its unique ID.

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


$apiInstance = new VictoryCode\SDK\Api\PlaysEventsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$play_id = 'play_id_example'; // string

try {
    $result = $apiInstance->getPlayById($play_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlaysEventsApi->getPlayById: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **play_id** | **string**|  | |

### Return type

[**\VictoryCode\SDK\Model\PlayClipListItemDto**](../Model/PlayClipListItemDto.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getPlaysOfGame()`

```php
getPlaysOfGame($game_id, $limit, $offset, $search, $down, $distance_zone, $play_type): \VictoryCode\SDK\Model\ListGameAllPlaysResponseDto
```

Get a list of all plays for a game

Retrieves a paginated list of all plays for a given game. The results can be filtered by various play attributes.

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


$apiInstance = new VictoryCode\SDK\Api\PlaysEventsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$game_id = 'game_id_example'; // string
$limit = 50; // float | The number of results to return per page.
$offset = 0; // float | The number of results to skip for pagination.
$search = 'search_example'; // string
$down = 1; // string | Filter by down number
$distance_zone = LONG; // string | Filter by distance zone (yards to go)
$play_type = PASS; // string | Filter by analyzed play type

try {
    $result = $apiInstance->getPlaysOfGame($game_id, $limit, $offset, $search, $down, $distance_zone, $play_type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlaysEventsApi->getPlaysOfGame: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **game_id** | **string**|  | |
| **limit** | **float**| The number of results to return per page. | [optional] [default to 50] |
| **offset** | **float**| The number of results to skip for pagination. | [optional] [default to 0] |
| **search** | **string**|  | [optional] |
| **down** | **string**| Filter by down number | [optional] |
| **distance_zone** | **string**| Filter by distance zone (yards to go) | [optional] |
| **play_type** | **string**| Filter by analyzed play type | [optional] |

### Return type

[**\VictoryCode\SDK\Model\ListGameAllPlaysResponseDto**](../Model/ListGameAllPlaysResponseDto.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getPlaysOfVideo()`

```php
getPlaysOfVideo($video_id, $limit, $offset, $search, $down, $distance_zone, $play_type): \VictoryCode\SDK\Model\ListPlayClipsResponseDto
```

Get a list of play clips for a video

Retrieves a paginated list of all play clips for a given video. The results can be filtered by various play attributes.

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


$apiInstance = new VictoryCode\SDK\Api\PlaysEventsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$video_id = 'video_id_example'; // string
$limit = 50; // float | The number of results to return per page.
$offset = 0; // float | The number of results to skip for pagination.
$search = 'search_example'; // string
$down = 1; // string | Filter by down number
$distance_zone = LONG; // string | Filter by distance zone (yards to go)
$play_type = PASS; // string | Filter by analyzed play type

try {
    $result = $apiInstance->getPlaysOfVideo($video_id, $limit, $offset, $search, $down, $distance_zone, $play_type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlaysEventsApi->getPlaysOfVideo: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **video_id** | **string**|  | |
| **limit** | **float**| The number of results to return per page. | [optional] [default to 50] |
| **offset** | **float**| The number of results to skip for pagination. | [optional] [default to 0] |
| **search** | **string**|  | [optional] |
| **down** | **string**| Filter by down number | [optional] |
| **distance_zone** | **string**| Filter by distance zone (yards to go) | [optional] |
| **play_type** | **string**| Filter by analyzed play type | [optional] |

### Return type

[**\VictoryCode\SDK\Model\ListPlayClipsResponseDto**](../Model/ListPlayClipsResponseDto.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
