# AuthAPI

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateAccessToken**](AuthAPI.md#generateaccesstoken) | **GET** /api/v1/client/auth/token | Get client api token


# **generateAccessToken**
```swift
    open class func generateAccessToken(completion: @escaping (_ data: GenerateAccessTokenResponse?, _ error: Error?) -> Void)
```

Get client api token

This endpoint is used to generate a client API token that authenticates subsequent requests to the Tactix API. The client must provide a valid app-id and app-secret in the request headers. Upon successful validation, the server issues a short-lived JWT (JSON Web Token) that should be included in the Authorization header (as App-Token) for all protected API calls.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK


// Get client api token
AuthAPI.generateAccessToken() { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GenerateAccessTokenResponse**](GenerateAccessTokenResponse.md)

### Authorization

[AppId](../README.md#AppId), [AppSecret](../README.md#AppSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

