
# GameAllPlayListItemDto


## Properties

Name | Type
------------ | -------------
`playId` | string
`playNumber` | number
`clip` | [PlayClipListDetailsDto](PlayClipListDetailsDto.md)
`attributes` | [PlayAttributesListDto](PlayAttributesListDto.md)
`events` | Array&lt;object&gt;
`videoId` | string

## Example

```typescript
import type { GameAllPlayListItemDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "playId": play-id,
  "playNumber": 1,
  "clip": null,
  "attributes": null,
  "events": [],
  "videoId": video-id,
} satisfies GameAllPlayListItemDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GameAllPlayListItemDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


