<?php
// Checks VictoryCodeClient against tests/client/mock-api.mjs.
require __DIR__ . '/../../php/vendor/autoload.php';

use VictoryCode\SDK\Api\ClassificationApi;
use VictoryCode\SDK\Api\GamesApi;
use VictoryCode\SDK\ApiException;
use VictoryCode\SDK\Model\CreateClassificationDto;
use VictoryCode\SDK\VictoryCodeClient;

$mockUrl = getenv('MOCK_URL') ?: 'http://127.0.0.1:4020';
function mock(string $path, string $method = 'POST'): array
{
    global $mockUrl;
    $context = stream_context_create(['http' => ['method' => $method, 'header' => "Content-Length: 0\r\n"]]);
    return json_decode(file_get_contents("$mockUrl/__mock/$path", false, $context), true);
}
function check(bool $condition, string $message): void
{
    if (!$condition) {
        fwrite(STDERR, "FAILED: $message\n");
        exit(1);
    }
}

mock('reset');
$vc = new VictoryCodeClient('test-app', 'test-secret', $mockUrl);
$games = new GamesApi($vc->getHttpClient(), $vc->getConfig());

// 429, 429, then 200: retried with backoff, one token.
check($games->getGames(10, 0)->getTotal() == 0, 'first list succeeds');
$stats = mock('stats', 'GET');
check($stats === ['tokens' => 1, 'games' => 3, 'posts' => 0, 'unauthorized' => 0], 'one token, three game calls: ' . json_encode($stats));

// The token is reused.
$games->getGames(10, 0);
check(mock('stats', 'GET')['tokens'] === 1, 'token reused');

// A revoked token gets a 401 once, then a new token and a retry.
mock('revoke');
$games->getGames(10, 0);
$stats = mock('stats', 'GET');
check($stats['tokens'] === 2 && $stats['unauthorized'] === 1, 'renewed after 401: ' . json_encode($stats));

// A POST that fails with 503 is not sent again.
try {
    (new ClassificationApi($vc->getHttpClient(), $vc->getConfig()))
        ->createClassification(new CreateClassificationDto(['name' => 'Varsity', 'description' => 'Test']));
    check(false, 'expected the 503 to be raised');
} catch (ApiException $error) {
    check($error->getCode() === 503, 'status is 503, got ' . $error->getCode());
}
check(mock('stats', 'GET')['posts'] === 1, 'POST sent once');

echo "php client helper ok\n";
