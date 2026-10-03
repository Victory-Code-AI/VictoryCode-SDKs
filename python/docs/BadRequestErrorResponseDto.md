# BadRequestErrorResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **float** |  | 
**message** | **str** |  | 

## Example

```python
from victorycode_sdk.models.bad_request_error_response_dto import BadRequestErrorResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of BadRequestErrorResponseDto from a JSON string
bad_request_error_response_dto_instance = BadRequestErrorResponseDto.from_json(json)
# print the JSON string representation of the object
print(BadRequestErrorResponseDto.to_json())

# convert the object into a dict
bad_request_error_response_dto_dict = bad_request_error_response_dto_instance.to_dict()
# create an instance of BadRequestErrorResponseDto from a dict
bad_request_error_response_dto_from_dict = BadRequestErrorResponseDto.from_dict(bad_request_error_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


