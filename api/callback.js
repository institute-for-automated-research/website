// GitHub OAuth relay for Sveltia/Decap CMS — step 2 (token exchange).
// Exchanges ?code for an access token, verifies the CSRF state cookie, then
// hands the token to the CMS window via the Decap postMessage handshake.

function page(status, payload) {
  // Decap/Sveltia handshake: wait for the opener's "authorizing:github"
  // ping, then reply once with the result.
  return `<!doctype html><html><body><script>
  (function () {
    function send(){ window.opener && window.opener.postMessage(
      'authorization:github:${status}:' + ${JSON.stringify(JSON.stringify(payload))},
      '*'); }
    window.addEventListener('message', function(){ send(); }, { once: true });
    window.opener && window.opener.postMessage('authorizing:github', '*');
  })();
  </script><p>Completing sign-in… you can close this window.</p></body></html>`;
}

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  // Clear the state cookie regardless of outcome.
  res.setHeader(
    'Set-Cookie',
    'iar_oauth_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0'
  );

  try {
    const { code, state } = req.query;
    const cookie = (req.headers.cookie || '')
      .split(';')
      .map((c) => c.trim())
      .find((c) => c.startsWith('iar_oauth_state='));
    const expected = cookie ? cookie.split('=')[1] : null;

    if (!code || !state || !expected || state !== expected) {
      res.status(400).send(page('error', { message: 'Invalid OAuth state.' }));
      return;
    }

    const r = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        client_id: process.env.GITHUB_OAUTH_ID,
        client_secret: process.env.GITHUB_OAUTH_SECRET,
        code,
      }),
    });
    const data = await r.json();
    if (data.error || !data.access_token) {
      res
        .status(401)
        .send(page('error', { message: data.error || 'Token exchange failed.' }));
      return;
    }
    res
      .status(200)
      .send(page('success', { token: data.access_token, provider: 'github' }));
  } catch (e) {
    res.status(500).send(page('error', { message: String(e) }));
  }
}
