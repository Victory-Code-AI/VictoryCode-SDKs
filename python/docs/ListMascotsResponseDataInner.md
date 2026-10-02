# ListMascotsResponseDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**mascot_image** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**v** | **int** |  | [optional] 

## Example

```python
from victorycode_sdk.models.list_mascots_response_data_inner import ListMascotsResponseDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListMascotsResponseDataInner from a JSON string
list_mascots_response_data_inner_instance = ListMascotsResponseDataInner.from_json(json)
# print the JSON string representation of the object
print(ListMascotsResponseDataInner.to_json())

# convert the object into a dict
list_mascots_response_data_inner_dict = list_mascots_response_data_inner_instance.to_dict()
# create an instance of ListMascotsResponseDataInner from a dict
list_mascots_response_data_inner_from_dict = ListMascotsResponseDataInner.from_dict(list_mascots_response_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


