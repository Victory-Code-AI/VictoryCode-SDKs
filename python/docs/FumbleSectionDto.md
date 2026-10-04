# FumbleSectionDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**players** | [**List[FumbleStatsDto]**](FumbleStatsDto.md) |  | 
**totals** | [**FumbleTotalsDto**](FumbleTotalsDto.md) |  | 

## Example

```python
from victorycode_sdk.models.fumble_section_dto import FumbleSectionDto

# TODO update the JSON string below
json = "{}"
# create an instance of FumbleSectionDto from a JSON string
fumble_section_dto_instance = FumbleSectionDto.from_json(json)
# print the JSON string representation of the object
print(FumbleSectionDto.to_json())

# convert the object into a dict
fumble_section_dto_dict = fumble_section_dto_instance.to_dict()
# create an instance of FumbleSectionDto from a dict
fumble_section_dto_from_dict = FumbleSectionDto.from_dict(fumble_section_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


