# Victory Code Android (Kotlin) SDK Preview

## Overview

The Kotlin SDK uses `OkHttp` + coroutines for async API access and includes:

- Dynamic environment/config setup
- Centralized auth headers
- Full recap + granular endpoint coverage

## Installation

```kotlin
dependencies {
  implementation("ai.victorycode:victorycode-sdk:0.1.0")
}
```

Local build:

```bash
cd sdks/android
./gradlew build
```

## Configuration

```kotlin
val client = VictoryCodeClient(VictoryCodeClient.Config.fromEnvironment())
```

Required env at runtime:

- `VICTORYCODE_API_BASE_URL`
- `VICTORYCODE_APP_ID`
- `VICTORYCODE_APP_SECRET`

## Quick Start

```kotlin
val token = client.generateAccessToken()
println(token.getString("message"))

val recap = client.getGameRecapScore("68d153065f30985c10760a68")
println(recap.toString(2))
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

API failures raise `ApiException(statusCode, payload, message)`.
