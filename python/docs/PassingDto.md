# PassingDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_yards** | **float** |  | 
**completions** | **float** |  | 
**attempts** | **float** |  | 
**yards_per_pass** | **float** |  | 
**interceptions** | **float** |  | 
**sacks** | **float** |  | 

## Example

```python
from victorycode_sdk.models.passing_dto import PassingDto

# TODO update the JSON string below
json = "{}"
# create an instance of PassingDto from a JSON string
passing_dto_instance = PassingDto.from_json(json)
# print the JSON string representation of the object
print(PassingDto.to_json())

# convert the object into a dict
passing_dto_dict = passing_dto_instance.to_dict()
# create an instance of PassingDto from a dict
passing_dto_from_dict = PassingDto.from_dict(passing_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


