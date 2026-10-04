# PlaysEventsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPlayById**](PlaysEventsApi.md#getplaybyid) | **GET** /api/v1/client/plays/{playId} | Get the single Play Clip |
| [**getPlaysOfGame**](PlaysEventsApi.md#getplaysofgame) | **GET** /api/v1/client/game/{gameId}/plays | Get a list of all plays for a game |
| [**getPlaysOfVideo**](PlaysEventsApi.md#getplaysofvideo) | **GET** /api/v1/client/videos/{videoId}/plays | Get a list of play clips for a video |



## getPlayById

> PlayClipListItemDto getPlayById(playId)

Get the single Play Clip

Retrieves the complete metadata for a single play clip by its unique ID.

### Example

```ts
import {
  Configuration,
  PlaysEventsApi,
} from '@victorycode/sdk';
import type { GetPlayByIdRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new PlaysEventsApi(config);

  const body = {
    // string
    playId: playId_example,
  } satisfies GetPlayByIdRequest;

  try {
    const data = await api.getPlayById(body);
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
| **playId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**PlayClipListItemDto**](PlayClipListItemDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful retrieval of play clip details |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPlaysOfGame

> ListGameAllPlaysResponseDto getPlaysOfGame(gameId, limit, offset, search, down, distanceZone, playType)

Get a list of all plays for a game

Retrieves a paginated list of all plays for a given game. The results can be filtered by various play attributes.

### Example

```ts
import {
  Configuration,
  PlaysEventsApi,
} from '@victorycode/sdk';
import type { GetPlaysOfGameRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new PlaysEventsApi(config);

  const body = {
    // string
    gameId: gameId_example,
    // number | The number of results to return per page. (optional)
    limit: 8.14,
    // number | The number of results to skip for pagination. (optional)
    offset: 8.14,
    // string (optional)
    search: search_example,
    // '1' | '2' | '3' | '4' | Filter by down number (optional)
    down: 1,
    // 'SHORT' | 'MEDIUM' | 'LONG' | 'X_LONG' | Filter by distance zone (yards to go) (optional)
    distanceZone: LONG,
    // 'RUN' | 'PASS' | 'FIELD_GOAL' | 'KICKOFF' | 'PUNT' | 'EXTRA_POINT' | 'TWO_POINT_CONVERSION' | 'NO_PLAY' | 'UNIDENTIFIABLE' | Filter by analyzed play type (optional)
    playType: PASS,
  } satisfies GetPlaysOfGameRequest;

  try {
    const data = await api.getPlaysOfGame(body);
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
| **search** | `string` |  | [Optional] [Defaults to `undefined`] |
| **down** | `1`, `2`, `3`, `4` | Filter by down number | [Optional] [Defaults to `undefined`] [Enum: 1, 2, 3, 4] |
| **distanceZone** | `SHORT`, `MEDIUM`, `LONG`, `X_LONG` | Filter by distance zone (yards to go) | [Optional] [Defaults to `undefined`] [Enum: SHORT, MEDIUM, LONG, X_LONG] |
| **playType** | `RUN`, `PASS`, `FIELD_GOAL`, `KICKOFF`, `PUNT`, `EXTRA_POINT`, `TWO_POINT_CONVERSION`, `NO_PLAY`, `UNIDENTIFIABLE` | Filter by analyzed play type | [Optional] [Defaults to `undefined`] [Enum: RUN, PASS, FIELD_GOAL, KICKOFF, PUNT, EXTRA_POINT, TWO_POINT_CONVERSION, NO_PLAY, UNIDENTIFIABLE] |

### Return type

[**ListGameAllPlaysResponseDto**](ListGameAllPlaysResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A paginated list of plays. |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPlaysOfVideo

> ListPlayClipsResponseDto getPlaysOfVideo(videoId, limit, offset, search, down, distanceZone, playType)

Get a list of play clips for a video

Retrieves a paginated list of all play clips for a given video. The results can be filtered by various play attributes.

### Example

```ts
import {
  Configuration,
  PlaysEventsApi,
} from '@victorycode/sdk';
import type { GetPlaysOfVideoRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Client-App-Token
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new PlaysEventsApi(config);

  const body = {
    // string
    videoId: videoId_example,
    // number | The number of results to return per page. (optional)
    limit: 8.14,
    // number | The number of results to skip for pagination. (optional)
    offset: 8.14,
    // string (optional)
    search: search_example,
    // '1' | '2' | '3' | '4' | Filter by down number (optional)
    down: 1,
    // 'SHORT' | 'MEDIUM' | 'LONG' | 'X_LONG' | Filter by distance zone (yards to go) (optional)
    distanceZone: LONG,
    // 'RUN' | 'PASS' | 'FIELD_GOAL' | 'KICKOFF' | 'PUNT' | 'EXTRA_POINT' | 'TWO_POINT_CONVERSION' | 'NO_PLAY' | 'UNIDENTIFIABLE' | Filter by analyzed play type (optional)
    playType: PASS,
  } satisfies GetPlaysOfVideoRequest;

  try {
    const data = await api.getPlaysOfVideo(body);
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
| **limit** | `number` | The number of results to return per page. | [Optional] [Defaults to `50`] |
| **offset** | `number` | The number of results to skip for pagination. | [Optional] [Defaults to `0`] |
| **search** | `string` |  | [Optional] [Defaults to `undefined`] |
| **down** | `1`, `2`, `3`, `4` | Filter by down number | [Optional] [Defaults to `undefined`] [Enum: 1, 2, 3, 4] |
| **distanceZone** | `SHORT`, `MEDIUM`, `LONG`, `X_LONG` | Filter by distance zone (yards to go) | [Optional] [Defaults to `undefined`] [Enum: SHORT, MEDIUM, LONG, X_LONG] |
| **playType** | `RUN`, `PASS`, `FIELD_GOAL`, `KICKOFF`, `PUNT`, `EXTRA_POINT`, `TWO_POINT_CONVERSION`, `NO_PLAY`, `UNIDENTIFIABLE` | Filter by analyzed play type | [Optional] [Defaults to `undefined`] [Enum: RUN, PASS, FIELD_GOAL, KICKOFF, PUNT, EXTRA_POINT, TWO_POINT_CONVERSION, NO_PLAY, UNIDENTIFIABLE] |

### Return type

[**ListPlayClipsResponseDto**](ListPlayClipsResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A paginated list of plays. |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

