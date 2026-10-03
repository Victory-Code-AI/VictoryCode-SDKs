
# FetchTeamResponseDto


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`shortName` | string
`sport` | string
`city` | string
`state` | string
`mascots` | [Mascot](Mascot.md)
`classification` | [Array&lt;Classification&gt;](Classification.md)
`createdAt` | string
`updatedAt` | string

## Example

```typescript
import type { FetchTeamResponseDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 69c0bf178817c85a7d11b716,
  "name": JAK,
  "shortName": JA,
  "sport": FOOTBALL,
  "city": Kathmandu,
  "state": Alaska,
  "mascots": {"_id":"69bce3618817c85a7d1118f2","name":"ra"},
  "classification": [{"_id":"69b13dc5172b65400e926b31","name":"GRANT_CLS_315"}],
  "createdAt": 2026-03-23T04:18:31.588Z,
  "updatedAt": 2026-03-23T04:18:31.588Z,
} satisfies FetchTeamResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FetchTeamResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


