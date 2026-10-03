# GamesApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getGame**](GamesApi.md#getgame) | **GET** /api/v1/client/games/{gameId} | Get single game |
| [**listGames**](GamesApi.md#listgames) | **GET** /api/v1/client/games | Get All Games |



## getGame

> GetGameResponse getGame(gameId)

Get single game

Retrieves metadata for a specific game by gameId. The response includes core identifiers, participating teams, venue/location, timestamps, processing status, and any available high-level attributes required to render a game detail view.

### Example

```ts
import {
  Configuration,
  GamesApi,
} from '@victorycode/sdk';
import type { GetGameRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: AppToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AppId
    apiKey: "YOUR API KEY",
  });
  const api = new GamesApi(config);

  const body = {
    // string
    gameId: gameId_example,
  } satisfies GetGameRequest;

  try {
    const data = await api.getGame(body);
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
| **gameId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**GetGameResponse**](GetGameResponse.md)

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


## listGames

> ListGamesResponse listGames(limit, page)

Get All Games

Returns a paginated list of games accessible to the client. Useful for building game pickers and dashboards, or to obtain a gameId before fetching detailed resources.

### Example

```ts
import {
  Configuration,
  GamesApi,
} from '@victorycode/sdk';
import type { ListGamesRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: AppToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AppId
    apiKey: "YOUR API KEY",
  });
  const api = new GamesApi(config);

  const body = {
    // number (optional)
    limit: 10,
    // number (optional)
    page: 1,
  } satisfies ListGamesRequest;

  try {
    const data = await api.listGames(body);
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

[**ListGamesResponse**](ListGamesResponse.md)

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

