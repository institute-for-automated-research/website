#!/usr/bin/env node
// Codex PreToolUse hook installed on every worker by lib.mjs. Workers must not
// start other agents: deny Codex's collaboration tools (spawn_agent,
// send_message, ...) and shell commands that invoke the codex or claude CLI.
// Exit 2 blocks the call and returns stderr to the agent.
import { readFileSync } from 'node:fs';

let e = {};
try { e = JSON.parse(readFileSync(0, 'utf8') || '{}'); } catch {}
const tool = String(e.tool_name || '');
const ti = e.tool_input ?? {};
const cmd = [ti.command, ti.cmd].flat().filter(Boolean).join(' ');
// Logged as e.g. collaborationspawn_agent; bare names too, in case that changes.
const AGENT_TOOL = /^collaboration|(^|[._])(spawn_agent|send_message|followup_task|wait_agent|interrupt_agent|list_agents|resume_agent|close_agent|send_input)$/i;
// The CLI by name or path (codex, ./codex, /x/bin/claude, codex.js), or the
// npm packages behind it. Plain repo paths like scripts/codex/... are allowed.
// Deliberately fails closed: a bare `codex`/`claude` token anywhere (e.g.
// `rg codex`) is blocked too, since executable-position matching is easy to
// route around (sh -c, xargs, env) and paper workers never need those words.
const CLI = /(^|[\s;&|/(`'"])(codex|claude)(\.[cm]?js)?(\s|$|[;&|)`'"])|@openai\/codex|@anthropic-ai\/claude/;

if (AGENT_TOOL.test(tool) || CLI.test(cmd)) {
  process.stderr.write('blocked: Codex workers may not spawn, message, or launch other agents; do the task yourself in this session\n');
  process.exit(2);
}
process.exit(0);
