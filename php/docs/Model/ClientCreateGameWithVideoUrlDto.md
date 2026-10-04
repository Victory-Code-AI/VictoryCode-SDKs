# ClientCreateGameWithVideoUrlDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  |
**source_game_id** | **string** |  | [optional]
**s3_link** | **string** |  |
**home_team** | **string** | ObjectId of home team |
**away_team** | **string** | ObjectId of away team |
**venue** | **string** | ObjectId of venue |
**season** | **string** | Four-digit year of the game, 1900-2099. Derive it from the game date in the local timezone of the user; spans such as \&quot;2023-24\&quot; are rejected. | [optional]
**week** | **float** |  | [optional]
**competition_level** | **string** |  | [optional]
**game_status** | **string** |  | [optional]
**game_date_time** | **string** |  | [optional]
**upload_id** | **string** |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
