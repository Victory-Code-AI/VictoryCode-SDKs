
# CreateTeamResponseDto


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`shortName` | string
`sport` | string
`mascots` | Array&lt;string&gt;
`classification` | string
`city` | string
`state` | string
`createdAt` | string
`updatedAt` | string

## Example

```typescript
import type { CreateTeamResponseDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 69c2b97794074e4cb18028a5,
  "name": Testing Team,
  "shortName": T Team,
  "sport": FOOTBALL,
  "mascots": ["69b14f4a172b65400e92bcf2"],
  "classification": 69b14f4a172b65400e92bcf2,
  "city": Kathmandu,
  "state": Alaska,
  "createdAt": 2026-03-24T16:19:03.163Z,
  "updatedAt": 2026-03-24T16:19:03.163Z,
} satisfies CreateTeamResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateTeamResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


