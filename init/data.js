const sampleListings = [
  {
    title: "Sunny Surfside Bungalow",
    description:
      "Wake up to the sound of waves in this laid-back surfside bungalow, just steps from the shore.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1523430410476-0185cb1f6ff9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1350,
    location: "Santa Monica",
    country: "United States",
  },
  {
    title: "Sleek Studio in Midtown",
    description:
      "A minimalist studio apartment steps away from the city's best restaurants and nightlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Chicago",
    country: "United States",
  },
  {
    title: "Alpine Forest Hideaway",
    description:
      "A tucked-away cabin deep in the pines, ideal for hikers and anyone craving total quiet.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 950,
    location: "Lake Placid",
    country: "United States",
  },
  {
    title: "Countryside Manor in Provence",
    description:
      "A restored stone manor surrounded by lavender fields and olive groves in the French countryside.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2700,
    location: "Provence",
    country: "France",
  },
  {
    title: "Elevated Jungle Pod",
    description:
      "An elevated eco-pod suspended in the rainforest canopy, complete with a hammock deck.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 700,
    location: "Chiang Mai",
    country: "Thailand",
  },
  {
    title: "Oceanfront Condo Escape",
    description:
      "Wake up to panoramic ocean views in this breezy beachfront condo with direct beach access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Tulum",
    country: "Mexico",
  },
  {
    title: "Lakeside Fishing Cabin",
    description:
      "A rustic cabin with a private dock, perfect for early mornings on the water and quiet evenings by the fire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 850,
    location: "Muskoka",
    country: "Canada",
  },
  {
    title: "Skyline Penthouse Suite",
    description:
      "Floor-to-ceiling windows and a rooftop terrace make this penthouse the ultimate city escape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3800,
    location: "Chicago",
    country: "United States",
  },
  {
    title: "Alpine Ski Chalet",
    description:
      "A timber-framed chalet with direct slope access, wood-fired sauna, and panoramic mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Chamonix",
    country: "France",
  },
  {
    title: "Riverside Safari Camp",
    description:
      "A tented camp on the riverbank offering front-row views of elephants and hippos at sunrise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Maasai Mara",
    country: "Kenya",
  },
  {
    title: "Canal-Side Merchant House",
    description:
      "A tall, narrow 17th-century merchant house right on the canal, full of original character.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1950,
    location: "Bruges",
    country: "Belgium",
  },
  {
    title: "Remote Atoll Hideaway",
    description:
      "Your own private stretch of atoll, reachable only by boat, with nothing but sand and sea around you.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 9500,
    location: "Bora Bora",
    country: "French Polynesia",
  },
  {
    title: "Thatched-Roof Country Cottage",
    description:
      "A storybook cottage with a thatched roof, rose garden, and wood-burning stove for chilly evenings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Lake District",
    country: "United Kingdom",
  },
  {
    title: "Row House in Old Town",
    description:
      "A beautifully preserved row house with exposed brick, tucked into a quiet historic block.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Philadelphia",
    country: "United States",
  },
  {
    title: "Private Pool Villa in Seminyak",
    description:
      "A tropical villa with its own plunge pool, open-air living space, and lush garden courtyard.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "Seminyak",
    country: "Indonesia",
  },
  {
    title: "Rocky Mountain Cabin",
    description:
      "A timber cabin with wraparound windows framing sweeping views of jagged peaks and pine forest.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1450,
    location: "Jackson Hole",
    country: "United States",
  },
  {
    title: "Retro Apartment in South Beach",
    description:
      "A pastel-hued apartment with vintage furnishings, minutes from the beach and the strip.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1550,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Hillside Villa in Koh Samui",
    description:
      "Perched above the coastline, this villa offers infinity-pool sunsets and total privacy.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2900,
    location: "Koh Samui",
    country: "Thailand",
  },
  {
    title: "Turret Room in a Highland Keep",
    description:
      "Stay in a genuine stone keep with turret bedrooms, roaring fireplaces, and views over the glen.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3900,
    location: "Isle of Skye",
    country: "United Kingdom",
  },
  {
    title: "Desert Dune Retreat",
    description:
      "A striking modern villa set among the dunes, with a private pool and panoramic desert views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4800,
    location: "Abu Dhabi",
    country: "United Arab Emirates",
  },
  {
    title: "Timberline Log Retreat",
    description:
      "A handcrafted log home with a stone fireplace, deep in the woods away from it all.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1050,
    location: "Whitefish",
    country: "United States",
  },
  {
    title: "Cliffside Villa in Santorini",
    description:
      "Whitewashed walls and a caldera-facing terrace make this villa a classic Aegean escape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2600,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Solar-Powered Forest Cabin",
    description:
      "An off-grid, solar-powered cabin built with reclaimed timber, surrounded by old-growth forest.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Redwood National Park",
    country: "United States",
  },
  {
    title: "Garden Cottage in Savannah",
    description:
      "A quiet cottage behind wrought-iron gates, with a private courtyard shaded by live oaks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Savannah",
    country: "United States",
  },
  {
    title: "Compact Apartment in Shibuya",
    description:
      "A tidy, well-located apartment putting you within walking distance of Tokyo's best neighborhoods.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Alpine Lakeside Cottage",
    description:
      "A snug cottage on the shore of a glacial lake, with kayaks included and mountain trails nearby.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1150,
    location: "Interlaken",
    country: "Switzerland",
  },
  {
    title: "Overwater Bungalow Escape",
    description:
      "Step directly into turquoise water from your private deck in this luxury overwater bungalow.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5800,
    location: "Bora Bora",
    country: "French Polynesia",
  },
  {
    title: "Slopeside Lodge in Vail",
    description:
      "Ski-in/ski-out access, a hot tub deck, and floor-to-ceiling views of the surrounding peaks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4300,
    location: "Vail",
    country: "United States",
  },
  {
    title: "Cliffside Surf House",
    description:
      "A sunbaked house perched above the break, with hammocks, an outdoor shower, and board storage.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1650,
    location: "Nosara",
    country: "Costa Rica",
  },
];

module.exports = { data: sampleListings };