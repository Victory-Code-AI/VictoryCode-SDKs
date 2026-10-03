# UpdateMascotDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 

## Example

```python
from victorycode_sdk.models.update_mascot_dto import UpdateMascotDto

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMascotDto from a JSON string
update_mascot_dto_instance = UpdateMascotDto.from_json(json)
# print the JSON string representation of the object
print(UpdateMascotDto.to_json())

# convert the object into a dict
update_mascot_dto_dict = update_mascot_dto_instance.to_dict()
# create an instance of UpdateMascotDto from a dict
update_mascot_dto_from_dict = UpdateMascotDto.from_dict(update_mascot_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


