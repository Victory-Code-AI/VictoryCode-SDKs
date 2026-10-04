# DefenseSectionDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**players** | [**List[DefenseStatsDto]**](DefenseStatsDto.md) |  | 
**totals** | [**DefenseTotalsDto**](DefenseTotalsDto.md) |  | 

## Example

```python
from victorycode_sdk.models.defense_section_dto import DefenseSectionDto

# TODO update the JSON string below
json = "{}"
# create an instance of DefenseSectionDto from a JSON string
defense_section_dto_instance = DefenseSectionDto.from_json(json)
# print the JSON string representation of the object
print(DefenseSectionDto.to_json())

# convert the object into a dict
defense_section_dto_dict = defense_section_dto_instance.to_dict()
# create an instance of DefenseSectionDto from a dict
defense_section_dto_from_dict = DefenseSectionDto.from_dict(defense_section_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


