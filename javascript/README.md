# @victorycode/sdk@0.1.0

A TypeScript SDK client for the sandbox.api.tactixai.com API.

## Usage

First, install the SDK from npm.

```bash
npm install @victorycode/sdk --save
```

Next, try it out.


```ts
import {
  Configuration,
  AuthApi,
} from '@victorycode/sdk';
import type { GenerateAccessTokenRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: AppId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AppSecret
    apiKey: "YOUR API KEY",
  });
  const api = new AuthApi(config);

  try {
    const data = await api.generateAccessToken();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *https://sandbox.api.tactixai.com*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AuthApi* | [**generateAccessToken**](docs/AuthApi.md#generateaccesstoken) | **GET** /api/v1/client/auth/token | Get client api token
*ClassificationsApi* | [**createClassification**](docs/ClassificationsApi.md#createclassificationoperation) | **POST** /api/v1/client/classifications | Create a new classification
*ClassificationsApi* | [**deleteClassification**](docs/ClassificationsApi.md#deleteclassification) | **DELETE** /api/v1/client/classifications/{id} | Delete a classification
*ClassificationsApi* | [**listClassifications**](docs/ClassificationsApi.md#listclassifications) | **GET** /api/v1/client/classifications | Get all classifications
*ClassificationsApi* | [**updateClassification**](docs/ClassificationsApi.md#updateclassificationoperation) | **PATCH** /api/v1/client/classifications/{id} | Update a classification
*GameRecapApi* | [**getGameRecapScore**](docs/GameRecapApi.md#getgamerecapscore) | **GET** /api/v1/client/game-recap/{gameId}/score | Get the Game Recap Score for a specific Game
*GameRecapApi* | [**getGameRecapScoringSummary**](docs/GameRecapApi.md#getgamerecapscoringsummary) | **GET** /api/v1/client/game-recap/{gameId}/scoring-summary | Get the Game Recap Scoring Summary for a specific Game.
*GameRecapApi* | [**getGameRecapTeamStats**](docs/GameRecapApi.md#getgamerecapteamstats) | **GET** /api/v1/client/game-recap/{gameId}/team-stats | Get the Game Recap Team Stats for a specific Game.
*GamesApi* | [**getGame**](docs/GamesApi.md#getgame) | **GET** /api/v1/client/games/{gameId} | Get single game
*GamesApi* | [**listGames**](docs/GamesApi.md#listgames) | **GET** /api/v1/client/games | Get All Games
*MascotsApi* | [**createMascot**](docs/MascotsApi.md#createmascot) | **POST** /api/v1/client/mascots | Create a new mascot
*MascotsApi* | [**deleteMascot**](docs/MascotsApi.md#deletemascot) | **DELETE** /api/v1/client/mascots/{id} | Delete a mascot
*MascotsApi* | [**listMascots**](docs/MascotsApi.md#listmascots) | **GET** /api/v1/client/mascots | Get all mascots
*MascotsApi* | [**updateMascot**](docs/MascotsApi.md#updatemascot) | **PATCH** /api/v1/client/mascots/{id} | Update a mascot
*TeamsApi* | [**createTeam**](docs/TeamsApi.md#createteam) | **POST** /api/v1/client/teams | Create a new team
*TeamsApi* | [**deleteTeam**](docs/TeamsApi.md#deleteteam) | **DELETE** /api/v1/client/teams/{id} | Delete a team
*TeamsApi* | [**listTeams**](docs/TeamsApi.md#listteams) | **GET** /api/v1/client/teams | Get teams
*TeamsApi* | [**updateTeam**](docs/TeamsApi.md#updateteam) | **PATCH** /api/v1/client/teams/{id} | Update a team
*UploadsApi* | [**getUploadStatus**](docs/UploadsApi.md#getuploadstatus) | **GET** /api/v1/client/uploads/{uploadId} | Video file upload status
*UploadsApi* | [**uploadVideoAndCreateGame**](docs/UploadsApi.md#uploadvideoandcreategame) | **POST** /api/v1/client/uploads | Upload video and create new game


### Models

- [CreateClassificationRequest](docs/CreateClassificationRequest.md)
- [CreateClassificationResponse](docs/CreateClassificationResponse.md)
- [CreateClassificationResponseData](docs/CreateClassificationResponseData.md)
- [CreateMascotResponse](docs/CreateMascotResponse.md)
- [CreateMascotResponseData](docs/CreateMascotResponseData.md)
- [CreateTeamResponse](docs/CreateTeamResponse.md)
- [CreateTeamResponseData](docs/CreateTeamResponseData.md)
- [DeleteClassificationResponse](docs/DeleteClassificationResponse.md)
- [DeleteMascotResponse](docs/DeleteMascotResponse.md)
- [DeleteTeamResponse](docs/DeleteTeamResponse.md)
- [GenerateAccessTokenResponse](docs/GenerateAccessTokenResponse.md)
- [GetGameRecapScoreResponse](docs/GetGameRecapScoreResponse.md)
- [GetGameRecapScoreResponseData](docs/GetGameRecapScoreResponseData.md)
- [GetGameRecapScoreResponseDataHomeTeam](docs/GetGameRecapScoreResponseDataHomeTeam.md)
- [GetGameRecapScoreResponseDataHomeTeamPeriodScoresInner](docs/GetGameRecapScoreResponseDataHomeTeamPeriodScoresInner.md)
- [GetGameRecapScoringSummaryResponse](docs/GetGameRecapScoringSummaryResponse.md)
- [GetGameRecapScoringSummaryResponseData](docs/GetGameRecapScoringSummaryResponseData.md)
- [GetGameRecapScoringSummaryResponseDataDataInnerInner](docs/GetGameRecapScoringSummaryResponseDataDataInnerInner.md)
- [GetGameRecapTeamStatsResponse](docs/GetGameRecapTeamStatsResponse.md)
- [GetGameRecapTeamStatsResponseData](docs/GetGameRecapTeamStatsResponseData.md)
- [GetGameRecapTeamStatsResponseDataHomeTeam](docs/GetGameRecapTeamStatsResponseDataHomeTeam.md)
- [GetGameRecapTeamStatsResponseDataHomeTeamFirstDowns](docs/GetGameRecapTeamStatsResponseDataHomeTeamFirstDowns.md)
- [GetGameRecapTeamStatsResponseDataHomeTeamOffense](docs/GetGameRecapTeamStatsResponseDataHomeTeamOffense.md)
- [GetGameRecapTeamStatsResponseDataHomeTeamPassing](docs/GetGameRecapTeamStatsResponseDataHomeTeamPassing.md)
- [GetGameResponse](docs/GetGameResponse.md)
- [GetGameResponseData](docs/GetGameResponseData.md)
- [GetGameResponseDataHomeTeam](docs/GetGameResponseDataHomeTeam.md)
- [GetUploadStatusResponse](docs/GetUploadStatusResponse.md)
- [GetUploadStatusResponseData](docs/GetUploadStatusResponseData.md)
- [ListClassificationsResponse](docs/ListClassificationsResponse.md)
- [ListClassificationsResponseDataInner](docs/ListClassificationsResponseDataInner.md)
- [ListClassificationsResponsePagination](docs/ListClassificationsResponsePagination.md)
- [ListGamesResponse](docs/ListGamesResponse.md)
- [ListGamesResponseData](docs/ListGamesResponseData.md)
- [ListGamesResponseDataGamesInner](docs/ListGamesResponseDataGamesInner.md)
- [ListGamesResponseDataGamesInnerHomeTeam](docs/ListGamesResponseDataGamesInnerHomeTeam.md)
- [ListMascotsResponse](docs/ListMascotsResponse.md)
- [ListMascotsResponseDataInner](docs/ListMascotsResponseDataInner.md)
- [UpdateClassificationRequest](docs/UpdateClassificationRequest.md)
- [UpdateClassificationResponse](docs/UpdateClassificationResponse.md)
- [UpdateMascotResponse](docs/UpdateMascotResponse.md)
- [UploadVideoAndCreateGameResponse](docs/UploadVideoAndCreateGameResponse.md)
- [UploadVideoAndCreateGameResponseData](docs/UploadVideoAndCreateGameResponseData.md)

### Authorization


Authentication schemes defined for the API:
<a id="AppId"></a>
#### AppId


- **Type**: API key
- **API key parameter name**: `App-Id`
- **Location**: HTTP header
<a id="AppSecret"></a>
#### AppSecret


- **Type**: API key
- **API key parameter name**: `app-secret`
- **Location**: HTTP header
<a id="AppToken"></a>
#### AppToken


- **Type**: API key
- **API key parameter name**: `App-Token`
- **Location**: HTTP header

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0.0`
- Package version: `0.1.0`
- Generator version: `7.25.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
