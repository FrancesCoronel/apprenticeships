#!/usr/bin/env bash
# PreToolUse guard: blocks reading, editing or printing local env files
# (.env, .env.local, ...), which hold the GitHub token. .env.example is allowed.
set -euo pipefail

input="$(cat)"
tool="$(jq -r '.tool_name // empty' <<<"$input")"

case "$tool" in
  Bash)
    text="$(jq -r '.tool_input.command // empty' <<<"$input")"
    ;;
  Read | Edit | Write | MultiEdit | NotebookEdit)
    text="$(jq -r '.tool_input.file_path // .tool_input.notebook_path // empty' <<<"$input")"
    ;;
  Grep | Glob)
    text="$(jq -r '[.tool_input.path // "", .tool_input.glob // ""] | join(" ")' <<<"$input")"
    ;;
  *)
    exit 0
    ;;
esac

# Drop the allowed template, then look for any other .env file name.
rest="${text//.env.example/}"
if grep -Eq '(^|[^A-Za-z0-9_])\.env($|[^A-Za-z0-9_-]|\.[A-Za-z0-9_.-]+)' <<<"$rest"; then
  echo "Blocked: .env files hold secrets (GITHUB_TOKEN). Use .env.example to see which variables exist." >&2
  exit 2
fi

exit 0
