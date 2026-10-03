# ReceivingStatsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**player_name** | **str** |  | 
**jersey_number** | **float** |  | 
**player_id** | **str** |  | 
**receptions** | **float** |  | 
**yards** | **float** |  | 
**avg** | **float** |  | 
**touchdowns** | **float** |  | 
**long** | **float** | Longest reception in yards | 
**targets** | **float** |  | 

## Example

```python
from victorycode_sdk.models.receiving_stats_dto import ReceivingStatsDto

# TODO update the JSON string below
json = "{}"
# create an instance of ReceivingStatsDto from a JSON string
receiving_stats_dto_instance = ReceivingStatsDto.from_json(json)
# print the JSON string representation of the object
print(ReceivingStatsDto.to_json())

# convert the object into a dict
receiving_stats_dto_dict = receiving_stats_dto_instance.to_dict()
# create an instance of ReceivingStatsDto from a dict
receiving_stats_dto_from_dict = ReceivingStatsDto.from_dict(receiving_stats_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


