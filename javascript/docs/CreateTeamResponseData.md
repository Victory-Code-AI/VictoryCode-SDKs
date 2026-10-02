
# CreateTeamResponseData


## Properties

Name | Type
------------ | -------------
`name` | string
`shortName` | string
`sport` | string
`coach` | any
`teamLogo` | string
`mascots` | Array&lt;string&gt;
`classification` | string
`id` | string
`createdAt` | Date
`updatedAt` | Date
`v` | number

## Example

```typescript
import type { CreateTeamResponseData } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "shortName": null,
  "sport": null,
  "coach": null,
  "teamLogo": null,
  "mascots": null,
  "classification": null,
  "id": null,
  "createdAt": null,
  "updatedAt": null,
  "v": null,
} satisfies CreateTeamResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateTeamResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


