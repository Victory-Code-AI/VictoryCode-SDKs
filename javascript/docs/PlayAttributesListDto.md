
# PlayAttributesListDto


## Properties

Name | Type
------------ | -------------
`type` | string
`period` | string
`possessionTeamId` | string
`down` | number
`distance` | number
`lineOfScrimmage` | [LineOfScrimmageDto](LineOfScrimmageDto.md)
`offensivePersonnel` | string
`defensivePersonnel` | string

## Example

```typescript
import type { PlayAttributesListDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "type": Pass,
  "period": 1,
  "possessionTeamId": team-id,
  "down": 1,
  "distance": 10,
  "lineOfScrimmage": null,
  "offensivePersonnel": 12,
  "defensivePersonnel": 4-2-5,
} satisfies PlayAttributesListDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlayAttributesListDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


