# VictoryCode\SDK\GameRecapApi



All URIs are relative to https://sandbox.api.tactixai.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getGameRecapGameBoxScore()**](GameRecapApi.md#getGameRecapGameBoxScore) | **GET** /api/v1/client/game-recap/{videoId}/game-box-score | Get the Game Recap Game Box Score for a specific Game. |
| [**getGameRecapScore()**](GameRecapApi.md#getGameRecapScore) | **GET** /api/v1/client/game-recap/{videoId}/score | Get the Game Recap Score for a specific Game. |
| [**getGameRecapScoringSummary()**](GameRecapApi.md#getGameRecapScoringSummary) | **GET** /api/v1/client/game-recap/{videoId}/scoring-summary | Get the Game Recap Scoring Summary for a specific Game. |
| [**getGameRecapScoringSummaryPro()**](GameRecapApi.md#getGameRecapScoringSummaryPro) | **GET** /api/v1/client/game-recap/{videoId}/scoring-summary-pro | Get the Game Recap Scoring Summary Pro for a specific Game. |
| [**getGameRecapTeamStats()**](GameRecapApi.md#getGameRecapTeamStats) | **GET** /api/v1/client/game-recap/{videoId}/team-stats | Get the Game Recap Team Stats for a specific Game. |


## `getGameRecapGameBoxScore()`

```php
getGameRecapGameBoxScore($video_id): \VictoryCode\SDK\Model\GameBoxScoreResponseDto
```

Get the Game Recap Game Box Score for a specific Game.

Retrieves full game box score stats for both teams and players for a specific game.

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


$apiInstance = new VictoryCode\SDK\Api\GameRecapApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$video_id = 'video_id_example'; // string

try {
    $result = $apiInstance->getGameRecapGameBoxScore($video_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GameRecapApi->getGameRecapGameBoxScore: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **video_id** | **string**|  | |

### Return type

[**\VictoryCode\SDK\Model\GameBoxScoreResponseDto**](../Model/GameBoxScoreResponseDto.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getGameRecapScore()`

```php
getGameRecapScore($video_id): \VictoryCode\SDK\Model\GameScoreResponse
```

Get the Game Recap Score for a specific Game.

Retrieves the final score and the score breakdown by quarter and overtime periods for both the home and away teams.

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


$apiInstance = new VictoryCode\SDK\Api\GameRecapApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$video_id = 'video_id_example'; // string

try {
    $result = $apiInstance->getGameRecapScore($video_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GameRecapApi->getGameRecapScore: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **video_id** | **string**|  | |

### Return type

[**\VictoryCode\SDK\Model\GameScoreResponse**](../Model/GameScoreResponse.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getGameRecapScoringSummary()`

```php
getGameRecapScoringSummary($video_id): \VictoryCode\SDK\Model\GameRecapScoringSummaryResponse
```

Get the Game Recap Scoring Summary for a specific Game.

Retrieves a chronological list of all scoring plays for a specific game, including details about the play, the drive, and the resulting score.

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


$apiInstance = new VictoryCode\SDK\Api\GameRecapApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$video_id = 'video_id_example'; // string

try {
    $result = $apiInstance->getGameRecapScoringSummary($video_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GameRecapApi->getGameRecapScoringSummary: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **video_id** | **string**|  | |

### Return type

[**\VictoryCode\SDK\Model\GameRecapScoringSummaryResponse**](../Model/GameRecapScoringSummaryResponse.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getGameRecapScoringSummaryPro()`

```php
getGameRecapScoringSummaryPro($video_id): \VictoryCode\SDK\Model\GameRecapScoringSummaryProResponse
```

Get the Game Recap Scoring Summary Pro for a specific Game.

Retrieves the full pro scoring summary for a specific game with drive context and players involved for each scoring play.

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


$apiInstance = new VictoryCode\SDK\Api\GameRecapApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$video_id = 'video_id_example'; // string

try {
    $result = $apiInstance->getGameRecapScoringSummaryPro($video_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GameRecapApi->getGameRecapScoringSummaryPro: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **video_id** | **string**|  | |

### Return type

[**\VictoryCode\SDK\Model\GameRecapScoringSummaryProResponse**](../Model/GameRecapScoringSummaryProResponse.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getGameRecapTeamStats()`

```php
getGameRecapTeamStats($video_id): \VictoryCode\SDK\Model\GameRecapTeamStatsResponse
```

Get the Game Recap Team Stats for a specific Game.

Retrieves a detailed statistical breakdown for both the home and away teams, covering offense, defense, and special teams performance.

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


$apiInstance = new VictoryCode\SDK\Api\GameRecapApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$video_id = 'video_id_example'; // string

try {
    $result = $apiInstance->getGameRecapTeamStats($video_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GameRecapApi->getGameRecapTeamStats: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **video_id** | **string**|  | |

### Return type

[**\VictoryCode\SDK\Model\GameRecapTeamStatsResponse**](../Model/GameRecapTeamStatsResponse.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
