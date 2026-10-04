# TeamsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTeam**](TeamsApi.md#createteam) | **POST** /api/v1/client/teams | Create a new team |
| [**deleteTeam**](TeamsApi.md#deleteteam) | **DELETE** /api/v1/client/teams/{id} | Delete a team |
| [**getTeams**](TeamsApi.md#getteams) | **GET** /api/v1/client/teams | Get teams |
| [**updateTeam**](TeamsApi.md#updateteam) | **PATCH** /api/v1/client/teams/{id} | Update a team |



## createTeam

> SingleTeamResponseDto createTeam(createTeamDto)

Create a new team

Registers a new team in the system, including its name, short name, sport, mascots, classification.

### Example

```ts
import {
  Configuration,
  TeamsApi,
} from '@victorycode/sdk';
import type { CreateTeamRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new TeamsApi(config);

  const body = {
    // CreateTeamDto
    createTeamDto: ...,
  } satisfies CreateTeamRequest;

  try {
    const data = await api.createTeam(body);
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
| **createTeamDto** | [CreateTeamDto](CreateTeamDto.md) |  | |

### Return type

[**SingleTeamResponseDto**](SingleTeamResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Team created successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteTeam

> DeleteResponseDto deleteTeam(id)

Delete a team

Permanently deletes a team record from the system.

### Example

```ts
import {
  Configuration,
  TeamsApi,
} from '@victorycode/sdk';
import type { DeleteTeamRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new TeamsApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies DeleteTeamRequest;

  try {
    const data = await api.deleteTeam(body);
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
| **200** | Team deleted successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTeams

> ListTeamPaginatedResponseDto getTeams(limit, offset, search, state)

Get teams

Retrieves a paginated list of all teams belonging to the client. Supports filters for search, sport, and state.

### Example

```ts
import {
  Configuration,
  TeamsApi,
} from '@victorycode/sdk';
import type { GetTeamsRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new TeamsApi(config);

  const body = {
    // number | The number of results to return per page. (optional)
    limit: 8.14,
    // number | The number of results to skip for pagination. (optional)
    offset: 8.14,
    // string (optional)
    search: search_example,
    // string (optional)
    state: state_example,
  } satisfies GetTeamsRequest;

  try {
    const data = await api.getTeams(body);
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
| **limit** | `number` | The number of results to return per page. | [Optional] [Defaults to `50`] |
| **offset** | `number` | The number of results to skip for pagination. | [Optional] [Defaults to `0`] |
| **search** | `string` |  | [Optional] [Defaults to `undefined`] |
| **state** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ListTeamPaginatedResponseDto**](ListTeamPaginatedResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of teams retrieved successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateTeam

> SingleTeamResponseDto updateTeam(id, updateTeamDto)

Update a team

Updates the details of an existing team identified by its ID. Allows updating the name, short name, coach, logo, and other details.

### Example

```ts
import {
  Configuration,
  TeamsApi,
} from '@victorycode/sdk';
import type { UpdateTeamRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new TeamsApi(config);

  const body = {
    // string
    id: id_example,
    // UpdateTeamDto
    updateTeamDto: ...,
  } satisfies UpdateTeamRequest;

  try {
    const data = await api.updateTeam(body);
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
| **updateTeamDto** | [UpdateTeamDto](UpdateTeamDto.md) |  | |

### Return type

[**SingleTeamResponseDto**](SingleTeamResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Team updated successfully. |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **404** |  |  -  |
| **409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

