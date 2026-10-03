# ListClassificationsResponseDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**v** | **int** |  | [optional] 

## Example

```python
from victorycode_sdk.models.list_classifications_response_data_inner import ListClassificationsResponseDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListClassificationsResponseDataInner from a JSON string
list_classifications_response_data_inner_instance = ListClassificationsResponseDataInner.from_json(json)
# print the JSON string representation of the object
print(ListClassificationsResponseDataInner.to_json())

# convert the object into a dict
list_classifications_response_data_inner_dict = list_classifications_response_data_inner_instance.to_dict()
# create an instance of ListClassificationsResponseDataInner from a dict
list_classifications_response_data_inner_from_dict = ListClassificationsResponseDataInner.from_dict(list_classifications_response_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


