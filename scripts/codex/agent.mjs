#!/usr/bin/env node
// Run one .claude/agents/<name>.md agent on Codex (gpt-6-luna by default),
// e.g. the serial vocab-curator pass after a batch:
//
//   node scripts/codex/agent.mjs vocab-curator "today: 2026-10-03
//   pages: src/content/docs/papers/qje/2026/*.md"
//
// Prints the agent's final message (its JSON report) to stdout.
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { codexAgent, REPO } from './lib.mjs';

const [name, task] = process.argv.slice(2);
const def = `.claude/agents/${name}.md`;
if (!name || !task || !existsSync(join(REPO, def))) {
  console.error('usage: node scripts/codex/agent.mjs <agent-name> "<task>"  (agent def must exist in .claude/agents/)');
  process.exit(2);
}
const prompt = `You are operating as the "${name}" agent. FIRST read ${def} and follow it
exactly as your operating instructions. Then perform this task.

${task}`;
const msg = await codexAgent(prompt, { label: name, raw: true });
if (msg == null) process.exit(1);
console.log(msg.trim());
