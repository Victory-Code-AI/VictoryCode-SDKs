# UploadVideoAndCreateGameResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**upload_id** | **str** |  | [optional] 
**s3_key** | **str** |  | [optional] 

## Example

```python
from victorycode_sdk.models.upload_video_and_create_game_response_data import UploadVideoAndCreateGameResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of UploadVideoAndCreateGameResponseData from a JSON string
upload_video_and_create_game_response_data_instance = UploadVideoAndCreateGameResponseData.from_json(json)
# print the JSON string representation of the object
print(UploadVideoAndCreateGameResponseData.to_json())

# convert the object into a dict
upload_video_and_create_game_response_data_dict = upload_video_and_create_game_response_data_instance.to_dict()
# create an instance of UploadVideoAndCreateGameResponseData from a dict
upload_video_and_create_game_response_data_from_dict = UploadVideoAndCreateGameResponseData.from_dict(upload_video_and_create_game_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


