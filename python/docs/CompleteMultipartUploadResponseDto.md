# CompleteMultipartUploadResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**data** | [**CompleteMultipartUploadResponse**](CompleteMultipartUploadResponse.md) |  | 

## Example

```python
from victorycode_sdk.models.complete_multipart_upload_response_dto import CompleteMultipartUploadResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of CompleteMultipartUploadResponseDto from a JSON string
complete_multipart_upload_response_dto_instance = CompleteMultipartUploadResponseDto.from_json(json)
# print the JSON string representation of the object
print(CompleteMultipartUploadResponseDto.to_json())

# convert the object into a dict
complete_multipart_upload_response_dto_dict = complete_multipart_upload_response_dto_instance.to_dict()
# create an instance of CompleteMultipartUploadResponseDto from a dict
complete_multipart_upload_response_dto_from_dict = CompleteMultipartUploadResponseDto.from_dict(complete_multipart_upload_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


