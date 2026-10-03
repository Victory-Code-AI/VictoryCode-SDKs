# SingleClassificationResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**data** | [**Classification**](Classification.md) |  | 

## Example

```python
from victorycode_sdk.models.single_classification_response_dto import SingleClassificationResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of SingleClassificationResponseDto from a JSON string
single_classification_response_dto_instance = SingleClassificationResponseDto.from_json(json)
# print the JSON string representation of the object
print(SingleClassificationResponseDto.to_json())

# convert the object into a dict
single_classification_response_dto_dict = single_classification_response_dto_instance.to_dict()
# create an instance of SingleClassificationResponseDto from a dict
single_classification_response_dto_from_dict = SingleClassificationResponseDto.from_dict(single_classification_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


