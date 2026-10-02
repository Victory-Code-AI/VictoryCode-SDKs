# CreateTeamResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**short_name** | **str** |  | [optional] 
**sport** | **str** |  | [optional] 
**coach** | **object** |  | [optional] 
**team_logo** | **str** |  | [optional] 
**mascots** | **List[str]** |  | [optional] 
**classification** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**v** | **int** |  | [optional] 

## Example

```python
from victorycode_sdk.models.create_team_response_data import CreateTeamResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTeamResponseData from a JSON string
create_team_response_data_instance = CreateTeamResponseData.from_json(json)
# print the JSON string representation of the object
print(CreateTeamResponseData.to_json())

# convert the object into a dict
create_team_response_data_dict = create_team_response_data_instance.to_dict()
# create an instance of CreateTeamResponseData from a dict
create_team_response_data_from_dict = CreateTeamResponseData.from_dict(create_team_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


