# KickingSectionDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**players** | [**List[KickingStatsDto]**](KickingStatsDto.md) |  | 
**totals** | [**KickingTotalsDto**](KickingTotalsDto.md) |  | 

## Example

```python
from victorycode_sdk.models.kicking_section_dto import KickingSectionDto

# TODO update the JSON string below
json = "{}"
# create an instance of KickingSectionDto from a JSON string
kicking_section_dto_instance = KickingSectionDto.from_json(json)
# print the JSON string representation of the object
print(KickingSectionDto.to_json())

# convert the object into a dict
kicking_section_dto_dict = kicking_section_dto_instance.to_dict()
# create an instance of KickingSectionDto from a dict
kicking_section_dto_from_dict = KickingSectionDto.from_dict(kicking_section_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


