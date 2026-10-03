# AuthApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**generateAccessToken**](AuthApi.md#generateaccesstoken) | **GET** /api/v1/client/auth/token | Get client api token |



## generateAccessToken

> GenerateAccessTokenResponse generateAccessToken()

Get client api token

This endpoint is used to generate a client API token that authenticates subsequent requests to the Tactix API. The client must provide a valid app-id and app-secret in the request headers. Upon successful validation, the server issues a short-lived JWT (JSON Web Token) that should be included in the Authorization header (as App-Token) for all protected API calls.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '@victorycode/sdk';
import type { GenerateAccessTokenRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: AppId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AppSecret
    apiKey: "YOUR API KEY",
  });
  const api = new AuthApi(config);

  try {
    const data = await api.generateAccessToken();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GenerateAccessTokenResponse**](GenerateAccessTokenResponse.md)

### Authorization

[AppId](../README.md#AppId), [AppSecret](../README.md#AppSecret)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

