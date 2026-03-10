# Victory Code SDK Suite

This directory contains language-specific SDK implementations for Victory Code partner integrations.

## Environments

All SDKs resolve base URL dynamically from configuration or environment variables.

- `VICTORYCODE_API_BASE_URL` (required)
- `VICTORYCODE_APP_ID`
- `VICTORYCODE_APP_SECRET`
- `VICTORYCODE_APP_TOKEN`

## Endpoint Coverage

- `GET /api/v1/client/auth/token`
- `GET /api/v1/client/game-recap/:gameId/score`
- `GET /api/v1/client/game-recap/:gameId/scoring-summary`
- `GET /api/v1/client/game-recap/:gameId/team-stats`
- `GET /api/v1/client/games`
- `GET /api/v1/client/games/:gameId`
- `GET /api/v1/client/uploads/:uploadId`
- `POST /api/v1/client/uploads`

## SDKs

- [Python](./python/README.md)
- [JavaScript/TypeScript](./javascript/README.md)
- [Java](./java/README.md)
- [PHP](./php/README.md)
- [iOS (Swift)](./ios/README.md)
- [Android (Kotlin)](./android/README.md)
