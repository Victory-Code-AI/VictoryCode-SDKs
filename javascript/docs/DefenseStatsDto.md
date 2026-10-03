
# DefenseStatsDto


## Properties

Name | Type
------------ | -------------
`playerName` | string
`jerseyNumber` | number
`playerId` | string
`totalTackles` | number
`soloTackles` | number
`sacks` | number
`tacklesForLoss` | number
`passesDefended` | number
`qbHits` | number
`defensiveTouchdowns` | number

## Example

```typescript
import type { DefenseStatsDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "playerName": Quay Walker,
  "jerseyNumber": 7,
  "playerId": lb7,
  "totalTackles": 8,
  "soloTackles": 4,
  "sacks": 0.5,
  "tacklesForLoss": 0,
  "passesDefended": 0,
  "qbHits": 1,
  "defensiveTouchdowns": 0,
} satisfies DefenseStatsDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DefenseStatsDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


