
# GameBoxScoreResponseDto


## Properties

Name | Type
------------ | -------------
`meta` | [GameBoxScoreMetaDto](GameBoxScoreMetaDto.md)
`teams` | [GameBoxScoreTeamsDto](GameBoxScoreTeamsDto.md)

## Example

```typescript
import type { GameBoxScoreResponseDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "teams": null,
} satisfies GameBoxScoreResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GameBoxScoreResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


