# VideoListItemDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**game_id** | **str** |  | 
**video_id** | **str** |  | 
**view_type** | **str** |  | 
**source_url** | **str** |  | 
**is_default_video** | **bool** |  | 

## Example

```python
from victorycode_sdk.models.video_list_item_dto import VideoListItemDto

# TODO update the JSON string below
json = "{}"
# create an instance of VideoListItemDto from a JSON string
video_list_item_dto_instance = VideoListItemDto.from_json(json)
# print the JSON string representation of the object
print(VideoListItemDto.to_json())

# convert the object into a dict
video_list_item_dto_dict = video_list_item_dto_instance.to_dict()
# create an instance of VideoListItemDto from a dict
video_list_item_dto_from_dict = VideoListItemDto.from_dict(video_list_item_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


