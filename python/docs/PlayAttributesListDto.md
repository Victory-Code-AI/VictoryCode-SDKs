# PlayAttributesListDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**period** | **str** |  | 
**possession_team_id** | **str** |  | 
**down** | **float** |  | 
**distance** | **float** |  | 
**line_of_scrimmage** | [**LineOfScrimmageDto**](LineOfScrimmageDto.md) |  | 
**offensive_personnel** | **str** |  | 
**defensive_personnel** | **str** |  | 

## Example

```python
from victorycode_sdk.models.play_attributes_list_dto import PlayAttributesListDto

# TODO update the JSON string below
json = "{}"
# create an instance of PlayAttributesListDto from a JSON string
play_attributes_list_dto_instance = PlayAttributesListDto.from_json(json)
# print the JSON string representation of the object
print(PlayAttributesListDto.to_json())

# convert the object into a dict
play_attributes_list_dto_dict = play_attributes_list_dto_instance.to_dict()
# create an instance of PlayAttributesListDto from a dict
play_attributes_list_dto_from_dict = PlayAttributesListDto.from_dict(play_attributes_list_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


