"""Victory Code Python SDK client."""

from __future__ import annotations

import os
from pathlib import Path
from typing import Any

import httpx

from .errors import (
    VictoryCodeApiError,
    VictoryCodeConfigurationError,
    VictoryCodeNetworkError,
)


def _read_required_config(name: str, value: str | None) -> str:
    resolved = value or os.getenv(name)
    if not resolved:
        raise VictoryCodeConfigurationError(
            f"Missing required configuration: {name}. "
            f"Pass it to the client constructor or set it in your environment.",
        )
    return resolved.strip().rstrip("/")


class VictoryCodeClient:
    """Client for Victory Code aggregated recap + granular play-by-play APIs."""

    def __init__(
        self,
        *,
        base_url: str | None = None,
        app_id: str | None = None,
        app_secret: str | None = None,
        app_token: str | None = None,
        timeout: float = 30.0,
        transport: httpx.BaseTransport | None = None,
    ) -> None:
        self.base_url = _read_required_config("VICTORYCODE_API_BASE_URL", base_url)
        self.app_id = app_id or os.getenv("VICTORYCODE_APP_ID")
        self.app_secret = app_secret or os.getenv("VICTORYCODE_APP_SECRET")
        self.app_token = app_token or os.getenv("VICTORYCODE_APP_TOKEN")

        self._http = httpx.Client(
            base_url=self.base_url,
            timeout=timeout,
            transport=transport,
        )

    def close(self) -> None:
        self._http.close()

    def __enter__(self) -> "VictoryCodeClient":
        return self

    def __exit__(self, *_: object) -> None:
        self.close()

    def generate_access_token(self) -> dict[str, Any]:
        """GET /api/v1/client/auth/token and persist token on the client."""
        self._require_credentials()
        payload = self._request(
            "GET",
            "/api/v1/client/auth/token",
            headers={
                "app-id": self.app_id or "",
                "app-secret": self.app_secret or "",
            },
        )

        token = payload.get("token")
        if isinstance(token, str) and token:
            self.app_token = token
        return payload

    # Granular Play-by-Play
    def get_upload_status(self, upload_id: str) -> dict[str, Any]:
        return self._request(
            "GET",
            f"/api/v1/client/uploads/{upload_id}",
            headers=self._token_headers(),
        )

    def upload_video_and_create_game(
        self,
        *,
        name: str,
        video_path: str,
        home_team: str,
        away_team: str,
        venue: str,
        location: str,
        description: str | None = None,
    ) -> dict[str, Any]:
        self._require_token_headers()
        file_path = Path(video_path)
        if not file_path.exists() or not file_path.is_file():
            raise VictoryCodeConfigurationError(f"Video file not found: {video_path}")

        form_data = {
            "name": name,
            "homeTeam": home_team,
            "awayTeam": away_team,
            "venue": venue,
            "location": location,
        }
        if description:
            form_data["description"] = description

        with file_path.open("rb") as handle:
            return self._request(
                "POST",
                "/api/v1/client/uploads",
                headers=self._token_headers(),
                data=form_data,
                files={"video": (file_path.name, handle, "application/octet-stream")},
            )

    def get_game(self, game_id: str) -> dict[str, Any]:
        return self._request(
            "GET",
            f"/api/v1/client/games/{game_id}",
            headers=self._token_headers(),
        )

    def list_games(self, *, limit: int = 10, page: int = 1) -> dict[str, Any]:
        return self._request(
            "GET",
            "/api/v1/client/games",
            headers=self._token_headers(),
            params={"limit": str(limit), "page": str(page)},
        )

    # Aggregated Game Recaps
    def get_game_recap_score(self, game_id: str) -> dict[str, Any]:
        return self._request(
            "GET",
            f"/api/v1/client/game-recap/{game_id}/score",
            headers=self._token_headers(),
        )

    def get_game_recap_scoring_summary(self, game_id: str) -> dict[str, Any]:
        return self._request(
            "GET",
            f"/api/v1/client/game-recap/{game_id}/scoring-summary",
            headers=self._token_headers(),
        )

    def get_game_recap_team_stats(self, game_id: str) -> dict[str, Any]:
        return self._request(
            "GET",
            f"/api/v1/client/game-recap/{game_id}/team-stats",
            headers=self._token_headers(),
        )

    def _request(
        self,
        method: str,
        path: str,
        *,
        headers: dict[str, str],
        params: dict[str, str] | None = None,
        data: dict[str, str] | None = None,
        files: dict[str, tuple[str, Any, str]] | None = None,
    ) -> dict[str, Any]:
        try:
            response = self._http.request(
                method,
                path,
                headers=headers,
                params=params,
                data=data,
                files=files,
            )
        except httpx.RequestError as exc:
            raise VictoryCodeNetworkError(str(exc)) from exc

        payload = self._safe_json(response)
        if response.status_code >= 400:
            message = "Request failed"
            if isinstance(payload, dict):
                message = (
                    payload.get("message")
                    or payload.get("error", {}).get("message")
                    or message
                )
            raise VictoryCodeApiError(response.status_code, message, payload)

        if not isinstance(payload, dict):
            raise VictoryCodeApiError(
                response.status_code,
                "Expected JSON object response payload",
                payload,
            )
        return payload

    @staticmethod
    def _safe_json(response: httpx.Response) -> Any:
        try:
            return response.json()
        except ValueError:
            return {"raw": response.text}

    def _require_credentials(self) -> None:
        if not self.app_id or not self.app_secret:
            raise VictoryCodeConfigurationError(
                "app_id and app_secret are required for token generation. "
                "Set VICTORYCODE_APP_ID and VICTORYCODE_APP_SECRET.",
            )

    def _require_token_headers(self) -> None:
        if not self.app_id or not self.app_token:
            raise VictoryCodeConfigurationError(
                "app_id and app_token are required for protected endpoints. "
                "Set VICTORYCODE_APP_ID and VICTORYCODE_APP_TOKEN or call generate_access_token().",
            )

    def _token_headers(self) -> dict[str, str]:
        self._require_token_headers()
        return {
            "App-Id": self.app_id or "",
            "App-Token": self.app_token or "",
            "Accept": "application/json",
        }
