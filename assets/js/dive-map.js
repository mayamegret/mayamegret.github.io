const locations = [
  {
    name: "Virginia",
    country: "USA",
    coords: [36.85, -75.98],
    type: "dive",
    dates: "July 24-25th, 2022",
    description: "Where I completed my Open Water certification with dad! We got certified the same summer we built our pond in the backyard of the home I grew up in. A very special time that I look back on so fondly.",
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
    photos: ["/images/map/JoeyMayaFiji.jpg", "/images/map/Fiji2.jpg"],
    galleryId: "fiji"
  },
  {
    name: "Port Lincoln",
    country: "Australia",
    coords: [-34.73, 135.88],
    type: "visit",
    dates: "November 20-22nd, 2022",
    description: "We came for the great white sharks, we stayed for the koalas. A really special time in my heart.",
    species: [],
    photos: ["/images/map/PortLincoln1.JPG", "/images/map/PortLincoln2.JPG", "/images/map/PortLincoln3.JPG", "/images/map/PortLincoln4.JPG"],
    galleryId: "port-lincoln"
  },
  {
    name: "Cephalonia",
    country: "Greece",
    coords: [38.18, 20.57],
    type: "dive",
    dates: "July 22nd, 2023",
    description: "During my fieldwork in Greece monitoring nesting sea turtles and their hatchlings, I went diving! It was lovely, warm, and I saw a few nudis!",
    species: [],
    photos: ["/images/map/Cephalonia1.jpg"],
    galleryId: "cephalonia"
  },
  {
    name: "Isla Bastimentos",
    country: "Panama",
    coords: [9.35, -82.17],
    type: "dive",
    dates: "March 27th, 2024",
    description: "Brynn, dad, and I went diving together on our family trip to Panama! It was stunning, had a great great time, even did a night dive!",
    species: [],
    photos: []
  },
  {
    name: "Cartagena",
    country: "Colombia",
    coords: [10.39, -75.48],
    type: "visit",
    dates: "July 4-6th, 2024",
    description: "",
    species: [],
    photos: ["/images/map/Cartagena1.JPG", "/images/map/Cartagena2.jpg", "/images/map/Cartagena3.JPG"],
    galleryId: "cartagena"
  },
  {
    name: "Bogotá",
    country: "Colombia",
    coords: [4.71, -74.07],
    type: "visit",
    dates: "July 30 - August 3rd, 2024",
    description: "",
    species: [],
    photos: ["/images/map/Bogota1.jpg", "/images/map/Bogota2.JPG", "/images/map/Bogota3.JPG", "/images/map/Bogota4.JPG"],
    galleryId: "bogota"
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
    photos: ["/images/map/Sagres1.JPG", "/images/map/Sagres2.JPG"],
    galleryId: "sagres"
  },
  {
    name: "Aix-en-Provence",
    country: "France",
    coords: [43.53, 5.45],
    type: "visit",
    dates: "April 10-15th, 2025",
    description: "Dad and I went to visit family in Aix for a few days, it was so so lovely!! We ate amazing food, we explored the markets every morning, and spent the rest of our time with loved ones we hadn't seen in too long.",
    species: [],
    photos: ["/images/map/Aix1.jpg", "/images/map/Aix2.jpg", "/images/map/Aix5.jpg"],
    galleryId: "aix"
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
    photos: [],
    galleryId: "zavora"
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
    name: "Faro",
    country: "Portugal",
    coords: [37.02, -7.93],
    type: "visit",
    dates: "September 2025 - June 2026",
    description: "Lived in Faro while I completed my masters courses at UAlg! I had a cute apartment downtown, spent plenty of time at the beach, and was lucky enough to visit Lisbon and Nazare while living there!",
    species: [],
    photos: ["/images/map/Faro1.JPG", "/images/map/Faro2.JPG", "/images/map/Faro3.jpg"],
    galleryId: "faro"
  },
  {
    name: "Závora",
    country: "Mozambique",
    coords: [-24.30, 35.20],
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
    photos: [],
    galleryId: "honolulu"
  }
];

const map = L.map('dive-map', { minZoom: 2 }).setView([20, 10], 2);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: '&copy; Esri &copy; National Geographic',
  maxZoom: 16
}).addTo(map);

const diveIcon = L.divIcon({
  html: '<i class="fas fa-anchor" style="font-size:18px; color:#1a1a1a;"></i>',
  className: 'map-icon',
  iconSize: [20, 20],
  iconAnchor: [10, 10],
  popupAnchor: [0, -10]
});

const visitIcon = L.divIcon({
  html: '<i class="fas fa-map-marker-alt" style="font-size:22px; color:#1a1a1a;"></i>',
  className: 'map-icon',
  iconSize: [20, 26],
  iconAnchor: [10, 26],
  popupAnchor: [0, -26]
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
  return html;
}

locations.forEach(loc => {
  const icon = loc.type === 'dive' ? diveIcon : visitIcon;
  L.marker(loc.coords, { icon })
    .bindPopup(buildPopup(loc), { maxWidth: 280 })
    .addTo(map);
});

if (window.location.hash) {
  const id = window.location.hash.slice(1);
  const loc = locations.find(l => l.galleryId === id);
  if (loc) map.setView(loc.coords, 8);
}
