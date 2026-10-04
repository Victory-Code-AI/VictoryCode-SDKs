# UpdateTeamDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**short_name** | **str** |  | [optional] 
**city** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**mascots** | **List[str]** | Array of Mascot IDs (must not be empty) | [optional] 
**classification** | **str** | Classification ID | [optional] 

## Example

```python
from victorycode_sdk.models.update_team_dto import UpdateTeamDto

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTeamDto from a JSON string
update_team_dto_instance = UpdateTeamDto.from_json(json)
# print the JSON string representation of the object
print(UpdateTeamDto.to_json())

# convert the object into a dict
update_team_dto_dict = update_team_dto_instance.to_dict()
# create an instance of UpdateTeamDto from a dict
update_team_dto_from_dict = UpdateTeamDto.from_dict(update_team_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


