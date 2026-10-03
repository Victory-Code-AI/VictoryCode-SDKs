
# GameBoxScoreMetaDto


## Properties

Name | Type
------------ | -------------
`gameId` | string
`gameTitle` | string
`videoId` | string
`viewType` | string
`homeTeam` | string
`awayTeam` | string
`homeScore` | number
`awayScore` | number
`generatedAt` | string

## Example

```typescript
import type { GameBoxScoreMetaDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "gameId": 69e726ec40948bc7f421f3ba,
  "gameTitle": Green Bay Packers vs Philadelphia Eagles,
  "videoId": 69e726ec40948bc7f421f3ba,
  "viewType": All-22 Sideline,
  "homeTeam": Green Bay Packers,
  "awayTeam": Philadelphia Eagles,
  "homeScore": 20,
  "awayScore": 34,
  "generatedAt": 2025-07-14T10:30:00.000Z,
} satisfies GameBoxScoreMetaDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GameBoxScoreMetaDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


