# victorycode_sdk.MascotApi

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_mascot**](MascotApi.md#create_mascot) | **POST** /api/v1/client/mascots | Create a new mascot
[**delete_mascot**](MascotApi.md#delete_mascot) | **DELETE** /api/v1/client/mascots/{id} | Delete a mascot
[**get_mascots**](MascotApi.md#get_mascots) | **GET** /api/v1/client/mascots | Get all mascots
[**update_mascot**](MascotApi.md#update_mascot) | **PATCH** /api/v1/client/mascots/{id} | Update a mascot


# **create_mascot**
> SingleMascotResponseDto create_mascot(create_mascot_dto)

Create a new mascot

Creates a new mascot record with a name and description. An optional mascot image can be uploaded as part of the multipart form data.

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.create_mascot_dto import CreateMascotDto
from victorycode_sdk.models.single_mascot_response_dto import SingleMascotResponseDto
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

# Configure Bearer authorization (JWT): Client-App-Token
configuration = victorycode_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Configure API key authorization: Client-App-Id
configuration.api_key['Client-App-Id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Client-App-Id'] = 'Bearer'

# Enter a context with an instance of the API client
with victorycode_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = victorycode_sdk.MascotApi(api_client)
    create_mascot_dto = victorycode_sdk.CreateMascotDto() # CreateMascotDto | 

    try:
        # Create a new mascot
        api_response = api_instance.create_mascot(create_mascot_dto)
        print("The response of MascotApi->create_mascot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MascotApi->create_mascot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_mascot_dto** | [**CreateMascotDto**](CreateMascotDto.md)|  | 

### Return type

[**SingleMascotResponseDto**](SingleMascotResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Mascot created successfully. |  -  |
**400** |  |  -  |
**401** |  |  -  |
**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_mascot**
> DeleteResponseDto delete_mascot(id)

Delete a mascot

Permanently deletes a mascot record from the system.

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.delete_response_dto import DeleteResponseDto
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

# Configure Bearer authorization (JWT): Client-App-Token
configuration = victorycode_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Configure API key authorization: Client-App-Id
configuration.api_key['Client-App-Id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Client-App-Id'] = 'Bearer'

# Enter a context with an instance of the API client
with victorycode_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = victorycode_sdk.MascotApi(api_client)
    id = 'id_example' # str | 

    try:
        # Delete a mascot
        api_response = api_instance.delete_mascot(id)
        print("The response of MascotApi->delete_mascot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MascotApi->delete_mascot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**DeleteResponseDto**](DeleteResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Mascot deleted successfully. |  -  |
**400** |  |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_mascots**
> ListMascotPaginatedResponseDto get_mascots(limit=limit, page=page, search=search)

Get all mascots

Retrieves a paginated list of all mascots. Supports searching by name and pagination through query parameters.

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.list_mascot_paginated_response_dto import ListMascotPaginatedResponseDto
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

# Configure Bearer authorization (JWT): Client-App-Token
configuration = victorycode_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Configure API key authorization: Client-App-Id
configuration.api_key['Client-App-Id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Client-App-Id'] = 'Bearer'

# Enter a context with an instance of the API client
with victorycode_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = victorycode_sdk.MascotApi(api_client)
    limit = 10 # float |  (optional) (default to 10)
    page = 1 # float |  (optional) (default to 1)
    search = 'search_example' # str |  (optional)

    try:
        # Get all mascots
        api_response = api_instance.get_mascots(limit=limit, page=page, search=search)
        print("The response of MascotApi->get_mascots:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MascotApi->get_mascots: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **float**|  | [optional] [default to 10]
 **page** | **float**|  | [optional] [default to 1]
 **search** | **str**|  | [optional] 

### Return type

[**ListMascotPaginatedResponseDto**](ListMascotPaginatedResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of mascots retrieved successfully. |  -  |
**400** |  |  -  |
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_mascot**
> SingleMascotResponseDto update_mascot(id, update_mascot_dto)

Update a mascot

Updates the details of an existing mascot identified by its ID. Allows updating the name, description, and mascot image.

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.single_mascot_response_dto import SingleMascotResponseDto
from victorycode_sdk.models.update_mascot_dto import UpdateMascotDto
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

# Configure Bearer authorization (JWT): Client-App-Token
configuration = victorycode_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Configure API key authorization: Client-App-Id
configuration.api_key['Client-App-Id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Client-App-Id'] = 'Bearer'

# Enter a context with an instance of the API client
with victorycode_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = victorycode_sdk.MascotApi(api_client)
    id = 'id_example' # str | 
    update_mascot_dto = victorycode_sdk.UpdateMascotDto() # UpdateMascotDto | 

    try:
        # Update a mascot
        api_response = api_instance.update_mascot(id, update_mascot_dto)
        print("The response of MascotApi->update_mascot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MascotApi->update_mascot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **update_mascot_dto** | [**UpdateMascotDto**](UpdateMascotDto.md)|  | 

### Return type

[**SingleMascotResponseDto**](SingleMascotResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Mascot updated successfully. |  -  |
**400** |  |  -  |
**401** |  |  -  |
**404** |  |  -  |
**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

