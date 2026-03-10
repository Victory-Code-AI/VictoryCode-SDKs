import { VictoryCodeApiError, VictoryCodeConfigError } from "./errors";
import type {
  ApiEnvelope,
  TokenResponse,
  UploadVideoRequest,
  VictoryCodeClientConfig,
} from "./types";

function getEnv(name: string): string | undefined {
  const runtime = globalThis as { process?: { env?: Record<string, string | undefined> } };
  return runtime.process?.env?.[name];
}

function readRequired(name: string, value?: string): string {
  const resolved = value ?? getEnv(name);
  if (!resolved) {
    throw new VictoryCodeConfigError(
      `Missing ${name}. Set it in environment variables or constructor config.`,
    );
  }
  return resolved.trim().replace(/\/+$/, "");
}

function readOptional(name: string, value?: string): string | undefined {
  const resolved = value ?? getEnv(name);
  return resolved?.trim();
}

export class VictoryCodeClient {
  private readonly baseUrl: string;
  private appId?: string;
  private appSecret?: string;
  private appToken?: string;
  private readonly timeoutMs: number;
  private readonly fetchFn: typeof fetch;

  constructor(config: VictoryCodeClientConfig = {}) {
    this.baseUrl = readRequired(
      "VICTORYCODE_API_BASE_URL",
      config.baseUrl ?? getEnv("NEXT_PUBLIC_VICTORYCODE_API_BASE_URL"),
    );
    this.appId = readOptional("VICTORYCODE_APP_ID", config.appId);
    this.appSecret = readOptional("VICTORYCODE_APP_SECRET", config.appSecret);
    this.appToken = readOptional("VICTORYCODE_APP_TOKEN", config.appToken);
    this.timeoutMs = config.timeoutMs ?? 30_000;
    this.fetchFn = config.fetchFn ?? fetch;
  }

  setAccessToken(token: string): void {
    this.appToken = token;
  }

  // Auth
  async generateAccessToken(): Promise<TokenResponse> {
    this.requireAppCredentials();
    const payload = await this.request<TokenResponse>("GET", "/api/v1/client/auth/token", {
      headers: {
        "app-id": this.appId as string,
        "app-secret": this.appSecret as string,
      },
    });

    if (payload.token) {
      this.appToken = payload.token;
    }
    return payload;
  }

  // Granular Play-by-Play
  getUploadStatus(uploadId: string): Promise<ApiEnvelope> {
    return this.request("GET", `/api/v1/client/uploads/${encodeURIComponent(uploadId)}`, {
      headers: this.tokenHeaders(),
    });
  }

  uploadVideoAndCreateGame(request: UploadVideoRequest): Promise<ApiEnvelope> {
    const formData = new FormData();
    formData.set("name", request.name);
    formData.set("video", request.video);
    formData.set("homeTeam", request.homeTeam);
    formData.set("awayTeam", request.awayTeam);
    formData.set("venue", request.venue);
    formData.set("location", request.location);
    if (request.description) {
      formData.set("description", request.description);
    }

    return this.request("POST", "/api/v1/client/uploads", {
      headers: this.tokenHeaders(false),
      body: formData,
    });
  }

  getGame(gameId: string): Promise<ApiEnvelope> {
    return this.request("GET", `/api/v1/client/games/${encodeURIComponent(gameId)}`, {
      headers: this.tokenHeaders(),
    });
  }

  listGames(limit = 10, page = 1): Promise<ApiEnvelope> {
    return this.request("GET", "/api/v1/client/games", {
      query: {
        limit: String(limit),
        page: String(page),
      },
      headers: this.tokenHeaders(),
    });
  }

  // Aggregated Game Recaps
  getGameRecapScore(gameId: string): Promise<ApiEnvelope> {
    return this.request("GET", `/api/v1/client/game-recap/${encodeURIComponent(gameId)}/score`, {
      headers: this.tokenHeaders(),
    });
  }

  getGameRecapScoringSummary(gameId: string): Promise<ApiEnvelope> {
    return this.request(
      "GET",
      `/api/v1/client/game-recap/${encodeURIComponent(gameId)}/scoring-summary`,
      {
        headers: this.tokenHeaders(),
      },
    );
  }

  getGameRecapTeamStats(gameId: string): Promise<ApiEnvelope> {
    return this.request("GET", `/api/v1/client/game-recap/${encodeURIComponent(gameId)}/team-stats`, {
      headers: this.tokenHeaders(),
    });
  }

  private async request<T>(
    method: string,
    path: string,
    options: {
      headers?: Record<string, string>;
      query?: Record<string, string>;
      body?: BodyInit;
    } = {},
  ): Promise<T> {
    const url = new URL(`${this.baseUrl}${path}`);
    if (options.query) {
      for (const [key, value] of Object.entries(options.query)) {
        url.searchParams.set(key, value);
      }
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
      const response = await this.fetchFn(url.toString(), {
        method,
        headers: options.headers,
        body: options.body,
        signal: controller.signal,
      });

      const payload = await this.readPayload(response);
      if (!response.ok) {
        const message =
          (payload as { message?: string; error?: { message?: string } })?.message ??
          (payload as { error?: { message?: string } })?.error?.message ??
          "Request failed";
        throw new VictoryCodeApiError(response.status, message, payload);
      }

      return payload as T;
    } finally {
      clearTimeout(timeout);
    }
  }

  private async readPayload(response: Response): Promise<unknown> {
    const text = await response.text();
    if (!text) {
      return {};
    }

    try {
      return JSON.parse(text);
    } catch {
      return { raw: text };
    }
  }

  private requireAppCredentials(): void {
    if (!this.appId || !this.appSecret) {
      throw new VictoryCodeConfigError(
        "appId and appSecret are required. Set VICTORYCODE_APP_ID and VICTORYCODE_APP_SECRET.",
      );
    }
  }

  private tokenHeaders(withJsonAccept = true): Record<string, string> {
    if (!this.appId || !this.appToken) {
      throw new VictoryCodeConfigError(
        "appId and appToken are required. Set VICTORYCODE_APP_ID and VICTORYCODE_APP_TOKEN or call generateAccessToken().",
      );
    }

    const headers: Record<string, string> = {
      "App-Id": this.appId,
      "App-Token": this.appToken,
    };

    if (withJsonAccept) {
      headers.Accept = "application/json";
    }

    return headers;
  }
}
