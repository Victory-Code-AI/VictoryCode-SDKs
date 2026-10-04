# TurnoversDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **float** |  | 
**fumbles_lost** | **float** |  | 
**interceptions** | **float** |  | 

## Example

```python
from victorycode_sdk.models.turnovers_dto import TurnoversDto

# TODO update the JSON string below
json = "{}"
# create an instance of TurnoversDto from a JSON string
turnovers_dto_instance = TurnoversDto.from_json(json)
# print the JSON string representation of the object
print(TurnoversDto.to_json())

# convert the object into a dict
turnovers_dto_dict = turnovers_dto_instance.to_dict()
# create an instance of TurnoversDto from a dict
turnovers_dto_from_dict = TurnoversDto.from_dict(turnovers_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


