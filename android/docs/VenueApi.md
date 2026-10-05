# VenueApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createVenue**](VenueApi.md#createVenue) | **POST** /api/v1/client/venue | Create a new venue |
| [**deleteVenue**](VenueApi.md#deleteVenue) | **DELETE** /api/v1/client/venue/{id} | Delete a venue |
| [**getVenues**](VenueApi.md#getVenues) | **GET** /api/v1/client/venues | Get all venues |
| [**updateVenue**](VenueApi.md#updateVenue) | **PATCH** /api/v1/client/venue/{id} | Update a venue |


<a id="createVenue"></a>
# **createVenue**
> SingleVenueResponseDto createVenue(createVenueDto)

Create a new venue

Registers a new venue where games are held, including details about the venue name and location.

### Example
```kotlin
// Import classes:
//import com.tactixai.victorycode.sdk.infrastructure.*
//import com.tactixai.victorycode.sdk.models.*

val apiInstance = VenueApi()
val createVenueDto : CreateVenueDto =  // CreateVenueDto | 
try {
    val result : SingleVenueResponseDto = apiInstance.createVenue(createVenueDto)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling VenueApi#createVenue")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling VenueApi#createVenue")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **createVenueDto** | [**CreateVenueDto**](CreateVenueDto.md)|  | |

### Return type

[**SingleVenueResponseDto**](SingleVenueResponseDto.md)

### Authorization


Configure Client-App-Token statically:
```kotlin
ApiClient.accessToken = ""
```
Configure Client-App-Token dynamically:
```kotlin
apiInstance.accessTokenProvider = { "" }
```
Configure Client-App-Id:
    ApiClient.apiKey["App-Id"] = ""
    ApiClient.apiKeyPrefix["App-Id"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="deleteVenue"></a>
# **deleteVenue**
> DeleteResponseDto deleteVenue(id)

Delete a venue

Permanently removes a venue registration from the system.

### Example
```kotlin
// Import classes:
//import com.tactixai.victorycode.sdk.infrastructure.*
//import com.tactixai.victorycode.sdk.models.*

val apiInstance = VenueApi()
val id : kotlin.String = id_example // kotlin.String | 
try {
    val result : DeleteResponseDto = apiInstance.deleteVenue(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling VenueApi#deleteVenue")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling VenueApi#deleteVenue")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **kotlin.String**|  | |

### Return type

[**DeleteResponseDto**](DeleteResponseDto.md)

### Authorization


Configure Client-App-Token statically:
```kotlin
ApiClient.accessToken = ""
```
Configure Client-App-Token dynamically:
```kotlin
apiInstance.accessTokenProvider = { "" }
```
Configure Client-App-Id:
    ApiClient.apiKey["App-Id"] = ""
    ApiClient.apiKeyPrefix["App-Id"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getVenues"></a>
# **getVenues**
> ListVenuePaginatedResponseDto getVenues(limit, page, search)

Get all venues

Retrieves a paginated list of all venues where sports events or games are conducted.

### Example
```kotlin
// Import classes:
//import com.tactixai.victorycode.sdk.infrastructure.*
//import com.tactixai.victorycode.sdk.models.*

val apiInstance = VenueApi()
val limit : java.math.BigDecimal = 8.14 // java.math.BigDecimal | 
val page : java.math.BigDecimal = 8.14 // java.math.BigDecimal | 
val search : kotlin.String = search_example // kotlin.String | 
try {
    val result : ListVenuePaginatedResponseDto = apiInstance.getVenues(limit, page, search)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling VenueApi#getVenues")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling VenueApi#getVenues")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **java.math.BigDecimal**|  | [optional] [default to 10] |
| **page** | **java.math.BigDecimal**|  | [optional] [default to 1] |
| **search** | **kotlin.String**|  | [optional] |

### Return type

[**ListVenuePaginatedResponseDto**](ListVenuePaginatedResponseDto.md)

### Authorization


Configure Client-App-Token statically:
```kotlin
ApiClient.accessToken = ""
```
Configure Client-App-Token dynamically:
```kotlin
apiInstance.accessTokenProvider = { "" }
```
Configure Client-App-Id:
    ApiClient.apiKey["App-Id"] = ""
    ApiClient.apiKeyPrefix["App-Id"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="updateVenue"></a>
# **updateVenue**
> SingleVenueResponseDto updateVenue(id, updateVenueDto)

Update a venue

Updates the information of an existing venue currently registered in the system.

### Example
```kotlin
// Import classes:
//import com.tactixai.victorycode.sdk.infrastructure.*
//import com.tactixai.victorycode.sdk.models.*

val apiInstance = VenueApi()
val id : kotlin.String = id_example // kotlin.String | 
val updateVenueDto : UpdateVenueDto =  // UpdateVenueDto | 
try {
    val result : SingleVenueResponseDto = apiInstance.updateVenue(id, updateVenueDto)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling VenueApi#updateVenue")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling VenueApi#updateVenue")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **kotlin.String**|  | |
| **updateVenueDto** | [**UpdateVenueDto**](UpdateVenueDto.md)|  | |

### Return type

[**SingleVenueResponseDto**](SingleVenueResponseDto.md)

### Authorization


Configure Client-App-Token statically:
```kotlin
ApiClient.accessToken = ""
```
Configure Client-App-Token dynamically:
```kotlin
apiInstance.accessTokenProvider = { "" }
```
Configure Client-App-Id:
    ApiClient.apiKey["App-Id"] = ""
    ApiClient.apiKeyPrefix["App-Id"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

