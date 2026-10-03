# RushingStatsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**player_name** | **str** |  | 
**jersey_number** | **float** |  | 
**player_id** | **str** |  | 
**carries** | **float** |  | 
**yards** | **float** |  | 
**avg** | **float** |  | 
**touchdowns** | **float** |  | 
**long** | **float** | Longest rush in yards | 

## Example

```python
from victorycode_sdk.models.rushing_stats_dto import RushingStatsDto

# TODO update the JSON string below
json = "{}"
# create an instance of RushingStatsDto from a JSON string
rushing_stats_dto_instance = RushingStatsDto.from_json(json)
# print the JSON string representation of the object
print(RushingStatsDto.to_json())

# convert the object into a dict
rushing_stats_dto_dict = rushing_stats_dto_instance.to_dict()
# create an instance of RushingStatsDto from a dict
rushing_stats_dto_from_dict = RushingStatsDto.from_dict(rushing_stats_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


