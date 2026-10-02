# victorycode_sdk.GameRecapApi

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_game_recap_score**](GameRecapApi.md#get_game_recap_score) | **GET** /api/v1/client/game-recap/{gameId}/score | Get the Game Recap Score for a specific Game
[**get_game_recap_scoring_summary**](GameRecapApi.md#get_game_recap_scoring_summary) | **GET** /api/v1/client/game-recap/{gameId}/scoring-summary | Get the Game Recap Scoring Summary for a specific Game.
[**get_game_recap_team_stats**](GameRecapApi.md#get_game_recap_team_stats) | **GET** /api/v1/client/game-recap/{gameId}/team-stats | Get the Game Recap Team Stats for a specific Game.


# **get_game_recap_score**
> GetGameRecapScoreResponse get_game_recap_score(game_id)

Get the Game Recap Score for a specific Game

Retrieves the overall score for the specified game. This includes the final scoreline and also include period-by-period (quarters) breakdowns.

### Example

* Api Key Authentication (AppToken):
* Api Key Authentication (AppId):

```python
import victorycode_sdk
from victorycode_sdk.models.get_game_recap_score_response import GetGameRecapScoreResponse
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
    api_instance = victorycode_sdk.GameRecapApi(api_client)
    game_id = 'game_id_example' # str | 

    try:
        # Get the Game Recap Score for a specific Game
        api_response = api_instance.get_game_recap_score(game_id)
        print("The response of GameRecapApi->get_game_recap_score:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GameRecapApi->get_game_recap_score: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **game_id** | **str**|  | 

### Return type

[**GetGameRecapScoreResponse**](GetGameRecapScoreResponse.md)

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

# **get_game_recap_scoring_summary**
> GetGameRecapScoringSummaryResponse get_game_recap_scoring_summary(game_id)

Get the Game Recap Scoring Summary for a specific Game.

Retrieves a chronological summary of all scoring plays for the specified game. Each record is linked to a playId, enabling clients to correlate the scoring event with detailed play data.

### Example

* Api Key Authentication (AppToken):
* Api Key Authentication (AppId):

```python
import victorycode_sdk
from victorycode_sdk.models.get_game_recap_scoring_summary_response import GetGameRecapScoringSummaryResponse
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
    api_instance = victorycode_sdk.GameRecapApi(api_client)
    game_id = 'game_id_example' # str | 

    try:
        # Get the Game Recap Scoring Summary for a specific Game.
        api_response = api_instance.get_game_recap_scoring_summary(game_id)
        print("The response of GameRecapApi->get_game_recap_scoring_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GameRecapApi->get_game_recap_scoring_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **game_id** | **str**|  | 

### Return type

[**GetGameRecapScoringSummaryResponse**](GetGameRecapScoringSummaryResponse.md)

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

# **get_game_recap_team_stats**
> GetGameRecapTeamStatsResponse get_game_recap_team_stats(game_id)

Get the Game Recap Team Stats for a specific Game.

Retrieves a statistical summary for both the home and away teams in a specific game. The response includes key offensive and first-down metrics, allowing clients to analyze game efficiency, offensive output, and team balance between rushing and passing plays.

### Example

* Api Key Authentication (AppToken):
* Api Key Authentication (AppId):

```python
import victorycode_sdk
from victorycode_sdk.models.get_game_recap_team_stats_response import GetGameRecapTeamStatsResponse
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
    api_instance = victorycode_sdk.GameRecapApi(api_client)
    game_id = 'game_id_example' # str | 

    try:
        # Get the Game Recap Team Stats for a specific Game.
        api_response = api_instance.get_game_recap_team_stats(game_id)
        print("The response of GameRecapApi->get_game_recap_team_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GameRecapApi->get_game_recap_team_stats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **game_id** | **str**|  | 

### Return type

[**GetGameRecapTeamStatsResponse**](GetGameRecapTeamStatsResponse.md)

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

