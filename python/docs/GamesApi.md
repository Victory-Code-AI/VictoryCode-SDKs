# victorycode_sdk.GamesApi

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_video_to_game**](GamesApi.md#add_video_to_game) | **POST** /api/v1/client/games/{gameId}/video | Add new video to a game
[**create_game_with_video_url**](GamesApi.md#create_game_with_video_url) | **POST** /api/v1/client/games | Create a new Game with Video URL
[**get_game_details**](GamesApi.md#get_game_details) | **GET** /api/v1/client/games/{gameId} | Get a Single Game.
[**get_games**](GamesApi.md#get_games) | **GET** /api/v1/client/games | List and Filter Games.
[**get_videos_of_game**](GamesApi.md#get_videos_of_game) | **GET** /api/v1/client/games/{gameId}/videos | Get a list of videos of a game


# **add_video_to_game**
> SingleVideoResponseDto add_video_to_game(game_id, add_video_to_game_with_s3_link_dto)

Add new video to a game

Adds a new video to game.

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.add_video_to_game_with_s3_link_dto import AddVideoToGameWithS3LinkDto
from victorycode_sdk.models.single_video_response_dto import SingleVideoResponseDto
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
    api_instance = victorycode_sdk.GamesApi(api_client)
    game_id = 'game_id_example' # str | 
    add_video_to_game_with_s3_link_dto = victorycode_sdk.AddVideoToGameWithS3LinkDto() # AddVideoToGameWithS3LinkDto | 

    try:
        # Add new video to a game
        api_response = api_instance.add_video_to_game(game_id, add_video_to_game_with_s3_link_dto)
        print("The response of GamesApi->add_video_to_game:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GamesApi->add_video_to_game: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **game_id** | **str**|  | 
 **add_video_to_game_with_s3_link_dto** | [**AddVideoToGameWithS3LinkDto**](AddVideoToGameWithS3LinkDto.md)|  | 

### Return type

[**SingleVideoResponseDto**](SingleVideoResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Video added successfully |  -  |
**400** | Validation error |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_game_with_video_url**
> GameDetailsResponse create_game_with_video_url(client_create_game_with_video_url_dto)

Create a new Game with Video URL

Registers a new game and associates a video URL (e.g., from a third-party source) with it in a single step.

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.client_create_game_with_video_url_dto import ClientCreateGameWithVideoUrlDto
from victorycode_sdk.models.game_details_response import GameDetailsResponse
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
    api_instance = victorycode_sdk.GamesApi(api_client)
    client_create_game_with_video_url_dto = victorycode_sdk.ClientCreateGameWithVideoUrlDto() # ClientCreateGameWithVideoUrlDto | 

    try:
        # Create a new Game with Video URL
        api_response = api_instance.create_game_with_video_url(client_create_game_with_video_url_dto)
        print("The response of GamesApi->create_game_with_video_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GamesApi->create_game_with_video_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_create_game_with_video_url_dto** | [**ClientCreateGameWithVideoUrlDto**](ClientCreateGameWithVideoUrlDto.md)|  | 

### Return type

[**GameDetailsResponse**](GameDetailsResponse.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Game created successfully |  -  |
**400** |  |  -  |
**409** | Name already exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_game_details**
> GameDetailsResponse get_game_details(game_id)

Get a Single Game.

Retrieves the core metadata for a single game, including date, time, location, and teams who participated.

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.game_details_response import GameDetailsResponse
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
    api_instance = victorycode_sdk.GamesApi(api_client)
    game_id = 'game_id_example' # str | 

    try:
        # Get a Single Game.
        api_response = api_instance.get_game_details(game_id)
        print("The response of GamesApi->get_game_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GamesApi->get_game_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **game_id** | **str**|  | 

### Return type

[**GameDetailsResponse**](GameDetailsResponse.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful retrieval of the core game details |  -  |
**401** | Unauthorized |  -  |
**404** | Game not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_games**
> ListGamesPaginatedResponseDto get_games(limit=limit, offset=offset, search=search)

List and Filter Games.

Retrieves a paginated list of games, with optional filters for team, upload status, and date-time range.

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.list_games_paginated_response_dto import ListGamesPaginatedResponseDto
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
    api_instance = victorycode_sdk.GamesApi(api_client)
    limit = 50 # float | The number of results to return per page. (optional) (default to 50)
    offset = 0 # float | The number of results to skip for pagination. (optional) (default to 0)
    search = 'search_example' # str |  (optional)

    try:
        # List and Filter Games.
        api_response = api_instance.get_games(limit=limit, offset=offset, search=search)
        print("The response of GamesApi->get_games:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GamesApi->get_games: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **float**| The number of results to return per page. | [optional] [default to 50]
 **offset** | **float**| The number of results to skip for pagination. | [optional] [default to 0]
 **search** | **str**|  | [optional] 

### Return type

[**ListGamesPaginatedResponseDto**](ListGamesPaginatedResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful retrieval of the paginated list of games |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_videos_of_game**
> ListVideoPaginatedResponseDto get_videos_of_game(game_id, limit=limit, offset=offset)

Get a list of videos of a game

Retrieves a list of videos of a game.

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.list_video_paginated_response_dto import ListVideoPaginatedResponseDto
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
    api_instance = victorycode_sdk.GamesApi(api_client)
    game_id = 'game_id_example' # str | 
    limit = 50 # float | The number of results to return per page. (optional) (default to 50)
    offset = 0 # float | The number of results to skip for pagination. (optional) (default to 0)

    try:
        # Get a list of videos of a game
        api_response = api_instance.get_videos_of_game(game_id, limit=limit, offset=offset)
        print("The response of GamesApi->get_videos_of_game:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GamesApi->get_videos_of_game: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **game_id** | **str**|  | 
 **limit** | **float**| The number of results to return per page. | [optional] [default to 50]
 **offset** | **float**| The number of results to skip for pagination. | [optional] [default to 0]

### Return type

[**ListVideoPaginatedResponseDto**](ListVideoPaginatedResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful retrieval of the list of videos of a game |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

