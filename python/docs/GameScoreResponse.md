# GameScoreResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**game_id** | **str** |  | 
**video_id** | **str** |  | 
**home_team** | [**TeamScoreDto**](TeamScoreDto.md) |  | 
**away_team** | [**TeamScoreDto**](TeamScoreDto.md) |  | 

## Example

```python
from victorycode_sdk.models.game_score_response import GameScoreResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GameScoreResponse from a JSON string
game_score_response_instance = GameScoreResponse.from_json(json)
# print the JSON string representation of the object
print(GameScoreResponse.to_json())

# convert the object into a dict
game_score_response_dict = game_score_response_instance.to_dict()
# create an instance of GameScoreResponse from a dict
game_score_response_from_dict = GameScoreResponse.from_dict(game_score_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


