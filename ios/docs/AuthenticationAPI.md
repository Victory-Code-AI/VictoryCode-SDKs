# AuthenticationAPI

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccessToken**](AuthenticationAPI.md#getaccesstoken) | **GET** /api/v1/client/auth/token | Get Access Token


# **getAccessToken**
```swift
    open class func getAccessToken(completion: @escaping (_ data: TokenResponse?, _ error: Error?) -> Void)
```

Get Access Token

Exchanges client credentials for a temporary bearer token.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK


// Get Access Token
AuthenticationAPI.getAccessToken() { (response, error) in
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

[**TokenResponse**](TokenResponse.md)

### Authorization

[AppSecret](../README.md#AppSecret), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

