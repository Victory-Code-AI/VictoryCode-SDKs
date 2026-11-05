/* Hand-written helper (overrides/javascript): survives regeneration. */
import { Configuration, type ConfigurationParameters, type FetchAPI } from './runtime';

/**
 * Settings for {@link createVictoryCodeConfiguration}.
 */
export interface VictoryCodeClientOptions {
    /** Your App-Id. */
    appId: string;
    /** Your App-Secret. Keep it on your server; never ship it to browsers or apps. */
    appSecret: string;
    /** API base URL, e.g. https://api.tactixai.com. Defaults to the SDK's default (Sandbox). */
    basePath?: string;
    /** How many times a throttled or failed request is retried. Default 4. */
    maxRetries?: number;
    /** fetch implementation to use. Default: the global fetch. */
    fetchApi?: FetchAPI;
}

const TOKEN_PATH = '/api/v1/client/auth/token';
/** Refresh the token this long before it expires. */
const REFRESH_MARGIN_MS = 60_000;
/** Methods that are safe to send again after a server error or a network failure. */
const IDEMPOTENT_METHODS = new Set(['GET', 'HEAD', 'OPTIONS', 'PUT', 'DELETE']);
const RETRYABLE_SERVER_ERRORS = new Set([500, 502, 503, 504]);

/** Exponential backoff with jitter: about 1 s, 2 s, 4 s, 8 s… capped at 30 s. */
export function victoryCodeBackoffMs(attempt: number): number {
    return Math.min(1000 * 2 ** attempt, 30_000) * (0.5 + Math.random() / 2);
}

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

function urlOf(input: Parameters<FetchAPI>[0]): string {
    if (typeof input === 'string') return input;
    if (input instanceof URL) return input.href;
    return (input as Request).url;
}

function withAuthorization(headers: HeadersInit | undefined, token: string): HeadersInit {
    const next = new Headers(headers);
    next.set('Authorization', `Bearer ${token}`);
    return next;
}

/**
 * A Configuration that handles authentication and throttling for you:
 *
 * - gets an access token with your App-Id and App-Secret, reuses it until shortly
 *   before it expires (tokens last 1 hour), and gets a new one after a 401;
 * - retries `429 Too Many Requests` with exponential backoff, and retries server
 *   errors and network failures for requests that are safe to repeat (never a POST).
 *
 * ```ts
 * const config = createVictoryCodeConfiguration({ appId, appSecret, basePath: 'https://api.tactixai.com' });
 * const games = await new GamesApi(config).getGames({ limit: 10, offset: 0 });
 * ```
 */
export function createVictoryCodeConfiguration(
    options: VictoryCodeClientOptions,
    parameters: Omit<ConfigurationParameters, 'basePath' | 'fetchApi' | 'apiKey' | 'accessToken'> = {},
): Configuration {
    const basePath = (options.basePath ?? new Configuration().basePath).replace(/\/+$/, '');
    const send: FetchAPI = options.fetchApi ?? ((input, init) => fetch(input, init));
    const maxRetries = options.maxRetries ?? 4;

    let cached: { token: string; refreshAt: number } | null = null;
    let pending: Promise<string> | null = null;

    async function requestToken(): Promise<string> {
        const response = await sendWithRetry(`${basePath}${TOKEN_PATH}`, {
            method: 'GET',
            headers: { 'App-Id': options.appId, 'App-Secret': options.appSecret, Accept: 'application/json' },
        });
        if (!response.ok) {
            throw new Error(`Victory Code: could not get an access token (HTTP ${response.status}). Check the App-Id and App-Secret.`);
        }
        const body = (await response.json()) as { accessToken?: string; expiresIn?: number };
        if (!body.accessToken) throw new Error('Victory Code: the token response has no accessToken.');
        const lifetimeMs = (body.expiresIn ?? 3600) * 1000;
        cached = { token: body.accessToken, refreshAt: Date.now() + Math.max(lifetimeMs - REFRESH_MARGIN_MS, lifetimeMs / 2) };
        return body.accessToken;
    }

    function accessToken(): Promise<string> {
        if (cached && Date.now() < cached.refreshAt) return Promise.resolve(cached.token);
        // Parallel calls share one token request.
        if (!pending) {
            const clear = () => {
                pending = null;
            };
            pending = requestToken();
            pending.then(clear, clear);
        }
        return pending;
    }

    async function sendWithRetry(input: Parameters<FetchAPI>[0], init: RequestInit = {}): Promise<Response> {
        const method = (init.method ?? 'GET').toUpperCase();
        const isTokenRequest = urlOf(input).includes(TOKEN_PATH);
        let renewedToken = false;
        let current = init;
        for (let attempt = 0; ; attempt++) {
            let response: Response;
            try {
                response = await send(input, current);
            } catch (error) {
                if (!IDEMPOTENT_METHODS.has(method) || attempt >= maxRetries) throw error;
                await sleep(victoryCodeBackoffMs(attempt));
                continue;
            }
            if (response.status === 401 && !isTokenRequest && !renewedToken) {
                // The token was revoked or expired early: get a new one and try once more.
                renewedToken = true;
                cached = null;
                current = { ...current, headers: withAuthorization(current.headers, await accessToken()) };
                continue;
            }
            const retryable = response.status === 429 || (RETRYABLE_SERVER_ERRORS.has(response.status) && IDEMPOTENT_METHODS.has(method));
            if (!retryable || attempt >= maxRetries) return response;
            await sleep(victoryCodeBackoffMs(attempt));
        }
    }

    return new Configuration({
        ...parameters,
        basePath,
        fetchApi: sendWithRetry,
        apiKey: (name: string) => (name === 'App-Id' ? options.appId : name === 'App-Secret' ? options.appSecret : ''),
        accessToken: () => accessToken(),
    });
}
