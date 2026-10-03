# GetGameRecapScoreResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**game_id** | **str** |  | [optional] 
**home_team** | [**GetGameRecapScoreResponseDataHomeTeam**](GetGameRecapScoreResponseDataHomeTeam.md) |  | [optional] 
**away_team** | [**GetGameRecapScoreResponseDataHomeTeam**](GetGameRecapScoreResponseDataHomeTeam.md) |  | [optional] 

## Example

```python
from victorycode_sdk.models.get_game_recap_score_response_data import GetGameRecapScoreResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetGameRecapScoreResponseData from a JSON string
get_game_recap_score_response_data_instance = GetGameRecapScoreResponseData.from_json(json)
# print the JSON string representation of the object
print(GetGameRecapScoreResponseData.to_json())

# convert the object into a dict
get_game_recap_score_response_data_dict = get_game_recap_score_response_data_instance.to_dict()
# create an instance of GetGameRecapScoreResponseData from a dict
get_game_recap_score_response_data_from_dict = GetGameRecapScoreResponseData.from_dict(get_game_recap_score_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


