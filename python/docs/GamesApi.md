# victorycode_sdk.GamesApi

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_game**](GamesApi.md#get_game) | **GET** /api/v1/client/games/{gameId} | Get single game
[**list_games**](GamesApi.md#list_games) | **GET** /api/v1/client/games | Get All Games


# **get_game**
> GetGameResponse get_game(game_id)

Get single game

Retrieves metadata for a specific game by gameId. The response includes core identifiers, participating teams, venue/location, timestamps, processing status, and any available high-level attributes required to render a game detail view.

### Example

* Api Key Authentication (AppToken):
* Api Key Authentication (AppId):

```python
import victorycode_sdk
from victorycode_sdk.models.get_game_response import GetGameResponse
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
    api_instance = victorycode_sdk.GamesApi(api_client)
    game_id = 'game_id_example' # str | 

    try:
        # Get single game
        api_response = api_instance.get_game(game_id)
        print("The response of GamesApi->get_game:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GamesApi->get_game: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **game_id** | **str**|  | 

### Return type

[**GetGameResponse**](GetGameResponse.md)

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

# **list_games**
> ListGamesResponse list_games(limit=limit, page=page)

Get All Games

Returns a paginated list of games accessible to the client. Useful for building game pickers and dashboards, or to obtain a gameId before fetching detailed resources.

### Example

* Api Key Authentication (AppToken):
* Api Key Authentication (AppId):

```python
import victorycode_sdk
from victorycode_sdk.models.list_games_response import ListGamesResponse
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
    api_instance = victorycode_sdk.GamesApi(api_client)
    limit = 10 # int |  (optional)
    page = 1 # int |  (optional)

    try:
        # Get All Games
        api_response = api_instance.list_games(limit=limit, page=page)
        print("The response of GamesApi->list_games:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GamesApi->list_games: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**|  | [optional] 
 **page** | **int**|  | [optional] 

### Return type

[**ListGamesResponse**](ListGamesResponse.md)

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

