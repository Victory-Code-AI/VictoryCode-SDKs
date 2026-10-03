# ScoringPlayPlayerInvolvedDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**team_id** | **str** |  | 
**player_id** | **str** |  | 
**player_jersey_number** | **float** |  | 
**role** | **str** |  | 

## Example

```python
from victorycode_sdk.models.scoring_play_player_involved_dto import ScoringPlayPlayerInvolvedDto

# TODO update the JSON string below
json = "{}"
# create an instance of ScoringPlayPlayerInvolvedDto from a JSON string
scoring_play_player_involved_dto_instance = ScoringPlayPlayerInvolvedDto.from_json(json)
# print the JSON string representation of the object
print(ScoringPlayPlayerInvolvedDto.to_json())

# convert the object into a dict
scoring_play_player_involved_dto_dict = scoring_play_player_involved_dto_instance.to_dict()
# create an instance of ScoringPlayPlayerInvolvedDto from a dict
scoring_play_player_involved_dto_from_dict = ScoringPlayPlayerInvolvedDto.from_dict(scoring_play_player_involved_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


