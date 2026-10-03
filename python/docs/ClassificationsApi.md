# victorycode_sdk.ClassificationsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_classification**](ClassificationsApi.md#create_classification) | **POST** /api/v1/client/classifications | Create a new classification
[**delete_classification**](ClassificationsApi.md#delete_classification) | **DELETE** /api/v1/client/classifications/{id} | Delete a classification
[**list_classifications**](ClassificationsApi.md#list_classifications) | **GET** /api/v1/client/classifications | Get all classifications
[**update_classification**](ClassificationsApi.md#update_classification) | **PATCH** /api/v1/client/classifications/{id} | Update a classification


# **create_classification**
> CreateClassificationResponse create_classification(create_classification_request)

Create a new classification

Creates a new classification record in the Tactix platform.
Classifications are used to categorize teams by league, division, or competition level (e.g., “Division 1A”, “Junior Varsity”).

### Example

* Api Key Authentication (AppToken):
* Api Key Authentication (AppId):

```python
import victorycode_sdk
from victorycode_sdk.models.create_classification_request import CreateClassificationRequest
from victorycode_sdk.models.create_classification_response import CreateClassificationResponse
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

# Configure API key authorization: AppToken
configuration.api_key['AppToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['AppToken'] = 'Bearer'

# Configure API key authorization: AppId
configuration.api_key['AppId'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['AppId'] = 'Bearer'

# Enter a context with an instance of the API client
with victorycode_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = victorycode_sdk.ClassificationsApi(api_client)
    create_classification_request = {"name":"Test Classification","description":"This is Test Classification description"} # CreateClassificationRequest | 

    try:
        # Create a new classification
        api_response = api_instance.create_classification(create_classification_request)
        print("The response of ClassificationsApi->create_classification:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassificationsApi->create_classification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_classification_request** | [**CreateClassificationRequest**](CreateClassificationRequest.md)|  | 

### Return type

[**CreateClassificationResponse**](CreateClassificationResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_classification**
> DeleteClassificationResponse delete_classification(id)

Delete a classification

Deletes a specific classification from the Tactix system using its unique id.
This permanently removes the classification and disassociates it from any linked team records.

### Example

* Api Key Authentication (AppToken):
* Api Key Authentication (AppId):

```python
import victorycode_sdk
from victorycode_sdk.models.delete_classification_response import DeleteClassificationResponse
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

# Configure API key authorization: AppToken
configuration.api_key['AppToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['AppToken'] = 'Bearer'

# Configure API key authorization: AppId
configuration.api_key['AppId'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['AppId'] = 'Bearer'

# Enter a context with an instance of the API client
with victorycode_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = victorycode_sdk.ClassificationsApi(api_client)
    id = 'id_example' # str | 

    try:
        # Delete a classification
        api_response = api_instance.delete_classification(id)
        print("The response of ClassificationsApi->delete_classification:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassificationsApi->delete_classification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**DeleteClassificationResponse**](DeleteClassificationResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_classifications**
> ListClassificationsResponse list_classifications(limit=limit, page=page)

Get all classifications

Retrieves a paginated list of all classifications available to the authenticated client.
Each classification object includes a name, description, and timestamps for creation and modification.
This endpoint is typically used to populate dropdowns or filters when creating or updating teams.

### Example

* Api Key Authentication (AppToken):
* Api Key Authentication (AppId):

```python
import victorycode_sdk
from victorycode_sdk.models.list_classifications_response import ListClassificationsResponse
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

# Configure API key authorization: AppToken
configuration.api_key['AppToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['AppToken'] = 'Bearer'

# Configure API key authorization: AppId
configuration.api_key['AppId'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['AppId'] = 'Bearer'

# Enter a context with an instance of the API client
with victorycode_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = victorycode_sdk.ClassificationsApi(api_client)
    limit = 10 # int |  (optional)
    page = 1 # int |  (optional)

    try:
        # Get all classifications
        api_response = api_instance.list_classifications(limit=limit, page=page)
        print("The response of ClassificationsApi->list_classifications:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassificationsApi->list_classifications: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**|  | [optional] 
 **page** | **int**|  | [optional] 

### Return type

[**ListClassificationsResponse**](ListClassificationsResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_classification**
> UpdateClassificationResponse update_classification(id, update_classification_request)

Update a classification

Updates an existing classification identified by its unique id.
This endpoint allows modification of the classification’s name or description.

### Example

* Api Key Authentication (AppToken):
* Api Key Authentication (AppId):

```python
import victorycode_sdk
from victorycode_sdk.models.update_classification_request import UpdateClassificationRequest
from victorycode_sdk.models.update_classification_response import UpdateClassificationResponse
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

# Configure API key authorization: AppToken
configuration.api_key['AppToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['AppToken'] = 'Bearer'

# Configure API key authorization: AppId
configuration.api_key['AppId'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['AppId'] = 'Bearer'

# Enter a context with an instance of the API client
with victorycode_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = victorycode_sdk.ClassificationsApi(api_client)
    id = 'id_example' # str | 
    update_classification_request = {"name":"Testing - Edited","description":"This is Classification description Edited"} # UpdateClassificationRequest | 

    try:
        # Update a classification
        api_response = api_instance.update_classification(id, update_classification_request)
        print("The response of ClassificationsApi->update_classification:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassificationsApi->update_classification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **update_classification_request** | [**UpdateClassificationRequest**](UpdateClassificationRequest.md)|  | 

### Return type

[**UpdateClassificationResponse**](UpdateClassificationResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

