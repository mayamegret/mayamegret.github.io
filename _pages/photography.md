---
layout: single
title: "Photo Gallery"
permalink: /photography/
author_profile: false
---

A selection of photos from my travels and dives!

<style>
#main, article.page, .page__inner-wrap, .page__content, .page__inner-wrap--layout-single {
  max-width: 100% !important;
  width: 100% !important;
  padding-left: 1em !important;
  padding-right: 1em !important;
}
h1.page__title {
  margin-left: 0 !important;
  padding-left: 0 !important;
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
  border-radius: 20px;
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
  border-radius: 20px;
  background: rgba(255,255,255,0.5);
  color: #2c4a3e;
  font-size: 0.88rem;
  outline: none;
  width: 100%;
  max-width: 320px;
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
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 10px;
  gap: 18px;
  margin-top: 24px;
}
.photo-tile {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 6px;
}
.photo-tile img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.2s ease;
  border-radius: 6px;
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
</style>

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

<div id="photo-grid" class="photo-grid"></div>

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
function resizeMasonryItem(tile) {
  const rowHeight = 10;
  const rowGap = 18;
  const img = tile.querySelector('img');
  if (!img || !img.naturalWidth) return;
  const containerWidth = tile.offsetWidth;
  if (!containerWidth) return;
  const displayHeight = (img.naturalHeight / img.naturalWidth) * containerWidth;
  const rowSpan = Math.ceil((displayHeight + rowGap) / (rowHeight + rowGap));
  tile.style.gridRowEnd = 'span ' + rowSpan;
}

function resizeAllTiles() {
  document.querySelectorAll('.photo-tile').forEach(tile => {
    const img = tile.querySelector('img');
    if (!img) return;
    if (img.complete && img.naturalWidth) {
      resizeMasonryItem(tile);
    } else {
      img.addEventListener('load', () => resizeMasonryItem(tile));
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
});
observer.observe(grid, { childList: true });

window.addEventListener('resize', resizeAllTiles);
// Force resize after images have had time to load
setTimeout(resizeAllTiles, 500);
setTimeout(resizeAllTiles, 1500);
setTimeout(resizeAllTiles, 3000);
  
document.getElementById('photo-modal').addEventListener('click', function(e) {
  if (e.target === this || e.target === document.getElementById('modal-img')) {
    closeModal();
  }
});
</script>
