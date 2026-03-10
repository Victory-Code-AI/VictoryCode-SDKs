# Victory Code iOS (Swift) SDK Preview

## Overview

The Swift SDK is built for modern async/await workflows and supports:

- Token generation
- Aggregated recap endpoints
- Granular games/uploads endpoints

## Installation

Swift Package Manager:

```swift
.package(url: "https://github.com/victorycode/victorycode-ios-sdk.git", from: "0.1.0")
```

Local package:

```bash
cd sdks/ios
swift build
```

## Configuration

Use `VictoryCodeConfiguration` with explicit values or `fromEnvironment()`.

```swift
let config = try VictoryCodeConfiguration.fromEnvironment()
let client = VictoryCodeClient(config: config)
```

## Quick Start

```swift
let token = try await client.generateAccessToken()
print(token["message"] ?? "")

let recap = try await client.getGameRecapScore(gameId: "68d153065f30985c10760a68")
print(recap["data"] ?? [:])
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

All SDK errors use `VictoryCodeSDKError`, including API status failures and missing config.
