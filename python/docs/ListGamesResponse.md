# ListGamesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 
**data** | [**ListGamesResponseData**](ListGamesResponseData.md) |  | [optional] 

## Example

```python
from victorycode_sdk.models.list_games_response import ListGamesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListGamesResponse from a JSON string
list_games_response_instance = ListGamesResponse.from_json(json)
# print the JSON string representation of the object
print(ListGamesResponse.to_json())

# convert the object into a dict
list_games_response_dict = list_games_response_instance.to_dict()
# create an instance of ListGamesResponse from a dict
list_games_response_from_dict = ListGamesResponse.from_dict(list_games_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


