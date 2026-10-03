# ConflictErrorResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **float** |  | 
**message** | **str** |  | 

## Example

```python
from victorycode_sdk.models.conflict_error_response_dto import ConflictErrorResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of ConflictErrorResponseDto from a JSON string
conflict_error_response_dto_instance = ConflictErrorResponseDto.from_json(json)
# print the JSON string representation of the object
print(ConflictErrorResponseDto.to_json())

# convert the object into a dict
conflict_error_response_dto_dict = conflict_error_response_dto_instance.to_dict()
# create an instance of ConflictErrorResponseDto from a dict
conflict_error_response_dto_from_dict = ConflictErrorResponseDto.from_dict(conflict_error_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


