# ListGamesResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** |  | [optional] 
**limit** | **int** |  | [optional] 
**games** | [**List[ListGamesResponseDataGamesInner]**](ListGamesResponseDataGamesInner.md) |  | [optional] 

## Example

```python
from victorycode_sdk.models.list_games_response_data import ListGamesResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ListGamesResponseData from a JSON string
list_games_response_data_instance = ListGamesResponseData.from_json(json)
# print the JSON string representation of the object
print(ListGamesResponseData.to_json())

# convert the object into a dict
list_games_response_data_dict = list_games_response_data_instance.to_dict()
# create an instance of ListGamesResponseData from a dict
list_games_response_data_from_dict = ListGamesResponseData.from_dict(list_games_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


