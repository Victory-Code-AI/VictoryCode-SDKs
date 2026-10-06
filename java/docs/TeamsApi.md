# TeamsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
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
```java
// Import classes:
import com.tactixai.victorycode.sdk.ApiClient;
import com.tactixai.victorycode.sdk.ApiException;
import com.tactixai.victorycode.sdk.Configuration;
import com.tactixai.victorycode.sdk.auth.*;
import com.tactixai.victorycode.sdk.models.*;
import com.tactixai.victorycode.sdk.api.TeamsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://sandbox.api.tactixai.com");
    
    // Configure HTTP bearer authorization: Client-App-Token
    HttpBearerAuth Client-App-Token = (HttpBearerAuth) defaultClient.getAuthentication("Client-App-Token");
    Client-App-Token.setBearerToken("BEARER TOKEN");

    // Configure API key authorization: Client-App-Id
    ApiKeyAuth Client-App-Id = (ApiKeyAuth) defaultClient.getAuthentication("Client-App-Id");
    Client-App-Id.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Client-App-Id.setApiKeyPrefix("Token");

    TeamsApi apiInstance = new TeamsApi(defaultClient);
    CreateTeamDto createTeamDto = new CreateTeamDto(); // CreateTeamDto | 
    try {
      SingleTeamResponseDto result = apiInstance.createTeam(createTeamDto);
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
| **createTeamDto** | [**CreateTeamDto**](CreateTeamDto.md)|  | |

### Return type

[**SingleTeamResponseDto**](SingleTeamResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Team created successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **409** |  |  -  |

<a id="deleteTeam"></a>
# **deleteTeam**
> DeleteResponseDto deleteTeam(id)

Delete a team

Permanently deletes a team record from the system.

### Example
```java
// Import classes:
import com.tactixai.victorycode.sdk.ApiClient;
import com.tactixai.victorycode.sdk.ApiException;
import com.tactixai.victorycode.sdk.Configuration;
import com.tactixai.victorycode.sdk.auth.*;
import com.tactixai.victorycode.sdk.models.*;
import com.tactixai.victorycode.sdk.api.TeamsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://sandbox.api.tactixai.com");
    
    // Configure HTTP bearer authorization: Client-App-Token
    HttpBearerAuth Client-App-Token = (HttpBearerAuth) defaultClient.getAuthentication("Client-App-Token");
    Client-App-Token.setBearerToken("BEARER TOKEN");

    // Configure API key authorization: Client-App-Id
    ApiKeyAuth Client-App-Id = (ApiKeyAuth) defaultClient.getAuthentication("Client-App-Id");
    Client-App-Id.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Client-App-Id.setApiKeyPrefix("Token");

    TeamsApi apiInstance = new TeamsApi(defaultClient);
    String id = "id_example"; // String | 
    try {
      DeleteResponseDto result = apiInstance.deleteTeam(id);
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

[**DeleteResponseDto**](DeleteResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Team deleted successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **404** |  |  -  |

<a id="getTeams"></a>
# **getTeams**
> ListTeamPaginatedResponseDto getTeams(limit, offset, search, state)

Get teams

Retrieves a paginated list of all teams belonging to the client. Supports filters for search, sport, and state.

### Example
```java
// Import classes:
import com.tactixai.victorycode.sdk.ApiClient;
import com.tactixai.victorycode.sdk.ApiException;
import com.tactixai.victorycode.sdk.Configuration;
import com.tactixai.victorycode.sdk.auth.*;
import com.tactixai.victorycode.sdk.models.*;
import com.tactixai.victorycode.sdk.api.TeamsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://sandbox.api.tactixai.com");
    
    // Configure HTTP bearer authorization: Client-App-Token
    HttpBearerAuth Client-App-Token = (HttpBearerAuth) defaultClient.getAuthentication("Client-App-Token");
    Client-App-Token.setBearerToken("BEARER TOKEN");

    // Configure API key authorization: Client-App-Id
    ApiKeyAuth Client-App-Id = (ApiKeyAuth) defaultClient.getAuthentication("Client-App-Id");
    Client-App-Id.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Client-App-Id.setApiKeyPrefix("Token");

    TeamsApi apiInstance = new TeamsApi(defaultClient);
    BigDecimal limit = new BigDecimal("50"); // BigDecimal | The number of results to return per page.
    BigDecimal offset = new BigDecimal("0"); // BigDecimal | The number of results to skip for pagination.
    String search = "search_example"; // String | 
    String state = "state_example"; // String | 
    try {
      ListTeamPaginatedResponseDto result = apiInstance.getTeams(limit, offset, search, state);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamsApi#getTeams");
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
| **limit** | **BigDecimal**| The number of results to return per page. | [optional] [default to 50] |
| **offset** | **BigDecimal**| The number of results to skip for pagination. | [optional] [default to 0] |
| **search** | **String**|  | [optional] |
| **state** | **String**|  | [optional] |

### Return type

[**ListTeamPaginatedResponseDto**](ListTeamPaginatedResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of teams retrieved successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |

<a id="updateTeam"></a>
# **updateTeam**
> SingleTeamResponseDto updateTeam(id, updateTeamDto)

Update a team

Updates the details of an existing team identified by its ID. Allows updating the name, short name, coach, logo, and other details.

### Example
```java
// Import classes:
import com.tactixai.victorycode.sdk.ApiClient;
import com.tactixai.victorycode.sdk.ApiException;
import com.tactixai.victorycode.sdk.Configuration;
import com.tactixai.victorycode.sdk.auth.*;
import com.tactixai.victorycode.sdk.models.*;
import com.tactixai.victorycode.sdk.api.TeamsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://sandbox.api.tactixai.com");
    
    // Configure HTTP bearer authorization: Client-App-Token
    HttpBearerAuth Client-App-Token = (HttpBearerAuth) defaultClient.getAuthentication("Client-App-Token");
    Client-App-Token.setBearerToken("BEARER TOKEN");

    // Configure API key authorization: Client-App-Id
    ApiKeyAuth Client-App-Id = (ApiKeyAuth) defaultClient.getAuthentication("Client-App-Id");
    Client-App-Id.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Client-App-Id.setApiKeyPrefix("Token");

    TeamsApi apiInstance = new TeamsApi(defaultClient);
    String id = "id_example"; // String | 
    UpdateTeamDto updateTeamDto = new UpdateTeamDto(); // UpdateTeamDto | 
    try {
      SingleTeamResponseDto result = apiInstance.updateTeam(id, updateTeamDto);
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
| **updateTeamDto** | [**UpdateTeamDto**](UpdateTeamDto.md)|  | |

### Return type

[**SingleTeamResponseDto**](SingleTeamResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Team updated successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **404** |  |  -  |
| **409** |  |  -  |

