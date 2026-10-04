# GameRecapApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getGameRecapGameBoxScore**](GameRecapApi.md#getgamerecapgameboxscore) | **GET** /api/v1/client/game-recap/{videoId}/game-box-score | Get the Game Recap Game Box Score for a specific Game. |
| [**getGameRecapScore**](GameRecapApi.md#getgamerecapscore) | **GET** /api/v1/client/game-recap/{videoId}/score | Get the Game Recap Score for a specific Game. |
| [**getGameRecapScoringSummary**](GameRecapApi.md#getgamerecapscoringsummary) | **GET** /api/v1/client/game-recap/{videoId}/scoring-summary | Get the Game Recap Scoring Summary for a specific Game. |
| [**getGameRecapScoringSummaryPro**](GameRecapApi.md#getgamerecapscoringsummarypro) | **GET** /api/v1/client/game-recap/{videoId}/scoring-summary-pro | Get the Game Recap Scoring Summary Pro for a specific Game. |
| [**getGameRecapTeamStats**](GameRecapApi.md#getgamerecapteamstats) | **GET** /api/v1/client/game-recap/{videoId}/team-stats | Get the Game Recap Team Stats for a specific Game. |



## getGameRecapGameBoxScore

> GameBoxScoreResponseDto getGameRecapGameBoxScore(videoId)

Get the Game Recap Game Box Score for a specific Game.

Retrieves full game box score stats for both teams and players for a specific game.

### Example

```ts
import {
  Configuration,
  GameRecapApi,
} from '@victorycode/sdk';
import type { GetGameRecapGameBoxScoreRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new GameRecapApi(config);

  const body = {
    // string
    videoId: videoId_example,
  } satisfies GetGameRecapGameBoxScoreRequest;

  try {
    const data = await api.getGameRecapGameBoxScore(body);
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
| **videoId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**GameBoxScoreResponseDto**](GameBoxScoreResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful retrieval of the Game Recap Game Box Score |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGameRecapScore

> GameScoreResponse getGameRecapScore(videoId)

Get the Game Recap Score for a specific Game.

Retrieves the final score and the score breakdown by quarter and overtime periods for both the home and away teams.

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
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new GameRecapApi(config);

  const body = {
    // string
    videoId: videoId_example,
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
| **videoId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**GameScoreResponse**](GameScoreResponse.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful retrieval of the Game Recap Score. |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGameRecapScoringSummary

> GameRecapScoringSummaryResponse getGameRecapScoringSummary(videoId)

Get the Game Recap Scoring Summary for a specific Game.

Retrieves a chronological list of all scoring plays for a specific game, including details about the play, the drive, and the resulting score.

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
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new GameRecapApi(config);

  const body = {
    // string
    videoId: videoId_example,
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
| **videoId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**GameRecapScoringSummaryResponse**](GameRecapScoringSummaryResponse.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful retrieval of the Game Recap Scoring Summary |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGameRecapScoringSummaryPro

> GameRecapScoringSummaryProResponse getGameRecapScoringSummaryPro(videoId)

Get the Game Recap Scoring Summary Pro for a specific Game.

Retrieves the full pro scoring summary for a specific game with drive context and players involved for each scoring play.

### Example

```ts
import {
  Configuration,
  GameRecapApi,
} from '@victorycode/sdk';
import type { GetGameRecapScoringSummaryProRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new GameRecapApi(config);

  const body = {
    // string
    videoId: videoId_example,
  } satisfies GetGameRecapScoringSummaryProRequest;

  try {
    const data = await api.getGameRecapScoringSummaryPro(body);
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
| **videoId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**GameRecapScoringSummaryProResponse**](GameRecapScoringSummaryProResponse.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful retrieval of the Game Recap Scoring Summary Pro |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGameRecapTeamStats

> GameRecapTeamStatsResponse getGameRecapTeamStats(videoId)

Get the Game Recap Team Stats for a specific Game.

Retrieves a detailed statistical breakdown for both the home and away teams, covering offense, defense, and special teams performance.

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
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new GameRecapApi(config);

  const body = {
    // string
    videoId: videoId_example,
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
| **videoId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**GameRecapTeamStatsResponse**](GameRecapTeamStatsResponse.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | a detailed statistical breakdown for both teams |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

