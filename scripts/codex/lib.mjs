// Shared Codex runner: one `codex exec` call per agent, JSON result parsed
// from the agent's final message. Used by workflow.mjs and agent.mjs.
import { spawn } from 'node:child_process';
import { mkdirSync, readFileSync, existsSync, createWriteStream } from 'node:fs';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';

export const REPO = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
export const MODEL = process.env.IAR_CODEX_MODEL || 'gpt-6-luna';
export const EFFORT = process.env.IAR_CODEX_EFFORT || 'high';

// Agent defs and SKILL.md were written for Claude Code subagents. This maps
// their tool vocabulary onto what a Codex shell agent actually has.
export const PREAMBLE = `## Runtime (read first)
You are a Codex agent running model \`${MODEL}\` non-interactively from the IAR
website repo root (${REPO}). The instruction files you are pointed to were
written for Claude Code subagents; translate their tool names as follows:
- "Read" a text file: cat / sed -n. "Grep"/"Glob": rg / find.
- "Read" a PDF (incl. "pages" ranges): \`pdftotext -layout -f A -l B <pdf> -\`
  (\`pdfinfo <pdf>\` for the page count). When a table, figure, or equation is
  garbled in the text layer, or a page is image-only, render it with
  \`pdftoppm -png -r 130 -f N -l N <pdf> /tmp/iar-<slug>-pN\` and view the image.
  Never record a number you did not see in the PDF.
- "WebFetch": \`curl -sL\` (network is enabled).
- A named skill (e.g. openalex): its instructions are in .claude/skills/<name>/SKILL.md,
  its scripts under scripts/ as the agent file says.
- Wherever an instruction or template records the extracting/verifying model
  (e.g. "by: paper-distiller (claude-sonnet-4-6)"), write \`${MODEL}\` instead:
  provenance must name the model that actually did the work.
- Edit only the files your task permits. Do not git commit, push, or run the
  site build unless told to.
- Your FINAL message must be only the JSON result your instructions describe
  (no prose before or after; a \`\`\`json fence is fine).
`;

const RUN_DIR = join(process.env.TMPDIR || tmpdir(), 'iar-codex-runs',
  new Date().toISOString().replace(/[:.]/g, '-'));
const children = new Set();
for (const sig of ['SIGINT', 'SIGTERM']) {
  process.on(sig, () => { for (const c of children) c.kill('SIGTERM'); process.exit(130); });
}

let seq = 0; // unique per-agent file prefix within a run
let active = 0;
const queue = [];
const CONCURRENCY = Number(process.env.IAR_CODEX_CONCURRENCY || 6);
const acquire = () => new Promise((res) => {
  if (active < CONCURRENCY) { active++; res(); } else queue.push(res);
});
const release = () => { const next = queue.shift(); if (next) next(); else active--; };

// Last JSON object in the message: fenced block first, else the last
// balanced {...} that parses.
export function extractJson(text) {
  const fences = [...text.matchAll(/```(?:json)?\s*([\s\S]*?)```/g)].map((m) => m[1]);
  for (const f of fences.reverse()) { try { return JSON.parse(f); } catch {} }
  for (let end = text.lastIndexOf('}'); end >= 0; end = text.lastIndexOf('}', end - 1)) {
    let depth = 0;
    for (let i = end; i >= 0; i--) {
      if (text[i] === '}') depth++;
      else if (text[i] === '{' && --depth === 0) {
        try { return JSON.parse(text.slice(i, end + 1)); } catch { break; }
      }
    }
  }
  return null;
}

// Run one Codex agent. Resolves to the parsed JSON (or the raw final message
// when opts.raw), or null on failure; never rejects.
export async function codexAgent(prompt, opts = {}) {
  const label = (opts.label || 'agent').replace(/[^\w.:-]+/g, '_');
  mkdirSync(RUN_DIR, { recursive: true });
  const base = `${String(++seq).padStart(3, '0')}-${label.replace(/:/g, '__')}`;
  const last = join(RUN_DIR, `${base}.last.txt`);
  const logf = join(RUN_DIR, `${base}.log`);
  const schemaNote = opts.schema
    ? `\n\nYour final JSON must conform to this JSON Schema:\n${JSON.stringify(opts.schema)}\n`
    : '';
  const full = `${PREAMBLE}\n## Task\n${prompt}${schemaNote}`;
  const args = ['exec', '-m', MODEL, '-s', 'workspace-write',
    '-c', 'sandbox_workspace_write.network_access=true',
    '-c', `model_reasoning_effort="${EFFORT}"`,
    '-o', last, '-'];

  await acquire();
  const t0 = Date.now();
  console.error(`[start] ${label}`);
  try {
    const code = await new Promise((resolve) => {
      const out = createWriteStream(logf);
      const child = spawn('codex', args, { cwd: REPO, stdio: ['pipe', 'pipe', 'pipe'] });
      children.add(child);
      child.stdout.pipe(out);
      child.stderr.pipe(out);
      child.stdin.end(full);
      child.on('error', () => resolve(-1));
      child.on('close', (c) => { children.delete(child); resolve(c); });
    });
    const secs = Math.round((Date.now() - t0) / 1000);
    const msg = existsSync(last) ? readFileSync(last, 'utf8') : '';
    if (code !== 0 || !msg) {
      console.error(`[fail]  ${label} exit=${code} ${secs}s (log: ${logf})`);
      return null;
    }
    if (opts.raw) { console.error(`[done]  ${label} ${secs}s`); return msg; }
    const json = extractJson(msg);
    const missing = (opts.schema?.required || []).filter((k) => !(json && k in json));
    if (!json || missing.length) {
      console.error(`[fail]  ${label} unparseable result${missing.length ? ` (missing ${missing})` : ''} ${secs}s (log: ${logf})`);
      return null;
    }
    console.error(`[done]  ${label} ${secs}s`);
    return json;
  } finally {
    release();
  }
}
export { RUN_DIR };
