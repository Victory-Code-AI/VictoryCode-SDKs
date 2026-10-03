# TeamStatsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**team_id** | **str** |  | 
**source_id** | **str** |  | 
**name** | **str** |  | 
**short_name** | **str** |  | 
**mascot** | **str** |  | 
**classification** | **str** |  | 
**down_efficiency** | [**List[DownEfficiencyDto]**](DownEfficiencyDto.md) |  | 
**offense** | [**OffenseDto**](OffenseDto.md) |  | 
**passing** | [**PassingDto**](PassingDto.md) |  | 
**rushing** | [**RushingDto**](RushingDto.md) |  | 
**red_zone** | [**RedZoneDto**](RedZoneDto.md) |  | 
**turnovers** | [**TurnoversDto**](TurnoversDto.md) |  | 

## Example

```python
from victorycode_sdk.models.team_stats_dto import TeamStatsDto

# TODO update the JSON string below
json = "{}"
# create an instance of TeamStatsDto from a JSON string
team_stats_dto_instance = TeamStatsDto.from_json(json)
# print the JSON string representation of the object
print(TeamStatsDto.to_json())

# convert the object into a dict
team_stats_dto_dict = team_stats_dto_instance.to_dict()
# create an instance of TeamStatsDto from a dict
team_stats_dto_from_dict = TeamStatsDto.from_dict(team_stats_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


