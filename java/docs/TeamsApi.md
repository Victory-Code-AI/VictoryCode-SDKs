# TeamsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
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
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.TeamsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://sandbox.api.tactixai.com");
    
    // Configure API key authorization: AppToken
    ApiKeyAuth AppToken = (ApiKeyAuth) defaultClient.getAuthentication("AppToken");
    AppToken.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //AppToken.setApiKeyPrefix("Token");

    // Configure API key authorization: AppId
    ApiKeyAuth AppId = (ApiKeyAuth) defaultClient.getAuthentication("AppId");
    AppId.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //AppId.setApiKeyPrefix("Token");

    TeamsApi apiInstance = new TeamsApi(defaultClient);
    String name = "name_example"; // String | 
    String sport = "sport_example"; // String | (This can only be one of football,rugby,golf,soccer,nfl)
    String shortName = "shortName_example"; // String | 
    String mascots = "mascots_example"; // String | Array of Mascot IDs (must not be empty)
    String classification = "classification_example"; // String | Classification ID
    File teamLogo = new File("/path/to/file"); // File | 
    try {
      CreateTeamResponse result = apiInstance.createTeam(name, sport, shortName, mascots, classification, teamLogo);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsApi#createTeam");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | **String**|  | |
| **sport** | **String**| (This can only be one of football,rugby,golf,soccer,nfl) | |
| **shortName** | **String**|  | |
| **mascots** | **String**| Array of Mascot IDs (must not be empty) | |
| **classification** | **String**| Classification ID | |
| **teamLogo** | **File**|  | [optional] |

### Return type

[**CreateTeamResponse**](CreateTeamResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |

<a id="deleteTeam"></a>
# **deleteTeam**
> DeleteTeamResponse deleteTeam(id)

Delete a team

Deletes a specific team from the Tactix system using its unique id. This operation permanently removes the team record and its related metadata from the client’s accessible data scope. It should be used with caution, as deleted teams cannot be restored via the API.

### Example
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.TeamsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://sandbox.api.tactixai.com");
    
    // Configure API key authorization: AppToken
    ApiKeyAuth AppToken = (ApiKeyAuth) defaultClient.getAuthentication("AppToken");
    AppToken.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //AppToken.setApiKeyPrefix("Token");

    // Configure API key authorization: AppId
    ApiKeyAuth AppId = (ApiKeyAuth) defaultClient.getAuthentication("AppId");
    AppId.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //AppId.setApiKeyPrefix("Token");

    TeamsApi apiInstance = new TeamsApi(defaultClient);
    String id = "id_example"; // String | 
    try {
      DeleteTeamResponse result = apiInstance.deleteTeam(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsApi#deleteTeam");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | |

### Return type

[**DeleteTeamResponse**](DeleteTeamResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="listTeams"></a>
# **listTeams**
> String listTeams(limit, page)

Get teams

Retrieves a paginated list of all teams available to the authenticated client. Each team object includes its name, short name, sport type, associated mascots, classification details, logo, and timestamps. This endpoint is typically used for team directories, selection lists, or administrative dashboards that require viewing multiple teams at once.

### Example
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.TeamsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://sandbox.api.tactixai.com");
    
    // Configure API key authorization: AppToken
    ApiKeyAuth AppToken = (ApiKeyAuth) defaultClient.getAuthentication("AppToken");
    AppToken.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //AppToken.setApiKeyPrefix("Token");

    // Configure API key authorization: AppId
    ApiKeyAuth AppId = (ApiKeyAuth) defaultClient.getAuthentication("AppId");
    AppId.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //AppId.setApiKeyPrefix("Token");

    TeamsApi apiInstance = new TeamsApi(defaultClient);
    Integer limit = 10; // Integer | 
    Integer page = 1; // Integer | 
    try {
      String result = apiInstance.listTeams(limit, page);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsApi#listTeams");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **limit** | **Integer**|  | [optional] |
| **page** | **Integer**|  | [optional] |

### Return type

**String**

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="updateTeam"></a>
# **updateTeam**
> String updateTeam(id, name, sport, shortName, teamLogo, mascots, classification)

Update a team

Updates the information of an existing team identified by its unique id. This endpoint allows clients to modify team attributes such as name, short name, sport type, classification, mascots, coach, or logo. Upon successful update, the response returns the updated team object and a confirmation message.

### Example
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.TeamsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://sandbox.api.tactixai.com");
    
    // Configure API key authorization: AppToken
    ApiKeyAuth AppToken = (ApiKeyAuth) defaultClient.getAuthentication("AppToken");
    AppToken.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //AppToken.setApiKeyPrefix("Token");

    // Configure API key authorization: AppId
    ApiKeyAuth AppId = (ApiKeyAuth) defaultClient.getAuthentication("AppId");
    AppId.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //AppId.setApiKeyPrefix("Token");

    TeamsApi apiInstance = new TeamsApi(defaultClient);
    String id = "id_example"; // String | 
    String name = "name_example"; // String | 
    String sport = "sport_example"; // String | (This can only be one of football,rugby,golf,soccer,nfl)
    String shortName = "shortName_example"; // String | 
    File teamLogo = new File("/path/to/file"); // File | 
    String mascots = "mascots_example"; // String | Array of Mascot IDs (must not be empty)
    String classification = "classification_example"; // String | Classification ID
    try {
      String result = apiInstance.updateTeam(id, name, sport, shortName, teamLogo, mascots, classification);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsApi#updateTeam");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | |
| **name** | **String**|  | [optional] |
| **sport** | **String**| (This can only be one of football,rugby,golf,soccer,nfl) | [optional] |
| **shortName** | **String**|  | [optional] |
| **teamLogo** | **File**|  | [optional] |
| **mascots** | **String**| Array of Mascot IDs (must not be empty) | [optional] |
| **classification** | **String**| Classification ID | [optional] |

### Return type

**String**

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

