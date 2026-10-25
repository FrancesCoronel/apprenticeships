#!/usr/bin/env bash
# Installs dependencies when a Claude Code session starts or resumes in the
# cloud, so lint, typecheck, tests and build work right away. Skips the install
# when package-lock.json hasn't changed since the last one. Local sessions are
# left alone.
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "$CLAUDE_PROJECT_DIR"

stamp="node_modules/.package-lock.sha256"
hash="$(sha256sum package-lock.json | cut -d' ' -f1)"

if [ -d node_modules ] && [ -f "$stamp" ] && [ "$(cat "$stamp")" = "$hash" ]; then
  exit 0
fi

npm ci --no-audit --no-fund
echo "$hash" > "$stamp"
