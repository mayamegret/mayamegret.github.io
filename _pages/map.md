---
layout: single
title: "Map"
permalink: /map/
author_profile: false
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

<style>
body, #main, article.page, .page__inner-wrap, .page__content, .initial-content, .page__wrap {
  background-color: #FBF4D0 !important;
}
.sidebar { background-color: #1A4A5C !important; }
a { color: #1A4A5C !important; }
a:hover { color: #2e7a9a !important; }
h1, h2, h3, h4, h5, h6, body { color: #1A4A5C !important; }
.page__title { color: #1A4A5C !important; }
.page__title::after { background-color: #1A4A5C !important; }
h1::after, h2::after, h3::after { background-color: #1A4A5C !important; border-color: #1A4A5C !important; }
#map-counter { color: #1A4A5C !important; }
#main, article.page, .page__inner-wrap {
  max-width: 100% !important;
  padding-left: 1em !important;
  padding-right: 1em !important;
}
.leaflet-container { background: #FBF4D0 !important; }
#dive-map { height: 80vh; width: 100%; margin-top: 16px; border-radius: 8px; position: relative; z-index: 1; }
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
.popup-gallery-link { text-align: center; color: #1A4A5C; font-size: 0.85rem; margin-top: 6px; font-weight: 500; }
.leaflet-popup-content-wrapper { max-height: 400px; overflow: visible; }
.leaflet-popup-content { font-size: 0.82rem; margin: 8px 10px; max-height: 380px; overflow-y: auto; }
.popup-description { font-size: 0.82rem; margin: 4px 0; max-height: 100px; overflow-y: auto; }
.timeline-controls {
  background: rgba(255,255,255,0.4);
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: nowrap;
}
.timeline-year-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1A4A5C;
  white-space: nowrap;
  min-width: 90px;
}
.timeline-slider-wrap {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.timeline-slider-wrap input[type="range"] {
  width: 100%;
  accent-color: #1A4A5C;
  cursor: pointer;
}
.timeline-years-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.72rem;
  color: #1A4A5C;
  opacity: 0.6;
}
.animate-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: #1A4A5C;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  white-space: nowrap;
  flex-shrink: 0;
}
.animate-btn:hover { background: #2e7a9a; }
.show-all-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: rgba(26,74,92,0.15);
  color: #1A4A5C;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  white-space: nowrap;
  flex-shrink: 0;
}
.show-all-btn:hover { background: rgba(26,74,92,0.25); }
</style>

<p>A record of my travels and dives around the world! <i class="fas fa-anchor" style="color:#1a1a1a;"></i> = dive site &nbsp; <i class="fas fa-map-marker-alt" style="color:#1a1a1a;"></i> = visited place</p>

<div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 12px;">
  <div id="map-counter" style="font-size: 0.9rem; color: #1A4A5C;"></div>
  <div style="display: flex; gap: 8px;">
    <button onclick="filterMap('all')" id="btn-all"
      style="padding: 6px 14px; background: #1A4A5C; color: #fff; border: none; border-radius: 6px; cursor: pointer; font-size: 0.85rem;">
      All
    </button>
    <button onclick="filterMap('dive')" id="btn-dive"
      style="padding: 6px 14px; background: rgba(26,74,92,0.2); color: #1A4A5C; border: none; border-radius: 6px; cursor: pointer; font-size: 0.85rem;">
      <i class="fas fa-anchor"></i> Dives only
    </button>
    <button onclick="filterMap('visit')" id="btn-visit"
      style="padding: 6px 14px; background: rgba(26,74,92,0.2); color: #1A4A5C; border: none; border-radius: 6px; cursor: pointer; font-size: 0.85rem;">
      <i class="fas fa-map-marker-alt"></i> Visits only
    </button>
  </div>
</div>

<div class="timeline-controls">
  <div class="timeline-year-label">Up to: <strong id="year-display">2026</strong></div>
  <div class="timeline-slider-wrap">
    <input type="range" id="year-slider" min="2002" max="2026" value="2026" step="1" oninput="onSliderChange(this.value)">
    <div class="timeline-years-row">
      <span>2002</span>
      <span>2008</span>
      <span>2014</span>
      <span>2020</span>
      <span>2026</span>
    </div>
  </div>
  <button class="animate-btn" id="animate-btn" onclick="animateJourney()">
    <i class="fas fa-play"></i> Animate journey
  </button>
</div>

<div id="dive-map"></div>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="/assets/js/dive-map.js"></script>
