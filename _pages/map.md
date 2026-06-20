---
layout: single
title: "Map"
permalink: /map/
author_profile: false
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

<p>Places I have visited and dived around the world. 🤿 = dive site &nbsp; 📍 = visited place</p>

<div id="dive-map"></div>

<style>
#dive-map { height: 85vh; width: 110%; margin-top: 16px; border-radius: 8px; position: relative; z-index: 1; }
.dive-pin { background: #0077b6; color: white; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; font-size: 16px; border: 2px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.4); }
.visit-pin { background: #e76f51; color: white; border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-size: 13px; border: 2px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.4); }
.popup-title { font-size: 1rem; font-weight: bold; margin: 0 0 4px 0; }
.popup-dates { color: #777; font-size: 0.82rem; margin: 2px 0 6px 0; }
.popup-description { font-size: 0.88rem; margin: 6px 0; }
.popup-species { font-size: 0.88rem; margin: 6px 0; }
.popup-species ul { margin: 4px 0 0 0; padding-left: 18px; }
.popup-species li { margin-bottom: 2px; }
.popup-photos { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px; }
.popup-photos img { width: 85px; height: 65px; object-fit: cover; border-radius: 4px; }
</style>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="/assets/js/dive-map.js"></script>
