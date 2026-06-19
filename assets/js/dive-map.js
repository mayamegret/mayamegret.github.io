const locations = [
  {
    name: "Virginia",
    country: "USA",
    coords: [36.85, -75.98],
    type: "dive",
    dates: "July 24-25th, 2022",
    description: "Where I completed my Open Water certification.",
    species: [],
    photos: []
  },
  {
    name: "Cairns",
    country: "Australia",
    coords: [-16.92, 145.78],
    type: "dive",
    dates: "November 13th, 2022",
    description: "First dives on the Great Barrier Reef! Dad and I did our first ocean dives while mom and Tess snorkeled. Australia is where I fell in love with nudibranchs, so it holds a very special place in my heart!!",
    species: [],
    photos: []
  },
  {
    name: "Port Douglas",
    country: "Australia",
    coords: [-16.49, 145.47],
    type: "dive",
    dates: "November 16th, 2022",
    description: "More diving on the GBR.",
    species: [],
    photos: []
  },
  {
    name: "Pacific Harbor, Fiji",
    country: "Fiji",
    coords: [-18.24, 178.07],
    type: "dive",
    dates: "November 29-30th, 2022",
    description: "Joey and I spent a few days in Fiji, where we did 2 coral reef dives and 2 shark dives! It was an amazing adventure together, including hectic gear malfunctions and finding plenty of shark teeth.",
    species: [
      "Ribbon eels <em>(Rhinomuraena quaesita)</em>",
      "Bull sharks <em>(Carcharhinus leucas)</em>",
      "Nurse sharks <em>(Ginglymostoma cirratum)</em>"
    ],
    photos: []
  },
  {
    name: "Cephalonia",
    country: "Greece",
    coords: [38.18, 20.57],
    type: "dive",
    dates: "July 22nd, 2023",
    description: "During my fieldwork in Greece monitoring nesting sea turtles and their hatchlings, I went diving! It was lovely, warm, and I saw a few nudis!",
    species: [],
    photos: []
  },
  {
    name: "Isla Bastimentos",
    country: "Panama",
    coords: [9.35, -82.17],
    type: "dive",
    dates: "March 27th, 2024",
    description: "Brynn, dad, and I went diving together and it was stunning, had a great great time!",
    species: [],
    photos: []
  },
  {
    name: "La Jolla, San Diego",
    country: "USA",
    coords: [32.72, -117.16],
    type: "dive",
    dates: "June 18th, 2024",
    description: "COLD! So cold. First kelp forest dive! Saw so many bright orange garibaldi and playful sea lions!!",
    species: [
      "Garibaldi <em>(Hypsypops rubicundus)</em>",
      "California sea lion <em>(Zalophus californianus)</em>"
    ],
    photos: []
  },
  {
    name: "Sagres",
    country: "Portugal",
    coords: [37.02, -8.94],
    type: "dive",
    dates: "February-May 2025",
    description: "During my masters courses at UAlg, I completed my advanced open water course and completed a scientific diving course with Diogo at CCMAR. It was an amazing experience, I learned so many great skills, improved my buoyancy and trim, and learned how to conduct science underwater! From these dives, I realized how important diving is to my career as a marine biologist and it has led me down the path I am on today!",
    species: [],
    photos: []
  },
  {
    name: "Závora",
    country: "Mozambique",
    coords: [-24.52, 35.20],
    type: "dive",
    dates: "July 2-25th, 2025",
    description: "During my first month in Mozambique, I interned with MAR Divers where I completed 26 scientific dives focused on photo identification of manta rays, nudibranch diversity surveys, and predatory fish surveys. Additionally, my internship focused on Humpback whale migration surveys from the sand dunes and from the boat. We were so lucky to experience a whale swimming by us on one of our last dives!",
    species: [
      "Humpback whale <em>(Megaptera novaeangliae)</em>",
      "Oceanic Manta Ray <em>(Mobula birostris)</em>",
      "Reef Manta Ray <em>(Mobula alfredi)</em>"
    ],
    photos: []
  },
  {
    name: "Guinjata Bay",
    country: "Mozambique",
    coords: [-24.07, 35.48],
    type: "dive",
    dates: "July 13th, 2025",
    description: "Spent a night in Guinjata doing a receiver retrieval, it was a lovely time.",
    species: [],
    photos: []
  },
  {
    name: "Závora",
    country: "Mozambique",
    coords: [-24.53, 35.21],
    type: "dive",
    dates: "January-February 2026",
    description: "I spent 6 weeks back in Závora to collect the data for my thesis research! I completed 45 scientific dive surveys comparing three different SCUBA-based sampling methodologies for assessing the abundance and species diversity of nudibranchs across 3 different rocky reef sites. It was a spectacular time, I collected data on the size, species, depth, substrate, any additional observations, and photographs of 343 nudibranchs! I am extremely grateful for the MAR Team, especially Nakia, Emily, Ed, and Patrick for all of their help, I truly couldn't have done it without them.",
    species: [
      "Oceanic Manta Ray <em>(Mobula birostris)</em>",
      "Reef Manta Ray <em>(Mobula alfredi)</em>"
    ],
    photos: []
  },
  {
    name: "Honolulu",
    country: "Hawai'i, USA",
    coords: [21.31, -157.86],
    type: "dive",
    dates: "May 2026 - Present",
    description: "I moved to Hawai'i as I finish up my masters thesis to get my Divemaster certification with Hawaiian Diving Adventures! It began with getting Stress & Rescue certified, and then I began my Divemaster program.",
    species: [],
    photos: []
  }
];

const map = L.map('dive-map').setView([20, 10], 2);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: '&copy; Esri &copy; National Geographic',
  maxZoom: 16
}).addTo(map);

const diveIcon = L.divIcon({
  html: '<div class="dive-pin">🤿</div>',
  className: '',
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -18]
});

const visitIcon = L.divIcon({
  html: '<div class="visit-pin">📍</div>',
  className: '',
  iconSize: [28, 28],
  iconAnchor: [14, 14],
  popupAnchor: [0, -16]
});

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
    html += `<div class="popup-photos">`;
    loc.photos.forEach(p => html += `<img src="${p}" alt="">`);
    html += `</div>`;
  }
  return html;
}

locations.forEach(loc => {
  const icon = loc.type === 'dive' ? diveIcon : visitIcon;
  L.marker(loc.coords, { icon })
    .bindPopup(buildPopup(loc), { maxWidth: 280 })
    .addTo(map);
});
