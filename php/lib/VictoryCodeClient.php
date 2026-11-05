<?php
// Hand-written helper (overrides/php): survives regeneration.

namespace VictoryCode\SDK;

use GuzzleHttp\Client;
use GuzzleHttp\ClientInterface;
use GuzzleHttp\Exception\ConnectException;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\Middleware;
use GuzzleHttp\Promise\Create;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;

/**
 * Handles authentication and throttling for you. Pass its HTTP client and configuration to any API class:
 *
 *     $vc = new VictoryCodeClient($appId, $appSecret, 'https://api.tactixai.com');
 *     $games = (new Api\GamesApi($vc->getHttpClient(), $vc->getConfig()))->getGames(10, 0);
 *
 * - Gets an access token with your App-Id and App-Secret, reuses it until shortly before it expires
 *   (tokens last 1 hour), and gets a new one after a 401.
 * - Retries `429 Too Many Requests` with exponential backoff, and retries server errors and network
 *   failures for requests that are safe to repeat (never a POST).
 */
final class VictoryCodeClient
{
    public const TOKEN_PATH = '/api/v1/client/auth/token';
    private const REFRESH_MARGIN_SECONDS = 60;
    private const IDEMPOTENT_METHODS = ['GET', 'HEAD', 'OPTIONS', 'PUT', 'DELETE'];
    private const RETRYABLE_SERVER_ERRORS = [500, 502, 503, 504];

    private Configuration $config;
    private ClientInterface $httpClient;
    private ClientInterface $plainClient;
    private ?string $token = null;
    private float $refreshAt = 0.0;

    /**
     * @param string|null $host API base URL, e.g. https://api.tactixai.com, or null for the SDK's default (Sandbox)
     * @param int $maxRetries how many times a throttled or failed request is retried
     */
    public function __construct(
        private string $appId,
        private string $appSecret,
        ?string $host = null,
        private int $maxRetries = 4
    ) {
        $this->config = new Configuration();
        if ($host !== null) {
            $this->config->setHost(rtrim($host, '/'));
        }
        $this->config->setApiKey('App-Id', $appId);

        $plain = HandlerStack::create();
        $plain->push(Middleware::retry($this->shouldRetry(...), self::delay(...)), 'victorycode_retry');
        $this->plainClient = new Client(['handler' => $plain, 'http_errors' => false]);

        $stack = HandlerStack::create();
        $stack->push(Middleware::retry($this->shouldRetry(...), self::delay(...)), 'victorycode_retry');
        $stack->push($this->authenticate(...), 'victorycode_auth');
        $this->httpClient = new Client(['handler' => $stack]);
    }

    public function getConfig(): Configuration
    {
        return $this->config;
    }

    public function getHttpClient(): ClientInterface
    {
        return $this->httpClient;
    }

    /** The current access token, requesting a new one when needed. */
    public function accessToken(): string
    {
        if ($this->token !== null && microtime(true) < $this->refreshAt) {
            return $this->token;
        }
        $response = $this->plainClient->request('GET', $this->config->getHost() . self::TOKEN_PATH, [
            'headers' => ['App-Id' => $this->appId, 'App-Secret' => $this->appSecret, 'Accept' => 'application/json'],
        ]);
        if ($response->getStatusCode() !== 200) {
            throw new ApiException(
                'Victory Code: could not get an access token (HTTP ' . $response->getStatusCode() . '). Check the App-Id and App-Secret.',
                $response->getStatusCode()
            );
        }
        $body = json_decode((string) $response->getBody(), true);
        if (!is_array($body) || empty($body['accessToken'])) {
            throw new ApiException('Victory Code: the token response has no accessToken.', $response->getStatusCode());
        }
        $lifetime = (float) ($body['expiresIn'] ?? 3600);
        $this->token = $body['accessToken'];
        $this->refreshAt = microtime(true) + max($lifetime - self::REFRESH_MARGIN_SECONDS, $lifetime / 2);
        return $this->token;
    }

    /** Forget the cached token; the next call requests a new one. */
    public function invalidateToken(): void
    {
        $this->token = null;
    }

    private function authenticate(callable $handler): callable
    {
        return function (RequestInterface $request, array $options) use ($handler) {
            if (str_ends_with($request->getUri()->getPath(), self::TOKEN_PATH)) {
                return $handler($request, $options);
            }
            $send = fn (string $token) => $handler($this->withToken($request, $token), $options);
            $renew = function () use ($send) {
                // The token was revoked or expired early: get a new one and try once more.
                $this->invalidateToken();
                return $send($this->accessToken());
            };
            return $send($this->accessToken())->then(
                fn (ResponseInterface $response) => $response->getStatusCode() === 401 ? $renew() : $response,
                function ($reason) use ($renew) {
                    if ($reason instanceof RequestException && $reason->getResponse()?->getStatusCode() === 401) {
                        return $renew();
                    }
                    return Create::rejectionFor($reason);
                }
            );
        };
    }

    private function withToken(RequestInterface $request, string $token): RequestInterface
    {
        $request = $request->withHeader('Authorization', 'Bearer ' . $token);
        return $request->hasHeader('App-Id') ? $request : $request->withHeader('App-Id', $this->appId);
    }

    private function shouldRetry(int $retries, RequestInterface $request, ?ResponseInterface $response = null, $error = null): bool
    {
        if ($retries >= $this->maxRetries) {
            return false;
        }
        $idempotent = in_array(strtoupper($request->getMethod()), self::IDEMPOTENT_METHODS, true);
        if ($error instanceof ConnectException) {
            return $idempotent;
        }
        $status = $response?->getStatusCode() ?? ($error instanceof RequestException ? $error->getResponse()?->getStatusCode() : null);
        return $status === 429 || ($idempotent && in_array($status, self::RETRYABLE_SERVER_ERRORS, true));
    }

    /** About 1 s, 2 s, 4 s… capped at 30 s, with jitter (milliseconds). */
    private static function delay(int $retries): int
    {
        $base = min(1000 * (2 ** max($retries - 1, 0)), 30000);
        return (int) ($base * (0.5 + mt_rand() / mt_getrandmax() / 2));
    }
}
