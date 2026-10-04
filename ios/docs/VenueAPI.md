# VenueAPI

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVenue**](VenueAPI.md#createvenue) | **POST** /api/v1/client/venue | Create a new venue
[**deleteVenue**](VenueAPI.md#deletevenue) | **DELETE** /api/v1/client/venue/{id} | Delete a venue
[**getVenues**](VenueAPI.md#getvenues) | **GET** /api/v1/client/venues | Get all venues
[**updateVenue**](VenueAPI.md#updatevenue) | **PATCH** /api/v1/client/venue/{id} | Update a venue


# **createVenue**
```swift
    open class func createVenue(createVenueDto: CreateVenueDto, completion: @escaping (_ data: SingleVenueResponseDto?, _ error: Error?) -> Void)
```

Create a new venue

Registers a new venue where games are held, including details about the venue name and location.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let createVenueDto = CreateVenueDto(name: "name_example", playingSurface: "playingSurface_example", address: AddressDto(street: "street_example", city: "city_example", state: "state_example", postalCode: "postalCode_example", country: "country_example"), coordinates: CoordinatesDto(latitude: 123, longitude: 123)) // CreateVenueDto | 

// Create a new venue
VenueAPI.createVenue(createVenueDto: createVenueDto) { (response, error) in
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
 **createVenueDto** | [**CreateVenueDto**](CreateVenueDto.md) |  | 

### Return type

[**SingleVenueResponseDto**](SingleVenueResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteVenue**
```swift
    open class func deleteVenue(id: String, completion: @escaping (_ data: DeleteResponseDto?, _ error: Error?) -> Void)
```

Delete a venue

Permanently removes a venue registration from the system.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let id = "id_example" // String | 

// Delete a venue
VenueAPI.deleteVenue(id: id) { (response, error) in
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

# **getVenues**
```swift
    open class func getVenues(limit: Double? = nil, page: Double? = nil, search: String? = nil, completion: @escaping (_ data: ListVenuePaginatedResponseDto?, _ error: Error?) -> Void)
```

Get all venues

Retrieves a paginated list of all venues where sports events or games are conducted.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let limit = 987 // Double |  (optional) (default to 10)
let page = 987 // Double |  (optional) (default to 1)
let search = "search_example" // String |  (optional)

// Get all venues
VenueAPI.getVenues(limit: limit, page: page, search: search) { (response, error) in
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

[**ListVenuePaginatedResponseDto**](ListVenuePaginatedResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateVenue**
```swift
    open class func updateVenue(id: String, updateVenueDto: UpdateVenueDto, completion: @escaping (_ data: SingleVenueResponseDto?, _ error: Error?) -> Void)
```

Update a venue

Updates the information of an existing venue currently registered in the system.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let id = "id_example" // String | 
let updateVenueDto = UpdateVenueDto(name: "name_example", playingSurface: "playingSurface_example", address: AddressDto(street: "street_example", city: "city_example", state: "state_example", postalCode: "postalCode_example", country: "country_example"), coordinates: CoordinatesDto(latitude: 123, longitude: 123)) // UpdateVenueDto | 

// Update a venue
VenueAPI.updateVenue(id: id, updateVenueDto: updateVenueDto) { (response, error) in
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
 **updateVenueDto** | [**UpdateVenueDto**](UpdateVenueDto.md) |  | 

### Return type

[**SingleVenueResponseDto**](SingleVenueResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

