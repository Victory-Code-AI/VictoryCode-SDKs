# MascotApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createMascot**](MascotApi.md#createmascot) | **POST** /api/v1/client/mascots | Create a new mascot |
| [**deleteMascot**](MascotApi.md#deletemascot) | **DELETE** /api/v1/client/mascots/{id} | Delete a mascot |
| [**getMascots**](MascotApi.md#getmascots) | **GET** /api/v1/client/mascots | Get all mascots |
| [**updateMascot**](MascotApi.md#updatemascot) | **PATCH** /api/v1/client/mascots/{id} | Update a mascot |



## createMascot

> SingleMascotResponseDto createMascot(createMascotDto)

Create a new mascot

Creates a new mascot record with a name and description. An optional mascot image can be uploaded as part of the multipart form data.

### Example

```ts
import {
  Configuration,
  MascotApi,
} from '@victorycode/sdk';
import type { CreateMascotRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new MascotApi(config);

  const body = {
    // CreateMascotDto
    createMascotDto: ...,
  } satisfies CreateMascotRequest;

  try {
    const data = await api.createMascot(body);
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
| **createMascotDto** | [CreateMascotDto](CreateMascotDto.md) |  | |

### Return type

[**SingleMascotResponseDto**](SingleMascotResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Mascot created successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteMascot

> DeleteResponseDto deleteMascot(id)

Delete a mascot

Permanently deletes a mascot record from the system.

### Example

```ts
import {
  Configuration,
  MascotApi,
} from '@victorycode/sdk';
import type { DeleteMascotRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new MascotApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies DeleteMascotRequest;

  try {
    const data = await api.deleteMascot(body);
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
| **200** | Mascot deleted successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMascots

> ListMascotPaginatedResponseDto getMascots(limit, page, search)

Get all mascots

Retrieves a paginated list of all mascots. Supports searching by name and pagination through query parameters.

### Example

```ts
import {
  Configuration,
  MascotApi,
} from '@victorycode/sdk';
import type { GetMascotsRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new MascotApi(config);

  const body = {
    // number (optional)
    limit: 8.14,
    // number (optional)
    page: 8.14,
    // string (optional)
    search: search_example,
  } satisfies GetMascotsRequest;

  try {
    const data = await api.getMascots(body);
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

[**ListMascotPaginatedResponseDto**](ListMascotPaginatedResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of mascots retrieved successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateMascot

> SingleMascotResponseDto updateMascot(id, updateMascotDto)

Update a mascot

Updates the details of an existing mascot identified by its ID. Allows updating the name, description, and mascot image.

### Example

```ts
import {
  Configuration,
  MascotApi,
} from '@victorycode/sdk';
import type { UpdateMascotRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new MascotApi(config);

  const body = {
    // string
    id: id_example,
    // UpdateMascotDto
    updateMascotDto: ...,
  } satisfies UpdateMascotRequest;

  try {
    const data = await api.updateMascot(body);
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
| **updateMascotDto** | [UpdateMascotDto](UpdateMascotDto.md) |  | |

### Return type

[**SingleMascotResponseDto**](SingleMascotResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Mascot updated successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **404** |  |  -  |
| **409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

