# GetGameRecapScoreResponseDataHomeTeamPeriodScoresInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**period** | **int** |  | [optional] 
**type** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**score** | **int** |  | [optional] 

## Example

```python
from victorycode_sdk.models.get_game_recap_score_response_data_home_team_period_scores_inner import GetGameRecapScoreResponseDataHomeTeamPeriodScoresInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetGameRecapScoreResponseDataHomeTeamPeriodScoresInner from a JSON string
get_game_recap_score_response_data_home_team_period_scores_inner_instance = GetGameRecapScoreResponseDataHomeTeamPeriodScoresInner.from_json(json)
# print the JSON string representation of the object
print(GetGameRecapScoreResponseDataHomeTeamPeriodScoresInner.to_json())

# convert the object into a dict
get_game_recap_score_response_data_home_team_period_scores_inner_dict = get_game_recap_score_response_data_home_team_period_scores_inner_instance.to_dict()
# create an instance of GetGameRecapScoreResponseDataHomeTeamPeriodScoresInner from a dict
get_game_recap_score_response_data_home_team_period_scores_inner_from_dict = GetGameRecapScoreResponseDataHomeTeamPeriodScoresInner.from_dict(get_game_recap_score_response_data_home_team_period_scores_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


