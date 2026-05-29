/* No-flash theme, shared across the hand-authored site. Honors the choice
   shared with the wiki (localStorage "starlight-theme": dark|light, otherwise
   the OS preference). Must load render-blocking in <head>, before paint, so
   there is no flash of the wrong theme. */
(function () {
  try {
    var t = localStorage.getItem('starlight-theme');
    document.documentElement.dataset.theme =
      t === 'dark' || t === 'light'
        ? t
        : matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
  } catch (e) {}
})();
