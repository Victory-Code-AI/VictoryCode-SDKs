"""Error types for the Victory Code Python SDK."""

from __future__ import annotations

from typing import Any


class VictoryCodeError(Exception):
    """Base class for SDK errors."""


class VictoryCodeConfigurationError(VictoryCodeError):
    """Raised when required SDK configuration is missing."""


class VictoryCodeNetworkError(VictoryCodeError):
    """Raised when a network-level failure occurs."""


class VictoryCodeApiError(VictoryCodeError):
    """Raised when the API returns a non-2xx response."""

    def __init__(
        self,
        status_code: int,
        message: str,
        payload: Any | None = None,
    ) -> None:
        super().__init__(f"HTTP {status_code}: {message}")
        self.status_code = status_code
        self.message = message
        self.payload = payload
