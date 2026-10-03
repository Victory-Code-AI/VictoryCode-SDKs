
# TeamBoxScoreDto


## Properties

Name | Type
------------ | -------------
`teamId` | string
`teamName` | string
`logoUrl` | string
`passing` | [PassingSectionDto](PassingSectionDto.md)
`rushing` | [RushingSectionDto](RushingSectionDto.md)
`receiving` | [ReceivingSectionDto](ReceivingSectionDto.md)
`fumbles` | [FumbleSectionDto](FumbleSectionDto.md)
`defense` | [DefenseSectionDto](DefenseSectionDto.md)
`kicking` | [KickingSectionDto](KickingSectionDto.md)
`interceptions` | [InterceptionSectionDto](InterceptionSectionDto.md)

## Example

```typescript
import type { TeamBoxScoreDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "teamId": 69e60993e0ce1105d162eff3,
  "teamName": Philadelphia Eagles,
  "logoUrl": https://cdn.example.com/logos/phi.png,
  "passing": null,
  "rushing": null,
  "receiving": null,
  "fumbles": null,
  "defense": null,
  "kicking": null,
  "interceptions": null,
} satisfies TeamBoxScoreDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TeamBoxScoreDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


