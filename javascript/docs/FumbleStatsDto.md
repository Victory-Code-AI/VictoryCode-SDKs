
# FumbleStatsDto


## Properties

Name | Type
------------ | -------------
`playerName` | string
`jerseyNumber` | number
`playerId` | string
`fumbles` | number
`lost` | number
`recovered` | number

## Example

```typescript
import type { FumbleStatsDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "playerName": Josh Jacobs,
  "jerseyNumber": 8,
  "playerId": rb26,
  "fumbles": 1,
  "lost": 0,
  "recovered": 0,
} satisfies FumbleStatsDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FumbleStatsDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


