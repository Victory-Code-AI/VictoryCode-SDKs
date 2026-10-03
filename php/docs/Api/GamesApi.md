# VictoryCode\SDK\GamesApi

Endpoints for discovering and retrieving game data available to the client. Use these to list all games, fetch a single game’s metadata, and navigate to related resources such as plays within the game. All endpoints require a valid App-Token.

All URIs are relative to https://sandbox.api.tactixai.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getGame()**](GamesApi.md#getGame) | **GET** /api/v1/client/games/{gameId} | Get single game |
| [**listGames()**](GamesApi.md#listGames) | **GET** /api/v1/client/games | Get All Games |


## `getGame()`

```php
getGame($game_id): \VictoryCode\SDK\Model\GetGameResponse
```

Get single game

Retrieves metadata for a specific game by gameId. The response includes core identifiers, participating teams, venue/location, timestamps, processing status, and any available high-level attributes required to render a game detail view.

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


$apiInstance = new VictoryCode\SDK\Api\GamesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$game_id = 'game_id_example'; // string

try {
    $result = $apiInstance->getGame($game_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GamesApi->getGame: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **game_id** | **string**|  | |

### Return type

[**\VictoryCode\SDK\Model\GetGameResponse**](../Model/GetGameResponse.md)

### Authorization

[AppToken](../../README.md#AppToken), [AppId](../../README.md#AppId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listGames()`

```php
listGames($limit, $page): \VictoryCode\SDK\Model\ListGamesResponse
```

Get All Games

Returns a paginated list of games accessible to the client. Useful for building game pickers and dashboards, or to obtain a gameId before fetching detailed resources.

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


$apiInstance = new VictoryCode\SDK\Api\GamesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 10; // int
$page = 1; // int

try {
    $result = $apiInstance->listGames($limit, $page);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GamesApi->listGames: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**|  | [optional] |
| **page** | **int**|  | [optional] |

### Return type

[**\VictoryCode\SDK\Model\ListGamesResponse**](../Model/ListGamesResponse.md)

### Authorization

[AppToken](../../README.md#AppToken), [AppId](../../README.md#AppId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
