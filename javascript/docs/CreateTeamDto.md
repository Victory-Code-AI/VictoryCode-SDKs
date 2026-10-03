
# CreateTeamDto


## Properties

Name | Type
------------ | -------------
`name` | string
`shortName` | string
`city` | string
`state` | string
`mascots` | Array&lt;string&gt;
`classification` | string

## Example

```typescript
import type { CreateTeamDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Team A,
  "shortName": LFC,
  "city": Chicago,
  "state": California,
  "mascots": ["64c8882b9b1df9b17324aabc","64c8882b9b1df9b17324aabd"],
  "classification": 64c8882b9b1df9b17324aabe,
} satisfies CreateTeamDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateTeamDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


