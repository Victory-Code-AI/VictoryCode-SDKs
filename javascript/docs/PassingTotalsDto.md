
# PassingTotalsDto


## Properties

Name | Type
------------ | -------------
`completions` | number
`attempts` | number
`yards` | number
`avg` | number
`touchdowns` | number
`interceptions` | number
`sacks` | number
`sackYardsLost` | number
`qbr` | number
`passerRating` | number

## Example

```typescript
import type { PassingTotalsDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "completions": 13,
  "attempts": 21,
  "yards": 131,
  "avg": 6.2,
  "touchdowns": 2,
  "interceptions": 0,
  "sacks": 2,
  "sackYardsLost": 10,
  "qbr": 59.2,
  "passerRating": 111.4,
} satisfies PassingTotalsDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PassingTotalsDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


