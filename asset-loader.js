/* OBHOY asset loader
   Replace any image in assets/ (including assets/cover photos/) using the exact filename in ASSET-GUIDE.md.
   A cache-buster makes same-filename replacements appear after refresh.
   Missing page images fall back to their original remote source. */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var version = Date.now();
    document.querySelectorAll('img[data-asset]').forEach(function (img) {
      var asset = img.getAttribute('data-asset');
      var fallback = img.getAttribute('data-fallback');
      img.addEventListener('error', function () {
        if (fallback && img.dataset.fallbackUsed !== '1') {
          img.dataset.fallbackUsed = '1';
          img.src = fallback;
        }
      });
      img.src = 'assets/' + asset + '?v=' + version;
    });
  });
})();
