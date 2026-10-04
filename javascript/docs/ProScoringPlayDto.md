
# ProScoringPlayDto


## Properties

Name | Type
------------ | -------------
`driveNumber` | number
`drivePlaysCount` | number
`driveYards` | number
`driveTimeOfPossession` | string
`playId` | string
`teamId` | string
`team` | [ScoringSummaryProTeamDto](ScoringSummaryProTeamDto.md)
`period` | number
`gameClock` | string
`scoringType` | string
`scoringMethod` | string
`tryType` | string
`tryMethod` | string
`scoringYardage` | number
`playersInvolved` | [Array&lt;ScoringPlayPlayerInvolvedDto&gt;](ScoringPlayPlayerInvolvedDto.md)
`awayTeamScore` | number
`homeTeamScore` | number
`scoringText` | string

## Example

```typescript
import type { ProScoringPlayDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "driveNumber": null,
  "drivePlaysCount": null,
  "driveYards": null,
  "driveTimeOfPossession": null,
  "playId": null,
  "teamId": null,
  "team": null,
  "period": null,
  "gameClock": null,
  "scoringType": null,
  "scoringMethod": null,
  "tryType": null,
  "tryMethod": null,
  "scoringYardage": null,
  "playersInvolved": null,
  "awayTeamScore": null,
  "homeTeamScore": null,
  "scoringText": null,
} satisfies ProScoringPlayDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProScoringPlayDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


