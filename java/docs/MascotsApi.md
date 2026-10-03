# MascotsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
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
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.MascotsApi;

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

    MascotsApi apiInstance = new MascotsApi(defaultClient);
    String name = "name_example"; // String | 
    String description = "description_example"; // String | 
    File mascotImage = new File("/path/to/file"); // File | 
    try {
      CreateMascotResponse result = apiInstance.createMascot(name, description, mascotImage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MascotsApi#createMascot");
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
| **description** | **String**|  | |
| **mascotImage** | **File**|  | [optional] |

### Return type

[**CreateMascotResponse**](CreateMascotResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |

<a id="deleteMascot"></a>
# **deleteMascot**
> DeleteMascotResponse deleteMascot(id)

Delete a mascot

Deletes a specific mascot from the Tactix system using its unique id. This operation permanently removes the mascot record and any direct associations it holds with teams. It should be used with caution, as deleted mascots cannot be restored through the API.

### Example
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.MascotsApi;

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

    MascotsApi apiInstance = new MascotsApi(defaultClient);
    String id = "id_example"; // String | 
    try {
      DeleteMascotResponse result = apiInstance.deleteMascot(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MascotsApi#deleteMascot");
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

[**DeleteMascotResponse**](DeleteMascotResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="listMascots"></a>
# **listMascots**
> ListMascotsResponse listMascots(limit, page)

Get all mascots

Retrieves a paginated list of all mascots available to the authenticated client. Each mascot record contains the name, description, image URL, and timestamps. This endpoint is ideal for displaying mascot lists, searching for existing records, or selecting mascots to associate with teams.

### Example
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.MascotsApi;

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

    MascotsApi apiInstance = new MascotsApi(defaultClient);
    Integer limit = 10; // Integer | 
    Integer page = 1; // Integer | 
    try {
      ListMascotsResponse result = apiInstance.listMascots(limit, page);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MascotsApi#listMascots");
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

[**ListMascotsResponse**](ListMascotsResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="updateMascot"></a>
# **updateMascot**
> UpdateMascotResponse updateMascot(id, name, description, mascotImage)

Update a mascot

Updates the details of an existing mascot identified by its unique id. This endpoint allows clients to modify a mascot’s name, description, and image, ensuring team branding and contextual information remain accurate and up to date.

### Example
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.MascotsApi;

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

    MascotsApi apiInstance = new MascotsApi(defaultClient);
    String id = "id_example"; // String | 
    String name = "name_example"; // String | 
    String description = "description_example"; // String | 
    File mascotImage = new File("/path/to/file"); // File | 
    try {
      UpdateMascotResponse result = apiInstance.updateMascot(id, name, description, mascotImage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MascotsApi#updateMascot");
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
| **description** | **String**|  | [optional] |
| **mascotImage** | **File**|  | [optional] |

### Return type

[**UpdateMascotResponse**](UpdateMascotResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

