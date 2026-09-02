---
layout: single
title: "Dive Log"
permalink: /dive-log/
author_profile: false
---
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">

<style>
body, #main, article.page, .page__inner-wrap, .page__content, .initial-content, .page__wrap {
  background-color: #CCE7ED !important;
}
.sidebar { background-color: #4B2E0F !important; }
a { color: #4B2E0F !important; }
a:hover { color: #7a4e20 !important; }
h1, h2, h3, h4, h5, h6, body { color: #4B2E0F !important; }
.page__title { color: #4B2E0F !important; text-align: center !important; }
.page__title::after { background-color: #4B2E0F !important; }
h1::after, h2::after, h3::after { background-color: #4B2E0F !important; border-color: #4B2E0F !important; }
#main, article.page, .page__inner-wrap, .page__content, .page__inner-wrap--layout-single {
  max-width: 100% !important;
  width: 100% !important;
  padding-left: 1em !important;
  padding-right: 1em !important;
}
article.page {
  position: relative;
}
.back-to-boat {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-flex;
  align-items: center;
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: underline;
  color: #4B2E0F !important;
  z-index: 10;
}
.back-to-boat:hover {
  color: #7a4e20 !important;
}
.dive-stats {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}
.dive-stat-card {
  background: rgba(255,255,255,0.35);
  border-radius: 8px;
  padding: 12px 20px;
  text-align: center;
  flex: 1;
  min-width: 100px;
}
.dive-stat-number {
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-weight: 600;
  font-size: 1.8rem;
  color: #4B2E0F;
  line-height: 1;
}
.dive-stat-label {
  font-size: 0.8rem;
  color: #4B2E0F;
  margin-top: 4px;
}
.dive-filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  align-items: center;
}
.dive-filters input {
  flex: 1;
  min-width: 180px;
  padding: 7px 12px;
  border: 2px solid #4B2E0F;
  border-radius: 6px;
  background: rgba(255,255,255,0.5);
  color: #4B2E0F;
  font-size: 0.88rem;
  outline: none;
}
.dive-filters select {
  padding: 7px 12px;
  border: 2px solid #4B2E0F;
  border-radius: 6px;
  background: rgba(255,255,255,0.5);
  color: #4B2E0F;
  font-size: 0.88rem;
  outline: none;
  cursor: pointer;
}
.dive-table-wrap {
  overflow-x: auto;
  border-radius: 8px;
}
.dive-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 0.85rem;
  background: rgba(255,255,255,0.25);
  border-radius: 8px;
  overflow: hidden;
}
.dive-table th {
  background: #BDD9E0 !important;
  color: #4B2E0F !important;
  position: sticky;
  top: 0;
  z-index: 5;
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-weight: 600;
  font-size: 0.78rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  padding: 10px 12px;
  text-align: left;
  border-bottom: 2px solid #4B2E0F !important;
  border-color: #4B2E0F !important;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
}
.dive-table th:hover { background: #a8cdd5 !important; }
.dive-table th.sort-asc::after { content: " ↑"; }
.dive-table th.sort-desc::after { content: " ↓"; }
.dive-table td {
  padding: 8px 12px;
  border-bottom: 1px solid #4B2E0F !important;
  border-color: #4B2E0F !important;
  color: #4B2E0F;
  vertical-align: top;
}
.dive-table tr:last-child td { border-bottom: none !important; }
.dive-table tr:nth-child(even) td { background: transparent !important; }
.dive-table tr:hover td { background: rgba(255,255,255,0.35) !important; }
.page__content .dive-table th,
.page__content .dive-table td {
  border-color: #4B2E0F !important;
  border-bottom-color: #4B2E0F !important;
}
.page__content .dive-table tr {
  border-bottom-color: #4B2E0F !important;
}
.page__content .dive-table thead {
  background-color: #BDD9E0 !important;
  border-bottom-color: #4B2E0F !important;
}
.page__content .dive-table thead th {
  color: #4B2E0F !important;
  background-color: #BDD9E0 !important;
}
.page__content .dive-table td {
  border-bottom: 1px solid #4B2E0F !important;
  color: #4B2E0F !important;
}
.dive-type-badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: bold;
  white-space: nowrap;
}
.dive-type-scientific { background: rgba(34,139,34,0.2); color: #1a5c1a; }
.dive-type-recreational { background: rgba(219,112,147,0.25); color: #9b3060; }
.dive-type-training { background: rgba(100,149,237,0.25); color: #2a5090; }
.dive-type-professional { background: rgba(255,164,74,0.3); color: #8a5a00; }
.dive-type-night { background: rgba(25,25,60,0.22); color: #14143a; }
.dive-type-badges { display: flex; flex-wrap: wrap; gap: 4px; }
.dive-loading { text-align: center; padding: 40px; color: #4B2E0F; }
.dive-no-results { text-align: center; padding: 20px; color: #4B2E0F; font-style: italic; }

/* combined site / location / date cell */
.dive-site-cell strong {
  display: block;
  font-size: 0.9rem;
  line-height: 1.3;
}
.dive-site-cell span {
  display: block;
  font-size: 0.75rem;
  color: rgba(75, 46, 15, 0.7);
  margin-top: 1px;
}

/* depth bar */
.dive-depth-cell {
  min-width: 90px;
}
.depth-value {
  font-size: 0.82rem;
  margin-bottom: 3px;
}
.depth-bar-track {
  width: 100%;
  height: 5px;
  background: rgba(75, 46, 15, 0.15);
  border-radius: 3px;
}
.depth-bar-fill {
  height: 100%;
  background: #4B2E0F;
  border-radius: 3px;
}

.dive-table th:nth-child(2),
.dive-table td:nth-child(2) {
  max-width: 220px;
  white-space: normal;
}
.dive-table th:nth-child(4),
.dive-table td:nth-child(4) {
  width: 110px;
}
.dive-table th:nth-child(5),
.dive-table td:nth-child(5) {
  width: 80px;
}
.dive-table th:nth-child(8),
.dive-table td:nth-child(8) {
  min-width: 220px;
}
</style>

<a href="/boat/" class="back-to-boat">&larr; Back to the boat</a>

<div class="dive-stats">
  <div class="dive-stat-card">
    <div class="dive-stat-number" id="stat-total">—</div>
    <div class="dive-stat-label">Lifetime Dives</div>
  </div>
  <div class="dive-stat-card">
    <div class="dive-stat-number" id="stat-depth">—</div>
    <div class="dive-stat-label">Deepest Dive (m)</div>
  </div>
  <div class="dive-stat-card">
    <div class="dive-stat-number" id="stat-time">—</div>
    <div class="dive-stat-label">Total Time (min)</div>
  </div>
</div>

<div class="dive-filters">
  <input type="text" id="dive-search" placeholder="Search site, location, species...">
  <select id="dive-type-filter">
    <option value="">All dive types</option>
    <option value="Scientific">Scientific</option>
    <option value="Recreational">Recreational</option>
    <option value="Training">Training</option>
    <option value="Professional">Professional</option>
    <option value="night">Night Dive</option>
  </select>
  <select id="dive-location-filter">
    <option value="">All locations</option>
  </select>
</div>

<div class="dive-loading" id="dive-loading">Loading dive log...</div>
<div class="dive-table-wrap" id="dive-table-wrap" style="display:none;">
  <table class="dive-table" id="dive-table">
    <thead>
      <tr>
        <th data-col="0">#</th>
        <th data-col="1">Dive</th>
        <th data-col="4">Type</th>
        <th data-col="5">Depth</th>
        <th data-col="8">Time (min)</th>
        <th data-col="12">Vis (m)</th>
        <th data-col="13">Current</th>
        <th data-col="18">Key Species</th>
      </tr>
    </thead>
    <tbody id="dive-tbody"></tbody>
  </table>
</div>
<div class="dive-no-results" id="dive-no-results" style="display:none;">No dives match your search.</div>

<script>
let allDives = [];
let sortCol = 0;
let sortDir = 'desc';
let maxDepthAll = 0;

function classifyDiveType(type) {
  if (!type) return 'Other';
  const t = type.toLowerCase();
  if (t.includes('divemaster') || t.includes('training') || t.includes('evaluation') || t.includes('rescue')) return 'Training';
  if (t.includes('fun dive')) return 'Recreational';
  if (t.includes('professional') || t.includes('guided') || t.includes('work') || t.includes('lead')) return 'Professional';
  return 'Scientific';
}
function isNightDive(type) {
  if (!type) return false;
  return type.toLowerCase().includes('night');
}
function getDiveTypeClass(category) {
  if (category === 'Scientific') return 'dive-type-scientific';
  if (category === 'Recreational') return 'dive-type-recreational';
  if (category === 'Training') return 'dive-type-training';
  if (category === 'Professional') return 'dive-type-professional';
  return 'dive-type-other';
}

function parseCSV(text) {
  const lines = text.trim().split('\n');
  return lines.slice(1).map(line => {
    const cols = [];
    let inQuote = false;
    let cur = '';
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') { inQuote = !inQuote; }
      else if (ch === ',' && !inQuote) { cols.push(cur.trim()); cur = ''; }
      else { cur += ch; }
    }
    cols.push(cur.trim());
    return cols;
  }).filter(row => row[0] && row[0].trim() !== '');
}

function renderTable(dives) {
  const tbody = document.getElementById('dive-tbody');
  tbody.innerHTML = '';
  if (dives.length === 0) {
    document.getElementById('dive-table-wrap').style.display = 'none';
    document.getElementById('dive-no-results').style.display = 'block';
    return;
  }
  document.getElementById('dive-table-wrap').style.display = 'block';
  document.getElementById('dive-no-results').style.display = 'none';
  dives.forEach(row => {
    const tr = document.createElement('tr');
    const category = classifyDiveType(row[4]);
    const typeClass = getDiveTypeClass(category);
    const nightDive = isNightDive(row[4]);
    const depth = parseFloat(row[5]);
    const pct = (!isNaN(depth) && maxDepthAll) ? Math.round((depth / maxDepthAll) * 100) : 0;
    const depthLabel = row[5] ? row[5] + ' m' : '—';
    const subline = [row[3], row[1]].filter(Boolean).join(' · ');
    tr.innerHTML = `
      <td>${row[0] || ''}</td>
      <td class="dive-site-cell">
        <strong>${row[2] || ''}</strong>
        <span>${subline}</span>
      </td>
      <td>
        <div class="dive-type-badges">
          <span class="dive-type-badge ${typeClass}">${category}</span>
          ${nightDive ? '<span class="dive-type-badge dive-type-night">Night Dive</span>' : ''}
        </div>
      </td>
      <td class="dive-depth-cell">
        <div class="depth-value">${depthLabel}</div>
        <div class="depth-bar-track"><div class="depth-bar-fill" style="width:${pct}%"></div></div>
      </td>
      <td>${row[8] || ''}</td>
      <td>${row[12] || ''}</td>
      <td>${row[13] || ''}</td>
      <td style="max-width:200px">${row[18] || ''}</td>
    `;
    tbody.appendChild(tr);
  });
}

function applyFilters() {
  const search = document.getElementById('dive-search').value.toLowerCase();
  const typeFilter = document.getElementById('dive-type-filter').value.toLowerCase();
  const locFilter = document.getElementById('dive-location-filter').value.toLowerCase();
  let filtered = allDives.filter(row => {
    const matchSearch = !search || [row[2], row[3], row[18]].some(v => (v || '').toLowerCase().includes(search));
    const matchType = !typeFilter || (typeFilter === 'night' ? isNightDive(row[4]) : classifyDiveType(row[4]).toLowerCase() === typeFilter.toLowerCase());
    const matchLoc = !locFilter || (row[3] || '').toLowerCase() === locFilter;
    return matchSearch && matchType && matchLoc;
  });
  filtered = sortDives(filtered);
  renderTable(filtered);
}

function sortDives(dives) {
  return [...dives].sort((a, b) => {
    const av = a[sortCol] || '';
    const bv = b[sortCol] || '';
    const an = parseFloat(av);
    const bn = parseFloat(bv);
    const numericSort = !isNaN(an) && !isNaN(bn);
    let cmp = numericSort ? an - bn : av.localeCompare(bv);
    return sortDir === 'asc' ? cmp : -cmp;
  });
}

function updateStats(dives) {
  document.getElementById('stat-total').textContent = dives.length + 49;
  const depths = dives.map(r => parseFloat(r[5])).filter(d => !isNaN(d));
  document.getElementById('stat-depth').textContent = depths.length ? Math.max(...depths) : '—';
  const times = dives.map(r => parseFloat(r[8])).filter(t => !isNaN(t));
  document.getElementById('stat-time').textContent = times.length ? times.reduce((a, b) => a + b, 0) + 1500 : '—';
}

function populateLocationFilter(dives) {
  const locs = [...new Set(dives.map(r => r[3]).filter(Boolean))].sort();
  const sel = document.getElementById('dive-location-filter');
  locs.forEach(loc => {
    const opt = document.createElement('option');
    opt.value = loc.toLowerCase();
    opt.textContent = loc;
    sel.appendChild(opt);
  });
}

fetch('/assets/data/divelog.csv')
  .then(r => r.text())
  .then(text => {
    allDives = parseCSV(text);
    const depths = allDives.map(r => parseFloat(r[5])).filter(d => !isNaN(d));
    maxDepthAll = depths.length ? Math.max(...depths) : 0;
    document.getElementById('dive-loading').style.display = 'none';
    updateStats(allDives);
    populateLocationFilter(allDives);
    renderTable(sortDives(allDives));
    document.getElementById('dive-search').addEventListener('input', applyFilters);
    document.getElementById('dive-type-filter').addEventListener('change', applyFilters);
    document.getElementById('dive-location-filter').addEventListener('change', applyFilters);
    document.querySelectorAll('.dive-table th').forEach(th => {
      th.addEventListener('click', () => {
        const col = parseInt(th.dataset.col);
        if (sortCol === col) {
          sortDir = sortDir === 'asc' ? 'desc' : 'asc';
        } else {
          sortCol = col;
          sortDir = 'asc';
        }
        document.querySelectorAll('.dive-table th').forEach(t => {
          t.classList.remove('sort-asc', 'sort-desc');
        });
        th.classList.add(sortDir === 'asc' ? 'sort-asc' : 'sort-desc');
        applyFilters();
      });
    });
  })
  .catch(err => {
    document.getElementById('dive-loading').textContent = 'Could not load dive log. Please try again later.';
    console.error(err);
  });

document.querySelectorAll('#main, article.page, .page__inner-wrap, .page__content').forEach(el => {
  el.style.maxWidth = '100%';
  el.style.width = '100%';
  el.style.paddingLeft = '1em';
  el.style.paddingRight = '1em';
  el.style.float = 'none';
});
</script>
