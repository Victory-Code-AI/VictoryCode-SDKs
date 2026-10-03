# AuthenticationApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getAccessToken**](AuthenticationApi.md#getAccessToken) | **GET** /api/v1/client/auth/token | Get Access Token |


<a id="getAccessToken"></a>
# **getAccessToken**
> TokenResponse getAccessToken()

Get Access Token

Exchanges client credentials for a temporary bearer token.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = AuthenticationApi()
try {
    val result : TokenResponse = apiInstance.getAccessToken()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AuthenticationApi#getAccessToken")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AuthenticationApi#getAccessToken")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization


Configure AppSecret:
    ApiClient.apiKey["App-Secret"] = ""
    ApiClient.apiKeyPrefix["App-Secret"] = ""
Configure Client-App-Id:
    ApiClient.apiKey["App-Id"] = ""
    ApiClient.apiKeyPrefix["App-Id"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

