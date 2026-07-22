---
title: "Welcome to my corner of the world!"
permalink: /
header:
  image: photography/IMG_99022.jpeg
author_profile: true
---
<style>
  .about-links {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  padding-right: 240px;
}
.about-link-btn {
  padding: 7px 16px;
  border: 2px solid ##3f6b56;
  border-radius: 0;
  background: ##3f6b56;
  color: #fff;
  font-size: 0.9rem;
  text-decoration: none !important;
  transition: all 0.2s;
}
.about-link-btn:hover {
  background: #ffa44a;
  border-color: #ffa44a;
  color: #fff !important;
}
@media (max-width: 900px) {
  .about-links {
    padding-right: 0;
  }
}
article.page {
  position: relative;
}
.about-text {
  padding-right: 240px;
  text-align: justify;
}
.about-text p {
  margin: 0 0 1rem;
}
.about-images {
  position: absolute;
  top: 0;
  right: 0;
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.about-images img {
  width: 100%;
  border-radius: 0px;
  object-fit: cover;
  aspect-ratio: 1/1;
}
@media (max-width: 900px) {
  .about-text {
    padding-right: 0;
  }
  .about-images {
    position: static;
    width: 100%;
    flex-direction: row;
    margin-top: 1rem;
  }
  .about-images img {
    flex: 1 1 0%;
    min-width: 0;
  }
}
</style>
<div class="about-text">
  <p>I am a marine biologist completing my MSc at the Universidade do Algarve, where my thesis research explored the impact of SCUBA-based sampling methodologies on nudibranch diversity and abundance estimates in Mozambique. I earned my BS in Marine Biology from UC San Diego's Scripps Institution of Oceanography, where field work first hooked me on the world of diving and research. I'm also a scientific diver and divemaster, which keeps me in the water most of the time.</p>
  <p>Outside of research, I love traveling and I am an avid photographer, so here is where I will be sharing a lot of my underwater and travel photography! </p>
  <div class="about-links">
    <a href="/photography/" class="about-link-btn">Browse my photos →</a>
    <a href="/dive-log/" class="about-link-btn">View my dives →</a>
    <a href="/map/" class="about-link-btn">See the map →</a>
    <a href="/species/" class="about-link-btn">Browse species →</a>
    <a href="/cv/" class="about-link-btn">View my CV →</a>
  </div>
</div>
<div class="about-images">
  <img src="/images/photography/MomTessMaya.JPG">
  <img src="/images/photography/DadTessMaya.JPG">
</div>

<script>
document.querySelectorAll('#main, article.page, .page__inner-wrap, .page__content').forEach(el => {
  el.style.setProperty('max-width', '100%', 'important');
  el.style.setProperty('width', '100%', 'important');
  el.style.setProperty('float', 'none', 'important');
  el.style.setProperty('padding-left', '0', 'important');
  el.style.setProperty('padding-right', '0', 'important');
});
const articlePage = document.querySelector('article.page');
if (articlePage) {
  articlePage.style.setProperty('padding-left', '1.5em', 'important');
  articlePage.style.setProperty('padding-right', '1.5em', 'important');

}
</script>
