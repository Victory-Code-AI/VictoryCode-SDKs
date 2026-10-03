
# RushingTotalsDto


## Properties

Name | Type
------------ | -------------
`carries` | number
`yards` | number
`avg` | number
`touchdowns` | number
`_long` | number

## Example

```typescript
import type { RushingTotalsDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "carries": 25,
  "yards": 119,
  "avg": 4.8,
  "touchdowns": 0,
  "_long": 17,
} satisfies RushingTotalsDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RushingTotalsDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


