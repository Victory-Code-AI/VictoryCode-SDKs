# ProScoringPlayDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drive_number** | **float** |  | 
**drive_plays_count** | **float** |  | 
**drive_yards** | **float** |  | 
**drive_time_of_possession** | **str** |  | 
**play_id** | **str** |  | 
**team_id** | **str** |  | 
**team** | [**ScoringSummaryProTeamDto**](ScoringSummaryProTeamDto.md) |  | 
**period** | **float** |  | 
**game_clock** | **str** |  | 
**scoring_type** | **str** |  | 
**scoring_method** | **str** |  | 
**try_type** | **str** |  | 
**try_method** | **str** |  | 
**scoring_yardage** | **float** |  | 
**players_involved** | [**List[ScoringPlayPlayerInvolvedDto]**](ScoringPlayPlayerInvolvedDto.md) |  | 
**away_team_score** | **float** |  | 
**home_team_score** | **float** |  | 
**scoring_text** | **str** |  | 

## Example

```python
from victorycode_sdk.models.pro_scoring_play_dto import ProScoringPlayDto

# TODO update the JSON string below
json = "{}"
# create an instance of ProScoringPlayDto from a JSON string
pro_scoring_play_dto_instance = ProScoringPlayDto.from_json(json)
# print the JSON string representation of the object
print(ProScoringPlayDto.to_json())

# convert the object into a dict
pro_scoring_play_dto_dict = pro_scoring_play_dto_instance.to_dict()
# create an instance of ProScoringPlayDto from a dict
pro_scoring_play_dto_from_dict = ProScoringPlayDto.from_dict(pro_scoring_play_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


