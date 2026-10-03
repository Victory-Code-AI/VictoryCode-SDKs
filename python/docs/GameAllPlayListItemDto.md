# GameAllPlayListItemDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**play_id** | **str** |  | 
**play_number** | **float** |  | 
**clip** | [**PlayClipListDetailsDto**](PlayClipListDetailsDto.md) |  | 
**attributes** | [**PlayAttributesListDto**](PlayAttributesListDto.md) |  | 
**events** | **List[object]** |  | 
**video_id** | **str** |  | 

## Example

```python
from victorycode_sdk.models.game_all_play_list_item_dto import GameAllPlayListItemDto

# TODO update the JSON string below
json = "{}"
# create an instance of GameAllPlayListItemDto from a JSON string
game_all_play_list_item_dto_instance = GameAllPlayListItemDto.from_json(json)
# print the JSON string representation of the object
print(GameAllPlayListItemDto.to_json())

# convert the object into a dict
game_all_play_list_item_dto_dict = game_all_play_list_item_dto_instance.to_dict()
# create an instance of GameAllPlayListItemDto from a dict
game_all_play_list_item_dto_from_dict = GameAllPlayListItemDto.from_dict(game_all_play_list_item_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


