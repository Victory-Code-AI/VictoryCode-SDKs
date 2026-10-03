"""Calls the mock API (Prism, from spec/openapi.json) through the generated Python SDK.

Prism rejects requests that miss required auth headers, so this proves the
generated client sends App-Id/App-Secret for the token call and App-Id plus
"Authorization: Bearer <token>" for protected calls, and that responses
deserialize into models.
"""
import os

import victorycode_sdk
from victorycode_sdk.api.authentication_api import AuthenticationApi
from victorycode_sdk.api.game_recap_api import GameRecapApi
from victorycode_sdk.api.games_api import GamesApi

configuration = victorycode_sdk.Configuration(
    host=os.environ.get("MOCK_URL", "http://127.0.0.1:4010"),
    api_key={"Client-App-Id": "smoke-app-id", "AppSecret": "smoke-app-secret"},
)

with victorycode_sdk.ApiClient(configuration) as client:
    token = AuthenticationApi(client).get_access_token()
    assert token.access_token, "token missing"
    configuration.access_token = token.access_token

    score = GameRecapApi(client).get_game_recap_score("69e726ec40948bc7f421f3ba")
    assert score is not None, score

    games = GamesApi(client).get_games(limit=10, offset=0)
    assert games.data is not None, games

print("python smoke ok")
