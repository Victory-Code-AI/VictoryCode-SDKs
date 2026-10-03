# GetUploadStatusResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**s3_upload_id** | **str** |  | [optional] 
**s3_key** | **str** |  | [optional] 
**file_size** | **int** |  | [optional] 
**status** | **str** |  | [optional] 
**progress** | **int** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**v** | **int** |  | [optional] 
**location** | **str** |  | [optional] 

## Example

```python
from victorycode_sdk.models.get_upload_status_response_data import GetUploadStatusResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetUploadStatusResponseData from a JSON string
get_upload_status_response_data_instance = GetUploadStatusResponseData.from_json(json)
# print the JSON string representation of the object
print(GetUploadStatusResponseData.to_json())

# convert the object into a dict
get_upload_status_response_data_dict = get_upload_status_response_data_instance.to_dict()
# create an instance of GetUploadStatusResponseData from a dict
get_upload_status_response_data_from_dict = GetUploadStatusResponseData.from_dict(get_upload_status_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


