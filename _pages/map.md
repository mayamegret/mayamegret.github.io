---
layout: single
title: "Map"
permalink: /map/
author_profile: false
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

<p>A record of my travels and dives around the world! <i class="fas fa-anchor" style="color:#1a1a1a;"></i> = dive site &nbsp; <i class="fas fa-map-marker-alt" style="color:#1a1a1a;"></i> = visited place</p>

<div id="dive-map"></div>

<style>
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
  .popup-species li { margin-bottom:
