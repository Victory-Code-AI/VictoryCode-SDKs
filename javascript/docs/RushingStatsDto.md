
# RushingStatsDto


## Properties

Name | Type
------------ | -------------
`playerName` | string
`jerseyNumber` | number
`playerId` | string
`carries` | number
`yards` | number
`avg` | number
`touchdowns` | number
`_long` | number

## Example

```typescript
import type { RushingStatsDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "playerName": Saquon Barkley,
  "jerseyNumber": 26,
  "playerId": rb26,
  "carries": 25,
  "yards": 119,
  "avg": 4.8,
  "touchdowns": 0,
  "_long": 17,
} satisfies RushingStatsDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RushingStatsDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


