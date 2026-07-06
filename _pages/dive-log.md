---
layout: single
title: "Dive Log"
permalink: /dive-log/
author_profile: false
---

<style>
.page__title { color: #4B2E0F !important; }
.page__title::after { background-color: #4B2E0F !important; }
h1::after, h2::after, h3::after { background-color: #4B2E0F !important; border-color: #4B2E0F !important; }
body, #main, article.page, .page__inner-wrap, .page__content, .initial-content, .page__wrap {
  background-color: #CCE7ED !important;
}
.sidebar { background-color: #4B2E0F !important; }
a { color: #4B2E0F !important; }
a:hover { color: #7a4e20 !important; }
h1, h2, h3, h4, h5, h6, body { color: #4B2E0F !important; }
#main, article.page, .page__inner-wrap, .page__content, .page__inner-wrap--layout-single {
  max-width: 100% !important;
  width: 100% !important;
  padding-left: 1em !important;
  padding-right: 1em !important;
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
  font-size: 1.8rem;
  font-weight: bold;
  color: #4B2E0F;
  line-height: 1;
}
.dive-stat-label {
  font-size: 0.8rem;
  color: #666;
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
  border-collapse: collapse;
  font-size: 0.85rem;
  background: rgba(255,255,255,0.25);
  border-radius: 8px;
  overflow: hidden;
}
.dive-table th {
  background: rgba(75,46,15,0.15);
  color: #4B2E0F;
  font-weight: bold;
  padding: 10px 12px;
  text-align: left;
  border-bottom: 2px solid #4B2E0F;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
}
.dive-table th:hover { background: rgba(75,46,15,0.25); }
.dive-table th.sort-asc::after { content: " ↑"; }
.dive-table th.sort-desc::after { content: " ↓"; }
.dive-table td {
  padding: 8px 12px;
  border-bottom: 1px solid rgba(75,46,15,0.15);
  color: #4B2E0F;
  vertical-align: top;
}
.dive-table tr:last-child td { border-bottom: none; }
.dive-table tr:nth-child(even) td { background: rgba(255,255,255,0.15); }
.dive-table tr:hover td { background: rgba(255,255,255,0.35); }
.dive-type-badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: bold;
  white-space: nowrap;
}
.dive-type-scientific { background: rgba(75,46,15,0.2); color: #4B2E0F; }
.dive-type-recreational { background: rgba(255,164,74,0.3); color: #8a5a00; }
.dive-type-training { background: rgba(100,100,200,0.15); color: #333; }
.dive-type-other { background: rgba(200,200,200,0.3); color: #555; }
.dive-loading { text-align: center; padding: 40px; color: #4B2E0F; }
.dive-no-results { text-align: center; padding: 20px; color: #888; font-style: italic; }
</style>

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
        <th data-col="1">Date</th>
        <th data-col="2">Site</th>
        <th data-col="3">Location</th>
        <th data-col="4">Type</th>
        <th data-col="5">Max Depth (m)</th>
        <th data-col="8">Total Time</th>
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

function classifyDiveType(type) {
  if (!type) return 'Other';
  const t = type.toLowerCase();
  if (t.includes('divemaster') || t.includes('training') || t.includes('evaluation') || t.includes('rescue')) return 'Training';
  if (t.includes('fun dive')) return 'Recreational';
  return 'Scientific';
}

function getDiveTypeClass(category) {
  if (category === 'Scientific') return 'dive-type-scientific';
  if (category === 'Recreational') return 'dive-type-recreational';
  if (category === 'Training') return 'dive-type-training';
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
    tr.innerHTML = `
      <td>${row[0] || ''}</td>
      <td style="white-space:nowrap">${row[1] || ''}</td>
      <td>${row[2] || ''}</td>
      <td>${row[3] || ''}</td>
      <td><span class="dive-type-badge ${typeClass}">${category}</span></td>
      <td>${row[5] || ''}</td>
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
    const matchType = !typeFilter || classifyDiveType(row[4]).toLowerCase() === typeFilter.toLowerCase();
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
  document.getElementById('stat-time').textContent = times.length ? times.reduce((a, b) => a + b, 0) : '—';
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
