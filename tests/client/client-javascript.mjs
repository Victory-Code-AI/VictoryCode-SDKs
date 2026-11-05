// Checks createVictoryCodeConfiguration against tests/client/mock-api.mjs.
import assert from "node:assert/strict";
import { ClassificationApi, GamesApi, createVictoryCodeConfiguration } from "../../javascript/dist/index.js";

const MOCK = process.env.MOCK_URL ?? "http://127.0.0.1:4020";
const mock = async (path, method = "POST") => (await fetch(`${MOCK}/__mock/${path}`, { method })).json();

await mock("reset");
const config = createVictoryCodeConfiguration({ appId: "test-app", appSecret: "test-secret", basePath: MOCK });
const games = new GamesApi(config);

// 429, 429, then 200: retried with backoff, one token.
assert.equal((await games.getGames({ limit: 10, offset: 0 })).total, 0);
assert.deepEqual(await mock("stats", "GET"), { tokens: 1, games: 3, posts: 0, unauthorized: 0 });

// The token is reused.
await games.getGames({ limit: 10, offset: 0 });
assert.equal((await mock("stats", "GET")).tokens, 1);

// A revoked token gets a 401 once, then a new token and a retry.
await mock("revoke");
await games.getGames({ limit: 10, offset: 0 });
const afterRevoke = await mock("stats", "GET");
assert.equal(afterRevoke.tokens, 2);
assert.equal(afterRevoke.unauthorized, 1);

// A POST that fails with 503 is not sent again.
await assert.rejects(new ClassificationApi(config).createClassification({ createClassificationDto: { name: "Varsity", description: "Test" } }));
assert.equal((await mock("stats", "GET")).posts, 1);

console.log("javascript client helper ok");
