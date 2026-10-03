
# GameRecapScoringSummaryProResponse


## Properties

Name | Type
------------ | -------------
`gameId` | string
`videoId` | string
`totalScoringPlays` | number
`scoringPlays` | [Array&lt;ProScoringPlayDto&gt;](ProScoringPlayDto.md)

## Example

```typescript
import type { GameRecapScoringSummaryProResponse } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "gameId": null,
  "videoId": null,
  "totalScoringPlays": null,
  "scoringPlays": null,
} satisfies GameRecapScoringSummaryProResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GameRecapScoringSummaryProResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


