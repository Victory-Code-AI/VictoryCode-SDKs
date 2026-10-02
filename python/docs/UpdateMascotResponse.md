# UpdateMascotResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 
**data** | [**ListMascotsResponseDataInner**](ListMascotsResponseDataInner.md) |  | [optional] 

## Example

```python
from victorycode_sdk.models.update_mascot_response import UpdateMascotResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMascotResponse from a JSON string
update_mascot_response_instance = UpdateMascotResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateMascotResponse.to_json())

# convert the object into a dict
update_mascot_response_dict = update_mascot_response_instance.to_dict()
# create an instance of UpdateMascotResponse from a dict
update_mascot_response_from_dict = UpdateMascotResponse.from_dict(update_mascot_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


