
# ListVideoPaginatedResponseDto


## Properties

Name | Type
------------ | -------------
`total` | number
`limit` | number
`offset` | number
`gameId` | string
`data` | [Array&lt;VideoListItemDto&gt;](VideoListItemDto.md)

## Example

```typescript
import type { ListVideoPaginatedResponseDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "total": 150,
  "limit": 20,
  "offset": 100,
  "gameId": game-id,
  "data": null,
} satisfies ListVideoPaginatedResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListVideoPaginatedResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


