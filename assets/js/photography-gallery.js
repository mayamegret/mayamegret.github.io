const tiles = [
  { photos: ["/images/photography/MagazineCollage.png"] },
  { photos: ["/images/photography/IMG_0593.jpg", "/images/photography/IMG_0599.jpg", "/images/photography/IMG_1093.jpg"], caption: "Beach scenes, Kona, Hawai'i", id: "honolulu", mapLink: "/map/#honolulu" },
  { photos: ["/images/photography/IMG_0406.jpg"] },
  { photos: ["/images/photography/IMG_0455.jpg", "/images/photography/IMG_0475.jpg"], caption: "Pencil urchins!" },
  { photos: ["/images/photography/IMG_0609.jpg"] },
  { photos: ["/images/photography/IMG_0931.jpg", "/images/photography/IMG_1593.jpg"] },
  { photos: ["/images/photography/NudiCollage1.png"], caption: "Some of my fav nudis from Mozambique" },
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
  { photos: ["/images/photography/reindeer1.jpg", "/images/photography/Bergen.jpg", "/images/photography/CoqAuVin.jpg", "/images/photography/MayaReindeer.jpg", "/images/photography/Fjords.jpg"], caption: "Christmas 2025 in Norway on film!" },
  { photos: ["/images/map/Bonaire1.JPG", "/images/map/Bonaire2.JPG", "/images/map/Bonaire3.JPG", "/images/map/Bonaire4.JPG", "/images/map/Bonaire5.JPG", "/images/map/Bonaire6.JPG", "/images/map/Bonaire7.JPG", "/images/map/Bonaire8.JPG", "/images/map/Bonaire9.JPG"], caption: "Bonaire, Netherlands Antilles for mommas birthday", id: "bonaire", mapLink: "/map/#bonaire" },
  { photos: ["/images/photography/IMG_4905.jpg", "/images/photography/IMG_6156.jpg", "/images/photography/IMG_5132.jpg", "/images/photography/IMG_7063.jpg", "/images/photography/IMG_7261.jpg", "/images/photography/P1250823.jpg"], caption: "Scenes from Závora, Mozambique", id: "zavora", mapLink: "/map/#zavora" },
  { photos: ["/images/photography/UnderwaterMacro.png", "/images/photography/IMG_6257.jpg", "/images/photography/IMG_4927.jpg", "/images/photography/IMG_6176.jpg", "/images/photography/IMG_5736.jpg", "/images/photography/IMG_7224.jpg", "/images/photography/P1250779.jpg"], caption: "Underwater macro (ok, except for that one bee)" },
  { photos: ["/images/map/Safari1.JPG", "/images/map/Safari2.JPG", "/images/map/Safari3.jpg", "/images/map/Safari4.jpg", "/images/map/Safari5.JPG", "/images/map/Safari6.jpg", "/images/map/Safari7.JPG", "/images/map/Safari8.jpg", "/images/map/Safari9.JPG", "/images/map/Safari10.JPG", "/images/map/Safari11.jpg", "/images/map/Safari12.jpg", "/images/map/Safari13.JPG"], caption: "Timbavati Reserve, South Africa", id: "timbavati", mapLink: "/map/#timbavati" },
  { photos: ["/images/map/Aix1.jpg", "/images/map/Aix2.jpg", "/images/map/Aix3.jpg", "/images/map/Aix4.jpg", "/images/map/Aix5.jpg", "/images/map/Aix6.jpg", "/images/map/Aix7.jpg", "/images/map/Aix8.jpg", "/images/map/Aix9.jpg", "/images/map/Aix10.jpg", "/images/map/Aix11.jpg"], caption: "Aix-en-Provence, France", id: "aix", mapLink: "/map/#aix" },
  { photos: ["/images/map/Sagres1.JPG", "/images/map/Sagres2.JPG"], caption: "Sagres, Portugal", id: "sagres", mapLink: "/map/#sagres" },
  { photos: ["/images/map/Faro1.JPG", "/images/map/Faro2.JPG", "/images/map/Faro3.jpg"], caption: "Faro, Portugal", id: "faro", mapLink: "/map/#faro" },
  { photos: ["/images/photography/Blitzingen1.JPG", "/images/photography/Blitzingen2.JPG", "/images/photography/Blitzingen3.JPG", "/images/photography/Blitzingen4.jpg", "/images/photography/Blitzingen5.JPG", "/images/photography/Blitzingen6.jpg"], caption: "A wonderful Swissmas Christmas! The four of us spent a week in a little chalet in the countryside of Switzerland, it was so magical!", id: "blitzingen", mapLink: "/map/#blitzingen" },
  { photos: ["/images/photography/SwissAlps2.jpg", "/images/photography/SwissAlps1.JPG", "/images/photography/SwissAlps3.JPG", "/images/photography/SwissAlps4.JPG"], caption: "The Swiss Alps", mapLink: "/map/#blitzingen" },
  { photos: ["/images/map/Cartagena1.JPG", "/images/map/Cartagena2.jpg", "/images/map/Cartagena3.JPG"], caption: "Cartagena, Colombia", id: "cartagena", mapLink: "/map/#cartagena" },
  { photos: ["/images/map/Bogota1.jpg", "/images/map/Bogota2.JPG", "/images/map/Bogota3.JPG", "/images/map/Bogota4.JPG"], caption: "Bogotá, Colombia", id: "bogota", mapLink: "/map/#bogota" },
  { photos: ["/images/photography/Grad1.JPG", "/images/photography/Grad2.JPG", "/images/photography/Grad3.JPG", "/images/photography/Grad4.JPG", "/images/photography/Grad5.JPG"], caption: "For my BS graduation from UCSD, I had so many loved ones come to celebrate me! It was such a special time, I got to show everyone my favorite beaches and restaurants and I truly felt so loved and supported!", id: "graduation", mapLink: "/map/#graduation" },
  { photos: ["/images/photography/Bday2024.1.JPG", "/images/photography/Bday2024.2.JPG", "/images/photography/Bday2024.3.JPG"], caption: "Dads 60th birthday and my 22nd!" },
  { photos: ["/images/photography/PanamaCity1.JPG", "/images/photography/PanamaCity2.JPG"], caption: "First stop on our spring break in Panama was Panama City!", id: "panama-city", mapLink: "/map/#panama-city" },
  { photos: ["/images/photography/IB1.JPG", "/images/photography/IB2.jpg", "/images/photography/IB3.JPG", "/images/photography/IB4.jpg", "/images/photography/IB5.JPG", "/images/photography/IB6.JPG"], caption: "We spent the rest of our time in Panama in Isla Bastimentos, sleeping in bungalows over the water, watching eagle rays swim by at dinner, snorkeling and reading all day, and we even went diving! We also saw sloths and really cool frogs.", id: "isla-bastimentos", mapLink: "/map/#isla-bastimentos" },
  { photos: ["/images/photography/Napa1.JPG", "/images/photography/Napa2.JPG", "/images/photography/Napa3.JPG", "/images/photography/Napa4.JPG", "/images/photography/Napa5.jpg", "/images/photography/Napa6.jpg", "/images/photography/Napa7.jpg"], caption: "Girls trip! I took my mom and sister on a girls trip to Napa Valley, where we had lovely tours of the wine country and did a 4am hot air balloon ride! This was such a special trip because as soon as we got off the hot air balloon, I received the notification that I had been accepted to the graduate program at UAlg! It was a weekend of laughter and celebration!!", id: "napa", mapLink: "/map/#napa" },
  { photos: ["/images/photography/SDSunset1.jpg", "/images/photography/SDSunset2.jpg"], caption: "Sunsets in San Diego" },
  { photos: ["/images/photography/SeniorYear1.jpg", "/images/photography/SeniorYear2.jpg", "/images/photography/SeniorYear3.jpg", "/images/photography/SeniorYear4.JPG", "/images/photography/SeniorYear5.jpeg", "/images/photography/SeniorYear6.jpg"], caption: "Senior year at UCSD included a spring break trip to Panama with my family and Brynn, going home for a weekend to celebrate my dads 60th and my 22nd birthdays, lots of shifts working at the Birch Aquarium, plenty of hours at the tide pools and beaches of La Jolla, a girls trip to Napa Valley, a trip to see my grandpa in St. Petersburg Florida, and lots of visits from my parents in SD. I enjoyed all my favorite restaurants from Creme de la Crepe to Dirty Birds, the Little Italy Farmers Market most Saturdays, Kobeys Swap Meet most Sundays, lots of lab work, baseball games (go Padres!), jazz nights, sailboat rides and lots of time with friends!", id: "senior-year", mapLink: "/map/#senior-year" },
  { photos: ["/images/photography/LJ1.jpg", "/images/photography/LJ2.jpg", "/images/photography/LJ3.jpg", "/images/photography/LJ4.jpg", "/images/photography/LJ5.jpg", "/images/photography/LJ6.jpg"], caption: "Between classes at Scripps, I would visit the tide pools of La Jolla!", id: "la-jolla", mapLink: "/map/#la-jolla" },
  { photos: ["/images/photography/Huntley1.JPG", "/images/photography/Huntley2.JPG", "/images/photography/Huntley3.JPG", "/images/photography/Huntley4.JPG"], caption: "Some cute critters from the park" },
  { photos: ["/images/photography/STConservation1.jpg", "/images/photography/STConservation2.jpg", "/images/photography/STConservation3.jpg", "/images/photography/STConservation4.JPG", "/images/photography/STConservation5.jpg", "/images/photography/STConservation6.jpg"], caption: "I spent a month volunteering with Wildlife Sense, working on their sea turtle conservation program! It was an incredible learning experience, helping locate and protect turtle nests, relocate endangered nests, help hatchlings to sea, and help with beach cleanups and beach mapping!", id: "argostoli", mapLink: "/map/#argostoli" },
  { photos: ["/images/photography/Hvar1.JPG", "/images/photography/Hvar2.JPG", "/images/photography/Hvar3.jpg", "/images/photography/Hvar4.JPG"], caption: "My sister and I enjoyed a lovely week in Croatia together beginning in Hvar!", id: "hvar", mapLink: "/map/#hvar" },
  { photos: ["/images/photography/Vis1.jpg", "/images/photography/Vis2.JPG", "/images/photography/Vis3.JPG"], caption: "While in Hvar, Tess and I did a daytrip to Vis and explored the adorable little island!", id: "vis", mapLink: "/map/#vis" },
  { photos: ["/images/photography/Dubrovnik1.jpg", "/images/photography/Dubrovnik2.jpg", "/images/photography/Dubrovnik3.jpg", "/images/photography/Dubrovnik4.jpg", "/images/photography/Dubrovnik5.jpg", "/images/photography/Dubrovnik6.jpg"], caption: "Tess and I closed out our sister trip with a few days in Dubrovnik, exploring the old town and the beaches.", id: "dubrovnik", mapLink: "/map/#dubrovnik" },
  { photos: ["/images/map/Cephalonia1.jpg"], caption: "Cephalonia, Greece", id: "cephalonia", mapLink: "/map/#cephalonia" },
  { photos: ["/images/photography/Greece1.jpg", "/images/photography/Greece2.jpg", "/images/photography/Greece3.jpg", "/images/photography/Greece4.JPG", "/images/photography/Greece5.jpg", "/images/photography/Greece6.JPG"], caption: "Cephalonia, Greece", mapLink: "/map/#cephalonia" },
  { photos: ["/images/photography/GreeceFriends1.JPG", "/images/photography/GreeceFriends2.jpg", "/images/photography/GreeceFriends3.JPG", "/images/photography/GreeceFriends4.JPG", "/images/photography/GreeceFriends5.jpg"], caption: "Friends in Greece", mapLink: "/map/#cephalonia" },
  { photos: ["/images/photography/JuniorYear1.jpg", "/images/photography/JuniorYear2.JPG", "/images/photography/JuniorYear3.jpg"], caption: "Junior year at UCSD started off with my semester abroad at UQ, and then in January I went back to regular classes in San Diego, living with my best friend and falling in love with the city all over again! Brynn, my family and I all visited Mexico for spring break, and my sister and best friend from home visited me for my birthday! It was a great year.", id: "junior-year", mapLink: "/map/#junior-year" },
  { photos: ["/images/photography/GC1.JPG", "/images/photography/GC2.JPG", "/images/photography/GC3.JPG", "/images/photography/GC4.JPG"], caption: "To kick off senior year, my dad and I drove my car from Washington to San Diego! It was the best road trip ever. We stopped at the Grand Canyon and had a great time dressing up in fun hats and enjoying the view.", id: "grand-canyon", mapLink: "/map/#grand-canyon" },
  { photos: ["/images/photography/Sedona1.JPG", "/images/photography/Sedona2.JPG", "/images/photography/Sedona3.JPG", "/images/photography/Sedona4.JPG"], caption: "To kick off senior year, my dad and I drove my car from Washington to San Diego! It was the best road trip ever. We stopped in Sedona to enjoy beautiful scenery and fun hikes.", id: "sedona", mapLink: "/map/#sedona" },
  { photos: ["/images/photography/Mexico1.jpg", "/images/photography/Mexico2.JPG", "/images/photography/Mexico3.jpg"], caption: "For spring break junior year, my family, Brynn and I all went to Cabo San Lucas and did a whale watching tour where we had the most incredible interaction with these whales!", id: "cabo", mapLink: "/map/#cabo" },
  { photos: ["/images/map/JoeyMayaFiji.jpg", "/images/map/Fiji2.jpg"], caption: "Pacific Harbor, Fiji", id: "fiji", mapLink: "/map/#fiji" },
  { photos: ["/images/map/PortLincoln1.JPG", "/images/map/PortLincoln2.JPG", "/images/map/PortLincoln3.JPG", "/images/map/PortLincoln4.JPG"], caption: "Port Lincoln, Australia", id: "port-lincoln", mapLink: "/map/#port-lincoln" },
  { photos: ["/images/photography/Heron3.jpg", "/images/photography/Heron1.jpg", "/images/photography/Heron2.JPG", "/images/photography/Heron4.jpg", "/images/photography/Heron5.jpg", "/images/photography/Heron6.jpg"], caption: "We closed out our program with a bang for our last Marine Biology field trip to Heron Island, where we spent over a week living at the lab. Between lectures and lab work, we snorkeled at least 3 times a day, at sunrise, mid afternoon, and sunset. We swam with so many sharks, rays, nudibranchs, octopus, squid, guitarfish, eels, and so much more! My group studied the strength of crabs, comparing their body size and weight to the size and weight of coral rubble they were capable of lifting. It was one of the best weeks of my life.", id: "heron-island", mapLink: "/map/#heron-island" },
  { photos: ["/images/photography/CG1.jpg", "/images/photography/CG2.JPG", "/images/photography/CG3.jpg", "/images/photography/CG4.jpg", "/images/photography/CG5.jpg", "/images/photography/CG6.jpg"], caption: "Our third and last Terrestrial Ecology field trip! This camping trip was stunning, again with lots of hiking and lectures on the riverbanks. Many more kangaroos and wallabys, stunning scenery, and amazing wildlife. A highlight was the thousands (honestly probably upwards of a million) bats that flew over us every evening at dusk. The bats would leave the trees where they were sleeping all day to dip their bellies in the river, hang upside down again in the trees to drink, and eat all of the mosquitos as they flew around. It was an incredible thing to witness!", id: "carnarvon-gorge", mapLink: "/map/#carnarvon-gorge" },
  { photos: ["/images/photography/Melbourne1.jpg", "/images/photography/Melbourne2.jpg", "/images/photography/Melbourne3.jpg", "/images/photography/Melbourne4.jpg", "/images/photography/Melbourne5.JPG", "/images/photography/Melbourne6.jpg"], caption: "During a long weekend, the girls and I went to Melbourne for a quick getaway! We explored the museums, flea markets, the university campus, and lots of good food and shopping!", id: "melbourne", mapLink: "/map/#melbourne" },
  { photos: ["/images/photography/NSI1.jpg", "/images/photography/NSI2.jpg", "/images/photography/NSI3.png", "/images/photography/NSI4.png", "/images/photography/NSI5.jpg"], caption: "Our first Marine Biology field trip was to North Stradbroke Island! We stayed at a lab and got to enjoy the beaches and tide pools between classes and lab work. My group studied the ephemeral tide pools left by stingrays as they forage. We studied the prawn species that colonize the ephemeral tide pools. I also learned to do a cartwheel on the beach with Joey and Sophia, it was a very special afternoon.", id: "north-stradbroke", mapLink: "/map/#north-stradbroke" },
  { photos: ["/images/photography/Lamington2.png", "/images/photography/Lamington7.JPG"], caption: "5am sunrise birch watching" },
  { photos: ["/images/photography/Lamington1.jpg", "/images/photography/Lamington3.png", "/images/photography/Lamington4.png", "/images/photography/Lamington5.jpeg", "/images/photography/Lamington6.png", "/images/photography/Lamington8.JPG"], caption: "Another amazing Terrestrial Ecology field trip with lots of hiking, including stops at waterfalls in between our lectures.", id: "lamington", mapLink: "/map/#lamington" },
  { photos: ["/images/photography/Girraween1.JPG", "/images/photography/Giraween2.JPG", "/images/photography/Giraween3.JPG", "/images/photography/Giraween4.jpg", "/images/photography/Giraween5.JPG"], caption: "My study abroad program in Australia began in Giraween National Park for a three day field trip! It was an amazing start to my stay, Joey and I camped in a tent together, we saw the milky way, we hiked over 10km a day looking for plants and animals and learning about field sampling techniques! It was the first time I saw a wild kangaroo!", id: "giraween", mapLink: "/map/#giraween" },
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
