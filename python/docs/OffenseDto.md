# OffenseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_plays** | **float** |  | 
**total_yards** | **float** |  | 
**yards_per_play** | **float** |  | 

## Example

```python
from victorycode_sdk.models.offense_dto import OffenseDto

# TODO update the JSON string below
json = "{}"
# create an instance of OffenseDto from a JSON string
offense_dto_instance = OffenseDto.from_json(json)
# print the JSON string representation of the object
print(OffenseDto.to_json())

# convert the object into a dict
offense_dto_dict = offense_dto_instance.to_dict()
# create an instance of OffenseDto from a dict
offense_dto_from_dict = OffenseDto.from_dict(offense_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


