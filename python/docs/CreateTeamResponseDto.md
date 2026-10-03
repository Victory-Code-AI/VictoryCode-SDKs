# CreateTeamResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**name** | **str** |  | 
**short_name** | **str** |  | 
**sport** | **str** |  | 
**mascots** | **List[str]** |  | 
**classification** | **str** |  | 
**city** | **str** |  | 
**state** | **str** |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from victorycode_sdk.models.create_team_response_dto import CreateTeamResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTeamResponseDto from a JSON string
create_team_response_dto_instance = CreateTeamResponseDto.from_json(json)
# print the JSON string representation of the object
print(CreateTeamResponseDto.to_json())

# convert the object into a dict
create_team_response_dto_dict = create_team_response_dto_instance.to_dict()
# create an instance of CreateTeamResponseDto from a dict
create_team_response_dto_from_dict = CreateTeamResponseDto.from_dict(create_team_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


