# CompletedPartDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**part_number** | **float** |  | 
**e_tag** | **str** |  | 

## Example

```python
from victorycode_sdk.models.completed_part_dto import CompletedPartDto

# TODO update the JSON string below
json = "{}"
# create an instance of CompletedPartDto from a JSON string
completed_part_dto_instance = CompletedPartDto.from_json(json)
# print the JSON string representation of the object
print(CompletedPartDto.to_json())

# convert the object into a dict
completed_part_dto_dict = completed_part_dto_instance.to_dict()
# create an instance of CompletedPartDto from a dict
completed_part_dto_from_dict = CompletedPartDto.from_dict(completed_part_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


