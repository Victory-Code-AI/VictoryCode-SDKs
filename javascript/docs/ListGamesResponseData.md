
# ListGamesResponseData


## Properties

Name | Type
------------ | -------------
`total` | number
`limit` | number
`games` | [Array&lt;ListGamesResponseDataGamesInner&gt;](ListGamesResponseDataGamesInner.md)

## Example

```typescript
import type { ListGamesResponseData } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "total": null,
  "limit": null,
  "games": null,
} satisfies ListGamesResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListGamesResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


