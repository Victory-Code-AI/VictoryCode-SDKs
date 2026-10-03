
# CreateMascotResponseData


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`mascotImage` | string
`id` | string
`createdAt` | Date
`updatedAt` | Date
`v` | number

## Example

```typescript
import type { CreateMascotResponseData } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "description": null,
  "mascotImage": null,
  "id": null,
  "createdAt": null,
  "updatedAt": null,
  "v": null,
} satisfies CreateMascotResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateMascotResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


