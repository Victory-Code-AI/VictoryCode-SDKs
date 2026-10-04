
# PlayClipListDetailsDto


## Properties

Name | Type
------------ | -------------
`startTime` | string
`endTime` | string
`duration` | string
`urlOriginal` | string
`urlAnalyzed` | string
`urlThumbnail` | string
`analyzedVideoOriginalJson` | string
`analyzedVideoRawJson` | string
`analyzedVideoSummary` | string

## Example

```typescript
import type { PlayClipListDetailsDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "startTime": 00:01:23,
  "endTime": 00:01:33,
  "duration": 00:00:10,
  "urlOriginal": https://example.com/original.mp4,
  "urlAnalyzed": https://example.com/analyzed.mp4,
  "urlThumbnail": https://example.com/thumbnail.jpg,
  "analyzedVideoOriginalJson": https://example.com/original.json,
  "analyzedVideoRawJson": https://example.com/raw.json,
  "analyzedVideoSummary": https://example.com/summary.url,
} satisfies PlayClipListDetailsDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlayClipListDetailsDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


