#!/usr/bin/env python3
"""
Mint a Zenodo DOI for an IAR working paper and write it back into the landing page.

Metadata is parsed from the landing page's <meta name="citation_*"> tags,
which stay the single source of truth.

Usage:
    export ZENODO_TOKEN=...            # from https://zenodo.org/account/settings/applications/tokens/new
    python scripts/zenodo_mint.py papers/iar-a/iar-a-001
    python scripts/zenodo_mint.py papers/iar-a/iar-a-001 --sandbox
    python scripts/zenodo_mint.py papers/iar-a/iar-a-001 --dry-run

Sandbox uses a separate account at https://sandbox.zenodo.org (also free, free token).
"""

import argparse
import html
import json
import os
import re
import sys
import urllib.error
import urllib.request
from pathlib import Path

PROD_API = "https://zenodo.org/api"
SANDBOX_API = "https://sandbox.zenodo.org/api"
ROOT = Path(__file__).resolve().parent.parent


def _load_dotenv():
    """Load KEY=VALUE pairs from .env at repo root into os.environ if not already set."""
    env_path = ROOT / ".env"
    if not env_path.exists():
        return
    for line in env_path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        k, _, v = line.partition("=")
        k, v = k.strip(), v.strip().strip('"').strip("'")
        os.environ.setdefault(k, v)


_load_dotenv()


# ----- HTTP helpers (stdlib only) -----

def _request(method, url, token, json_body=None, raw_body=None, content_type=None):
    headers = {"Authorization": f"Bearer {token}"}
    data = None
    if json_body is not None:
        data = json.dumps(json_body).encode("utf-8")
        headers["Content-Type"] = "application/json"
    elif raw_body is not None:
        data = raw_body
        if content_type:
            headers["Content-Type"] = content_type
    req = urllib.request.Request(url, data=data, method=method, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            body = resp.read()
            return resp.status, (json.loads(body) if body else None)
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"HTTP {e.code} {e.reason}\n{url}\n{body}") from e


# ----- Landing page parsing -----

def _meta(html, name):
    pat = re.compile(
        rf'<meta\s+name="{re.escape(name)}"\s+content="([^"]*)"', re.IGNORECASE
    )
    return [m.group(1) for m in pat.finditer(html)]


def _abstract(html):
    """HTML of <p> blocks between <h2>Abstract</h2> and the next <h2>."""
    m = re.search(
        r"<h2[^>]*>\s*Abstract\s*</h2>(.+?)<h2", html, re.DOTALL | re.IGNORECASE
    )
    if not m:
        return None
    paras = re.findall(r"<p[^>]*>.+?</p>", m.group(1), re.DOTALL)
    return "\n".join(p.strip() for p in paras).strip() or None


def _affiliation(html_text):
    m = re.search(r'<div class="dateline"[^>]*>(.+?)</div>', html_text, re.DOTALL)
    if not m:
        return None
    text = re.sub(r"<[^>]+>", "", m.group(1))
    text = html.unescape(text)
    text = re.sub(r"·", ",", text)
    text = re.sub(r"\s+", " ", text).strip(" ,")
    # Take the primary (first) affiliation when multiple are listed
    primary = text.split(",")[0].strip()
    return primary or None


def parse_landing(landing_path: Path):
    html = landing_path.read_text(encoding="utf-8")

    titles = _meta(html, "citation_title")
    authors = _meta(html, "citation_author")
    dates = _meta(html, "citation_publication_date")
    pdf_urls = _meta(html, "citation_pdf_url")
    if not (titles and authors and dates and pdf_urls):
        raise ValueError(
            f"{landing_path}: missing one of citation_title / citation_author / "
            "citation_publication_date / citation_pdf_url"
        )

    return {
        "title": titles[0],
        "authors": authors,
        "date": dates[0].replace("/", "-"),
        "pdf_url": pdf_urls[0],
        "journal": (_meta(html, "citation_journal_title") or [None])[0],
        "number": (_meta(html, "citation_technical_report_number") or [None])[0],
        "language": (_meta(html, "citation_language") or ["en"])[0],
        "keywords": [
            k.strip()
            for k in (_meta(html, "citation_keywords") or [""])[0]
            .replace(",", ";")
            .split(";")
            if k.strip()
        ],
        "landing_url": (_meta(html, "citation_abstract_html_url") or [None])[0],
        "abstract": _abstract(html),
        "affiliation": _affiliation(html) or "Institute for Automated Research",
        "existing_doi": (_meta(html, "citation_doi") or [None])[0],
    }


# ----- Zenodo metadata builder -----

def build_metadata(paper):
    creators = [{"name": a, "affiliation": paper["affiliation"]} for a in paper["authors"]]
    notes = ""
    if paper["journal"] and paper["number"]:
        notes = f"{paper['journal']} No. {paper['number']}, Institute for Automated Research."

    metadata = {
        "title": paper["title"],
        "upload_type": "publication",
        "publication_type": "workingpaper",
        "description": paper["abstract"] or paper["title"],
        "creators": creators,
        "publication_date": paper["date"],
        "keywords": paper["keywords"],
        "language": paper["language"],
        "imprint_publisher": "Institute for Automated Research",
        "notes": notes,
        "access_right": "open",
        "license": "cc-by-4.0",
    }
    if paper["landing_url"]:
        metadata["related_identifiers"] = [
            {"identifier": paper["landing_url"], "relation": "isAlternateIdentifier", "scheme": "url"}
        ]
    return metadata


# ----- Landing page write-back -----

