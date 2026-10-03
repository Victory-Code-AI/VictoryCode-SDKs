# CreateMascotResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 
**data** | [**CreateMascotResponseData**](CreateMascotResponseData.md) |  | [optional] 

## Example

```python
from victorycode_sdk.models.create_mascot_response import CreateMascotResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateMascotResponse from a JSON string
create_mascot_response_instance = CreateMascotResponse.from_json(json)
# print the JSON string representation of the object
print(CreateMascotResponse.to_json())

# convert the object into a dict
create_mascot_response_dict = create_mascot_response_instance.to_dict()
# create an instance of CreateMascotResponse from a dict
create_mascot_response_from_dict = CreateMascotResponse.from_dict(create_mascot_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


