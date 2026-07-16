---
title: "Welcome to my corner of the world!"
permalink: /
header:
  image: photography/IMG_99022.jpeg
author_profile: true
---

<style>
.about-flex {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  flex-wrap: nowrap;
  width: 100%;
}
.about-text {
  flex: 1 1 0%;
  min-width: 0;
}
.about-text p {
  margin: 0 0 1rem;
}
.about-images {
  flex: 0 0 32%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.about-images img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  aspect-ratio: 1/1;
}
@media (max-width: 700px) {
  .about-flex {
    flex-wrap: wrap;
  }
  .about-images {
    flex: 1 1 100%;
    max-width: 100%;
    flex-direction: row;
    gap: 10px;
  }
  .about-images img {
    flex: 1 1 0%;
    min-width: 0;
  }
}
</style>

<div class="about-flex">
  <div class="about-text">
    <p>I am a marine biologist completing my MSc at the Universidade do Algarve, where my thesis research explored the impact of SCUBA-based sampling methodologies on nudibranch diversity and abundance estimates in Mozambique. I earned my BS in Marine Biology from UC San Diego's Scripps Institution of Oceanography, where field work first hooked me on the world of diving and research. I'm also a scientific diver and divemaster, which keeps me in the water most of the time.</p>
    <p>Outside of research, I love traveling and I am an avid photographer, so here is where I will be sharing a lot of my underwater and travel photography!</p>
  </div>
  <div class="about-images">
    <img src="/images/photography/MomTessMaya.JPG">
    <img src="/images/photography/DadTessMaya.JPG">
  </div>
</div>
