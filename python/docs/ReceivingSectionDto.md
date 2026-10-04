# ReceivingSectionDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**players** | [**List[ReceivingStatsDto]**](ReceivingStatsDto.md) |  | 
**totals** | [**ReceivingTotalsDto**](ReceivingTotalsDto.md) |  | 

## Example

```python
from victorycode_sdk.models.receiving_section_dto import ReceivingSectionDto

# TODO update the JSON string below
json = "{}"
# create an instance of ReceivingSectionDto from a JSON string
receiving_section_dto_instance = ReceivingSectionDto.from_json(json)
# print the JSON string representation of the object
print(ReceivingSectionDto.to_json())

# convert the object into a dict
receiving_section_dto_dict = receiving_section_dto_instance.to_dict()
# create an instance of ReceivingSectionDto from a dict
receiving_section_dto_from_dict = ReceivingSectionDto.from_dict(receiving_section_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


