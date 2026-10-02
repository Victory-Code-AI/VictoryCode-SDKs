# GetGameRecapTeamStatsResponseDataHomeTeam


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**team_id** | **str** |  | [optional] 
**source_id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**mascot** | **str** |  | [optional] 
**classification** | **str** |  | [optional] 
**first_downs** | [**GetGameRecapTeamStatsResponseDataHomeTeamFirstDowns**](GetGameRecapTeamStatsResponseDataHomeTeamFirstDowns.md) |  | [optional] 
**offense** | [**GetGameRecapTeamStatsResponseDataHomeTeamOffense**](GetGameRecapTeamStatsResponseDataHomeTeamOffense.md) |  | [optional] 
**passing** | [**GetGameRecapTeamStatsResponseDataHomeTeamPassing**](GetGameRecapTeamStatsResponseDataHomeTeamPassing.md) |  | [optional] 
**rushing** | [**GetGameRecapTeamStatsResponseDataHomeTeamPassing**](GetGameRecapTeamStatsResponseDataHomeTeamPassing.md) |  | [optional] 

## Example

```python
from victorycode_sdk.models.get_game_recap_team_stats_response_data_home_team import GetGameRecapTeamStatsResponseDataHomeTeam

# TODO update the JSON string below
json = "{}"
# create an instance of GetGameRecapTeamStatsResponseDataHomeTeam from a JSON string
get_game_recap_team_stats_response_data_home_team_instance = GetGameRecapTeamStatsResponseDataHomeTeam.from_json(json)
# print the JSON string representation of the object
print(GetGameRecapTeamStatsResponseDataHomeTeam.to_json())

# convert the object into a dict
get_game_recap_team_stats_response_data_home_team_dict = get_game_recap_team_stats_response_data_home_team_instance.to_dict()
# create an instance of GetGameRecapTeamStatsResponseDataHomeTeam from a dict
get_game_recap_team_stats_response_data_home_team_from_dict = GetGameRecapTeamStatsResponseDataHomeTeam.from_dict(get_game_recap_team_stats_response_data_home_team_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


