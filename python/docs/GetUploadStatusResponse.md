# GetUploadStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 
**data** | [**GetUploadStatusResponseData**](GetUploadStatusResponseData.md) |  | [optional] 

## Example

```python
from victorycode_sdk.models.get_upload_status_response import GetUploadStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetUploadStatusResponse from a JSON string
get_upload_status_response_instance = GetUploadStatusResponse.from_json(json)
# print the JSON string representation of the object
print(GetUploadStatusResponse.to_json())

# convert the object into a dict
get_upload_status_response_dict = get_upload_status_response_instance.to_dict()
# create an instance of GetUploadStatusResponse from a dict
get_upload_status_response_from_dict = GetUploadStatusResponse.from_dict(get_upload_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


