# victorycode_sdk.MascotsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_mascot**](MascotsApi.md#create_mascot) | **POST** /api/v1/client/mascots | Create a new mascot
[**delete_mascot**](MascotsApi.md#delete_mascot) | **DELETE** /api/v1/client/mascots/{id} | Delete a mascot
[**list_mascots**](MascotsApi.md#list_mascots) | **GET** /api/v1/client/mascots | Get all mascots
[**update_mascot**](MascotsApi.md#update_mascot) | **PATCH** /api/v1/client/mascots/{id} | Update a mascot


# **create_mascot**
> CreateMascotResponse create_mascot(name, description, mascot_image=mascot_image)

Create a new mascot

Creates a new mascot record in the Tactix system.
Clients can define the mascot’s name, description, and image URL, which can later be associated with one or more teams.
This endpoint is typically used when onboarding new teams or setting up school/club branding assets.

### Example

* Api Key Authentication (AppToken):
* Api Key Authentication (AppId):

```python
import victorycode_sdk
from victorycode_sdk.models.create_mascot_response import CreateMascotResponse
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
    api_instance = victorycode_sdk.MascotsApi(api_client)
    name = 'name_example' # str | 
    description = 'description_example' # str | 
    mascot_image = None # bytes |  (optional)

    try:
        # Create a new mascot
        api_response = api_instance.create_mascot(name, description, mascot_image=mascot_image)
        print("The response of MascotsApi->create_mascot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MascotsApi->create_mascot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**|  | 
 **description** | **str**|  | 
 **mascot_image** | **bytes**|  | [optional] 

### Return type

[**CreateMascotResponse**](CreateMascotResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_mascot**
> DeleteMascotResponse delete_mascot(id)

Delete a mascot

Deletes a specific mascot from the Tactix system using its unique id.
This operation permanently removes the mascot record and any direct associations it holds with teams.
It should be used with caution, as deleted mascots cannot be restored through the API.

### Example

* Api Key Authentication (AppToken):
* Api Key Authentication (AppId):

```python
import victorycode_sdk
from victorycode_sdk.models.delete_mascot_response import DeleteMascotResponse
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
    api_instance = victorycode_sdk.MascotsApi(api_client)
    id = 'id_example' # str | 

    try:
        # Delete a mascot
        api_response = api_instance.delete_mascot(id)
        print("The response of MascotsApi->delete_mascot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MascotsApi->delete_mascot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**DeleteMascotResponse**](DeleteMascotResponse.md)

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

# **list_mascots**
> ListMascotsResponse list_mascots(limit=limit, page=page)

Get all mascots

Retrieves a paginated list of all mascots available to the authenticated client.
Each mascot record contains the name, description, image URL, and timestamps.
This endpoint is ideal for displaying mascot lists, searching for existing records, or selecting mascots to associate with teams.

### Example

* Api Key Authentication (AppToken):
* Api Key Authentication (AppId):

```python
import victorycode_sdk
from victorycode_sdk.models.list_mascots_response import ListMascotsResponse
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
    api_instance = victorycode_sdk.MascotsApi(api_client)
    limit = 10 # int |  (optional)
    page = 1 # int |  (optional)

    try:
        # Get all mascots
        api_response = api_instance.list_mascots(limit=limit, page=page)
        print("The response of MascotsApi->list_mascots:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MascotsApi->list_mascots: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**|  | [optional] 
 **page** | **int**|  | [optional] 

### Return type

[**ListMascotsResponse**](ListMascotsResponse.md)

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

# **update_mascot**
> UpdateMascotResponse update_mascot(id, name=name, description=description, mascot_image=mascot_image)

Update a mascot

Updates the details of an existing mascot identified by its unique id.
This endpoint allows clients to modify a mascot’s name, description, and image, ensuring team branding and contextual information remain accurate and up to date.

### Example

* Api Key Authentication (AppToken):
* Api Key Authentication (AppId):

```python
import victorycode_sdk
from victorycode_sdk.models.update_mascot_response import UpdateMascotResponse
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
    api_instance = victorycode_sdk.MascotsApi(api_client)
    id = 'id_example' # str | 
    name = 'name_example' # str |  (optional)
    description = 'description_example' # str |  (optional)
    mascot_image = None # bytes |  (optional)

    try:
        # Update a mascot
        api_response = api_instance.update_mascot(id, name=name, description=description, mascot_image=mascot_image)
        print("The response of MascotsApi->update_mascot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MascotsApi->update_mascot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **name** | **str**|  | [optional] 
 **description** | **str**|  | [optional] 
 **mascot_image** | **bytes**|  | [optional] 

### Return type

[**UpdateMascotResponse**](UpdateMascotResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

