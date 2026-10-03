
# GameDetailsResponse


## Properties

Name | Type
------------ | -------------
`gameName` | string
`dateTime` | Date
`gameId` | string
`sourceId` | string
`venue` | string
`homeTeam` | [TeamBasicInfoDto](TeamBasicInfoDto.md)
`awayTeam` | [TeamBasicInfoDto](TeamBasicInfoDto.md)

## Example

```typescript
import type { GameDetailsResponse } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "gameName": Final Game,
  "dateTime": 2026-03-10T10:30Z,
  "gameId": game-id,
  "sourceId": Game#20260310,
  "venue": Revolutionary Field,
  "homeTeam": null,
  "awayTeam": null,
} satisfies GameDetailsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GameDetailsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


