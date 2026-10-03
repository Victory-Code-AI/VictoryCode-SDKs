
# GetUploadStatusResponseData


## Properties

Name | Type
------------ | -------------
`id` | string
`s3UploadId` | string
`s3Key` | string
`fileSize` | number
`status` | string
`progress` | number
`createdAt` | Date
`updatedAt` | Date
`v` | number
`location` | string

## Example

```typescript
import type { GetUploadStatusResponseData } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "s3UploadId": null,
  "s3Key": null,
  "fileSize": null,
  "status": null,
  "progress": null,
  "createdAt": null,
  "updatedAt": null,
  "v": null,
  "location": null,
} satisfies GetUploadStatusResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetUploadStatusResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


