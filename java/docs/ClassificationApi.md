# ClassificationApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
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
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.ClassificationApi;

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

    ClassificationApi apiInstance = new ClassificationApi(defaultClient);
    CreateClassificationDto createClassificationDto = new CreateClassificationDto(); // CreateClassificationDto | 
    try {
      SingleClassificationResponseDto result = apiInstance.createClassification(createClassificationDto);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ClassificationApi#createClassification");
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
| **createClassificationDto** | [**CreateClassificationDto**](CreateClassificationDto.md)|  | |

### Return type

[**SingleClassificationResponseDto**](SingleClassificationResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Classification created successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **409** |  |  -  |

<a id="deleteClassification"></a>
# **deleteClassification**
> DeleteResponseDto deleteClassification(id)

Delete a classification

Permanently deletes a team classification from the system.

### Example
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.ClassificationApi;

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

    ClassificationApi apiInstance = new ClassificationApi(defaultClient);
    String id = "id_example"; // String | 
    try {
      DeleteResponseDto result = apiInstance.deleteClassification(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ClassificationApi#deleteClassification");
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
| **200** | Classification deleted successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **404** |  |  -  |

<a id="getClassifications"></a>
# **getClassifications**
> ListClassificationPaginatedResponseDto getClassifications(limit, page, search)

Get all classifications

Retrieves a paginated list of all team classifications available in the system.

### Example
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.ClassificationApi;

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

    ClassificationApi apiInstance = new ClassificationApi(defaultClient);
    BigDecimal limit = new BigDecimal("10"); // BigDecimal | 
    BigDecimal page = new BigDecimal("1"); // BigDecimal | 
    String search = "search_example"; // String | 
    try {
      ListClassificationPaginatedResponseDto result = apiInstance.getClassifications(limit, page, search);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ClassificationApi#getClassifications");
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
| **limit** | **BigDecimal**|  | [optional] [default to 10] |
| **page** | **BigDecimal**|  | [optional] [default to 1] |
| **search** | **String**|  | [optional] |

### Return type

[**ListClassificationPaginatedResponseDto**](ListClassificationPaginatedResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of classifications retrieved successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |

<a id="updateClassification"></a>
# **updateClassification**
> SingleClassificationResponseDto updateClassification(id, updateClassificationDto)

Update a classification

Updates an existing team classification entry identified by its ID.

### Example
```java
// Import classes:
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.ApiException;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.auth.*;
import ai.victorycode.sdk.models.*;
import ai.victorycode.sdk.api.ClassificationApi;

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

    ClassificationApi apiInstance = new ClassificationApi(defaultClient);
    String id = "id_example"; // String | 
    UpdateClassificationDto updateClassificationDto = new UpdateClassificationDto(); // UpdateClassificationDto | 
    try {
      SingleClassificationResponseDto result = apiInstance.updateClassification(id, updateClassificationDto);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ClassificationApi#updateClassification");
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
| **updateClassificationDto** | [**UpdateClassificationDto**](UpdateClassificationDto.md)|  | |

### Return type

[**SingleClassificationResponseDto**](SingleClassificationResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Classification updated successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **404** |  |  -  |
| **409** |  |  -  |

