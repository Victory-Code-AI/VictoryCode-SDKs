# GameBoxScoreMetaDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**game_id** | **str** |  | 
**game_title** | **str** |  | 
**video_id** | **str** |  | 
**view_type** | **str** |  | 
**home_team** | **str** |  | 
**away_team** | **str** |  | 
**home_score** | **float** |  | 
**away_score** | **float** |  | 
**generated_at** | **str** | ISO 8601 timestamp | 

## Example

```python
from victorycode_sdk.models.game_box_score_meta_dto import GameBoxScoreMetaDto

# TODO update the JSON string below
json = "{}"
# create an instance of GameBoxScoreMetaDto from a JSON string
game_box_score_meta_dto_instance = GameBoxScoreMetaDto.from_json(json)
# print the JSON string representation of the object
print(GameBoxScoreMetaDto.to_json())

# convert the object into a dict
game_box_score_meta_dto_dict = game_box_score_meta_dto_instance.to_dict()
# create an instance of GameBoxScoreMetaDto from a dict
game_box_score_meta_dto_from_dict = GameBoxScoreMetaDto.from_dict(game_box_score_meta_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


