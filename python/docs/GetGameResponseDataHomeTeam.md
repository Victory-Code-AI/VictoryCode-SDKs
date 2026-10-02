# GetGameResponseDataHomeTeam


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**team_id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**short_name** | **str** |  | [optional] 
**mascot** | **str** |  | [optional] 
**classification** | **str** |  | [optional] 

## Example

```python
from victorycode_sdk.models.get_game_response_data_home_team import GetGameResponseDataHomeTeam

# TODO update the JSON string below
json = "{}"
# create an instance of GetGameResponseDataHomeTeam from a JSON string
get_game_response_data_home_team_instance = GetGameResponseDataHomeTeam.from_json(json)
# print the JSON string representation of the object
print(GetGameResponseDataHomeTeam.to_json())

# convert the object into a dict
get_game_response_data_home_team_dict = get_game_response_data_home_team_instance.to_dict()
# create an instance of GetGameResponseDataHomeTeam from a dict
get_game_response_data_home_team_from_dict = GetGameResponseDataHomeTeam.from_dict(get_game_response_data_home_team_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


