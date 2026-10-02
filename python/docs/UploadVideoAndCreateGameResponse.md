# UploadVideoAndCreateGameResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UploadVideoAndCreateGameResponseData**](UploadVideoAndCreateGameResponseData.md) |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from victorycode_sdk.models.upload_video_and_create_game_response import UploadVideoAndCreateGameResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UploadVideoAndCreateGameResponse from a JSON string
upload_video_and_create_game_response_instance = UploadVideoAndCreateGameResponse.from_json(json)
# print the JSON string representation of the object
print(UploadVideoAndCreateGameResponse.to_json())

# convert the object into a dict
upload_video_and_create_game_response_dict = upload_video_and_create_game_response_instance.to_dict()
# create an instance of UploadVideoAndCreateGameResponse from a dict
upload_video_and_create_game_response_from_dict = UploadVideoAndCreateGameResponse.from_dict(upload_video_and_create_game_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


