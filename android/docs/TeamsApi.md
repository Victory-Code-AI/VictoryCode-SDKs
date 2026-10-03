# TeamsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createTeam**](TeamsApi.md#createTeam) | **POST** /api/v1/client/teams | Create a new team |
| [**deleteTeam**](TeamsApi.md#deleteTeam) | **DELETE** /api/v1/client/teams/{id} | Delete a team |
| [**getTeams**](TeamsApi.md#getTeams) | **GET** /api/v1/client/teams | Get teams |
| [**updateTeam**](TeamsApi.md#updateTeam) | **PATCH** /api/v1/client/teams/{id} | Update a team |


<a id="createTeam"></a>
# **createTeam**
> SingleTeamResponseDto createTeam(createTeamDto)

Create a new team

Registers a new team in the system, including its name, short name, sport, mascots, classification.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = TeamsApi()
val createTeamDto : CreateTeamDto =  // CreateTeamDto | 
try {
    val result : SingleTeamResponseDto = apiInstance.createTeam(createTeamDto)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TeamsApi#createTeam")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TeamsApi#createTeam")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **createTeamDto** | [**CreateTeamDto**](CreateTeamDto.md)|  | |

### Return type

[**SingleTeamResponseDto**](SingleTeamResponseDto.md)

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

<a id="deleteTeam"></a>
# **deleteTeam**
> DeleteResponseDto deleteTeam(id)

Delete a team

Permanently deletes a team record from the system.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = TeamsApi()
val id : kotlin.String = id_example // kotlin.String | 
try {
    val result : DeleteResponseDto = apiInstance.deleteTeam(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TeamsApi#deleteTeam")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TeamsApi#deleteTeam")
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

<a id="getTeams"></a>
# **getTeams**
> ListTeamPaginatedResponseDto getTeams(limit, offset, search, state)

Get teams

Retrieves a paginated list of all teams belonging to the client. Supports filters for search, sport, and state.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = TeamsApi()
val limit : java.math.BigDecimal = 8.14 // java.math.BigDecimal | The number of results to return per page.
val offset : java.math.BigDecimal = 8.14 // java.math.BigDecimal | The number of results to skip for pagination.
val search : kotlin.String = search_example // kotlin.String | 
val state : kotlin.String = state_example // kotlin.String | 
try {
    val result : ListTeamPaginatedResponseDto = apiInstance.getTeams(limit, offset, search, state)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TeamsApi#getTeams")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TeamsApi#getTeams")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **java.math.BigDecimal**| The number of results to return per page. | [optional] [default to 50] |
| **offset** | **java.math.BigDecimal**| The number of results to skip for pagination. | [optional] [default to 0] |
| **search** | **kotlin.String**|  | [optional] |
| **state** | **kotlin.String**|  | [optional] |

### Return type

[**ListTeamPaginatedResponseDto**](ListTeamPaginatedResponseDto.md)

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

<a id="updateTeam"></a>
# **updateTeam**
> SingleTeamResponseDto updateTeam(id, updateTeamDto)

Update a team

Updates the details of an existing team identified by its ID. Allows updating the name, short name, coach, logo, and other details.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = TeamsApi()
val id : kotlin.String = id_example // kotlin.String | 
val updateTeamDto : UpdateTeamDto =  // UpdateTeamDto | 
try {
    val result : SingleTeamResponseDto = apiInstance.updateTeam(id, updateTeamDto)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TeamsApi#updateTeam")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TeamsApi#updateTeam")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **kotlin.String**|  | |
| **updateTeamDto** | [**UpdateTeamDto**](UpdateTeamDto.md)|  | |

### Return type

[**SingleTeamResponseDto**](SingleTeamResponseDto.md)

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

