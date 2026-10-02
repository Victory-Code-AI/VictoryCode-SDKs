# VictoryCode\SDK\MascotsApi

The Mascots folder provides endpoints to manage mascot data within the Tactix platform. Mascots represent the visual or symbolic identity of teams and are often used across UI components, branding materials, and analytical summaries. This folder allows clients to create, retrieve, update, and delete mascot records that are linked to team profiles.

All URIs are relative to https://sandbox.api.tactixai.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createMascot()**](MascotsApi.md#createMascot) | **POST** /api/v1/client/mascots | Create a new mascot |
| [**deleteMascot()**](MascotsApi.md#deleteMascot) | **DELETE** /api/v1/client/mascots/{id} | Delete a mascot |
| [**listMascots()**](MascotsApi.md#listMascots) | **GET** /api/v1/client/mascots | Get all mascots |
| [**updateMascot()**](MascotsApi.md#updateMascot) | **PATCH** /api/v1/client/mascots/{id} | Update a mascot |


## `createMascot()`

```php
createMascot($name, $description, $mascot_image): \VictoryCode\SDK\Model\CreateMascotResponse
```

Create a new mascot

Creates a new mascot record in the Tactix system. Clients can define the mascot’s name, description, and image URL, which can later be associated with one or more teams. This endpoint is typically used when onboarding new teams or setting up school/club branding assets.

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


$apiInstance = new VictoryCode\SDK\Api\MascotsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$name = 'name_example'; // string
$description = 'description_example'; // string
$mascot_image = '/path/to/file.txt'; // \SplFileObject

try {
    $result = $apiInstance->createMascot($name, $description, $mascot_image);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MascotsApi->createMascot: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **name** | **string**|  | |
| **description** | **string**|  | |
| **mascot_image** | **\SplFileObject****\SplFileObject**|  | [optional] |

### Return type

[**\VictoryCode\SDK\Model\CreateMascotResponse**](../Model/CreateMascotResponse.md)

### Authorization

[AppToken](../../README.md#AppToken), [AppId](../../README.md#AppId)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteMascot()`

```php
deleteMascot($id): \VictoryCode\SDK\Model\DeleteMascotResponse
```

Delete a mascot

Deletes a specific mascot from the Tactix system using its unique id. This operation permanently removes the mascot record and any direct associations it holds with teams. It should be used with caution, as deleted mascots cannot be restored through the API.

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


$apiInstance = new VictoryCode\SDK\Api\MascotsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string

try {
    $result = $apiInstance->deleteMascot($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MascotsApi->deleteMascot: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**|  | |

### Return type

[**\VictoryCode\SDK\Model\DeleteMascotResponse**](../Model/DeleteMascotResponse.md)

### Authorization

[AppToken](../../README.md#AppToken), [AppId](../../README.md#AppId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listMascots()`

```php
listMascots($limit, $page): \VictoryCode\SDK\Model\ListMascotsResponse
```

Get all mascots

Retrieves a paginated list of all mascots available to the authenticated client. Each mascot record contains the name, description, image URL, and timestamps. This endpoint is ideal for displaying mascot lists, searching for existing records, or selecting mascots to associate with teams.

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


$apiInstance = new VictoryCode\SDK\Api\MascotsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 10; // int
$page = 1; // int

try {
    $result = $apiInstance->listMascots($limit, $page);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MascotsApi->listMascots: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**|  | [optional] |
| **page** | **int**|  | [optional] |

### Return type

[**\VictoryCode\SDK\Model\ListMascotsResponse**](../Model/ListMascotsResponse.md)

### Authorization

[AppToken](../../README.md#AppToken), [AppId](../../README.md#AppId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateMascot()`

```php
updateMascot($id, $name, $description, $mascot_image): \VictoryCode\SDK\Model\UpdateMascotResponse
```

Update a mascot

Updates the details of an existing mascot identified by its unique id. This endpoint allows clients to modify a mascot’s name, description, and image, ensuring team branding and contextual information remain accurate and up to date.

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


$apiInstance = new VictoryCode\SDK\Api\MascotsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string
$name = 'name_example'; // string
$description = 'description_example'; // string
$mascot_image = '/path/to/file.txt'; // \SplFileObject

try {
    $result = $apiInstance->updateMascot($id, $name, $description, $mascot_image);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MascotsApi->updateMascot: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**|  | |
| **name** | **string**|  | [optional] |
| **description** | **string**|  | [optional] |
| **mascot_image** | **\SplFileObject****\SplFileObject**|  | [optional] |

### Return type

[**\VictoryCode\SDK\Model\UpdateMascotResponse**](../Model/UpdateMascotResponse.md)

### Authorization

[AppToken](../../README.md#AppToken), [AppId](../../README.md#AppId)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
