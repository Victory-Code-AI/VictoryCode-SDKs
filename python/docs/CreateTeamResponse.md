# CreateTeamResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 
**data** | [**CreateTeamResponseData**](CreateTeamResponseData.md) |  | [optional] 

## Example

```python
from victorycode_sdk.models.create_team_response import CreateTeamResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTeamResponse from a JSON string
create_team_response_instance = CreateTeamResponse.from_json(json)
# print the JSON string representation of the object
print(CreateTeamResponse.to_json())

# convert the object into a dict
create_team_response_dict = create_team_response_instance.to_dict()
# create an instance of CreateTeamResponse from a dict
create_team_response_from_dict = CreateTeamResponse.from_dict(create_team_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


