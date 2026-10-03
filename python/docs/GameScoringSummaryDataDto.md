# GameScoringSummaryDataDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**play_id** | **str** |  | 
**period** | **str** |  | 
**time_remaining** | **str** |  | 
**scoring_team_id** | **str** |  | 
**score_type** | **str** |  | 
**score_method** | **str** |  | 
**score_yardage** | **float** |  | 
**home_score** | **float** |  | 
**away_score** | **float** |  | 

## Example

```python
from victorycode_sdk.models.game_scoring_summary_data_dto import GameScoringSummaryDataDto

# TODO update the JSON string below
json = "{}"
# create an instance of GameScoringSummaryDataDto from a JSON string
game_scoring_summary_data_dto_instance = GameScoringSummaryDataDto.from_json(json)
# print the JSON string representation of the object
print(GameScoringSummaryDataDto.to_json())

# convert the object into a dict
game_scoring_summary_data_dto_dict = game_scoring_summary_data_dto_instance.to_dict()
# create an instance of GameScoringSummaryDataDto from a dict
game_scoring_summary_data_dto_from_dict = GameScoringSummaryDataDto.from_dict(game_scoring_summary_data_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


