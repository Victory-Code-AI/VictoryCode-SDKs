# InitiateMultipartUploadDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filename** | **str** |  | 
**mimetype** | **str** |  | 
**game_id** | **str** |  | [optional] 

## Example

```python
from victorycode_sdk.models.initiate_multipart_upload_dto import InitiateMultipartUploadDto

# TODO update the JSON string below
json = "{}"
# create an instance of InitiateMultipartUploadDto from a JSON string
initiate_multipart_upload_dto_instance = InitiateMultipartUploadDto.from_json(json)
# print the JSON string representation of the object
print(InitiateMultipartUploadDto.to_json())

# convert the object into a dict
initiate_multipart_upload_dto_dict = initiate_multipart_upload_dto_instance.to_dict()
# create an instance of InitiateMultipartUploadDto from a dict
initiate_multipart_upload_dto_from_dict = InitiateMultipartUploadDto.from_dict(initiate_multipart_upload_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


