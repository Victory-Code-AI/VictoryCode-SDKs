# TeamBasicInfoDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**team_id** | **str** |  | 
**name** | **str** |  | 
**short_name** | **str** |  | 
**mascot** | **str** |  | 
**classification** | **str** |  | 

## Example

```python
from victorycode_sdk.models.team_basic_info_dto import TeamBasicInfoDto

# TODO update the JSON string below
json = "{}"
# create an instance of TeamBasicInfoDto from a JSON string
team_basic_info_dto_instance = TeamBasicInfoDto.from_json(json)
# print the JSON string representation of the object
print(TeamBasicInfoDto.to_json())

# convert the object into a dict
team_basic_info_dto_dict = team_basic_info_dto_instance.to_dict()
# create an instance of TeamBasicInfoDto from a dict
team_basic_info_dto_from_dict = TeamBasicInfoDto.from_dict(team_basic_info_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


