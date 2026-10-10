#!/usr/bin/env bash
# Installs dependencies when a Claude Code session starts in the cloud, so
# lint, typecheck and build work right away. Local sessions are left alone.
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "$CLAUDE_PROJECT_DIR"
npm ci --no-audit --no-fund
