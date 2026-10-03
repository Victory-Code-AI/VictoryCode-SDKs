# FetchTeamResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**name** | **str** |  | 
**short_name** | **str** |  | 
**sport** | **str** |  | 
**city** | **str** |  | 
**state** | **str** |  | 
**mascots** | [**Mascot**](Mascot.md) |  | 
**classification** | [**List[Classification]**](Classification.md) |  | 
**created_at** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from victorycode_sdk.models.fetch_team_response_dto import FetchTeamResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of FetchTeamResponseDto from a JSON string
fetch_team_response_dto_instance = FetchTeamResponseDto.from_json(json)
# print the JSON string representation of the object
print(FetchTeamResponseDto.to_json())

# convert the object into a dict
fetch_team_response_dto_dict = fetch_team_response_dto_instance.to_dict()
# create an instance of FetchTeamResponseDto from a dict
fetch_team_response_dto_from_dict = FetchTeamResponseDto.from_dict(fetch_team_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


