# UpdateClassificationDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 

## Example

```python
from victorycode_sdk.models.update_classification_dto import UpdateClassificationDto

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateClassificationDto from a JSON string
update_classification_dto_instance = UpdateClassificationDto.from_json(json)
# print the JSON string representation of the object
print(UpdateClassificationDto.to_json())

# convert the object into a dict
update_classification_dto_dict = update_classification_dto_instance.to_dict()
# create an instance of UpdateClassificationDto from a dict
update_classification_dto_from_dict = UpdateClassificationDto.from_dict(update_classification_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


