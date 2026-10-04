# TeamBoxScoreDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**team_id** | **str** |  | 
**team_name** | **str** |  | 
**logo_url** | **str** |  | [optional] 
**passing** | [**PassingSectionDto**](PassingSectionDto.md) |  | 
**rushing** | [**RushingSectionDto**](RushingSectionDto.md) |  | 
**receiving** | [**ReceivingSectionDto**](ReceivingSectionDto.md) |  | 
**fumbles** | [**FumbleSectionDto**](FumbleSectionDto.md) |  | 
**defense** | [**DefenseSectionDto**](DefenseSectionDto.md) |  | 
**kicking** | [**KickingSectionDto**](KickingSectionDto.md) |  | 
**interceptions** | [**InterceptionSectionDto**](InterceptionSectionDto.md) |  | 

## Example

```python
from victorycode_sdk.models.team_box_score_dto import TeamBoxScoreDto

# TODO update the JSON string below
json = "{}"
# create an instance of TeamBoxScoreDto from a JSON string
team_box_score_dto_instance = TeamBoxScoreDto.from_json(json)
# print the JSON string representation of the object
print(TeamBoxScoreDto.to_json())

# convert the object into a dict
team_box_score_dto_dict = team_box_score_dto_instance.to_dict()
# create an instance of TeamBoxScoreDto from a dict
team_box_score_dto_from_dict = TeamBoxScoreDto.from_dict(team_box_score_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


