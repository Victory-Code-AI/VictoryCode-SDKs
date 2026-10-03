#!/usr/bin/env bash
# Starts a Prism mock server from spec/openapi.json and runs the SDK smoke tests.
# Requires the Python venv/JS build from scripts/verify.sh (or CI) to exist.
set -euo pipefail
cd "$(dirname "$0")/../.."

npx --yes @stoplight/prism-cli@5 mock spec/openapi.json --port 4010 --errors > .prism.log 2>&1 &
PRISM=$!
trap 'kill $PRISM 2>/dev/null || true' EXIT
for _ in $(seq 1 60); do
  curl -s -o /dev/null http://127.0.0.1:4010 && break
  sleep 1
done

for test in "$@"; do
  case "$test" in
    python) python3 tests/smoke/smoke_python.py ;;
    javascript) node tests/smoke/smoke-javascript.mjs ;;
    *) echo "unknown smoke test $test" >&2; exit 1 ;;
  esac
done
