
# LineOfScrimmageDto


## Properties

Name | Type
------------ | -------------
`sideOfField` | string
`yardLine` | number

## Example

```typescript
import type { LineOfScrimmageDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "sideOfField": OWN,
  "yardLine": 25,
} satisfies LineOfScrimmageDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LineOfScrimmageDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


