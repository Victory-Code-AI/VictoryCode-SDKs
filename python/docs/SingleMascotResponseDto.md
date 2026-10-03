# SingleMascotResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**data** | [**MascotResponseDto**](MascotResponseDto.md) |  | 

## Example

```python
from victorycode_sdk.models.single_mascot_response_dto import SingleMascotResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of SingleMascotResponseDto from a JSON string
single_mascot_response_dto_instance = SingleMascotResponseDto.from_json(json)
# print the JSON string representation of the object
print(SingleMascotResponseDto.to_json())

# convert the object into a dict
single_mascot_response_dto_dict = single_mascot_response_dto_instance.to_dict()
# create an instance of SingleMascotResponseDto from a dict
single_mascot_response_dto_from_dict = SingleMascotResponseDto.from_dict(single_mascot_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


