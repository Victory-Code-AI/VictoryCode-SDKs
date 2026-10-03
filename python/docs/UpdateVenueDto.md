# UpdateVenueDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**playing_surface** | **str** |  | [optional] 
**address** | [**AddressDto**](AddressDto.md) |  | [optional] 
**coordinates** | [**CoordinatesDto**](CoordinatesDto.md) |  | [optional] 

## Example

```python
from victorycode_sdk.models.update_venue_dto import UpdateVenueDto

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateVenueDto from a JSON string
update_venue_dto_instance = UpdateVenueDto.from_json(json)
# print the JSON string representation of the object
print(UpdateVenueDto.to_json())

# convert the object into a dict
update_venue_dto_dict = update_venue_dto_instance.to_dict()
# create an instance of UpdateVenueDto from a dict
update_venue_dto_from_dict = UpdateVenueDto.from_dict(update_venue_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


