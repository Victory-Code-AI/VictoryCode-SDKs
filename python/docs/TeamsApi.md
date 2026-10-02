# victorycode_sdk.TeamsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_team**](TeamsApi.md#create_team) | **POST** /api/v1/client/teams | Create a new team
[**delete_team**](TeamsApi.md#delete_team) | **DELETE** /api/v1/client/teams/{id} | Delete a team
[**list_teams**](TeamsApi.md#list_teams) | **GET** /api/v1/client/teams | Get teams
[**update_team**](TeamsApi.md#update_team) | **PATCH** /api/v1/client/teams/{id} | Update a team


# **create_team**
> CreateTeamResponse create_team(name, sport, short_name, mascots, classification, team_logo=team_logo)

Create a new team

Creates a new team record in the Tactix system.
This endpoint allows clients to define a new team with key details such as name, short name, sport type, classification, mascot(s), and logo.
Once created, the team can be referenced in other modules such as Games, Plays, or Game Recaps.

### Example

* Api Key Authentication (AppToken):
* Api Key Authentication (AppId):

```python
import victorycode_sdk
from victorycode_sdk.models.create_team_response import CreateTeamResponse
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
    api_instance = victorycode_sdk.TeamsApi(api_client)
    name = 'name_example' # str | 
    sport = 'sport_example' # str | (This can only be one of football,rugby,golf,soccer,nfl)
    short_name = 'short_name_example' # str | 
    mascots = 'mascots_example' # str | Array of Mascot IDs (must not be empty)
    classification = 'classification_example' # str | Classification ID
    team_logo = None # bytes |  (optional)

    try:
        # Create a new team
        api_response = api_instance.create_team(name, sport, short_name, mascots, classification, team_logo=team_logo)
        print("The response of TeamsApi->create_team:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsApi->create_team: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**|  | 
 **sport** | **str**| (This can only be one of football,rugby,golf,soccer,nfl) | 
 **short_name** | **str**|  | 
 **mascots** | **str**| Array of Mascot IDs (must not be empty) | 
 **classification** | **str**| Classification ID | 
 **team_logo** | **bytes**|  | [optional] 

### Return type

[**CreateTeamResponse**](CreateTeamResponse.md)

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

# **delete_team**
> DeleteTeamResponse delete_team(id)

Delete a team

Deletes a specific team from the Tactix system using its unique id.
This operation permanently removes the team record and its related metadata from the client’s accessible data scope.
It should be used with caution, as deleted teams cannot be restored via the API.

### Example

* Api Key Authentication (AppToken):
* Api Key Authentication (AppId):

```python
import victorycode_sdk
from victorycode_sdk.models.delete_team_response import DeleteTeamResponse
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

[**DeleteTeamResponse**](DeleteTeamResponse.md)

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

# **list_teams**
> str list_teams(limit=limit, page=page)

Get teams

Retrieves a paginated list of all teams available to the authenticated client.
Each team object includes its name, short name, sport type, associated mascots, classification details, logo, and timestamps.
This endpoint is typically used for team directories, selection lists, or administrative dashboards that require viewing multiple teams at once.

### Example

* Api Key Authentication (AppToken):
* Api Key Authentication (AppId):

```python
import victorycode_sdk
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
    api_instance = victorycode_sdk.TeamsApi(api_client)
    limit = 10 # int |  (optional)
    page = 1 # int |  (optional)

    try:
        # Get teams
        api_response = api_instance.list_teams(limit=limit, page=page)
        print("The response of TeamsApi->list_teams:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsApi->list_teams: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**|  | [optional] 
 **page** | **int**|  | [optional] 

### Return type

**str**

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_team**
> str update_team(id, name=name, sport=sport, short_name=short_name, team_logo=team_logo, mascots=mascots, classification=classification)

Update a team

Updates the information of an existing team identified by its unique id.
This endpoint allows clients to modify team attributes such as name, short name, sport type, classification, mascots, coach, or logo.
Upon successful update, the response returns the updated team object and a confirmation message.

### Example

* Api Key Authentication (AppToken):
* Api Key Authentication (AppId):

```python
import victorycode_sdk
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
    api_instance = victorycode_sdk.TeamsApi(api_client)
    id = 'id_example' # str | 
    name = 'name_example' # str |  (optional)
    sport = 'sport_example' # str | (This can only be one of football,rugby,golf,soccer,nfl) (optional)
    short_name = 'short_name_example' # str |  (optional)
    team_logo = None # bytes |  (optional)
    mascots = 'mascots_example' # str | Array of Mascot IDs (must not be empty) (optional)
    classification = 'classification_example' # str | Classification ID (optional)

    try:
        # Update a team
        api_response = api_instance.update_team(id, name=name, sport=sport, short_name=short_name, team_logo=team_logo, mascots=mascots, classification=classification)
        print("The response of TeamsApi->update_team:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsApi->update_team: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **name** | **str**|  | [optional] 
 **sport** | **str**| (This can only be one of football,rugby,golf,soccer,nfl) | [optional] 
 **short_name** | **str**|  | [optional] 
 **team_logo** | **bytes**|  | [optional] 
 **mascots** | **str**| Array of Mascot IDs (must not be empty) | [optional] 
 **classification** | **str**| Classification ID | [optional] 

### Return type

**str**

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

