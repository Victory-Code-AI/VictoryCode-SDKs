# MascotApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createMascot**](MascotApi.md#createMascot) | **POST** /api/v1/client/mascots | Create a new mascot |
| [**deleteMascot**](MascotApi.md#deleteMascot) | **DELETE** /api/v1/client/mascots/{id} | Delete a mascot |
| [**getMascots**](MascotApi.md#getMascots) | **GET** /api/v1/client/mascots | Get all mascots |
| [**updateMascot**](MascotApi.md#updateMascot) | **PATCH** /api/v1/client/mascots/{id} | Update a mascot |


<a id="createMascot"></a>
# **createMascot**
> SingleMascotResponseDto createMascot(createMascotDto)

Create a new mascot

Creates a new mascot record with a name and description. An optional mascot image can be uploaded as part of the multipart form data.

### Example
```java
// Import classes:
import com.tactixai.victorycode.sdk.ApiClient;
import com.tactixai.victorycode.sdk.ApiException;
import com.tactixai.victorycode.sdk.Configuration;
import com.tactixai.victorycode.sdk.auth.*;
import com.tactixai.victorycode.sdk.models.*;
import com.tactixai.victorycode.sdk.api.MascotApi;

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

    MascotApi apiInstance = new MascotApi(defaultClient);
    CreateMascotDto createMascotDto = new CreateMascotDto(); // CreateMascotDto | 
    try {
      SingleMascotResponseDto result = apiInstance.createMascot(createMascotDto);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MascotApi#createMascot");
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
| **createMascotDto** | [**CreateMascotDto**](CreateMascotDto.md)|  | |

### Return type

[**SingleMascotResponseDto**](SingleMascotResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Mascot created successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **409** |  |  -  |

<a id="deleteMascot"></a>
# **deleteMascot**
> DeleteResponseDto deleteMascot(id)

Delete a mascot

Permanently deletes a mascot record from the system.

### Example
```java
// Import classes:
import com.tactixai.victorycode.sdk.ApiClient;
import com.tactixai.victorycode.sdk.ApiException;
import com.tactixai.victorycode.sdk.Configuration;
import com.tactixai.victorycode.sdk.auth.*;
import com.tactixai.victorycode.sdk.models.*;
import com.tactixai.victorycode.sdk.api.MascotApi;

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

    MascotApi apiInstance = new MascotApi(defaultClient);
    String id = "id_example"; // String | 
    try {
      DeleteResponseDto result = apiInstance.deleteMascot(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MascotApi#deleteMascot");
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
| **200** | Mascot deleted successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **404** |  |  -  |

<a id="getMascots"></a>
# **getMascots**
> ListMascotPaginatedResponseDto getMascots(limit, page, search)

Get all mascots

Retrieves a paginated list of all mascots. Supports searching by name and pagination through query parameters.

### Example
```java
// Import classes:
import com.tactixai.victorycode.sdk.ApiClient;
import com.tactixai.victorycode.sdk.ApiException;
import com.tactixai.victorycode.sdk.Configuration;
import com.tactixai.victorycode.sdk.auth.*;
import com.tactixai.victorycode.sdk.models.*;
import com.tactixai.victorycode.sdk.api.MascotApi;

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

    MascotApi apiInstance = new MascotApi(defaultClient);
    BigDecimal limit = new BigDecimal("10"); // BigDecimal | 
    BigDecimal page = new BigDecimal("1"); // BigDecimal | 
    String search = "search_example"; // String | 
    try {
      ListMascotPaginatedResponseDto result = apiInstance.getMascots(limit, page, search);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MascotApi#getMascots");
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

[**ListMascotPaginatedResponseDto**](ListMascotPaginatedResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of mascots retrieved successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |

<a id="updateMascot"></a>
# **updateMascot**
> SingleMascotResponseDto updateMascot(id, updateMascotDto)

Update a mascot

Updates the details of an existing mascot identified by its ID. Allows updating the name, description, and mascot image.

### Example
```java
// Import classes:
import com.tactixai.victorycode.sdk.ApiClient;
import com.tactixai.victorycode.sdk.ApiException;
import com.tactixai.victorycode.sdk.Configuration;
import com.tactixai.victorycode.sdk.auth.*;
import com.tactixai.victorycode.sdk.models.*;
import com.tactixai.victorycode.sdk.api.MascotApi;

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

    MascotApi apiInstance = new MascotApi(defaultClient);
    String id = "id_example"; // String | 
    UpdateMascotDto updateMascotDto = new UpdateMascotDto(); // UpdateMascotDto | 
    try {
      SingleMascotResponseDto result = apiInstance.updateMascot(id, updateMascotDto);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MascotApi#updateMascot");
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
| **updateMascotDto** | [**UpdateMascotDto**](UpdateMascotDto.md)|  | |

### Return type

[**SingleMascotResponseDto**](SingleMascotResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Mascot updated successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **404** |  |  -  |
| **409** |  |  -  |

