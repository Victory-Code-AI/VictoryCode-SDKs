# ClientCreateGameWithVideoUrlDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | 
**sourceGameId** | **String** |  | [optional] 
**s3Link** | **String** |  | 
**homeTeam** | **String** | ObjectId of home team | 
**awayTeam** | **String** | ObjectId of away team | 
**venue** | **String** | ObjectId of venue | 
**season** | **String** | Four-digit year of the game, 1900-2099. Derive it from the game date in the local timezone of the user; spans such as \&quot;2023-24\&quot; are rejected. | [optional] 
**week** | **Double** |  | [optional] 
**competitionLevel** | **String** |  | [optional] 
**gameStatus** | **String** |  | [optional] 
**gameDateTime** | **String** |  | [optional] 
**uploadId** | **String** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


