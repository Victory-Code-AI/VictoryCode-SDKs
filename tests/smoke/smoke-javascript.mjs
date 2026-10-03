// Calls the mock API (Prism, from spec/openapi.json) through the generated TypeScript SDK.
import { AuthApi, Configuration, GameRecapApi, GamesApi } from "../../javascript/dist/index.js";

const basePath = process.env.MOCK_URL ?? "http://127.0.0.1:4010";
const credentials = { "App-Id": "smoke-app-id", "app-secret": "smoke-app-secret" };
const config = () => new Configuration({ basePath, apiKey: (name) => credentials[name] });

const token = await new AuthApi(config()).generateAccessToken();
if (!token.token) throw new Error("token missing");
credentials["App-Token"] = token.token;

const recap = await new GameRecapApi(config()).getGameRecapScore({ gameId: "68d153065f30985c10760a68" });
if (!recap.data?.homeTeam) throw new Error(`unexpected recap ${JSON.stringify(recap)}`);

const games = await new GamesApi(config()).listGames({ limit: 10, page: 1 });
if (!games.data) throw new Error("games missing");

console.log("javascript smoke ok");
