# Victory Code JavaScript/TypeScript SDK Preview

## Overview

`@victorycode/sdk` is a typed JavaScript/TypeScript client for:

- Aggregated game recap APIs
- Granular games/uploads APIs
- Secure header-based auth with centralized token handling

It uses the platform `fetch` API and works in modern Node.js and browser runtimes.

## Installation

```bash
npm install @victorycode/sdk
```

From local source:

```bash
cd sdks/javascript
npm install
npm run build
```

## Configuration

```bash
export VICTORYCODE_API_BASE_URL="https://your-api-host"
export VICTORYCODE_APP_ID="your-app-id"
export VICTORYCODE_APP_SECRET="your-app-secret"
```

## Quick Start (First Successful Call)

```ts
import { VictoryCodeClient } from "@victorycode/sdk";

const client = new VictoryCodeClient();

await client.generateAccessToken();

const gameId = "68d153065f30985c10760a68";
const recap = await client.getGameRecapScore(gameId);
console.log(recap.data);
```

Node video upload example (`POST /api/v1/client/uploads`):

```ts
import { openAsBlob } from "node:fs";

const video = await openAsBlob("./Clip004.mp4");
await client.uploadVideoAndCreateGame({
  name: "Varsity Football | Team A vs Team B",
  video,
  homeTeam: "68d14e695f30985c1075fcaa",
  awayTeam: "68d14ec65f30985c1075fe09",
  venue: "Revolutionary Field",
  location: "Washington Crossing, PA",
});
```

Sample response schema (`GET /api/v1/client/games/:gameId`):

```json
{
  "message": "Single Game",
  "data": {
    "gameName": "Varsity Football | Team A vs Team B",
    "gameId": "{Unique UUID of the game}",
    "homeTeam": { "teamId": "{Unique UUID}", "name": "Team A" },
    "awayTeam": { "teamId": "{Unique UUID}", "name": "Team B" }
  }
}
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

All non-2xx responses throw `VictoryCodeApiError` with `status` and structured `payload`.

## Portal Preview Styling Note

In portal rendering, keep SDK code blocks on dark surfaces with white text for accessibility consistency.
