# GameRecapTeamStatsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**game_id** | **str** |  | 
**video_id** | **str** |  | 
**home_team** | [**TeamStatsDto**](TeamStatsDto.md) |  | 
**away_team** | [**TeamStatsDto**](TeamStatsDto.md) |  | 

## Example

```python
from victorycode_sdk.models.game_recap_team_stats_response import GameRecapTeamStatsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GameRecapTeamStatsResponse from a JSON string
game_recap_team_stats_response_instance = GameRecapTeamStatsResponse.from_json(json)
# print the JSON string representation of the object
print(GameRecapTeamStatsResponse.to_json())

# convert the object into a dict
game_recap_team_stats_response_dict = game_recap_team_stats_response_instance.to_dict()
# create an instance of GameRecapTeamStatsResponse from a dict
game_recap_team_stats_response_from_dict = GameRecapTeamStatsResponse.from_dict(game_recap_team_stats_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


