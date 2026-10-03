# MascotApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createMascot**](MascotApi.md#createMascot) | **POST** /api/v1/client/mascots | Create a new mascot |
| [**deleteMascot**](MascotApi.md#deleteMascot) | **DELETE** /api/v1/client/mascots/{id} | Delete a mascot |
| [**getMascots**](MascotApi.md#getMascots) | **GET** /api/v1/client/mascots | Get all mascots |
| [**updateMascot**](MascotApi.md#updateMascot) | **PATCH** /api/v1/client/mascots/{id} | Update a mascot |


<a id="createMascot"></a>
# **createMascot**
> SingleMascotResponseDto createMascot(createMascotDto)

Create a new mascot

Creates a new mascot record with a name and description. An optional mascot image can be uploaded as part of the multipart form data.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = MascotApi()
val createMascotDto : CreateMascotDto =  // CreateMascotDto | 
try {
    val result : SingleMascotResponseDto = apiInstance.createMascot(createMascotDto)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MascotApi#createMascot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MascotApi#createMascot")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **createMascotDto** | [**CreateMascotDto**](CreateMascotDto.md)|  | |

### Return type

[**SingleMascotResponseDto**](SingleMascotResponseDto.md)

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

<a id="deleteMascot"></a>
# **deleteMascot**
> DeleteResponseDto deleteMascot(id)

Delete a mascot

Permanently deletes a mascot record from the system.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = MascotApi()
val id : kotlin.String = id_example // kotlin.String | 
try {
    val result : DeleteResponseDto = apiInstance.deleteMascot(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MascotApi#deleteMascot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MascotApi#deleteMascot")
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

<a id="getMascots"></a>
# **getMascots**
> ListMascotPaginatedResponseDto getMascots(limit, page, search)

Get all mascots

Retrieves a paginated list of all mascots. Supports searching by name and pagination through query parameters.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = MascotApi()
val limit : java.math.BigDecimal = 8.14 // java.math.BigDecimal | 
val page : java.math.BigDecimal = 8.14 // java.math.BigDecimal | 
val search : kotlin.String = search_example // kotlin.String | 
try {
    val result : ListMascotPaginatedResponseDto = apiInstance.getMascots(limit, page, search)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MascotApi#getMascots")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MascotApi#getMascots")
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

[**ListMascotPaginatedResponseDto**](ListMascotPaginatedResponseDto.md)

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

<a id="updateMascot"></a>
# **updateMascot**
> SingleMascotResponseDto updateMascot(id, updateMascotDto)

Update a mascot

Updates the details of an existing mascot identified by its ID. Allows updating the name, description, and mascot image.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = MascotApi()
val id : kotlin.String = id_example // kotlin.String | 
val updateMascotDto : UpdateMascotDto =  // UpdateMascotDto | 
try {
    val result : SingleMascotResponseDto = apiInstance.updateMascot(id, updateMascotDto)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MascotApi#updateMascot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MascotApi#updateMascot")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **kotlin.String**|  | |
| **updateMascotDto** | [**UpdateMascotDto**](UpdateMascotDto.md)|  | |

### Return type

[**SingleMascotResponseDto**](SingleMascotResponseDto.md)

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

