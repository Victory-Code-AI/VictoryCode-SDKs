# victorycode_sdk.UploadsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_upload_status**](UploadsApi.md#get_upload_status) | **GET** /api/v1/client/uploads/{uploadId} | Video file upload status
[**upload_video_and_create_game**](UploadsApi.md#upload_video_and_create_game) | **POST** /api/v1/client/uploads | Upload video and create new game


# **get_upload_status**
> GetUploadStatusResponse get_upload_status(upload_id)

Video file upload status

This endpoint retrieves the status of an uploaded video file. It allows clients to check if their upload is still in progress, successfully processed, or failed.

### Example

* Api Key Authentication (AppToken):
* Api Key Authentication (AppId):

```python
import victorycode_sdk
from victorycode_sdk.models.get_upload_status_response import GetUploadStatusResponse
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
    api_instance = victorycode_sdk.UploadsApi(api_client)
    upload_id = 'upload_id_example' # str | 

    try:
        # Video file upload status
        api_response = api_instance.get_upload_status(upload_id)
        print("The response of UploadsApi->get_upload_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UploadsApi->get_upload_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **upload_id** | **str**|  | 

### Return type

[**GetUploadStatusResponse**](GetUploadStatusResponse.md)

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

# **upload_video_and_create_game**
> UploadVideoAndCreateGameResponse upload_video_and_create_game(name, video, home_team, away_team, venue, location, description=description)

Upload video and create new game

This endpoint is used to upload a game video along with its metadata (teams, venue, location, etc.). Once uploaded, the video will be processed by the Tactix AI platform to generate clips, stats, and summaries.

### Example

* Api Key Authentication (AppToken):
* Api Key Authentication (AppId):

```python
import victorycode_sdk
from victorycode_sdk.models.upload_video_and_create_game_response import UploadVideoAndCreateGameResponse
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
    api_instance = victorycode_sdk.UploadsApi(api_client)
    name = 'name_example' # str | 
    video = None # bytes | 
    home_team = 'home_team_example' # str | ObjectId of home team
    away_team = 'away_team_example' # str | ObjectId of away team
    venue = 'venue_example' # str | 
    location = 'location_example' # str | 
    description = 'description_example' # str |  (optional)

    try:
        # Upload video and create new game
        api_response = api_instance.upload_video_and_create_game(name, video, home_team, away_team, venue, location, description=description)
        print("The response of UploadsApi->upload_video_and_create_game:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UploadsApi->upload_video_and_create_game: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**|  | 
 **video** | **bytes**|  | 
 **home_team** | **str**| ObjectId of home team | 
 **away_team** | **str**| ObjectId of away team | 
 **venue** | **str**|  | 
 **location** | **str**|  | 
 **description** | **str**|  | [optional] 

### Return type

[**UploadVideoAndCreateGameResponse**](UploadVideoAndCreateGameResponse.md)

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

