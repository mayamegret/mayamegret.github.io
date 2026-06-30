const tiles = [
  { photos: ["/images/photography/MagazineCollage.png"] },
  { photos: ["/images/photography/IMG_0593.jpg", "/images/photography/IMG_0599.jpg", "/images/photography/IMG_1093.jpg"], caption: "Beach scenes, Kona, Hawai'i", id: "honolulu", mapLink: "/map/#honolulu" },
  { photos: ["/images/photography/IMG_0406.jpg"] },
  { photos: ["/images/photography/IMG_0455.jpg", "/images/photography/IMG_0475.jpg"], caption: "Pencil urchins!" },
  { photos: ["/images/photography/IMG_0609.jpg"] },
  { photos: ["/images/photography/IMG_0931.jpg", "/images/photography/IMG_1593.jpg"] },
  { photos: ["/images/photography/IMG_2277.jpg"] },
  { photos: ["/images/photography/IMG_2347.jpg"] },
  { photos: ["/images/photography/IMG_9902.jpg", "/images/photography/Josephines.jpg", "/images/photography/IMG_9884.jpg", "/images/photography/Maya24Bday.jpg"], caption: "Springtime back home" },
  { photos: ["/images/photography/ElSalvador2.JPG", "/images/photography/ElSalvador1.jpg"], caption: "Celebrating my best friend in El Salvador", id: "el-salvador", mapLink: "/map/#el-salvador" },
  { photos: ["/images/photography/IMG_6375.jpg", "/images/photography/P1230432.jpg", "/images/photography/P2171886.jpg"] },
  { photos: ["/images/photography/IMG_7117.jpg"] },
  { photos: ["/images/photography/IMG_4483.jpg"] },
  { photos: ["/images/map/Copenhagen1.jpg", "/images/map/Copenhagen2.JPG", "/images/map/Copenhagen3.jpg", "/images/map/Copenhagen4.JPG", "/images/map/Copenhagen5.jpeg", "/images/map/Copenhagen6.jpg", "/images/map/Copenhagen7.jpg"], caption: "Copenhagen, Denmark", id: "copenhagen", mapLink: "/map/#copenhagen" },
  { photos: ["/images/map/Bergen1.JPG", "/images/map/Bergen2.JPG", "/images/map/Bergen3.jpg", "/images/map/Bergen4.JPG"], caption: "Bergen, Norway", id: "bergen", mapLink: "/map/#bergen" },
  { photos: ["/images/map/Tromso1.jpg", "/images/map/Tromso2.jpg", "/images/map/Tromso3.JPG", "/images/map/Tromso4.JPG"], caption: "Tromsø, Norway", id: "tromso", mapLink: "/map/#tromso" },
  { photos: ["/images/map/Oslo1.JPG", "/images/map/Oslo2.jpg", "/images/map/Oslo3.JPG", "/images/map/Oslo4.JPG", "/images/map/Oslo5.jpg"], caption: "Oslo, Norway", id: "oslo", mapLink: "/map/#oslo" },
  { photos: ["/images/photography/reindeer1.jpg", "/images/photography/Bergen.jpg", "/images/photography/CoqAuVin.jpg", "/images/photography/MayaReindeer.jpg", "/images/photography/Fjords.jpg"], caption: "Christmas 2025 in Norway!" },
  { photos: ["/images/map/Bonaire1.JPG", "/images/map/Bonaire2.JPG", "/images/map/Bonaire3.JPG", "/images/map/Bonaire4.JPG", "/images/map/Bonaire5.JPG", "/images/map/Bonaire6.JPG", "/images/map/Bonaire7.JPG", "/images/map/Bonaire8.JPG", "/images/map/Bonaire9.JPG"], caption: "Bonaire, Netherlands Antilles", id: "bonaire", mapLink: "/map/#bonaire" },
  { photos: ["/images/photography/IMG_4905.jpg", "/images/photography/IMG_6156.jpg", "/images/photography/IMG_5132.jpg", "/images/photography/IMG_7063.jpg", "/images/photography/IMG_7261.jpg", "/images/photography/P1250823.jpg"], caption: "Scenes from Závora, Mozambique", id: "zavora", mapLink: "/map/#zavora" },
  { photos: ["/images/photography/UnderwaterMacro.png", "/images/photography/IMG_6257.jpg", "/images/photography/IMG_4927.jpg", "/images/photography/IMG_6176.jpg", "/images/photography/IMG_5736.jpg", "/images/photography/IMG_7224.jpg", "/images/photography/P1250779.jpg"], caption: "Underwater macro (ok, except for that one bee)" },
  { photos: ["/images/map/Safari1.JPG", "/images/map/Safari2.JPG", "/images/map/Safari3.jpg", "/images/map/Safari4.jpg", "/images/map/Safari5.JPG", "/images/map/Safari6.jpg", "/images/map/Safari7.JPG", "/images/map/Safari8.jpg", "/images/map/Safari9.JPG", "/images/map/Safari10.JPG", "/images/map/Safari11.jpg", "/images/map/Safari12.jpg", "/images/map/Safari13.JPG"], caption: "Timbavati Reserve, South Africa", id: "timbavati", mapLink: "/map/#timbavati" },
  { photos: ["/images/map/Aix1.jpg", "/images/map/Aix2.jpg", "/images/map/Aix3.jpg", "/images/map/Aix4.jpg", "/images/map/Aix5.jpg", "/images/map/Aix6.jpg", "/images/map/Aix7.jpg", "/images/map/Aix8.jpg", "/images/map/Aix9.jpg", "/images/map/Aix10.jpg", "/images/map/Aix11.jpg"], caption: "Aix-en-Provence, France", id: "aix", mapLink: "/map/#aix" },
  { photos: ["/images/map/Sagres1.JPG", "/images/map/Sagres2.JPG"], caption: "Sagres, Portugal", id: "sagres", mapLink: "/map/#sagres" },
  { photos: ["/images/map/Faro1.JPG", "/images/map/Faro2.JPG", "/images/map/Faro3.jpg"], caption: "Faro, Portugal", id: "faro", mapLink: "/map/#faro" },
  { photos: ["/images/photography/Blitzingen1.JPG", "/images/photography/Blitzingen2.JPG", "/images/photography/Blitzingen3.JPG", "/images/photography/Blitzingen4.jpg", "/images/photography/Blitzingen5.JPG", "/images/photography/Blitzingen6.jpg"], caption: "A wonderful Swissmas Christmas! The four of us spent a week in a little chalet in the countryside of Switzerland, it was so magical!", id: "blitzingen", mapLink: "/map/#blitzingen" },
  { photos: ["/images/photography/SwissAlps2.jpg", "/images/photography/SwissAlps1.JPG", "/images/photography/SwissAlps3.JPG", "/images/photography/SwissAlps4.JPG"], caption: "The Swiss Alps", mapLink: "/map/#blitzingen" },
  { photos: ["/images/map/Bogota1.jpg", "/images/map/Bogota2.JPG", "/images/map/Bogota3.JPG", "/images/map/Bogota4.JPG"], caption: "Bogotá, Colombia", id: "bogota", mapLink: "/map/#bogota" },
  { photos: ["/images/map/Cartagena1.JPG", "/images/map/Cartagena2.jpg", "/images/map/Cartagena3.JPG"], caption: "Cartagena, Colombia", id: "cartagena", mapLink: "/map/#cartagena" },
  { photos: ["/images/photography/LJ1.jpg", "/images/photography/LJ2.jpg", "/images/photography/LJ3.jpg", "/images/photography/LJ4.jpg", "/images/photography/LJ5.jpg", "/images/photography/LJ6.jpg"], caption: "Between classes at Scripps, I would visit the tide pools of La Jolla!", id: "la-jolla", mapLink: "/map/#la-jolla" },
  { photos: ["/images/photography/Huntley1.JPG", "/images/photography/Huntley2.JPG", "/images/photography/Huntley3.JPG", "/images/photography/Huntley4.JPG"], caption: "Some cute critters from the park" },
  { photos: ["/images/photography/STConservation1.jpg", "/images/photography/STConservation2.jpg", "/images/photography/STConservation3.jpg", "/images/photography/STConservation4.JPG", "/images/photography/STConservation5.jpg", "/images/photography/STConservation6.jpg"], caption: "I spent a month volunteering with Wildlife Sense, working on their sea turtle conservation program! It was an incredible learning experience, helping locate and protect turtle nests, relocate endangered nests, help hatchlings to sea, and help with beach cleanups and beach mapping!", id: "argostoli", mapLink: "/map/#argostoli" },
  { photos: ["/images/photography/Hvar1.JPG", "/images/photography/Hvar2.JPG", "/images/photography/Hvar3.jpg", "/images/photography/Hvar4.JPG"], caption: "My sister and I enjoyed a lovely week in Croatia together beginning in Hvar!", id: "hvar", mapLink: "/map/#hvar" },
  { photos: ["/images/photography/Vis1.jpg", "/images/photography/Vis2.JPG", "/images/photography/Vis3.JPG"], caption: "While in Hvar, Tess and I did a daytrip to Vis and explored the adorable little island!", id: "vis", mapLink: "/map/#vis" },
  { photos: ["/images/photography/Dubrovnik1.jpg", "/images/photography/Dubrovnik2.jpg", "/images/photography/Dubrovnik3.jpg", "/images/photography/Dubrovnik4.jpg", "/images/photography/Dubrovnik5.jpg", "/images/photography/Dubrovnik6.jpg"], caption: "Tess and I closed out our sister trip with a few days in Dubrovnik, exploring the old town and the beaches.", id: "dubrovnik", mapLink: "/map/#dubrovnik" },
  { photos: ["/images/map/Cephalonia1.jpg"], caption: "Cephalonia, Greece", id: "cephalonia", mapLink: "/map/#cephalonia" },
  { photos: ["/images/photography/Greece1.jpg", "/images/photography/Greece2.jpg", "/images/photography/Greece3.jpg", "/images/photography/Greece4.JPG", "/images/photography/Greece5.jpg", "/images/photography/Greece6.JPG"], caption: "Cephalonia, Greece", mapLink: "/map/#cephalonia" },
  { photos: ["/images/photography/GreeceFriends1.JPG", "/images/photography/GreeceFriends2.jpg", "/images/photography/GreeceFriends3.JPG", "/images/photography/GreeceFriends4.JPG", "/images/photography/GreeceFriends5.jpg"], caption: "Friends in Greece", mapLink: "/map/#cephalonia" },
  { photos: ["/images/map/JoeyMayaFiji.jpg", "/images/map/Fiji2.jpg"], caption: "Pacific Harbor, Fiji", id: "fiji", mapLink: "/map/#fiji" },
  { photos: ["/images/map/PortLincoln1.JPG", "/images/map/PortLincoln2.JPG", "/images/map/PortLincoln3.JPG", "/images/map/PortLincoln4.JPG"], caption: "Port Lincoln, Australia", id: "port-lincoln", mapLink: "/map/#port-lincoln" }
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
