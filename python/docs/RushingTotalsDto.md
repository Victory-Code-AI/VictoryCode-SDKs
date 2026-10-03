# RushingTotalsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carries** | **float** |  | 
**yards** | **float** |  | 
**avg** | **float** |  | 
**touchdowns** | **float** |  | 
**long** | **float** | Longest rush in yards | 

## Example

```python
from victorycode_sdk.models.rushing_totals_dto import RushingTotalsDto

# TODO update the JSON string below
json = "{}"
# create an instance of RushingTotalsDto from a JSON string
rushing_totals_dto_instance = RushingTotalsDto.from_json(json)
# print the JSON string representation of the object
print(RushingTotalsDto.to_json())

# convert the object into a dict
rushing_totals_dto_dict = rushing_totals_dto_instance.to_dict()
# create an instance of RushingTotalsDto from a dict
rushing_totals_dto_from_dict = RushingTotalsDto.from_dict(rushing_totals_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


