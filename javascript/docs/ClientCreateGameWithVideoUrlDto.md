
# ClientCreateGameWithVideoUrlDto


## Properties

Name | Type
------------ | -------------
`name` | string
`sourceGameId` | string
`s3Link` | string
`homeTeam` | string
`awayTeam` | string
`venue` | string
`season` | string
`week` | number
`competitionLevel` | string
`gameStatus` | string
`gameDateTime` | string
`uploadId` | string

## Example

```typescript
import type { ClientCreateGameWithVideoUrlDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Winning Strategy,
  "sourceGameId": Game2026#15,
  "s3Link": https://tactix-bucket.s3.amazonaws.com/games/2023/week5/game-video.mp4,
  "homeTeam": 64c8882b9b1df9b17324aabe,
  "awayTeam": 64c8882b9b1df9b17324aabe,
  "venue": 64c8882b9b1df9b17324aabe,
  "season": 2026,
  "week": 5,
  "competitionLevel": HIGH_SCHOOL,
  "gameStatus": FINAL,
  "gameDateTime": 2023-11-15,
  "uploadId": multipart-  upload-id-123,
} satisfies ClientCreateGameWithVideoUrlDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ClientCreateGameWithVideoUrlDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


