"""Calls the mock API (Prism, from spec/openapi.json) through the generated Python SDK.

Prism rejects requests that miss required auth headers, so this proves the
generated client sends App-Id/App-Secret for the token call and App-Id/App-Token
for protected calls, and that responses deserialize into models.
"""
import os

import victorycode_sdk
from victorycode_sdk.api.auth_api import AuthApi
from victorycode_sdk.api.game_recap_api import GameRecapApi
from victorycode_sdk.api.games_api import GamesApi

configuration = victorycode_sdk.Configuration(
    host=os.environ.get("MOCK_URL", "http://127.0.0.1:4010"),
    api_key={"AppId": "smoke-app-id", "AppSecret": "smoke-app-secret"},
)

with victorycode_sdk.ApiClient(configuration) as client:
    token = AuthApi(client).generate_access_token()
    assert token.token, "token missing"
    configuration.api_key["AppToken"] = token.token

    recap = GameRecapApi(client).get_game_recap_score("68d153065f30985c10760a68")
    assert recap.data is not None and recap.data.home_team is not None, recap

    games = GamesApi(client).list_games(limit=10, page=1)
    assert games.data is not None, games

print("python smoke ok")
