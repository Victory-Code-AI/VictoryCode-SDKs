# ClassificationApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createClassification**](ClassificationApi.md#createClassification) | **POST** /api/v1/client/classifications | Create a new classification |
| [**deleteClassification**](ClassificationApi.md#deleteClassification) | **DELETE** /api/v1/client/classifications/{id} | Delete a classification |
| [**getClassifications**](ClassificationApi.md#getClassifications) | **GET** /api/v1/client/classifications | Get all classifications |
| [**updateClassification**](ClassificationApi.md#updateClassification) | **PATCH** /api/v1/client/classifications/{id} | Update a classification |


<a id="createClassification"></a>
# **createClassification**
> SingleClassificationResponseDto createClassification(createClassificationDto)

Create a new classification

Creates a new classification entry for categorizing teams.

### Example
```kotlin
// Import classes:
//import com.tactixai.victorycode.sdk.infrastructure.*
//import com.tactixai.victorycode.sdk.models.*

val apiInstance = ClassificationApi()
val createClassificationDto : CreateClassificationDto =  // CreateClassificationDto | 
try {
    val result : SingleClassificationResponseDto = apiInstance.createClassification(createClassificationDto)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClassificationApi#createClassification")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClassificationApi#createClassification")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **createClassificationDto** | [**CreateClassificationDto**](CreateClassificationDto.md)|  | |

### Return type

[**SingleClassificationResponseDto**](SingleClassificationResponseDto.md)

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

<a id="deleteClassification"></a>
# **deleteClassification**
> DeleteResponseDto deleteClassification(id)

Delete a classification

Permanently deletes a team classification from the system.

### Example
```kotlin
// Import classes:
//import com.tactixai.victorycode.sdk.infrastructure.*
//import com.tactixai.victorycode.sdk.models.*

val apiInstance = ClassificationApi()
val id : kotlin.String = id_example // kotlin.String | 
try {
    val result : DeleteResponseDto = apiInstance.deleteClassification(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClassificationApi#deleteClassification")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClassificationApi#deleteClassification")
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

<a id="getClassifications"></a>
# **getClassifications**
> ListClassificationPaginatedResponseDto getClassifications(limit, page, search)

Get all classifications

Retrieves a paginated list of all team classifications available in the system.

### Example
```kotlin
// Import classes:
//import com.tactixai.victorycode.sdk.infrastructure.*
//import com.tactixai.victorycode.sdk.models.*

val apiInstance = ClassificationApi()
val limit : java.math.BigDecimal = 8.14 // java.math.BigDecimal | 
val page : java.math.BigDecimal = 8.14 // java.math.BigDecimal | 
val search : kotlin.String = search_example // kotlin.String | 
try {
    val result : ListClassificationPaginatedResponseDto = apiInstance.getClassifications(limit, page, search)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClassificationApi#getClassifications")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClassificationApi#getClassifications")
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

[**ListClassificationPaginatedResponseDto**](ListClassificationPaginatedResponseDto.md)

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

<a id="updateClassification"></a>
# **updateClassification**
> SingleClassificationResponseDto updateClassification(id, updateClassificationDto)

Update a classification

Updates an existing team classification entry identified by its ID.

### Example
```kotlin
// Import classes:
//import com.tactixai.victorycode.sdk.infrastructure.*
//import com.tactixai.victorycode.sdk.models.*

val apiInstance = ClassificationApi()
val id : kotlin.String = id_example // kotlin.String | 
val updateClassificationDto : UpdateClassificationDto =  // UpdateClassificationDto | 
try {
    val result : SingleClassificationResponseDto = apiInstance.updateClassification(id, updateClassificationDto)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClassificationApi#updateClassification")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClassificationApi#updateClassification")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **kotlin.String**|  | |
| **updateClassificationDto** | [**UpdateClassificationDto**](UpdateClassificationDto.md)|  | |

### Return type

[**SingleClassificationResponseDto**](SingleClassificationResponseDto.md)

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

