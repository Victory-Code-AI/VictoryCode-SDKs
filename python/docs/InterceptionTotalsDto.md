# InterceptionTotalsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interceptions** | **float** | INT — number of interceptions | 
**yards** | **float** | YDS — return yards after interception | 
**touchdowns** | **float** | TD — pick-six touchdowns | 

## Example

```python
from victorycode_sdk.models.interception_totals_dto import InterceptionTotalsDto

# TODO update the JSON string below
json = "{}"
# create an instance of InterceptionTotalsDto from a JSON string
interception_totals_dto_instance = InterceptionTotalsDto.from_json(json)
# print the JSON string representation of the object
print(InterceptionTotalsDto.to_json())

# convert the object into a dict
interception_totals_dto_dict = interception_totals_dto_instance.to_dict()
# create an instance of InterceptionTotalsDto from a dict
interception_totals_dto_from_dict = InterceptionTotalsDto.from_dict(interception_totals_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


