
# GameBoxScoreTeamsDto


## Properties

Name | Type
------------ | -------------
`home` | [TeamBoxScoreDto](TeamBoxScoreDto.md)
`away` | [TeamBoxScoreDto](TeamBoxScoreDto.md)

## Example

```typescript
import type { GameBoxScoreTeamsDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "home": null,
  "away": null,
} satisfies GameBoxScoreTeamsDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GameBoxScoreTeamsDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


