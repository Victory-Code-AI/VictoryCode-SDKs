# ClassificationsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createClassification**](ClassificationsApi.md#createClassification) | **POST** /api/v1/client/classifications | Create a new classification |
| [**deleteClassification**](ClassificationsApi.md#deleteClassification) | **DELETE** /api/v1/client/classifications/{id} | Delete a classification |
| [**listClassifications**](ClassificationsApi.md#listClassifications) | **GET** /api/v1/client/classifications | Get all classifications |
| [**updateClassification**](ClassificationsApi.md#updateClassification) | **PATCH** /api/v1/client/classifications/{id} | Update a classification |


<a id="createClassification"></a>
# **createClassification**
> CreateClassificationResponse createClassification(createClassificationRequest)

Create a new classification

Creates a new classification record in the Tactix platform. Classifications are used to categorize teams by league, division, or competition level (e.g., “Division 1A”, “Junior Varsity”).

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = ClassificationsApi()
val createClassificationRequest : CreateClassificationRequest = {"name":"Test Classification","description":"This is Test Classification description"} // CreateClassificationRequest | 
try {
    val result : CreateClassificationResponse = apiInstance.createClassification(createClassificationRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClassificationsApi#createClassification")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClassificationsApi#createClassification")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **createClassificationRequest** | [**CreateClassificationRequest**](CreateClassificationRequest.md)|  | |

### Return type

[**CreateClassificationResponse**](CreateClassificationResponse.md)

### Authorization


Configure AppToken:
    ApiClient.apiKey["App-Token"] = ""
    ApiClient.apiKeyPrefix["App-Token"] = ""
Configure AppId:
    ApiClient.apiKey["App-Id"] = ""
    ApiClient.apiKeyPrefix["App-Id"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="deleteClassification"></a>
# **deleteClassification**
> DeleteClassificationResponse deleteClassification(id)

Delete a classification

Deletes a specific classification from the Tactix system using its unique id. This permanently removes the classification and disassociates it from any linked team records.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = ClassificationsApi()
val id : kotlin.String = id_example // kotlin.String | 
try {
    val result : DeleteClassificationResponse = apiInstance.deleteClassification(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClassificationsApi#deleteClassification")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClassificationsApi#deleteClassification")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **kotlin.String**|  | |

### Return type

[**DeleteClassificationResponse**](DeleteClassificationResponse.md)

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

<a id="listClassifications"></a>
# **listClassifications**
> ListClassificationsResponse listClassifications(limit, page)

Get all classifications

Retrieves a paginated list of all classifications available to the authenticated client. Each classification object includes a name, description, and timestamps for creation and modification. This endpoint is typically used to populate dropdowns or filters when creating or updating teams.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = ClassificationsApi()
val limit : kotlin.Int = 10 // kotlin.Int | 
val page : kotlin.Int = 1 // kotlin.Int | 
try {
    val result : ListClassificationsResponse = apiInstance.listClassifications(limit, page)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClassificationsApi#listClassifications")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClassificationsApi#listClassifications")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **kotlin.Int**|  | [optional] |
| **page** | **kotlin.Int**|  | [optional] |

### Return type

[**ListClassificationsResponse**](ListClassificationsResponse.md)

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

<a id="updateClassification"></a>
# **updateClassification**
> UpdateClassificationResponse updateClassification(id, updateClassificationRequest)

Update a classification

Updates an existing classification identified by its unique id. This endpoint allows modification of the classification’s name or description.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = ClassificationsApi()
val id : kotlin.String = id_example // kotlin.String | 
val updateClassificationRequest : UpdateClassificationRequest = {"name":"Testing - Edited","description":"This is Classification description Edited"} // UpdateClassificationRequest | 
try {
    val result : UpdateClassificationResponse = apiInstance.updateClassification(id, updateClassificationRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClassificationsApi#updateClassification")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClassificationsApi#updateClassification")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **kotlin.String**|  | |
| **updateClassificationRequest** | [**UpdateClassificationRequest**](UpdateClassificationRequest.md)|  | |

### Return type

[**UpdateClassificationResponse**](UpdateClassificationResponse.md)

### Authorization


Configure AppToken:
    ApiClient.apiKey["App-Token"] = ""
    ApiClient.apiKeyPrefix["App-Token"] = ""
Configure AppId:
    ApiClient.apiKey["App-Id"] = ""
    ApiClient.apiKeyPrefix["App-Id"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

