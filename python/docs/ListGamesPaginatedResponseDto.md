# ListGamesPaginatedResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **float** |  | 
**limit** | **float** |  | 
**offset** | **float** |  | 
**data** | [**List[GameDetailsResponse]**](GameDetailsResponse.md) |  | 

## Example

```python
from victorycode_sdk.models.list_games_paginated_response_dto import ListGamesPaginatedResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of ListGamesPaginatedResponseDto from a JSON string
list_games_paginated_response_dto_instance = ListGamesPaginatedResponseDto.from_json(json)
# print the JSON string representation of the object
print(ListGamesPaginatedResponseDto.to_json())

# convert the object into a dict
list_games_paginated_response_dto_dict = list_games_paginated_response_dto_instance.to_dict()
# create an instance of ListGamesPaginatedResponseDto from a dict
list_games_paginated_response_dto_from_dict = ListGamesPaginatedResponseDto.from_dict(list_games_paginated_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


