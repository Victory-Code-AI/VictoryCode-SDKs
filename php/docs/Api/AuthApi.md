# VictoryCode\SDK\AuthApi

The Auth folder includes authentication-related endpoints that enable secure client access to the Tactix API. These endpoints handle login flows, credential validation, and issuance of API tokens. All requests in this section must be made over HTTPS to ensure confidentiality and integrity.

All URIs are relative to https://sandbox.api.tactixai.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**generateAccessToken()**](AuthApi.md#generateAccessToken) | **GET** /api/v1/client/auth/token | Get client api token |


## `generateAccessToken()`

```php
generateAccessToken(): \VictoryCode\SDK\Model\GenerateAccessTokenResponse
```

Get client api token

This endpoint is used to generate a client API token that authenticates subsequent requests to the Tactix API. The client must provide a valid app-id and app-secret in the request headers. Upon successful validation, the server issues a short-lived JWT (JSON Web Token) that should be included in the Authorization header (as App-Token) for all protected API calls.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: AppId
$config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKey('App-Id', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('App-Id', 'Bearer');

// Configure API key authorization: AppSecret
$config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKey('app-secret', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('app-secret', 'Bearer');


$apiInstance = new VictoryCode\SDK\Api\AuthApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->generateAccessToken();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AuthApi->generateAccessToken: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\VictoryCode\SDK\Model\GenerateAccessTokenResponse**](../Model/GenerateAccessTokenResponse.md)

### Authorization

[AppId](../../README.md#AppId), [AppSecret](../../README.md#AppSecret)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
