# CoordinatesDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latitude** | **float** |  | 
**longitude** | **float** |  | 

## Example

```python
from victorycode_sdk.models.coordinates_dto import CoordinatesDto

# TODO update the JSON string below
json = "{}"
# create an instance of CoordinatesDto from a JSON string
coordinates_dto_instance = CoordinatesDto.from_json(json)
# print the JSON string representation of the object
print(CoordinatesDto.to_json())

# convert the object into a dict
coordinates_dto_dict = coordinates_dto_instance.to_dict()
# create an instance of CoordinatesDto from a dict
coordinates_dto_from_dict = CoordinatesDto.from_dict(coordinates_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


