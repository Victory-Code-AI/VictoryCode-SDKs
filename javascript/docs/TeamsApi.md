# TeamsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTeam**](TeamsApi.md#createteam) | **POST** /api/v1/client/teams | Create a new team |
| [**deleteTeam**](TeamsApi.md#deleteteam) | **DELETE** /api/v1/client/teams/{id} | Delete a team |
| [**listTeams**](TeamsApi.md#listteams) | **GET** /api/v1/client/teams | Get teams |
| [**updateTeam**](TeamsApi.md#updateteam) | **PATCH** /api/v1/client/teams/{id} | Update a team |



## createTeam

> CreateTeamResponse createTeam(name, sport, shortName, mascots, classification, teamLogo)

Create a new team

Creates a new team record in the Tactix system. This endpoint allows clients to define a new team with key details such as name, short name, sport type, classification, mascot(s), and logo. Once created, the team can be referenced in other modules such as Games, Plays, or Game Recaps.

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
    // To configure API key authorization: AppToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AppId
    apiKey: "YOUR API KEY",
  });
  const api = new TeamsApi(config);

  const body = {
    // string
    name: name_example,
    // string | (This can only be one of football,rugby,golf,soccer,nfl)
    sport: sport_example,
    // string
    shortName: shortName_example,
    // string | Array of Mascot IDs (must not be empty)
    mascots: mascots_example,
    // string | Classification ID
    classification: classification_example,
    // Blob (optional)
    teamLogo: BINARY_DATA_HERE,
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
| **name** | `string` |  | [Defaults to `undefined`] |
| **sport** | `string` | (This can only be one of football,rugby,golf,soccer,nfl) | [Defaults to `undefined`] |
| **shortName** | `string` |  | [Defaults to `undefined`] |
| **mascots** | `string` | Array of Mascot IDs (must not be empty) | [Defaults to `undefined`] |
| **classification** | `string` | Classification ID | [Defaults to `undefined`] |
| **teamLogo** | `Blob` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**CreateTeamResponse**](CreateTeamResponse.md)

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


## deleteTeam

> DeleteTeamResponse deleteTeam(id)

Delete a team

Deletes a specific team from the Tactix system using its unique id. This operation permanently removes the team record and its related metadata from the client’s accessible data scope. It should be used with caution, as deleted teams cannot be restored via the API.

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
    // To configure API key authorization: AppToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AppId
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

[**DeleteTeamResponse**](DeleteTeamResponse.md)

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


## listTeams

> string listTeams(limit, page)

Get teams

Retrieves a paginated list of all teams available to the authenticated client. Each team object includes its name, short name, sport type, associated mascots, classification details, logo, and timestamps. This endpoint is typically used for team directories, selection lists, or administrative dashboards that require viewing multiple teams at once.

### Example

```ts
import {
  Configuration,
  TeamsApi,
} from '@victorycode/sdk';
import type { ListTeamsRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: AppToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AppId
    apiKey: "YOUR API KEY",
  });
  const api = new TeamsApi(config);

  const body = {
    // number (optional)
    limit: 10,
    // number (optional)
    page: 1,
  } satisfies ListTeamsRequest;

  try {
    const data = await api.listTeams(body);
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

**string**

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateTeam

> string updateTeam(id, name, sport, shortName, teamLogo, mascots, classification)

Update a team

Updates the information of an existing team identified by its unique id. This endpoint allows clients to modify team attributes such as name, short name, sport type, classification, mascots, coach, or logo. Upon successful update, the response returns the updated team object and a confirmation message.

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
    // To configure API key authorization: AppToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AppId
    apiKey: "YOUR API KEY",
  });
  const api = new TeamsApi(config);

  const body = {
    // string
    id: id_example,
    // string (optional)
    name: name_example,
    // string | (This can only be one of football,rugby,golf,soccer,nfl) (optional)
    sport: sport_example,
    // string (optional)
    shortName: shortName_example,
    // Blob (optional)
    teamLogo: BINARY_DATA_HERE,
    // string | Array of Mascot IDs (must not be empty) (optional)
    mascots: mascots_example,
    // string | Classification ID (optional)
    classification: classification_example,
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
| **name** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sport** | `string` | (This can only be one of football,rugby,golf,soccer,nfl) | [Optional] [Defaults to `undefined`] |
| **shortName** | `string` |  | [Optional] [Defaults to `undefined`] |
| **teamLogo** | `Blob` |  | [Optional] [Defaults to `undefined`] |
| **mascots** | `string` | Array of Mascot IDs (must not be empty) | [Optional] [Defaults to `undefined`] |
| **classification** | `string` | Classification ID | [Optional] [Defaults to `undefined`] |

### Return type

**string**

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

