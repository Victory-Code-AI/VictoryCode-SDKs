# MascotResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**name** | **str** |  | 
**description** | **str** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from victorycode_sdk.models.mascot_response_dto import MascotResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of MascotResponseDto from a JSON string
mascot_response_dto_instance = MascotResponseDto.from_json(json)
# print the JSON string representation of the object
print(MascotResponseDto.to_json())

# convert the object into a dict
mascot_response_dto_dict = mascot_response_dto_instance.to_dict()
# create an instance of MascotResponseDto from a dict
mascot_response_dto_from_dict = MascotResponseDto.from_dict(mascot_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


