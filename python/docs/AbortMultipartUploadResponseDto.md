# AbortMultipartUploadResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**data** | **object** |  | 

## Example

```python
from victorycode_sdk.models.abort_multipart_upload_response_dto import AbortMultipartUploadResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of AbortMultipartUploadResponseDto from a JSON string
abort_multipart_upload_response_dto_instance = AbortMultipartUploadResponseDto.from_json(json)
# print the JSON string representation of the object
print(AbortMultipartUploadResponseDto.to_json())

# convert the object into a dict
abort_multipart_upload_response_dto_dict = abort_multipart_upload_response_dto_instance.to_dict()
# create an instance of AbortMultipartUploadResponseDto from a dict
abort_multipart_upload_response_dto_from_dict = AbortMultipartUploadResponseDto.from_dict(abort_multipart_upload_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


