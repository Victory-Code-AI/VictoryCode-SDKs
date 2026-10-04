# SingleVideoResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**data** | [**VideoListItemDto**](VideoListItemDto.md) |  | 

## Example

```python
from victorycode_sdk.models.single_video_response_dto import SingleVideoResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of SingleVideoResponseDto from a JSON string
single_video_response_dto_instance = SingleVideoResponseDto.from_json(json)
# print the JSON string representation of the object
print(SingleVideoResponseDto.to_json())

# convert the object into a dict
single_video_response_dto_dict = single_video_response_dto_instance.to_dict()
# create an instance of SingleVideoResponseDto from a dict
single_video_response_dto_from_dict = SingleVideoResponseDto.from_dict(single_video_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


