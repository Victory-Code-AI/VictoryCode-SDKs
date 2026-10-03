# ListTeamPaginatedResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **float** |  | 
**limit** | **float** |  | 
**offset** | **float** |  | 
**data** | [**List[FetchTeamResponseDto]**](FetchTeamResponseDto.md) |  | 

## Example

```python
from victorycode_sdk.models.list_team_paginated_response_dto import ListTeamPaginatedResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of ListTeamPaginatedResponseDto from a JSON string
list_team_paginated_response_dto_instance = ListTeamPaginatedResponseDto.from_json(json)
# print the JSON string representation of the object
print(ListTeamPaginatedResponseDto.to_json())

# convert the object into a dict
list_team_paginated_response_dto_dict = list_team_paginated_response_dto_instance.to_dict()
# create an instance of ListTeamPaginatedResponseDto from a dict
list_team_paginated_response_dto_from_dict = ListTeamPaginatedResponseDto.from_dict(list_team_paginated_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


