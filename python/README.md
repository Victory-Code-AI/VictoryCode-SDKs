# Victory Code Python SDK Preview

## Overview

`victorycode-sdk` provides an idiomatic Python client for:

- Aggregated game recap endpoints
- Granular game/upload endpoints
- Token generation and header-based authentication

Code style follows PEP 8 and uses `httpx` for resilient HTTP I/O.

## Installation

```bash
pip install victorycode-sdk
```

From local source:

```bash
pip install -e ./sdks/python
```

## Configuration

```bash
export VICTORYCODE_API_BASE_URL="https://your-api-host"
export VICTORYCODE_APP_ID="your-app-id"
export VICTORYCODE_APP_SECRET="your-app-secret"
```

## Quick Start (First Successful Call)

```python
from victorycode_sdk import VictoryCodeClient

with VictoryCodeClient() as client:
    token_payload = client.generate_access_token()
    print(token_payload["message"])

    game_id = "68d153065f30985c10760a68"
    recap = client.get_game_recap_score(game_id)
    print(recap["data"]["homeTeam"]["totalScore"])
```

Sample response schema (`GET /api/v1/client/game-recap/:gameId/score`):

```json
{
  "message": "Game Recap Score for a specific Game",
  "data": {
    "gameId": "{Unique UUID of the game}",
    "homeTeam": {
      "teamId": "{Unique UUID of the home team}",
      "name": "Lakeland",
      "totalScore": 37,
      "periodScores": [{ "period": 1, "name": "Q1", "score": 0 }]
    },
    "awayTeam": {
      "teamId": "{Unique UUID of the away team}",
      "name": "St. Thomas Aquinas",
      "totalScore": 44,
      "periodScores": [{ "period": 1, "name": "Q1", "score": 10 }]
    }
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

- 4xx/5xx responses raise `VictoryCodeApiError`
- Transport failures raise `VictoryCodeNetworkError`
- Missing environment/config values raise `VictoryCodeConfigurationError`

## Portal Preview Styling Note

When rendered in the Victory Code portal, use the shared dark code-block renderer so code/JSON text stays white in light mode.
