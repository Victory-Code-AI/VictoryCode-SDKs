# ClientCreateGameWithVideoUrlDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**source_game_id** | **str** |  | [optional] 
**s3_link** | **str** |  | 
**home_team** | **str** | ObjectId of home team | 
**away_team** | **str** | ObjectId of away team | 
**venue** | **str** | ObjectId of venue | 
**season** | **str** | Four-digit year of the game, 1900-2099. Derive it from the game date in the local timezone of the user; spans such as \&quot;2023-24\&quot; are rejected. | [optional] 
**week** | **float** |  | [optional] 
**competition_level** | **str** |  | [optional] 
**game_status** | **str** |  | [optional] 
**game_date_time** | **str** |  | [optional] 
**upload_id** | **str** |  | [optional] 

## Example

```python
from victorycode_sdk.models.client_create_game_with_video_url_dto import ClientCreateGameWithVideoUrlDto

# TODO update the JSON string below
json = "{}"
# create an instance of ClientCreateGameWithVideoUrlDto from a JSON string
client_create_game_with_video_url_dto_instance = ClientCreateGameWithVideoUrlDto.from_json(json)
# print the JSON string representation of the object
print(ClientCreateGameWithVideoUrlDto.to_json())

# convert the object into a dict
client_create_game_with_video_url_dto_dict = client_create_game_with_video_url_dto_instance.to_dict()
# create an instance of ClientCreateGameWithVideoUrlDto from a dict
client_create_game_with_video_url_dto_from_dict = ClientCreateGameWithVideoUrlDto.from_dict(client_create_game_with_video_url_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


