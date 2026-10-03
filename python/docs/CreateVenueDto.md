# CreateVenueDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**playing_surface** | **str** |  | 
**address** | [**AddressDto**](AddressDto.md) |  | 
**coordinates** | [**CoordinatesDto**](CoordinatesDto.md) |  | [optional] 

## Example

```python
from victorycode_sdk.models.create_venue_dto import CreateVenueDto

# TODO update the JSON string below
json = "{}"
# create an instance of CreateVenueDto from a JSON string
create_venue_dto_instance = CreateVenueDto.from_json(json)
# print the JSON string representation of the object
print(CreateVenueDto.to_json())

# convert the object into a dict
create_venue_dto_dict = create_venue_dto_instance.to_dict()
# create an instance of CreateVenueDto from a dict
create_venue_dto_from_dict = CreateVenueDto.from_dict(create_venue_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


