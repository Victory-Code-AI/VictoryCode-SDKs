
# InterceptionSectionDto


## Properties

Name | Type
------------ | -------------
`players` | [Array&lt;InterceptionStatsDto&gt;](InterceptionStatsDto.md)
`totals` | [InterceptionTotalsDto](InterceptionTotalsDto.md)

## Example

```typescript
import type { InterceptionSectionDto } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "players": null,
  "totals": null,
} satisfies InterceptionSectionDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InterceptionSectionDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


