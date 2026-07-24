// Location data now lives in /assets/js/travel-data.js so it can be
// shared with other pages (like the boat stats). Load that file first.
const locations = window.travelLocations;

const map = L.map('dive-map', { minZoom: 2 }).setView([20, 10], 2);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: '&copy; Esri &copy; National Geographic',
  maxZoom: 16
}).addTo(map);

function makeIcon(type, highlighted, dimmed) {
  const color = highlighted ? '#ffa44a' : dimmed ? 'rgba(100,100,100,0.3)' : '#1a1a1a';
  if (type === 'dive') {
    return L.divIcon({
      html: `<i class="fas fa-anchor" style="font-size:18px; color:${color};"></i>`,
      className: 'map-icon',
      iconSize: [20, 20],
      iconAnchor: [10, 10],
      popupAnchor: [0, -10]
    });
  } else {
    return L.divIcon({
      html: `<i class="fas fa-map-marker-alt" style="font-size:22px; color:${color};"></i>`,
      className: 'map-icon',
      iconSize: [20, 26],
      iconAnchor: [10, 26],
      popupAnchor: [0, -26]
    });
  }
}

function buildPopup(loc) {
  let html = `<div class="popup-title">${loc.name}, ${loc.country}</div>`;
  if (loc.dates) html += `<div class="popup-dates">${loc.dates}</div>`;
  if (loc.description) html += `<div class="popup-description">${loc.description}</div>`;
  if (loc.species && loc.species.length > 0) {
    html += `<div class="popup-species"><strong>Species highlights:</strong><ul>`;
    loc.species.forEach(s => html += `<li>${s}</li>`);
    html += `</ul></div>`;
  }
  if (loc.photos && loc.photos.length > 0) {
    const count = loc.photos.length;
    const link = loc.galleryId ? `/photography/#${loc.galleryId}` : null;
    html += link ? `<a href="${link}" class="popup-stack-link">` : '<div>';
    html += `<div class="popup-stack ${count > 1 ? 'is-stack' : ''}">
      <img src="${loc.photos[0]}" alt="" class="popup-stack-img">
      ${count > 1 ? `<span class="popup-stack-badge">+${count - 1}</span>` : ''}
    </div>`;
    if (link) html += `<div class="popup-gallery-link">View in gallery →</div>`;
    html += link ? '</a>' : '</div>';
  }
  // link back to the dive log, filtered to this location, if this is a dive site
  // that has matching rows in divelog.csv (see diveLogLocation on the location object)
  if (loc.type === 'dive' && loc.diveLogLocation) {
    const url = '/dive-log/?location=' + encodeURIComponent(loc.diveLogLocation.toLowerCase());
    html += `<div class="popup-gallery-link" style="margin-top:6px;"><a href="${url}"><i class="fas fa-book"></i> View dives in log →</a></div>`;
  }
  return html;
}

const markerObjects = [];
let currentTypeFilter = 'all';
let currentYearFilter = 2026;
let pathLayer = null;
let animationInterval = null;
let isAnimating = false;

locations.forEach(loc => {
  const marker = L.marker(loc.coords, { icon: makeIcon(loc.type, false, false) })
    .bindPopup(buildPopup(loc), { maxWidth: 300, autoPan: true, autoPanPadding: [20, 20] })
    .addTo(map);

  marker.on('popupopen', () => {
    markerObjects.forEach(m => {
      const isMatch = m.country === loc.country;
      m.marker.setIcon(makeIcon(m.type, isMatch, !isMatch));
    });
  });

  markerObjects.push({ marker, type: loc.type, country: loc.country, year: loc._year, galleryId: loc.galleryId });
});

map.on('popupclose', () => {
  markerObjects.forEach(m => {
    m.marker.setIcon(makeIcon(m.type, false, false));
  });
});

function applyFilters() {
  markerObjects.forEach(({ marker, type: markerType, year }) => {
    const passesType = currentTypeFilter === 'all' || markerType === currentTypeFilter;
    const passesYear = year <= currentYearFilter;
    if (passesType && passesYear) {
      marker.addTo(map);
    } else {
      map.removeLayer(marker);
    }
  });
  drawPath();
}

function drawPath() {
  if (pathLayer) { map.removeLayer(pathLayer); pathLayer = null; }
  const filtered = locations.filter(l => l._year <= currentYearFilter);
  if (filtered.length < 2) return;
  const latlngs = filtered.map(l => l.coords);
  pathLayer = L.polyline(latlngs, {
    color: '#ffa44a',
    weight: 2,
    opacity: 0.5,
    dashArray: '5 8'
  }).addTo(map);
}

// Timeline slider
window.onSliderChange = function(val) {
  currentYearFilter = parseInt(val);
  document.getElementById('year-display').textContent = val;
  applyFilters();
};

// Animate journey
window.animateJourney = function() {
  if (isAnimating) {
    clearInterval(animationInterval);
    isAnimating = false;
    document.getElementById('animate-btn').innerHTML = '<i class="fas fa-play"></i> Animate journey';
    return;
  }

  const years = [...new Set(locations.map(l => l._year))].sort();
  let i = 0;
  currentYearFilter = years[0];
  document.getElementById('year-slider').value = years[0];
  document.getElementById('year-display').textContent = years[0];
  applyFilters();

  isAnimating = true;
  document.getElementById('animate-btn').innerHTML = '<i class="fas fa-stop"></i> Stop';

  animationInterval = setInterval(() => {
    i++;
    if (i >= years.length) {
      clearInterval(animationInterval);
      isAnimating = false;
      document.getElementById('animate-btn').innerHTML = '<i class="fas fa-play"></i> Animate journey';
      return;
    }
    currentYearFilter = years[i];
    document.getElementById('year-slider').value = years[i];
    document.getElementById('year-display').textContent = years[i];
    applyFilters();
  }, 800);
};

// Type filter
window.filterMap = function(type) {
  currentTypeFilter = type;
  ['all', 'dive', 'visit'].forEach(t => {
    const btn = document.getElementById('btn-' + t);
    if (btn) {
      btn.style.background = t === type ? '#1A4A5C' : 'rgba(26,74,92,0.2)';
      btn.style.color = t === type ? '#fff' : '#1A4A5C';
    }
  });
  applyFilters();
};

// Counter
const countries = new Set(locations.map(l => l.country));
const oceansVisited = new Set(locations.map(l => l.ocean).filter(Boolean));
const diveCount = locations.filter(l => l.type === 'dive').length;
setTimeout(() => {
  const el = document.getElementById('map-counter');
  if (el) el.innerHTML = `<strong>${countries.size}</strong> countries &nbsp;·&nbsp; <strong>${oceansVisited.size}</strong> oceans &nbsp;·&nbsp; <strong>${diveCount}</strong> dive sites`;
}, 100);

if (window.location.hash) {
  const id = window.location.hash.slice(1);
  const loc = locations.find(l => l.galleryId === id);
  if (loc) {
    map.setView(loc.coords, 8);
    const found = markerObjects.find(m => m.galleryId === id);
    if (found) {
      setTimeout(() => found.marker.openPopup(), 350);
    }
  }
}
