# RushingSectionDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**players** | [**List[RushingStatsDto]**](RushingStatsDto.md) |  | 
**totals** | [**RushingTotalsDto**](RushingTotalsDto.md) |  | 

## Example

```python
from victorycode_sdk.models.rushing_section_dto import RushingSectionDto

# TODO update the JSON string below
json = "{}"
# create an instance of RushingSectionDto from a JSON string
rushing_section_dto_instance = RushingSectionDto.from_json(json)
# print the JSON string representation of the object
print(RushingSectionDto.to_json())

# convert the object into a dict
rushing_section_dto_dict = rushing_section_dto_instance.to_dict()
# create an instance of RushingSectionDto from a dict
rushing_section_dto_from_dict = RushingSectionDto.from_dict(rushing_section_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


