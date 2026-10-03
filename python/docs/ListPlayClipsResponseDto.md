# ListPlayClipsResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **float** |  | 
**limit** | **float** |  | 
**offset** | **float** |  | 
**game_id** | **str** |  | 
**video_id** | **str** |  | 
**data** | [**List[PlayClipListItemDto]**](PlayClipListItemDto.md) |  | 

## Example

```python
from victorycode_sdk.models.list_play_clips_response_dto import ListPlayClipsResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of ListPlayClipsResponseDto from a JSON string
list_play_clips_response_dto_instance = ListPlayClipsResponseDto.from_json(json)
# print the JSON string representation of the object
print(ListPlayClipsResponseDto.to_json())

# convert the object into a dict
list_play_clips_response_dto_dict = list_play_clips_response_dto_instance.to_dict()
# create an instance of ListPlayClipsResponseDto from a dict
list_play_clips_response_dto_from_dict = ListPlayClipsResponseDto.from_dict(list_play_clips_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


