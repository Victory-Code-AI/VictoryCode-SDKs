# DefenseTotalsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_tackles** | **float** | TOT — solo + assisted tackles combined | 
**solo_tackles** | **float** | SOLO tackles | 
**sacks** | **float** | SACKS — may be fractional (0.5 for shared sack) | 
**tackles_for_loss** | **float** | TFL — tackles for loss | 
**passes_defended** | **float** | PD — passes defended | 
**qb_hits** | **float** | QB HTS — quarterback hits | 
**defensive_touchdowns** | **float** | TD — defensive touchdowns (pick-six, fumble return) | 

## Example

```python
from victorycode_sdk.models.defense_totals_dto import DefenseTotalsDto

# TODO update the JSON string below
json = "{}"
# create an instance of DefenseTotalsDto from a JSON string
defense_totals_dto_instance = DefenseTotalsDto.from_json(json)
# print the JSON string representation of the object
print(DefenseTotalsDto.to_json())

# convert the object into a dict
defense_totals_dto_dict = defense_totals_dto_instance.to_dict()
# create an instance of DefenseTotalsDto from a dict
defense_totals_dto_from_dict = DefenseTotalsDto.from_dict(defense_totals_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


