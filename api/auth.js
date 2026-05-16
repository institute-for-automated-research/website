// GitHub OAuth relay for Sveltia/Decap CMS — step 1 (authorize redirect).
// Vercel Node serverless function. Requires env vars (set in Vercel, never
// committed): GITHUB_OAUTH_ID, GITHUB_OAUTH_SECRET.
import { randomBytes } from 'node:crypto';

export default function handler(req, res) {
  const clientId = process.env.GITHUB_OAUTH_ID;
  if (!clientId) {
    res.status(500).send('GITHUB_OAUTH_ID not configured');
    return;
  }
  const state = randomBytes(16).toString('hex');
  const host = req.headers.host;
  const redirectUri = `https://${host}/api/callback`;

  // CSRF: bind state to an httpOnly cookie verified in the callback.
  res.setHeader(
    'Set-Cookie',
    `iar_oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`
  );

  const url = new URL('https://github.com/login/oauth/authorize');
  url.searchParams.set('client_id', clientId);
  url.searchParams.set('redirect_uri', redirectUri);
  url.searchParams.set('scope', 'repo,user');
  url.searchParams.set('state', state);
  res.writeHead(302, { Location: url.toString() });
  res.end();
}
