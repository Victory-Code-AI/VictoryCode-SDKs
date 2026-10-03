# GameRecapScoringSummaryProResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**game_id** | **str** |  | 
**video_id** | **str** |  | 
**total_scoring_plays** | **float** |  | 
**scoring_plays** | [**List[ProScoringPlayDto]**](ProScoringPlayDto.md) |  | 

## Example

```python
from victorycode_sdk.models.game_recap_scoring_summary_pro_response import GameRecapScoringSummaryProResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GameRecapScoringSummaryProResponse from a JSON string
game_recap_scoring_summary_pro_response_instance = GameRecapScoringSummaryProResponse.from_json(json)
# print the JSON string representation of the object
print(GameRecapScoringSummaryProResponse.to_json())

# convert the object into a dict
game_recap_scoring_summary_pro_response_dict = game_recap_scoring_summary_pro_response_instance.to_dict()
# create an instance of GameRecapScoringSummaryProResponse from a dict
game_recap_scoring_summary_pro_response_from_dict = GameRecapScoringSummaryProResponse.from_dict(game_recap_scoring_summary_pro_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


