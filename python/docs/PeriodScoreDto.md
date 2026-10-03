# PeriodScoreDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**period** | **float** |  | 
**type** | **str** |  | 
**name** | **str** |  | 
**score** | **float** |  | 

## Example

```python
from victorycode_sdk.models.period_score_dto import PeriodScoreDto

# TODO update the JSON string below
json = "{}"
# create an instance of PeriodScoreDto from a JSON string
period_score_dto_instance = PeriodScoreDto.from_json(json)
# print the JSON string representation of the object
print(PeriodScoreDto.to_json())

# convert the object into a dict
period_score_dto_dict = period_score_dto_instance.to_dict()
# create an instance of PeriodScoreDto from a dict
period_score_dto_from_dict = PeriodScoreDto.from_dict(period_score_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


