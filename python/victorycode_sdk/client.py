# Hand-written helper (overrides/python): survives regeneration.
"""An ApiClient that handles authentication and throttling for you.

- Gets an access token with your App-Id and App-Secret, reuses it until shortly
  before it expires (tokens last 1 hour), and gets a new one after a 401.
- Retries ``429 Too Many Requests`` with exponential backoff, and retries server
  errors for requests that are safe to repeat (never a POST).

Example::

    from victorycode_sdk import GamesApi
    from victorycode_sdk.client import VictoryCodeClient

    client = VictoryCodeClient(app_id, app_secret, host="https://api.tactixai.com")
    games = GamesApi(client).get_games(limit=10, offset=0)
"""

from __future__ import annotations

import json
import threading
import time
from typing import Optional

import urllib3
from urllib3.util.retry import Retry

from victorycode_sdk.api_client import ApiClient
from victorycode_sdk.configuration import Configuration
from victorycode_sdk.exceptions import ApiException

TOKEN_PATH = "/api/v1/client/auth/token"
REFRESH_MARGIN_SECONDS = 60
RETRYABLE_SERVER_ERRORS = frozenset({500, 502, 503, 504})


class VictoryCodeRetry(Retry):
    """Retries 429 for any method, and server errors only for idempotent methods."""

    def is_retry(self, method: str, status_code: int, has_retry_after: bool = False) -> bool:
        if self.total is not None and self.total < 1:
            return False
        if status_code == 429:
            return True
        return status_code in RETRYABLE_SERVER_ERRORS and self._is_method_retryable(method)


def victorycode_retry(max_retries: int = 4) -> VictoryCodeRetry:
    """About 1 s, 2 s, 4 s… between attempts (capped at 30 s, with jitter)."""
    return VictoryCodeRetry(
        total=max_retries,
        backoff_factor=1,
        backoff_max=30,
        backoff_jitter=0.5,
        status_forcelist=[429, *RETRYABLE_SERVER_ERRORS],
        raise_on_status=False,
        respect_retry_after_header=True,
    )


class VictoryCodeClient(ApiClient):
    """ApiClient with automatic access tokens and retries. Thread-safe."""

    def __init__(
        self,
        app_id: str,
        app_secret: str,
        host: Optional[str] = None,
        max_retries: int = 4,
        configuration: Optional[Configuration] = None,
    ) -> None:
        config = configuration or Configuration()
        if host:
            config.host = host.rstrip("/")
        config.api_key = {**(config.api_key or {}), "Client-App-Id": app_id, "AppSecret": app_secret}
        config.access_token = None  # added per request, see call_api
        config.retries = victorycode_retry(max_retries)
        super().__init__(config)
        self._app_id = app_id
        self._app_secret = app_secret
        self._token: Optional[str] = None
        self._refresh_at = 0.0
        self._lock = threading.Lock()
        self._http = urllib3.PoolManager(retries=victorycode_retry(max_retries))

    def access_token(self) -> str:
        """The current access token, requesting a new one when needed."""
        with self._lock:
            if self._token and time.monotonic() < self._refresh_at:
                return self._token
            response = self._http.request(
                "GET",
                f"{self.configuration.host}{TOKEN_PATH}",
                headers={"App-Id": self._app_id, "App-Secret": self._app_secret, "Accept": "application/json"},
            )
            if response.status != 200:
                raise ApiException(
                    status=response.status,
                    reason="Could not get an access token. Check the App-Id and App-Secret.",
                )
            body = json.loads(response.data or b"{}")
            token = body.get("accessToken")
            if not token:
                raise ApiException(status=response.status, reason="The token response has no accessToken.")
            lifetime = float(body.get("expiresIn") or 3600)
            self._token = token
            self._refresh_at = time.monotonic() + max(lifetime - REFRESH_MARGIN_SECONDS, lifetime / 2)
            return token

    def invalidate_token(self) -> None:
        """Forget the cached token; the next call requests a new one."""
        with self._lock:
            self._token = None

    def call_api(self, method, url, header_params=None, body=None, post_params=None, _request_timeout=None):
        if TOKEN_PATH in url:
            return super().call_api(method, url, header_params, body, post_params, _request_timeout)
        headers = dict(header_params or {})
        headers["Authorization"] = f"Bearer {self.access_token()}"
        response = super().call_api(method, url, headers, body, post_params, _request_timeout)
        if response.status == 401:
            # The token was revoked or expired early: get a new one and try once more.
            self.invalidate_token()
            headers["Authorization"] = f"Bearer {self.access_token()}"
            response = super().call_api(method, url, headers, body, post_params, _request_timeout)
        return response
