# DefenseStatsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**player_name** | **str** |  | 
**jersey_number** | **float** |  | 
**player_id** | **str** |  | 
**total_tackles** | **float** | TOT — solo + assisted tackles combined | 
**solo_tackles** | **float** | SOLO tackles | 
**sacks** | **float** | SACKS — may be fractional (0.5 for shared sack) | 
**tackles_for_loss** | **float** | TFL — tackles for loss | 
**passes_defended** | **float** | PD — passes defended | 
**qb_hits** | **float** | QB HTS — quarterback hits | 
**defensive_touchdowns** | **float** | TD — defensive touchdowns (pick-six, fumble return) | 

## Example

```python
from victorycode_sdk.models.defense_stats_dto import DefenseStatsDto

# TODO update the JSON string below
json = "{}"
# create an instance of DefenseStatsDto from a JSON string
defense_stats_dto_instance = DefenseStatsDto.from_json(json)
# print the JSON string representation of the object
print(DefenseStatsDto.to_json())

# convert the object into a dict
defense_stats_dto_dict = defense_stats_dto_instance.to_dict()
# create an instance of DefenseStatsDto from a dict
defense_stats_dto_from_dict = DefenseStatsDto.from_dict(defense_stats_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


