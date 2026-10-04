# UploadsAPI

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**completeMultipartUpload**](UploadsAPI.md#completemultipartupload) | **POST** /api/v1/client/complete-upload | Complete a multipart upload to S3
[**getPresignedUrl**](UploadsAPI.md#getpresignedurl) | **GET** /api/v1/client/upload-presigned-url | Get a presigned URL for a specific part of a multipart upload
[**initiateUpload**](UploadsAPI.md#initiateupload) | **POST** /api/v1/client/initiate-upload | Initiate a multipart upload to S3 for a large file


# **completeMultipartUpload**
```swift
    open class func completeMultipartUpload(completeMultipartUploadDto: CompleteMultipartUploadDto, completion: @escaping (_ data: CompleteMultipartUploadResponseDto?, _ error: Error?) -> Void)
```

Complete a multipart upload to S3

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let completeMultipartUploadDto = CompleteMultipartUploadDto(uploadId: "uploadId_example", parts: [CompletedPartDto(partNumber: 123, eTag: "eTag_example")]) // CompleteMultipartUploadDto | 

// Complete a multipart upload to S3
UploadsAPI.completeMultipartUpload(completeMultipartUploadDto: completeMultipartUploadDto) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **completeMultipartUploadDto** | [**CompleteMultipartUploadDto**](CompleteMultipartUploadDto.md) |  | 

### Return type

[**CompleteMultipartUploadResponseDto**](CompleteMultipartUploadResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPresignedUrl**
```swift
    open class func getPresignedUrl(uploadId: String, partNumber: Double, completion: @escaping (_ data: GetPartsPresignUrlResponseDto?, _ error: Error?) -> Void)
```

Get a presigned URL for a specific part of a multipart upload

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let uploadId = "uploadId_example" // String | 
let partNumber = 987 // Double | 

// Get a presigned URL for a specific part of a multipart upload
UploadsAPI.getPresignedUrl(uploadId: uploadId, partNumber: partNumber) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadId** | **String** |  | 
 **partNumber** | **Double** |  | 

### Return type

[**GetPartsPresignUrlResponseDto**](GetPartsPresignUrlResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initiateUpload**
```swift
    open class func initiateUpload(initiateMultipartUploadDto: InitiateMultipartUploadDto, completion: @escaping (_ data: InitiateMultipartUploadResponseDto?, _ error: Error?) -> Void)
```

Initiate a multipart upload to S3 for a large file

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let initiateMultipartUploadDto = InitiateMultipartUploadDto(filename: "filename_example", mimetype: "mimetype_example", gameId: "gameId_example") // InitiateMultipartUploadDto | 

// Initiate a multipart upload to S3 for a large file
UploadsAPI.initiateUpload(initiateMultipartUploadDto: initiateMultipartUploadDto) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **initiateMultipartUploadDto** | [**InitiateMultipartUploadDto**](InitiateMultipartUploadDto.md) |  | 

### Return type

[**InitiateMultipartUploadResponseDto**](InitiateMultipartUploadResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

