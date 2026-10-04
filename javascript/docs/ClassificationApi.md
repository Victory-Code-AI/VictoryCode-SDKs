# ClassificationApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createClassification**](ClassificationApi.md#createclassification) | **POST** /api/v1/client/classifications | Create a new classification |
| [**deleteClassification**](ClassificationApi.md#deleteclassification) | **DELETE** /api/v1/client/classifications/{id} | Delete a classification |
| [**getClassifications**](ClassificationApi.md#getclassifications) | **GET** /api/v1/client/classifications | Get all classifications |
| [**updateClassification**](ClassificationApi.md#updateclassification) | **PATCH** /api/v1/client/classifications/{id} | Update a classification |



## createClassification

> SingleClassificationResponseDto createClassification(createClassificationDto)

Create a new classification

Creates a new classification entry for categorizing teams.

### Example

```ts
import {
  Configuration,
  ClassificationApi,
} from '@victorycode/sdk';
import type { CreateClassificationRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new ClassificationApi(config);

  const body = {
    // CreateClassificationDto
    createClassificationDto: ...,
  } satisfies CreateClassificationRequest;

  try {
    const data = await api.createClassification(body);
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
| **createClassificationDto** | [CreateClassificationDto](CreateClassificationDto.md) |  | |

### Return type

[**SingleClassificationResponseDto**](SingleClassificationResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Classification created successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteClassification

> DeleteResponseDto deleteClassification(id)

Delete a classification

Permanently deletes a team classification from the system.

### Example

```ts
import {
  Configuration,
  ClassificationApi,
} from '@victorycode/sdk';
import type { DeleteClassificationRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new ClassificationApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies DeleteClassificationRequest;

  try {
    const data = await api.deleteClassification(body);
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
| **200** | Classification deleted successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getClassifications

> ListClassificationPaginatedResponseDto getClassifications(limit, page, search)

Get all classifications

Retrieves a paginated list of all team classifications available in the system.

### Example

```ts
import {
  Configuration,
  ClassificationApi,
} from '@victorycode/sdk';
import type { GetClassificationsRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new ClassificationApi(config);

  const body = {
    // number (optional)
    limit: 8.14,
    // number (optional)
    page: 8.14,
    // string (optional)
    search: search_example,
  } satisfies GetClassificationsRequest;

  try {
    const data = await api.getClassifications(body);
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

[**ListClassificationPaginatedResponseDto**](ListClassificationPaginatedResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of classifications retrieved successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateClassification

> SingleClassificationResponseDto updateClassification(id, updateClassificationDto)

Update a classification

Updates an existing team classification entry identified by its ID.

### Example

```ts
import {
  Configuration,
  ClassificationApi,
} from '@victorycode/sdk';
import type { UpdateClassificationRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new ClassificationApi(config);

  const body = {
    // string
    id: id_example,
    // UpdateClassificationDto
    updateClassificationDto: ...,
  } satisfies UpdateClassificationRequest;

  try {
    const data = await api.updateClassification(body);
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
| **updateClassificationDto** | [UpdateClassificationDto](UpdateClassificationDto.md) |  | |

### Return type

[**SingleClassificationResponseDto**](SingleClassificationResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Classification updated successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **404** |  |  -  |
| **409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

