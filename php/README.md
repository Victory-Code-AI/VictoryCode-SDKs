# VictoryCodeSDK

Client APIs for Tactix partners: authenticate, upload game video, and retrieve games, plays, game recaps and team metadata.


## Installation & Usage

### Requirements

PHP 8.1 and later.

### Composer

To install the bindings via [Composer](https://getcomposer.org/), add the following to `composer.json`:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/victory-code-ai/victorycode-sdks.git"
    }
  ],
  "require": {
    "victory-code-ai/victorycode-sdks": "*@dev"
  }
}
```

Then run `composer install`

### Manual Installation

Download the files and include `autoload.php`:

```php
<?php
require_once('/path/to/VictoryCodeSDK/vendor/autoload.php');
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



// Configure API key authorization: AppSecret
$config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKey('App-Secret', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('App-Secret', 'Bearer');

// Configure API key authorization: Client-App-Id
$config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKey('App-Id', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('App-Id', 'Bearer');


$apiInstance = new VictoryCode\SDK\Api\AuthenticationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->getAccessToken();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AuthenticationApi->getAccessToken: ', $e->getMessage(), PHP_EOL;
}

```

## API Endpoints

All URIs are relative to *https://sandbox.api.tactixai.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AuthenticationApi* | [**getAccessToken**](docs/Api/AuthenticationApi.md#getaccesstoken) | **GET** /api/v1/client/auth/token | Get Access Token
*ClassificationApi* | [**createClassification**](docs/Api/ClassificationApi.md#createclassification) | **POST** /api/v1/client/classifications | Create a new classification
*ClassificationApi* | [**deleteClassification**](docs/Api/ClassificationApi.md#deleteclassification) | **DELETE** /api/v1/client/classifications/{id} | Delete a classification
*ClassificationApi* | [**getClassifications**](docs/Api/ClassificationApi.md#getclassifications) | **GET** /api/v1/client/classifications | Get all classifications
*ClassificationApi* | [**updateClassification**](docs/Api/ClassificationApi.md#updateclassification) | **PATCH** /api/v1/client/classifications/{id} | Update a classification
*GameRecapApi* | [**getGameRecapGameBoxScore**](docs/Api/GameRecapApi.md#getgamerecapgameboxscore) | **GET** /api/v1/client/game-recap/{videoId}/game-box-score | Get the Game Recap Game Box Score for a specific Game.
*GameRecapApi* | [**getGameRecapScore**](docs/Api/GameRecapApi.md#getgamerecapscore) | **GET** /api/v1/client/game-recap/{videoId}/score | Get the Game Recap Score for a specific Game.
*GameRecapApi* | [**getGameRecapScoringSummary**](docs/Api/GameRecapApi.md#getgamerecapscoringsummary) | **GET** /api/v1/client/game-recap/{videoId}/scoring-summary | Get the Game Recap Scoring Summary for a specific Game.
*GameRecapApi* | [**getGameRecapScoringSummaryPro**](docs/Api/GameRecapApi.md#getgamerecapscoringsummarypro) | **GET** /api/v1/client/game-recap/{videoId}/scoring-summary-pro | Get the Game Recap Scoring Summary Pro for a specific Game.
*GameRecapApi* | [**getGameRecapTeamStats**](docs/Api/GameRecapApi.md#getgamerecapteamstats) | **GET** /api/v1/client/game-recap/{videoId}/team-stats | Get the Game Recap Team Stats for a specific Game.
*GamesApi* | [**addVideoToGame**](docs/Api/GamesApi.md#addvideotogame) | **POST** /api/v1/client/games/{gameId}/video | Add new video to a game
*GamesApi* | [**createGameWithVideoUrl**](docs/Api/GamesApi.md#creategamewithvideourl) | **POST** /api/v1/client/games | Create a new Game with Video URL
*GamesApi* | [**getGameDetails**](docs/Api/GamesApi.md#getgamedetails) | **GET** /api/v1/client/games/{gameId} | Get a Single Game.
*GamesApi* | [**getGames**](docs/Api/GamesApi.md#getgames) | **GET** /api/v1/client/games | List and Filter Games.
*GamesApi* | [**getVideosOfGame**](docs/Api/GamesApi.md#getvideosofgame) | **GET** /api/v1/client/games/{gameId}/videos | Get a list of videos of a game
*MascotApi* | [**createMascot**](docs/Api/MascotApi.md#createmascot) | **POST** /api/v1/client/mascots | Create a new mascot
*MascotApi* | [**deleteMascot**](docs/Api/MascotApi.md#deletemascot) | **DELETE** /api/v1/client/mascots/{id} | Delete a mascot
*MascotApi* | [**getMascots**](docs/Api/MascotApi.md#getmascots) | **GET** /api/v1/client/mascots | Get all mascots
*MascotApi* | [**updateMascot**](docs/Api/MascotApi.md#updatemascot) | **PATCH** /api/v1/client/mascots/{id} | Update a mascot
*PlaysEventsApi* | [**getPlayById**](docs/Api/PlaysEventsApi.md#getplaybyid) | **GET** /api/v1/client/plays/{playId} | Get the single Play Clip
*PlaysEventsApi* | [**getPlaysOfGame**](docs/Api/PlaysEventsApi.md#getplaysofgame) | **GET** /api/v1/client/game/{gameId}/plays | Get a list of all plays for a game
*PlaysEventsApi* | [**getPlaysOfVideo**](docs/Api/PlaysEventsApi.md#getplaysofvideo) | **GET** /api/v1/client/videos/{videoId}/plays | Get a list of play clips for a video
*TeamsApi* | [**createTeam**](docs/Api/TeamsApi.md#createteam) | **POST** /api/v1/client/teams | Create a new team
*TeamsApi* | [**deleteTeam**](docs/Api/TeamsApi.md#deleteteam) | **DELETE** /api/v1/client/teams/{id} | Delete a team
*TeamsApi* | [**getTeams**](docs/Api/TeamsApi.md#getteams) | **GET** /api/v1/client/teams | Get teams
*TeamsApi* | [**updateTeam**](docs/Api/TeamsApi.md#updateteam) | **PATCH** /api/v1/client/teams/{id} | Update a team
*UploadsApi* | [**completeMultipartUpload**](docs/Api/UploadsApi.md#completemultipartupload) | **POST** /api/v1/client/complete-upload | Complete a multipart upload to S3
*UploadsApi* | [**getPresignedUrl**](docs/Api/UploadsApi.md#getpresignedurl) | **GET** /api/v1/client/upload-presigned-url | Get a presigned URL for a specific part of a multipart upload
*UploadsApi* | [**initiateUpload**](docs/Api/UploadsApi.md#initiateupload) | **POST** /api/v1/client/initiate-upload | Initiate a multipart upload to S3 for a large file
*VenueApi* | [**createVenue**](docs/Api/VenueApi.md#createvenue) | **POST** /api/v1/client/venue | Create a new venue
*VenueApi* | [**deleteVenue**](docs/Api/VenueApi.md#deletevenue) | **DELETE** /api/v1/client/venue/{id} | Delete a venue
*VenueApi* | [**getVenues**](docs/Api/VenueApi.md#getvenues) | **GET** /api/v1/client/venues | Get all venues
*VenueApi* | [**updateVenue**](docs/Api/VenueApi.md#updatevenue) | **PATCH** /api/v1/client/venue/{id} | Update a venue

## Models

- [AddVideoToGameWithS3LinkDto](docs/Model/AddVideoToGameWithS3LinkDto.md)
- [Address](docs/Model/Address.md)
- [AddressDto](docs/Model/AddressDto.md)
- [BadRequestErrorResponseDto](docs/Model/BadRequestErrorResponseDto.md)
- [Classification](docs/Model/Classification.md)
- [ClientCreateGameWithVideoUrlDto](docs/Model/ClientCreateGameWithVideoUrlDto.md)
- [CompleteMultipartUploadDto](docs/Model/CompleteMultipartUploadDto.md)
- [CompleteMultipartUploadResponse](docs/Model/CompleteMultipartUploadResponse.md)
- [CompleteMultipartUploadResponseDto](docs/Model/CompleteMultipartUploadResponseDto.md)
- [CompletedPartDto](docs/Model/CompletedPartDto.md)
- [ConflictErrorResponseDto](docs/Model/ConflictErrorResponseDto.md)
- [Coordinates](docs/Model/Coordinates.md)
- [CoordinatesDto](docs/Model/CoordinatesDto.md)
- [CreateClassificationDto](docs/Model/CreateClassificationDto.md)
- [CreateMascotDto](docs/Model/CreateMascotDto.md)
- [CreateTeamDto](docs/Model/CreateTeamDto.md)
- [CreateTeamResponseDto](docs/Model/CreateTeamResponseDto.md)
- [CreateVenueDto](docs/Model/CreateVenueDto.md)
- [DefenseSectionDto](docs/Model/DefenseSectionDto.md)
- [DefenseStatsDto](docs/Model/DefenseStatsDto.md)
- [DefenseTotalsDto](docs/Model/DefenseTotalsDto.md)
- [DeleteResponseDto](docs/Model/DeleteResponseDto.md)
- [DownEfficiencyDto](docs/Model/DownEfficiencyDto.md)
- [FetchTeamResponseDto](docs/Model/FetchTeamResponseDto.md)
- [FumbleSectionDto](docs/Model/FumbleSectionDto.md)
- [FumbleStatsDto](docs/Model/FumbleStatsDto.md)
- [FumbleTotalsDto](docs/Model/FumbleTotalsDto.md)
- [GameAllPlayListItemDto](docs/Model/GameAllPlayListItemDto.md)
- [GameBoxScoreMetaDto](docs/Model/GameBoxScoreMetaDto.md)
- [GameBoxScoreResponseDto](docs/Model/GameBoxScoreResponseDto.md)
- [GameBoxScoreTeamsDto](docs/Model/GameBoxScoreTeamsDto.md)
- [GameDetailsResponse](docs/Model/GameDetailsResponse.md)
- [GameRecapScoringSummaryProResponse](docs/Model/GameRecapScoringSummaryProResponse.md)
- [GameRecapScoringSummaryResponse](docs/Model/GameRecapScoringSummaryResponse.md)
- [GameRecapTeamStatsResponse](docs/Model/GameRecapTeamStatsResponse.md)
- [GameScoreResponse](docs/Model/GameScoreResponse.md)
- [GameScoringSummaryDataDto](docs/Model/GameScoringSummaryDataDto.md)
- [GetPartsPresignUrlResponse](docs/Model/GetPartsPresignUrlResponse.md)
- [GetPartsPresignUrlResponseDto](docs/Model/GetPartsPresignUrlResponseDto.md)
- [InitiateMultipartUploadDto](docs/Model/InitiateMultipartUploadDto.md)
- [InitiateMultipartUploadResponse](docs/Model/InitiateMultipartUploadResponse.md)
- [InitiateMultipartUploadResponseDto](docs/Model/InitiateMultipartUploadResponseDto.md)
- [InterceptionSectionDto](docs/Model/InterceptionSectionDto.md)
- [InterceptionStatsDto](docs/Model/InterceptionStatsDto.md)
- [InterceptionTotalsDto](docs/Model/InterceptionTotalsDto.md)
- [KickingSectionDto](docs/Model/KickingSectionDto.md)
- [KickingStatsDto](docs/Model/KickingStatsDto.md)
- [KickingTotalsDto](docs/Model/KickingTotalsDto.md)
- [LineOfScrimmageDto](docs/Model/LineOfScrimmageDto.md)
- [ListClassificationPaginatedResponseDto](docs/Model/ListClassificationPaginatedResponseDto.md)
- [ListGameAllPlaysResponseDto](docs/Model/ListGameAllPlaysResponseDto.md)
- [ListGamesPaginatedResponseDto](docs/Model/ListGamesPaginatedResponseDto.md)
- [ListMascotPaginatedResponseDto](docs/Model/ListMascotPaginatedResponseDto.md)
- [ListPlayClipsResponseDto](docs/Model/ListPlayClipsResponseDto.md)
- [ListTeamPaginatedResponseDto](docs/Model/ListTeamPaginatedResponseDto.md)
- [ListVenuePaginatedResponseDto](docs/Model/ListVenuePaginatedResponseDto.md)
- [ListVideoPaginatedResponseDto](docs/Model/ListVideoPaginatedResponseDto.md)
- [Mascot](docs/Model/Mascot.md)
- [MascotResponseDto](docs/Model/MascotResponseDto.md)
- [NotFoundErrorResponseDto](docs/Model/NotFoundErrorResponseDto.md)
- [OffenseDto](docs/Model/OffenseDto.md)
- [PassingDto](docs/Model/PassingDto.md)
- [PassingSectionDto](docs/Model/PassingSectionDto.md)
- [PassingStatsDto](docs/Model/PassingStatsDto.md)
- [PassingTotalsDto](docs/Model/PassingTotalsDto.md)
- [PeriodScoreDto](docs/Model/PeriodScoreDto.md)
- [PlayAttributesListDto](docs/Model/PlayAttributesListDto.md)
- [PlayClipListDetailsDto](docs/Model/PlayClipListDetailsDto.md)
- [PlayClipListItemDto](docs/Model/PlayClipListItemDto.md)
- [ProScoringPlayDto](docs/Model/ProScoringPlayDto.md)
- [ReceivingSectionDto](docs/Model/ReceivingSectionDto.md)
- [ReceivingStatsDto](docs/Model/ReceivingStatsDto.md)
- [ReceivingTotalsDto](docs/Model/ReceivingTotalsDto.md)
- [RedZoneDto](docs/Model/RedZoneDto.md)
- [RushingDto](docs/Model/RushingDto.md)
- [RushingSectionDto](docs/Model/RushingSectionDto.md)
- [RushingStatsDto](docs/Model/RushingStatsDto.md)
- [RushingTotalsDto](docs/Model/RushingTotalsDto.md)
- [ScoringPlayPlayerInvolvedDto](docs/Model/ScoringPlayPlayerInvolvedDto.md)
- [ScoringSummaryProTeamDto](docs/Model/ScoringSummaryProTeamDto.md)
- [SingleClassificationResponseDto](docs/Model/SingleClassificationResponseDto.md)
- [SingleMascotResponseDto](docs/Model/SingleMascotResponseDto.md)
- [SingleTeamResponseDto](docs/Model/SingleTeamResponseDto.md)
- [SingleVenueResponseDto](docs/Model/SingleVenueResponseDto.md)
- [SingleVideoResponseDto](docs/Model/SingleVideoResponseDto.md)
- [TeamBasicInfoDto](docs/Model/TeamBasicInfoDto.md)
- [TeamBoxScoreDto](docs/Model/TeamBoxScoreDto.md)
- [TeamScoreDto](docs/Model/TeamScoreDto.md)
- [TeamStatsDto](docs/Model/TeamStatsDto.md)
- [TokenResponse](docs/Model/TokenResponse.md)
- [TurnoversDto](docs/Model/TurnoversDto.md)
- [UnauthorizedErrorResponseDto](docs/Model/UnauthorizedErrorResponseDto.md)
- [UpdateClassificationDto](docs/Model/UpdateClassificationDto.md)
- [UpdateMascotDto](docs/Model/UpdateMascotDto.md)
- [UpdateTeamDto](docs/Model/UpdateTeamDto.md)
- [UpdateVenueDto](docs/Model/UpdateVenueDto.md)
- [Venue](docs/Model/Venue.md)
- [VideoListItemDto](docs/Model/VideoListItemDto.md)

## Authorization

Authentication schemes defined for the API:
### Client-App-Id

- **Type**: API key
- **API key parameter name**: App-Id
- **Location**: HTTP header


### Client-App-Token

- **Type**: Bearer authentication (JWT)

### AppSecret

- **Type**: API key
- **API key parameter name**: App-Secret
- **Location**: HTTP header


## Tests

To run the tests, use:

```bash
composer install
vendor/bin/phpunit
```

## Author



## About this package

This PHP package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0`
    - Package version: `0.1.0`
    - Generator version: `7.25.0`
- Build package: `org.openapitools.codegen.languages.PhpClientCodegen`
