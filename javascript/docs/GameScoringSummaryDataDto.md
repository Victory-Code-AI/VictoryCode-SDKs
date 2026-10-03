
# GameScoringSummaryDataDto


## Properties

Name | Type
------------ | -------------
`playId` | string
`period` | string
`timeRemaining` | string
`scoringTeamId` | string
`scoreType` | string
`scoreMethod` | string
`scoreYardage` | number
`homeScore` | number
`awayScore` | number

## Example

```typescript
import type { GameScoringSummaryDataDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "playId": null,
  "period": null,
  "timeRemaining": null,
  "scoringTeamId": null,
  "scoreType": null,
  "scoreMethod": null,
  "scoreYardage": null,
  "homeScore": null,
  "awayScore": null,
} satisfies GameScoringSummaryDataDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GameScoringSummaryDataDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


