# VenueApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createVenue**](VenueApi.md#createVenue) | **POST** /api/v1/client/venue | Create a new venue |
| [**deleteVenue**](VenueApi.md#deleteVenue) | **DELETE** /api/v1/client/venue/{id} | Delete a venue |
| [**getVenues**](VenueApi.md#getVenues) | **GET** /api/v1/client/venues | Get all venues |
| [**updateVenue**](VenueApi.md#updateVenue) | **PATCH** /api/v1/client/venue/{id} | Update a venue |


<a id="createVenue"></a>
# **createVenue**
> SingleVenueResponseDto createVenue(createVenueDto)

Create a new venue

Registers a new venue where games are held, including details about the venue name and location.

### Example
```java
// Import classes:
import com.tactixai.victorycode.sdk.ApiClient;
import com.tactixai.victorycode.sdk.ApiException;
import com.tactixai.victorycode.sdk.Configuration;
import com.tactixai.victorycode.sdk.auth.*;
import com.tactixai.victorycode.sdk.models.*;
import com.tactixai.victorycode.sdk.api.VenueApi;

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

    VenueApi apiInstance = new VenueApi(defaultClient);
    CreateVenueDto createVenueDto = new CreateVenueDto(); // CreateVenueDto | 
    try {
      SingleVenueResponseDto result = apiInstance.createVenue(createVenueDto);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling VenueApi#createVenue");
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
| **createVenueDto** | [**CreateVenueDto**](CreateVenueDto.md)|  | |

### Return type

[**SingleVenueResponseDto**](SingleVenueResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Venue created successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **409** |  |  -  |

<a id="deleteVenue"></a>
# **deleteVenue**
> DeleteResponseDto deleteVenue(id)

Delete a venue

Permanently removes a venue registration from the system.

### Example
```java
// Import classes:
import com.tactixai.victorycode.sdk.ApiClient;
import com.tactixai.victorycode.sdk.ApiException;
import com.tactixai.victorycode.sdk.Configuration;
import com.tactixai.victorycode.sdk.auth.*;
import com.tactixai.victorycode.sdk.models.*;
import com.tactixai.victorycode.sdk.api.VenueApi;

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

    VenueApi apiInstance = new VenueApi(defaultClient);
    String id = "id_example"; // String | 
    try {
      DeleteResponseDto result = apiInstance.deleteVenue(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling VenueApi#deleteVenue");
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
| **200** | Venue deleted successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **404** |  |  -  |

<a id="getVenues"></a>
# **getVenues**
> ListVenuePaginatedResponseDto getVenues(limit, page, search)

Get all venues

Retrieves a paginated list of all venues where sports events or games are conducted.

### Example
```java
// Import classes:
import com.tactixai.victorycode.sdk.ApiClient;
import com.tactixai.victorycode.sdk.ApiException;
import com.tactixai.victorycode.sdk.Configuration;
import com.tactixai.victorycode.sdk.auth.*;
import com.tactixai.victorycode.sdk.models.*;
import com.tactixai.victorycode.sdk.api.VenueApi;

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

    VenueApi apiInstance = new VenueApi(defaultClient);
    BigDecimal limit = new BigDecimal("10"); // BigDecimal | 
    BigDecimal page = new BigDecimal("1"); // BigDecimal | 
    String search = "search_example"; // String | 
    try {
      ListVenuePaginatedResponseDto result = apiInstance.getVenues(limit, page, search);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling VenueApi#getVenues");
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

[**ListVenuePaginatedResponseDto**](ListVenuePaginatedResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of venues retrieved successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |

<a id="updateVenue"></a>
# **updateVenue**
> SingleVenueResponseDto updateVenue(id, updateVenueDto)

Update a venue

Updates the information of an existing venue currently registered in the system.

### Example
```java
// Import classes:
import com.tactixai.victorycode.sdk.ApiClient;
import com.tactixai.victorycode.sdk.ApiException;
import com.tactixai.victorycode.sdk.Configuration;
import com.tactixai.victorycode.sdk.auth.*;
import com.tactixai.victorycode.sdk.models.*;
import com.tactixai.victorycode.sdk.api.VenueApi;

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

    VenueApi apiInstance = new VenueApi(defaultClient);
    String id = "id_example"; // String | 
    UpdateVenueDto updateVenueDto = new UpdateVenueDto(); // UpdateVenueDto | 
    try {
      SingleVenueResponseDto result = apiInstance.updateVenue(id, updateVenueDto);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling VenueApi#updateVenue");
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
| **updateVenueDto** | [**UpdateVenueDto**](UpdateVenueDto.md)|  | |

### Return type

[**SingleVenueResponseDto**](SingleVenueResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Venue updated successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **404** |  |  -  |
| **409** |  |  -  |

