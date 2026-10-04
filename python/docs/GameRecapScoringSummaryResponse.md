# GameRecapScoringSummaryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**game_id** | **str** |  | 
**video_id** | **str** |  | 
**total** | **float** |  | 
**data** | [**List[GameScoringSummaryDataDto]**](GameScoringSummaryDataDto.md) |  | 

## Example

```python
from victorycode_sdk.models.game_recap_scoring_summary_response import GameRecapScoringSummaryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GameRecapScoringSummaryResponse from a JSON string
game_recap_scoring_summary_response_instance = GameRecapScoringSummaryResponse.from_json(json)
# print the JSON string representation of the object
print(GameRecapScoringSummaryResponse.to_json())

# convert the object into a dict
game_recap_scoring_summary_response_dict = game_recap_scoring_summary_response_instance.to_dict()
# create an instance of GameRecapScoringSummaryResponse from a dict
game_recap_scoring_summary_response_from_dict = GameRecapScoringSummaryResponse.from_dict(game_recap_scoring_summary_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


