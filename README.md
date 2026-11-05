# Victory Code SDKs

Official client libraries for the Victory Code (Tactix) API, **generated** from the API
spec published by the [developer portal](https://github.com/victory-code-ai/developers-portal)
with [OpenAPI Generator](https://openapi-generator.tech) 7.25.0.

| Language | Folder | Package | Generator |
| --- | --- | --- | --- |
| Python 3.10+ | `python/` | PyPI `victorycode-sdk` | `python` (urllib3, Pydantic v2) |
| JavaScript / TypeScript | `javascript/` | npm `@victorycode/sdk` | `typescript-fetch` |
| Java 8+ | `java/` | Maven Central `com.tactixai:victorycode-sdk` | `java` (OkHttp + Gson) |
| PHP 8.1+ | `php/` | Packagist `victorycode/sdk` | `php` (Guzzle 7) |
| Swift (iOS, macOS) | `ios/` | Swift Package Manager `VictoryCodeSDK` | `swift6` (async/await) |
| Kotlin / Android | `android/` | Maven Central `com.tactixai:victorycode-sdk-kotlin` | `kotlin` (OkHttp 4, Moshi) |

**Do not edit generated folders by hand.** They are wiped on every regeneration. Change
the API spec (via the portal admin), the generator options in `sdk.config.json`, or add
files under `overrides/<language>/`.

## How releases happen

```
Portal admin publishes a spec
  └─► repository_dispatch "api-spec-published"
        └─► regenerate.yml
              1. checks out the portal at the published commit
              2. continues only for the stable production API: the portal's latest version,
                 status "current", with a Production server (betas on Sandbox/UAT never ship)
              3. copies specs/<version>/openapi.json to spec/ (skips if the API surface is unchanged)
              4. bumps the shared SDK version: breaking -> major, otherwise minor
                 (while on 0.x, breaking -> minor)
              5. regenerates all six SDKs and pushes a sdk-release/vX.Y.Z branch
              6. sdk-ci.yml builds and tests every SDK and runs the mock-API smoke tests
              7. fast-forwards main and pushes tag vX.Y.Z
                    └─► release.yml: GitHub release + PyPI, npm, Maven Central, Packagist;
                        Swift Package Manager resolves the tag directly
```

All languages share one version number (`sdk.config.json` → `version`), recorded in
`CHANGELOG.md`. `spec/source.json` records the portal commit, API version and revision
each release was generated from. Nothing is released if any SDK fails to build or test.

Manual runs: **Actions → Regenerate SDKs → Run workflow** (choose the portal ref, bump
level, an explicit version such as `1.0.0`, or force a release after a generator upgrade).

## Quickstart

Every SDK uses the same flow: exchange the **App ID** and **App Secret** for an access token
(`GET /api/v1/client/auth/token`, valid for 1 hour), then call the API with the **App ID** and the
token as `Authorization: Bearer <token>`.

Each SDK ships a small helper that does this for you:

- **Tokens:** gets a token, reuses it until a minute before it expires, shares one refresh between
  parallel calls, and gets a new one if a call returns `401`.
- **Throttling:** the API allows 100 requests per second per environment and answers `429` without a
  `Retry-After` header above that. The helper retries `429` with exponential backoff and jitter
  (about 1 s, 2 s, 4 s, 8 s; at most 30 s; 4 retries by default).
- **Failures:** server errors (`500`, `502`, `503`, `504`) and network failures are retried only for
  requests that are safe to repeat (GET, PUT, DELETE), so a POST that creates something is never sent twice.

> **Keep the App Secret on servers.** The helpers are for server-side code. For browser and mobile
> apps, issue tokens from your backend and pass only the token (and App ID) to the client, as in the
> manual examples below.

### Python

```python
import os
from victorycode_sdk import GameRecapApi
from victorycode_sdk.client import VictoryCodeClient

client = VictoryCodeClient(os.environ["VICTORYCODE_APP_ID"], os.environ["VICTORYCODE_APP_SECRET"],
                           host="https://sandbox.api.tactixai.com")
score = GameRecapApi(client).get_game_recap_score("YOUR_VIDEO_ID")
```

### JavaScript / TypeScript

```ts
import { GameRecapApi, createVictoryCodeConfiguration } from "@victorycode/sdk";

const config = createVictoryCodeConfiguration({
  appId: process.env.VICTORYCODE_APP_ID!,
  appSecret: process.env.VICTORYCODE_APP_SECRET!,
  basePath: "https://sandbox.api.tactixai.com",
});
const score = await new GameRecapApi(config).getGameRecapScore({ videoId: "YOUR_VIDEO_ID" });
```

### Java

```java
import com.tactixai.victorycode.sdk.VictoryCodeClient;
import com.tactixai.victorycode.sdk.api.GameRecapApi;
import com.tactixai.victorycode.sdk.model.GameScoreResponse;

VictoryCodeClient client = new VictoryCodeClient(
    System.getenv("VICTORYCODE_APP_ID"), System.getenv("VICTORYCODE_APP_SECRET"), "https://sandbox.api.tactixai.com");
GameScoreResponse score = new GameRecapApi(client).getGameRecapScore("YOUR_VIDEO_ID");
```

### Kotlin

```kotlin
import com.tactixai.victorycode.sdk.VictoryCodeClient
import com.tactixai.victorycode.sdk.apis.GameRecapApi

// Calls are blocking: run them off the main thread (e.g. Dispatchers.IO).
val client = VictoryCodeClient(appId, appSecret, "https://sandbox.api.tactixai.com")
val score = GameRecapApi(client.basePath, client.httpClient).getGameRecapScore("YOUR_VIDEO_ID")
```

In an Android app, don't ship the App Secret. Get the token from your backend instead:

```kotlin
import com.tactixai.victorycode.sdk.infrastructure.ApiClient

ApiClient.apiKey["App-Id"] = appId
ApiClient.accessToken = tokenFromYourBackend
val score = GameRecapApi("https://sandbox.api.tactixai.com").getGameRecapScore("YOUR_VIDEO_ID")
```

### PHP

```php
use VictoryCode\SDK\Api\GameRecapApi;
use VictoryCode\SDK\VictoryCodeClient;

$vc = new VictoryCodeClient(getenv('VICTORYCODE_APP_ID'), getenv('VICTORYCODE_APP_SECRET'), 'https://sandbox.api.tactixai.com');
$score = (new GameRecapApi($vc->getHttpClient(), $vc->getConfig()))->getGameRecapScore('YOUR_VIDEO_ID');
```

### Swift

```swift
// Package.swift: .package(url: "https://github.com/Victory-Code-AI/VictoryCode-SDKs", from: "<version>")
import VictoryCodeSDK

// Server-side Swift: the helper gets and renews tokens and retries throttled calls.
let config = VictoryCodeSDKAPIConfiguration.victoryCode(appId: appId, appSecret: appSecret,
                                                        basePath: "https://sandbox.api.tactixai.com")
let score = try await GameRecapAPI(apiConfiguration: config).getGameRecapScore(videoId: "YOUR_VIDEO_ID")
```

In an iOS app, don't ship the App Secret. Get the token from your backend instead:

```swift
let config = VictoryCodeSDKAPIConfiguration.shared
config.basePath = "https://sandbox.api.tactixai.com"
config.customHeaders = ["App-Id": appId, "Authorization": "Bearer \(tokenFromYourBackend)"]
let score = try await GameRecapAPI().getGameRecapScore(videoId: "YOUR_VIDEO_ID")
```

The helpers live in `overrides/<language>/` and are copied into each SDK on every regeneration.
`tests/client/run.sh` tests them against a mock API that throttles, revokes tokens and fails POSTs.

Each folder's own `README.md` and `docs/` list every API class, method and model.

## Development

```bash
npm ci                                   # generator tooling (pins openapi-generator 7.25.0)
node scripts/sync-spec.mjs ../developers-portal/specs/v1/openapi.json   # take a spec
node scripts/generate.mjs [language...]  # regenerate (needs Java 11+)
scripts/verify.sh [language...]          # build + unit tests per language
tests/smoke/run.sh python javascript     # call a Prism mock of the spec through the SDKs
tests/client/run.sh [language...]        # auth/retry helpers against a throttling mock API
```

## Release setup

The pipeline needs these one-time settings in this repository:

| Kind | Name | Used for |
| --- | --- | --- |
| Secret | `SDK_BOT_TOKEN` | Fine-grained token or GitHub App token with *Contents: read and write* on this repo. Pushes release branches, `main`, and tags (tags pushed with the default token would not trigger `release.yml`). Must be allowed to push to `main` if it is protected. |
| Secret | `PORTAL_READ_TOKEN` | *Contents: read* on the developer-portal repo, to read `specs/`. |
| Variable | `PORTAL_REPO` | Optional, defaults to `victory-code-ai/developers-portal`. |
| Variable | `PUBLISH_PYPI` = `true` | Enables PyPI. Configure a [trusted publisher](https://docs.pypi.org/trusted-publishers/) for workflow `release.yml`, environment `pypi`. |
| Variable + secret | `PUBLISH_NPM` = `true`, `NPM_TOKEN` | Enables npm (automation token for the `@victorycode` scope). |
| Variable + secrets | `PUBLISH_MAVEN` = `true`, `MAVEN_CENTRAL_USERNAME`, `MAVEN_CENTRAL_PASSWORD`, `GPG_PUBLIC_KEY`, `GPG_SECRET_KEY`, `GPG_PASSPHRASE` | Enables Maven Central for Java and Kotlin (Central Portal user token, verified `com.tactixai` namespace, armored GPG keys). |
| Variable + secrets | `PUBLISH_PACKAGIST` = `true`, `PACKAGIST_USERNAME`, `PACKAGIST_TOKEN` | Optional immediate Packagist refresh. Register the package once on Packagist from this repository (the root `composer.json` points to `php/`). |

Swift needs no credentials: Swift Package Manager installs from the tags and the root
`Package.swift`. Registries without their `PUBLISH_*` variable are skipped, so they can be
onboarded one at a time.

In the developer portal, set `SDK_GITHUB_REPO` (and `SDK_DISPATCH_TOKEN` with *Contents:
read and write* on this repo) so publishing a spec triggers `regenerate.yml`.
