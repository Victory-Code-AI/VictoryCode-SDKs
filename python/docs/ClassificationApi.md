# victorycode_sdk.ClassificationApi

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_classification**](ClassificationApi.md#create_classification) | **POST** /api/v1/client/classifications | Create a new classification
[**delete_classification**](ClassificationApi.md#delete_classification) | **DELETE** /api/v1/client/classifications/{id} | Delete a classification
[**get_classifications**](ClassificationApi.md#get_classifications) | **GET** /api/v1/client/classifications | Get all classifications
[**update_classification**](ClassificationApi.md#update_classification) | **PATCH** /api/v1/client/classifications/{id} | Update a classification


# **create_classification**
> SingleClassificationResponseDto create_classification(create_classification_dto)

Create a new classification

Creates a new classification entry for categorizing teams.

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.create_classification_dto import CreateClassificationDto
from victorycode_sdk.models.single_classification_response_dto import SingleClassificationResponseDto
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
    api_instance = victorycode_sdk.ClassificationApi(api_client)
    create_classification_dto = victorycode_sdk.CreateClassificationDto() # CreateClassificationDto | 

    try:
        # Create a new classification
        api_response = api_instance.create_classification(create_classification_dto)
        print("The response of ClassificationApi->create_classification:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassificationApi->create_classification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_classification_dto** | [**CreateClassificationDto**](CreateClassificationDto.md)|  | 

### Return type

[**SingleClassificationResponseDto**](SingleClassificationResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Classification created successfully. |  -  |
**400** |  |  -  |
**401** |  |  -  |
**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_classification**
> DeleteResponseDto delete_classification(id)

Delete a classification

Permanently deletes a team classification from the system.

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
    api_instance = victorycode_sdk.ClassificationApi(api_client)
    id = 'id_example' # str | 

    try:
        # Delete a classification
        api_response = api_instance.delete_classification(id)
        print("The response of ClassificationApi->delete_classification:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassificationApi->delete_classification: %s\n" % e)
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
**200** | Classification deleted successfully. |  -  |
**400** |  |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_classifications**
> ListClassificationPaginatedResponseDto get_classifications(limit=limit, page=page, search=search)

Get all classifications

Retrieves a paginated list of all team classifications available in the system.

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.list_classification_paginated_response_dto import ListClassificationPaginatedResponseDto
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
    api_instance = victorycode_sdk.ClassificationApi(api_client)
    limit = 10 # float |  (optional) (default to 10)
    page = 1 # float |  (optional) (default to 1)
    search = 'search_example' # str |  (optional)

    try:
        # Get all classifications
        api_response = api_instance.get_classifications(limit=limit, page=page, search=search)
        print("The response of ClassificationApi->get_classifications:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassificationApi->get_classifications: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **float**|  | [optional] [default to 10]
 **page** | **float**|  | [optional] [default to 1]
 **search** | **str**|  | [optional] 

### Return type

[**ListClassificationPaginatedResponseDto**](ListClassificationPaginatedResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of classifications retrieved successfully. |  -  |
**400** |  |  -  |
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_classification**
> SingleClassificationResponseDto update_classification(id, update_classification_dto)

Update a classification

Updates an existing team classification entry identified by its ID.

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.single_classification_response_dto import SingleClassificationResponseDto
from victorycode_sdk.models.update_classification_dto import UpdateClassificationDto
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
    api_instance = victorycode_sdk.ClassificationApi(api_client)
    id = 'id_example' # str | 
    update_classification_dto = victorycode_sdk.UpdateClassificationDto() # UpdateClassificationDto | 

    try:
        # Update a classification
        api_response = api_instance.update_classification(id, update_classification_dto)
        print("The response of ClassificationApi->update_classification:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassificationApi->update_classification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **update_classification_dto** | [**UpdateClassificationDto**](UpdateClassificationDto.md)|  | 

### Return type

[**SingleClassificationResponseDto**](SingleClassificationResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Classification updated successfully. |  -  |
**400** |  |  -  |
**401** |  |  -  |
**404** |  |  -  |
**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

