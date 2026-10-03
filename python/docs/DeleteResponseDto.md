# DeleteResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**data** | **object** |  | 

## Example

```python
from victorycode_sdk.models.delete_response_dto import DeleteResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteResponseDto from a JSON string
delete_response_dto_instance = DeleteResponseDto.from_json(json)
# print the JSON string representation of the object
print(DeleteResponseDto.to_json())

# convert the object into a dict
delete_response_dto_dict = delete_response_dto_instance.to_dict()
# create an instance of DeleteResponseDto from a dict
delete_response_dto_from_dict = DeleteResponseDto.from_dict(delete_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


