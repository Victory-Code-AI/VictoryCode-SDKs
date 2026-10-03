# ClassificationsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
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
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.ClassificationsApi;

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

    ClassificationsApi apiInstance = new ClassificationsApi(defaultClient);
    CreateClassificationRequest createClassificationRequest = new CreateClassificationRequest(); // CreateClassificationRequest | 
    try {
      CreateClassificationResponse result = apiInstance.createClassification(createClassificationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ClassificationsApi#createClassification");
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
| **createClassificationRequest** | [**CreateClassificationRequest**](CreateClassificationRequest.md)|  | |

### Return type

[**CreateClassificationResponse**](CreateClassificationResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |

<a id="deleteClassification"></a>
# **deleteClassification**
> DeleteClassificationResponse deleteClassification(id)

Delete a classification

Deletes a specific classification from the Tactix system using its unique id. This permanently removes the classification and disassociates it from any linked team records.

### Example
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.ClassificationsApi;

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

    ClassificationsApi apiInstance = new ClassificationsApi(defaultClient);
    String id = "id_example"; // String | 
    try {
      DeleteClassificationResponse result = apiInstance.deleteClassification(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ClassificationsApi#deleteClassification");
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

[**DeleteClassificationResponse**](DeleteClassificationResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="listClassifications"></a>
# **listClassifications**
> ListClassificationsResponse listClassifications(limit, page)

Get all classifications

Retrieves a paginated list of all classifications available to the authenticated client. Each classification object includes a name, description, and timestamps for creation and modification. This endpoint is typically used to populate dropdowns or filters when creating or updating teams.

### Example
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.ClassificationsApi;

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

    ClassificationsApi apiInstance = new ClassificationsApi(defaultClient);
    Integer limit = 10; // Integer | 
    Integer page = 1; // Integer | 
    try {
      ListClassificationsResponse result = apiInstance.listClassifications(limit, page);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ClassificationsApi#listClassifications");
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

[**ListClassificationsResponse**](ListClassificationsResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="updateClassification"></a>
# **updateClassification**
> UpdateClassificationResponse updateClassification(id, updateClassificationRequest)

Update a classification

Updates an existing classification identified by its unique id. This endpoint allows modification of the classification’s name or description.

### Example
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.ClassificationsApi;

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

    ClassificationsApi apiInstance = new ClassificationsApi(defaultClient);
    String id = "id_example"; // String | 
    UpdateClassificationRequest updateClassificationRequest = new UpdateClassificationRequest(); // UpdateClassificationRequest | 
    try {
      UpdateClassificationResponse result = apiInstance.updateClassification(id, updateClassificationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ClassificationsApi#updateClassification");
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
| **updateClassificationRequest** | [**UpdateClassificationRequest**](UpdateClassificationRequest.md)|  | |

### Return type

[**UpdateClassificationResponse**](UpdateClassificationResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

