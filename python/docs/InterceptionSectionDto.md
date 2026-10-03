# InterceptionSectionDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**players** | [**List[InterceptionStatsDto]**](InterceptionStatsDto.md) |  | 
**totals** | [**InterceptionTotalsDto**](InterceptionTotalsDto.md) |  | 

## Example

```python
from victorycode_sdk.models.interception_section_dto import InterceptionSectionDto

# TODO update the JSON string below
json = "{}"
# create an instance of InterceptionSectionDto from a JSON string
interception_section_dto_instance = InterceptionSectionDto.from_json(json)
# print the JSON string representation of the object
print(InterceptionSectionDto.to_json())

# convert the object into a dict
interception_section_dto_dict = interception_section_dto_instance.to_dict()
# create an instance of InterceptionSectionDto from a dict
interception_section_dto_from_dict = InterceptionSectionDto.from_dict(interception_section_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


