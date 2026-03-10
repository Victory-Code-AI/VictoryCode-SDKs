"""Typed response models for primary Victory Code endpoints."""

from __future__ import annotations

from typing import Any, NotRequired, TypedDict


class TokenResponse(TypedDict):
    token: str
    message: str


class UploadStatusResponse(TypedDict):
    message: str
    data: dict[str, Any]


class UploadCreateResponse(TypedDict):
    message: str
    data: dict[str, Any]


class SingleGameResponse(TypedDict):
    message: str
    data: dict[str, Any]


class ListGamesData(TypedDict):
    total: int
    limit: int
    games: list[dict[str, Any]]


class ListGamesResponse(TypedDict):
    message: str
    data: ListGamesData


class GameRecapScoreResponse(TypedDict):
    message: str
    data: dict[str, Any]


class GameRecapScoringSummaryResponse(TypedDict):
    message: str
    data: dict[str, Any]


class GameRecapTeamStatsResponse(TypedDict):
    message: str
    data: dict[str, Any]


class ApiErrorEnvelope(TypedDict):
    error: NotRequired[dict[str, Any]]
    message: NotRequired[str]
