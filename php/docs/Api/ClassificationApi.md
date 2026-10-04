# VictoryCode\SDK\ClassificationApi



All URIs are relative to https://sandbox.api.tactixai.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createClassification()**](ClassificationApi.md#createClassification) | **POST** /api/v1/client/classifications | Create a new classification |
| [**deleteClassification()**](ClassificationApi.md#deleteClassification) | **DELETE** /api/v1/client/classifications/{id} | Delete a classification |
| [**getClassifications()**](ClassificationApi.md#getClassifications) | **GET** /api/v1/client/classifications | Get all classifications |
| [**updateClassification()**](ClassificationApi.md#updateClassification) | **PATCH** /api/v1/client/classifications/{id} | Update a classification |


## `createClassification()`

```php
createClassification($create_classification_dto): \VictoryCode\SDK\Model\SingleClassificationResponseDto
```

Create a new classification

Creates a new classification entry for categorizing teams.

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


$apiInstance = new VictoryCode\SDK\Api\ClassificationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_classification_dto = new \VictoryCode\SDK\Model\CreateClassificationDto(); // \VictoryCode\SDK\Model\CreateClassificationDto

try {
    $result = $apiInstance->createClassification($create_classification_dto);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClassificationApi->createClassification: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_classification_dto** | [**\VictoryCode\SDK\Model\CreateClassificationDto**](../Model/CreateClassificationDto.md)|  | |

### Return type

[**\VictoryCode\SDK\Model\SingleClassificationResponseDto**](../Model/SingleClassificationResponseDto.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteClassification()`

```php
deleteClassification($id): \VictoryCode\SDK\Model\DeleteResponseDto
```

Delete a classification

Permanently deletes a team classification from the system.

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


$apiInstance = new VictoryCode\SDK\Api\ClassificationApi(
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
    echo 'Exception when calling ClassificationApi->deleteClassification: ', $e->getMessage(), PHP_EOL;
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

## `getClassifications()`

```php
getClassifications($limit, $page, $search): \VictoryCode\SDK\Model\ListClassificationPaginatedResponseDto
```

Get all classifications

Retrieves a paginated list of all team classifications available in the system.

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


$apiInstance = new VictoryCode\SDK\Api\ClassificationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 10; // float
$page = 1; // float
$search = 'search_example'; // string

try {
    $result = $apiInstance->getClassifications($limit, $page, $search);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClassificationApi->getClassifications: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **float**|  | [optional] [default to 10] |
| **page** | **float**|  | [optional] [default to 1] |
| **search** | **string**|  | [optional] |

### Return type

[**\VictoryCode\SDK\Model\ListClassificationPaginatedResponseDto**](../Model/ListClassificationPaginatedResponseDto.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateClassification()`

```php
updateClassification($id, $update_classification_dto): \VictoryCode\SDK\Model\SingleClassificationResponseDto
```

Update a classification

Updates an existing team classification entry identified by its ID.

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


$apiInstance = new VictoryCode\SDK\Api\ClassificationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string
$update_classification_dto = new \VictoryCode\SDK\Model\UpdateClassificationDto(); // \VictoryCode\SDK\Model\UpdateClassificationDto

try {
    $result = $apiInstance->updateClassification($id, $update_classification_dto);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClassificationApi->updateClassification: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**|  | |
| **update_classification_dto** | [**\VictoryCode\SDK\Model\UpdateClassificationDto**](../Model/UpdateClassificationDto.md)|  | |

### Return type

[**\VictoryCode\SDK\Model\SingleClassificationResponseDto**](../Model/SingleClassificationResponseDto.md)

### Authorization

[Client-App-Token](../../README.md#Client-App-Token), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
