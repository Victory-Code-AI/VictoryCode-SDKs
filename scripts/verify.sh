#!/usr/bin/env bash
# Builds (and runs the generated unit tests of) each SDK.
#   scripts/verify.sh                  # all languages available on this machine
#   scripts/verify.sh python java      # selected languages
# CI runs each language in its own job (see .github/workflows/sdk-ci.yml).
set -euo pipefail
cd "$(dirname "$0")/.."

languages=("$@")
if [ ${#languages[@]} -eq 0 ]; then
  languages=(python javascript java php android ios)
fi

verify_python() {
  python3 -m venv .venv-verify
  .venv-verify/bin/pip install --quiet --upgrade pip build
  .venv-verify/bin/pip install --quiet ./python pytest
  .venv-verify/bin/python -c "import victorycode_sdk; print('python ok:', victorycode_sdk.__version__)"
  (cd python && ../.venv-verify/bin/python -m pytest -q test)
  (cd python && ../.venv-verify/bin/python -m build --outdir dist . >/dev/null)
  rm -rf .venv-verify
}

verify_javascript() {
  (cd javascript && npm install --no-audit --no-fund --silent && npm run build --silent && npm pack --dry-run >/dev/null)
  echo "javascript ok"
}

verify_java() {
  (cd java && mvn --batch-mode --quiet -DskipTests=false package)
  echo "java ok"
}

verify_php() {
  (cd php && composer install --no-interaction --quiet && find lib -name '*.php' -print0 | xargs -0 -n1 php -l >/dev/null && vendor/bin/phpunit --no-coverage >/dev/null)
  composer validate --no-check-publish --no-check-lock
  echo "php ok"
}

verify_android() {
  (cd android && gradle --quiet --no-daemon build)
  echo "android (kotlin) ok"
}

verify_ios() {
  if ! command -v swift >/dev/null; then
    echo "ios: swift toolchain not installed; skipped" >&2
    return 0
  fi
  swift build
  echo "ios ok"
}

for language in "${languages[@]}"; do
  echo "=== verifying ${language}"
  "verify_${language}"
done
