---
layout: single
title: "Cook Book"
permalink: /cookbook/
author_profile: false
---

<style>
body, #main, article.page, .page__inner-wrap, .page__content, .initial-content, .page__wrap {
  background-color: #EFEAA3 !important;
}
.sidebar { background-color: #711A54 !important; }
a { color: #711A54 !important; }
a:hover { color: #4a0e37 !important; }
h1, h2, h3, h4, h5, h6, body { color: #711A54 !important; }
.page__title { color: #711A54 !important; }
.page__title::after { background-color: #711A54 !important; }
h1::after, h2::after, h3::after { background-color: #711A54 !important; border-color: #711A54 !important; }
.recipe-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 24px;
}
.recipe-card {
  background: rgba(255,255,255,0.4);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none !important;
  display: block;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  color: #711A54 !important;
}
.recipe-card:hover {
  transform: scale(1.03);
  box-shadow: 0 4px 16px rgba(113,26,84,0.15);
}
.recipe-card-img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  display: block;
}
.recipe-card-placeholder {
  width: 100%;
  aspect-ratio: 4/3;
  background: rgba(113,26,84,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #711A54;
  font-size: 3rem;
}
.recipe-card-info {
  padding: 14px 16px 16px 16px;
}
.recipe-card-title {
  font-size: 1rem;
  font-weight: bold;
  color: #711A54;
  margin: 0 0 4px 0;
  line-height: 1.3;
}
.recipe-card-desc {
  font-size: 0.82rem;
  color: #711A54;
  opacity: 0.75;
  line-height: 1.5;
  margin: 0;
}
@media (max-width: 900px) {
  .recipe-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .recipe-grid { grid-template-columns: 1fr; }
}
</style>

I have always loved cooking and want to share some of my favorite recipes. Most of these are family recipes I have grown up cooking in the kitchen with my dad but some are new recipes I enjoy and want to share as well!

<div class="recipe-grid">

  <a href="/cookbook/white-wine-pasta/" class="recipe-card">
    <div class="recipe-card-placeholder">
      <i class="fas fa-utensils"></i>
    </div>
    <div class="recipe-card-info">
      <div class="recipe-card-title">White Wine Pasta</div>
      <p class="recipe-card-desc">A creamy, savory pasta with caramelized onions, white wine, and whatever veggies you have on hand.</p>
    </div>
  </a>

</div>
