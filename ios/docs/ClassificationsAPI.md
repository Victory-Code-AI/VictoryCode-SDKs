# ClassificationsAPI

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createClassification**](ClassificationsAPI.md#createclassification) | **POST** /api/v1/client/classifications | Create a new classification
[**deleteClassification**](ClassificationsAPI.md#deleteclassification) | **DELETE** /api/v1/client/classifications/{id} | Delete a classification
[**listClassifications**](ClassificationsAPI.md#listclassifications) | **GET** /api/v1/client/classifications | Get all classifications
[**updateClassification**](ClassificationsAPI.md#updateclassification) | **PATCH** /api/v1/client/classifications/{id} | Update a classification


# **createClassification**
```swift
    open class func createClassification(createClassificationRequest: CreateClassificationRequest, completion: @escaping (_ data: CreateClassificationResponse?, _ error: Error?) -> Void)
```

Create a new classification

Creates a new classification record in the Tactix platform. Classifications are used to categorize teams by league, division, or competition level (e.g., “Division 1A”, “Junior Varsity”).

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let createClassificationRequest = CreateClassificationRequest(name: "name_example", description: "description_example") // CreateClassificationRequest | 

// Create a new classification
ClassificationsAPI.createClassification(createClassificationRequest: createClassificationRequest) { (response, error) in
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
 **createClassificationRequest** | [**CreateClassificationRequest**](CreateClassificationRequest.md) |  | 

### Return type

[**CreateClassificationResponse**](CreateClassificationResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteClassification**
```swift
    open class func deleteClassification(id: String, completion: @escaping (_ data: DeleteClassificationResponse?, _ error: Error?) -> Void)
```

Delete a classification

Deletes a specific classification from the Tactix system using its unique id. This permanently removes the classification and disassociates it from any linked team records.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let id = "id_example" // String | 

// Delete a classification
ClassificationsAPI.deleteClassification(id: id) { (response, error) in
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

[**DeleteClassificationResponse**](DeleteClassificationResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listClassifications**
```swift
    open class func listClassifications(limit: Int? = nil, page: Int? = nil, completion: @escaping (_ data: ListClassificationsResponse?, _ error: Error?) -> Void)
```

Get all classifications

Retrieves a paginated list of all classifications available to the authenticated client. Each classification object includes a name, description, and timestamps for creation and modification. This endpoint is typically used to populate dropdowns or filters when creating or updating teams.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let limit = 987 // Int |  (optional)
let page = 987 // Int |  (optional)

// Get all classifications
ClassificationsAPI.listClassifications(limit: limit, page: page) { (response, error) in
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
 **limit** | **Int** |  | [optional] 
 **page** | **Int** |  | [optional] 

### Return type

[**ListClassificationsResponse**](ListClassificationsResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateClassification**
```swift
    open class func updateClassification(id: String, updateClassificationRequest: UpdateClassificationRequest, completion: @escaping (_ data: UpdateClassificationResponse?, _ error: Error?) -> Void)
```

Update a classification

Updates an existing classification identified by its unique id. This endpoint allows modification of the classification’s name or description.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let id = "id_example" // String | 
let updateClassificationRequest = UpdateClassificationRequest(name: "name_example", description: "description_example") // UpdateClassificationRequest | 

// Update a classification
ClassificationsAPI.updateClassification(id: id, updateClassificationRequest: updateClassificationRequest) { (response, error) in
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
 **updateClassificationRequest** | [**UpdateClassificationRequest**](UpdateClassificationRequest.md) |  | 

### Return type

[**UpdateClassificationResponse**](UpdateClassificationResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

