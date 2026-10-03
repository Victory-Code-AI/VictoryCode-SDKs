
# AddVideoToGameWithS3LinkDto


## Properties

Name | Type
------------ | -------------
`viewType` | string
`s3Link` | string

## Example

```typescript
import type { AddVideoToGameWithS3LinkDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "viewType": Broadcast Wide,
  "s3Link": https://tactix-bucket.s3.amazonaws.com/games/2023/week5/game-video.mp4,
} satisfies AddVideoToGameWithS3LinkDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddVideoToGameWithS3LinkDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


