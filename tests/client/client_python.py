"""Checks VictoryCodeClient against tests/client/mock-api.mjs."""
import json
import os
import urllib.request

from victorycode_sdk import ClassificationApi, CreateClassificationDto, GamesApi
from victorycode_sdk.client import VictoryCodeClient
from victorycode_sdk.exceptions import ApiException

MOCK = os.environ.get("MOCK_URL", "http://127.0.0.1:4020")


def mock(path, method="POST"):
    request = urllib.request.Request(f"{MOCK}/__mock/{path}", method=method)
    with urllib.request.urlopen(request) as response:
        return json.loads(response.read())


mock("reset")
client = VictoryCodeClient("test-app", "test-secret", host=MOCK)
games = GamesApi(client)

# 429, 429, then 200: retried with backoff, one token.
assert games.get_games(limit=10, offset=0).total == 0
assert mock("stats", "GET") == {"tokens": 1, "games": 3, "posts": 0, "unauthorized": 0}, mock("stats", "GET")

# The token is reused.
games.get_games(limit=10, offset=0)
assert mock("stats", "GET")["tokens"] == 1

# A revoked token gets a 401 once, then a new token and a retry.
mock("revoke")
games.get_games(limit=10, offset=0)
stats = mock("stats", "GET")
assert stats["tokens"] == 2 and stats["unauthorized"] == 1, stats

# A POST that fails with 503 is not sent again.
try:
    ClassificationApi(client).create_classification(CreateClassificationDto(name="Varsity", description="Test"))
    raise AssertionError("expected the 503 to be raised")
except ApiException as error:
    assert error.status == 503, error.status
assert mock("stats", "GET")["posts"] == 1

print("python client helper ok")
