export interface VictoryCodeClientConfig {
  baseUrl?: string;
  appId?: string;
  appSecret?: string;
  appToken?: string;
  timeoutMs?: number;
  fetchFn?: typeof fetch;
}

export interface UploadVideoRequest {
  name: string;
  video: Blob | File;
  homeTeam: string;
  awayTeam: string;
  venue: string;
  location: string;
  description?: string;
}

export interface TokenResponse {
  token: string;
  message: string;
}

export interface ApiEnvelope<T = unknown> {
  message?: string;
  data?: T;
  [key: string]: unknown;
}
