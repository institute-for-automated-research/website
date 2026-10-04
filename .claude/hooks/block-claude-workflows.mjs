#!/usr/bin/env node
// PreToolUse hook on the Workflow tool: this repo's custom paper workflows
// (.claude/workflows/*.js) and the paper agents they spawn are Codex-only (gpt-6-luna via scripts/codex/), so
// block any Workflow-tool launch of them. Agent calls and other workflows are
// not checked.
import { readFileSync, existsSync } from 'node:fs';

const input = JSON.parse(readFileSync(0, 'utf8') || '{}');
const ti = input.tool_input || {};

let text = JSON.stringify(ti);
if (ti.scriptPath && existsSync(ti.scriptPath)) {
  try { text += readFileSync(ti.scriptPath, 'utf8'); } catch {}
}
// The workflow files, or an inline script that spawns the paper agents directly.
const PAPER = /distill-papers|backfill-axes|backfill-findings|reverify-papers|paper-distiller|paper-verifier|vocab-curator/i;

if (input.tool_name === 'Workflow' && PAPER.test(text)) {
  process.stderr.write(
    'Blocked: this repo\'s paper workflows run only on Codex gpt-6-luna, never via the Workflow tool.\n' +
    'Use: node scripts/codex/workflow.mjs .claude/workflows/<name>.js args.json\n'
  );
  process.exit(2);
}
process.exit(0);
