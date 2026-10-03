# ListClassificationsResponsePagination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** |  | [optional] 
**total_data** | **int** |  | [optional] 
**page** | **int** |  | [optional] 

## Example

```python
from victorycode_sdk.models.list_classifications_response_pagination import ListClassificationsResponsePagination

# TODO update the JSON string below
json = "{}"
# create an instance of ListClassificationsResponsePagination from a JSON string
list_classifications_response_pagination_instance = ListClassificationsResponsePagination.from_json(json)
# print the JSON string representation of the object
print(ListClassificationsResponsePagination.to_json())

# convert the object into a dict
list_classifications_response_pagination_dict = list_classifications_response_pagination_instance.to_dict()
# create an instance of ListClassificationsResponsePagination from a dict
list_classifications_response_pagination_from_dict = ListClassificationsResponsePagination.from_dict(list_classifications_response_pagination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


