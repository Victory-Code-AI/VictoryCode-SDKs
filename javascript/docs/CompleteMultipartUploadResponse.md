
# CompleteMultipartUploadResponse


## Properties

Name | Type
------------ | -------------
`s3Url` | string
`s3Key` | string

## Example

```typescript
import type { CompleteMultipartUploadResponse } from '@victorycode/sdk'

// TODO: Update the object below with actual values
const example = {
  "s3Url": s3 url,
  "s3Key": s3 key,
} satisfies CompleteMultipartUploadResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CompleteMultipartUploadResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


