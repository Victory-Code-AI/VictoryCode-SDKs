# ClassificationsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createClassification**](ClassificationsApi.md#createclassificationoperation) | **POST** /api/v1/client/classifications | Create a new classification |
| [**deleteClassification**](ClassificationsApi.md#deleteclassification) | **DELETE** /api/v1/client/classifications/{id} | Delete a classification |
| [**listClassifications**](ClassificationsApi.md#listclassifications) | **GET** /api/v1/client/classifications | Get all classifications |
| [**updateClassification**](ClassificationsApi.md#updateclassificationoperation) | **PATCH** /api/v1/client/classifications/{id} | Update a classification |



## createClassification

> CreateClassificationResponse createClassification(createClassificationRequest)

Create a new classification

Creates a new classification record in the Tactix platform. Classifications are used to categorize teams by league, division, or competition level (e.g., “Division 1A”, “Junior Varsity”).

### Example

```ts
import {
  Configuration,
  ClassificationsApi,
} from '@victorycode/sdk';
import type { CreateClassificationOperationRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: AppToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AppId
    apiKey: "YOUR API KEY",
  });
  const api = new ClassificationsApi(config);

  const body = {
    // CreateClassificationRequest
    createClassificationRequest: {"name":"Test Classification","description":"This is Test Classification description"},
  } satisfies CreateClassificationOperationRequest;

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
| **createClassificationRequest** | [CreateClassificationRequest](CreateClassificationRequest.md) |  | |

### Return type

[**CreateClassificationResponse**](CreateClassificationResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteClassification

> DeleteClassificationResponse deleteClassification(id)

Delete a classification

Deletes a specific classification from the Tactix system using its unique id. This permanently removes the classification and disassociates it from any linked team records.

### Example

```ts
import {
  Configuration,
  ClassificationsApi,
} from '@victorycode/sdk';
import type { DeleteClassificationRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: AppToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AppId
    apiKey: "YOUR API KEY",
  });
  const api = new ClassificationsApi(config);

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

[**DeleteClassificationResponse**](DeleteClassificationResponse.md)

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


## listClassifications

> ListClassificationsResponse listClassifications(limit, page)

Get all classifications

Retrieves a paginated list of all classifications available to the authenticated client. Each classification object includes a name, description, and timestamps for creation and modification. This endpoint is typically used to populate dropdowns or filters when creating or updating teams.

### Example

```ts
import {
  Configuration,
  ClassificationsApi,
} from '@victorycode/sdk';
import type { ListClassificationsRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: AppToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AppId
    apiKey: "YOUR API KEY",
  });
  const api = new ClassificationsApi(config);

  const body = {
    // number (optional)
    limit: 10,
    // number (optional)
    page: 1,
  } satisfies ListClassificationsRequest;

  try {
    const data = await api.listClassifications(body);
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

[**ListClassificationsResponse**](ListClassificationsResponse.md)

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


## updateClassification

> UpdateClassificationResponse updateClassification(id, updateClassificationRequest)

Update a classification

Updates an existing classification identified by its unique id. This endpoint allows modification of the classification’s name or description.

### Example

```ts
import {
  Configuration,
  ClassificationsApi,
} from '@victorycode/sdk';
import type { UpdateClassificationOperationRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: AppToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AppId
    apiKey: "YOUR API KEY",
  });
  const api = new ClassificationsApi(config);

  const body = {
    // string
    id: id_example,
    // UpdateClassificationRequest
    updateClassificationRequest: {"name":"Testing - Edited","description":"This is Classification description Edited"},
  } satisfies UpdateClassificationOperationRequest;

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
| **updateClassificationRequest** | [UpdateClassificationRequest](UpdateClassificationRequest.md) |  | |

### Return type

[**UpdateClassificationResponse**](UpdateClassificationResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

