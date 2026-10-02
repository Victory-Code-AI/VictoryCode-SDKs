
# GetGameRecapTeamStatsResponseData


## Properties

Name | Type
------------ | -------------
`gameId` | string
`homeTeam` | [GetGameRecapTeamStatsResponseDataHomeTeam](GetGameRecapTeamStatsResponseDataHomeTeam.md)
`awayTeam` | [GetGameRecapTeamStatsResponseDataHomeTeam](GetGameRecapTeamStatsResponseDataHomeTeam.md)

## Example

```typescript
import type { GetGameRecapTeamStatsResponseData } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "gameId": null,
  "homeTeam": null,
  "awayTeam": null,
} satisfies GetGameRecapTeamStatsResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGameRecapTeamStatsResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


