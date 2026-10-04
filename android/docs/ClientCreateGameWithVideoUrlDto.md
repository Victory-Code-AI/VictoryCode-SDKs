
# ClientCreateGameWithVideoUrlDto

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **kotlin.String** |  |  |
| **s3Link** | **kotlin.String** |  |  |
| **homeTeam** | **kotlin.String** | ObjectId of home team |  |
| **awayTeam** | **kotlin.String** | ObjectId of away team |  |
| **venue** | **kotlin.String** | ObjectId of venue |  |
| **sourceGameId** | **kotlin.String** |  |  [optional] |
| **season** | **kotlin.String** | Four-digit year of the game, 1900-2099. Derive it from the game date in the local timezone of the user; spans such as \&quot;2023-24\&quot; are rejected. |  [optional] |
| **week** | [**java.math.BigDecimal**](java.math.BigDecimal.md) |  |  [optional] |
| **competitionLevel** | [**inline**](#CompetitionLevel) |  |  [optional] |
| **gameStatus** | [**inline**](#GameStatus) |  |  [optional] |
| **gameDateTime** | **kotlin.String** |  |  [optional] |
| **uploadId** | **kotlin.String** |  |  [optional] |


<a id="CompetitionLevel"></a>
## Enum: competitionLevel
| Name | Value |
| ---- | ----- |
| competitionLevel | YOUTH, HIGH_SCHOOL, COLLEGE, PROFESSIONAL, AMATEUR |


<a id="GameStatus"></a>
## Enum: gameStatus
| Name | Value |
| ---- | ----- |
| gameStatus | SCHEDULED, DELAYED, IN_PROGRESS, SUSPENDED, FINAL, POSTPONED, CANCELLED |



