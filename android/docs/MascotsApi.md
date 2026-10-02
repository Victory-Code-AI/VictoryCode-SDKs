# MascotsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createMascot**](MascotsApi.md#createMascot) | **POST** /api/v1/client/mascots | Create a new mascot |
| [**deleteMascot**](MascotsApi.md#deleteMascot) | **DELETE** /api/v1/client/mascots/{id} | Delete a mascot |
| [**listMascots**](MascotsApi.md#listMascots) | **GET** /api/v1/client/mascots | Get all mascots |
| [**updateMascot**](MascotsApi.md#updateMascot) | **PATCH** /api/v1/client/mascots/{id} | Update a mascot |


<a id="createMascot"></a>
# **createMascot**
> CreateMascotResponse createMascot(name, description, mascotImage)

Create a new mascot

Creates a new mascot record in the Tactix system. Clients can define the mascot’s name, description, and image URL, which can later be associated with one or more teams. This endpoint is typically used when onboarding new teams or setting up school/club branding assets.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = MascotsApi()
val name : kotlin.String = name_example // kotlin.String | 
val description : kotlin.String = description_example // kotlin.String | 
val mascotImage : java.io.File = BINARY_DATA_HERE // java.io.File | 
try {
    val result : CreateMascotResponse = apiInstance.createMascot(name, description, mascotImage)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MascotsApi#createMascot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MascotsApi#createMascot")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **name** | **kotlin.String**|  | |
| **description** | **kotlin.String**|  | |
| **mascotImage** | **java.io.File**|  | [optional] |

### Return type

[**CreateMascotResponse**](CreateMascotResponse.md)

### Authorization


Configure AppToken:
    ApiClient.apiKey["App-Token"] = ""
    ApiClient.apiKeyPrefix["App-Token"] = ""
Configure AppId:
    ApiClient.apiKey["App-Id"] = ""
    ApiClient.apiKeyPrefix["App-Id"] = ""

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a id="deleteMascot"></a>
# **deleteMascot**
> DeleteMascotResponse deleteMascot(id)

Delete a mascot

Deletes a specific mascot from the Tactix system using its unique id. This operation permanently removes the mascot record and any direct associations it holds with teams. It should be used with caution, as deleted mascots cannot be restored through the API.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = MascotsApi()
val id : kotlin.String = id_example // kotlin.String | 
try {
    val result : DeleteMascotResponse = apiInstance.deleteMascot(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MascotsApi#deleteMascot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MascotsApi#deleteMascot")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **kotlin.String**|  | |

### Return type

[**DeleteMascotResponse**](DeleteMascotResponse.md)

### Authorization


Configure AppToken:
    ApiClient.apiKey["App-Token"] = ""
    ApiClient.apiKeyPrefix["App-Token"] = ""
Configure AppId:
    ApiClient.apiKey["App-Id"] = ""
    ApiClient.apiKeyPrefix["App-Id"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="listMascots"></a>
# **listMascots**
> ListMascotsResponse listMascots(limit, page)

Get all mascots

Retrieves a paginated list of all mascots available to the authenticated client. Each mascot record contains the name, description, image URL, and timestamps. This endpoint is ideal for displaying mascot lists, searching for existing records, or selecting mascots to associate with teams.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = MascotsApi()
val limit : kotlin.Int = 10 // kotlin.Int | 
val page : kotlin.Int = 1 // kotlin.Int | 
try {
    val result : ListMascotsResponse = apiInstance.listMascots(limit, page)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MascotsApi#listMascots")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MascotsApi#listMascots")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **kotlin.Int**|  | [optional] |
| **page** | **kotlin.Int**|  | [optional] |

### Return type

[**ListMascotsResponse**](ListMascotsResponse.md)

### Authorization


Configure AppToken:
    ApiClient.apiKey["App-Token"] = ""
    ApiClient.apiKeyPrefix["App-Token"] = ""
Configure AppId:
    ApiClient.apiKey["App-Id"] = ""
    ApiClient.apiKeyPrefix["App-Id"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="updateMascot"></a>
# **updateMascot**
> UpdateMascotResponse updateMascot(id, name, description, mascotImage)

Update a mascot

Updates the details of an existing mascot identified by its unique id. This endpoint allows clients to modify a mascot’s name, description, and image, ensuring team branding and contextual information remain accurate and up to date.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = MascotsApi()
val id : kotlin.String = id_example // kotlin.String | 
val name : kotlin.String = name_example // kotlin.String | 
val description : kotlin.String = description_example // kotlin.String | 
val mascotImage : java.io.File = BINARY_DATA_HERE // java.io.File | 
try {
    val result : UpdateMascotResponse = apiInstance.updateMascot(id, name, description, mascotImage)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MascotsApi#updateMascot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MascotsApi#updateMascot")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **kotlin.String**|  | |
| **name** | **kotlin.String**|  | [optional] |
| **description** | **kotlin.String**|  | [optional] |
| **mascotImage** | **java.io.File**|  | [optional] |

### Return type

[**UpdateMascotResponse**](UpdateMascotResponse.md)

### Authorization


Configure AppToken:
    ApiClient.apiKey["App-Token"] = ""
    ApiClient.apiKeyPrefix["App-Token"] = ""
Configure AppId:
    ApiClient.apiKey["App-Id"] = ""
    ApiClient.apiKeyPrefix["App-Id"] = ""

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

