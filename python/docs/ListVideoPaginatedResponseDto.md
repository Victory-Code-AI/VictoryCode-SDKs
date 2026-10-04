# ListVideoPaginatedResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **float** |  | 
**limit** | **float** |  | 
**offset** | **float** |  | 
**game_id** | **str** |  | 
**data** | [**List[VideoListItemDto]**](VideoListItemDto.md) |  | 

## Example

```python
from victorycode_sdk.models.list_video_paginated_response_dto import ListVideoPaginatedResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of ListVideoPaginatedResponseDto from a JSON string
list_video_paginated_response_dto_instance = ListVideoPaginatedResponseDto.from_json(json)
# print the JSON string representation of the object
print(ListVideoPaginatedResponseDto.to_json())

# convert the object into a dict
list_video_paginated_response_dto_dict = list_video_paginated_response_dto_instance.to_dict()
# create an instance of ListVideoPaginatedResponseDto from a dict
list_video_paginated_response_dto_from_dict = ListVideoPaginatedResponseDto.from_dict(list_video_paginated_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


