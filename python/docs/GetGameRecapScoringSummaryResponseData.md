# GetGameRecapScoringSummaryResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**game_id** | **str** |  | [optional] 
**total** | **int** |  | [optional] 
**data** | **List[List[GetGameRecapScoringSummaryResponseDataDataInnerInner]]** |  | [optional] 

## Example

```python
from victorycode_sdk.models.get_game_recap_scoring_summary_response_data import GetGameRecapScoringSummaryResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetGameRecapScoringSummaryResponseData from a JSON string
get_game_recap_scoring_summary_response_data_instance = GetGameRecapScoringSummaryResponseData.from_json(json)
# print the JSON string representation of the object
print(GetGameRecapScoringSummaryResponseData.to_json())

# convert the object into a dict
get_game_recap_scoring_summary_response_data_dict = get_game_recap_scoring_summary_response_data_instance.to_dict()
# create an instance of GetGameRecapScoringSummaryResponseData from a dict
get_game_recap_scoring_summary_response_data_from_dict = GetGameRecapScoringSummaryResponseData.from_dict(get_game_recap_scoring_summary_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


