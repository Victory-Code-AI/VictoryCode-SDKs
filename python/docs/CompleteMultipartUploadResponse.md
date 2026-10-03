# CompleteMultipartUploadResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**s3_url** | **str** |  | 
**s3_key** | **str** |  | 

## Example

```python
from victorycode_sdk.models.complete_multipart_upload_response import CompleteMultipartUploadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CompleteMultipartUploadResponse from a JSON string
complete_multipart_upload_response_instance = CompleteMultipartUploadResponse.from_json(json)
# print the JSON string representation of the object
print(CompleteMultipartUploadResponse.to_json())

# convert the object into a dict
complete_multipart_upload_response_dict = complete_multipart_upload_response_instance.to_dict()
# create an instance of CompleteMultipartUploadResponse from a dict
complete_multipart_upload_response_from_dict = CompleteMultipartUploadResponse.from_dict(complete_multipart_upload_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


