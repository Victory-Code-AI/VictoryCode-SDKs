# VictoryCode\SDK\AuthenticationApi



All URIs are relative to https://sandbox.api.tactixai.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getAccessToken()**](AuthenticationApi.md#getAccessToken) | **GET** /api/v1/client/auth/token | Get Access Token |


## `getAccessToken()`

```php
getAccessToken(): \VictoryCode\SDK\Model\TokenResponse
```

Get Access Token

Exchanges client credentials for a temporary bearer token.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: AppSecret
$config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKey('App-Secret', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('App-Secret', 'Bearer');

// Configure API key authorization: Client-App-Id
$config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKey('App-Id', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('App-Id', 'Bearer');


$apiInstance = new VictoryCode\SDK\Api\AuthenticationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->getAccessToken();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AuthenticationApi->getAccessToken: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\VictoryCode\SDK\Model\TokenResponse**](../Model/TokenResponse.md)

### Authorization

[AppSecret](../../README.md#AppSecret), [Client-App-Id](../../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
