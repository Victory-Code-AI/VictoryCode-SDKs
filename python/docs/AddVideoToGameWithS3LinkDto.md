# AddVideoToGameWithS3LinkDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**view_type** | **str** |  | 
**s3_link** | **str** |  | 

## Example

```python
from victorycode_sdk.models.add_video_to_game_with_s3_link_dto import AddVideoToGameWithS3LinkDto

# TODO update the JSON string below
json = "{}"
# create an instance of AddVideoToGameWithS3LinkDto from a JSON string
add_video_to_game_with_s3_link_dto_instance = AddVideoToGameWithS3LinkDto.from_json(json)
# print the JSON string representation of the object
print(AddVideoToGameWithS3LinkDto.to_json())

# convert the object into a dict
add_video_to_game_with_s3_link_dto_dict = add_video_to_game_with_s3_link_dto_instance.to_dict()
# create an instance of AddVideoToGameWithS3LinkDto from a dict
add_video_to_game_with_s3_link_dto_from_dict = AddVideoToGameWithS3LinkDto.from_dict(add_video_to_game_with_s3_link_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


