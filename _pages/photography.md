---
layout: single
title: "Photo Gallery"
permalink: /photography/
author_profile: false
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap" rel="stylesheet">

<div markdown="0">

<div class="camera-section">
  <div class="camera-wrap">
    <img class="camera-body" src="/images/photography/CameraHawaiiFilm.png" alt="">
    <button class="hotspot hotspot-gallery" id="galleryHotspot" aria-label="Open gallery"></button>
    <button class="hotspot hotspot-menu" id="menuHotspot" aria-label="Open filters"></button>
    <div class="callout callout-camera">
      <p>This is my real</p>
      <p>Olympus TG-7!</p>
    </div>
  </div>

  <div class="callout-buttons-wrap">
    <p class="callout-buttons-text">Try pressing the buttons!</p>
  </div>
</div>

<style>
html {
  background-color: #ffc48a;
}
  .camera-section {
  position: relative;
  padding-bottom: 50px;
}
.callout {
  position: absolute;
  color: #2c4a3e;
  z-index: 20;
  pointer-events: none;
}
.callout p,
.callout-buttons-text {
  font-family: 'Caveat', cursive;
  font-size: 1.4rem !important;
  font-weight: 600;
  margin: 0;
  line-height: 1.2;
}

.callout-camera {
  top: 4%;
  left: -22%;
  text-align: left;
  width: 30%;
}
.callout-camera p {
  transform: rotate(-40deg);
  transform-origin: left center;
}

.callout-buttons-wrap {
  width: 60vw;
  max-width: 900px;
  margin: 0 auto;
}
.callout-buttons-text {
  color: #2c4a3e;
  text-align: right;
  padding-right: 8%;
}

@media (max-width: 700px) {
  .callout p,
  .callout-buttons-text {
    font-size: 0.95rem !important;
  }
  .callout-camera {
    width: 32%;
    left: -30%;
  }
  .callout-camera p {
    transform: rotate(-25deg);
  }
  .callout-buttons-text {
    text-align: right;
    padding-right: 6%;
  }
}

  .camera-wrap {
  position: relative;
  width: 60vw;
  max-width: 900px;
  margin: 0 auto 1rem;
  aspect-ratio: 1044 / 626;
}
.camera-body { width: 100%; display: block; }
.hotspot {
  position: absolute;
  border: none;
  background: rgba(255,255,255,0.001);
  cursor: pointer;
  border-radius: 50%;
  z-index: 30;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  box-shadow: none;
  -webkit-tap-highlight-color: transparent;
}
.hotspot::-moz-focus-inner {
  border: 0;
  padding: 0;
}
.hotspot:focus,
.hotspot:focus-visible,
.hotspot:active {
  outline: none;
  box-shadow: none;
  background: rgba(255,255,255,0.001);
}
@media (hover: hover) {
  .hotspot:hover {
    background: rgba(255,164,74,0.35);
  }
}
.hotspot-gallery { left: 75.86%; top: 52.24%; width: 7.37%; height: 8.31%; }
.hotspot-menu    { left: 75.67%; top: 83.39%; width: 7.85%; height: 8.31%; }

