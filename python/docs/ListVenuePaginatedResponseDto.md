# ListVenuePaginatedResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **float** |  | 
**limit** | **float** |  | 
**offset** | **float** |  | 
**data** | [**List[Venue]**](Venue.md) |  | 

## Example

```python
from victorycode_sdk.models.list_venue_paginated_response_dto import ListVenuePaginatedResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of ListVenuePaginatedResponseDto from a JSON string
list_venue_paginated_response_dto_instance = ListVenuePaginatedResponseDto.from_json(json)
# print the JSON string representation of the object
print(ListVenuePaginatedResponseDto.to_json())

# convert the object into a dict
list_venue_paginated_response_dto_dict = list_venue_paginated_response_dto_instance.to_dict()
# create an instance of ListVenuePaginatedResponseDto from a dict
list_venue_paginated_response_dto_from_dict = ListVenuePaginatedResponseDto.from_dict(list_venue_paginated_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


