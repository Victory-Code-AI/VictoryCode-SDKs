# GetGameRecapScoringSummaryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 
**data** | [**GetGameRecapScoringSummaryResponseData**](GetGameRecapScoringSummaryResponseData.md) |  | [optional] 

## Example

```python
from victorycode_sdk.models.get_game_recap_scoring_summary_response import GetGameRecapScoringSummaryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetGameRecapScoringSummaryResponse from a JSON string
get_game_recap_scoring_summary_response_instance = GetGameRecapScoringSummaryResponse.from_json(json)
# print the JSON string representation of the object
print(GetGameRecapScoringSummaryResponse.to_json())

# convert the object into a dict
get_game_recap_scoring_summary_response_dict = get_game_recap_scoring_summary_response_instance.to_dict()
# create an instance of GetGameRecapScoringSummaryResponse from a dict
get_game_recap_scoring_summary_response_from_dict = GetGameRecapScoringSummaryResponse.from_dict(get_game_recap_scoring_summary_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


