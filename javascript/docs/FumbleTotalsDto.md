
# FumbleTotalsDto


## Properties

Name | Type
------------ | -------------
`fumbles` | number
`lost` | number
`recovered` | number

## Example

```typescript
import type { FumbleTotalsDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "fumbles": 1,
  "lost": 0,
  "recovered": 0,
} satisfies FumbleTotalsDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FumbleTotalsDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


