# GetGameRecapTeamStatsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 
**data** | [**GetGameRecapTeamStatsResponseData**](GetGameRecapTeamStatsResponseData.md) |  | [optional] 

## Example

```python
from victorycode_sdk.models.get_game_recap_team_stats_response import GetGameRecapTeamStatsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetGameRecapTeamStatsResponse from a JSON string
get_game_recap_team_stats_response_instance = GetGameRecapTeamStatsResponse.from_json(json)
# print the JSON string representation of the object
print(GetGameRecapTeamStatsResponse.to_json())

# convert the object into a dict
get_game_recap_team_stats_response_dict = get_game_recap_team_stats_response_instance.to_dict()
# create an instance of GetGameRecapTeamStatsResponse from a dict
get_game_recap_team_stats_response_from_dict = GetGameRecapTeamStatsResponse.from_dict(get_game_recap_team_stats_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


