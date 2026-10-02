# ListGamesResponseDataGamesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**game_name** | **str** |  | [optional] 
**date_time** | **datetime** |  | [optional] 
**game_id** | **str** |  | [optional] 
**home_team** | [**ListGamesResponseDataGamesInnerHomeTeam**](ListGamesResponseDataGamesInnerHomeTeam.md) |  | [optional] 
**away_team** | [**ListGamesResponseDataGamesInnerHomeTeam**](ListGamesResponseDataGamesInnerHomeTeam.md) |  | [optional] 
**location** | **str** |  | [optional] 
**venue** | **str** |  | [optional] 

## Example

```python
from victorycode_sdk.models.list_games_response_data_games_inner import ListGamesResponseDataGamesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListGamesResponseDataGamesInner from a JSON string
list_games_response_data_games_inner_instance = ListGamesResponseDataGamesInner.from_json(json)
# print the JSON string representation of the object
print(ListGamesResponseDataGamesInner.to_json())

# convert the object into a dict
list_games_response_data_games_inner_dict = list_games_response_data_games_inner_instance.to_dict()
# create an instance of ListGamesResponseDataGamesInner from a dict
list_games_response_data_games_inner_from_dict = ListGamesResponseDataGamesInner.from_dict(list_games_response_data_games_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


