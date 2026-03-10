# Victory Code PHP SDK Preview

## Overview

The PHP SDK provides a PSR-friendly wrapper around Victory Code APIs using `guzzlehttp/guzzle`.

## Installation

```bash
composer require victorycode/sdk
```

Local install:

```bash
cd sdks/php
composer install
```

## Configuration

```bash
export VICTORYCODE_API_BASE_URL="https://your-api-host"
export VICTORYCODE_APP_ID="your-app-id"
export VICTORYCODE_APP_SECRET="your-app-secret"
```

## Quick Start

```php
<?php

use VictoryCode\SDK\VictoryCodeClient;

$client = new VictoryCodeClient();
$client->generateAccessToken();

$recap = $client->getGameRecapScore('68d153065f30985c10760a68');
echo $recap['message'];
```

## Method Reference

| Method | HTTP | Path |
| --- | --- | --- |
| `generateAccessToken` | GET | `/api/v1/client/auth/token` |
| `getGameRecapScore` | GET | `/api/v1/client/game-recap/:gameId/score` |
| `getGameRecapScoringSummary` | GET | `/api/v1/client/game-recap/:gameId/scoring-summary` |
| `getGameRecapTeamStats` | GET | `/api/v1/client/game-recap/:gameId/team-stats` |
| `listGames` | GET | `/api/v1/client/games` |
| `getGame` | GET | `/api/v1/client/games/:gameId` |
| `getUploadStatus` | GET | `/api/v1/client/uploads/:uploadId` |
| `uploadVideoAndCreateGame` | POST | `/api/v1/client/uploads` |

## Error Handling

API errors throw `VictoryCode\SDK\ApiException` with status code and payload.
