
# OffenseDto


## Properties

Name | Type
------------ | -------------
`totalPlays` | number
`totalYards` | number
`yardsPerPlay` | number

## Example

```typescript
import type { OffenseDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "totalPlays": null,
  "totalYards": null,
  "yardsPerPlay": null,
} satisfies OffenseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OffenseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