def write_doi_into_landing(landing_path: Path, doi: str):
    html = landing_path.read_text(encoding="utf-8")
    doi_url = f"https://doi.org/{doi}"

    # 1. citation_doi meta tag (add or replace)
    if re.search(r'<meta\s+name="citation_doi"', html, re.IGNORECASE):
        html = re.sub(
            r'<meta\s+name="citation_doi"\s+content="[^"]*">',
            f'<meta name="citation_doi" content="{doi}">',
            html,
        )
    else:
        # insert just before citation_language for consistent ordering
        html = re.sub(
            r'(<meta\s+name="citation_language")',
            f'<meta name="citation_doi" content="{doi}">\n{chr(60)}meta name="citation_language"',
            html,
            count=1,
        )

    # 2. visible DOI row in the details list
    html = re.sub(
        r'(<li><span class="key">DOI</span><span>)[^<]*(</span></li>)',
        rf'\1<a href="{doi_url}" style="color: var(--accent);">{doi}</a>\2',
        html,
    )

    # 3. citation block: append ", https://doi.org/..." if not already appended there
    suffix = f", {doi_url}"
    html = re.sub(
        r"(Available at:\s*https://instituteforautomatedresearch\.org/papers/[^<,\s]+)(?!,\s*https://doi\.org/)",
        rf"\1{suffix}",
        html,
    )

    # 4. BibTeX: add doi field if not present
    if "doi         =" not in html:
        html = re.sub(
            r"(url         = \{[^}]+\})",
            rf"\1,\n  doi         = {{{doi}}}",
            html,
        )

    landing_path.write_text(html, encoding="utf-8")


def write_bib_sibling(landing_path: Path):
    """Extract the BibTeX entry from the landing page and write it to a .bib sibling."""
    html_text = landing_path.read_text(encoding="utf-8")
    m = re.search(
        r"<h2[^>]*>\s*BibTeX\s*</h2>\s*<div class=\"cite\">(@[^<]+)</div>",
        html_text,
        re.DOTALL | re.IGNORECASE,
    )
    if not m:
        return None
    bib = m.group(1).strip() + "\n"
    bib_path = landing_path.with_suffix(".bib")
    bib_path.write_text(bib, encoding="utf-8")
    return bib_path


# ----- Main mint flow -----

def mint(landing_path: Path, sandbox=False, dry_run=False, force=False):
    paper = parse_landing(landing_path)

    if paper["existing_doi"] and not force:
        print(f"  Already has DOI: {paper['existing_doi']} (use --force to overwrite)")
        return paper["existing_doi"]

    pdf_path = landing_path.parent / Path(paper["pdf_url"]).name
    if not pdf_path.exists():
        raise FileNotFoundError(f"PDF not found next to landing: {pdf_path}")

    metadata = build_metadata(paper)

    print(f"  Title: {paper['title']}")
    print(f"  Authors: {', '.join(paper['authors'])}")
    print(f"  Date: {paper['date']}")
    print(f"  PDF: {pdf_path.name} ({pdf_path.stat().st_size // 1024} KB)")
    print(f"  Series: {paper['journal']} / {paper['number']}")

    if dry_run:
        print("\n--- DRY RUN: metadata that would be sent ---")
        print(json.dumps(metadata, indent=2))
        return None

    token = os.environ.get("ZENODO_TOKEN")
    if not token:
        sys.exit("ZENODO_TOKEN env var required. Get one at https://zenodo.org/account/settings/applications/tokens/new")
    api = SANDBOX_API if sandbox else PROD_API

    # 1. create deposit
    _, deposit = _request("POST", f"{api}/deposit/depositions", token, json_body={})
    dep_id = deposit["id"]
    bucket = deposit["links"]["bucket"]
    print(f"  → deposit {dep_id} created")

    # 2. upload PDF to bucket (Zenodo's bucket API requires application/octet-stream)
    pdf_bytes = pdf_path.read_bytes()
    _request("PUT", f"{bucket}/{pdf_path.name}", token,
             raw_body=pdf_bytes, content_type="application/octet-stream")
    print(f"  → uploaded {pdf_path.name}")

    # 3. set metadata
    _request("PUT", f"{api}/deposit/depositions/{dep_id}", token,
             json_body={"metadata": metadata})
    print("  → metadata set")

    # 4. publish
    _, published = _request("POST",
                            f"{api}/deposit/depositions/{dep_id}/actions/publish", token)
    doi = published["doi"]
    print(f"  → PUBLISHED. DOI: {doi}")
    print(f"     {published['links'].get('html', '')}")

    # 5. write back into landing page
    write_doi_into_landing(landing_path, doi)
    print(f"  → wrote DOI into {landing_path.relative_to(ROOT)}")

    # 6. write .bib sibling
    bib_path = write_bib_sibling(landing_path)
    if bib_path:
        print(f"  → wrote {bib_path.relative_to(ROOT)}")

    return doi


def main():
    p = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    p.add_argument("landings", nargs="+",
                   help="One or more landing paths, e.g. papers/iar-a/iar-a-001")
    p.add_argument("--sandbox", action="store_true",
                   help="Use Zenodo sandbox (sandbox.zenodo.org) instead of production")
    p.add_argument("--dry-run", action="store_true",
                   help="Parse and print metadata without uploading")
    p.add_argument("--force", action="store_true",
                   help="Mint a new DOI even if landing already has one")
    args = p.parse_args()

    for raw in args.landings:
        path = Path(raw)
        if not path.is_absolute():
            path = (ROOT / path).resolve()
        if path.is_dir():
            sys.exit(f"{path} is a directory; pass the landing file (with or without .html)")
        if not path.suffix:
            path = path.with_suffix(".html")
        if not path.exists():
            sys.exit(f"Not found: {path}")
        print(f"\n=== {path.relative_to(ROOT)} ===")
        mint(path, sandbox=args.sandbox, dry_run=args.dry_run, force=args.force)


if __name__ == "__main__":
    main()
