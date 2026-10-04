# @victorycode/sdk@1.0.0

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
  AuthenticationApi,
} from '@victorycode/sdk';
import type { GetAccessTokenRequest } from '@victorycode/sdk';

async function example() {
  console.log("🚀 Testing @victorycode/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: AppSecret
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Client-App-Id
    apiKey: "YOUR API KEY",
  });
  const api = new AuthenticationApi(config);

  try {
    const data = await api.getAccessToken();
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
*AuthenticationApi* | [**getAccessToken**](docs/AuthenticationApi.md#getaccesstoken) | **GET** /api/v1/client/auth/token | Get Access Token
*ClassificationApi* | [**createClassification**](docs/ClassificationApi.md#createclassification) | **POST** /api/v1/client/classifications | Create a new classification
*ClassificationApi* | [**deleteClassification**](docs/ClassificationApi.md#deleteclassification) | **DELETE** /api/v1/client/classifications/{id} | Delete a classification
*ClassificationApi* | [**getClassifications**](docs/ClassificationApi.md#getclassifications) | **GET** /api/v1/client/classifications | Get all classifications
*ClassificationApi* | [**updateClassification**](docs/ClassificationApi.md#updateclassification) | **PATCH** /api/v1/client/classifications/{id} | Update a classification
*GameRecapApi* | [**getGameRecapGameBoxScore**](docs/GameRecapApi.md#getgamerecapgameboxscore) | **GET** /api/v1/client/game-recap/{videoId}/game-box-score | Get the Game Recap Game Box Score for a specific Game.
*GameRecapApi* | [**getGameRecapScore**](docs/GameRecapApi.md#getgamerecapscore) | **GET** /api/v1/client/game-recap/{videoId}/score | Get the Game Recap Score for a specific Game.
*GameRecapApi* | [**getGameRecapScoringSummary**](docs/GameRecapApi.md#getgamerecapscoringsummary) | **GET** /api/v1/client/game-recap/{videoId}/scoring-summary | Get the Game Recap Scoring Summary for a specific Game.
*GameRecapApi* | [**getGameRecapScoringSummaryPro**](docs/GameRecapApi.md#getgamerecapscoringsummarypro) | **GET** /api/v1/client/game-recap/{videoId}/scoring-summary-pro | Get the Game Recap Scoring Summary Pro for a specific Game.
*GameRecapApi* | [**getGameRecapTeamStats**](docs/GameRecapApi.md#getgamerecapteamstats) | **GET** /api/v1/client/game-recap/{videoId}/team-stats | Get the Game Recap Team Stats for a specific Game.
*GamesApi* | [**addVideoToGame**](docs/GamesApi.md#addvideotogame) | **POST** /api/v1/client/games/{gameId}/video | Add new video to a game
*GamesApi* | [**createGameWithVideoUrl**](docs/GamesApi.md#creategamewithvideourl) | **POST** /api/v1/client/games | Create a new Game with Video URL
*GamesApi* | [**getGameDetails**](docs/GamesApi.md#getgamedetails) | **GET** /api/v1/client/games/{gameId} | Get a Single Game.
*GamesApi* | [**getGames**](docs/GamesApi.md#getgames) | **GET** /api/v1/client/games | List and Filter Games.
*GamesApi* | [**getVideosOfGame**](docs/GamesApi.md#getvideosofgame) | **GET** /api/v1/client/games/{gameId}/videos | Get a list of videos of a game
*MascotApi* | [**createMascot**](docs/MascotApi.md#createmascot) | **POST** /api/v1/client/mascots | Create a new mascot
*MascotApi* | [**deleteMascot**](docs/MascotApi.md#deletemascot) | **DELETE** /api/v1/client/mascots/{id} | Delete a mascot
*MascotApi* | [**getMascots**](docs/MascotApi.md#getmascots) | **GET** /api/v1/client/mascots | Get all mascots
*MascotApi* | [**updateMascot**](docs/MascotApi.md#updatemascot) | **PATCH** /api/v1/client/mascots/{id} | Update a mascot
*PlaysEventsApi* | [**getPlayById**](docs/PlaysEventsApi.md#getplaybyid) | **GET** /api/v1/client/plays/{playId} | Get the single Play Clip
*PlaysEventsApi* | [**getPlaysOfGame**](docs/PlaysEventsApi.md#getplaysofgame) | **GET** /api/v1/client/game/{gameId}/plays | Get a list of all plays for a game
*PlaysEventsApi* | [**getPlaysOfVideo**](docs/PlaysEventsApi.md#getplaysofvideo) | **GET** /api/v1/client/videos/{videoId}/plays | Get a list of play clips for a video
*TeamsApi* | [**createTeam**](docs/TeamsApi.md#createteam) | **POST** /api/v1/client/teams | Create a new team
*TeamsApi* | [**deleteTeam**](docs/TeamsApi.md#deleteteam) | **DELETE** /api/v1/client/teams/{id} | Delete a team
*TeamsApi* | [**getTeams**](docs/TeamsApi.md#getteams) | **GET** /api/v1/client/teams | Get teams
*TeamsApi* | [**updateTeam**](docs/TeamsApi.md#updateteam) | **PATCH** /api/v1/client/teams/{id} | Update a team
*UploadsApi* | [**completeMultipartUpload**](docs/UploadsApi.md#completemultipartupload) | **POST** /api/v1/client/complete-upload | Complete a multipart upload to S3
*UploadsApi* | [**getPresignedUrl**](docs/UploadsApi.md#getpresignedurl) | **GET** /api/v1/client/upload-presigned-url | Get a presigned URL for a specific part of a multipart upload
*UploadsApi* | [**initiateUpload**](docs/UploadsApi.md#initiateupload) | **POST** /api/v1/client/initiate-upload | Initiate a multipart upload to S3 for a large file
*VenueApi* | [**createVenue**](docs/VenueApi.md#createvenue) | **POST** /api/v1/client/venue | Create a new venue
*VenueApi* | [**deleteVenue**](docs/VenueApi.md#deletevenue) | **DELETE** /api/v1/client/venue/{id} | Delete a venue
*VenueApi* | [**getVenues**](docs/VenueApi.md#getvenues) | **GET** /api/v1/client/venues | Get all venues
*VenueApi* | [**updateVenue**](docs/VenueApi.md#updatevenue) | **PATCH** /api/v1/client/venue/{id} | Update a venue


### Models

- [AddVideoToGameWithS3LinkDto](docs/AddVideoToGameWithS3LinkDto.md)
- [Address](docs/Address.md)
- [AddressDto](docs/AddressDto.md)
- [BadRequestErrorResponseDto](docs/BadRequestErrorResponseDto.md)
- [Classification](docs/Classification.md)
- [ClientCreateGameWithVideoUrlDto](docs/ClientCreateGameWithVideoUrlDto.md)
- [CompleteMultipartUploadDto](docs/CompleteMultipartUploadDto.md)
- [CompleteMultipartUploadResponse](docs/CompleteMultipartUploadResponse.md)
- [CompleteMultipartUploadResponseDto](docs/CompleteMultipartUploadResponseDto.md)
- [CompletedPartDto](docs/CompletedPartDto.md)
- [ConflictErrorResponseDto](docs/ConflictErrorResponseDto.md)
- [Coordinates](docs/Coordinates.md)
- [CoordinatesDto](docs/CoordinatesDto.md)
- [CreateClassificationDto](docs/CreateClassificationDto.md)
- [CreateMascotDto](docs/CreateMascotDto.md)
- [CreateTeamDto](docs/CreateTeamDto.md)
- [CreateTeamResponseDto](docs/CreateTeamResponseDto.md)
- [CreateVenueDto](docs/CreateVenueDto.md)
- [DefenseSectionDto](docs/DefenseSectionDto.md)
- [DefenseStatsDto](docs/DefenseStatsDto.md)
- [DefenseTotalsDto](docs/DefenseTotalsDto.md)
- [DeleteResponseDto](docs/DeleteResponseDto.md)
- [DownEfficiencyDto](docs/DownEfficiencyDto.md)
- [FetchTeamResponseDto](docs/FetchTeamResponseDto.md)
- [FumbleSectionDto](docs/FumbleSectionDto.md)
- [FumbleStatsDto](docs/FumbleStatsDto.md)
- [FumbleTotalsDto](docs/FumbleTotalsDto.md)
- [GameAllPlayListItemDto](docs/GameAllPlayListItemDto.md)
- [GameBoxScoreMetaDto](docs/GameBoxScoreMetaDto.md)
- [GameBoxScoreResponseDto](docs/GameBoxScoreResponseDto.md)
- [GameBoxScoreTeamsDto](docs/GameBoxScoreTeamsDto.md)
- [GameDetailsResponse](docs/GameDetailsResponse.md)
- [GameRecapScoringSummaryProResponse](docs/GameRecapScoringSummaryProResponse.md)
- [GameRecapScoringSummaryResponse](docs/GameRecapScoringSummaryResponse.md)
- [GameRecapTeamStatsResponse](docs/GameRecapTeamStatsResponse.md)
- [GameScoreResponse](docs/GameScoreResponse.md)
- [GameScoringSummaryDataDto](docs/GameScoringSummaryDataDto.md)
- [GetPartsPresignUrlResponse](docs/GetPartsPresignUrlResponse.md)
- [GetPartsPresignUrlResponseDto](docs/GetPartsPresignUrlResponseDto.md)
- [InitiateMultipartUploadDto](docs/InitiateMultipartUploadDto.md)
- [InitiateMultipartUploadResponse](docs/InitiateMultipartUploadResponse.md)
- [InitiateMultipartUploadResponseDto](docs/InitiateMultipartUploadResponseDto.md)
- [InterceptionSectionDto](docs/InterceptionSectionDto.md)
- [InterceptionStatsDto](docs/InterceptionStatsDto.md)
- [InterceptionTotalsDto](docs/InterceptionTotalsDto.md)
- [KickingSectionDto](docs/KickingSectionDto.md)
- [KickingStatsDto](docs/KickingStatsDto.md)
- [KickingTotalsDto](docs/KickingTotalsDto.md)
- [LineOfScrimmageDto](docs/LineOfScrimmageDto.md)
- [ListClassificationPaginatedResponseDto](docs/ListClassificationPaginatedResponseDto.md)
- [ListGameAllPlaysResponseDto](docs/ListGameAllPlaysResponseDto.md)
- [ListGamesPaginatedResponseDto](docs/ListGamesPaginatedResponseDto.md)
- [ListMascotPaginatedResponseDto](docs/ListMascotPaginatedResponseDto.md)
- [ListPlayClipsResponseDto](docs/ListPlayClipsResponseDto.md)
- [ListTeamPaginatedResponseDto](docs/ListTeamPaginatedResponseDto.md)
- [ListVenuePaginatedResponseDto](docs/ListVenuePaginatedResponseDto.md)
- [ListVideoPaginatedResponseDto](docs/ListVideoPaginatedResponseDto.md)
- [Mascot](docs/Mascot.md)
- [MascotResponseDto](docs/MascotResponseDto.md)
- [NotFoundErrorResponseDto](docs/NotFoundErrorResponseDto.md)
- [OffenseDto](docs/OffenseDto.md)
- [PassingDto](docs/PassingDto.md)
- [PassingSectionDto](docs/PassingSectionDto.md)
- [PassingStatsDto](docs/PassingStatsDto.md)
- [PassingTotalsDto](docs/PassingTotalsDto.md)
- [PeriodScoreDto](docs/PeriodScoreDto.md)
- [PlayAttributesListDto](docs/PlayAttributesListDto.md)
- [PlayClipListDetailsDto](docs/PlayClipListDetailsDto.md)
- [PlayClipListItemDto](docs/PlayClipListItemDto.md)
- [ProScoringPlayDto](docs/ProScoringPlayDto.md)
- [ReceivingSectionDto](docs/ReceivingSectionDto.md)
- [ReceivingStatsDto](docs/ReceivingStatsDto.md)
- [ReceivingTotalsDto](docs/ReceivingTotalsDto.md)
- [RedZoneDto](docs/RedZoneDto.md)
- [RushingDto](docs/RushingDto.md)
- [RushingSectionDto](docs/RushingSectionDto.md)
- [RushingStatsDto](docs/RushingStatsDto.md)
- [RushingTotalsDto](docs/RushingTotalsDto.md)
- [ScoringPlayPlayerInvolvedDto](docs/ScoringPlayPlayerInvolvedDto.md)
- [ScoringSummaryProTeamDto](docs/ScoringSummaryProTeamDto.md)
- [SingleClassificationResponseDto](docs/SingleClassificationResponseDto.md)
- [SingleMascotResponseDto](docs/SingleMascotResponseDto.md)
- [SingleTeamResponseDto](docs/SingleTeamResponseDto.md)
- [SingleVenueResponseDto](docs/SingleVenueResponseDto.md)
- [SingleVideoResponseDto](docs/SingleVideoResponseDto.md)
- [TeamBasicInfoDto](docs/TeamBasicInfoDto.md)
- [TeamBoxScoreDto](docs/TeamBoxScoreDto.md)
- [TeamScoreDto](docs/TeamScoreDto.md)
- [TeamStatsDto](docs/TeamStatsDto.md)
- [TokenResponse](docs/TokenResponse.md)
- [TurnoversDto](docs/TurnoversDto.md)
- [UnauthorizedErrorResponseDto](docs/UnauthorizedErrorResponseDto.md)
- [UpdateClassificationDto](docs/UpdateClassificationDto.md)
- [UpdateMascotDto](docs/UpdateMascotDto.md)
- [UpdateTeamDto](docs/UpdateTeamDto.md)
- [UpdateVenueDto](docs/UpdateVenueDto.md)
- [Venue](docs/Venue.md)
- [VideoListItemDto](docs/VideoListItemDto.md)

### Authorization


Authentication schemes defined for the API:
<a id="Client-App-Id"></a>
#### Client-App-Id


- **Type**: API key
- **API key parameter name**: `App-Id`
- **Location**: HTTP header
<a id="Client-App-Token"></a>
#### Client-App-Token


- **Type**: HTTP Bearer Token authentication (JWT)
<a id="AppSecret"></a>
#### AppSecret


- **Type**: API key
- **API key parameter name**: `App-Secret`
- **Location**: HTTP header

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0`
- Package version: `1.0.0`
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
