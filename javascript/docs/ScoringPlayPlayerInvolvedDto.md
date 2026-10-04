
# ScoringPlayPlayerInvolvedDto


## Properties

Name | Type
------------ | -------------
`teamId` | string
`playerId` | string
`playerJerseyNumber` | number
`role` | string

## Example

```typescript
import type { ScoringPlayPlayerInvolvedDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "teamId": null,
  "playerId": null,
  "playerJerseyNumber": null,
  "role": null,
} satisfies ScoringPlayPlayerInvolvedDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScoringPlayPlayerInvolvedDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


