# SingleVenueResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**data** | [**Venue**](Venue.md) |  | 

## Example

```python
from victorycode_sdk.models.single_venue_response_dto import SingleVenueResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of SingleVenueResponseDto from a JSON string
single_venue_response_dto_instance = SingleVenueResponseDto.from_json(json)
# print the JSON string representation of the object
print(SingleVenueResponseDto.to_json())

# convert the object into a dict
single_venue_response_dto_dict = single_venue_response_dto_instance.to_dict()
# create an instance of SingleVenueResponseDto from a dict
single_venue_response_dto_from_dict = SingleVenueResponseDto.from_dict(single_venue_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


