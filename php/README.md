# VictoryCodeSDK

This collection provides the core set of APIs for Tactix clients to interact with the platform. It covers authentication and token management, as well as a wide range of game-related endpoints including uploading full games, fetching generated clips, checking clipping status, retrieving game scoring summaries, and accessing detailed team statistics. All requests are versioned to ensure backward compatibility and smooth upgrades.


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



// Configure API key authorization: AppId
$config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKey('App-Id', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('App-Id', 'Bearer');

// Configure API key authorization: AppSecret
$config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKey('app-secret', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = VictoryCode\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('app-secret', 'Bearer');


$apiInstance = new VictoryCode\SDK\Api\AuthApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->generateAccessToken();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AuthApi->generateAccessToken: ', $e->getMessage(), PHP_EOL;
}

```

## API Endpoints

All URIs are relative to *https://sandbox.api.tactixai.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AuthApi* | [**generateAccessToken**](docs/Api/AuthApi.md#generateaccesstoken) | **GET** /api/v1/client/auth/token | Get client api token
*ClassificationsApi* | [**createClassification**](docs/Api/ClassificationsApi.md#createclassification) | **POST** /api/v1/client/classifications | Create a new classification
*ClassificationsApi* | [**deleteClassification**](docs/Api/ClassificationsApi.md#deleteclassification) | **DELETE** /api/v1/client/classifications/{id} | Delete a classification
*ClassificationsApi* | [**listClassifications**](docs/Api/ClassificationsApi.md#listclassifications) | **GET** /api/v1/client/classifications | Get all classifications
*ClassificationsApi* | [**updateClassification**](docs/Api/ClassificationsApi.md#updateclassification) | **PATCH** /api/v1/client/classifications/{id} | Update a classification
*GameRecapApi* | [**getGameRecapScore**](docs/Api/GameRecapApi.md#getgamerecapscore) | **GET** /api/v1/client/game-recap/{gameId}/score | Get the Game Recap Score for a specific Game
*GameRecapApi* | [**getGameRecapScoringSummary**](docs/Api/GameRecapApi.md#getgamerecapscoringsummary) | **GET** /api/v1/client/game-recap/{gameId}/scoring-summary | Get the Game Recap Scoring Summary for a specific Game.
*GameRecapApi* | [**getGameRecapTeamStats**](docs/Api/GameRecapApi.md#getgamerecapteamstats) | **GET** /api/v1/client/game-recap/{gameId}/team-stats | Get the Game Recap Team Stats for a specific Game.
*GamesApi* | [**getGame**](docs/Api/GamesApi.md#getgame) | **GET** /api/v1/client/games/{gameId} | Get single game
*GamesApi* | [**listGames**](docs/Api/GamesApi.md#listgames) | **GET** /api/v1/client/games | Get All Games
*MascotsApi* | [**createMascot**](docs/Api/MascotsApi.md#createmascot) | **POST** /api/v1/client/mascots | Create a new mascot
*MascotsApi* | [**deleteMascot**](docs/Api/MascotsApi.md#deletemascot) | **DELETE** /api/v1/client/mascots/{id} | Delete a mascot
*MascotsApi* | [**listMascots**](docs/Api/MascotsApi.md#listmascots) | **GET** /api/v1/client/mascots | Get all mascots
*MascotsApi* | [**updateMascot**](docs/Api/MascotsApi.md#updatemascot) | **PATCH** /api/v1/client/mascots/{id} | Update a mascot
*TeamsApi* | [**createTeam**](docs/Api/TeamsApi.md#createteam) | **POST** /api/v1/client/teams | Create a new team
*TeamsApi* | [**deleteTeam**](docs/Api/TeamsApi.md#deleteteam) | **DELETE** /api/v1/client/teams/{id} | Delete a team
*TeamsApi* | [**listTeams**](docs/Api/TeamsApi.md#listteams) | **GET** /api/v1/client/teams | Get teams
*TeamsApi* | [**updateTeam**](docs/Api/TeamsApi.md#updateteam) | **PATCH** /api/v1/client/teams/{id} | Update a team
*UploadsApi* | [**getUploadStatus**](docs/Api/UploadsApi.md#getuploadstatus) | **GET** /api/v1/client/uploads/{uploadId} | Video file upload status
*UploadsApi* | [**uploadVideoAndCreateGame**](docs/Api/UploadsApi.md#uploadvideoandcreategame) | **POST** /api/v1/client/uploads | Upload video and create new game

## Models

- [CreateClassificationRequest](docs/Model/CreateClassificationRequest.md)
- [CreateClassificationResponse](docs/Model/CreateClassificationResponse.md)
- [CreateClassificationResponseData](docs/Model/CreateClassificationResponseData.md)
- [CreateMascotResponse](docs/Model/CreateMascotResponse.md)
- [CreateMascotResponseData](docs/Model/CreateMascotResponseData.md)
- [CreateTeamResponse](docs/Model/CreateTeamResponse.md)
- [CreateTeamResponseData](docs/Model/CreateTeamResponseData.md)
- [DeleteClassificationResponse](docs/Model/DeleteClassificationResponse.md)
- [DeleteMascotResponse](docs/Model/DeleteMascotResponse.md)
- [DeleteTeamResponse](docs/Model/DeleteTeamResponse.md)
- [GenerateAccessTokenResponse](docs/Model/GenerateAccessTokenResponse.md)
- [GetGameRecapScoreResponse](docs/Model/GetGameRecapScoreResponse.md)
- [GetGameRecapScoreResponseData](docs/Model/GetGameRecapScoreResponseData.md)
- [GetGameRecapScoreResponseDataHomeTeam](docs/Model/GetGameRecapScoreResponseDataHomeTeam.md)
- [GetGameRecapScoreResponseDataHomeTeamPeriodScoresInner](docs/Model/GetGameRecapScoreResponseDataHomeTeamPeriodScoresInner.md)
- [GetGameRecapScoringSummaryResponse](docs/Model/GetGameRecapScoringSummaryResponse.md)
- [GetGameRecapScoringSummaryResponseData](docs/Model/GetGameRecapScoringSummaryResponseData.md)
- [GetGameRecapScoringSummaryResponseDataDataInnerInner](docs/Model/GetGameRecapScoringSummaryResponseDataDataInnerInner.md)
- [GetGameRecapTeamStatsResponse](docs/Model/GetGameRecapTeamStatsResponse.md)
- [GetGameRecapTeamStatsResponseData](docs/Model/GetGameRecapTeamStatsResponseData.md)
- [GetGameRecapTeamStatsResponseDataHomeTeam](docs/Model/GetGameRecapTeamStatsResponseDataHomeTeam.md)
- [GetGameRecapTeamStatsResponseDataHomeTeamFirstDowns](docs/Model/GetGameRecapTeamStatsResponseDataHomeTeamFirstDowns.md)
- [GetGameRecapTeamStatsResponseDataHomeTeamOffense](docs/Model/GetGameRecapTeamStatsResponseDataHomeTeamOffense.md)
- [GetGameRecapTeamStatsResponseDataHomeTeamPassing](docs/Model/GetGameRecapTeamStatsResponseDataHomeTeamPassing.md)
- [GetGameResponse](docs/Model/GetGameResponse.md)
- [GetGameResponseData](docs/Model/GetGameResponseData.md)
- [GetGameResponseDataHomeTeam](docs/Model/GetGameResponseDataHomeTeam.md)
- [GetUploadStatusResponse](docs/Model/GetUploadStatusResponse.md)
- [GetUploadStatusResponseData](docs/Model/GetUploadStatusResponseData.md)
- [ListClassificationsResponse](docs/Model/ListClassificationsResponse.md)
- [ListClassificationsResponseDataInner](docs/Model/ListClassificationsResponseDataInner.md)
- [ListClassificationsResponsePagination](docs/Model/ListClassificationsResponsePagination.md)
- [ListGamesResponse](docs/Model/ListGamesResponse.md)
- [ListGamesResponseData](docs/Model/ListGamesResponseData.md)
- [ListGamesResponseDataGamesInner](docs/Model/ListGamesResponseDataGamesInner.md)
- [ListGamesResponseDataGamesInnerHomeTeam](docs/Model/ListGamesResponseDataGamesInnerHomeTeam.md)
- [ListMascotsResponse](docs/Model/ListMascotsResponse.md)
- [ListMascotsResponseDataInner](docs/Model/ListMascotsResponseDataInner.md)
- [UpdateClassificationRequest](docs/Model/UpdateClassificationRequest.md)
- [UpdateClassificationResponse](docs/Model/UpdateClassificationResponse.md)
- [UpdateMascotResponse](docs/Model/UpdateMascotResponse.md)
- [UploadVideoAndCreateGameResponse](docs/Model/UploadVideoAndCreateGameResponse.md)
- [UploadVideoAndCreateGameResponseData](docs/Model/UploadVideoAndCreateGameResponseData.md)

## Authorization

Authentication schemes defined for the API:
### AppId

- **Type**: API key
- **API key parameter name**: App-Id
- **Location**: HTTP header


### AppSecret

- **Type**: API key
- **API key parameter name**: app-secret
- **Location**: HTTP header


### AppToken

- **Type**: API key
- **API key parameter name**: App-Token
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

- API version: `1.0.0`
    - Package version: `0.1.0`
    - Generator version: `7.25.0`
- Build package: `org.openapitools.codegen.languages.PhpClientCodegen`
