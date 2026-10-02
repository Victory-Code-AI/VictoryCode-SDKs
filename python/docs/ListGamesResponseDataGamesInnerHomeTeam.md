# ListGamesResponseDataGamesInnerHomeTeam


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**team_id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**short_name** | **str** |  | [optional] 
**classification** | **str** |  | [optional] 
**mascot** | **str** |  | [optional] 

## Example

```python
from victorycode_sdk.models.list_games_response_data_games_inner_home_team import ListGamesResponseDataGamesInnerHomeTeam

# TODO update the JSON string below
json = "{}"
# create an instance of ListGamesResponseDataGamesInnerHomeTeam from a JSON string
list_games_response_data_games_inner_home_team_instance = ListGamesResponseDataGamesInnerHomeTeam.from_json(json)
# print the JSON string representation of the object
print(ListGamesResponseDataGamesInnerHomeTeam.to_json())

# convert the object into a dict
list_games_response_data_games_inner_home_team_dict = list_games_response_data_games_inner_home_team_instance.to_dict()
# create an instance of ListGamesResponseDataGamesInnerHomeTeam from a dict
list_games_response_data_games_inner_home_team_from_dict = ListGamesResponseDataGamesInnerHomeTeam.from_dict(list_games_response_data_games_inner_home_team_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


