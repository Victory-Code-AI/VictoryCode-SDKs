
# PassingSectionDto


## Properties

Name | Type
------------ | -------------
`players` | [Array&lt;PassingStatsDto&gt;](PassingStatsDto.md)
`totals` | [PassingTotalsDto](PassingTotalsDto.md)

## Example

```typescript
import type { PassingSectionDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "players": null,
  "totals": null,
} satisfies PassingSectionDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PassingSectionDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


