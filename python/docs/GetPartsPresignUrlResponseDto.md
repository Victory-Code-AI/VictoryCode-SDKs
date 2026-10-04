# GetPartsPresignUrlResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**data** | [**GetPartsPresignUrlResponse**](GetPartsPresignUrlResponse.md) |  | 

## Example

```python
from victorycode_sdk.models.get_parts_presign_url_response_dto import GetPartsPresignUrlResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of GetPartsPresignUrlResponseDto from a JSON string
get_parts_presign_url_response_dto_instance = GetPartsPresignUrlResponseDto.from_json(json)
# print the JSON string representation of the object
print(GetPartsPresignUrlResponseDto.to_json())

# convert the object into a dict
get_parts_presign_url_response_dto_dict = get_parts_presign_url_response_dto_instance.to_dict()
# create an instance of GetPartsPresignUrlResponseDto from a dict
get_parts_presign_url_response_dto_from_dict = GetPartsPresignUrlResponseDto.from_dict(get_parts_presign_url_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


