
# SingleVenueResponseDto


## Properties

Name | Type
------------ | -------------
`message` | string
`data` | [Venue](Venue.md)

## Example

```typescript
import type { SingleVenueResponseDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "message": Operation successful,
  "data": null,
} satisfies SingleVenueResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SingleVenueResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


