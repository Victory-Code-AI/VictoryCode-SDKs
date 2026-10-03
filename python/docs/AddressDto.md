# AddressDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**street** | **str** |  | 
**city** | **str** |  | 
**state** | **str** |  | 
**postal_code** | **str** |  | 
**country** | **str** |  | 

## Example

```python
from victorycode_sdk.models.address_dto import AddressDto

# TODO update the JSON string below
json = "{}"
# create an instance of AddressDto from a JSON string
address_dto_instance = AddressDto.from_json(json)
# print the JSON string representation of the object
print(AddressDto.to_json())

# convert the object into a dict
address_dto_dict = address_dto_instance.to_dict()
# create an instance of AddressDto from a dict
address_dto_from_dict = AddressDto.from_dict(address_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


