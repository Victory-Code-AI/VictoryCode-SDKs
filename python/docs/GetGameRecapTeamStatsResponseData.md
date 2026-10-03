# GetGameRecapTeamStatsResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**game_id** | **str** |  | [optional] 
**home_team** | [**GetGameRecapTeamStatsResponseDataHomeTeam**](GetGameRecapTeamStatsResponseDataHomeTeam.md) |  | [optional] 
**away_team** | [**GetGameRecapTeamStatsResponseDataHomeTeam**](GetGameRecapTeamStatsResponseDataHomeTeam.md) |  | [optional] 

## Example

```python
from victorycode_sdk.models.get_game_recap_team_stats_response_data import GetGameRecapTeamStatsResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetGameRecapTeamStatsResponseData from a JSON string
get_game_recap_team_stats_response_data_instance = GetGameRecapTeamStatsResponseData.from_json(json)
# print the JSON string representation of the object
print(GetGameRecapTeamStatsResponseData.to_json())

# convert the object into a dict
get_game_recap_team_stats_response_data_dict = get_game_recap_team_stats_response_data_instance.to_dict()
# create an instance of GetGameRecapTeamStatsResponseData from a dict
get_game_recap_team_stats_response_data_from_dict = GetGameRecapTeamStatsResponseData.from_dict(get_game_recap_team_stats_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


