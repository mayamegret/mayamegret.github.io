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
    name: "Girraween National Park",
    country: "Australia",
    coords: [-28.88, 151.92],
    type: "visit",
    dates: "August 24-27th, 2022",
    description: "My study abroad program in Australia began in Girraween National Park for a three day field trip! It was an amazing start to my stay, Joey and I camped in a tent together, we saw the milky way, we hiked over 10km a day looking for plants and animals and learning about field sampling techniques! It was the first time I saw a wild kangaroo!",
    species: [],
    photos: ["/images/photography/Girraween1.JPG", "/images/photography/Giraween2.JPG", "/images/photography/Giraween3.JPG", "/images/photography/Giraween4.jpg", "/images/photography/Giraween5.JPG"],
    galleryId: "giraween"
  },
  {
    name: "Lamington National Park",
    country: "Australia",
    coords: [-28.22, 153.13],
    type: "visit",
    dates: "September 5-9th, 2022",
    description: "Another amazing Terrestrial Ecology field trip with lots of hiking, including stops at waterfalls in between our lectures.",
    species: [],
    photos: ["/images/photography/Lamington1.jpg", "/images/photography/Lamington2.png", "/images/photography/Lamington3.png", "/images/photography/Lamington4.png", "/images/photography/Lamington5.jpeg", "/images/photography/Lamington6.png"],
    galleryId: "lamington"
  },
  {
    name: "North Stradbroke Island",
    country: "Australia",
    coords: [-27.50, 153.43],
    type: "visit",
    dates: "September 27 - October 5th, 2022",
    description: "Our first Marine Biology field trip was to North Stradbroke Island! We stayed at a lab and got to enjoy the beaches and tide pools between classes and lab work. My group studied the ephemeral tide pools left by stingrays as they forage. We studied the prawn species that colonize the ephemeral tide pools. I also learned to do a cartwheel on the beach with Joey and Sophia, it was a very special afternoon.",
    species: [],
    photos: ["/images/photography/NSI1.jpg", "/images/photography/NSI2.jpg", "/images/photography/NSI3.png", "/images/photography/NSI4.png", "/images/photography/NSI5.jpg"],
    galleryId: "north-stradbroke"
  },
  {
    name: "Melbourne",
    country: "Australia",
    coords: [-37.81, 144.96],
    type: "visit",
    dates: "October 7-11th, 2022",
    description: "During a long weekend, the girls and I went to Melbourne for a quick getaway! We explored the museums, flea markets, the university campus, and lots of good food and shopping!",
    species: [],
    photos: ["/images/photography/Melbourne1.jpg", "/images/photography/Melbourne2.jpg", "/images/photography/Melbourne3.jpg", "/images/photography/Melbourne4.jpg", "/images/photography/Melbourne5.JPG", "/images/photography/Melbourne6.jpg"],
    galleryId: "melbourne"
  },
  {
    name: "Carnarvon Gorge National Park",
    country: "Australia",
    coords: [-25.08, 148.38],
    type: "visit",
    dates: "October 25-28th, 2022",
    description: "Our third and last Terrestrial Ecology field trip! This camping trip was stunning, again with lots of hiking and lectures on the riverbanks. Many more kangaroos and wallabys, stunning scenery, and amazing wildlife. A highlight was the thousands (honestly probably upwards of a million) bats that flew over us every evening at dusk. The bats would leave the trees where they were sleeping all day to dip their bellies in the river, hang upside down again in the trees to drink, and eat all of the mosquitos as they flew around. It was an incredible thing to witness!",
    species: [],
    photos: ["/images/photography/CG1.jpg", "/images/photography/CG2.JPG", "/images/photography/CG3.jpg", "/images/photography/CG4.jpg", "/images/photography/CG5.jpg", "/images/photography/CG6.jpg"],
    galleryId: "carnarvon-gorge"
  },
  {
    name: "Heron Island",
    country: "Australia",
    coords: [-23.44, 151.92],
    type: "visit",
    dates: "October 30 - November 5th, 2022",
    description: "We closed out our program with a bang for our last Marine Biology field trip to Heron Island, where we spent over a week living at the lab. Between lectures and lab work, we snorkeled at least 3 times a day, at sunrise, mid afternoon, and sunset. We swam with so many sharks, rays, nudibranchs, octopus, squid, guitarfish, eels, and so much more! My group studied the strength of crabs, comparing their body size and weight to the size and weight of coral rubble they were capable of lifting. It was one of the best weeks of my life.",
    species: [],
    photos: ["/images/photography/Heron1.jpg", "/images/photography/Heron2.JPG", "/images/photography/Heron3.jpg", "/images/photography/Heron4.jpg", "/images/photography/Heron5.jpg", "/images/photography/Heron6.jpg"],
    galleryId: "heron-island"
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
    name: "San Diego",
    country: "USA",
    coords: [32.885, -117.243],
    type: "visit",
    dates: "January - June 2023",
    description: "Junior year at UCSD started off with my semester abroad at UQ, and then in January I went back to regular classes in San Diego, living with my best friend and falling in love with the city all over again! Brynn, my family and I all visited Mexico for spring break, and my sister and best friend from home visited me for my birthday! It was a great year.",
    species: [],
    photos: ["/images/photography/JuniorYear1.jpg", "/images/photography/JuniorYear2.JPG", "/images/photography/JuniorYear3.jpg"],
    galleryId: "junior-year"
  },
  {
    name: "Cabo San Lucas",
    country: "Mexico",
    coords: [22.89, -109.91],
    type: "visit",
    dates: "March 25-30th, 2023",
    description: "For spring break junior year, my family, Brynn and I all went to Cabo San Lucas and did a whale watching tour where we had the most incredible interaction with these whales!",
    species: [
      "Humpback whale <em>(Megaptera novaeangliae)</em>"
    ],
    photos: ["/images/photography/Mexico1.jpg", "/images/photography/Mexico2.JPG", "/images/photography/Mexico3.jpg"],
    galleryId: "cabo"
  },
  {
    name: "Argostoli",
    country: "Greece",
    coords: [38.1739, 20.4917],
    type: "visit",
    dates: "July 7 - August 5th, 2023",
    description: "I spent a month volunteering with Wildlife Sense, working on their sea turtle conservation program! It was an incredible learning experience, helping locate and protect turtle nests, relocate endangered nests, help hatchlings to sea, and help with beach cleanups and beach mapping!",
    species: [
      "Loggerhead sea turtle <em>(Caretta caretta)</em>"
    ],
    photos: ["/images/photography/STConservation1.jpg", "/images/photography/STConservation2.jpg", "/images/photography/STConservation3.jpg", "/images/photography/STConservation4.JPG", "/images/photography/STConservation5.jpg", "/images/photography/STConservation6.jpg"],
    galleryId: "argostoli"
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
    name: "Hvar",
    country: "Croatia",
    coords: [43.17, 16.44],
    type: "visit",
    dates: "August 7-10th, 2023",
    description: "My sister and I enjoyed a lovely week in Croatia together beginning in Hvar!",
    species: [],
    photos: ["/images/photography/Hvar1.JPG", "/images/photography/Hvar2.JPG", "/images/photography/Hvar3.jpg", "/images/photography/Hvar4.JPG"],
    galleryId: "hvar"
  },
  {
    name: "Vis",
    country: "Croatia",
    coords: [43.06, 16.18],
    type: "visit",
    dates: "August 9th, 2023",
    description: "While in Hvar, Tess and I did a daytrip to Vis and explored the adorable little island!",
    species: [],
    photos: ["/images/photography/Vis1.jpg", "/images/photography/Vis2.JPG", "/images/photography/Vis3.JPG"],
    galleryId: "vis"
  },
  {
    name: "Dubrovnik",
    country: "Croatia",
    coords: [42.65, 18.09],
    type: "visit",
    dates: "August 10-13th, 2023",
    description: "Tess and I closed out our sister trip with a few days in Dubrovnik, exploring the old town and the beaches.",
    species: [],
    photos: ["/images/photography/Dubrovnik1.jpg", "/images/photography/Dubrovnik2.jpg", "/images/photography/Dubrovnik3.jpg", "/images/photography/Dubrovnik4.jpg", "/images/photography/Dubrovnik5.jpg", "/images/photography/Dubrovnik6.jpg"],
    galleryId: "dubrovnik"
  },
  {
    name: "Grand Canyon",
    country: "USA",
    coords: [36.10, -112.11],
    type: "visit",
    dates: "September 17-19th, 2023",
    description: "To kick off senior year, my dad and I drove my car from Washington to San Diego! It was the best road trip ever. We stopped at the Grand Canyon and had a great time dressing up in fun hats and enjoying the view.",
    species: [],
    photos: ["/images/photography/GC1.JPG", "/images/photography/GC2.JPG", "/images/photography/GC3.JPG", "/images/photography/GC4.JPG"],
    galleryId: "grand-canyon"
  },
  {
    name: "Sedona",
    country: "USA",
    coords: [34.87, -111.76],
    type: "visit",
    dates: "September 20-22nd, 2023",
    description: "To kick off senior year, my dad and I drove my car from Washington to San Diego! It was the best road trip ever. We stopped in Sedona to enjoy beautiful scenery and fun hikes.",
    species: [],
    photos: ["/images/photography/Sedona1.JPG", "/images/photography/Sedona2.JPG", "/images/photography/Sedona3.JPG", "/images/photography/Sedona4.JPG"],
    galleryId: "sedona"
  },
  {
    name: "San Diego",
    country: "USA",
    coords: [32.880, -117.234],
    type: "visit",
    dates: "September 2023 - June 2024",
    description: "Senior year at UCSD included a spring break trip to Panama with my family and Brynn, going home for a weekend to celebrate my dads 60th and my 22nd birthdays, lots of shifts working at the Birch Aquarium, plenty of hours at the tide pools and beaches of La Jolla, a girls trip to Napa Valley, a trip to see my grandpa in St. Petersburg Florida, and lots of visits from my parents in SD. I enjoyed all my favorite restaurants from Creme de la Crepe to Dirty Birds, the Little Italy Farmers Market most Saturdays, Kobeys Swap Meet most Sundays, lots of lab work, baseball games (go Padres!), jazz nights, sailboat rides and lots of time with friends!",
    species: [],
    photos: ["/images/photography/SeniorYear1.jpg", "/images/photography/SeniorYear2.jpg", "/images/photography/SeniorYear3.jpg", "/images/photography/SeniorYear4.JPG", "/images/photography/SeniorYear5.jpeg", "/images/photography/SeniorYear6.jpg"],
    galleryId: "senior-year"
  },
  {
    name: "La Jolla Tide Pools",
    country: "USA",
    coords: [32.86689, -117.25714],
    type: "visit",
    dates: "~January 2024",
    description: "Between classes at Scripps, I would visit the tide pools just north of the pier!",
    species: [],
    photos: ["/images/photography/LJ1.jpg", "/images/photography/LJ2.jpg", "/images/photography/LJ3.jpg", "/images/photography/LJ4.jpg", "/images/photography/LJ5.jpg", "/images/photography/LJ6.jpg"],
    galleryId: "la-jolla"
  },
  {
    name: "Napa Valley",
    country: "USA",
    coords: [38.50, -122.27],
    type: "visit",
    dates: "February 15-18th, 2024",
    description: "Girls trip! I took my mom and sister on a girls trip to Napa Valley, where we had lovely tours of the wine country and did a 4am hot air balloon ride! This was such a special trip because as soon as we got off the hot air balloon, I received the notification that I had been accepted to the graduate program at UAlg! It was a weekend of laughter and celebration!!",
    species: [],
    photos: ["/images/photography/Napa1.JPG", "/images/photography/Napa2.JPG", "/images/photography/Napa3.JPG", "/images/photography/Napa4.JPG", "/images/photography/Napa5.jpg", "/images/photography/Napa6.jpg", "/images/photography/Napa7.jpg"],
    galleryId: "napa"
  },
  {
    name: "Panama City",
    country: "Panama",
    coords: [8.99, -79.52],
    type: "visit",
    dates: "March 22-24th, 2024",
    description: "First stop on our spring break in Panama was Panama City!",
    species: [],
    photos: ["/images/photography/PanamaCity1.JPG", "/images/photography/PanamaCity2.JPG"],
    galleryId: "panama-city"
  },
  {
    name: "Isla Bastimentos",
    country: "Panama",
    coords: [9.35, -82.17],
    type: "dive",
    dates: "March 24-30th, 2024",
    description: "We spent the rest of our time in Panama in Isla Bastimentos, sleeping in bungalows over the water, watching eagle rays swim by at dinner, snorkeling and reading all day, and we even went diving! We also saw sloths and really cool frogs.",
    species: [],
    photos: ["/images/photography/IB1.JPG", "/images/photography/IB2.jpg", "/images/photography/IB3.JPG", "/images/photography/IB4.jpg", "/images/photography/IB5.JPG", "/images/photography/IB6.JPG"],
    galleryId: "isla-bastimentos"
  },
  {
    name: "La Jolla Cove",
    country: "USA",
    coords: [32.8504, -117.2729],
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
    name: "UCSD",
    country: "USA",
    coords: [32.874, -117.228],
    type: "visit",
    dates: "June 11-17th, 2024",
    description: "For my BS graduation from UCSD, I had so many loved ones come to celebrate me! It was such a special time, I got to show everyone my favorite beaches and restaurants and I truly felt so loved and supported!",
    species: [],
    photos: ["/images/photography/Grad1.JPG", "/images/photography/Grad2.JPG", "/images/photography/Grad3.JPG", "/images/photography/Grad4.JPG", "/images/photography/Grad5.JPG"],
    galleryId: "graduation"
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
    name: "Blitzingen",
    country: "Switzerland",
    coords: [46.40, 8.19],
    type: "visit",
    dates: "December 21-28th, 2024",
    description: "A wonderful Swissmas Christmas! The four of us spent a week in a little chalet in the countryside of Switzerland, it was so magical!",
    species: [],
    photos: ["/images/photography/Blitzingen1.JPG", "/images/photography/Blitzingen2.JPG", "/images/photography/Blitzingen3.JPG", "/images/photography/Blitzingen4.jpg", "/images/photography/Blitzingen5.JPG", "/images/photography/Blitzingen6.jpg"],
    galleryId: "blitzingen"
  },
  {
    name: "Swiss Alps",
    country: "Switzerland",
    coords: [46.40, 8.45],
    type: "visit",
    dates: "December 2024",
    description: "A day trip to the Swiss Alps during our Swissmas stay!",
    species: [],
    photos: ["/images/photography/SwissAlps2.jpg", "/images/photography/SwissAlps1.JPG", "/images/photography/SwissAlps3.JPG", "/images/photography/SwissAlps4.JPG"],
    galleryId: "blitzingen"
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
    photos: ["/images/map/Aix1.jpg", "/images/map/Aix2.jpg", "/images/map/Aix3.jpg", "/images/map/Aix4.jpg", "/images/map/Aix5.jpg", "/images/map/Aix6.jpg", "/images/map/Aix7.jpg", "/images/map/Aix8.jpg", "/images/map/Aix9.jpg", "/images/map/Aix10.jpg", "/images/map/Aix11.jpg"],
    galleryId: "aix"
  },
  {
    name: "Timbavati Reserve",
    country: "South Africa",
    coords: [-24.45, 31.17],
    type: "visit",
    dates: "June 23-30th, 2025",
    description: "Before beginning my adventure in Mozambique, my mom and I spent a week on safari in South Africa! We did 2 game drives each day, one at dawn and one at dusk. We saw all the big 5 and had a blast!!",
    species: [],
    photos: ["/images/map/Safari1.JPG", "/images/map/Safari2.JPG", "/images/map/Safari3.jpg", "/images/map/Safari4.jpg", "/images/map/Safari5.JPG", "/images/map/Safari6.jpg", "/images/map/Safari7.JPG", "/images/map/Safari8.jpg", "/images/map/Safari9.JPG", "/images/map/Safari10.JPG", "/images/map/Safari11.jpg", "/images/map/Safari12.jpg", "/images/map/Safari13.JPG"],
    galleryId: "timbavati"
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
      "Reef Manta Ray <em>(Mobula alfredi)</em>",
      "Humpback dolphins <em>(Sousa chinensis)</em>"
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
    name: "Bonaire",
    country: "Netherlands Antilles",
    coords: [12.18, -68.24],
    type: "dive",
    dates: "November 1-9th, 2025",
    description: "My family and I spent a week in Bonaire celebrating my moms birthday. We stayed in a cute house right on the water, snorkeling 3 times a day and exploring the island in between! Dad and I even went scuba diving a few times, we saw lots of squid and even a pod of dolphins 20m deep! Around the island, we saw flamingos and iguanas. A beautiful island getaway!",
    species: [
      "Bearded fireworm <em>(Hermodice carunculata)</em>"
    ],
    photos: ["/images/map/Bonaire1.JPG", "/images/map/Bonaire2.JPG", "/images/map/Bonaire3.JPG", "/images/map/Bonaire4.JPG", "/images/map/Bonaire5.JPG", "/images/map/Bonaire6.JPG", "/images/map/Bonaire7.JPG", "/images/map/Bonaire8.JPG", "/images/map/Bonaire9.JPG"],
    galleryId: "bonaire"
  },
  {
    name: "Oslo",
    country: "Norway",
    coords: [59.91, 10.75],
    type: "visit",
    dates: "December 19-21st, 2025",
    description: "We kicked off our Christmas vacation in Oslo for a few days, where we enjoyed a traditional Nordic Christmas dinner and explored the cutesy little shops around the city. We even visited the MUNCH Museum and saw The Scream!",
    species: [],
    photos: ["/images/map/Oslo1.JPG", "/images/map/Oslo2.jpg", "/images/map/Oslo3.JPG", "/images/map/Oslo4.JPG", "/images/map/Oslo5.jpg"],
    galleryId: "oslo"
  },
  {
    name: "Tromsø",
    country: "Norway",
    coords: [69.65, 18.96],
    type: "visit",
    dates: "December 21-26th, 2025",
    description: "After a few days in Oslo, we flew to Tromsø, where the sun didn't rise above the horizon for the 5 days we were there. It was STUNNING. We enjoyed a fantastic view of the Northern Lights right from our porch, visited a reindeer farm, and went on a husky sleigh ride. We cooked a coq au vin for Christmas Eve dinner, and watched plenty of Christmas movies! It was truly an unforgettable Christmas!",
    species: [],
    photos: ["/images/map/Tromso1.jpg", "/images/map/Tromso2.jpg", "/images/map/Tromso3.JPG", "/images/map/Tromso4.JPG"],
    galleryId: "tromso"
  },
  {
    name: "Bergen",
    country: "Norway",
    coords: [60.39, 5.32],
    type: "visit",
    dates: "December 27-30th, 2025",
    description: "We finished our time in Norway in Bergen for a few days, where we did a beautiful boat tour of the fjords!",
    species: [],
    photos: ["/images/map/Bergen1.JPG", "/images/map/Bergen2.JPG", "/images/map/Bergen3.jpg", "/images/map/Bergen4.JPG"],
    galleryId: "bergen"
  },
  {
    name: "Copenhagen",
    country: "Denmark",
    coords: [55.68, 12.57],
    type: "visit",
    dates: "December 30th, 2025 - January 3rd, 2026",
    description: "Andrew and Bella joined the four of us in Copenhagen for a beautiful NYE! We toured the city, stopping at every cute shop and photobooth we could. We drank plenty of glögg and played many card games!",
    species: [],
    photos: ["/images/map/Copenhagen1.jpg", "/images/map/Copenhagen2.JPG", "/images/map/Copenhagen3.jpg", "/images/map/Copenhagen4.JPG", "/images/map/Copenhagen5.jpeg", "/images/map/Copenhagen6.jpg", "/images/map/Copenhagen7.jpg"],
    galleryId: "copenhagen"
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
      "Reef Manta Ray <em>(Mobula alfredi)</em>",
      "Humpback dolphins <em>(Sousa chinensis)</em>"
    ],
    photos: []
  },
  {
    name: "El Salvador",
    country: "El Salvador",
    coords: [13.69, -89.22],
    type: "visit",
    dates: "March 27-31st, 2026",
    description: "Celebrating my best friend in El Salvador!",
    species: [],
    photos: ["/images/photography/ElSalvador2.JPG", "/images/photography/ElSalvador1.jpg"],
    galleryId: "el-salvador"
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
