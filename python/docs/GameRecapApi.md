# victorycode_sdk.GameRecapApi

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_game_recap_game_box_score**](GameRecapApi.md#get_game_recap_game_box_score) | **GET** /api/v1/client/game-recap/{videoId}/game-box-score | Get the Game Recap Game Box Score for a specific Game.
[**get_game_recap_score**](GameRecapApi.md#get_game_recap_score) | **GET** /api/v1/client/game-recap/{videoId}/score | Get the Game Recap Score for a specific Game.
[**get_game_recap_scoring_summary**](GameRecapApi.md#get_game_recap_scoring_summary) | **GET** /api/v1/client/game-recap/{videoId}/scoring-summary | Get the Game Recap Scoring Summary for a specific Game.
[**get_game_recap_scoring_summary_pro**](GameRecapApi.md#get_game_recap_scoring_summary_pro) | **GET** /api/v1/client/game-recap/{videoId}/scoring-summary-pro | Get the Game Recap Scoring Summary Pro for a specific Game.
[**get_game_recap_team_stats**](GameRecapApi.md#get_game_recap_team_stats) | **GET** /api/v1/client/game-recap/{videoId}/team-stats | Get the Game Recap Team Stats for a specific Game.


# **get_game_recap_game_box_score**
> GameBoxScoreResponseDto get_game_recap_game_box_score(video_id)

Get the Game Recap Game Box Score for a specific Game.

Retrieves full game box score stats for both teams and players for a specific game.

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.game_box_score_response_dto import GameBoxScoreResponseDto
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
    api_instance = victorycode_sdk.GameRecapApi(api_client)
    video_id = 'video_id_example' # str | 

    try:
        # Get the Game Recap Game Box Score for a specific Game.
        api_response = api_instance.get_game_recap_game_box_score(video_id)
        print("The response of GameRecapApi->get_game_recap_game_box_score:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GameRecapApi->get_game_recap_game_box_score: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **video_id** | **str**|  | 

### Return type

[**GameBoxScoreResponseDto**](GameBoxScoreResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful retrieval of the Game Recap Game Box Score |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_game_recap_score**
> GameScoreResponse get_game_recap_score(video_id)

Get the Game Recap Score for a specific Game.

Retrieves the final score and the score breakdown by quarter and overtime periods for both the home and away teams.

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.game_score_response import GameScoreResponse
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
    api_instance = victorycode_sdk.GameRecapApi(api_client)
    video_id = 'video_id_example' # str | 

    try:
        # Get the Game Recap Score for a specific Game.
        api_response = api_instance.get_game_recap_score(video_id)
        print("The response of GameRecapApi->get_game_recap_score:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GameRecapApi->get_game_recap_score: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **video_id** | **str**|  | 

### Return type

[**GameScoreResponse**](GameScoreResponse.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful retrieval of the Game Recap Score. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_game_recap_scoring_summary**
> GameRecapScoringSummaryResponse get_game_recap_scoring_summary(video_id)

Get the Game Recap Scoring Summary for a specific Game.

Retrieves a chronological list of all scoring plays for a specific game, including details about the play, the drive, and the resulting score.

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.game_recap_scoring_summary_response import GameRecapScoringSummaryResponse
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
    api_instance = victorycode_sdk.GameRecapApi(api_client)
    video_id = 'video_id_example' # str | 

    try:
        # Get the Game Recap Scoring Summary for a specific Game.
        api_response = api_instance.get_game_recap_scoring_summary(video_id)
        print("The response of GameRecapApi->get_game_recap_scoring_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GameRecapApi->get_game_recap_scoring_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **video_id** | **str**|  | 

### Return type

[**GameRecapScoringSummaryResponse**](GameRecapScoringSummaryResponse.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful retrieval of the Game Recap Scoring Summary |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_game_recap_scoring_summary_pro**
> GameRecapScoringSummaryProResponse get_game_recap_scoring_summary_pro(video_id)

Get the Game Recap Scoring Summary Pro for a specific Game.

Retrieves the full pro scoring summary for a specific game with drive context and players involved for each scoring play.

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.game_recap_scoring_summary_pro_response import GameRecapScoringSummaryProResponse
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
    api_instance = victorycode_sdk.GameRecapApi(api_client)
    video_id = 'video_id_example' # str | 

    try:
        # Get the Game Recap Scoring Summary Pro for a specific Game.
        api_response = api_instance.get_game_recap_scoring_summary_pro(video_id)
        print("The response of GameRecapApi->get_game_recap_scoring_summary_pro:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GameRecapApi->get_game_recap_scoring_summary_pro: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **video_id** | **str**|  | 

### Return type

[**GameRecapScoringSummaryProResponse**](GameRecapScoringSummaryProResponse.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful retrieval of the Game Recap Scoring Summary Pro |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_game_recap_team_stats**
> GameRecapTeamStatsResponse get_game_recap_team_stats(video_id)

Get the Game Recap Team Stats for a specific Game.

Retrieves a detailed statistical breakdown for both the home and away teams, covering offense, defense, and special teams performance.

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.game_recap_team_stats_response import GameRecapTeamStatsResponse
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
    api_instance = victorycode_sdk.GameRecapApi(api_client)
    video_id = 'video_id_example' # str | 

    try:
        # Get the Game Recap Team Stats for a specific Game.
        api_response = api_instance.get_game_recap_team_stats(video_id)
        print("The response of GameRecapApi->get_game_recap_team_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GameRecapApi->get_game_recap_team_stats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **video_id** | **str**|  | 

### Return type

[**GameRecapTeamStatsResponse**](GameRecapTeamStatsResponse.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a detailed statistical breakdown for both teams |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

