# GetGameRecapScoringSummaryResponseDataDataInnerInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**play_id** | **str** |  | [optional] 
**period** | **str** |  | [optional] 
**time_remaining** | **str** |  | [optional] 
**scoring_team_id** | **str** |  | [optional] 
**score_type** | **str** |  | [optional] 
**score_method** | **object** |  | [optional] 
**score_yardage** | **int** |  | [optional] 
**home_score** | **int** |  | [optional] 
**away_score** | **int** |  | [optional] 

## Example

```python
from victorycode_sdk.models.get_game_recap_scoring_summary_response_data_data_inner_inner import GetGameRecapScoringSummaryResponseDataDataInnerInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetGameRecapScoringSummaryResponseDataDataInnerInner from a JSON string
get_game_recap_scoring_summary_response_data_data_inner_inner_instance = GetGameRecapScoringSummaryResponseDataDataInnerInner.from_json(json)
# print the JSON string representation of the object
print(GetGameRecapScoringSummaryResponseDataDataInnerInner.to_json())

# convert the object into a dict
get_game_recap_scoring_summary_response_data_data_inner_inner_dict = get_game_recap_scoring_summary_response_data_data_inner_inner_instance.to_dict()
# create an instance of GetGameRecapScoringSummaryResponseDataDataInnerInner from a dict
get_game_recap_scoring_summary_response_data_data_inner_inner_from_dict = GetGameRecapScoringSummaryResponseDataDataInnerInner.from_dict(get_game_recap_scoring_summary_response_data_data_inner_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


