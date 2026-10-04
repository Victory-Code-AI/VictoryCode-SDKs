# victorycode_sdk.TeamsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_team**](TeamsApi.md#create_team) | **POST** /api/v1/client/teams | Create a new team
[**delete_team**](TeamsApi.md#delete_team) | **DELETE** /api/v1/client/teams/{id} | Delete a team
[**get_teams**](TeamsApi.md#get_teams) | **GET** /api/v1/client/teams | Get teams
[**update_team**](TeamsApi.md#update_team) | **PATCH** /api/v1/client/teams/{id} | Update a team


# **create_team**
> SingleTeamResponseDto create_team(create_team_dto)

Create a new team

Registers a new team in the system, including its name, short name, sport, mascots, classification.

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.create_team_dto import CreateTeamDto
from victorycode_sdk.models.single_team_response_dto import SingleTeamResponseDto
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
    api_instance = victorycode_sdk.TeamsApi(api_client)
    create_team_dto = victorycode_sdk.CreateTeamDto() # CreateTeamDto | 

    try:
        # Create a new team
        api_response = api_instance.create_team(create_team_dto)
        print("The response of TeamsApi->create_team:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsApi->create_team: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_team_dto** | [**CreateTeamDto**](CreateTeamDto.md)|  | 

### Return type

[**SingleTeamResponseDto**](SingleTeamResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Team created successfully. |  -  |
**400** |  |  -  |
**401** |  |  -  |
**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_team**
> DeleteResponseDto delete_team(id)

Delete a team

Permanently deletes a team record from the system.

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
    api_instance = victorycode_sdk.TeamsApi(api_client)
    id = 'id_example' # str | 

    try:
        # Delete a team
        api_response = api_instance.delete_team(id)
        print("The response of TeamsApi->delete_team:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsApi->delete_team: %s\n" % e)
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
**200** | Team deleted successfully. |  -  |
**400** |  |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_teams**
> ListTeamPaginatedResponseDto get_teams(limit=limit, offset=offset, search=search, state=state)

Get teams

Retrieves a paginated list of all teams belonging to the client. Supports filters for search, sport, and state.

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.list_team_paginated_response_dto import ListTeamPaginatedResponseDto
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
    api_instance = victorycode_sdk.TeamsApi(api_client)
    limit = 50 # float | The number of results to return per page. (optional) (default to 50)
    offset = 0 # float | The number of results to skip for pagination. (optional) (default to 0)
    search = 'search_example' # str |  (optional)
    state = 'state_example' # str |  (optional)

    try:
        # Get teams
        api_response = api_instance.get_teams(limit=limit, offset=offset, search=search, state=state)
        print("The response of TeamsApi->get_teams:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsApi->get_teams: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **float**| The number of results to return per page. | [optional] [default to 50]
 **offset** | **float**| The number of results to skip for pagination. | [optional] [default to 0]
 **search** | **str**|  | [optional] 
 **state** | **str**|  | [optional] 

### Return type

[**ListTeamPaginatedResponseDto**](ListTeamPaginatedResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of teams retrieved successfully. |  -  |
**400** |  |  -  |
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_team**
> SingleTeamResponseDto update_team(id, update_team_dto)

Update a team

Updates the details of an existing team identified by its ID. Allows updating the name, short name, coach, logo, and other details.

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.single_team_response_dto import SingleTeamResponseDto
from victorycode_sdk.models.update_team_dto import UpdateTeamDto
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
    api_instance = victorycode_sdk.TeamsApi(api_client)
    id = 'id_example' # str | 
    update_team_dto = victorycode_sdk.UpdateTeamDto() # UpdateTeamDto | 

    try:
        # Update a team
        api_response = api_instance.update_team(id, update_team_dto)
        print("The response of TeamsApi->update_team:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsApi->update_team: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **update_team_dto** | [**UpdateTeamDto**](UpdateTeamDto.md)|  | 

### Return type

[**SingleTeamResponseDto**](SingleTeamResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Team updated successfully. |  -  |
**400** |  |  -  |
**401** |  |  -  |
**404** |  |  -  |
**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

