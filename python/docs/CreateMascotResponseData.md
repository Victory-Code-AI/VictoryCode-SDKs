# CreateMascotResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**mascot_image** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**v** | **int** |  | [optional] 

## Example

```python
from victorycode_sdk.models.create_mascot_response_data import CreateMascotResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateMascotResponseData from a JSON string
create_mascot_response_data_instance = CreateMascotResponseData.from_json(json)
# print the JSON string representation of the object
print(CreateMascotResponseData.to_json())

# convert the object into a dict
create_mascot_response_data_dict = create_mascot_response_data_instance.to_dict()
# create an instance of CreateMascotResponseData from a dict
create_mascot_response_data_from_dict = CreateMascotResponseData.from_dict(create_mascot_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


