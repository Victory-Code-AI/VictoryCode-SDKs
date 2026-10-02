# VictoryCode\SDK\TeamsApi

The Teams folder provides endpoints for managing team-related data within the Tactix platform. It includes APIs to list / retrieve, create, update, or delete teams, along with their identifiers, mascots, and classifications.

All URIs are relative to https://sandbox.api.tactixai.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createTeam()**](TeamsApi.md#createTeam) | **POST** /api/v1/client/teams | Create a new team |
| [**deleteTeam()**](TeamsApi.md#deleteTeam) | **DELETE** /api/v1/client/teams/{id} | Delete a team |
| [**listTeams()**](TeamsApi.md#listTeams) | **GET** /api/v1/client/teams | Get teams |
| [**updateTeam()**](TeamsApi.md#updateTeam) | **PATCH** /api/v1/client/teams/{id} | Update a team |


## `createTeam()`

```php
createTeam($name, $sport, $short_name, $mascots, $classification, $team_logo): \VictoryCode\SDK\Model\CreateTeamResponse
```

Create a new team

Creates a new team record in the Tactix system. This endpoint allows clients to define a new team with key details such as name, short name, sport type, classification, mascot(s), and logo. Once created, the team can be referenced in other modules such as Games, Plays, or Game Recaps.

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


$apiInstance = new VictoryCode\SDK\Api\TeamsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$name = 'name_example'; // string
$sport = 'sport_example'; // string | (This can only be one of football,rugby,golf,soccer,nfl)
$short_name = 'short_name_example'; // string
$mascots = 'mascots_example'; // string | Array of Mascot IDs (must not be empty)
$classification = 'classification_example'; // string | Classification ID
$team_logo = '/path/to/file.txt'; // \SplFileObject

try {
    $result = $apiInstance->createTeam($name, $sport, $short_name, $mascots, $classification, $team_logo);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TeamsApi->createTeam: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **name** | **string**|  | |
| **sport** | **string**| (This can only be one of football,rugby,golf,soccer,nfl) | |
| **short_name** | **string**|  | |
| **mascots** | **string**| Array of Mascot IDs (must not be empty) | |
| **classification** | **string**| Classification ID | |
| **team_logo** | **\SplFileObject****\SplFileObject**|  | [optional] |

### Return type

[**\VictoryCode\SDK\Model\CreateTeamResponse**](../Model/CreateTeamResponse.md)

### Authorization

[AppToken](../../README.md#AppToken), [AppId](../../README.md#AppId)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteTeam()`

```php
deleteTeam($id): \VictoryCode\SDK\Model\DeleteTeamResponse
```

Delete a team

Deletes a specific team from the Tactix system using its unique id. This operation permanently removes the team record and its related metadata from the client’s accessible data scope. It should be used with caution, as deleted teams cannot be restored via the API.

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


$apiInstance = new VictoryCode\SDK\Api\TeamsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string

try {
    $result = $apiInstance->deleteTeam($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TeamsApi->deleteTeam: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**|  | |

### Return type

[**\VictoryCode\SDK\Model\DeleteTeamResponse**](../Model/DeleteTeamResponse.md)

### Authorization

[AppToken](../../README.md#AppToken), [AppId](../../README.md#AppId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listTeams()`

```php
listTeams($limit, $page): string
```

Get teams

Retrieves a paginated list of all teams available to the authenticated client. Each team object includes its name, short name, sport type, associated mascots, classification details, logo, and timestamps. This endpoint is typically used for team directories, selection lists, or administrative dashboards that require viewing multiple teams at once.

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


$apiInstance = new VictoryCode\SDK\Api\TeamsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 10; // int
$page = 1; // int

try {
    $result = $apiInstance->listTeams($limit, $page);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TeamsApi->listTeams: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**|  | [optional] |
| **page** | **int**|  | [optional] |

### Return type

**string**

### Authorization

[AppToken](../../README.md#AppToken), [AppId](../../README.md#AppId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateTeam()`

```php
updateTeam($id, $name, $sport, $short_name, $team_logo, $mascots, $classification): string
```

Update a team

Updates the information of an existing team identified by its unique id. This endpoint allows clients to modify team attributes such as name, short name, sport type, classification, mascots, coach, or logo. Upon successful update, the response returns the updated team object and a confirmation message.

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


$apiInstance = new VictoryCode\SDK\Api\TeamsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string
$name = 'name_example'; // string
$sport = 'sport_example'; // string | (This can only be one of football,rugby,golf,soccer,nfl)
$short_name = 'short_name_example'; // string
$team_logo = '/path/to/file.txt'; // \SplFileObject
$mascots = 'mascots_example'; // string | Array of Mascot IDs (must not be empty)
$classification = 'classification_example'; // string | Classification ID

try {
    $result = $apiInstance->updateTeam($id, $name, $sport, $short_name, $team_logo, $mascots, $classification);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TeamsApi->updateTeam: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**|  | |
| **name** | **string**|  | [optional] |
| **sport** | **string**| (This can only be one of football,rugby,golf,soccer,nfl) | [optional] |
| **short_name** | **string**|  | [optional] |
| **team_logo** | **\SplFileObject****\SplFileObject**|  | [optional] |
| **mascots** | **string**| Array of Mascot IDs (must not be empty) | [optional] |
| **classification** | **string**| Classification ID | [optional] |

### Return type

**string**

### Authorization

[AppToken](../../README.md#AppToken), [AppId](../../README.md#AppId)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `text/plain`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
