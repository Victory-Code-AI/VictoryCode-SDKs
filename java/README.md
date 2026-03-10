# Victory Code Java SDK Preview

## Overview

The Java SDK provides strict, service-friendly access to Victory Code APIs using:

- `OkHttp` for transport
- `Jackson` for JSON payload parsing
- Centralized auth and configuration in `VictoryCodeConfig`

## Installation

```xml
<dependency>
  <groupId>ai.victorycode</groupId>
  <artifactId>victorycode-sdk</artifactId>
  <version>0.1.0</version>
</dependency>
```

Local build:

```bash
cd sdks/java
mvn -q -DskipTests package
```

## Configuration

```bash
export VICTORYCODE_API_BASE_URL="https://your-api-host"
export VICTORYCODE_APP_ID="your-app-id"
export VICTORYCODE_APP_SECRET="your-app-secret"
```

## Quick Start

```java
VictoryCodeConfig config = VictoryCodeConfig.builder().build();
VictoryCodeClient client = new VictoryCodeClient(config);

client.generateAccessToken();
JsonNode recap = client.getGameRecapScore("68d153065f30985c10760a68");
System.out.println(recap.get("message").asText());
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

- API failures throw `ApiException` with `statusCode` and raw `responseBody`.
- Invalid SDK config throws `IllegalStateException`.
