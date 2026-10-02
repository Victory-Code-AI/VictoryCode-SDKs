# AuthApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**generateAccessToken**](AuthApi.md#generateAccessToken) | **GET** /api/v1/client/auth/token | Get client api token |


<a id="generateAccessToken"></a>
# **generateAccessToken**
> GenerateAccessTokenResponse generateAccessToken()

Get client api token

This endpoint is used to generate a client API token that authenticates subsequent requests to the Tactix API. The client must provide a valid app-id and app-secret in the request headers. Upon successful validation, the server issues a short-lived JWT (JSON Web Token) that should be included in the Authorization header (as App-Token) for all protected API calls.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = AuthApi()
try {
    val result : GenerateAccessTokenResponse = apiInstance.generateAccessToken()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AuthApi#generateAccessToken")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AuthApi#generateAccessToken")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GenerateAccessTokenResponse**](GenerateAccessTokenResponse.md)

### Authorization


Configure AppId:
    ApiClient.apiKey["App-Id"] = ""
    ApiClient.apiKeyPrefix["App-Id"] = ""
Configure AppSecret:
    ApiClient.apiKey["app-secret"] = ""
    ApiClient.apiKeyPrefix["app-secret"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