.reveal-section {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.16,1,0.3,1);
}
.reveal-section.is-open { max-height: 3000px; }
#main, article.page, .page__inner-wrap, .page__content, .page__inner-wrap--layout-single {
  max-width: 100% !important;
  width: 100% !important;
  padding-left: 1em !important;
  padding-right: 1em !important;
}
article.page {
  position: relative;
}
h1.page__title {
  margin: 0.4rem 0 0.75rem !important;
}
.page__content {
  padding-top: 0.25rem !important;
}
.gallery-controls {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.gallery-filter-btns {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.gallery-filter-btn {
  padding: 7px 16px;
  border: 2px solid #2c4a3e;
  border-radius: 0px;
  background: transparent;
  color: #2c4a3e;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
}
.gallery-filter-btn:hover,
.gallery-filter-btn.active {
  background: #2c4a3e;
  color: #fff;
}
.gallery-search {
  padding: 8px 14px;
  border: 2px solid #2c4a3e;
  border-radius: 0px;
  background: rgba(255,255,255,0.5);
  color: #2c4a3e;
  font-size: 0.88rem;
  outline: none;
  width: 100%;
  max-width: 320px;
}
  .gallery-search:hover {
  background: rgba(255,255,255,0.5) !important;
}
#gallery-no-results {
  text-align: center;
  padding: 40px;
  color: #888;
  font-style: italic;
  display: none;
}
.photo-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 10px;
  gap: 6px;
  margin-top: 16px;
  clear: both;
}
.photo-tile {
  position: relative;
  cursor: pointer;
  border-radius: 0px;
}
.photo-tile img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.2s ease;
  border-radius: 0px;
  position: relative;
  z-index: 2;
}
.photo-tile:hover img { transform: scale(1.04); }
.stack-badge { position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.7); color: #fff; font-size: 0.75rem; padding: 2px 8px; border-radius: 12px; z-index: 3; }
.photo-tile.is-stack::before, .photo-tile.is-stack::after { display: none; }
.photo-modal {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.9);
  z-index: 9999;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 60px 0 80px 0;
  box-sizing: border-box;
}
.photo-modal.open { display: flex !important; }
#modal-img {
  width: 80vw;
  height: 55vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0;
}
.modal-caption {
  color: #fff;
  font-size: 0.95rem;
  text-align: center;
  padding: 0 20px;
  max-width: 80vw;
  margin-bottom: 0;
}
.modal-map-link {
  position: relative;
  bottom: auto;
  left: auto;
  right: auto;
  text-align: center;
  color: #fff;
  font-size: 0.9rem;
  text-decoration: none;
  z-index: 10001;
}
.modal-map-link:hover { text-decoration: underline; }
.modal-close {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 2rem;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
}
.modal-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2.5rem;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 16px;
}
.modal-prev { left: 10px; }
.modal-next { right: 10px; }
.modal-counter {
  position: absolute;
  bottom: 24px;
  left: 0;
  right: 0;
  text-align: center;
  color: #ccc;
  font-size: 0.85rem;
}
@media (max-width: 1200px) {
  .photo-grid { grid-template-columns: repeat(4, 1fr); }
}
@media (max-width: 1100px) and (min-width: 481px) {
  .gallery-controls {
    align-items: flex-start;
  }
  .gallery-filter-btns {
    justify-content: flex-start;
  }
  .gallery-search {
    margin: 0;
  }
}
@media (max-width: 900px) {
  .photo-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 600px) {
  .photo-grid { grid-template-columns: repeat(2, 1fr); }
  #modal-img { width: 95vw; height: 50vh; }
  .modal-caption { max-width: 95vw; font-size: 0.85rem; padding: 0 12px; }
}
@media (max-width: 767px) {
  .modal-close {
    top: 12px;
    right: 16px;
    font-size: 2.8rem;
    padding: 8px;
    background: rgba(0,0,0,0.4);
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
h1.page__title {
  text-align: center;
}
.gallery-controls {
  align-items: center;
}
.gallery-filter-btns {
  justify-content: center;
}
.gallery-search {
  margin: 0 auto;
}
</style>

<div class="reveal-section" id="menuSection">
  <div class="gallery-controls">
    <div class="gallery-filter-btns">
      <button class="gallery-filter-btn active" data-filter="all" onclick="setGalleryFilter('all')">All</button>
      <button class="gallery-filter-btn" data-filter="underwater" onclick="setGalleryFilter('underwater')"><i class="fas fa-anchor"></i> Underwater</button>
      <button class="gallery-filter-btn" data-filter="travel" onclick="setGalleryFilter('travel')"><i class="fas fa-plane"></i> Travel</button>
      <button class="gallery-filter-btn" data-filter="wildlife" onclick="setGalleryFilter('wildlife')"><i class="fas fa-dragon"></i> Wildlife</button>
      <button class="gallery-filter-btn" data-filter="film" onclick="setGalleryFilter('film')"><i class="fas fa-film"></i> Film</button>
      <button class="gallery-filter-btn" data-filter="science" onclick="setGalleryFilter('science')"><i class="fas fa-microscope"></i> Science</button>
    </div>
    <input class="gallery-search" type="text" placeholder="Search captions..." oninput="searchGallery(this.value)">
  </div>
  <div id="gallery-no-results">No photos match your search.</div>
</div>

<div class="reveal-section" id="gridSection">
  <div id="photo-grid" class="photo-grid"></div>
</div>

<div id="photo-modal" class="photo-modal">
  <a id="modal-map-link" class="modal-map-link" style="display:none;">See on map →</a>
  <button class="modal-close" onclick="closeModal()" aria-label="Close">&times;</button>
  <button class="modal-nav modal-prev" onclick="navModal(-1)" aria-label="Previous photo">&#8249;</button>
  <div id="modal-img"></div>
  <div id="modal-caption" class="modal-caption"></div>
  <button class="modal-nav modal-next" onclick="navModal(1)" aria-label="Next photo">&#8250;</button>
  <div id="modal-counter" class="modal-counter"></div>
</div>

<script src="/assets/js/photography-gallery.js"></script>
<script>
(function() {
  function resizeMasonryItem(tile) {
    const rowHeight = 10;
    const rowGap = 6;
    const img = tile.querySelector('img');
    if (!img || !img.naturalWidth) return;
    const containerWidth = tile.offsetWidth;
    if (!containerWidth) return;
    const displayHeight = (img.naturalHeight / img.naturalWidth) * containerWidth;
    const rowSpan = Math.ceil((displayHeight + rowGap) / (rowHeight + rowGap)) ;
    tile.style.gridRowEnd = 'span ' + rowSpan;
  }

  function resizeAllTiles() {
    document.querySelectorAll('.photo-tile').forEach(tile => {
      const img = tile.querySelector('img');
      if (!img) return;
      if (img.complete && img.naturalWidth) {
        resizeMasonryItem(tile);
      } else {
        img.addEventListener('load', () => {
          resizeMasonryItem(tile);
          setTimeout(() => resizeMasonryItem(tile), 100);
        });
      }
    });
  }
  document.querySelectorAll('#main, article.page, .page__inner-wrap, .page__content').forEach(el => {
    el.style.maxWidth = '100%';
    el.style.width = '100%';
    el.style.paddingLeft = '1em';
    el.style.paddingRight = '1em';
    el.style.float = 'none';
  });
    setTimeout(resizeAllTiles, 200);
  const grid = document.getElementById('photo-grid');
  const observer = new MutationObserver(() => {
    setTimeout(resizeAllTiles, 50);
    setTimeout(resizeAllTiles, 500);
    setTimeout(resizeAllTiles, 1500);
  });
  observer.observe(grid, { childList: true });

  window.addEventListener('resize', resizeAllTiles);
  setTimeout(resizeAllTiles, 500);
  setTimeout(resizeAllTiles, 1500);
  setTimeout(resizeAllTiles, 3000);

  const galleryHotspot = document.getElementById('galleryHotspot');
  const gridSection = document.getElementById('gridSection');
  if (galleryHotspot && gridSection) {
    galleryHotspot.addEventListener('click', () => {
      gridSection.classList.toggle('is-open');
    });
  } else {
    console.warn('gallery hotspot or gridSection not found', galleryHotspot, gridSection);
  }

  const menuHotspot = document.getElementById('menuHotspot');
  const menuSection = document.getElementById('menuSection');
  if (menuHotspot && menuSection) {
    menuHotspot.addEventListener('click', () => {
      menuSection.classList.toggle('is-open');
    });
  } else {
    console.warn('menu hotspot or menuSection not found', menuHotspot, menuSection);
  }

  document.getElementById('photo-modal').addEventListener('click', function(e) {
    if (e.target === this || e.target === document.getElementById('modal-img')) {
      closeModal();
    }
  });
})();
</script>

</div>
