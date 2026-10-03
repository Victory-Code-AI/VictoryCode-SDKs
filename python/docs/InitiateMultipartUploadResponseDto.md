# InitiateMultipartUploadResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**data** | [**InitiateMultipartUploadResponse**](InitiateMultipartUploadResponse.md) |  | 

## Example

```python
from victorycode_sdk.models.initiate_multipart_upload_response_dto import InitiateMultipartUploadResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of InitiateMultipartUploadResponseDto from a JSON string
initiate_multipart_upload_response_dto_instance = InitiateMultipartUploadResponseDto.from_json(json)
# print the JSON string representation of the object
print(InitiateMultipartUploadResponseDto.to_json())

# convert the object into a dict
initiate_multipart_upload_response_dto_dict = initiate_multipart_upload_response_dto_instance.to_dict()
# create an instance of InitiateMultipartUploadResponseDto from a dict
initiate_multipart_upload_response_dto_from_dict = InitiateMultipartUploadResponseDto.from_dict(initiate_multipart_upload_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


