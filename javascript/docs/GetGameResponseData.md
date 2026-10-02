
# GetGameResponseData


## Properties

Name | Type
------------ | -------------
`gameName` | string
`dateTime` | Date
`gameId` | string
`location` | string
`venue` | string
`homeTeam` | [GetGameResponseDataHomeTeam](GetGameResponseDataHomeTeam.md)
`awayTeam` | [GetGameResponseDataHomeTeam](GetGameResponseDataHomeTeam.md)

## Example

```typescript
import type { GetGameResponseData } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "gameName": null,
  "dateTime": null,
  "gameId": null,
  "location": null,
  "venue": null,
  "homeTeam": null,
  "awayTeam": null,
} satisfies GetGameResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGameResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


