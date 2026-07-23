/* ============================================
   Featured Photo Cube — reads your existing `tiles`
   Drop this file at assets/js/featured-cube.js
   and load it AFTER your gallery.js on the page,
   since it reuses the `tiles` array already defined
   there (no photo list to duplicate/maintain).
   ============================================ */

(function () {

  // ---------------------------------------------
  // Pick 6 photos for the spinning cube faces,
  // evenly sampled across your whole tiles array
  // so it naturally refreshes as you add photos.
  // ---------------------------------------------
  function pickCubeFaces() {
    if (typeof tiles === 'undefined' || !tiles.length) return [];
    const usable = tiles.filter(t => t.photos && t.photos.length);
    const step = Math.max(1, Math.floor(usable.length / 6));
    const faces = [];
    for (let i = 0; i < 6 && i < usable.length; i++) {
      faces.push(usable[(i * step) % usable.length].photos[0]);
    }
    // pad out if the gallery has fewer than 6 photos total
    while (faces.length < 6 && faces.length > 0) {
      faces.push(faces[faces.length % usable.length]);
    }
    return faces;
  }

  // ---------------------------------------------
  // Pick "today's" featured photo — deterministic,
  // same photo for everyone on a given calendar day.
  // Pulled from tiles that have a real id + caption,
  // since those are the ones with a story to show.
  // ---------------------------------------------
  function dayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    return Math.floor((date - start) / 86400000);
  }

  function idToTitle(id) {
    return id
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  }

  function getFeaturedTile() {
    if (typeof tiles === 'undefined' || !tiles.length) return null;
    const pool = tiles.filter(t => t.id && t.caption);
    if (!pool.length) return null;
    const index = dayOfYear(new Date()) % pool.length;
    return pool[index];
  }

  // ---------------------------------------------
  // Build the cube markup and insert it
  // ---------------------------------------------
  function buildCubeHTML(faces) {
    const faceNames = ['front', 'back', 'right', 'left', 'top', 'bottom'];
    const facesHTML = faceNames
      .map((name, i) => `<div class="cube-face face-${name}" style="background-image:url('${faces[i]}')"></div>`)
      .join('');

    return `
      <section class="cube-feature">
        <div class="cube-feature-text">
          <p class="cube-feature-label">Featured photo of the day</p>
        </div>
        <div class="cube-scene">
          <div class="cube" id="photoCube" tabindex="0" role="button" aria-label="Open today's featured photo">
            ${facesHTML}
          </div>
        </div>
      </section>
    `;
  }

  function buildOverlayHTML() {
    return `
      <div class="reveal-overlay" id="revealOverlay" aria-hidden="true">
        <div class="reveal-backdrop" id="revealBackdrop"></div>
        <div class="reveal-panel" role="dialog" aria-modal="true" aria-label="Featured photo of the day">
          <button class="reveal-close" id="revealClose" aria-label="Close">&times;</button>
          <img id="revealImg" class="reveal-img" src="" alt="" />
          <p class="reveal-caption" id="revealCaption"></p>
          <a class="reveal-map-link" id="revealMapLink" href="#" style="display:none;">See on map →</a>
        </div>
      </div>
    `;
  }

  document.addEventListener('DOMContentLoaded', function () {
    const mount = document.getElementById('featured-cube-mount');
    if (!mount) return; // no mount point found, nothing to do

    const faces = pickCubeFaces();
    if (!faces.length) return; // tiles not loaded yet or empty

    mount.innerHTML = buildCubeHTML(faces);

    // Append the overlay directly to <body> instead of nesting it inside
    // the small cube mount — this guarantees nothing up the DOM tree can
    // ever accidentally trap its position:fixed behavior.
    const overlayWrapper = document.createElement('div');
    overlayWrapper.innerHTML = buildOverlayHTML();
    document.body.appendChild(overlayWrapper.firstElementChild);
     
    const cube = document.getElementById('photoCube');
    const overlay = document.getElementById('revealOverlay');
    const backdrop = document.getElementById('revealBackdrop');
    const closeBtn = document.getElementById('revealClose');
    const img = document.getElementById('revealImg');
    const caption = document.getElementById('revealCaption');
    const mapLink = document.getElementById('revealMapLink');

    const featured = getFeaturedTile();
    if (!featured) return;

    function openReveal() {
      img.src = featured.photos[0];
      img.alt = featured.id ? idToTitle(featured.id) : '';
      caption.textContent = featured.caption;

      if (featured.mapLink) {
        mapLink.href = featured.mapLink;
        mapLink.style.display = 'inline-block';
      } else {
        mapLink.style.display = 'none';
      }

      cube.classList.add('is-opening');
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
      closeBtn.focus();
      document.body.style.overflow = 'hidden';
    }

    function closeReveal() {
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden', 'true');
      cube.classList.remove('is-opening');
      cube.focus();
      document.body.style.overflow = '';
    }

    cube.addEventListener('click', openReveal);
    cube.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openReveal();
      }
    });

    closeBtn.addEventListener('click', closeReveal);
    backdrop.addEventListener('click', closeReveal);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
        closeReveal();
      }
    });
  });
})();
