# RushingDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_yards** | **float** |  | 
**attempts** | **float** |  | 
**yards_per_rush** | **float** |  | 

## Example

```python
from victorycode_sdk.models.rushing_dto import RushingDto

# TODO update the JSON string below
json = "{}"
# create an instance of RushingDto from a JSON string
rushing_dto_instance = RushingDto.from_json(json)
# print the JSON string representation of the object
print(RushingDto.to_json())

# convert the object into a dict
rushing_dto_dict = rushing_dto_instance.to_dict()
# create an instance of RushingDto from a dict
rushing_dto_from_dict = RushingDto.from_dict(rushing_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


