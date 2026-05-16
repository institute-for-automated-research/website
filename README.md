# instituteforautomatedresearch.org

Static landing page. Deployed via Vercel.

## Deploy

```bash
# First time
npx vercel --prod

# Subsequent
npx vercel --prod
```

After first deploy, add the domain in Vercel dashboard:
- Project Settings → Domains → Add `instituteforautomatedresearch.org` and `www.instituteforautomatedresearch.org`
- Vercel will show the DNS records to add at Namecheap (one A record for apex, one CNAME for www)

## Files

- `index.html` — homepage, inline CSS, no build step
- `papers/index.html` — Working Papers hub
- `papers/iar-a/` — **IAR Autonomous Papers** series (papers produced by the ZeroPaper pipeline)
  - `index.html` — series browse page
  - `iar-a-NNN.html` — per-paper landing page with Google Scholar `citation_*` metadata
  - `iar-a-NNN.pdf` — the PDF
- `papers/iar-m/` — **IAR Methodology Papers** series (human research about automating papers)
  - same layout as `iar-a/`
- `sitemap.xml` — submit to [Google Search Console](https://search.google.com/search-console) after each deploy
- `robots.txt` — allows all crawlers, points at sitemap
- `vercel.json` — `cleanUrls: true` (so `/papers/iar-a/iar-a-001` serves `iar-a-001.html`), www→apex redirect, and a 301 from `/zeropaper.pdf` to `/papers/iar-m/iar-m-001.pdf`

## Adding a new paper

1. Copy the PDF to `papers/iar-<a|m>/iar-<a|m>-NNN.pdf` (must be ≤5 MB, text-extractable).
2. Copy an existing landing page (e.g. `iar-a-001.html`) and update: title, authors, date, abstract, `citation_*` meta tags, citation block.
3. Add a row to `papers/iar-<a|m>/index.html`.
4. Add the new URLs to `sitemap.xml`.
5. Redeploy (`npx vercel --prod`), then request re-indexing in Search Console.

## Google Scholar indexing

- No direct submission to Scholar — it crawls via Google Search.
- After first deploy, verify the domain in [Google Search Console](https://search.google.com/search-console), submit `sitemap.xml`, request indexing on each series index page.
- Expect 4–10 weeks to initial Scholar appearance. **Metadata fixes take 6–9 months to propagate**, so verify `citation_*` tags before posting.
- Required tags per paper (already wired into the templates): `citation_title`, `citation_author` (one per author, "Last, First"), `citation_publication_date` (`YYYY/MM/DD`), `citation_pdf_url`, `citation_journal_title`.

## ISSN (in progress)

Two free online ISSNs requested at [issn.org](https://www.issn.org/) — one for each series:
- IAR Autonomous Papers
- IAR Methodology Papers

Once granted, add `<meta name="citation_issn" content="XXXX-XXXX">` to every landing page in the matching series.

## DOIs via Zenodo

Every paper gets a free DOI minted through [Zenodo](https://zenodo.org)'s API. The script `scripts/zenodo_mint.py` reads metadata from a landing page's `citation_*` tags, uploads the PDF, publishes the deposit, and writes the DOI back into the landing page (meta tag, details list, citation block, BibTeX).

```bash
# One-time: get a token at https://zenodo.org/account/settings/applications/tokens/new
# (scopes: deposit:write, deposit:actions)
export ZENODO_TOKEN=...

# Dry-run to inspect parsed metadata first
python3 scripts/zenodo_mint.py papers/iar-a/iar-a-001 --dry-run

# Test against the sandbox (free, separate account at sandbox.zenodo.org)
python3 scripts/zenodo_mint.py papers/iar-a/iar-a-001 --sandbox

# Production
python3 scripts/zenodo_mint.py papers/iar-a/iar-a-001

# Bulk
python3 scripts/zenodo_mint.py papers/iar-a/iar-a-001 papers/iar-a/iar-a-002 ...
```

Pure stdlib, no `pip install` needed. Skips papers that already have a DOI unless `--force` is passed. After minting, redeploy and request reindexing in Search Console.
