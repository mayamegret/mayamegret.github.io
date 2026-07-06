---
layout: single
title: "Map"
permalink: /map/
author_profile: false
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

<p>A record of my travels and dives around the world! <i class="fas fa-anchor" style="color:#1a1a1a;"></i> = dive site &nbsp; <i class="fas fa-map-marker-alt" style="color:#1a1a1a;"></i> = visited place</p>

<div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 12px;">
  <div id="map-counter" style="font-size: 0.9rem; color: #2c4a3e;"></div>
  <div style="display: flex; gap: 8px;">
    <button onclick="filterMap('all')" id="btn-all"
      style="padding: 6px 14px; background: #2c4a3e; color: #fff; border: none; border-radius: 6px; cursor: pointer; font-size: 0.85rem;">
      All
    </button>
    <button onclick="filterMap('dive')" id="btn-dive"
      style="padding: 6px 14px; background: rgba(44,74,62,0.2); color: #2c4a3e; border: none; border-radius: 6px; cursor: pointer; font-size: 0.85rem;">
      <i class="fas fa-anchor"></i> Dives only
    </button>
    <button onclick="filterMap('visit')" id="btn-visit"
      style="padding: 6px 14px; background: rgba(44,74,62,0.2); color: #2c4a3e; border: none; border-radius: 6px; cursor: pointer; font-size: 0.85rem;">
      <i class="fas fa-map-marker-alt"></i> Visits only
    </button>
  </div>
</div>

<div id="dive-map"></div>

<style>
body, #main, article.page, .page__inner-wrap, .page__content, .initial-content, .page__wrap {
  background-color: #F0DC9B !important;
}
.sidebar { background-color: #1A4A5C !important; }
a { color: #1A4A5C !important; }
a:hover { color: #2e7a9a !important; }
h1, h2, h3, h4, h5, h6, body { color: #1A4A5C !important; }
.page__title { color: #1A4A5C !important; }
.page__title::after { background-color: #1A4A5C !important; }
h1::after, h2::after, h3::after { background-color: #1A4A5C !important; border-color: #1A4A5C !important; }
#map-counter { color: #1A4A5C !important; }
</style>
  #main, article.page, .page__inner-wrap {
    max-width: 100% !important;
    padding-left: 1em !important;
    padding-right: 1em !important;
  }
  .leaflet-container { background: #ffc48a !important; }
  #dive-map { height: 85vh; width: 100%; margin-top: 16px; margin-right: 1em; border-radius: 8px; position: relative; z-index: 1; }
  .popup-title { font-size: 1rem; font-weight: bold; margin: 0 0 4px 0; }
  .popup-dates { color: #777; font-size: 0.82rem; margin: 2px 0 6px 0; }
  .popup-description { font-size: 0.88rem; margin: 6px 0; }
  .popup-species { font-size: 0.88rem; margin: 6px 0; }
  .popup-species ul { margin: 4px 0 0 0; padding-left: 18px; }
  .popup-species li { margin-bottom: 2px; }
  .map-icon { display: flex; align-items: center; justify-content: center; }
  .popup-stack-link { text-decoration: none; display: block; margin-top: 8px; }
  .popup-stack { position: relative; display: block; overflow: visible; }
  .popup-stack-img { width: 100%; border-radius: 6px; display: block; position: relative; z-index: 2; }
  .popup-stack.is-stack::before, .popup-stack.is-stack::after { content: ""; position: absolute; inset: 0; background: #fff; border: 1px solid #ddd; border-radius: 6px; z-index: 1; }
  .popup-stack.is-stack::before { transform: rotate(-3deg) translate(-3px, 3px); }
  .popup-stack.is-stack::after { transform: rotate(3deg) translate(3px, -3px); }
  .popup-stack-badge { position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.7); color: #fff; font-size: 0.75rem; padding: 2px 8px; border-radius: 12px; z-index: 3; }
  .popup-gallery-link { text-align: center; color: #0077b6; font-size: 0.85rem; margin-top: 6px; font-weight: 500; }
</style>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="/assets/js/dive-map.js"></script>
