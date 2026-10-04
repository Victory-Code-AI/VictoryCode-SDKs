# VenueApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createVenue**](VenueApi.md#createvenue) | **POST** /api/v1/client/venue | Create a new venue |
| [**deleteVenue**](VenueApi.md#deletevenue) | **DELETE** /api/v1/client/venue/{id} | Delete a venue |
| [**getVenues**](VenueApi.md#getvenues) | **GET** /api/v1/client/venues | Get all venues |
| [**updateVenue**](VenueApi.md#updatevenue) | **PATCH** /api/v1/client/venue/{id} | Update a venue |



## createVenue

> SingleVenueResponseDto createVenue(createVenueDto)

Create a new venue

Registers a new venue where games are held, including details about the venue name and location.

### Example

```ts
import {
  Configuration,
  VenueApi,
} from '@victorycode/sdk';
import type { CreateVenueRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new VenueApi(config);

  const body = {
    // CreateVenueDto
    createVenueDto: ...,
  } satisfies CreateVenueRequest;

  try {
    const data = await api.createVenue(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createVenueDto** | [CreateVenueDto](CreateVenueDto.md) |  | |

### Return type

[**SingleVenueResponseDto**](SingleVenueResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Venue created successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteVenue

> DeleteResponseDto deleteVenue(id)

Delete a venue

Permanently removes a venue registration from the system.

### Example

```ts
import {
  Configuration,
  VenueApi,
} from '@victorycode/sdk';
import type { DeleteVenueRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new VenueApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies DeleteVenueRequest;

  try {
    const data = await api.deleteVenue(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DeleteResponseDto**](DeleteResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Venue deleted successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVenues

> ListVenuePaginatedResponseDto getVenues(limit, page, search)

Get all venues

Retrieves a paginated list of all venues where sports events or games are conducted.

### Example

```ts
import {
  Configuration,
  VenueApi,
} from '@victorycode/sdk';
import type { GetVenuesRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new VenueApi(config);

  const body = {
    // number (optional)
    limit: 8.14,
    // number (optional)
    page: 8.14,
    // string (optional)
    search: search_example,
  } satisfies GetVenuesRequest;

  try {
    const data = await api.getVenues(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **limit** | `number` |  | [Optional] [Defaults to `10`] |
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **search** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ListVenuePaginatedResponseDto**](ListVenuePaginatedResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of venues retrieved successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateVenue

> SingleVenueResponseDto updateVenue(id, updateVenueDto)

Update a venue

Updates the information of an existing venue currently registered in the system.

### Example

```ts
import {
  Configuration,
  VenueApi,
} from '@victorycode/sdk';
import type { UpdateVenueRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new VenueApi(config);

  const body = {
    // string
    id: id_example,
    // UpdateVenueDto
    updateVenueDto: ...,
  } satisfies UpdateVenueRequest;

  try {
    const data = await api.updateVenue(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |
| **updateVenueDto** | [UpdateVenueDto](UpdateVenueDto.md) |  | |

### Return type

[**SingleVenueResponseDto**](SingleVenueResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Venue updated successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **404** |  |  -  |
| **409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

