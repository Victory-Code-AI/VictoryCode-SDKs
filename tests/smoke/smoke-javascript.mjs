// Calls the mock API (Prism, from spec/openapi.json) through the generated TypeScript SDK.
import { AuthenticationApi, Configuration, GameRecapApi, GamesApi } from "../../javascript/dist/index.js";

const basePath = process.env.MOCK_URL ?? "http://127.0.0.1:4010";
const credentials = { "App-Id": "smoke-app-id", "App-Secret": "smoke-app-secret" };
let accessToken = "";
const config = new Configuration({ basePath, apiKey: (name) => credentials[name], accessToken: () => accessToken });

const token = await new AuthenticationApi(config).getAccessToken();
if (!token.accessToken) throw new Error("token missing");
accessToken = token.accessToken;

const score = await new GameRecapApi(config).getGameRecapScore({ videoId: "69e726ec40948bc7f421f3ba" });
if (!score) throw new Error("score missing");

const games = await new GamesApi(config).getGames({ limit: 10, offset: 0 });
if (!games.data) throw new Error("games missing");

console.log("javascript smoke ok");
