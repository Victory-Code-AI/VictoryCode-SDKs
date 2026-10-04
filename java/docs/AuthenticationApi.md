# AuthenticationApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAccessToken**](AuthenticationApi.md#getAccessToken) | **GET** /api/v1/client/auth/token | Get Access Token |


<a id="getAccessToken"></a>
# **getAccessToken**
> TokenResponse getAccessToken()

Get Access Token

Exchanges client credentials for a temporary bearer token.

### Example
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.AuthenticationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://sandbox.api.tactixai.com");
    
    // Configure API key authorization: AppSecret
    ApiKeyAuth AppSecret = (ApiKeyAuth) defaultClient.getAuthentication("AppSecret");
    AppSecret.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //AppSecret.setApiKeyPrefix("Token");

    // Configure API key authorization: Client-App-Id
    ApiKeyAuth Client-App-Id = (ApiKeyAuth) defaultClient.getAuthentication("Client-App-Id");
    Client-App-Id.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Client-App-Id.setApiKeyPrefix("Token");

    AuthenticationApi apiInstance = new AuthenticationApi(defaultClient);
    try {
      TokenResponse result = apiInstance.getAccessToken();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthenticationApi#getAccessToken");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

[AppSecret](../README.md#AppSecret), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Authentication successful. |  -  |
| **401** | Authentication failed due to invalid appId or appSecret. |  -  |

