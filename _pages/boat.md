---
layout: single
title: "To the Boat!"
permalink: /boat/
author_profile: false
---

<div markdown="0">

<div class="boat-section">
  <div class="boat-wrap">
    <img class="boat-body" src="/images/boat/BoatDesign2.png" alt="Illustration of a boat deck with dive gear, a kraken, and a map">
    <a class="boat-hotspot boat-hotspot-gear" href="/dive-log/" aria-label="Go to Dive Log"></a>
    <a class="boat-hotspot boat-hotspot-kraken" href="/species/" aria-label="Go to Species Log"></a>
    <a class="boat-hotspot boat-hotspot-map" href="/map/" aria-label="Go to Map"></a>
  </div>
</div>

<style>
html {
  background-color: #1a3258;
}
.boat-section {
  position: relative;
}
.boat-wrap {
  position: relative;
  width: 90vw;
  max-width: 1400px;
  margin: 0 auto 2rem;
  aspect-ratio: 1920 / 1080;
}
.boat-body {
  width: 100%;
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

#main, article.page, .page__inner-wrap, .page__content, .page__inner-wrap--layout-single {
  max-width: 100% !important;
  width: 100% !important;
  padding-left: 1em !important;
  padding-right: 1em !important;
}
h1.page__title {
  display: none;
}
</style>

</div>
