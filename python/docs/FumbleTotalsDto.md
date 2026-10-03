# FumbleTotalsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fumbles** | **float** |  | 
**lost** | **float** |  | 
**recovered** | **float** |  | 

## Example

```python
from victorycode_sdk.models.fumble_totals_dto import FumbleTotalsDto

# TODO update the JSON string below
json = "{}"
# create an instance of FumbleTotalsDto from a JSON string
fumble_totals_dto_instance = FumbleTotalsDto.from_json(json)
# print the JSON string representation of the object
print(FumbleTotalsDto.to_json())

# convert the object into a dict
fumble_totals_dto_dict = fumble_totals_dto_instance.to_dict()
# create an instance of FumbleTotalsDto from a dict
fumble_totals_dto_from_dict = FumbleTotalsDto.from_dict(fumble_totals_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


