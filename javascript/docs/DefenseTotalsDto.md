
# DefenseTotalsDto


## Properties

Name | Type
------------ | -------------
`totalTackles` | number
`soloTackles` | number
`sacks` | number
`tacklesForLoss` | number
`passesDefended` | number
`qbHits` | number
`defensiveTouchdowns` | number

## Example

```typescript
import type { DefenseTotalsDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "totalTackles": 8,
  "soloTackles": 4,
  "sacks": 0.5,
  "tacklesForLoss": 0,
  "passesDefended": 0,
  "qbHits": 1,
  "defensiveTouchdowns": 0,
} satisfies DefenseTotalsDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DefenseTotalsDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


