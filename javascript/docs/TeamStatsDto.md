
# TeamStatsDto


## Properties

Name | Type
------------ | -------------
`teamId` | string
`sourceId` | string
`name` | string
`shortName` | string
`mascot` | string
`classification` | string
`downEfficiency` | [Array&lt;DownEfficiencyDto&gt;](DownEfficiencyDto.md)
`offense` | [OffenseDto](OffenseDto.md)
`passing` | [PassingDto](PassingDto.md)
`rushing` | [RushingDto](RushingDto.md)
`redZone` | [RedZoneDto](RedZoneDto.md)
`turnovers` | [TurnoversDto](TurnoversDto.md)

## Example

```typescript
import type { TeamStatsDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "teamId": null,
  "sourceId": null,
  "name": null,
  "shortName": null,
  "mascot": null,
  "classification": null,
  "downEfficiency": null,
  "offense": null,
  "passing": null,
  "rushing": null,
  "redZone": null,
  "turnovers": null,
} satisfies TeamStatsDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TeamStatsDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


