#!/usr/bin/env node
// PreToolUse hook on the Workflow tool: paper fan-outs are Codex-only
// (scripts/codex/workflow.mjs, gpt-6-luna). Block any Workflow launch of the
// paper workflows or agents, and any workflow that asks for a Sonnet model.
// Manual one-off Agent calls are not affected.
import { readFileSync, existsSync } from 'node:fs';

const input = JSON.parse(readFileSync(0, 'utf8') || '{}');
const ti = input.tool_input || {};
let text = JSON.stringify(ti);
if (ti.scriptPath && existsSync(ti.scriptPath)) {
  try { text += readFileSync(ti.scriptPath, 'utf8'); } catch {}
}

const PAPER = /distill-papers|backfill-axes|backfill-findings|paper-distiller|paper-verifier|vocab-curator/i;
const SONNET = /sonnet/i;
if (PAPER.test(text) || SONNET.test(text)) {
  process.stderr.write(
    'Blocked: paper workflows in this repo run on Codex gpt-6-luna, not Claude/Sonnet via the Workflow tool.\n' +
    'Use: node scripts/codex/workflow.mjs .claude/workflows/<name>.js args.json\n' +
    '     node scripts/codex/agent.mjs <agent-name> "<task>"   (single agent, e.g. vocab-curator)\n'
  );
  process.exit(2);
}
process.exit(0);
