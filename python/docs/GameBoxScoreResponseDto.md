# GameBoxScoreResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**GameBoxScoreMetaDto**](GameBoxScoreMetaDto.md) |  | 
**teams** | [**GameBoxScoreTeamsDto**](GameBoxScoreTeamsDto.md) |  | 

## Example

```python
from victorycode_sdk.models.game_box_score_response_dto import GameBoxScoreResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of GameBoxScoreResponseDto from a JSON string
game_box_score_response_dto_instance = GameBoxScoreResponseDto.from_json(json)
# print the JSON string representation of the object
print(GameBoxScoreResponseDto.to_json())

# convert the object into a dict
game_box_score_response_dto_dict = game_box_score_response_dto_instance.to_dict()
# create an instance of GameBoxScoreResponseDto from a dict
game_box_score_response_dto_from_dict = GameBoxScoreResponseDto.from_dict(game_box_score_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


