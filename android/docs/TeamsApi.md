# TeamsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createTeam**](TeamsApi.md#createTeam) | **POST** /api/v1/client/teams | Create a new team |
| [**deleteTeam**](TeamsApi.md#deleteTeam) | **DELETE** /api/v1/client/teams/{id} | Delete a team |
| [**listTeams**](TeamsApi.md#listTeams) | **GET** /api/v1/client/teams | Get teams |
| [**updateTeam**](TeamsApi.md#updateTeam) | **PATCH** /api/v1/client/teams/{id} | Update a team |


<a id="createTeam"></a>
# **createTeam**
> CreateTeamResponse createTeam(name, sport, shortName, mascots, classification, teamLogo)

Create a new team

Creates a new team record in the Tactix system. This endpoint allows clients to define a new team with key details such as name, short name, sport type, classification, mascot(s), and logo. Once created, the team can be referenced in other modules such as Games, Plays, or Game Recaps.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = TeamsApi()
val name : kotlin.String = name_example // kotlin.String | 
val sport : kotlin.String = sport_example // kotlin.String | (This can only be one of football,rugby,golf,soccer,nfl)
val shortName : kotlin.String = shortName_example // kotlin.String | 
val mascots : kotlin.String = mascots_example // kotlin.String | Array of Mascot IDs (must not be empty)
val classification : kotlin.String = classification_example // kotlin.String | Classification ID
val teamLogo : java.io.File = BINARY_DATA_HERE // java.io.File | 
try {
    val result : CreateTeamResponse = apiInstance.createTeam(name, sport, shortName, mascots, classification, teamLogo)
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
| **name** | **kotlin.String**|  | |
| **sport** | **kotlin.String**| (This can only be one of football,rugby,golf,soccer,nfl) | |
| **shortName** | **kotlin.String**|  | |
| **mascots** | **kotlin.String**| Array of Mascot IDs (must not be empty) | |
| **classification** | **kotlin.String**| Classification ID | |
| **teamLogo** | **java.io.File**|  | [optional] |

### Return type

[**CreateTeamResponse**](CreateTeamResponse.md)

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

<a id="deleteTeam"></a>
# **deleteTeam**
> DeleteTeamResponse deleteTeam(id)

Delete a team

Deletes a specific team from the Tactix system using its unique id. This operation permanently removes the team record and its related metadata from the client’s accessible data scope. It should be used with caution, as deleted teams cannot be restored via the API.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = TeamsApi()
val id : kotlin.String = id_example // kotlin.String | 
try {
    val result : DeleteTeamResponse = apiInstance.deleteTeam(id)
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

[**DeleteTeamResponse**](DeleteTeamResponse.md)

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

<a id="listTeams"></a>
# **listTeams**
> kotlin.String listTeams(limit, page)

Get teams

Retrieves a paginated list of all teams available to the authenticated client. Each team object includes its name, short name, sport type, associated mascots, classification details, logo, and timestamps. This endpoint is typically used for team directories, selection lists, or administrative dashboards that require viewing multiple teams at once.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = TeamsApi()
val limit : kotlin.Int = 10 // kotlin.Int | 
val page : kotlin.Int = 1 // kotlin.Int | 
try {
    val result : kotlin.String = apiInstance.listTeams(limit, page)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TeamsApi#listTeams")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TeamsApi#listTeams")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **kotlin.Int**|  | [optional] |
| **page** | **kotlin.Int**|  | [optional] |

### Return type

**kotlin.String**

### Authorization


Configure AppToken:
    ApiClient.apiKey["App-Token"] = ""
    ApiClient.apiKeyPrefix["App-Token"] = ""
Configure AppId:
    ApiClient.apiKey["App-Id"] = ""
    ApiClient.apiKeyPrefix["App-Id"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

<a id="updateTeam"></a>
# **updateTeam**
> kotlin.String updateTeam(id, name, sport, shortName, teamLogo, mascots, classification)

Update a team

Updates the information of an existing team identified by its unique id. This endpoint allows clients to modify team attributes such as name, short name, sport type, classification, mascots, coach, or logo. Upon successful update, the response returns the updated team object and a confirmation message.

### Example
```kotlin
// Import classes:
//import ai.victorycode.sdk.infrastructure.*
//import ai.victorycode.sdk.models.*

val apiInstance = TeamsApi()
val id : kotlin.String = id_example // kotlin.String | 
val name : kotlin.String = name_example // kotlin.String | 
val sport : kotlin.String = sport_example // kotlin.String | (This can only be one of football,rugby,golf,soccer,nfl)
val shortName : kotlin.String = shortName_example // kotlin.String | 
val teamLogo : java.io.File = BINARY_DATA_HERE // java.io.File | 
val mascots : kotlin.String = mascots_example // kotlin.String | Array of Mascot IDs (must not be empty)
val classification : kotlin.String = classification_example // kotlin.String | Classification ID
try {
    val result : kotlin.String = apiInstance.updateTeam(id, name, sport, shortName, teamLogo, mascots, classification)
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
| **name** | **kotlin.String**|  | [optional] |
| **sport** | **kotlin.String**| (This can only be one of football,rugby,golf,soccer,nfl) | [optional] |
| **shortName** | **kotlin.String**|  | [optional] |
| **teamLogo** | **java.io.File**|  | [optional] |
| **mascots** | **kotlin.String**| Array of Mascot IDs (must not be empty) | [optional] |
| **classification** | **kotlin.String**| Classification ID | [optional] |

### Return type

**kotlin.String**

### Authorization


Configure AppToken:
    ApiClient.apiKey["App-Token"] = ""
    ApiClient.apiKeyPrefix["App-Token"] = ""
Configure AppId:
    ApiClient.apiKey["App-Id"] = ""
    ApiClient.apiKeyPrefix["App-Id"] = ""

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain

