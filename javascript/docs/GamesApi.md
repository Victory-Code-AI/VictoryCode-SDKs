# GamesApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addVideoToGame**](GamesApi.md#addvideotogame) | **POST** /api/v1/client/games/{gameId}/video | Add new video to a game |
| [**createGameWithVideoUrl**](GamesApi.md#creategamewithvideourl) | **POST** /api/v1/client/games | Create a new Game with Video URL |
| [**getGameDetails**](GamesApi.md#getgamedetails) | **GET** /api/v1/client/games/{gameId} | Get a Single Game. |
| [**getGames**](GamesApi.md#getgames) | **GET** /api/v1/client/games | List and Filter Games. |
| [**getVideosOfGame**](GamesApi.md#getvideosofgame) | **GET** /api/v1/client/games/{gameId}/videos | Get a list of videos of a game |



## addVideoToGame

> SingleVideoResponseDto addVideoToGame(gameId, addVideoToGameWithS3LinkDto)

Add new video to a game

Adds a new video to game.

### Example

```ts
import {
  Configuration,
  GamesApi,
} from '@victorycode/sdk';
import type { AddVideoToGameRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new GamesApi(config);

  const body = {
    // string
    gameId: gameId_example,
    // AddVideoToGameWithS3LinkDto
    addVideoToGameWithS3LinkDto: ...,
  } satisfies AddVideoToGameRequest;

  try {
    const data = await api.addVideoToGame(body);
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
| **addVideoToGameWithS3LinkDto** | [AddVideoToGameWithS3LinkDto](AddVideoToGameWithS3LinkDto.md) |  | |

### Return type

[**SingleVideoResponseDto**](SingleVideoResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Video added successfully |  -  |
| **400** | Validation error |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createGameWithVideoUrl

> GameDetailsResponse createGameWithVideoUrl(clientCreateGameWithVideoUrlDto)

Create a new Game with Video URL

Registers a new game and associates a video URL (e.g., from a third-party source) with it in a single step.

### Example

```ts
import {
  Configuration,
  GamesApi,
} from '@victorycode/sdk';
import type { CreateGameWithVideoUrlRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new GamesApi(config);

  const body = {
    // ClientCreateGameWithVideoUrlDto
    clientCreateGameWithVideoUrlDto: ...,
  } satisfies CreateGameWithVideoUrlRequest;

  try {
    const data = await api.createGameWithVideoUrl(body);
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
| **clientCreateGameWithVideoUrlDto** | [ClientCreateGameWithVideoUrlDto](ClientCreateGameWithVideoUrlDto.md) |  | |

### Return type

[**GameDetailsResponse**](GameDetailsResponse.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Game created successfully |  -  |
| **400** |  |  -  |
| **409** | Name already exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGameDetails

> GameDetailsResponse getGameDetails(gameId)

Get a Single Game.

Retrieves the core metadata for a single game, including date, time, location, and teams who participated.

### Example

```ts
import {
  Configuration,
  GamesApi,
} from '@victorycode/sdk';
import type { GetGameDetailsRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new GamesApi(config);

  const body = {
    // string
    gameId: gameId_example,
  } satisfies GetGameDetailsRequest;

  try {
    const data = await api.getGameDetails(body);
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

[**GameDetailsResponse**](GameDetailsResponse.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful retrieval of the core game details |  -  |
| **401** | Unauthorized |  -  |
| **404** | Game not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGames

> ListGamesPaginatedResponseDto getGames(limit, offset, search)

List and Filter Games.

Retrieves a paginated list of games, with optional filters for team, upload status, and date-time range.

### Example

```ts
import {
  Configuration,
  GamesApi,
} from '@victorycode/sdk';
import type { GetGamesRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new GamesApi(config);

  const body = {
    // number | The number of results to return per page. (optional)
    limit: 8.14,
    // number | The number of results to skip for pagination. (optional)
    offset: 8.14,
    // string (optional)
    search: search_example,
  } satisfies GetGamesRequest;

  try {
    const data = await api.getGames(body);
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

### Return type

[**ListGamesPaginatedResponseDto**](ListGamesPaginatedResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful retrieval of the paginated list of games |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVideosOfGame

> ListVideoPaginatedResponseDto getVideosOfGame(gameId, limit, offset)

Get a list of videos of a game

Retrieves a list of videos of a game.

### Example

```ts
import {
  Configuration,
  GamesApi,
} from '@victorycode/sdk';
import type { GetVideosOfGameRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new GamesApi(config);

  const body = {
    // string
    gameId: gameId_example,
    // number | The number of results to return per page. (optional)
    limit: 8.14,
    // number | The number of results to skip for pagination. (optional)
    offset: 8.14,
  } satisfies GetVideosOfGameRequest;

  try {
    const data = await api.getVideosOfGame(body);
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
| **limit** | `number` | The number of results to return per page. | [Optional] [Defaults to `50`] |
| **offset** | `number` | The number of results to skip for pagination. | [Optional] [Defaults to `0`] |

### Return type

[**ListVideoPaginatedResponseDto**](ListVideoPaginatedResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful retrieval of the list of videos of a game |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

