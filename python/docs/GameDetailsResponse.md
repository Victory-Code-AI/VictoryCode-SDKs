# GameDetailsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**game_name** | **str** |  | 
**date_time** | **datetime** |  | 
**game_id** | **str** |  | 
**source_id** | **str** |  | 
**venue** | **str** |  | 
**home_team** | [**TeamBasicInfoDto**](TeamBasicInfoDto.md) |  | 
**away_team** | [**TeamBasicInfoDto**](TeamBasicInfoDto.md) |  | 

## Example

```python
from victorycode_sdk.models.game_details_response import GameDetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GameDetailsResponse from a JSON string
game_details_response_instance = GameDetailsResponse.from_json(json)
# print the JSON string representation of the object
print(GameDetailsResponse.to_json())

# convert the object into a dict
game_details_response_dict = game_details_response_instance.to_dict()
# create an instance of GameDetailsResponse from a dict
game_details_response_from_dict = GameDetailsResponse.from_dict(game_details_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


