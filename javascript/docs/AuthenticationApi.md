# AuthenticationApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAccessToken**](AuthenticationApi.md#getaccesstoken) | **GET** /api/v1/client/auth/token | Get Access Token |



## getAccessToken

> TokenResponse getAccessToken()

Get Access Token

Exchanges client credentials for a temporary bearer token.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '@victorycode/sdk';
import type { GetAccessTokenRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: AppSecret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new AuthenticationApi(config);

  try {
    const data = await api.getAccessToken();
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

[**TokenResponse**](TokenResponse.md)

### Authorization

[AppSecret](../README.md#AppSecret), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Authentication successful. |  -  |
| **401** | Authentication failed due to invalid appId or appSecret. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

