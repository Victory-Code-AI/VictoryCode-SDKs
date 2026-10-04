
# ReceivingStatsDto


## Properties

Name | Type
------------ | -------------
`playerName` | string
`jerseyNumber` | number
`playerId` | string
`receptions` | number
`yards` | number
`avg` | number
`touchdowns` | number
`_long` | number
`targets` | number

## Example

```typescript
import type { ReceivingStatsDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "playerName": DeVonta Smith,
  "jerseyNumber": 6,
  "playerId": wr6,
  "receptions": 4,
  "yards": 55,
  "avg": 13.8,
  "touchdowns": 0,
  "_long": 28,
  "targets": 4,
} satisfies ReceivingStatsDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReceivingStatsDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


