# VictoryCode\SDK\VenueApi



All URIs are relative to https://sandbox.api.tactixai.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createVenue()**](VenueApi.md#createVenue) | **POST** /api/v1/client/venue | Create a new venue |
| [**deleteVenue()**](VenueApi.md#deleteVenue) | **DELETE** /api/v1/client/venue/{id} | Delete a venue |
| [**getVenues()**](VenueApi.md#getVenues) | **GET** /api/v1/client/venues | Get all venues |
| [**updateVenue()**](VenueApi.md#updateVenue) | **PATCH** /api/v1/client/venue/{id} | Update a venue |


## `createVenue()`

```php
createVenue($create_venue_dto): \VictoryCode\SDK\Model\SingleVenueResponseDto
```

Create a new venue

Registers a new venue where games are held, including details about the venue name and location.

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


$apiInstance = new VictoryCode\SDK\Api\VenueApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_venue_dto = new \VictoryCode\SDK\Model\CreateVenueDto(); // \VictoryCode\SDK\Model\CreateVenueDto

try {
    $result = $apiInstance->createVenue($create_venue_dto);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VenueApi->createVenue: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_venue_dto** | [**\VictoryCode\SDK\Model\CreateVenueDto**](../Model/CreateVenueDto.md)|  | |

### Return type

[**\VictoryCode\SDK\Model\SingleVenueResponseDto**](../Model/SingleVenueResponseDto.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteVenue()`

```php
deleteVenue($id): \VictoryCode\SDK\Model\DeleteResponseDto
```

Delete a venue

Permanently removes a venue registration from the system.

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


$apiInstance = new VictoryCode\SDK\Api\VenueApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string

try {
    $result = $apiInstance->deleteVenue($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VenueApi->deleteVenue: ', $e->getMessage(), PHP_EOL;
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

## `getVenues()`

```php
getVenues($limit, $page, $search): \VictoryCode\SDK\Model\ListVenuePaginatedResponseDto
```

Get all venues

Retrieves a paginated list of all venues where sports events or games are conducted.

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


$apiInstance = new VictoryCode\SDK\Api\VenueApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 10; // float
$page = 1; // float
$search = 'search_example'; // string

try {
    $result = $apiInstance->getVenues($limit, $page, $search);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VenueApi->getVenues: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **float**|  | [optional] [default to 10] |
| **page** | **float**|  | [optional] [default to 1] |
| **search** | **string**|  | [optional] |

### Return type

[**\VictoryCode\SDK\Model\ListVenuePaginatedResponseDto**](../Model/ListVenuePaginatedResponseDto.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateVenue()`

```php
updateVenue($id, $update_venue_dto): \VictoryCode\SDK\Model\SingleVenueResponseDto
```

Update a venue

Updates the information of an existing venue currently registered in the system.

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


$apiInstance = new VictoryCode\SDK\Api\VenueApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string
$update_venue_dto = new \VictoryCode\SDK\Model\UpdateVenueDto(); // \VictoryCode\SDK\Model\UpdateVenueDto

try {
    $result = $apiInstance->updateVenue($id, $update_venue_dto);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VenueApi->updateVenue: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**|  | |
| **update_venue_dto** | [**\VictoryCode\SDK\Model\UpdateVenueDto**](../Model/UpdateVenueDto.md)|  | |

### Return type

[**\VictoryCode\SDK\Model\SingleVenueResponseDto**](../Model/SingleVenueResponseDto.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
