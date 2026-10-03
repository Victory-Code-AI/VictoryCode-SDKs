# MascotAPI

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMascot**](MascotAPI.md#createmascot) | **POST** /api/v1/client/mascots | Create a new mascot
[**deleteMascot**](MascotAPI.md#deletemascot) | **DELETE** /api/v1/client/mascots/{id} | Delete a mascot
[**getMascots**](MascotAPI.md#getmascots) | **GET** /api/v1/client/mascots | Get all mascots
[**updateMascot**](MascotAPI.md#updatemascot) | **PATCH** /api/v1/client/mascots/{id} | Update a mascot


# **createMascot**
```swift
    open class func createMascot(createMascotDto: CreateMascotDto, completion: @escaping (_ data: SingleMascotResponseDto?, _ error: Error?) -> Void)
```

Create a new mascot

Creates a new mascot record with a name and description. An optional mascot image can be uploaded as part of the multipart form data.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let createMascotDto = CreateMascotDto(name: "name_example", description: "description_example") // CreateMascotDto | 

// Create a new mascot
MascotAPI.createMascot(createMascotDto: createMascotDto) { (response, error) in
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
 **createMascotDto** | [**CreateMascotDto**](CreateMascotDto.md) |  | 

### Return type

[**SingleMascotResponseDto**](SingleMascotResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteMascot**
```swift
    open class func deleteMascot(id: String, completion: @escaping (_ data: DeleteResponseDto?, _ error: Error?) -> Void)
```

Delete a mascot

Permanently deletes a mascot record from the system.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let id = "id_example" // String | 

// Delete a mascot
MascotAPI.deleteMascot(id: id) { (response, error) in
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

# **getMascots**
```swift
    open class func getMascots(limit: Double? = nil, page: Double? = nil, search: String? = nil, completion: @escaping (_ data: ListMascotPaginatedResponseDto?, _ error: Error?) -> Void)
```

Get all mascots

Retrieves a paginated list of all mascots. Supports searching by name and pagination through query parameters.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let limit = 987 // Double |  (optional) (default to 10)
let page = 987 // Double |  (optional) (default to 1)
let search = "search_example" // String |  (optional)

// Get all mascots
MascotAPI.getMascots(limit: limit, page: page, search: search) { (response, error) in
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

[**ListMascotPaginatedResponseDto**](ListMascotPaginatedResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateMascot**
```swift
    open class func updateMascot(id: String, updateMascotDto: UpdateMascotDto, completion: @escaping (_ data: SingleMascotResponseDto?, _ error: Error?) -> Void)
```

Update a mascot

Updates the details of an existing mascot identified by its ID. Allows updating the name, description, and mascot image.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let id = "id_example" // String | 
let updateMascotDto = UpdateMascotDto(name: "name_example", description: "description_example") // UpdateMascotDto | 

// Update a mascot
MascotAPI.updateMascot(id: id, updateMascotDto: updateMascotDto) { (response, error) in
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
 **updateMascotDto** | [**UpdateMascotDto**](UpdateMascotDto.md) |  | 

### Return type

[**SingleMascotResponseDto**](SingleMascotResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

