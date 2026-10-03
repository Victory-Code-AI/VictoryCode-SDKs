# KickingTotalsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_goals_attempted** | **float** | FG attempts | 
**field_goals_made** | **float** | FG made | 
**field_goal_pct** | **float** | PCT — (made / attempted) × 100 | 
**long_field_goal** | **float** | LONG — longest made field goal in yards | 
**extra_points_attempted** | **float** | XP attempts | 
**extra_points_made** | **float** | XP made | 
**total_points** | **float** | PTS — (FGM×3) + (XPM×1) + (2PC×2) | 

## Example

```python
from victorycode_sdk.models.kicking_totals_dto import KickingTotalsDto

# TODO update the JSON string below
json = "{}"
# create an instance of KickingTotalsDto from a JSON string
kicking_totals_dto_instance = KickingTotalsDto.from_json(json)
# print the JSON string representation of the object
print(KickingTotalsDto.to_json())

# convert the object into a dict
kicking_totals_dto_dict = kicking_totals_dto_instance.to_dict()
# create an instance of KickingTotalsDto from a dict
kicking_totals_dto_from_dict = KickingTotalsDto.from_dict(kicking_totals_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


