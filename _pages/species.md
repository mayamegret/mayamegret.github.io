---
layout: single
title: "Species Log"
permalink: /species/
author_profile: false
---

A living log of every species I've observed in the wild, automatically synced from my <a href="https://www.inaturalist.org/people/mayamegret" target="_blank">iNaturalist profile</a>. Updated every time I log a new observation!

<div id="species-stats" style="margin-bottom: 1.5rem; color: #2c4a3e; font-size: 0.95rem;"></div>
<div id="species-loading" style="text-align:center; padding: 40px; font-size: 1.1rem; color: #2c4a3e;">Loading species...</div>
<div id="species-error" style="display:none; text-align:center; padding: 40px; color: #c0392b;"></div>
<div id="species-container"></div>

<style>
.species-group { margin-bottom: 2.5rem; }
.species-group-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #2c4a3e;
  border-left: 4px solid #ffa44a;
  padding-left: 12px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
}
.species-group-title i { color: #ffa44a; }
.species-group-count {
  font-size: 0.85rem;
  font-weight: normal;
  color: #888;
}
.species-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}
.species-card {
  background: rgba(255,255,255,0.35);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none !important;
  display: block;
  transition: transform 0.2s ease;
}
.species-card:hover { transform: scale(1.03); }
.species-card-img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  display: block;
}
.species-card-placeholder {
  width: 100%;
  aspect-ratio: 1;
  background: rgba(255,164,74,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffa44a;
  font-size: 2rem;
}
.species-card-info {
  padding: 8px 10px 10px 10px;
}
.species-card-common {
  font-size: 0.85rem;
  font-weight: bold;
  color: #2c4a3e;
  margin: 0 0 2px 0;
  line-height: 1.3;
}
.species-card-scientific {
  font-size: 0.78rem;
  font-style: italic;
  color: #666;
  margin: 0 0 2px 0;
  line-height: 1.3;
}
.species-card-count {
  font-size: 0.72rem;
  color: #999;
}
@media (max-width: 900px) {
  .species-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 600px) {
  .species-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>

<script>
const INAT_USER = 'mayamegret';

const ANCESTOR_MAP = [
  { key: 'Chondrichthyes',  id: 47273 },
  { key: 'Echinodermata',   id: 47549 },
  { key: 'Cnidaria',        id: 47534 },
  { key: 'Crustacea',       id: 47187 },
  { key: 'Annelida',        id: 47491 },
  { key: 'Platyhelminthes', id: 47579 },
];

const GROUP_CONFIG = [
  { key: 'Mollusca',        label: 'Molluscs',           icon: 'fas fa-water' },
  { key: 'Actinopterygii',  label: 'Bony Fish',          icon: 'fas fa-fish' },
  { key: 'Chondrichthyes',  label: 'Sharks & Rays',      icon: 'fas fa-bolt' },
  { key: 'Echinodermata',   label: 'Echinoderms',        icon: 'fas fa-star' },
  { key: 'Cnidaria',        label: 'Corals & Jellyfish', icon: 'fas fa-sun' },
  { key: 'Crustacea',       label: 'Crustaceans',        icon: 'fas fa-shield-alt' },
  { key: 'Annelida',        label: 'Worms',              icon: 'fas fa-minus' },
  { key: 'Platyhelminthes', label: 'Flatworms',          icon: 'fas fa-align-justify' },
  { key: 'Reptilia',        label: 'Reptiles',           icon: 'fas fa-dragon' },
  { key: 'Mammalia',        label: 'Mammals',            icon: 'fas fa-paw' },
  { key: 'Aves',            label: 'Birds',              icon: 'fas fa-feather' },
  { key: 'Amphibia',        label: 'Amphibians',         icon: 'fas fa-frog' },
  { key: 'Insecta',         label: 'Insects',            icon: 'fas fa-bug' },
  { key: 'Arachnida',       label: 'Arachnids',          icon: 'fas fa-spider' },
  { key: 'Plantae',         label: 'Plants',             icon: 'fas fa-leaf' },
  { key: 'Fungi',           label: 'Fungi',              icon: 'fas fa-seedling' },
  { key: 'Chromista',       label: 'Chromista',          icon: 'fas fa-microscope' },
  { key: 'Protozoa',        label: 'Protozoa',           icon: 'fas fa-microscope' },
  { key: 'Animalia',        label: 'Other Animals',      icon: 'fas fa-globe' },
  { key: 'unknown',         label: 'Other',              icon: 'fas fa-question-circle' },
];

function getTaxonGroup(taxon) {
  const ancestorIds = taxon.ancestor_ids || [];
  for (const entry of ANCESTOR_MAP) {
    if (ancestorIds.includes(entry.id)) return entry.key;
  }
  return taxon.iconic_taxon_name || 'unknown';
}

async function fetchAllObservations() {
  const results = [];
  for (let page = 1; page <= 10; page++) {
    const res = await fetch(
      `https://api.inaturalist.org/v1/observations?user_login=${INAT_USER}&per_page=200&page=${page}&order=desc&order_by=created_at`
    );
    const data = await res.json();
    results.push(...data.results);
    if (results.length >= data.total_results || data.results.length < 200) break;
  }
  return results;
}

function deduplicateBySpecies(observations) {
  const seen = {};
  observations.forEach(obs => {
    if (!obs.taxon) return;
    const id = obs.taxon.id;
    if (!seen[id]) {
      seen[id] = {
        taxon: obs.taxon,
        photo: null,
        count: 0,
        mostRecent: obs.observed_on || obs.created_at
      };
    }
    seen[id].count++;
    if (!seen[id].photo && obs.photos && obs.photos.length > 0) {
      seen[id].photo = obs.photos[0].url.replace('square', 'medium');
    }
  });
  return Object.values(seen);
}

function groupByTaxon(species) {
  const groups = {};
  species.forEach(s => {
    const key = getTaxonGroup(s.taxon);
    if (!groups[key]) groups[key] = [];
    groups[key].push(s);
  });
  Object.keys(groups).forEach(key => {
    groups[key].sort((a, b) => new Date(b.mostRecent) - new Date(a.mostRecent));
  });
  return groups;
}

function renderSpecies(species) {
  const groups = groupByTaxon(species);
  const container = document.getElementById('species-container');
  container.innerHTML = '';

  const totalObs = species.reduce((sum, s) => sum + s.count, 0);
  document.getElementById('species-stats').innerHTML =
    `<strong>${species.length}</strong> species &nbsp;·&nbsp; <strong>${totalObs}</strong> observations`;

  GROUP_CONFIG.forEach(group => {
    const items = groups[group.key];
    if (!items || items.length === 0) return;

    const section = document.createElement('div');
    section.className = 'species-group';

    const title = document.createElement('div');
    title.className = 'species-group-title';
    title.innerHTML = `<i class="${group.icon}"></i> ${group.label} <span class="species-group-count">(${items.length})</span>`;
    section.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'species-grid';

    items.forEach(s => {
      const taxon = s.taxon;
      const commonName = taxon.preferred_common_name || taxon.name;
      const sciName = taxon.name;
      const inatUrl = `https://www.inaturalist.org/taxa/${taxon.id}`;

      const card = document.createElement('a');
      card.className = 'species-card';
      card.href = inatUrl;
      card.target = '_blank';
      card.rel = 'noopener noreferrer';

      if (s.photo) {
        const img = document.createElement('img');
        img.className = 'species-card-img';
        img.src = s.photo;
        img.alt = commonName;
        img.loading = 'lazy';
        card.appendChild(img);
      } else {
        const placeholder = document.createElement('div');
        placeholder.className = 'species-card-placeholder';
        placeholder.innerHTML = '<i class="fas fa-camera"></i>';
        card.appendChild(placeholder);
      }

      const info = document.createElement('div');
      info.className = 'species-card-info';
      info.innerHTML = `
        <div class="species-card-common">${commonName}</div>
        <div class="species-card-scientific">${sciName}</div>
        <div class="species-card-count">${s.count} observation${s.count !== 1 ? 's' : ''}</div>
      `;
      card.appendChild(info);
      grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
  });

  document.getElementById('species-loading').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
  fetchAllObservations()
    .then(deduplicateBySpecies)
    .then(renderSpecies)
    .catch(err => {
      document.getElementById('species-loading').style.display = 'none';
      const errEl = document.getElementById('species-error');
      errEl.style.display = 'block';
      errEl.textContent = 'Could not load species from iNaturalist. Please try again later.';
      console.error(err);
    });
});
</script>
