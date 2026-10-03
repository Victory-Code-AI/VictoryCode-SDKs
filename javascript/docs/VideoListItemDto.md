
# VideoListItemDto


## Properties

Name | Type
------------ | -------------
`gameId` | string
`videoId` | string
`viewType` | string
`sourceUrl` | string
`isDefaultVideo` | boolean

## Example

```typescript
import type { VideoListItemDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "gameId": game-id,
  "videoId": video-id,
  "viewType": All-22 Sideline,
  "sourceUrl": https://example.com/video.mp4,
  "isDefaultVideo": false,
} satisfies VideoListItemDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VideoListItemDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


