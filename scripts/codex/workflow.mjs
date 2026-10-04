#!/usr/bin/env node
// Run a .claude/workflows/*.js script with every agent() backed by Codex
// (gpt-6-luna by default) instead of Claude subagents.
//
//   node scripts/codex/workflow.mjs .claude/workflows/distill-papers.js args.json
//
// args.json is the workflow's `args` ({today, items:[...]}); `-` reads stdin.
// Env: IAR_CODEX_MODEL (gpt-6-luna), IAR_CODEX_EFFORT (high),
//      IAR_CODEX_CONCURRENCY (6). The final result JSON goes to stdout;
// progress and per-agent log paths go to stderr.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { codexAgent, MODEL, RUN_DIR } from './lib.mjs';

const [scriptPath, argsPath] = process.argv.slice(2);
if (!scriptPath || !argsPath) {
  console.error('usage: node scripts/codex/workflow.mjs <workflow.js> <args.json|->');
  process.exit(2);
}
const args = JSON.parse(readFileSync(argsPath === '-' ? 0 : argsPath, 'utf8'));

// The workflow scripts are bodies for the Workflow tool: a literal
// `export const meta`, then top-level await/return. Run them as an async
// function body with the same globals.
const body = readFileSync(scriptPath, 'utf8').replace(/^export const meta\b/m, 'const meta');

const log = (m) => console.error(`[log]   ${m}`);
const phase = (t) => console.error(`[phase] ${t}`);
const agent = (prompt, opts = {}) => codexAgent(prompt, opts);
const safe = (p) => Promise.resolve().then(p).catch((e) => { log(`error: ${e?.message ?? e}`); return null; });
const parallel = (thunks) => Promise.all(thunks.map((t) => safe(t)));
// pipeline(items, s0, s1, ...): s0(item), then sK(prevResult, item), each
// item flowing independently (agent concurrency is capped in lib.mjs).
const pipeline = (items, ...stages) => Promise.all(items.map((it) => safe(async () => {
  let r = await stages[0](it);
  for (const s of stages.slice(1)) r = await s(r, it);
  return r;
})));

const AsyncFunction = (async () => {}).constructor;
const run = new AsyncFunction('args', 'agent', 'parallel', 'pipeline', 'log', 'phase', 'MODEL', 'IAR_CODEX_RUNNER', body);

console.error(`[codex] ${scriptPath} with ${MODEL}; logs in ${RUN_DIR}`);
const result = await run(args, agent, parallel, pipeline, log, phase, MODEL, true);
const out = JSON.stringify(result, null, 2);
try { writeFileSync(join(RUN_DIR, 'result.json'), out); } catch {}
console.log(out);
