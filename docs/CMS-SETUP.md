# Browser editing (Sveltia CMS) — one-time setup

The wiki is editable three ways:

1. **Git** — edit `src/content/docs/**.md`, commit, push (auto-deploys).
2. **Edit page link** — on every wiki article → opens a GitHub PR.
3. **Sveltia CMS** at `/wiki/admin/` — a browser editor that commits/PRs for
   you. Requires the one-time setup below (it needs a GitHub OAuth App).

Until step 3 is configured, options 1 and 2 work fully — `/wiki/admin/` will
just fail to sign in.

## Configure Sveltia CMS

1. **Create a GitHub OAuth App**
   <https://github.com/organizations/institute-for-automated-research/settings/applications>
   → New OAuth App:
   - Homepage URL: `https://instituteforautomatedresearch.org`
   - **Authorization callback URL:** `https://instituteforautomatedresearch.org/api/callback`
   - Copy the **Client ID**; generate a **Client secret**.

2. **Add the secrets to Vercel** (project → Settings → Environment Variables,
   Production scope — never commit these):
   - `GITHUB_OAUTH_ID` = the Client ID
   - `GITHUB_OAUTH_SECRET` = the Client secret

3. Redeploy (any push, or Vercel dashboard → Redeploy). Then visit
   `https://instituteforautomatedresearch.org/wiki/admin/`, sign in with
   GitHub, and edit. Saves go through the editorial workflow (a PR), so
   content is still reviewed before it publishes.

The OAuth relay is `api/auth.js` + `api/callback.js` (our own Vercel
functions — no third-party service ever holds the token).
