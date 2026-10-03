# InterceptionStatsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**player_name** | **str** |  | 
**jersey_number** | **float** |  | 
**player_id** | **str** |  | 
**interceptions** | **float** | INT — number of interceptions | 
**yards** | **float** | YDS — return yards after interception | 
**touchdowns** | **float** | TD — pick-six touchdowns | 

## Example

```python
from victorycode_sdk.models.interception_stats_dto import InterceptionStatsDto

# TODO update the JSON string below
json = "{}"
# create an instance of InterceptionStatsDto from a JSON string
interception_stats_dto_instance = InterceptionStatsDto.from_json(json)
# print the JSON string representation of the object
print(InterceptionStatsDto.to_json())

# convert the object into a dict
interception_stats_dto_dict = interception_stats_dto_instance.to_dict()
# create an instance of InterceptionStatsDto from a dict
interception_stats_dto_from_dict = InterceptionStatsDto.from_dict(interception_stats_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


