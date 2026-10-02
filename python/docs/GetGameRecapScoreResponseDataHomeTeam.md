# GetGameRecapScoreResponseDataHomeTeam


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**team_id** | **str** |  | [optional] 
**source_id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**short_name** | **str** |  | [optional] 
**mascot** | **str** |  | [optional] 
**classification** | **str** |  | [optional] 
**total_score** | **int** |  | [optional] 
**period_scores** | [**List[GetGameRecapScoreResponseDataHomeTeamPeriodScoresInner]**](GetGameRecapScoreResponseDataHomeTeamPeriodScoresInner.md) |  | [optional] 

## Example

```python
from victorycode_sdk.models.get_game_recap_score_response_data_home_team import GetGameRecapScoreResponseDataHomeTeam

# TODO update the JSON string below
json = "{}"
# create an instance of GetGameRecapScoreResponseDataHomeTeam from a JSON string
get_game_recap_score_response_data_home_team_instance = GetGameRecapScoreResponseDataHomeTeam.from_json(json)
# print the JSON string representation of the object
print(GetGameRecapScoreResponseDataHomeTeam.to_json())

# convert the object into a dict
get_game_recap_score_response_data_home_team_dict = get_game_recap_score_response_data_home_team_instance.to_dict()
# create an instance of GetGameRecapScoreResponseDataHomeTeam from a dict
get_game_recap_score_response_data_home_team_from_dict = GetGameRecapScoreResponseDataHomeTeam.from_dict(get_game_recap_score_response_data_home_team_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


