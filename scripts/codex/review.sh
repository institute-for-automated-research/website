#!/usr/bin/env bash
# Mandated review loop (CLAUDE.md): Codex gpt-6-luna reviews a change.
#   scripts/codex/review.sh                 # uncommitted changes (default)
#   scripts/codex/review.sh --commit <sha>  # one commit
#   scripts/codex/review.sh --base main     # branch vs base
# Fix findings, then rerun until it reports no issues.
set -euo pipefail
cd "$(dirname "$0")/../.."
MODEL="${IAR_CODEX_MODEL:-gpt-6-luna}"
[ $# -eq 0 ] && set -- --uncommitted
exec codex exec review "$@" </dev/null -m "$MODEL" \
  -c "model_reasoning_effort=\"${IAR_CODEX_EFFORT:-high}\""
