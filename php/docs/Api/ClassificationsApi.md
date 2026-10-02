# VictoryCode\SDK\ClassificationsApi

The Classifications folder provides endpoints for managing team classification data within the Tactix platform. A classification defines a league, division, or level of competition that a team belongs to (for example, “Varsity Football” or “High School Division A”). Clients can use these endpoints to create, update, view, and delete classifications that are later referenced in Team records.

All URIs are relative to https://sandbox.api.tactixai.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createClassification()**](ClassificationsApi.md#createClassification) | **POST** /api/v1/client/classifications | Create a new classification |
| [**deleteClassification()**](ClassificationsApi.md#deleteClassification) | **DELETE** /api/v1/client/classifications/{id} | Delete a classification |
| [**listClassifications()**](ClassificationsApi.md#listClassifications) | **GET** /api/v1/client/classifications | Get all classifications |
| [**updateClassification()**](ClassificationsApi.md#updateClassification) | **PATCH** /api/v1/client/classifications/{id} | Update a classification |


## `createClassification()`

```php
createClassification($create_classification_request): \VictoryCode\SDK\Model\CreateClassificationResponse
```

Create a new classification

Creates a new classification record in the Tactix platform. Classifications are used to categorize teams by league, division, or competition level (e.g., “Division 1A”, “Junior Varsity”).

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


$apiInstance = new VictoryCode\SDK\Api\ClassificationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_classification_request = {"name":"Test Classification","description":"This is Test Classification description"}; // \VictoryCode\SDK\Model\CreateClassificationRequest

try {
    $result = $apiInstance->createClassification($create_classification_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClassificationsApi->createClassification: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_classification_request** | [**\VictoryCode\SDK\Model\CreateClassificationRequest**](../Model/CreateClassificationRequest.md)|  | |

### Return type

[**\VictoryCode\SDK\Model\CreateClassificationResponse**](../Model/CreateClassificationResponse.md)

### Authorization

[AppToken](../../README.md#AppToken), [AppId](../../README.md#AppId)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteClassification()`

```php
deleteClassification($id): \VictoryCode\SDK\Model\DeleteClassificationResponse
```

Delete a classification

Deletes a specific classification from the Tactix system using its unique id. This permanently removes the classification and disassociates it from any linked team records.

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


$apiInstance = new VictoryCode\SDK\Api\ClassificationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string

try {
    $result = $apiInstance->deleteClassification($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClassificationsApi->deleteClassification: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**|  | |

### Return type

[**\VictoryCode\SDK\Model\DeleteClassificationResponse**](../Model/DeleteClassificationResponse.md)

### Authorization

[AppToken](../../README.md#AppToken), [AppId](../../README.md#AppId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listClassifications()`

```php
listClassifications($limit, $page): \VictoryCode\SDK\Model\ListClassificationsResponse
```

Get all classifications

Retrieves a paginated list of all classifications available to the authenticated client. Each classification object includes a name, description, and timestamps for creation and modification. This endpoint is typically used to populate dropdowns or filters when creating or updating teams.

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


$apiInstance = new VictoryCode\SDK\Api\ClassificationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 10; // int
$page = 1; // int

try {
    $result = $apiInstance->listClassifications($limit, $page);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClassificationsApi->listClassifications: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**|  | [optional] |
| **page** | **int**|  | [optional] |

### Return type

[**\VictoryCode\SDK\Model\ListClassificationsResponse**](../Model/ListClassificationsResponse.md)

### Authorization

[AppToken](../../README.md#AppToken), [AppId](../../README.md#AppId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateClassification()`

```php
updateClassification($id, $update_classification_request): \VictoryCode\SDK\Model\UpdateClassificationResponse
```

Update a classification

Updates an existing classification identified by its unique id. This endpoint allows modification of the classification’s name or description.

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


$apiInstance = new VictoryCode\SDK\Api\ClassificationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string
$update_classification_request = {"name":"Testing - Edited","description":"This is Classification description Edited"}; // \VictoryCode\SDK\Model\UpdateClassificationRequest

try {
    $result = $apiInstance->updateClassification($id, $update_classification_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClassificationsApi->updateClassification: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**|  | |
| **update_classification_request** | [**\VictoryCode\SDK\Model\UpdateClassificationRequest**](../Model/UpdateClassificationRequest.md)|  | |

### Return type

[**\VictoryCode\SDK\Model\UpdateClassificationResponse**](../Model/UpdateClassificationResponse.md)

### Authorization

[AppToken](../../README.md#AppToken), [AppId](../../README.md#AppId)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
