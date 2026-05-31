# CLAUDE.md — instituteforautomatedresearch.org

AFTER EVERY BIG CHANGE, LAUNCH A SONNET AGENT TO REVIEW YOUR CHANGES FOR ISSUES. IF ANY ISSUES ARE FOUND, ADD A NEW ROUND OF AUDITING AFTER FIXING THE CURRENT ROUND'S ISSUES (EVEN IF THERE ARE ONLY MINOR CHANGES). ITERATE UNTIL DONE.

AVOID M-DASHES ON WEBSITE AND COLORFUL ADJECTIVES.

Public website + working-paper series + wiki for the Institute for Automated
Research. Static, deployed on Vercel. Repo:
`github.com/institute-for-automated-research/website` (push to `main` →
Vercel auto-deploys).

## Sibling repo: the ZeroPaper pipeline (papers originate there)

This repo mostly **publishes** what the ZeroPaper pipeline produces — it
does not produce it. The pipeline is a **separate repo**:

- Local: `../../NewPapers/zeropaper` (relative to this repo's parent)
- GitHub: `https://github.com/alejandroll10/zeropaper`

Two kinds of content here derive from it:

1. **IAR-A (autonomous) paper PDFs** in `site/papers/iar-a/` are pipeline
   output. PDF conventions are **owned there, not here**: bibliography
   style (unnumbered author-year — deliberate, Scholar-indexed fine), the
   human-operator byline + in-body provenance disclosure, and the citation
   format. The companion paper's citation lives in that repo's `README.md`.
2. **Wiki dataset pages** (`src/content/docs/datasets/*`, `licensed/wrds.md`)
   and the pipeline's empirical *skills*
   (`extensions/empirical/skills/<dataset>/SKILL.md`: fred, edgar,
   ken-french, flex-mining, chen-zimmerman→open-source-asset-pricing,
   wrds, …) are **two mirrors of the same dataset knowledge, kept in
   sync both ways**. A new dataset may be authored here first (then
   ported into a pipeline skill) or originate as a skill (then published
   here) — neither is the sole canonical source. Editing/verifying pages
   *here* is expected (see "Adding a wiki page" + the `Verified`
   discipline below); a substantive change to access method or gotchas
   on either side should be propagated to the other, or they drift apart.

Don't "fix" a PDF or its landing page by hand-editing in this repo —
that change belongs in the pipeline, then regenerate. For dataset
knowledge, edit+verify here, but mirror the change into the pipeline
skill (or vice versa).

When a change here needs a matching change in the pipeline (a new/updated
dataset skill, PDF-convention or citation tweak, any pipeline upgrade),
**file the issue in the ZeroPaper repo** (`gh issue create --repo
alejandroll10/zeropaper`), not here; that is where the work lands. The
canonical skill bodies live at `templates/skill_bodies/empirical/<dataset>.md`.
The rule is symmetric: a pipeline-side change that affects a wiki page or a
published PDF/landing page (dataset access or gotchas, citation format,
provenance disclosure) should be filed as an issue **in this repo**
(`gh issue create --repo institute-for-automated-research/website`).

## Architecture: one unified Astro build

There is **no separate wiki project**. A single `npm run build` produces the
whole site:

- `site/` — the hand-authored marketing site + papers. Served **verbatim** at
  the deploy root (`/`, `/about`, `/papers/...`). Edit these as plain HTML;
  no framework. Do not "Astro-ify" them without a reason.
- `src/content/docs/**.md` — the **wiki**, Astro Starlight, built into
  `dist/wiki/` (`astro.config.mjs` → `outDir`, `base:'/wiki'`).
- `scripts/postbuild.mjs` — runs after `astro build`: copies `site/` → `dist/`
  root, writes raw `.md` twins, `/llms.txt`, `/llms-full.txt`.
- Final: `dist/index.html` (homepage) + `dist/wiki/...` (wiki). Vercel serves
  `dist/` (`vercel.json`: `cleanUrls`, **no** `trailingSlash`, www→apex +
  `/zeropaper.pdf` redirects).

Routing invariant: `vercel.json` must **not** set `trailingSlash` — it fights
Starlight's directory URLs and reintroduces a 308 on every internal link.
Every route should be 200 with **zero** redirect hops (except the intentional
`/zeropaper.pdf` 301).

## Adding a wiki page

1. Create `src/content/docs/<section>/<slug>.md` with frontmatter `title`,
   `description`, optional `sidebar`, and — for dataset/recipe pages — a
   `verified` block.
2. Follow the dataset-page template (see `src/content/docs/datasets/fred.md`):
   intro + facts list → **Access** → **Gotchas (the ones that bite
   pipelines)** *immediately after Access* → reference tables → standard
   operations → citation. "Gotchas" is the differentiator; keep it elevated.
3. Add it to the section index table.
4. `npm run build`, then live-check the new route is 200 / 0-hop.

### The `Verified` discipline (non-negotiable)

```yaml
verified:
  date: 2026-05-16
  with: live no-key CSV fetch (GDP, USREC, SP500)
```

Only add `verified:` **after you have actually run the page's keystone claim
against the live source in this session.** The badge asserts provenance; an
unrun stamp is a lie and breaks the institute's entire value proposition. Be
precise in `with:` about what you actually ran.

Two fields grade the claim, and feed both the on-page badge and the
Verification tag axis:

- `level: fetched` only when you pulled real data live (green "Verified").
  Default is `reachable` (teal "Source reachable"), meaning the endpoint was
  confirmed live but the end-to-end pull was not proven here. The green claim
  is an explicit opt-in; do not stamp `fetched` on a reachability check.
- `access: licensed` when the path was exercised but needs paid credentials
  (amber "Access confirmed (licensed)"), e.g. WRDS run through a licensed
  session. If a source cannot be exercised here at all, omit `verified:`
  entirely and say so on the page; it then reads as `unverified`.

## Scrapability invariants (do not regress)

- Every wiki page must keep its raw `.md` twin (`postbuild.mjs`), and appear
  in `/llms.txt` + `/llms-full.txt`.
- `site/robots.txt` explicitly welcomes AI crawlers — keep it that way.
- Per-page `TechArticle` JSON-LD comes from `src/components/Head.astro`.
- No auth/key on any content. Open by design.

## Secrets / safety

- `.env` (live `ZENODO_TOKEN`) and `.vercel/` are gitignored — **never**
  commit them. The repo is public; re-check `git status` before any push.
- Sveltia CMS (`/wiki/admin/`) needs a GitHub OAuth App + Vercel env vars —
  see `docs/CMS-SETUP.md`. Not required for git/PR editing.

## After any non-trivial change

`npm run build` and live-verify on the production domain (routes 200/0-hop,
stamps render, `.md` twins + `llms.txt` intact) before considering it done.
