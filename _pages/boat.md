---
layout: single
title: "To the Boat!"
permalink: /boat/
author_profile: false
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=IBM+Plex+Mono:wght@500;600&display=swap" rel="stylesheet">

<div markdown="0">

<div class="boat-section">
  <p class="boat-instruction">Click around to explore my dive log, species log, and map!</p>
  <div class="boat-wrap">
    <img class="boat-body" src="/images/boat/BoatDesign2.png" alt="Illustration of a boat deck with dive gear, a kraken, and a map">
    <a class="boat-hotspot boat-hotspot-gear" href="/dive-log/" aria-label="Go to Dive Log"></a>
    <a class="boat-hotspot boat-hotspot-kraken" href="/species/" aria-label="Go to Species Log"></a>
    <a class="boat-hotspot boat-hotspot-map" href="/map/" aria-label="Go to Map"></a>
  </div>

  <div class="boat-stats">
    <a href="/dive-log/" class="boat-stat-card">
      <div class="boat-stat-number" id="boat-stat-dives">—</div>
      <div class="boat-stat-label">Dives Logged</div>
    </a>
    <a href="/species/" class="boat-stat-card">
      <div class="boat-stat-number" id="boat-stat-species">—</div>
      <div class="boat-stat-label">Species Spotted</div>
    </a>
    <a href="/map/" class="boat-stat-card">
      <div class="boat-stat-number" id="boat-stat-countries">—</div>
      <div class="boat-stat-label">Countries</div>
    </a>
    <a href="/map/" class="boat-stat-card">
      <div class="boat-stat-number" id="boat-stat-oceans">—</div>
      <div class="boat-stat-label">Oceans</div>
    </a>
    <a href="/map/" class="boat-stat-card">
      <div class="boat-stat-number" id="boat-stat-sites">—</div>
      <div class="boat-stat-label">Dive Sites</div>
    </a>
  </div>
</div>

<style>
html {
  background-color: #1a3258;
}
body, #main, article.page, .page__inner-wrap, .page__content, .initial-content, .page__wrap {
  background-color: #1a3258 !important;
}
.boat-section {
  position: relative;
  margin: 0;
  padding: 0;
}
.boat-wrap {
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  aspect-ratio: 1920 / 1080;
  display: block;
}
.boat-body {
  width: 100%;
  height: 100%;
  display: block;
}
.boat-hotspot {
  position: absolute;
  display: block;
  border: none;
  background: rgba(255,255,255,0.001);
  cursor: pointer;
  z-index: 30;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  box-shadow: none;
  -webkit-tap-highlight-color: transparent;
}
.boat-hotspot:focus,
.boat-hotspot:focus-visible,
.boat-hotspot:active {
  outline: none;
  box-shadow: none;
}
@media (hover: hover) {
  .boat-hotspot:hover {
    background: rgba(255, 164, 74, 0.25);
    box-shadow: 0 0 25px 8px rgba(255, 164, 74, 0.35);
  }
}
.boat-hotspot-gear   { left: 6.77%;  top: 35.19%; width: 20.31%; height: 64.81%; }
.boat-hotspot-kraken { left: 27.08%; top: 12.96%; width: 39.06%; height: 70.37%; }
.boat-hotspot-map    { left: 66.15%; top: 55.56%; width: 32.81%; height: 39.81%; }

.boat-instruction {
  font-family: 'Caveat', cursive;
  font-weight: 600;
  font-size: 1.8rem;
  color: #ffc48a;
  text-align: center;
  margin: 2rem auto 1.5rem;
  padding: 0 1rem;
}

.boat-stats {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin: 2rem auto;
  padding: 0 1rem 2rem;
}
.boat-stat-card {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,196,138,0.35);
  border-radius: 10px;
  padding: 18px 28px;
  text-align: center;
  text-decoration: none !important;
  min-width: 120px;
  transition: background 0.2s ease, transform 0.2s ease;
}
@media (hover: hover) {
  .boat-stat-card:hover {
    background: rgba(255,196,138,0.15);
    transform: translateY(-2px);
  }
}
.boat-stat-number {
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-weight: 600;
  font-size: 2rem;
  color: #ffc48a;
  line-height: 1;
}
.boat-stat-label {
  font-size: 0.8rem;
  color: #ffc48a;
  margin-top: 4px;
}

@media (max-width: 700px) {
  .boat-instruction {
    font-size: 1.3rem;
    margin: 1.5rem auto 1rem;
  }
  .boat-stat-card {
    padding: 12px 20px;
    min-width: 100px;
  }
  .boat-stat-number {
    font-size: 1.6rem;
  }
 .boat-stat-label {
    font-size: 0.75rem;
  }
}

#main, article.page, .page__inner-wrap, .page__content, .page__inner-wrap--layout-single {
  max-width: 100% !important;
  width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}
h1.page__title {
  display: none;
}
</style>

<script src="/assets/js/travel-data.js"></script>
<script>
function parseCSV(text) {
  const lines = text.trim().split('\n');
  return lines.slice(1).filter(line => line.trim() !== '');
}

fetch('/assets/data/divelog.csv')
  .then(r => r.text())
  .then(text => {
    const rows = parseCSV(text);
    document.getElementById('boat-stat-dives').textContent = rows.length + 49;
  })
  .catch(err => {
    document.getElementById('boat-stat-dives').textContent = '—';
    console.error(err);
  });

async function fetchAllObservations() {
  const results = [];
  for (let page = 1; page <= 10; page++) {
    const res = await fetch(
      `https://api.inaturalist.org/v1/observations?user_login=mayamegret&per_page=200&page=${page}&order=desc&order_by=created_at`
    );
    const data = await res.json();
    results.push(...data.results);
    if (results.length >= data.total_results || data.results.length < 200) break;
  }
  return results;
}

fetchAllObservations()
  .then(observations => {
    const seen = new Set();
    observations.forEach(obs => {
      if (obs.taxon) seen.add(obs.taxon.id);
    });
    document.getElementById('boat-stat-species').textContent = seen.size;
  })
  .catch(err => {
    document.getElementById('boat-stat-species').textContent = '—';
    console.error(err);
  });

// Countries / oceans / dive sites all come from the same shared
// travelLocations data that powers the map, so these numbers always
// match what's shown on /map/.
if (window.travelLocations) {
  const locations = window.travelLocations;
  const countries = new Set(locations.map(l => l.country));
  const oceans = new Set(locations.map(l => l.ocean).filter(Boolean));
  const diveSites = locations.filter(l => l.type === 'dive').length;
  document.getElementById('boat-stat-countries').textContent = countries.size;
  document.getElementById('boat-stat-oceans').textContent = oceans.size;
  document.getElementById('boat-stat-sites').textContent = diveSites;
} else {
  console.warn('travelLocations not found — check that travel-data.js loaded');
}
</script>

</div>
