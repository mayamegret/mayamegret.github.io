---
layout: single
title: "Species Log"
permalink: /species/
author_profile: false
---

A log of every species I've observed in the wild, automatically synced from my <a href="https://www.inaturalist.org/people/mayamegret" target="_blank" style="text-decoration: underline;">iNaturalist profile</a>, updated every time I log a new observation!

<div id="species-stats" style="margin-bottom: 1rem; font-size: 0.95rem;"></div>

<div style="display: flex; gap: 10px; margin-bottom: 1.5rem; flex-wrap: wrap; align-items: center;">
  <input type="text" id="species-search" placeholder="Search by common or scientific name..."
    style="flex: 1; min-width: 200px; padding: 8px 12px; border: 2px solid #C05C27; border-radius: 6px; background: rgba(255,255,255,0.5); color: #C05C27; font-size: 0.9rem; outline: none;">
  <button id="faves-toggle" onclick="toggleFavesOnly()"
    style="padding: 8px 16px; background: #C05C27; color: #fff; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9rem; display: flex; align-items: center; gap: 6px; white-space: nowrap;">
    <i class="fas fa-heart"></i> Favorites only
  </button>
  <button onclick="showRandomFavorite()"
    style="padding: 8px 16px; background: #7a2a00; color: #fff; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9rem; display: flex; align-items: center; gap: 6px; white-space: nowrap;">
    <i class="fas fa-dice"></i> Random favorite
  </button>
</div>

<div id="species-loading" style="text-align:center; padding: 40px; font-size: 1.1rem; color: #C05C27;">Loading species...</div>
<div id="species-error" style="display:none; text-align:center; padding: 40px; color: #c0392b;"></div>
<div id="species-container"></div>

<div id="fave-modal" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.7); z-index:9999; align-items:center; justify-content:center; padding:20px; box-sizing:border-box;">
  <div style="background:#F2DCF0; border-radius:12px; max-width:620px; width:100%; max-height:85vh; overflow-y:auto; padding:24px; position:relative; box-shadow:0 8px 32px rgba(0,0,0,0.3);">
    <button onclick="closeFaveModal()" style="position:absolute; top:14px; right:18px; background:none; border:none; font-size:1.8rem; cursor:pointer; color:#C05C27; line-height:1;">&times;</button>
    <div id="fave-modal-content"></div>
  </div>
</div>

