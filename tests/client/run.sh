#!/usr/bin/env bash
# Tests the hand-written auth/retry helpers (overrides/<language>) against a local mock API
# that throttles, revokes tokens and fails POSTs (tests/client/mock-api.mjs).
#   tests/client/run.sh                       # every language whose toolchain is installed
#   tests/client/run.sh python javascript     # selected languages
# Expects the SDK builds from scripts/verify.sh (or CI) to exist.
set -euo pipefail
cd "$(dirname "$0")/../.."

languages=("$@")
if [ ${#languages[@]} -eq 0 ]; then
  languages=(javascript python php java android)
fi

export MOCK_PORT="${MOCK_PORT:-4020}"
export MOCK_URL="http://127.0.0.1:${MOCK_PORT}"
node tests/client/mock-api.mjs > .mock-api.log 2>&1 &
MOCK=$!
trap 'kill $MOCK 2>/dev/null || true' EXIT
for _ in $(seq 1 30); do
  curl -s -o /dev/null "$MOCK_URL/__mock/stats" && break
  sleep 0.5
done

for language in "${languages[@]}"; do
  echo "=== client helper: ${language}"
  case "$language" in
    javascript) node tests/client/client-javascript.mjs ;;
    python) "${PYTHON:-python3}" tests/client/client_python.py ;;
    php) php tests/client/client-php.php ;;
    java) (cd java && mvn --batch-mode --quiet -Dtest=VictoryCodeClientTest -Dsurefire.failIfNoSpecifiedTests=false test) && echo "java client helper ok" ;;
    android) (cd android && gradle --quiet --no-daemon test --tests 'com.tactixai.victorycode.sdk.VictoryCodeClientTest') && echo "android (kotlin) client helper ok" ;;
    *) echo "unknown language $language" >&2; exit 1 ;;
  esac
done
