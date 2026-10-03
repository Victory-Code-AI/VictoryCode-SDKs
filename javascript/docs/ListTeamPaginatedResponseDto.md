
# ListTeamPaginatedResponseDto


## Properties

Name | Type
------------ | -------------
`total` | number
`limit` | number
`offset` | number
`data` | [Array&lt;FetchTeamResponseDto&gt;](FetchTeamResponseDto.md)

## Example

```typescript
import type { ListTeamPaginatedResponseDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "total": 150,
  "limit": 20,
  "offset": 100,
  "data": null,
} satisfies ListTeamPaginatedResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListTeamPaginatedResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


