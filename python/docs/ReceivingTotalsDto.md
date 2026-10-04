# ReceivingTotalsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**receptions** | **float** |  | 
**yards** | **float** |  | 
**avg** | **float** |  | 
**touchdowns** | **float** |  | 
**long** | **float** | Longest reception in yards | 
**targets** | **float** |  | 

## Example

```python
from victorycode_sdk.models.receiving_totals_dto import ReceivingTotalsDto

# TODO update the JSON string below
json = "{}"
# create an instance of ReceivingTotalsDto from a JSON string
receiving_totals_dto_instance = ReceivingTotalsDto.from_json(json)
# print the JSON string representation of the object
print(ReceivingTotalsDto.to_json())

# convert the object into a dict
receiving_totals_dto_dict = receiving_totals_dto_instance.to_dict()
# create an instance of ReceivingTotalsDto from a dict
receiving_totals_dto_from_dict = ReceivingTotalsDto.from_dict(receiving_totals_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


