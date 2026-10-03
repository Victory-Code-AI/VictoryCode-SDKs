# LineOfScrimmageDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**side_of_field** | **str** |  | 
**yard_line** | **float** |  | 

## Example

```python
from victorycode_sdk.models.line_of_scrimmage_dto import LineOfScrimmageDto

# TODO update the JSON string below
json = "{}"
# create an instance of LineOfScrimmageDto from a JSON string
line_of_scrimmage_dto_instance = LineOfScrimmageDto.from_json(json)
# print the JSON string representation of the object
print(LineOfScrimmageDto.to_json())

# convert the object into a dict
line_of_scrimmage_dto_dict = line_of_scrimmage_dto_instance.to_dict()
# create an instance of LineOfScrimmageDto from a dict
line_of_scrimmage_dto_from_dict = LineOfScrimmageDto.from_dict(line_of_scrimmage_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


