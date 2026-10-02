
# GetGameRecapTeamStatsResponseDataHomeTeam


## Properties

Name | Type
------------ | -------------
`teamId` | string
`sourceId` | string
`name` | string
`mascot` | string
`classification` | string
`firstDowns` | [GetGameRecapTeamStatsResponseDataHomeTeamFirstDowns](GetGameRecapTeamStatsResponseDataHomeTeamFirstDowns.md)
`offense` | [GetGameRecapTeamStatsResponseDataHomeTeamOffense](GetGameRecapTeamStatsResponseDataHomeTeamOffense.md)
`passing` | [GetGameRecapTeamStatsResponseDataHomeTeamPassing](GetGameRecapTeamStatsResponseDataHomeTeamPassing.md)
`rushing` | [GetGameRecapTeamStatsResponseDataHomeTeamPassing](GetGameRecapTeamStatsResponseDataHomeTeamPassing.md)

## Example

```typescript
import type { GetGameRecapTeamStatsResponseDataHomeTeam } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "teamId": null,
  "sourceId": null,
  "name": null,
  "mascot": null,
  "classification": null,
  "firstDowns": null,
  "offense": null,
  "passing": null,
  "rushing": null,
} satisfies GetGameRecapTeamStatsResponseDataHomeTeam

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGameRecapTeamStatsResponseDataHomeTeam
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


