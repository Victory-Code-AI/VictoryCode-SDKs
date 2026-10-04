# PassingSectionDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**players** | [**List[PassingStatsDto]**](PassingStatsDto.md) |  | 
**totals** | [**PassingTotalsDto**](PassingTotalsDto.md) |  | 

## Example

```python
from victorycode_sdk.models.passing_section_dto import PassingSectionDto

# TODO update the JSON string below
json = "{}"
# create an instance of PassingSectionDto from a JSON string
passing_section_dto_instance = PassingSectionDto.from_json(json)
# print the JSON string representation of the object
print(PassingSectionDto.to_json())

# convert the object into a dict
passing_section_dto_dict = passing_section_dto_instance.to_dict()
# create an instance of PassingSectionDto from a dict
passing_section_dto_from_dict = PassingSectionDto.from_dict(passing_section_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


