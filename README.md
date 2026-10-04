# Victory Code SDKs

Official client libraries for the Victory Code (Tactix) API, **generated** from the API
spec published by the [developer portal](https://github.com/victory-code-ai/developers-portal)
with [OpenAPI Generator](https://openapi-generator.tech) 7.25.0.

| Language | Folder | Package | Generator |
| --- | --- | --- | --- |
| Python 3.10+ | `python/` | PyPI `victorycode-sdk` | `python` (urllib3, Pydantic v2) |
| JavaScript / TypeScript | `javascript/` | npm `@victorycode/sdk` | `typescript-fetch` |
| Java 8+ | `java/` | Maven Central `ai.victorycode:victorycode-sdk` | `java` (OkHttp + Gson) |
| PHP 8.1+ | `php/` | Packagist `victorycode/sdk` | `php` (Guzzle 7) |
| Swift (iOS, macOS) | `ios/` | Swift Package Manager `VictoryCodeSDK` | `swift6` (async/await) |
| Kotlin / Android | `android/` | Maven Central `ai.victorycode:victorycode-sdk-kotlin` | `kotlin` (OkHttp 4, Moshi) |

**Do not edit generated folders by hand.** They are wiped on every regeneration. Change
the API spec (via the portal admin), the generator options in `sdk.config.json`, or add
files under `overrides/<language>/`.

## How releases happen

```
Portal admin publishes a spec
  └─► repository_dispatch "api-spec-published"
        └─► regenerate.yml
              1. checks out the portal at the published commit
              2. continues only if that version is the portal's latest version
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

Every SDK uses the same flow: exchange the **App ID** and **App Secret** for a short-lived
access token (`GET /api/v1/client/auth/token`, valid for `expiresIn` seconds), then call
the API with the **App ID** and the token as `Authorization: Bearer <token>`.

> **Keep the App Secret on servers.** For browser and mobile apps, issue tokens from your
> backend and pass only the token (and App ID) to the client.

### Python

```python
import os
import victorycode_sdk
from victorycode_sdk.api.authentication_api import AuthenticationApi
from victorycode_sdk.api.game_recap_api import GameRecapApi

config = victorycode_sdk.Configuration(
    host="https://sandbox.api.tactixai.com",
    api_key={"Client-App-Id": os.environ["VICTORYCODE_APP_ID"], "AppSecret": os.environ["VICTORYCODE_APP_SECRET"]},
)
with victorycode_sdk.ApiClient(config) as client:
    config.access_token = AuthenticationApi(client).get_access_token().access_token
    score = GameRecapApi(client).get_game_recap_score("YOUR_VIDEO_ID")
```

### JavaScript / TypeScript

```ts
import { AuthenticationApi, Configuration, GameRecapApi } from "@victorycode/sdk";

// apiKey is called with each API key's header name.
const credentials: Record<string, string> = {
  "App-Id": process.env.VICTORYCODE_APP_ID!,
  "App-Secret": process.env.VICTORYCODE_APP_SECRET!,
};
let accessToken = "";
const config = new Configuration({
  basePath: "https://sandbox.api.tactixai.com",
  apiKey: (name) => credentials[name],
  accessToken: () => accessToken,
});

accessToken = (await new AuthenticationApi(config).getAccessToken()).accessToken;
const score = await new GameRecapApi(config).getGameRecapScore({ videoId: "YOUR_VIDEO_ID" });
```

### Java

```java
import ai.victorycode.sdk.ApiClient;
import ai.victorycode.sdk.Configuration;
import ai.victorycode.sdk.api.AuthenticationApi;
import ai.victorycode.sdk.api.GameRecapApi;
import ai.victorycode.sdk.auth.ApiKeyAuth;
import ai.victorycode.sdk.auth.HttpBearerAuth;
import ai.victorycode.sdk.model.GameScoreResponse;

ApiClient client = Configuration.getDefaultApiClient();
client.setBasePath("https://sandbox.api.tactixai.com");
((ApiKeyAuth) client.getAuthentication("Client-App-Id")).setApiKey(System.getenv("VICTORYCODE_APP_ID"));
((ApiKeyAuth) client.getAuthentication("AppSecret")).setApiKey(System.getenv("VICTORYCODE_APP_SECRET"));

String token = new AuthenticationApi(client).getAccessToken().getAccessToken();
((HttpBearerAuth) client.getAuthentication("Client-App-Token")).setBearerToken(token);
GameScoreResponse score = new GameRecapApi(client).getGameRecapScore("YOUR_VIDEO_ID");
```

### Kotlin / Android

```kotlin
import ai.victorycode.sdk.apis.GameRecapApi
import ai.victorycode.sdk.infrastructure.ApiClient

// Calls are blocking: on Android run them off the main thread (e.g. Dispatchers.IO).
ApiClient.apiKey["App-Id"] = appId
ApiClient.accessToken = tokenFromYourBackend
val score = GameRecapApi("https://sandbox.api.tactixai.com").getGameRecapScore("YOUR_VIDEO_ID")
```

### PHP

```php
use VictoryCode\SDK\Api\AuthenticationApi;
use VictoryCode\SDK\Api\GameRecapApi;
use VictoryCode\SDK\Configuration;

$config = Configuration::getDefaultConfiguration()
    ->setHost('https://sandbox.api.tactixai.com')
    ->setApiKey('App-Id', getenv('VICTORYCODE_APP_ID'))
    ->setApiKey('App-Secret', getenv('VICTORYCODE_APP_SECRET'));

$config->setAccessToken((new AuthenticationApi(null, $config))->getAccessToken()->getAccessToken());
$score = (new GameRecapApi(null, $config))->getGameRecapScore('YOUR_VIDEO_ID');
```

### Swift

```swift
// Package.swift: .package(url: "https://github.com/victory-code-ai/victorycode-sdks", from: "<version>")
import VictoryCodeSDK

let config = VictoryCodeSDKAPIConfiguration.shared
config.basePath = "https://sandbox.api.tactixai.com"
config.customHeaders = ["App-Id": appId, "Authorization": "Bearer \(tokenFromYourBackend)"]
let score = try await GameRecapAPI().getGameRecapScore(videoId: "YOUR_VIDEO_ID")
```

Each folder's own `README.md` and `docs/` list every API class, method and model.

## Development

```bash
npm ci                                   # generator tooling (pins openapi-generator 7.25.0)
node scripts/sync-spec.mjs ../developers-portal/specs/v1/openapi.json   # take a spec
node scripts/generate.mjs [language...]  # regenerate (needs Java 11+)
scripts/verify.sh [language...]          # build + unit tests per language
tests/smoke/run.sh python javascript     # call a Prism mock of the spec through the SDKs
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
| Variable + secrets | `PUBLISH_MAVEN` = `true`, `MAVEN_CENTRAL_USERNAME`, `MAVEN_CENTRAL_PASSWORD`, `GPG_PUBLIC_KEY`, `GPG_SECRET_KEY`, `GPG_PASSPHRASE` | Enables Maven Central for Java and Kotlin (Central Portal user token, verified `ai.victorycode` namespace, armored GPG keys). |
| Variable + secrets | `PUBLISH_PACKAGIST` = `true`, `PACKAGIST_USERNAME`, `PACKAGIST_TOKEN` | Optional immediate Packagist refresh. Register the package once on Packagist from this repository (the root `composer.json` points to `php/`). |

Swift needs no credentials: Swift Package Manager installs from the tags and the root
`Package.swift`. Registries without their `PUBLISH_*` variable are skipped, so they can be
onboarded one at a time.

In the developer portal, set `SDK_GITHUB_REPO` (and `SDK_DISPATCH_TOKEN` with *Contents:
read and write* on this repo) so publishing a spec triggers `regenerate.yml`.
