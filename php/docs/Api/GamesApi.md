# VictoryCode\SDK\GamesApi



All URIs are relative to https://sandbox.api.tactixai.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**addVideoToGame()**](GamesApi.md#addVideoToGame) | **POST** /api/v1/client/games/{gameId}/video | Add new video to a game |
| [**createGameWithVideoUrl()**](GamesApi.md#createGameWithVideoUrl) | **POST** /api/v1/client/games | Create a new Game with Video URL |
| [**getGameDetails()**](GamesApi.md#getGameDetails) | **GET** /api/v1/client/games/{gameId} | Get a Single Game. |
| [**getGames()**](GamesApi.md#getGames) | **GET** /api/v1/client/games | List and Filter Games. |
| [**getVideosOfGame()**](GamesApi.md#getVideosOfGame) | **GET** /api/v1/client/games/{gameId}/videos | Get a list of videos of a game |


## `addVideoToGame()`

```php
addVideoToGame($game_id, $add_video_to_game_with_s3_link_dto): \VictoryCode\SDK\Model\SingleVideoResponseDto
```

Add new video to a game

Adds a new video to game.

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


$apiInstance = new VictoryCode\SDK\Api\GamesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$game_id = 'game_id_example'; // string
$add_video_to_game_with_s3_link_dto = new \VictoryCode\SDK\Model\AddVideoToGameWithS3LinkDto(); // \VictoryCode\SDK\Model\AddVideoToGameWithS3LinkDto

try {
    $result = $apiInstance->addVideoToGame($game_id, $add_video_to_game_with_s3_link_dto);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GamesApi->addVideoToGame: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **game_id** | **string**|  | |
| **add_video_to_game_with_s3_link_dto** | [**\VictoryCode\SDK\Model\AddVideoToGameWithS3LinkDto**](../Model/AddVideoToGameWithS3LinkDto.md)|  | |

### Return type

[**\VictoryCode\SDK\Model\SingleVideoResponseDto**](../Model/SingleVideoResponseDto.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createGameWithVideoUrl()`

```php
createGameWithVideoUrl($client_create_game_with_video_url_dto): \VictoryCode\SDK\Model\GameDetailsResponse
```

Create a new Game with Video URL

Registers a new game and associates a video URL (e.g., from a third-party source) with it in a single step.

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


$apiInstance = new VictoryCode\SDK\Api\GamesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_create_game_with_video_url_dto = new \VictoryCode\SDK\Model\ClientCreateGameWithVideoUrlDto(); // \VictoryCode\SDK\Model\ClientCreateGameWithVideoUrlDto

try {
    $result = $apiInstance->createGameWithVideoUrl($client_create_game_with_video_url_dto);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GamesApi->createGameWithVideoUrl: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **client_create_game_with_video_url_dto** | [**\VictoryCode\SDK\Model\ClientCreateGameWithVideoUrlDto**](../Model/ClientCreateGameWithVideoUrlDto.md)|  | |

### Return type

[**\VictoryCode\SDK\Model\GameDetailsResponse**](../Model/GameDetailsResponse.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getGameDetails()`

```php
getGameDetails($game_id): \VictoryCode\SDK\Model\GameDetailsResponse
```

Get a Single Game.

Retrieves the core metadata for a single game, including date, time, location, and teams who participated.

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


$apiInstance = new VictoryCode\SDK\Api\GamesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$game_id = 'game_id_example'; // string

try {
    $result = $apiInstance->getGameDetails($game_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GamesApi->getGameDetails: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **game_id** | **string**|  | |

### Return type

[**\VictoryCode\SDK\Model\GameDetailsResponse**](../Model/GameDetailsResponse.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getGames()`

```php
getGames($limit, $offset, $search): \VictoryCode\SDK\Model\ListGamesPaginatedResponseDto
```

List and Filter Games.

Retrieves a paginated list of games, with optional filters for team, upload status, and date-time range.

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


$apiInstance = new VictoryCode\SDK\Api\GamesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 50; // float | The number of results to return per page.
$offset = 0; // float | The number of results to skip for pagination.
$search = 'search_example'; // string

try {
    $result = $apiInstance->getGames($limit, $offset, $search);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GamesApi->getGames: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **float**| The number of results to return per page. | [optional] [default to 50] |
| **offset** | **float**| The number of results to skip for pagination. | [optional] [default to 0] |
| **search** | **string**|  | [optional] |

### Return type

[**\VictoryCode\SDK\Model\ListGamesPaginatedResponseDto**](../Model/ListGamesPaginatedResponseDto.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getVideosOfGame()`

```php
getVideosOfGame($game_id, $limit, $offset): \VictoryCode\SDK\Model\ListVideoPaginatedResponseDto
```

Get a list of videos of a game

Retrieves a list of videos of a game.

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


$apiInstance = new VictoryCode\SDK\Api\GamesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$game_id = 'game_id_example'; // string
$limit = 50; // float | The number of results to return per page.
$offset = 0; // float | The number of results to skip for pagination.

try {
    $result = $apiInstance->getVideosOfGame($game_id, $limit, $offset);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GamesApi->getVideosOfGame: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **game_id** | **string**|  | |
| **limit** | **float**| The number of results to return per page. | [optional] [default to 50] |
| **offset** | **float**| The number of results to skip for pagination. | [optional] [default to 0] |

### Return type

[**\VictoryCode\SDK\Model\ListVideoPaginatedResponseDto**](../Model/ListVideoPaginatedResponseDto.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
