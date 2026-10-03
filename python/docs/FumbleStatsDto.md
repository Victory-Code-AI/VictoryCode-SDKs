# FumbleStatsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**player_name** | **str** |  | 
**jersey_number** | **float** |  | 
**player_id** | **str** |  | 
**fumbles** | **float** |  | 
**lost** | **float** |  | 
**recovered** | **float** |  | 

## Example

```python
from victorycode_sdk.models.fumble_stats_dto import FumbleStatsDto

# TODO update the JSON string below
json = "{}"
# create an instance of FumbleStatsDto from a JSON string
fumble_stats_dto_instance = FumbleStatsDto.from_json(json)
# print the JSON string representation of the object
print(FumbleStatsDto.to_json())

# convert the object into a dict
fumble_stats_dto_dict = fumble_stats_dto_instance.to_dict()
# create an instance of FumbleStatsDto from a dict
fumble_stats_dto_from_dict = FumbleStatsDto.from_dict(fumble_stats_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


