
# InitiateMultipartUploadDto


## Properties

Name | Type
------------ | -------------
`filename` | string
`mimetype` | string
`gameId` | string

## Example

```typescript
import type { InitiateMultipartUploadDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "filename": game-video.mp4,
  "mimetype": video/mp4,
  "gameId": 64c8882b9b1df9b17324aabe,
} satisfies InitiateMultipartUploadDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InitiateMultipartUploadDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


