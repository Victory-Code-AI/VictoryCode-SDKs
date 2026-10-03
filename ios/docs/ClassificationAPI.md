# ClassificationAPI

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createClassification**](ClassificationAPI.md#createclassification) | **POST** /api/v1/client/classifications | Create a new classification
[**deleteClassification**](ClassificationAPI.md#deleteclassification) | **DELETE** /api/v1/client/classifications/{id} | Delete a classification
[**getClassifications**](ClassificationAPI.md#getclassifications) | **GET** /api/v1/client/classifications | Get all classifications
[**updateClassification**](ClassificationAPI.md#updateclassification) | **PATCH** /api/v1/client/classifications/{id} | Update a classification


# **createClassification**
```swift
    open class func createClassification(createClassificationDto: CreateClassificationDto, completion: @escaping (_ data: SingleClassificationResponseDto?, _ error: Error?) -> Void)
```

Create a new classification

Creates a new classification entry for categorizing teams.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let createClassificationDto = CreateClassificationDto(name: "name_example", description: "description_example") // CreateClassificationDto | 

// Create a new classification
ClassificationAPI.createClassification(createClassificationDto: createClassificationDto) { (response, error) in
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
 **createClassificationDto** | [**CreateClassificationDto**](CreateClassificationDto.md) |  | 

### Return type

[**SingleClassificationResponseDto**](SingleClassificationResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteClassification**
```swift
    open class func deleteClassification(id: String, completion: @escaping (_ data: DeleteResponseDto?, _ error: Error?) -> Void)
```

Delete a classification

Permanently deletes a team classification from the system.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let id = "id_example" // String | 

// Delete a classification
ClassificationAPI.deleteClassification(id: id) { (response, error) in
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
 **id** | **String** |  | 

### Return type

[**DeleteResponseDto**](DeleteResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getClassifications**
```swift
    open class func getClassifications(limit: Double? = nil, page: Double? = nil, search: String? = nil, completion: @escaping (_ data: ListClassificationPaginatedResponseDto?, _ error: Error?) -> Void)
```

Get all classifications

Retrieves a paginated list of all team classifications available in the system.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let limit = 987 // Double |  (optional) (default to 10)
let page = 987 // Double |  (optional) (default to 1)
let search = "search_example" // String |  (optional)

// Get all classifications
ClassificationAPI.getClassifications(limit: limit, page: page, search: search) { (response, error) in
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
 **limit** | **Double** |  | [optional] [default to 10]
 **page** | **Double** |  | [optional] [default to 1]
 **search** | **String** |  | [optional] 

### Return type

[**ListClassificationPaginatedResponseDto**](ListClassificationPaginatedResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateClassification**
```swift
    open class func updateClassification(id: String, updateClassificationDto: UpdateClassificationDto, completion: @escaping (_ data: SingleClassificationResponseDto?, _ error: Error?) -> Void)
```

Update a classification

Updates an existing team classification entry identified by its ID.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let id = "id_example" // String | 
let updateClassificationDto = UpdateClassificationDto(name: "name_example", description: "description_example") // UpdateClassificationDto | 

// Update a classification
ClassificationAPI.updateClassification(id: id, updateClassificationDto: updateClassificationDto) { (response, error) in
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
 **id** | **String** |  | 
 **updateClassificationDto** | [**UpdateClassificationDto**](UpdateClassificationDto.md) |  | 

### Return type

[**SingleClassificationResponseDto**](SingleClassificationResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

