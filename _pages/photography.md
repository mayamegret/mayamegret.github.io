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
  <div id="modal-caption" class="modal-caption"></div>
</div>

<style>
.photo-tile.size-large { grid-column: span 2; grid-row: span 2; }
.photo-tile.size-wide { grid-column: span 2; }
.photo-tile.size-tall { grid-row: span 2; }
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
.photo-tile.size-small { width: 60%; height: 60%; align-self: center; justify-self: center; }
.modal-caption { position: absolute; bottom: 56px; left: 0; right: 0; text-align: center; color: #fff; font-size: 0.95rem; padding: 0 20px; }
</style>

<script src="/assets/js/photography-gallery.js"></script>

