# ListGameAllPlaysResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **float** |  | 
**limit** | **float** |  | 
**offset** | **float** |  | 
**game_id** | **str** |  | 
**data** | [**List[GameAllPlayListItemDto]**](GameAllPlayListItemDto.md) |  | 

## Example

```python
from victorycode_sdk.models.list_game_all_plays_response_dto import ListGameAllPlaysResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of ListGameAllPlaysResponseDto from a JSON string
list_game_all_plays_response_dto_instance = ListGameAllPlaysResponseDto.from_json(json)
# print the JSON string representation of the object
print(ListGameAllPlaysResponseDto.to_json())

# convert the object into a dict
list_game_all_plays_response_dto_dict = list_game_all_plays_response_dto_instance.to_dict()
# create an instance of ListGameAllPlaysResponseDto from a dict
list_game_all_plays_response_dto_from_dict = ListGameAllPlaysResponseDto.from_dict(list_game_all_plays_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