<style>
body, #main, article.page, .page__inner-wrap, .page__content, .initial-content, .page__wrap {
  background-color: #F2DCF0 !important;
}
.sidebar { background-color: #C05C27 !important; }
a { color: #C05C27 !important; }
a:hover { color: #8a3e18 !important; }
h1, h2, h3, h4, h5, h6 { color: #C05C27 !important; }
body { color: #C05C27 !important; }
.page__title { color: #C05C27 !important; }
.page__title::after { background-color: #C05C27 !important; }
h1::after, h2::after, h3::after { background-color: #C05C27 !important; border-color: #C05C27 !important; }
#species-stats { color: #C05C27 !important; }
#species-loading { color: #C05C27 !important; }
#fave-modal { display: none; }
#fave-modal.open { display: flex !important; }
.species-group { margin-bottom: 2.5rem; }
.species-group-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #C05C27 !important;
  border-left: 4px solid #C05C27 !important;
  padding-left: 12px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
}
.species-group-title i { color: #C05C27 !important; }
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
  position: relative;
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
  background: rgba(192,92,39,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #C05C27;
  font-size: 2rem;
}
.species-card-info {
  padding: 8px 10px 10px 10px;
}
.species-card-common {
  font-size: 0.85rem;
  font-weight: bold;
  color: #C05C27;
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
.species-fave-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0,0,0,0.65);
  color: #e8546b;
  font-size: 0.9rem;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
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

const FAVORITES = [
  "Pteraeolidia semperi",
  "Hexabranchus lacer",
  "Trapezia rufopunctata",
  "Tritoniopsis elegans",
  "Glaucilla marginata",
  "Hypselodoris pulchella",
  "Hypselodoris yarae",
  "Hexabranchus sanguineus",
  "Gymnothorax favagineus",
  "Bitis arietans",
  "Pyxicephalus edulis",
  "Hypselodoris maculosa",
  "Hermodice carunculata",
  "Dryophytes cinereus",
  "Panthera pardus pardus",
  "Panthera leo melanochaita",
  "Crocuta crocuta",
  "Ceratotherium simum simum",
  "Tockus leucomelas",
  "Giraffa giraffa giraffa",
  "Loxodonta africana",
  "Taenianotus triacanthus",
  "Gymnothorax griseus",
  "Heterocentrotus mamillatus",
  "Octopus cyanea",
  "Hippocampus camelopardalis",
  "Nembrotha aurea",
  "Nembrotha purpureolineata",
  "Goniobranchus albopunctatus",
  "Sakuraeolis arcana",
  "Ocypode ceratophthalmus",
  "Pinnoctopus alpheus",
  "Hemiscyllium ocellatum",
  "Glaucostegus typus",
  "Notamacropus parryi",
  "Drosera spatulata"
];

const PERSONAL_NOTES = {
  "Dryophytes cinereus": "I love frogs in general but I especially love green tree frogs because my family and I have spent many afternoons at Huntley Meadows Park photographing them resting on the big elephant ear leafs. Also in the summer of 2022, my dad and I built a pond and green tree frogs were the first frogs that lived in our pond.",
  "Hemiscyllium ocellatum": "I saw several epaulette sharks in Australia and find the way they use their pectoral fins to walk along the reef floor absolutely fascinating.",
  "Heterocentrotus mamillatus": "I love the thickness of the spikes of these guys, and their colors are just so bright and beautiful.",
  "Crocuta crocuta": "I love the spotted hyena, and my first encounter with one was with my mom on safari in June 2025, where we witnessed a hyena and leopard fighting over an impala that had been recently hunted and killed by the leopard. The hyena won, stealing the carcass and leaving the leopard with only the stomach and intestines!",
  "Giraffa giraffa giraffa": "Giraffes are obviously so cool and unique but when you see them in real life up close in the wild, it really is incredible. I really love the way they drink water, keeping their legs practically perfectly straight and spread out, and how the water flicks from their tongue.",
  "Sakuraeolis arcana": "This species was super integral to my thesis research and holds a special place in my heart! I love the orange coloring (my favorite color of course) and the beautiful cerata that flow in the surge",
  "Taenianotus triacanthus": "The leaf scorpionfish is just super fascinating to spot and observe!",
  "Hippocampus camelopardalis": "The first seahorse I ever saw was in Mozambique on a seahorse survey and I fell in love with these guys then and there!",
  "Drosera spatulata": "A carnivorous plant I spotted several times during my study abroad program in Australia. The red is so vibrant and I think they rock!",
  "Gymnothorax favagineus": "I love spotting moray eels in all their shapes and colors and forms, but the Laced moray is one of my favorites because of its pattern.",
  "Tritoniopsis elegans": "I spotted two Tritoniopsis elegans in the rockpool of Zavora, and I screamed so loud I was so excited. The cerata are unlike anything I had seen before, I find them so mesmerizing and unique and beautiful.",
  "Hexabranchus sanguineus": "Hexabranchus are the biggest nudis and wow they are so cool. My research included data collection on nudibranchs from 3mm to 300mm, Spanish dancers sitting at the highest end of that, so much more massive than any other species I saw.",
  "Pteraeolidia semperi": "I am lucky enough to spot a blue dragon on most of my dives to the Sea Tiger shipwreck. The blue dragons are so vivid blue and purple and their curly cerata are just so stunning.",
  "Glaucilla marginata": "Also commonly known as the blue dragon, I love these because of how unique they are! Their shape is like no other nudi I have ever seen, and spotting them in Mozambique led to hours crouching on the beach taking photographs."
};

const ANCESTOR_MAP = [
  { key: 'Chondrichthyes',  id: 47273  },
  { key: 'Echinodermata',   id: 47549  },
  { key: 'Cnidaria',        id: 47534  },
  { key: 'Crustacea',       id: 47187  },
  { key: 'Platyhelminthes', id: 52319  },
  { key: 'Porifera',        id: 48824  },
  { key: 'Tunicata',        id: 130868 },
];

const GROUP_CONFIG = [
  { key: 'Mollusca',        label: 'Molluscs',                     icon: 'icon-shell' },
  { key: 'Actinopterygii',  label: 'Bony Fish',                    icon: 'fas fa-fish' },
  { key: 'Chondrichthyes',  label: 'Sharks & Rays',                icon: 'fas fa-bolt' },
  { key: 'Echinodermata',   label: 'Echinoderms',                  icon: 'fas fa-star' },
  { key: 'Cnidaria',        label: 'Corals, Jellyfish & Hydroids', icon: 'fas fa-sun' },
  { key: 'Crustacea',       label: 'Crustaceans',                  icon: 'fas fa-shield-alt' },
  { key: 'Annelida',        label: 'Worms',                        icon: 'fas fa-minus' },
  { key: 'Platyhelminthes', label: 'Flatworms',                    icon: 'fas fa-align-justify' },
  { key: 'Porifera',        label: 'Sponges',                      icon: 'fas fa-tint' },
  { key: 'Tunicata',        label: 'Sea Squirts & Tunicates',      icon: 'fas fa-flask' },
  { key: 'Reptilia',        label: 'Reptiles',                     icon: 'fas fa-dragon' },
  { key: 'Mammalia',        label: 'Mammals',                      icon: 'fas fa-paw' },
  { key: 'Aves',            label: 'Birds',                        icon: 'fas fa-feather' },
  { key: 'Amphibia',        label: 'Amphibians',                   icon: 'fas fa-frog' },
  { key: 'Insecta',         label: 'Insects',                      icon: 'fas fa-bug' },
  { key: 'Arachnida',       label: 'Arachnids',                    icon: 'fas fa-spider' },
  { key: 'Plantae',         label: 'Plants',                       icon: 'fas fa-leaf' },
  { key: 'Fungi',           label: 'Fungi',                        icon: 'ti ti-mushroom' },
  { key: 'Chromista',       label: 'Chromista',                    icon: 'fas fa-microscope' },
  { key: 'Protozoa',        label: 'Protozoa',                     icon: 'fas fa-microscope' },
  { key: 'Animalia',        label: 'Other Animals',                icon: 'fas fa-globe' },
  { key: 'unknown',         label: 'Other',                        icon: 'fas fa-question-circle' },
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
    title.innerHTML = '<i class="' + group.icon + '"></i> ' + group.label + ' <span class="species-group-count">(' + items.length + ')</span>';
    section.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'species-grid';

    items.forEach(s => {
      const taxon = s.taxon;
      const commonName = taxon.preferred_common_name || taxon.name;
      const sciName = taxon.name;
      const inatUrl = 'https://www.inaturalist.org/taxa/' + taxon.id;
      const isFave = FAVORITES.includes(sciName);

      const card = document.createElement('a');
      card.className = 'species-card';
      card.href = inatUrl;
      card.target = '_blank';
      card.rel = 'noopener noreferrer';

      if (isFave) {
        const badge = document.createElement('span');
        badge.className = 'species-fave-badge';
        badge.innerHTML = '<i class="fas fa-heart"></i>';
        card.appendChild(badge);
      }

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
      const plural = s.count !== 1 ? 's' : '';
      info.innerHTML = '<div class="species-card-common">' + commonName + '</div><div class="species-card-scientific">' + sciName + '</div><div class="species-card-count">' + s.count + ' observation' + plural + '</div>';
      card.appendChild(info);
      grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
  });

  document.getElementById('species-loading').style.display = 'none';
}

let allSpeciesData = [];
let favesOnly = false;
let searchQuery = '';

function toggleFavesOnly() {
  favesOnly = !favesOnly;
  const btn = document.getElementById('faves-toggle');
  btn.style.background = favesOnly ? '#8a3e18' : '#C05C27';
  btn.innerHTML = favesOnly
    ? '<i class="fas fa-heart"></i> Show all'
    : '<i class="fas fa-heart"></i> Favorites only';
  applyFilters();
}

function applyFilters() {
  let filtered = allSpeciesData;
  if (favesOnly) {
    filtered = filtered.filter(s => FAVORITES.includes(s.taxon.name));
  }
  if (searchQuery) {
    filtered = filtered.filter(s => {
      const common = (s.taxon.preferred_common_name || '').toLowerCase();
      const sci = s.taxon.name.toLowerCase();
      return common.includes(searchQuery) || sci.includes(searchQuery);
    });
  }
  renderSpecies(filtered);
}

async function showRandomFavorite() {
  const notedFaves = Object.keys(PERSONAL_NOTES);
  const randomSci = notedFaves[Math.floor(Math.random() * notedFaves.length)];
  const modal = document.getElementById('fave-modal');
  const content = document.getElementById('fave-modal-content');
  modal.classList.add('open');
  content.innerHTML = '<div style="text-align:center; padding:40px; color:#C05C27;"><i class="fas fa-spinner fa-spin fa-2x"></i><br><br>Loading...</div>';

  try {
    const taxaRes = await fetch('https://api.inaturalist.org/v1/taxa?q=' + encodeURIComponent(randomSci) + '&per_page=5');
    const taxaData = await taxaRes.json();
    const taxon = taxaData.results.find(t => t.name === randomSci) || taxaData.results[0];
    if (!taxon) { content.innerHTML = '<p style="color:#C05C27;">Could not load species. Try again!</p>'; return; }

    const myObs = allSpeciesData.find(s => s.taxon.name === randomSci);
    const obsCount = myObs ? myObs.count : 0;
    const commonName = taxon.preferred_common_name || taxon.name;
    const photo = taxon.default_photo ? taxon.default_photo.medium_url : (myObs && myObs.photo ? myObs.photo : null);
    const description = taxon.wikipedia_summary || '';
    const status = taxon.conservation_status ? taxon.conservation_status.status_name : null;
    const personalNote = PERSONAL_NOTES[randomSci] || '';

    content.innerHTML =
      '<div style="display:flex; gap:18px; align-items:flex-start; flex-wrap:wrap;">' +
      (photo ? '<img src="' + photo + '" alt="' + commonName + '" style="width:200px; height:200px; object-fit:cover; border-radius:10px; flex-shrink:0; box-shadow:0 2px 12px rgba(0,0,0,0.15);">' : '') +
      '<div style="flex:1; min-width:180px;">' +
      '<div style="font-size:1.4rem; font-weight:bold; color:#C05C27; margin-bottom:2px;">' + commonName + '</div>' +
      '<div style="font-size:0.88rem; font-style:italic; color:#999; margin-bottom:14px;">' + randomSci + '</div>' +
      '<div style="display:flex; gap:20px; flex-wrap:wrap; margin-bottom:14px;">' +
      '<div style="text-align:center;"><div style="font-size:1.6rem; font-weight:bold; color:#C05C27;">' + obsCount + '</div><div style="font-size:0.72rem; color:#999; text-transform:uppercase; letter-spacing:0.05em;">My observations</div></div>' +
      (status ? '<div style="text-align:center;"><div style="font-size:0.9rem; font-weight:bold; color:#C05C27;">' + status + '</div><div style="font-size:0.72rem; color:#999; text-transform:uppercase; letter-spacing:0.05em;">Conservation status</div></div>' : '') +
      '</div>' +
      (personalNote ? '<div style="background:rgba(192,92,39,0.12); border-left:4px solid #C05C27; padding:10px 14px; border-radius:6px; font-size:0.88rem; color:#7a2a00; line-height:1.6;"><i class="fas fa-heart" style="color:#C05C27; margin-right:6px;"></i>' + personalNote + '</div>' : '') +
      '</div></div>' +
      (description ? '<div style="margin-top:16px; font-size:0.85rem; color:#7a2a00; line-height:1.7; border-top:1px solid rgba(192,92,39,0.2); padding-top:14px;">' + description + '</div>' : '') +
      '<div style="margin-top:14px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">' +
      '<a href="https://www.inaturalist.org/taxa/' + taxon.id + '" target="_blank" style="font-size:0.82rem; color:#C05C27; text-decoration:underline;">View on iNaturalist \u2192</a>' +
      '<button onclick="showRandomFavorite()" style="padding:6px 14px; background:#C05C27; color:#fff; border:none; border-radius:6px; cursor:pointer; font-size:0.82rem; display:flex; align-items:center; gap:6px;"><i class="fas fa-dice"></i> Another one</button>' +
      '</div>';
  } catch (err) {
    content.innerHTML = '<p style="color:#C05C27;">Could not load species data. Please try again.</p>';
    console.error(err);
  }
}

function closeFaveModal() {
  document.getElementById('fave-modal').classList.remove('open');
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('fave-modal').addEventListener('click', function(e) {
    if (e.target === this) closeFaveModal();
  });

  fetchAllObservations()
    .then(deduplicateBySpecies)
    .then(species => {
      allSpeciesData = species;
      renderSpecies(species);
      document.getElementById('species-search').addEventListener('input', function() {
        searchQuery = this.value.toLowerCase();
        applyFilters();
      });
    })
    .catch(err => {
      document.getElementById('species-loading').style.display = 'none';
      const errEl = document.getElementById('species-error');
      errEl.style.display = 'block';
      errEl.textContent = 'Could not load species from iNaturalist. Please try again later.';
      console.error(err);
    });
});
</script>
