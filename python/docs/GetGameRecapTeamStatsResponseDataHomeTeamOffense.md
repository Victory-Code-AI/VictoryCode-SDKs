# GetGameRecapTeamStatsResponseDataHomeTeamOffense


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_plays** | **int** |  | [optional] 
**total_yards** | **int** |  | [optional] 
**yards_per_play** | **float** |  | [optional] 

## Example

```python
from victorycode_sdk.models.get_game_recap_team_stats_response_data_home_team_offense import GetGameRecapTeamStatsResponseDataHomeTeamOffense

# TODO update the JSON string below
json = "{}"
# create an instance of GetGameRecapTeamStatsResponseDataHomeTeamOffense from a JSON string
get_game_recap_team_stats_response_data_home_team_offense_instance = GetGameRecapTeamStatsResponseDataHomeTeamOffense.from_json(json)
# print the JSON string representation of the object
print(GetGameRecapTeamStatsResponseDataHomeTeamOffense.to_json())

# convert the object into a dict
get_game_recap_team_stats_response_data_home_team_offense_dict = get_game_recap_team_stats_response_data_home_team_offense_instance.to_dict()
# create an instance of GetGameRecapTeamStatsResponseDataHomeTeamOffense from a dict
get_game_recap_team_stats_response_data_home_team_offense_from_dict = GetGameRecapTeamStatsResponseDataHomeTeamOffense.from_dict(get_game_recap_team_stats_response_data_home_team_offense_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


