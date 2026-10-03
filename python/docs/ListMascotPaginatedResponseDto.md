# ListMascotPaginatedResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **float** |  | 
**limit** | **float** |  | 
**offset** | **float** |  | 
**data** | [**List[MascotResponseDto]**](MascotResponseDto.md) |  | 

## Example

```python
from victorycode_sdk.models.list_mascot_paginated_response_dto import ListMascotPaginatedResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of ListMascotPaginatedResponseDto from a JSON string
list_mascot_paginated_response_dto_instance = ListMascotPaginatedResponseDto.from_json(json)
# print the JSON string representation of the object
print(ListMascotPaginatedResponseDto.to_json())

# convert the object into a dict
list_mascot_paginated_response_dto_dict = list_mascot_paginated_response_dto_instance.to_dict()
# create an instance of ListMascotPaginatedResponseDto from a dict
list_mascot_paginated_response_dto_from_dict = ListMascotPaginatedResponseDto.from_dict(list_mascot_paginated_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


