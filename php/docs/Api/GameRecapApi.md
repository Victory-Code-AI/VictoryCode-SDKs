# VictoryCode\SDK\GameRecapApi



All URIs are relative to https://sandbox.api.tactixai.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getGameRecapScore()**](GameRecapApi.md#getGameRecapScore) | **GET** /api/v1/client/game-recap/{gameId}/score | Get the Game Recap Score for a specific Game |
| [**getGameRecapScoringSummary()**](GameRecapApi.md#getGameRecapScoringSummary) | **GET** /api/v1/client/game-recap/{gameId}/scoring-summary | Get the Game Recap Scoring Summary for a specific Game. |
| [**getGameRecapTeamStats()**](GameRecapApi.md#getGameRecapTeamStats) | **GET** /api/v1/client/game-recap/{gameId}/team-stats | Get the Game Recap Team Stats for a specific Game. |


## `getGameRecapScore()`

```php
getGameRecapScore($game_id): \VictoryCode\SDK\Model\GetGameRecapScoreResponse
```

Get the Game Recap Score for a specific Game

Retrieves the overall score for the specified game. This includes the final scoreline and also include period-by-period (quarters) breakdowns.

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


$apiInstance = new VictoryCode\SDK\Api\GameRecapApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$game_id = 'game_id_example'; // string

try {
    $result = $apiInstance->getGameRecapScore($game_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GameRecapApi->getGameRecapScore: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **game_id** | **string**|  | |

### Return type

[**\VictoryCode\SDK\Model\GetGameRecapScoreResponse**](../Model/GetGameRecapScoreResponse.md)

### Authorization

[AppToken](../../README.md#AppToken), [AppId](../../README.md#AppId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getGameRecapScoringSummary()`

```php
getGameRecapScoringSummary($game_id): \VictoryCode\SDK\Model\GetGameRecapScoringSummaryResponse
```

Get the Game Recap Scoring Summary for a specific Game.

Retrieves a chronological summary of all scoring plays for the specified game. Each record is linked to a playId, enabling clients to correlate the scoring event with detailed play data.

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


$apiInstance = new VictoryCode\SDK\Api\GameRecapApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$game_id = 'game_id_example'; // string

try {
    $result = $apiInstance->getGameRecapScoringSummary($game_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GameRecapApi->getGameRecapScoringSummary: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **game_id** | **string**|  | |

### Return type

[**\VictoryCode\SDK\Model\GetGameRecapScoringSummaryResponse**](../Model/GetGameRecapScoringSummaryResponse.md)

### Authorization

[AppToken](../../README.md#AppToken), [AppId](../../README.md#AppId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getGameRecapTeamStats()`

```php
getGameRecapTeamStats($game_id): \VictoryCode\SDK\Model\GetGameRecapTeamStatsResponse
```

Get the Game Recap Team Stats for a specific Game.

Retrieves a statistical summary for both the home and away teams in a specific game. The response includes key offensive and first-down metrics, allowing clients to analyze game efficiency, offensive output, and team balance between rushing and passing plays.

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


$apiInstance = new VictoryCode\SDK\Api\GameRecapApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$game_id = 'game_id_example'; // string

try {
    $result = $apiInstance->getGameRecapTeamStats($game_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GameRecapApi->getGameRecapTeamStats: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **game_id** | **string**|  | |

### Return type

[**\VictoryCode\SDK\Model\GetGameRecapTeamStatsResponse**](../Model/GetGameRecapTeamStatsResponse.md)

### Authorization

[AppToken](../../README.md#AppToken), [AppId](../../README.md#AppId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
