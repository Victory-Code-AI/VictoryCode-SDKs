# NotFoundErrorResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **float** |  | 
**message** | **str** |  | 

## Example

```python
from victorycode_sdk.models.not_found_error_response_dto import NotFoundErrorResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of NotFoundErrorResponseDto from a JSON string
not_found_error_response_dto_instance = NotFoundErrorResponseDto.from_json(json)
# print the JSON string representation of the object
print(NotFoundErrorResponseDto.to_json())

# convert the object into a dict
not_found_error_response_dto_dict = not_found_error_response_dto_instance.to_dict()
# create an instance of NotFoundErrorResponseDto from a dict
not_found_error_response_dto_from_dict = NotFoundErrorResponseDto.from_dict(not_found_error_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


