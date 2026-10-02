# GameRecapApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getGameRecapScore**](GameRecapApi.md#getgamerecapscore) | **GET** /api/v1/client/game-recap/{gameId}/score | Get the Game Recap Score for a specific Game |
| [**getGameRecapScoringSummary**](GameRecapApi.md#getgamerecapscoringsummary) | **GET** /api/v1/client/game-recap/{gameId}/scoring-summary | Get the Game Recap Scoring Summary for a specific Game. |
| [**getGameRecapTeamStats**](GameRecapApi.md#getgamerecapteamstats) | **GET** /api/v1/client/game-recap/{gameId}/team-stats | Get the Game Recap Team Stats for a specific Game. |



## getGameRecapScore

> GetGameRecapScoreResponse getGameRecapScore(gameId)

Get the Game Recap Score for a specific Game

Retrieves the overall score for the specified game. This includes the final scoreline and also include period-by-period (quarters) breakdowns.

### Example

```ts
import {
  Configuration,
  GameRecapApi,
} from '@victorycode/sdk';
import type { GetGameRecapScoreRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: AppToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AppId
    apiKey: "YOUR API KEY",
  });
  const api = new GameRecapApi(config);

  const body = {
    // string
    gameId: gameId_example,
  } satisfies GetGameRecapScoreRequest;

  try {
    const data = await api.getGameRecapScore(body);
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

[**GetGameRecapScoreResponse**](GetGameRecapScoreResponse.md)

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


## getGameRecapScoringSummary

> GetGameRecapScoringSummaryResponse getGameRecapScoringSummary(gameId)

Get the Game Recap Scoring Summary for a specific Game.

Retrieves a chronological summary of all scoring plays for the specified game. Each record is linked to a playId, enabling clients to correlate the scoring event with detailed play data.

### Example

```ts
import {
  Configuration,
  GameRecapApi,
} from '@victorycode/sdk';
import type { GetGameRecapScoringSummaryRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: AppToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AppId
    apiKey: "YOUR API KEY",
  });
  const api = new GameRecapApi(config);

  const body = {
    // string
    gameId: gameId_example,
  } satisfies GetGameRecapScoringSummaryRequest;

  try {
    const data = await api.getGameRecapScoringSummary(body);
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

[**GetGameRecapScoringSummaryResponse**](GetGameRecapScoringSummaryResponse.md)

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


## getGameRecapTeamStats

> GetGameRecapTeamStatsResponse getGameRecapTeamStats(gameId)

Get the Game Recap Team Stats for a specific Game.

Retrieves a statistical summary for both the home and away teams in a specific game. The response includes key offensive and first-down metrics, allowing clients to analyze game efficiency, offensive output, and team balance between rushing and passing plays.

### Example

```ts
import {
  Configuration,
  GameRecapApi,
} from '@victorycode/sdk';
import type { GetGameRecapTeamStatsRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: AppToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AppId
    apiKey: "YOUR API KEY",
  });
  const api = new GameRecapApi(config);

  const body = {
    // string
    gameId: gameId_example,
  } satisfies GetGameRecapTeamStatsRequest;

  try {
    const data = await api.getGameRecapTeamStats(body);
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

[**GetGameRecapTeamStatsResponse**](GetGameRecapTeamStatsResponse.md)

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

