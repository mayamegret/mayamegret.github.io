---
layout: single
title: "Dive Log"
permalink: /dive-log/
author_profile: false
---

<style>
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
  color: #2c4a3e;
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
  border: 2px solid #2c4a3e;
  border-radius: 6px;
  background: rgba(255,255,255,0.5);
  color: #2c4a3e;
  font-size: 0.88rem;
  outline: none;
}
.dive-filters select {
  padding: 7px 12px;
  border: 2px solid #2c4a3e;
  border-radius: 6px;
  background: rgba(255,255,255,0.5);
  color: #2c4a3e;
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
  background: rgba(44,74,62,0.15);
  color: #2c4a3e;
  font-weight: bold;
  padding: 10px 12px;
  text-align: left;
  border-bottom: 2px solid #2c4a3e;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
}
.dive-table th:hover { background: rgba(44,74,62,0.25); }
.dive-table th.sort-asc::after { content: " ↑"; }
.dive-table th.sort-desc::after { content: " ↓"; }
.dive-table td {
  padding: 8px 12px;
  border-bottom: 1px solid rgba(44,74,62,0.15);
  color: #2c4a3e;
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
.dive-type-scientific { background: rgba(44,74,62,0.2); color: #2c4a3e; }
.dive-type-recreational { background: rgba(255,164,74,0.3); color: #8a5a00; }
.dive-type-training { background: rgba(100,100,200,0.15); color: #333; }
.dive-type-other { background: rgba(200,200,200,0.3); color: #555; }
.dive-loading { text-align: center; padding: 40px; color: #2c4a3e; }
.dive-no-results { text-align: center; padding: 20px; color: #888; font-style: italic; }
</style>

<div class="dive-stats">
  <div class="dive-stat-card">
    <div class="dive-stat-number" id="stat-total">—</div>
    <div class="dive-stat-label">Total Dives</div>
  </div>
  <div class="dive-stat-card">
    <div class="dive-stat-number" id="stat-depth">—</div>
    <div class="dive-stat-label">Deepest Dive (m)</div>
  </div>
  <div class="dive-stat-card">
    <div class="dive-stat-number" id="stat-time">—</div>
    <div class="dive-stat-label">Total Bottom Time (min)</div>
  </div>
  <div class="dive-stat-card">
    <div class="dive-stat-number" id="stat-locations">—</div>
    <div class="dive-stat-label">Locations</div>
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
        <th data-col="7">Total Time</th>
        <th data-col="12">Vis (m)</th>
        <th data-col="13">Current</th>
        <th data-col="17">Buddies</th>
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

function getDiveTypeClass(type) {
  if (!type) return 'dive-type-other';
  const t = type.toLowerCase();
  if (t.includes('scientific')) return 'dive-type-scientific';
  if (t.includes('recreational')) return 'dive-type-recreational';
  if (t.includes('training')) return 'dive-type-training';
  return 'dive-type-other';
}

function parseCSV(text) {
  const lines = text.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim());
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
    const typeClass = getDiveTypeClass(row[4]);
    tr.innerHTML = `
      <td>${row[0] || ''}</td>
      <td style="white-space:nowrap">${row[1] || ''}</td>
      <td>${row[2] || ''}</td>
      <td>${row[3] || ''}</td>
      <td><span class="dive-type-badge ${typeClass}">${row[4] || ''}</span></td>
      <td>${row[5] || ''}</td>
      <td>${row[8] || ''}</td>
      <td>${row[12] || ''}</td>
      <td>${row[13] || ''}</td>
      <td>${row[17] || ''}</td>
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
    const matchType = !typeFilter || (row[4] || '').toLowerCase().includes(typeFilter);
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
  document.getElementById('stat-total').textContent = dives.length;
  const depths = dives.map(r => parseFloat(r[5])).filter(d => !isNaN(d));
  document.getElementById('stat-depth').textContent = depths.length ? Math.max(...depths) : '—';
  const times = dives.map(r => parseFloat(r[7])).filter(t => !isNaN(t));
  document.getElementById('stat-time').textContent = times.length ? times.reduce((a, b) => a + b, 0) : '—';
  const locs = new Set(dives.map(r => r[3]).filter(Boolean));
  document.getElementById('stat-locations').textContent = locs.size;
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
</script>
