
# GetGameRecapScoreResponseDataHomeTeam


## Properties

Name | Type
------------ | -------------
`teamId` | string
`sourceId` | string
`name` | string
`shortName` | string
`mascot` | string
`classification` | string
`totalScore` | number
`periodScores` | [Array&lt;GetGameRecapScoreResponseDataHomeTeamPeriodScoresInner&gt;](GetGameRecapScoreResponseDataHomeTeamPeriodScoresInner.md)

## Example

```typescript
import type { GetGameRecapScoreResponseDataHomeTeam } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "teamId": null,
  "sourceId": null,
  "name": null,
  "shortName": null,
  "mascot": null,
  "classification": null,
  "totalScore": null,
  "periodScores": null,
} satisfies GetGameRecapScoreResponseDataHomeTeam

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGameRecapScoreResponseDataHomeTeam
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


