# CreateTeamDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**short_name** | **str** |  | 
**city** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**mascots** | **List[str]** | Array of Mascot IDs (must not be empty) | 
**classification** | **str** | Classification ID | 

## Example

```python
from victorycode_sdk.models.create_team_dto import CreateTeamDto

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTeamDto from a JSON string
create_team_dto_instance = CreateTeamDto.from_json(json)
# print the JSON string representation of the object
print(CreateTeamDto.to_json())

# convert the object into a dict
create_team_dto_dict = create_team_dto_instance.to_dict()
# create an instance of CreateTeamDto from a dict
create_team_dto_from_dict = CreateTeamDto.from_dict(create_team_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


