# instituteforautomatedresearch.org

Source for the **Institute for Automated Research** website — the homepage,
the working-paper series, and the public wiki. Live at
<https://instituteforautomatedresearch.org>.

One repo, one Vercel project, one build. Push to `main` → Vercel deploys.

## What's here

| Path | What it is | Served at |
|---|---|---|
| `site/` | Hand-authored homepage, `about`, and the working-paper series. Plain HTML, no framework. Copied **verbatim** to the deploy root. | `/`, `/about`, `/papers/...` |
| `src/content/docs/**.md` | The **wiki** — Astro [Starlight](https://starlight.astro.build), Markdown content. | `/wiki/...` |
| `scripts/postbuild.mjs` | After `astro build`: lays `site/` at the root, writes raw `.md` twins, `/llms.txt`, `/llms-full.txt`. | — |
| `scripts/zenodo_mint.py` | Mints Zenodo DOIs for papers from their `citation_*` tags. | — |
| `api/` | Vercel functions: GitHub OAuth relay for the browser CMS. | `/api/*` |
| `vercel.json` | `cleanUrls`, www→apex + `/zeropaper.pdf` redirects. **No `trailingSlash`** (it would 308 every wiki link). | — |
| `CLAUDE.md` | Architecture + the **Verified discipline** (read before editing wiki content). | — |

The wiki is intentionally LLM-scrapable: every page has a raw `.md` twin at
the same path + `.md`, plus `/llms.txt` and `/llms-full.txt`, and
`robots.txt` explicitly welcomes AI crawlers.

## Develop

```bash
npm install
npm run dev      # local Starlight dev server
npm run build    # astro build + postbuild → dist/
```

## Deploy

Push to `main`. Vercel is connected to this repo and auto-deploys; there is
**no manual `vercel --prod` step**. `vercel.json` carries the build command,
output dir, and redirects. (Domain/DNS is already configured on the Vercel
project.)

## Contributing

Content is **reviewed before publishing** — provenance and accuracy are the
point of this institute.

- **Small fixes:** the *Edit page* link on any wiki article → opens a PR.
- **Requests / corrections:** [open an issue](https://github.com/institute-for-automated-research/website/issues/new/choose)
  (dataset/topic request or error report), or email
  `contact@instituteforautomatedresearch.org`.
- **Browser editing:** Sveltia CMS at `/wiki/admin/` — one-time setup in
  [`docs/CMS-SETUP.md`](docs/CMS-SETUP.md).

### Adding a wiki page

Create `src/content/docs/<section>/<slug>.md`, follow the dataset-page
template (`src/content/docs/datasets/fred.md`), and **only add a `verified:`
stamp after actually running the page's keystone claim in-session** — see the
Verified discipline in [`CLAUDE.md`](CLAUDE.md). Free sources get the green
"Verified" badge; licensed-but-exercised sources get the amber "Access
confirmed (licensed)" badge (`verified.access: licensed`).

## Adding a paper

1. Copy the PDF to `site/papers/iar-<a|m>/iar-<a|m>-NNN.pdf` (≤5 MB,
   text-extractable).
2. Copy an existing landing page (e.g. `site/papers/iar-a/iar-a-001.html`) and
   update title, authors, date, abstract, `citation_*` meta tags, citation
   block. Copy from the **same series** so the ISSN carries over, or fix
   both the `citation_issn` tag and the visible ISSN line: 3143-3626 for
   IAR-A, 3143-3634 for IAR-M.
3. Add a row to `site/papers/iar-<a|m>/index.html`.
4. Add the new URLs to `site/sitemap.xml`.
5. Push. Then request re-indexing in
   [Google Search Console](https://search.google.com/search-console).

### Google Scholar indexing

Scholar crawls via Google Search — no direct submission. After deploy, submit
`sitemap.xml` and request indexing on each series index page. Initial Scholar
appearance takes ~4–10 weeks; **metadata fixes take 6–9 months to
propagate**, so verify `citation_*` tags before posting. Required per paper
(already in the templates): `citation_title`, `citation_author`
("Last, First", one per author), `citation_publication_date` (`YYYY/MM/DD`),
`citation_pdf_url`, `citation_journal_title`.

### DOIs via Zenodo

`scripts/zenodo_mint.py` reads a landing page's `citation_*` tags, uploads the
PDF, publishes the Zenodo deposit, and writes the DOI back into the page and
BibTeX. Pure stdlib, no `pip install`.

```bash
export ZENODO_TOKEN=...          # zenodo.org → tokens, scopes: deposit:write, deposit:actions
python3 scripts/zenodo_mint.py site/papers/iar-a/iar-a-001 --dry-run
python3 scripts/zenodo_mint.py site/papers/iar-a/iar-a-001 --sandbox
python3 scripts/zenodo_mint.py site/papers/iar-a/iar-a-001            # production
```

Skips papers that already have a DOI unless `--force`. Push after minting.

### ISSN

Each series has a free online ISSN from the U.S. ISSN Center (Library of
Congress):

- **IAR Autonomous Papers** — ISSN 3143-3626 (online)
- **IAR Methodology Papers** — ISSN 3143-3634 (online)

Each landing page in a series carries `<meta name="citation_issn">` with the
matching ISSN, and the series shows it in human-readable form.

## Secrets

`.env` (holds the Zenodo token) and `.vercel/` are gitignored and have never
been committed. This repo is public — re-check `git status` before any push.
CMS OAuth secrets live in Vercel env vars, not here (see `docs/CMS-SETUP.md`).
