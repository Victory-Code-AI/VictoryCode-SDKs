<?php

declare(strict_types=1);

namespace VictoryCode\SDK;

use RuntimeException;

final class ApiException extends RuntimeException
{
    public function __construct(
        private readonly int $statusCode,
        private readonly mixed $payload,
        string $message
    ) {
        parent::__construct(sprintf('HTTP %d: %s', $statusCode, $message));
    }

    public function statusCode(): int
    {
        return $this->statusCode;
    }

    public function payload(): mixed
    {
        return $this->payload;
    }
}
