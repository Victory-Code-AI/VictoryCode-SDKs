# MascotsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createMascot**](MascotsApi.md#createmascot) | **POST** /api/v1/client/mascots | Create a new mascot |
| [**deleteMascot**](MascotsApi.md#deletemascot) | **DELETE** /api/v1/client/mascots/{id} | Delete a mascot |
| [**listMascots**](MascotsApi.md#listmascots) | **GET** /api/v1/client/mascots | Get all mascots |
| [**updateMascot**](MascotsApi.md#updatemascot) | **PATCH** /api/v1/client/mascots/{id} | Update a mascot |



## createMascot

> CreateMascotResponse createMascot(name, description, mascotImage)

Create a new mascot

Creates a new mascot record in the Tactix system. Clients can define the mascot’s name, description, and image URL, which can later be associated with one or more teams. This endpoint is typically used when onboarding new teams or setting up school/club branding assets.

### Example

```ts
import {
  Configuration,
  MascotsApi,
} from '@victorycode/sdk';
import type { CreateMascotRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: AppToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AppId
    apiKey: "YOUR API KEY",
  });
  const api = new MascotsApi(config);

  const body = {
    // string
    name: name_example,
    // string
    description: description_example,
    // Blob (optional)
    mascotImage: BINARY_DATA_HERE,
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
| **name** | `string` |  | [Defaults to `undefined`] |
| **description** | `string` |  | [Defaults to `undefined`] |
| **mascotImage** | `Blob` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**CreateMascotResponse**](CreateMascotResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteMascot

> DeleteMascotResponse deleteMascot(id)

Delete a mascot

Deletes a specific mascot from the Tactix system using its unique id. This operation permanently removes the mascot record and any direct associations it holds with teams. It should be used with caution, as deleted mascots cannot be restored through the API.

### Example

```ts
import {
  Configuration,
  MascotsApi,
} from '@victorycode/sdk';
import type { DeleteMascotRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: AppToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AppId
    apiKey: "YOUR API KEY",
  });
  const api = new MascotsApi(config);

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

[**DeleteMascotResponse**](DeleteMascotResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listMascots

> ListMascotsResponse listMascots(limit, page)

Get all mascots

Retrieves a paginated list of all mascots available to the authenticated client. Each mascot record contains the name, description, image URL, and timestamps. This endpoint is ideal for displaying mascot lists, searching for existing records, or selecting mascots to associate with teams.

### Example

```ts
import {
  Configuration,
  MascotsApi,
} from '@victorycode/sdk';
import type { ListMascotsRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: AppToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AppId
    apiKey: "YOUR API KEY",
  });
  const api = new MascotsApi(config);

  const body = {
    // number (optional)
    limit: 10,
    // number (optional)
    page: 1,
  } satisfies ListMascotsRequest;

  try {
    const data = await api.listMascots(body);
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
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |
| **page** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ListMascotsResponse**](ListMascotsResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateMascot

> UpdateMascotResponse updateMascot(id, name, description, mascotImage)

Update a mascot

Updates the details of an existing mascot identified by its unique id. This endpoint allows clients to modify a mascot’s name, description, and image, ensuring team branding and contextual information remain accurate and up to date.

### Example

```ts
import {
  Configuration,
  MascotsApi,
} from '@victorycode/sdk';
import type { UpdateMascotRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: AppToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AppId
    apiKey: "YOUR API KEY",
  });
  const api = new MascotsApi(config);

  const body = {
    // string
    id: id_example,
    // string (optional)
    name: name_example,
    // string (optional)
    description: description_example,
    // Blob (optional)
    mascotImage: BINARY_DATA_HERE,
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
| **name** | `string` |  | [Optional] [Defaults to `undefined`] |
| **description** | `string` |  | [Optional] [Defaults to `undefined`] |
| **mascotImage** | `Blob` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**UpdateMascotResponse**](UpdateMascotResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

