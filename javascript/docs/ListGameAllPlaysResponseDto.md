
# ListGameAllPlaysResponseDto


## Properties

Name | Type
------------ | -------------
`total` | number
`limit` | number
`offset` | number
`gameId` | string
`data` | [Array&lt;GameAllPlayListItemDto&gt;](GameAllPlayListItemDto.md)

## Example

```typescript
import type { ListGameAllPlaysResponseDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "total": 150,
  "limit": 20,
  "offset": 100,
  "gameId": game-id,
  "data": null,
} satisfies ListGameAllPlaysResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListGameAllPlaysResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


