# victorycode_sdk.AuthApi

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generate_access_token**](AuthApi.md#generate_access_token) | **GET** /api/v1/client/auth/token | Get client api token


# **generate_access_token**
> GenerateAccessTokenResponse generate_access_token()

Get client api token

This endpoint is used to generate a client API token that authenticates subsequent requests to the Tactix API. The client must provide a valid app-id and app-secret in the request headers. Upon successful validation, the server issues a short-lived JWT (JSON Web Token) that should be included in the Authorization header (as App-Token) for all protected API calls.

### Example

* Api Key Authentication (AppId):
* Api Key Authentication (AppSecret):

```python
import victorycode_sdk
from victorycode_sdk.models.generate_access_token_response import GenerateAccessTokenResponse
from victorycode_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sandbox.api.tactixai.com
# See configuration.py for a list of all supported configuration parameters.
configuration = victorycode_sdk.Configuration(
    host = "https://sandbox.api.tactixai.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: AppId
configuration.api_key['AppId'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['AppId'] = 'Bearer'

# Configure API key authorization: AppSecret
configuration.api_key['AppSecret'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['AppSecret'] = 'Bearer'

# Enter a context with an instance of the API client
with victorycode_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = victorycode_sdk.AuthApi(api_client)

    try:
        # Get client api token
        api_response = api_instance.generate_access_token()
        print("The response of AuthApi->generate_access_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->generate_access_token: %s\n" % e)
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

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

