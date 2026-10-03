
# SingleMascotResponseDto


## Properties

Name | Type
------------ | -------------
`message` | string
`data` | [MascotResponseDto](MascotResponseDto.md)

## Example

```typescript
import type { SingleMascotResponseDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "message": Operation successful,
  "data": null,
} satisfies SingleMascotResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SingleMascotResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


