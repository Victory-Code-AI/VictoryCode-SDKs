

# ProScoringPlayDto


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**driveNumber** | **BigDecimal** |  |  |
|**drivePlaysCount** | **BigDecimal** |  |  |
|**driveYards** | **BigDecimal** |  |  |
|**driveTimeOfPossession** | **String** |  |  |
|**playId** | **String** |  |  |
|**teamId** | **String** |  |  |
|**team** | [**ScoringSummaryProTeamDto**](ScoringSummaryProTeamDto.md) |  |  |
|**period** | **BigDecimal** |  |  |
|**gameClock** | **String** |  |  |
|**scoringType** | [**ScoringTypeEnum**](#ScoringTypeEnum) |  |  |
|**scoringMethod** | [**ScoringMethodEnum**](#ScoringMethodEnum) |  |  |
|**tryType** | [**TryTypeEnum**](#TryTypeEnum) |  |  |
|**tryMethod** | [**TryMethodEnum**](#TryMethodEnum) |  |  |
|**scoringYardage** | **BigDecimal** |  |  |
|**playersInvolved** | [**List&lt;ScoringPlayPlayerInvolvedDto&gt;**](ScoringPlayPlayerInvolvedDto.md) |  |  |
|**awayTeamScore** | **BigDecimal** |  |  |
|**homeTeamScore** | **BigDecimal** |  |  |
|**scoringText** | **String** |  |  |



## Enum: ScoringTypeEnum

| Name | Value |
|---- | -----|
| TOUCHDOWN | &quot;TOUCHDOWN&quot; |
| FIELD_GOAL | &quot;FIELD_GOAL&quot; |
| SAFETY | &quot;SAFETY&quot; |



## Enum: ScoringMethodEnum

| Name | Value |
|---- | -----|
| RUN | &quot;RUN&quot; |
| PASS | &quot;PASS&quot; |
| FIELD_GOAL | &quot;FIELD_GOAL&quot; |
| KICKOFF | &quot;KICKOFF&quot; |
| PUNT | &quot;PUNT&quot; |
| EXTRA_POINT | &quot;EXTRA_POINT&quot; |
| TWO_POINT_CONVERSION | &quot;TWO_POINT_CONVERSION&quot; |
| NO_PLAY | &quot;NO_PLAY&quot; |
| UNIDENTIFIABLE | &quot;UNIDENTIFIABLE&quot; |



## Enum: TryTypeEnum

| Name | Value |
|---- | -----|
| EXTRA_POINT | &quot;EXTRA_POINT&quot; |
| TWO_POINT_CONVERSION | &quot;TWO_POINT_CONVERSION&quot; |



## Enum: TryMethodEnum

| Name | Value |
|---- | -----|
| RUN | &quot;RUN&quot; |
| PASS | &quot;PASS&quot; |
| FIELD_GOAL | &quot;FIELD_GOAL&quot; |
| KICKOFF | &quot;KICKOFF&quot; |
| PUNT | &quot;PUNT&quot; |
| EXTRA_POINT | &quot;EXTRA_POINT&quot; |
| TWO_POINT_CONVERSION | &quot;TWO_POINT_CONVERSION&quot; |
| NO_PLAY | &quot;NO_PLAY&quot; |
| UNIDENTIFIABLE | &quot;UNIDENTIFIABLE&quot; |



