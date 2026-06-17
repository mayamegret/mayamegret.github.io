---
layout: single
title: "Photography"
permalink: /photography/
author_profile: true
---

A selection of photos from my travels and dives

<div id="photo-grid" class="photo-grid"></div>

<div id="photo-modal" class="photo-modal">
  <button class="modal-close" onclick="closeModal()" aria-label="Close">&times;</button>
  <button class="modal-nav modal-prev" onclick="navModal(-1)" aria-label="Previous photo">&#8249;</button>
  <img id="modal-img" src="" alt="">
  <button class="modal-nav modal-next" onclick="navModal(1)" aria-label="Next photo">&#8250;</button>
  <div id="modal-counter" class="modal-counter"></div>
</div>

<style>
.photo-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 18px; margin-top: 24px; }
.photo-tile { position: relative; cursor: pointer; aspect-ratio: 1 / 1; overflow: hidden; border-radius: 6px; }
.photo-tile img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.2s ease; border-radius: 6px; position: relative; z-index: 2; }
.photo-tile:hover img { transform: scale(1.04); }
.stack-badge { position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.7); color: #fff; font-size: 0.75rem; padding: 2px 8px; border-radius: 12px; z-index: 3; }
.photo-tile.is-stack::before, .photo-tile.is-stack::after { content: ""; position: absolute; inset: 0; background: #fff; border: 1px solid #ddd; border-radius: 6px; z-index: 1; }
.photo-tile.is-stack::before { transform: rotate(-5deg) translate(-5px, 4px); }
.photo-tile.is-stack::after { transform: rotate(5deg) translate(5px, -4px); }
.photo-modal { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.9); z-index: 9999; align-items: center; justify-content: center; }
.photo-modal.open { display: flex; }
.photo-modal img { max-width: 85vw; max-height: 80vh; object-fit: contain; }
.modal-close { position: absolute; top: 20px; right: 30px; font-size: 2rem; color: #fff; background: none; border: none; cursor: pointer; }
.modal-nav { position: absolute; top: 50%; transform: translateY(-50%); font-size: 2.5rem; color: #fff; background: none; border: none; cursor: pointer; padding: 0 16px; }
.modal-prev { left: 10px; }
.modal-next { right: 10px; }
.modal-counter { position: absolute; bottom: 24px; left: 0; right: 0; text-align: center; color: #ccc; font-size: 0.85rem; }
</style>

<script>
// Each entry is one grid tile. One photo = a normal tile.
// Multiple photos in the same array = a stack you click through.
// Reorder/regroup these to match which photos actually belong together.
const tiles = [
  { photos: ["/images/photography/IMG_0406.jpg"] },
  { photos: ["/images/photography/IMG_0455.jpg"] },
  { photos: ["/images/photography/IMG_0475.jpg"] },
  { photos: ["/images/photography/IMG_0593.jpg", "/images/photography/IMG_0599.jpg", "/images/photography/IMG_1093.jpg"] },
  { photos: ["/images/photography/IMG_0609.jpg"] },
  { photos: ["/images/photography/IMG_0931.jpg"] },
  { photos: ["/images/photography/IMG_1593.jpg"] },
  { photos: ["/images/photography/IMG_2277.jpg"] },
  { photos: ["/images/photography/IMG_2347.jpg"] },
  { photos: ["/images/photography/IMG_4483.jpg"] },
  { photos: ["/images/photography/IMG_4905.jpg", "/images/photography/IMG_6156.jpg", "/images/photography/IMG_5132.jpg", "/images/photography/IMG_7063.jpg", "/images/photography/IMG_7261.jpg", "/images/photography/P1250823.jpg"] },
  { photos: ["/images/photography/IMG_6257.jpg", "/images/photography/IMG_4927.jpg", "/images/photography/IMG_6176.jpg", "/images/photography/IMG_5736.jpg", "/images/photography/IMG_7224.jpg", "/images/photography/P1250779.jpg"] },
  { photos: ["/images/photography/IMG_6375.jpg"] },
  { photos: ["/images/photography/IMG_7117.jpg"] },
  { photos: ["/images/photography/IMG_9902.jpg"] },
  { photos: ["/images/photography/MagazineCollage.png"] },
  { photos: ["/images/photography/P1230432.jpg"] },
  { photos: ["/images/photography/P2171886.jpg"] }
];

let currentTile = 0;
let currentPhoto = 0;

function renderGrid() {
  const grid = document.getElementById('photo-grid');
  tiles.forEach((tile, i) => {
    const div = document.createElement('div');
    div.className = 'photo-tile' + (tile.photos.length > 1 ? ' is-stack' : '');
    const img = document.createElement('img');
    img.src = tile.photos[0];
    img.alt = '';
    div.appendChild(img);
    if (tile.photos.length > 1) {
      const badge = document.createElement('span');
      badge.className = 'stack-badge';
      badge.textContent = '+' + (tile.photos.length - 1);
      div.appendChild(badge);
    }
    div.addEventListener('click', () => openModal(i));
    grid.appendChild(div);
  });
}

function openModal(tileIndex) {
  currentTile = tileIndex;
  currentPhoto = 0;
  updateModal();
  document.getElementById('photo-modal').classList.add('open');
}

function closeModal() {
  document.getElementById('photo-modal').classList.remove('open');
}

function navModal(direction) {
  const photos = tiles[currentTile].photos;
  currentPhoto = (currentPhoto + direction + photos.length) % photos.length;
  updateModal();
}

function updateModal() {
  const tile = tiles[currentTile];
  document.getElementById('modal-img').src = tile.photos[currentPhoto];
  const multi = tile.photos.length > 1;
  document.getElementById('modal-counter').textContent = multi ? (currentPhoto + 1) + ' / ' + tile.photos.length : '';
  document.querySelector('.modal-prev').style.display = multi ? 'block' : 'none';
  document.querySelector('.modal-next').style.display = multi ? 'block' : 'none';
}

document.addEventListener('keydown', (e) => {
  if (!document.getElementById('photo-modal').classList.contains('open')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') navModal(-1);
  if (e.key === 'ArrowRight') navModal(1);
});

renderGrid();
</script>
