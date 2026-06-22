---
layout: single
title: "Photography"
permalink: /photography/
author_profile: false
---

A selection of photos from my travels and dives!

<div id="photo-grid" class="photo-grid"></div>

<div id="photo-modal" class="photo-modal">
  <a id="modal-map-link" class="modal-map-link" style="display:none;">🗺️ See on map →</a>
  <button class="modal-close" onclick="closeModal()" aria-label="Close">&times;</button>
  <button class="modal-nav modal-prev" onclick="navModal(-1)" aria-label="Previous photo">&#8249;</button>
  <div id="modal-img"></div>
  <div id="modal-caption" class="modal-caption"></div>
  <button class="modal-nav modal-next" onclick="navModal(1)" aria-label="Next photo">&#8250;</button>
  <div id="modal-counter" class="modal-counter"></div>
</div>

<style>
.photo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 24px;
}
.photo-tile {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 6px;
  align-self: start;
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
.photo-tile.is-stack { box-shadow: 5px -5px 0 1px #d0d0d0, 10px -10px 0 1px #bbb; }
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
}
.photo-modal.open { display: flex; }
#modal-img {
  width: 80vw;
  height: 70vh;
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
}
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
.modal-map-link { position: fixed; bottom: 90px; left: 0; right: 0; text-align: center; color: #fff; font-size: 0.9rem; text-decoration: none; z-index: 10001; }
.modal-map-link:hover { text-decoration: underline; }
</style>

<script src="/assets/js/photography-gallery.js"></script>
