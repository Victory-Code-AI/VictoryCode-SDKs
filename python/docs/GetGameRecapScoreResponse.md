# GetGameRecapScoreResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 
**data** | [**GetGameRecapScoreResponseData**](GetGameRecapScoreResponseData.md) |  | [optional] 

## Example

```python
from victorycode_sdk.models.get_game_recap_score_response import GetGameRecapScoreResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetGameRecapScoreResponse from a JSON string
get_game_recap_score_response_instance = GetGameRecapScoreResponse.from_json(json)
# print the JSON string representation of the object
print(GetGameRecapScoreResponse.to_json())

# convert the object into a dict
get_game_recap_score_response_dict = get_game_recap_score_response_instance.to_dict()
# create an instance of GetGameRecapScoreResponse from a dict
get_game_recap_score_response_from_dict = GetGameRecapScoreResponse.from_dict(get_game_recap_score_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


