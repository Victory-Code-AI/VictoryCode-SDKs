# GetGameResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**game_name** | **str** |  | [optional] 
**date_time** | **datetime** |  | [optional] 
**game_id** | **str** |  | [optional] 
**location** | **str** |  | [optional] 
**venue** | **str** |  | [optional] 
**home_team** | [**GetGameResponseDataHomeTeam**](GetGameResponseDataHomeTeam.md) |  | [optional] 
**away_team** | [**GetGameResponseDataHomeTeam**](GetGameResponseDataHomeTeam.md) |  | [optional] 

## Example

```python
from victorycode_sdk.models.get_game_response_data import GetGameResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetGameResponseData from a JSON string
get_game_response_data_instance = GetGameResponseData.from_json(json)
# print the JSON string representation of the object
print(GetGameResponseData.to_json())

# convert the object into a dict
get_game_response_data_dict = get_game_response_data_instance.to_dict()
# create an instance of GetGameResponseData from a dict
get_game_response_data_from_dict = GetGameResponseData.from_dict(get_game_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


