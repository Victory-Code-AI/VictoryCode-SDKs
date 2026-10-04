# ScoringSummaryProTeamDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**team_id** | **str** |  | 
**team_name** | **str** |  | 

## Example

```python
from victorycode_sdk.models.scoring_summary_pro_team_dto import ScoringSummaryProTeamDto

# TODO update the JSON string below
json = "{}"
# create an instance of ScoringSummaryProTeamDto from a JSON string
scoring_summary_pro_team_dto_instance = ScoringSummaryProTeamDto.from_json(json)
# print the JSON string representation of the object
print(ScoringSummaryProTeamDto.to_json())

# convert the object into a dict
scoring_summary_pro_team_dto_dict = scoring_summary_pro_team_dto_instance.to_dict()
# create an instance of ScoringSummaryProTeamDto from a dict
scoring_summary_pro_team_dto_from_dict = ScoringSummaryProTeamDto.from_dict(scoring_summary_pro_team_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


