

# ClientCreateGameWithVideoUrlDto


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**name** | **String** |  |  |
|**sourceGameId** | **String** |  |  [optional] |
|**s3Link** | **String** |  |  |
|**homeTeam** | **String** | ObjectId of home team |  |
|**awayTeam** | **String** | ObjectId of away team |  |
|**venue** | **String** | ObjectId of venue |  |
|**season** | **String** | Four-digit year of the game, 1900-2099. Derive it from the game date in the local timezone of the user; spans such as \&quot;2023-24\&quot; are rejected. |  [optional] |
|**week** | **BigDecimal** |  |  [optional] |
|**competitionLevel** | [**CompetitionLevelEnum**](#CompetitionLevelEnum) |  |  [optional] |
|**gameStatus** | [**GameStatusEnum**](#GameStatusEnum) |  |  [optional] |
|**gameDateTime** | **String** |  |  [optional] |
|**uploadId** | **String** |  |  [optional] |



## Enum: CompetitionLevelEnum

| Name | Value |
|---- | -----|
| YOUTH | &quot;YOUTH&quot; |
| HIGH_SCHOOL | &quot;HIGH_SCHOOL&quot; |
| COLLEGE | &quot;COLLEGE&quot; |
| PROFESSIONAL | &quot;PROFESSIONAL&quot; |
| AMATEUR | &quot;AMATEUR&quot; |



## Enum: GameStatusEnum

| Name | Value |
|---- | -----|
| SCHEDULED | &quot;SCHEDULED&quot; |
| DELAYED | &quot;DELAYED&quot; |
| IN_PROGRESS | &quot;IN_PROGRESS&quot; |
| SUSPENDED | &quot;SUSPENDED&quot; |
| FINAL | &quot;FINAL&quot; |
| POSTPONED | &quot;POSTPONED&quot; |
| CANCELLED | &quot;CANCELLED&quot; |



