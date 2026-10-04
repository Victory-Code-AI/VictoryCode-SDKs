# VictoryCode\SDK\MascotApi



All URIs are relative to https://sandbox.api.tactixai.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createMascot()**](MascotApi.md#createMascot) | **POST** /api/v1/client/mascots | Create a new mascot |
| [**deleteMascot()**](MascotApi.md#deleteMascot) | **DELETE** /api/v1/client/mascots/{id} | Delete a mascot |
| [**getMascots()**](MascotApi.md#getMascots) | **GET** /api/v1/client/mascots | Get all mascots |
| [**updateMascot()**](MascotApi.md#updateMascot) | **PATCH** /api/v1/client/mascots/{id} | Update a mascot |


## `createMascot()`

```php
createMascot($create_mascot_dto): \VictoryCode\SDK\Model\SingleMascotResponseDto
```

Create a new mascot

Creates a new mascot record with a name and description. An optional mascot image can be uploaded as part of the multipart form data.

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


$apiInstance = new VictoryCode\SDK\Api\MascotApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_mascot_dto = new \VictoryCode\SDK\Model\CreateMascotDto(); // \VictoryCode\SDK\Model\CreateMascotDto

try {
    $result = $apiInstance->createMascot($create_mascot_dto);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MascotApi->createMascot: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_mascot_dto** | [**\VictoryCode\SDK\Model\CreateMascotDto**](../Model/CreateMascotDto.md)|  | |

### Return type

[**\VictoryCode\SDK\Model\SingleMascotResponseDto**](../Model/SingleMascotResponseDto.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteMascot()`

```php
deleteMascot($id): \VictoryCode\SDK\Model\DeleteResponseDto
```

Delete a mascot

Permanently deletes a mascot record from the system.

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


$apiInstance = new VictoryCode\SDK\Api\MascotApi(
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
    echo 'Exception when calling MascotApi->deleteMascot: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**|  | |

### Return type

[**\VictoryCode\SDK\Model\DeleteResponseDto**](../Model/DeleteResponseDto.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getMascots()`

```php
getMascots($limit, $page, $search): \VictoryCode\SDK\Model\ListMascotPaginatedResponseDto
```

Get all mascots

Retrieves a paginated list of all mascots. Supports searching by name and pagination through query parameters.

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


$apiInstance = new VictoryCode\SDK\Api\MascotApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 10; // float
$page = 1; // float
$search = 'search_example'; // string

try {
    $result = $apiInstance->getMascots($limit, $page, $search);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MascotApi->getMascots: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **float**|  | [optional] [default to 10] |
| **page** | **float**|  | [optional] [default to 1] |
| **search** | **string**|  | [optional] |

### Return type

[**\VictoryCode\SDK\Model\ListMascotPaginatedResponseDto**](../Model/ListMascotPaginatedResponseDto.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateMascot()`

```php
updateMascot($id, $update_mascot_dto): \VictoryCode\SDK\Model\SingleMascotResponseDto
```

Update a mascot

Updates the details of an existing mascot identified by its ID. Allows updating the name, description, and mascot image.

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


$apiInstance = new VictoryCode\SDK\Api\MascotApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string
$update_mascot_dto = new \VictoryCode\SDK\Model\UpdateMascotDto(); // \VictoryCode\SDK\Model\UpdateMascotDto

try {
    $result = $apiInstance->updateMascot($id, $update_mascot_dto);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MascotApi->updateMascot: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**|  | |
| **update_mascot_dto** | [**\VictoryCode\SDK\Model\UpdateMascotDto**](../Model/UpdateMascotDto.md)|  | |

### Return type

[**\VictoryCode\SDK\Model\SingleMascotResponseDto**](../Model/SingleMascotResponseDto.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
