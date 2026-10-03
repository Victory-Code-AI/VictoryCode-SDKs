# PassingTotalsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completions** | **float** |  | 
**attempts** | **float** |  | 
**yards** | **float** |  | 
**avg** | **float** |  | 
**touchdowns** | **float** |  | 
**interceptions** | **float** |  | 
**sacks** | **float** |  | 
**sack_yards_lost** | **float** |  | 
**qbr** | **float** | ESPN QBR — null when not supplied | [optional] 
**passer_rating** | **float** | NFL passer rating | [optional] 

## Example

```python
from victorycode_sdk.models.passing_totals_dto import PassingTotalsDto

# TODO update the JSON string below
json = "{}"
# create an instance of PassingTotalsDto from a JSON string
passing_totals_dto_instance = PassingTotalsDto.from_json(json)
# print the JSON string representation of the object
print(PassingTotalsDto.to_json())

# convert the object into a dict
passing_totals_dto_dict = passing_totals_dto_instance.to_dict()
# create an instance of PassingTotalsDto from a dict
passing_totals_dto_from_dict = PassingTotalsDto.from_dict(passing_totals_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


