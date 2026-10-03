# CreateClassificationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 

## Example

```python
from victorycode_sdk.models.create_classification_request import CreateClassificationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateClassificationRequest from a JSON string
create_classification_request_instance = CreateClassificationRequest.from_json(json)
# print the JSON string representation of the object
print(CreateClassificationRequest.to_json())

# convert the object into a dict
create_classification_request_dict = create_classification_request_instance.to_dict()
# create an instance of CreateClassificationRequest from a dict
create_classification_request_from_dict = CreateClassificationRequest.from_dict(create_classification_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


