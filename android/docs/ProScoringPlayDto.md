
# ProScoringPlayDto

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **driveNumber** | [**java.math.BigDecimal**](java.math.BigDecimal.md) |  |  |
| **drivePlaysCount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) |  |  |
| **driveYards** | [**java.math.BigDecimal**](java.math.BigDecimal.md) |  |  |
| **driveTimeOfPossession** | **kotlin.String** |  |  |
| **playId** | **kotlin.String** |  |  |
| **teamId** | **kotlin.String** |  |  |
| **team** | [**ScoringSummaryProTeamDto**](ScoringSummaryProTeamDto.md) |  |  |
| **period** | [**java.math.BigDecimal**](java.math.BigDecimal.md) |  |  |
| **gameClock** | **kotlin.String** |  |  |
| **scoringType** | [**inline**](#ScoringType) |  |  |
| **scoringMethod** | [**inline**](#ScoringMethod) |  |  |
| **tryType** | [**inline**](#TryType) |  |  |
| **tryMethod** | [**inline**](#TryMethod) |  |  |
| **scoringYardage** | [**java.math.BigDecimal**](java.math.BigDecimal.md) |  |  |
| **playersInvolved** | [**kotlin.collections.List&lt;ScoringPlayPlayerInvolvedDto&gt;**](ScoringPlayPlayerInvolvedDto.md) |  |  |
| **awayTeamScore** | [**java.math.BigDecimal**](java.math.BigDecimal.md) |  |  |
| **homeTeamScore** | [**java.math.BigDecimal**](java.math.BigDecimal.md) |  |  |
| **scoringText** | **kotlin.String** |  |  |


<a id="ScoringType"></a>
## Enum: scoringType
| Name | Value |
| ---- | ----- |
| scoringType | TOUCHDOWN, FIELD_GOAL, SAFETY |


<a id="ScoringMethod"></a>
## Enum: scoringMethod
| Name | Value |
| ---- | ----- |
| scoringMethod | RUN, PASS, FIELD_GOAL, KICKOFF, PUNT, EXTRA_POINT, TWO_POINT_CONVERSION, NO_PLAY, UNIDENTIFIABLE |


<a id="TryType"></a>
## Enum: tryType
| Name | Value |
| ---- | ----- |
| tryType | EXTRA_POINT, TWO_POINT_CONVERSION |


<a id="TryMethod"></a>
## Enum: tryMethod
| Name | Value |
| ---- | ----- |
| tryMethod | RUN, PASS, FIELD_GOAL, KICKOFF, PUNT, EXTRA_POINT, TWO_POINT_CONVERSION, NO_PLAY, UNIDENTIFIABLE |



