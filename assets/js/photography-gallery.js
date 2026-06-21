const tiles = [
  { photos: ["/images/photography/MagazineCollage.png"] },
  { photos: ["/images/photography/IMG_0406.jpg"] },
  { photos: ["/images/photography/IMG_0455.jpg"] },
  { photos: ["/images/photography/IMG_0593.jpg", "/images/photography/IMG_0599.jpg", "/images/photography/IMG_1093.jpg"], caption: "Beach scenes, Kona, Hawai'i", id: "honolulu", mapLink: "/map/#honolulu" },
  { photos: ["/images/photography/IMG_0609.jpg"] },
  { photos: ["/images/photography/IMG_0931.jpg"] },
  { photos: ["/images/photography/IMG_1593.jpg"] },
  { photos: ["/images/photography/IMG_2277.jpg"] },
  { photos: ["/images/photography/IMG_2347.jpg"] },
  { photos: ["/images/photography/IMG_0475.jpg"] },
  { photos: ["/images/photography/IMG_4905.jpg", "/images/photography/IMG_6156.jpg", "/images/photography/IMG_5132.jpg", "/images/photography/IMG_7063.jpg", "/images/photography/IMG_7261.jpg", "/images/photography/P1250823.jpg"], caption: "Scenes from Závora, Mozambique", id: "zavora", mapLink: "/map/#zavora" },
  { photos: ["/images/photography/UnderwaterMacro.png", "/images/photography/IMG_6257.jpg", "/images/photography/IMG_4927.jpg", "/images/photography/IMG_6176.jpg", "/images/photography/IMG_5736.jpg", "/images/photography/IMG_7224.jpg", "/images/photography/P1250779.jpg"], caption: "Underwater macro (ok, except for that one bee)" },
  { photos: ["/images/photography/IMG_6375.jpg"] },
  { photos: ["/images/photography/IMG_7117.jpg"] },
  { photos: ["/images/photography/IMG_9902.jpg", "/images/photography/Josephines.jpg", "/images/photography/IMG_9884.jpg", "/images/photography/Maya24Bday.jpg"], caption: "Springtime back home" },
  { photos: ["/images/photography/P1230432.jpg"] },
  { photos: ["/images/photography/IMG_4483.jpg"] },
  { photos: ["/images/photography/P2171886.jpg"] },
  { photos: ["/images/photography/reindeer1.jpg", "/images/photography/Bergen.jpg", "/images/photography/CoqAuVin.jpg", "/images/photography/MayaReindeer.jpg", "/images/photography/Fjords.jpg"], caption: "Christmas 2025 in Norway!" },
  { photos: ["/images/map/JoeyMayaFiji.jpg", "/images/map/Fiji2.jpg"], caption: "Pacific Harbor, Fiji", id: "fiji", mapLink: "/map/#fiji" },
  { photos: ["/images/map/PortLincoln1.JPG", "/images/map/PortLincoln2.JPG", "/images/map/PortLincoln3.JPG", "/images/map/PortLincoln4.JPG"], caption: "Port Lincoln, Australia", id: "port-lincoln", mapLink: "/map/#port-lincoln" },
  { photos: ["/images/map/Cephalonia1.jpg"], caption: "Cephalonia, Greece", id: "cephalonia", mapLink: "/map/#cephalonia" },
  { photos: ["/images/map/Sagres1.JPG", "/images/map/Sagres2.JPG"], caption: "Sagres, Portugal", id: "sagres", mapLink: "/map/#sagres" },
  { photos: ["/images/map/Aix1.jpg", "/images/map/Aix2.jpg", "/images/map/Aix5.jpg"], caption: "Aix-en-Provence, France", id: "aix", mapLink: "/map/#aix" },
  { photos: ["/images/map/Faro1.JPG", "/images/map/Faro2.JPG", "/images/map/Faro3.jpg"], caption: "Faro, Portugal", id: "faro", mapLink: "/map/#faro" },
  { photos: ["/images/map/Cartagena1.JPG", "/images/map/Cartagena2.jpg", "/images/map/Cartagena3.JPG"], caption: "Cartagena, Colombia", id: "cartagena", mapLink: "/map/#cartagena" },
  { photos: ["/images/map/Bogota1.jpg", "/images/map/Bogota2.JPG", "/images/map/Bogota3.JPG", "/images/map/Bogota4.JPG"], caption: "Bogotá, Colombia", id: "bogota", mapLink: "/map/#bogota" }
];

let currentTile = 0;
let currentPhoto = 0;

function renderGrid() {
  const grid = document.getElementById('photo-grid');
  tiles.forEach((tile, i) => {
    const div = document.createElement('div');
    div.className = 'photo-tile' + (tile.photos.length > 1 ? ' is-stack' : '') + (tile.size ? ' size-' + tile.size : '');
    if (tile.id) div.id = tile.id;
    const img = document.createElement('img');
    img.src = tile.photos[0];
    img.alt = '';
    div.appendChild(img);
    if (tile.photos.length > 1) {
      const badge = document.createElement('span');
      badge.className = 'stack-badge';
      badge.textContent = '+' + (tile.photos.length - 1);
      div.appendChild(badge);
    }
    div.addEventListener('click', () => openModal(i));
    grid.appendChild(div);
  });
}

function openModal(tileIndex) {
  currentTile = tileIndex;
  currentPhoto = 0;
  updateModal();
  document.getElementById('photo-modal').classList.add('open');
}

function closeModal() {
  document.getElementById('photo-modal').classList.remove('open');
}

function navModal(direction) {
  const photos = tiles[currentTile].photos;
  currentPhoto = (currentPhoto + direction + photos.length) % photos.length;
  updateModal();
}

function updateModal() {
  const tile = tiles[currentTile];
  const captionEl = document.getElementById('modal-caption');
  if (captionEl) captionEl.textContent = tile.caption || '';
  document.getElementById('modal-img').style.backgroundImage = "url('" + tile.photos[currentPhoto] + "')";
  const multi = tile.photos.length > 1;
  document.getElementById('modal-counter').textContent = multi ? (currentPhoto + 1) + ' / ' + tile.photos.length : '';
  document.querySelector('.modal-prev').style.display = multi ? 'block' : 'none';
  document.querySelector('.modal-next').style.display = multi ? 'block' : 'none';
  const mapLinkEl = document.getElementById('modal-map-link');
  if (mapLinkEl) {
    if (tile.mapLink) { mapLinkEl.href = tile.mapLink; mapLinkEl.style.display = 'block'; }
    else { mapLinkEl.style.display = 'none'; }
  }
}

document.addEventListener('keydown', (e) => {
  if (!document.getElementById('photo-modal').classList.contains('open')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') navModal(-1);
  if (e.key === 'ArrowRight') navModal(1);
});

renderGrid();

if (window.location.hash) {
  const id = window.location.hash.slice(1);
  const tileIndex = tiles.findIndex(t => t.id === id);
  if (tileIndex !== -1) openModal(tileIndex);
}
