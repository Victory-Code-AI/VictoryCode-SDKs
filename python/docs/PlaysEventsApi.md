# victorycode_sdk.PlaysEventsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_play_by_id**](PlaysEventsApi.md#get_play_by_id) | **GET** /api/v1/client/plays/{playId} | Get the single Play Clip
[**get_plays_of_game**](PlaysEventsApi.md#get_plays_of_game) | **GET** /api/v1/client/game/{gameId}/plays | Get a list of all plays for a game
[**get_plays_of_video**](PlaysEventsApi.md#get_plays_of_video) | **GET** /api/v1/client/videos/{videoId}/plays | Get a list of play clips for a video


# **get_play_by_id**
> PlayClipListItemDto get_play_by_id(play_id)

Get the single Play Clip

Retrieves the complete metadata for a single play clip by its unique ID.

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.play_clip_list_item_dto import PlayClipListItemDto
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
    api_instance = victorycode_sdk.PlaysEventsApi(api_client)
    play_id = 'play_id_example' # str | 

    try:
        # Get the single Play Clip
        api_response = api_instance.get_play_by_id(play_id)
        print("The response of PlaysEventsApi->get_play_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlaysEventsApi->get_play_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **play_id** | **str**|  | 

### Return type

[**PlayClipListItemDto**](PlayClipListItemDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful retrieval of play clip details |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_plays_of_game**
> ListGameAllPlaysResponseDto get_plays_of_game(game_id, limit=limit, offset=offset, search=search, down=down, distance_zone=distance_zone, play_type=play_type)

Get a list of all plays for a game

Retrieves a paginated list of all plays for a given game. The results can be filtered by various play attributes.

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.list_game_all_plays_response_dto import ListGameAllPlaysResponseDto
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
    api_instance = victorycode_sdk.PlaysEventsApi(api_client)
    game_id = 'game_id_example' # str | 
    limit = 50 # float | The number of results to return per page. (optional) (default to 50)
    offset = 0 # float | The number of results to skip for pagination. (optional) (default to 0)
    search = 'search_example' # str |  (optional)
    down = '1' # str | Filter by down number (optional)
    distance_zone = 'LONG' # str | Filter by distance zone (yards to go) (optional)
    play_type = 'PASS' # str | Filter by analyzed play type (optional)

    try:
        # Get a list of all plays for a game
        api_response = api_instance.get_plays_of_game(game_id, limit=limit, offset=offset, search=search, down=down, distance_zone=distance_zone, play_type=play_type)
        print("The response of PlaysEventsApi->get_plays_of_game:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlaysEventsApi->get_plays_of_game: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **game_id** | **str**|  | 
 **limit** | **float**| The number of results to return per page. | [optional] [default to 50]
 **offset** | **float**| The number of results to skip for pagination. | [optional] [default to 0]
 **search** | **str**|  | [optional] 
 **down** | **str**| Filter by down number | [optional] 
 **distance_zone** | **str**| Filter by distance zone (yards to go) | [optional] 
 **play_type** | **str**| Filter by analyzed play type | [optional] 

### Return type

[**ListGameAllPlaysResponseDto**](ListGameAllPlaysResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of plays. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_plays_of_video**
> ListPlayClipsResponseDto get_plays_of_video(video_id, limit=limit, offset=offset, search=search, down=down, distance_zone=distance_zone, play_type=play_type)

Get a list of play clips for a video

Retrieves a paginated list of all play clips for a given video. The results can be filtered by various play attributes.

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.list_play_clips_response_dto import ListPlayClipsResponseDto
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
    api_instance = victorycode_sdk.PlaysEventsApi(api_client)
    video_id = 'video_id_example' # str | 
    limit = 50 # float | The number of results to return per page. (optional) (default to 50)
    offset = 0 # float | The number of results to skip for pagination. (optional) (default to 0)
    search = 'search_example' # str |  (optional)
    down = '1' # str | Filter by down number (optional)
    distance_zone = 'LONG' # str | Filter by distance zone (yards to go) (optional)
    play_type = 'PASS' # str | Filter by analyzed play type (optional)

    try:
        # Get a list of play clips for a video
        api_response = api_instance.get_plays_of_video(video_id, limit=limit, offset=offset, search=search, down=down, distance_zone=distance_zone, play_type=play_type)
        print("The response of PlaysEventsApi->get_plays_of_video:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlaysEventsApi->get_plays_of_video: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **video_id** | **str**|  | 
 **limit** | **float**| The number of results to return per page. | [optional] [default to 50]
 **offset** | **float**| The number of results to skip for pagination. | [optional] [default to 0]
 **search** | **str**|  | [optional] 
 **down** | **str**| Filter by down number | [optional] 
 **distance_zone** | **str**| Filter by distance zone (yards to go) | [optional] 
 **play_type** | **str**| Filter by analyzed play type | [optional] 

### Return type

[**ListPlayClipsResponseDto**](ListPlayClipsResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of plays. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

