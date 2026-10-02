# ListMascotsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 
**data** | [**List[ListMascotsResponseDataInner]**](ListMascotsResponseDataInner.md) |  | [optional] 
**pagination** | [**ListClassificationsResponsePagination**](ListClassificationsResponsePagination.md) |  | [optional] 

## Example

```python
from victorycode_sdk.models.list_mascots_response import ListMascotsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListMascotsResponse from a JSON string
list_mascots_response_instance = ListMascotsResponse.from_json(json)
# print the JSON string representation of the object
print(ListMascotsResponse.to_json())

# convert the object into a dict
list_mascots_response_dict = list_mascots_response_instance.to_dict()
# create an instance of ListMascotsResponse from a dict
list_mascots_response_from_dict = ListMascotsResponse.from_dict(list_mascots_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


