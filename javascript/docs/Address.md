
# Address


## Properties

Name | Type
------------ | -------------
`street` | string
`city` | string
`state` | string
`postalCode` | string
`country` | string

## Example

```typescript
import type { Address } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "street": 1 Lincoln Financial Field Way,
  "city": Philadelphia,
  "state": PA,
  "postalCode": 19148,
  "country": US,
} satisfies Address

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Address
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


