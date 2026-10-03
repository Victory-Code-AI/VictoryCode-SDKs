# TeamScoreDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**team_id** | **str** |  | 
**source_id** | **str** |  | 
**name** | **str** |  | 
**short_name** | **str** |  | 
**mascot** | **str** |  | 
**classification** | **str** |  | 
**total_score** | **float** |  | 
**period_scores** | [**List[PeriodScoreDto]**](PeriodScoreDto.md) |  | 

## Example

```python
from victorycode_sdk.models.team_score_dto import TeamScoreDto

# TODO update the JSON string below
json = "{}"
# create an instance of TeamScoreDto from a JSON string
team_score_dto_instance = TeamScoreDto.from_json(json)
# print the JSON string representation of the object
print(TeamScoreDto.to_json())

# convert the object into a dict
team_score_dto_dict = team_score_dto_instance.to_dict()
# create an instance of TeamScoreDto from a dict
team_score_dto_from_dict = TeamScoreDto.from_dict(team_score_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


