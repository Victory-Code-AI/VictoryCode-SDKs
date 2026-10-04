# InitiateMultipartUploadResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**upload_id** | **str** |  | 

## Example

```python
from victorycode_sdk.models.initiate_multipart_upload_response import InitiateMultipartUploadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InitiateMultipartUploadResponse from a JSON string
initiate_multipart_upload_response_instance = InitiateMultipartUploadResponse.from_json(json)
# print the JSON string representation of the object
print(InitiateMultipartUploadResponse.to_json())

# convert the object into a dict
initiate_multipart_upload_response_dict = initiate_multipart_upload_response_instance.to_dict()
# create an instance of InitiateMultipartUploadResponse from a dict
initiate_multipart_upload_response_from_dict = InitiateMultipartUploadResponse.from_dict(initiate_multipart_upload_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


