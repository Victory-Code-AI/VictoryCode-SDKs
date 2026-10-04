
# InterceptionTotalsDto


## Properties

Name | Type
------------ | -------------
`interceptions` | number
`yards` | number
`touchdowns` | number

## Example

```typescript
import type { InterceptionTotalsDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "interceptions": 1,
  "yards": 16,
  "touchdowns": 0,
} satisfies InterceptionTotalsDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InterceptionTotalsDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


