# PlayClipListItemDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**play_id** | **str** |  | 
**play_number** | **float** |  | 
**clip** | [**PlayClipListDetailsDto**](PlayClipListDetailsDto.md) |  | 
**attributes** | [**PlayAttributesListDto**](PlayAttributesListDto.md) |  | 
**events** | **List[object]** |  | 

## Example

```python
from victorycode_sdk.models.play_clip_list_item_dto import PlayClipListItemDto

# TODO update the JSON string below
json = "{}"
# create an instance of PlayClipListItemDto from a JSON string
play_clip_list_item_dto_instance = PlayClipListItemDto.from_json(json)
# print the JSON string representation of the object
print(PlayClipListItemDto.to_json())

# convert the object into a dict
play_clip_list_item_dto_dict = play_clip_list_item_dto_instance.to_dict()
# create an instance of PlayClipListItemDto from a dict
play_clip_list_item_dto_from_dict = PlayClipListItemDto.from_dict(play_clip_list_item_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


