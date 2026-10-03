# GameBoxScoreTeamsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**home** | [**TeamBoxScoreDto**](TeamBoxScoreDto.md) |  | 
**away** | [**TeamBoxScoreDto**](TeamBoxScoreDto.md) |  | 

## Example

```python
from victorycode_sdk.models.game_box_score_teams_dto import GameBoxScoreTeamsDto

# TODO update the JSON string below
json = "{}"
# create an instance of GameBoxScoreTeamsDto from a JSON string
game_box_score_teams_dto_instance = GameBoxScoreTeamsDto.from_json(json)
# print the JSON string representation of the object
print(GameBoxScoreTeamsDto.to_json())

# convert the object into a dict
game_box_score_teams_dto_dict = game_box_score_teams_dto_instance.to_dict()
# create an instance of GameBoxScoreTeamsDto from a dict
game_box_score_teams_dto_from_dict = GameBoxScoreTeamsDto.from_dict(game_box_score_teams_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


