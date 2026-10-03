# MascotsAPI

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMascot**](MascotsAPI.md#createmascot) | **POST** /api/v1/client/mascots | Create a new mascot
[**deleteMascot**](MascotsAPI.md#deletemascot) | **DELETE** /api/v1/client/mascots/{id} | Delete a mascot
[**listMascots**](MascotsAPI.md#listmascots) | **GET** /api/v1/client/mascots | Get all mascots
[**updateMascot**](MascotsAPI.md#updatemascot) | **PATCH** /api/v1/client/mascots/{id} | Update a mascot


# **createMascot**
```swift
    open class func createMascot(name: String, description: String, mascotImage: URL? = nil, completion: @escaping (_ data: CreateMascotResponse?, _ error: Error?) -> Void)
```

Create a new mascot

Creates a new mascot record in the Tactix system. Clients can define the mascot’s name, description, and image URL, which can later be associated with one or more teams. This endpoint is typically used when onboarding new teams or setting up school/club branding assets.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let name = "name_example" // String | 
let description = "description_example" // String | 
let mascotImage = URL(string: "https://example.com")! // URL |  (optional)

// Create a new mascot
MascotsAPI.createMascot(name: name, description: description, mascotImage: mascotImage) { (response, error) in
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
 **name** | **String** |  | 
 **description** | **String** |  | 
 **mascotImage** | **URL** |  | [optional] 

### Return type

[**CreateMascotResponse**](CreateMascotResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteMascot**
```swift
    open class func deleteMascot(id: String, completion: @escaping (_ data: DeleteMascotResponse?, _ error: Error?) -> Void)
```

Delete a mascot

Deletes a specific mascot from the Tactix system using its unique id. This operation permanently removes the mascot record and any direct associations it holds with teams. It should be used with caution, as deleted mascots cannot be restored through the API.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let id = "id_example" // String | 

// Delete a mascot
MascotsAPI.deleteMascot(id: id) { (response, error) in
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

[**DeleteMascotResponse**](DeleteMascotResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listMascots**
```swift
    open class func listMascots(limit: Int? = nil, page: Int? = nil, completion: @escaping (_ data: ListMascotsResponse?, _ error: Error?) -> Void)
```

Get all mascots

Retrieves a paginated list of all mascots available to the authenticated client. Each mascot record contains the name, description, image URL, and timestamps. This endpoint is ideal for displaying mascot lists, searching for existing records, or selecting mascots to associate with teams.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let limit = 987 // Int |  (optional)
let page = 987 // Int |  (optional)

// Get all mascots
MascotsAPI.listMascots(limit: limit, page: page) { (response, error) in
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

[**ListMascotsResponse**](ListMascotsResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateMascot**
```swift
    open class func updateMascot(id: String, name: String? = nil, description: String? = nil, mascotImage: URL? = nil, completion: @escaping (_ data: UpdateMascotResponse?, _ error: Error?) -> Void)
```

Update a mascot

Updates the details of an existing mascot identified by its unique id. This endpoint allows clients to modify a mascot’s name, description, and image, ensuring team branding and contextual information remain accurate and up to date.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let id = "id_example" // String | 
let name = "name_example" // String |  (optional)
let description = "description_example" // String |  (optional)
let mascotImage = URL(string: "https://example.com")! // URL |  (optional)

// Update a mascot
MascotsAPI.updateMascot(id: id, name: name, description: description, mascotImage: mascotImage) { (response, error) in
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
 **name** | **String** |  | [optional] 
 **description** | **String** |  | [optional] 
 **mascotImage** | **URL** |  | [optional] 

### Return type

[**UpdateMascotResponse**](UpdateMascotResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

