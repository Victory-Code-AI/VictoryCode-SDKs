# PlayClipListDetailsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_time** | **str** |  | 
**end_time** | **str** |  | 
**duration** | **str** |  | 
**url_original** | **str** |  | 
**url_analyzed** | **str** |  | 
**url_thumbnail** | **str** |  | 
**analyzed_video_original_json** | **str** |  | 
**analyzed_video_raw_json** | **str** |  | 
**analyzed_video_summary** | **str** |  | 

## Example

```python
from victorycode_sdk.models.play_clip_list_details_dto import PlayClipListDetailsDto

# TODO update the JSON string below
json = "{}"
# create an instance of PlayClipListDetailsDto from a JSON string
play_clip_list_details_dto_instance = PlayClipListDetailsDto.from_json(json)
# print the JSON string representation of the object
print(PlayClipListDetailsDto.to_json())

# convert the object into a dict
play_clip_list_details_dto_dict = play_clip_list_details_dto_instance.to_dict()
# create an instance of PlayClipListDetailsDto from a dict
play_clip_list_details_dto_from_dict = PlayClipListDetailsDto.from_dict(play_clip_list_details_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


