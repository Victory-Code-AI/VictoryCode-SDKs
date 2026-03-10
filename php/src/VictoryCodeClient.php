<?php

declare(strict_types=1);

namespace VictoryCode\SDK;

use GuzzleHttp\Client;
use GuzzleHttp\ClientInterface;
use GuzzleHttp\Exception\GuzzleException;

final class VictoryCodeClient
{
    private string $baseUrl;
    private ?string $appId;
    private ?string $appSecret;
    private ?string $appToken;

    public function __construct(
        ?string $baseUrl = null,
        ?string $appId = null,
        ?string $appSecret = null,
        ?string $appToken = null,
        private readonly ClientInterface $http = new Client(['timeout' => 30])
    ) {
        $resolvedBaseUrl = $baseUrl ?: getenv('VICTORYCODE_API_BASE_URL');
        if (!$resolvedBaseUrl) {
            throw new \InvalidArgumentException('Missing VICTORYCODE_API_BASE_URL');
        }

        $this->baseUrl = rtrim($resolvedBaseUrl, '/');
        $this->appId = $appId ?: getenv('VICTORYCODE_APP_ID') ?: null;
        $this->appSecret = $appSecret ?: getenv('VICTORYCODE_APP_SECRET') ?: null;
        $this->appToken = $appToken ?: getenv('VICTORYCODE_APP_TOKEN') ?: null;
    }

    public function generateAccessToken(): array
    {
        $this->requireAppCredentials();

        $payload = $this->request(
            'GET',
            '/api/v1/client/auth/token',
            [
                'headers' => [
                    'app-id' => $this->appId,
                    'app-secret' => $this->appSecret,
                ],
            ]
        );

        if (isset($payload['token']) && is_string($payload['token'])) {
            $this->appToken = $payload['token'];
        }

        return $payload;
    }

    // Granular Play-by-Play
    public function getUploadStatus(string $uploadId): array
    {
        return $this->request('GET', '/api/v1/client/uploads/' . rawurlencode($uploadId), [
            'headers' => $this->tokenHeaders(),
        ]);
    }

    public function uploadVideoAndCreateGame(
        string $name,
        string $videoPath,
        string $homeTeam,
        string $awayTeam,
        string $venue,
        string $location,
        ?string $description = null
    ): array {
        if (!is_file($videoPath)) {
            throw new \InvalidArgumentException('Video file does not exist: ' . $videoPath);
        }

        $multipart = [
            ['name' => 'name', 'contents' => $name],
            ['name' => 'homeTeam', 'contents' => $homeTeam],
            ['name' => 'awayTeam', 'contents' => $awayTeam],
            ['name' => 'venue', 'contents' => $venue],
            ['name' => 'location', 'contents' => $location],
            ['name' => 'video', 'contents' => fopen($videoPath, 'rb'), 'filename' => basename($videoPath)],
        ];

        if ($description !== null && $description !== '') {
            $multipart[] = ['name' => 'description', 'contents' => $description];
        }

        return $this->request('POST', '/api/v1/client/uploads', [
            'headers' => $this->tokenHeaders(false),
            'multipart' => $multipart,
        ]);
    }

    public function getGame(string $gameId): array
    {
        return $this->request('GET', '/api/v1/client/games/' . rawurlencode($gameId), [
            'headers' => $this->tokenHeaders(),
        ]);
    }

    public function listGames(int $limit = 10, int $page = 1): array
    {
        return $this->request('GET', '/api/v1/client/games', [
            'headers' => $this->tokenHeaders(),
            'query' => [
                'limit' => $limit,
                'page' => $page,
            ],
        ]);
    }

    // Aggregated Game Recaps
    public function getGameRecapScore(string $gameId): array
    {
        return $this->request('GET', '/api/v1/client/game-recap/' . rawurlencode($gameId) . '/score', [
            'headers' => $this->tokenHeaders(),
        ]);
    }

    public function getGameRecapScoringSummary(string $gameId): array
    {
        return $this->request('GET', '/api/v1/client/game-recap/' . rawurlencode($gameId) . '/scoring-summary', [
            'headers' => $this->tokenHeaders(),
        ]);
    }

    public function getGameRecapTeamStats(string $gameId): array
    {
        return $this->request('GET', '/api/v1/client/game-recap/' . rawurlencode($gameId) . '/team-stats', [
            'headers' => $this->tokenHeaders(),
        ]);
    }

    private function request(string $method, string $path, array $options = []): array
    {
        $requestOptions = $options;
        $requestOptions['http_errors'] = false;

        try {
            $response = $this->http->request($method, $this->baseUrl . $path, $requestOptions);
        } catch (GuzzleException $exception) {
            throw new \RuntimeException('Network error: ' . $exception->getMessage(), 0, $exception);
        }

        $body = (string) $response->getBody();
        $payload = $body !== '' ? json_decode($body, true) : [];

        if ($response->getStatusCode() >= 400) {
            $message = 'Request failed';
            if (is_array($payload)) {
                $message = $payload['message'] ?? $payload['error']['message'] ?? $message;
            }

            throw new ApiException($response->getStatusCode(), $payload, $message);
        }

        if (!is_array($payload)) {
            return ['raw' => $body];
        }

        return $payload;
    }

    private function requireAppCredentials(): void
    {
        if (!$this->appId || !$this->appSecret) {
            throw new \InvalidArgumentException('appId and appSecret are required.');
        }
    }

    private function tokenHeaders(bool $withAccept = true): array
    {
        if (!$this->appId || !$this->appToken) {
            throw new \InvalidArgumentException('appId and appToken are required.');
        }

        $headers = [
            'App-Id' => $this->appId,
            'App-Token' => $this->appToken,
        ];

        if ($withAccept) {
            $headers['Accept'] = 'application/json';
        }

        return $headers;
    }
}
