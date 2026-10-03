# GetGameResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 
**data** | [**GetGameResponseData**](GetGameResponseData.md) |  | [optional] 

## Example

```python
from victorycode_sdk.models.get_game_response import GetGameResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetGameResponse from a JSON string
get_game_response_instance = GetGameResponse.from_json(json)
# print the JSON string representation of the object
print(GetGameResponse.to_json())

# convert the object into a dict
get_game_response_dict = get_game_response_instance.to_dict()
# create an instance of GetGameResponse from a dict
get_game_response_from_dict = GetGameResponse.from_dict(get_game_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


