
# KickingStatsDto


## Properties

Name | Type
------------ | -------------
`playerName` | string
`jerseyNumber` | number
`playerId` | string
`fieldGoalsAttempted` | number
`fieldGoalsMade` | number
`fieldGoalPct` | number
`longFieldGoal` | number
`extraPointsAttempted` | number
`extraPointsMade` | number
`totalPoints` | number

## Example

```typescript
import type { KickingStatsDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "playerName": Evan McPherson,
  "jerseyNumber": 2,
  "playerId": k2,
  "fieldGoalsAttempted": 1,
  "fieldGoalsMade": 1,
  "fieldGoalPct": 100,
  "longFieldGoal": 45,
  "extraPointsAttempted": 1,
  "extraPointsMade": 1,
  "totalPoints": 4,
} satisfies KickingStatsDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as KickingStatsDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


