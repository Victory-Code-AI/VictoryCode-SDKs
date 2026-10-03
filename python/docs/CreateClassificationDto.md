# CreateClassificationDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**description** | **str** |  | 

## Example

```python
from victorycode_sdk.models.create_classification_dto import CreateClassificationDto

# TODO update the JSON string below
json = "{}"
# create an instance of CreateClassificationDto from a JSON string
create_classification_dto_instance = CreateClassificationDto.from_json(json)
# print the JSON string representation of the object
print(CreateClassificationDto.to_json())

# convert the object into a dict
create_classification_dto_dict = create_classification_dto_instance.to_dict()
# create an instance of CreateClassificationDto from a dict
create_classification_dto_from_dict = CreateClassificationDto.from_dict(create_classification_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


