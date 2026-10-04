# UnauthorizedErrorResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **float** |  | 
**message** | **str** |  | 

## Example

```python
from victorycode_sdk.models.unauthorized_error_response_dto import UnauthorizedErrorResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of UnauthorizedErrorResponseDto from a JSON string
unauthorized_error_response_dto_instance = UnauthorizedErrorResponseDto.from_json(json)
# print the JSON string representation of the object
print(UnauthorizedErrorResponseDto.to_json())

# convert the object into a dict
unauthorized_error_response_dto_dict = unauthorized_error_response_dto_instance.to_dict()
# create an instance of UnauthorizedErrorResponseDto from a dict
unauthorized_error_response_dto_from_dict = UnauthorizedErrorResponseDto.from_dict(unauthorized_error_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


