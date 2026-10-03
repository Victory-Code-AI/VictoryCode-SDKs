# ListClassificationPaginatedResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **float** |  | 
**limit** | **float** |  | 
**offset** | **float** |  | 
**data** | [**List[Classification]**](Classification.md) |  | 

## Example

```python
from victorycode_sdk.models.list_classification_paginated_response_dto import ListClassificationPaginatedResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of ListClassificationPaginatedResponseDto from a JSON string
list_classification_paginated_response_dto_instance = ListClassificationPaginatedResponseDto.from_json(json)
# print the JSON string representation of the object
print(ListClassificationPaginatedResponseDto.to_json())

# convert the object into a dict
list_classification_paginated_response_dto_dict = list_classification_paginated_response_dto_instance.to_dict()
# create an instance of ListClassificationPaginatedResponseDto from a dict
list_classification_paginated_response_dto_from_dict = ListClassificationPaginatedResponseDto.from_dict(list_classification_paginated_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


