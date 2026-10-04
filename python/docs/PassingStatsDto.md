# PassingStatsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**player_name** | **str** |  | 
**jersey_number** | **float** |  | 
**player_id** | **str** |  | 
**completions** | **float** |  | 
**attempts** | **float** |  | 
**yards** | **float** |  | 
**avg** | **float** |  | 
**touchdowns** | **float** |  | 
**interceptions** | **float** |  | 
**sacks** | **float** |  | 
**sack_yards_lost** | **float** |  | 
**qbr** | **float** | ESPN QBR — null when not supplied | [optional] 
**passer_rating** | **float** | NFL passer rating | [optional] 

## Example

```python
from victorycode_sdk.models.passing_stats_dto import PassingStatsDto

# TODO update the JSON string below
json = "{}"
# create an instance of PassingStatsDto from a JSON string
passing_stats_dto_instance = PassingStatsDto.from_json(json)
# print the JSON string representation of the object
print(PassingStatsDto.to_json())

# convert the object into a dict
passing_stats_dto_dict = passing_stats_dto_instance.to_dict()
# create an instance of PassingStatsDto from a dict
passing_stats_dto_from_dict = PassingStatsDto.from_dict(passing_stats_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


