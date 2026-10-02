# UpdateClassificationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 
**data** | [**ListClassificationsResponseDataInner**](ListClassificationsResponseDataInner.md) |  | [optional] 

## Example

```python
from victorycode_sdk.models.update_classification_response import UpdateClassificationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateClassificationResponse from a JSON string
update_classification_response_instance = UpdateClassificationResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateClassificationResponse.to_json())

# convert the object into a dict
update_classification_response_dict = update_classification_response_instance.to_dict()
# create an instance of UpdateClassificationResponse from a dict
update_classification_response_from_dict = UpdateClassificationResponse.from_dict(update_classification_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


