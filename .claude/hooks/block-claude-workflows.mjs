#!/usr/bin/env node
// PreToolUse hook on the Workflow and Agent tools: the paper agents and
// fan-outs are Codex-only (gpt-6-luna via scripts/codex/). Claude models
// (Sonnet, Opus, or an inherited default) must never run them.
// - Workflow: block any launch of the paper workflows/agents or any Sonnet ask.
// - Agent: block paper-distiller / paper-verifier / vocab-curator, whether
//   named as subagent_type or smuggled in via a general-purpose prompt that
//   points at their definition files. Other ad hoc Agent calls are allowed.
import { readFileSync, existsSync } from 'node:fs';

const input = JSON.parse(readFileSync(0, 'utf8') || '{}');
const tool = input.tool_name || '';
const ti = input.tool_input || {};

const AGENTS = /^(paper-distiller|paper-verifier|vocab-curator)$/i;
const AGENT_DEF = /\.claude\/agents\/(paper-distiller|paper-verifier|vocab-curator)\.md|operating as the "?(paper-distiller|paper-verifier|vocab-curator)\b/i;

let blocked = false;
if (tool === 'Agent') {
  blocked = AGENTS.test(String(ti.subagent_type || '')) || AGENT_DEF.test(String(ti.prompt || ''));
} else {
  let text = JSON.stringify(ti);
  if (ti.scriptPath && existsSync(ti.scriptPath)) {
    try { text += readFileSync(ti.scriptPath, 'utf8'); } catch {}
  }
  const PAPER = /distill-papers|backfill-axes|backfill-findings|paper-distiller|paper-verifier|vocab-curator/i;
  blocked = PAPER.test(text) || /sonnet/i.test(text);
}

if (blocked) {
  process.stderr.write(
    'Blocked: the paper agents in this repo run only on Codex gpt-6-luna, never on a Claude model.\n' +
    'Use: node scripts/codex/workflow.mjs .claude/workflows/<name>.js args.json\n' +
    '     node scripts/codex/agent.mjs <agent-name> "<task>"   (single agent, e.g. vocab-curator)\n'
  );
  process.exit(2);
}
process.exit(0);
