# CompleteMultipartUploadDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**upload_id** | **str** |  | 
**parts** | [**List[CompletedPartDto]**](CompletedPartDto.md) |  | 

## Example

```python
from victorycode_sdk.models.complete_multipart_upload_dto import CompleteMultipartUploadDto

# TODO update the JSON string below
json = "{}"
# create an instance of CompleteMultipartUploadDto from a JSON string
complete_multipart_upload_dto_instance = CompleteMultipartUploadDto.from_json(json)
# print the JSON string representation of the object
print(CompleteMultipartUploadDto.to_json())

# convert the object into a dict
complete_multipart_upload_dto_dict = complete_multipart_upload_dto_instance.to_dict()
# create an instance of CompleteMultipartUploadDto from a dict
complete_multipart_upload_dto_from_dict = CompleteMultipartUploadDto.from_dict(complete_multipart_upload_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


