# ListClassificationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 
**data** | [**List[ListClassificationsResponseDataInner]**](ListClassificationsResponseDataInner.md) |  | [optional] 
**pagination** | [**ListClassificationsResponsePagination**](ListClassificationsResponsePagination.md) |  | [optional] 

## Example

```python
from victorycode_sdk.models.list_classifications_response import ListClassificationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListClassificationsResponse from a JSON string
list_classifications_response_instance = ListClassificationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListClassificationsResponse.to_json())

# convert the object into a dict
list_classifications_response_dict = list_classifications_response_instance.to_dict()
# create an instance of ListClassificationsResponse from a dict
list_classifications_response_from_dict = ListClassificationsResponse.from_dict(list_classifications_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


