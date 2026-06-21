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
    photos: ["/images/map/JoeyMayaFiji.jpg", "/images/map/Fiji2.jpg"]
  },
  {
    name: "Port Lincoln",
    country: "Australia",
    coords: [-34.73, 135.88],
    type: "visit",
    dates: "November 20-22nd, 2022",
    description: "We came for the great white sharks, we stayed for the koalas. A really special time in my heart.",
    species: [],
    photos: ["/images/map/PortLincoln1.JPG", "/images/map/PortLincoln2.JPG", "/images/map/PortLincoln3.JPG", "/images/map/PortLincoln4.JPG"]
  },
  {
    name: "Cephalonia",
    country: "Greece",
    coords: [38.18, 20.57],
    type: "dive",
    dates: "July 22nd, 2023",
    description: "During my fieldwork in Greece monitoring nesting sea turtles and their hatchlings, I went diving! It was lovely, warm, and I saw a few nudis!",
    species: [],
    photos: ["/images/map/Cephalonia1.jpg"]
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
    photos: ["/images/map/Cartagena1.JPG", "/images/map/Cartagena2.jpg", "/images/map/Cartagena3.JPG"]
  },
  {
    name: "Bogotá",
    country: "Colombia",
    coords: [4.71, -74.07],
    type: "visit",
    dates: "July 30 - August 3rd, 2024",
    description: "",
    species: [],
    photos: ["/images/map/Bogota1.jpg", "/images/map/Bogota2.JPG", "/images/map/Bogota3.JPG", "/images/map/Bogota4.JPG"]
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
    photos: ["/images/map/Sagres1.JPG", "/images/map/Sagres2.JPG"]
  },
  {
    name: "Aix-en-Provence",
    country: "France",
    coords: [43.53, 5.45],
    type: "visit",
    dates: "April 10-15th, 2025",
    description: "Dad and I went to visit family in Aix for a few days, it was so so lovely!! We ate amazing food, we explored the markets every morning, and spent the rest of our time with loved ones we hadn't seen in too long.",
    species: [],
    photos: ["/images/map/Aix1.jpg", "/images/map/Aix2.jpg", "/images/map/Aix5.jpg"]
  },
  {
    name: "Závora",
    country: "Mozambique",
    coords:
