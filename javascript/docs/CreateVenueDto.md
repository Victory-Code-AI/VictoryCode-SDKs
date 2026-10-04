
# CreateVenueDto


## Properties

Name | Type
------------ | -------------
`name` | string
`playingSurface` | string
`address` | [AddressDto](AddressDto.md)
`coordinates` | [CoordinatesDto](CoordinatesDto.md)

## Example

```typescript
import type { CreateVenueDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Lincoln Financial Field,
  "playingSurface": Natural Grass,
  "address": null,
  "coordinates": null,
} satisfies CreateVenueDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateVenueDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


