# CreateClassificationResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**v** | **int** |  | [optional] 

## Example

```python
from victorycode_sdk.models.create_classification_response_data import CreateClassificationResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateClassificationResponseData from a JSON string
create_classification_response_data_instance = CreateClassificationResponseData.from_json(json)
# print the JSON string representation of the object
print(CreateClassificationResponseData.to_json())

# convert the object into a dict
create_classification_response_data_dict = create_classification_response_data_instance.to_dict()
# create an instance of CreateClassificationResponseData from a dict
create_classification_response_data_from_dict = CreateClassificationResponseData.from_dict(create_classification_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


