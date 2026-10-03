
# ListGamesResponseDataGamesInner


## Properties

Name | Type
------------ | -------------
`gameName` | string
`dateTime` | Date
`gameId` | string
`homeTeam` | [ListGamesResponseDataGamesInnerHomeTeam](ListGamesResponseDataGamesInnerHomeTeam.md)
`awayTeam` | [ListGamesResponseDataGamesInnerHomeTeam](ListGamesResponseDataGamesInnerHomeTeam.md)
`location` | string
`venue` | string

## Example

```typescript
import type { ListGamesResponseDataGamesInner } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "gameName": null,
  "dateTime": null,
  "gameId": null,
  "homeTeam": null,
  "awayTeam": null,
  "location": null,
  "venue": null,
} satisfies ListGamesResponseDataGamesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListGamesResponseDataGamesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


