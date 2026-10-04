# SingleTeamResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**data** | [**CreateTeamResponseDto**](CreateTeamResponseDto.md) |  | 

## Example

```python
from victorycode_sdk.models.single_team_response_dto import SingleTeamResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of SingleTeamResponseDto from a JSON string
single_team_response_dto_instance = SingleTeamResponseDto.from_json(json)
# print the JSON string representation of the object
print(SingleTeamResponseDto.to_json())

# convert the object into a dict
single_team_response_dto_dict = single_team_response_dto_instance.to_dict()
# create an instance of SingleTeamResponseDto from a dict
single_team_response_dto_from_dict = SingleTeamResponseDto.from_dict(single_team_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


