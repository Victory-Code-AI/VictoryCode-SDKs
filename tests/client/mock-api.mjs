// Mock Client API for the auth/retry helper tests (tests/client/run.sh).
//
//   GET  /api/v1/client/auth/token   App-Id: test-app, App-Secret: test-secret -> a new token each time
//   GET  /api/v1/client/games        needs a live token; the 1st and 2nd calls after /__mock/reset get 429
//   POST /api/v1/client/classifications   always 503 (a POST must not be retried)
//   POST /__mock/revoke              invalidates every token issued so far (next call gets 401)
//   POST /__mock/reset               resets counters and the 429 sequence
//   GET  /__mock/stats               { tokens, games, posts, unauthorized }
import { createServer } from "node:http";

const PORT = Number(process.env.MOCK_PORT ?? 4020);
let stats;
let live;
let throttleNext;

function reset() {
  stats = { tokens: 0, games: 0, posts: 0, unauthorized: 0 };
  live = new Set();
  throttleNext = 2;
}
reset();

function send(response, status, body) {
  response.writeHead(status, { "content-type": "application/json" });
  response.end(body === undefined ? "" : JSON.stringify(body));
}

createServer((request, response) => {
  const { pathname } = new URL(request.url, "http://localhost");
  const header = (name) => request.headers[name.toLowerCase()];
  request.resume();

  if (pathname === "/__mock/reset") return reset(), send(response, 200, { ok: true });
  if (pathname === "/__mock/revoke") return live.clear(), send(response, 200, { ok: true });
  if (pathname === "/__mock/stats") return send(response, 200, stats);

  if (pathname === "/api/v1/client/auth/token") {
    if (header("app-id") !== "test-app" || header("app-secret") !== "test-secret") {
      return send(response, 401, { code: 401, message: "Authorization failed" });
    }
    stats.tokens += 1;
    const token = `token-${stats.tokens}`;
    live.add(token);
    return send(response, 200, { accessToken: token, tokenType: "Bearer", expiresIn: 3600 });
  }

  const token = (header("authorization") ?? "").replace(/^Bearer /, "");
  if (header("app-id") !== "test-app" || !live.has(token)) {
    stats.unauthorized += 1;
    return send(response, 401, { code: 401, message: "Authorization failed" });
  }

  if (pathname === "/api/v1/client/games" && request.method === "GET") {
    stats.games += 1;
    if (throttleNext > 0) {
      throttleNext -= 1;
      return send(response, 429, { message: "Too Many Requests" });
    }
    return send(response, 200, { total: 0, limit: 10, offset: 0, data: [] });
  }

  if (pathname === "/api/v1/client/classifications" && request.method === "POST") {
    stats.posts += 1;
    return send(response, 503, { code: 503, message: "Service Unavailable" });
  }

  return send(response, 404, { code: 404, message: "Not found" });
}).listen(PORT, "127.0.0.1", () => console.log(`mock api on ${PORT}`));
