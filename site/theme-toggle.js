/* Injects the theme toggle button on every hand-authored page and persists the
   choice to the wiki's localStorage key, so it carries across site <-> wiki.
   No-ops if a button is already present (e.g. the homepage's inline one). */
(function () {
  if (document.getElementById('theme-toggle')) return;
  var btn = document.createElement('button');
  btn.id = 'theme-toggle';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Toggle dark mode');
  btn.title = 'Toggle dark mode';
  btn.innerHTML =
    '<svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>' +
    '<svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>';
  btn.addEventListener('click', function () {
    var next =
      document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('starlight-theme', next);
    } catch (e) {}
  });
  document.body.appendChild(btn);
})();
