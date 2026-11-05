# AbortMultipartUploadDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**upload_id** | **str** |  | 

## Example

```python
from victorycode_sdk.models.abort_multipart_upload_dto import AbortMultipartUploadDto

# TODO update the JSON string below
json = "{}"
# create an instance of AbortMultipartUploadDto from a JSON string
abort_multipart_upload_dto_instance = AbortMultipartUploadDto.from_json(json)
# print the JSON string representation of the object
print(AbortMultipartUploadDto.to_json())

# convert the object into a dict
abort_multipart_upload_dto_dict = abort_multipart_upload_dto_instance.to_dict()
# create an instance of AbortMultipartUploadDto from a dict
abort_multipart_upload_dto_from_dict = AbortMultipartUploadDto.from_dict(abort_multipart_upload_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


