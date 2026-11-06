export const CATEGORIES = [
  { id: 'all', name: 'All Categories', count: '180+ Expeditions', icon: 'travel_explore' },
  { id: 'mountains', name: 'Mountains', count: '48 Trails', icon: 'landscape' },
  { id: 'beaches', name: 'Beaches', count: '34 Havens', icon: 'surfing' },
  { id: 'heritage', name: 'Heritage', count: '27 Sights', icon: 'temple_buddhist' },
  { id: 'wildlife', name: 'Wildlife', count: '19 Reserves', icon: 'nature' },
  { id: 'culinary', name: 'Culinary', count: '52 Rituals', icon: 'ramen_dining' },
  { id: 'adventures', name: 'Adventures', count: '41 Tours', icon: 'paragliding' }
];

export const DESTINATIONS = [
  {
    id: 'amalfi',
    title: 'Amalfi Coast & Capri',
    country: 'Italy',
    tag: 'Italy • Coastline',
    category: 'beaches',
    price: 1450,
    duration: '6 days',
    type: 'Total Package',
    rating: 4.96,
    reviewsCount: 210,
    level: 'Leisure',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABVODvIFuvyYcMwNH1LtKvt0qMJjblYyd1qvduft8BcDjfitzsNOtGDG82NA7ngbxv7V1Ln_ykn2d0WHL_p0sMKtnM3fUHHz7mSOzBkoIr7WAyOT8_2ADl2T7nnu8fqYpQMgdDm46NIwI7rM_eSDj4NVKWOOAVufe6_dNZNwXxZLF08J_M3S9bm5BwBTUO_IPn1ZsfbJZ7DkM_l-HMSuN0F6XkWUz6a1kcsLF5yg',
    description: 'Sun-drenched cliffside villages, vintage convertible drives, and azure Mediterranean private boat passages along Positano and secluded Capri grottos.',
    highlights: ['Private wooden yacht charter', 'Cliffside boutique villa', 'Organic lemon grove dining', 'Capri Blue Grotto access'],
    itinerarySummary: [
      { day: 'Day 1', title: 'Arrival in Naples & Private Transfer to Positano' },
      { day: 'Day 2', title: 'Vintage Alfa Romeo Coastal Panorama Drive' },
      { day: 'Day 3', title: 'Capri & Faraglioni Private Yacht Day' },
      { day: 'Day 4', title: 'Ravello Villa Cimbrone & Classical Concert' },
      { day: 'Day 5', title: 'Path of the Gods Sunrise Trek & Wine Tasting' },
      { day: 'Day 6', title: 'Farewell Limoncello Masterclass & Departure' }
    ]
  },
  {
    id: 'kyoto',
    title: 'Kyoto & Arashiyama',
    country: 'Japan',
    tag: 'Japan • Heritage',
    category: 'heritage',
    price: 2100,
    duration: '8 days',
    type: 'Curated Tour',
    rating: 4.98,
    reviewsCount: 340,
    level: 'Cultural Walk',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4M-WkBU7MqD0LcvJaSSOA72ua90K0ixnINHCuct3oFtY0u4M0qe-Fr4wdWoLuCYKyW3CT0tCBP741uZQs_b_mMyk3Rv4f38EtGWeXvGAwV11cdJc-Vb766Ok1hBNJRfniH7jG8NPF9XS4lpV7lENTXziJ0kAI_aHRujGBh7daHss0InLzX_IPBXO-v22WnrFJjVGLjYHTtF1MXPguxDHo5kb0kJF5aCddLgBULw',
    description: 'Whispering bamboo groves, ancient vermilion shrines, Michelin matcha tastings, and tranquil ryokan retreats with natural mineral onsens.',
    highlights: ['Private Arashiyama bamboo dawn access', 'Zen garden meditation with master', 'Exclusive Kaiseki dinner in Gion', 'High-speed Shinkansen green car passes'],
    itinerarySummary: [
      { day: 'Day 1-2', title: 'Old Capital Arrival & Gion Lantern Walk' },
      { day: 'Day 3', title: 'Fushimi Inari 10,000 Torii Sunrise Ascent' },
      { day: 'Day 4', title: 'Arashiyama Bamboo Forest & Tenryu-ji Temple' },
      { day: 'Day 5', title: 'Traditional Tea Ceremony & Uji Matcha Estate' },
      { day: 'Day 6-7', title: 'Luxury Ryokan Stay & Healing Forest Onsen' },
      { day: 'Day 8', title: 'Kyoto Artisan Craft Workshops & Departure' }
    ]
  },
  {
    id: 'banff',
    title: 'Banff & Jasper Rockies',
    country: 'Canada',
    tag: 'Canada • Alpine',
    category: 'mountains',
    price: 1820,
    duration: '5 days',
    type: 'Expedition',
    rating: 4.92,
    reviewsCount: 184,
    level: 'Moderate Trek',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfu-Fv5q9Ppf2TRw-GbnBpoF-CvDCTypd3UA_dQ-G-HlKZEz0Y9mAahfmnJVZSbZUhpHiiTNDQV21V_cfmTx4RV6SwRPo7VicmoHeeVreuyDjHHOd0tyBnp1ndov3d0ZqQ2lY1nM-yY6eNW8qR872pwDItG4BgkBCgYOnpNKYhyHd0AsUqnyQw1YaF8Z2zCz4IWYbfbrHtaMFjeYJmPmoaBP5JXjJ9_sU88l16Xw',
    description: 'Emerald glacial lakes beneath towering snow-capped Rockies with heli-hiking, wildlife safaris, and secluded backcountry thermal pools.',
    highlights: ['Lake Moraine sunrise private canoeing', 'Columbia Icefield glacier walk', 'Helicopter alpine ridge landing', 'Fairmont Chateau Lake Louise stay'],
    itinerarySummary: [
      { day: 'Day 1', title: 'Calgary to Banff Luxury Mountain Shuttle' },
      { day: 'Day 2', title: 'Moraine Lake Dawn Canoe & Valley of Ten Peaks' },
      { day: 'Day 3', title: 'Icefields Parkway Scenic Drive to Jasper' },
      { day: 'Day 4', title: 'Maligne Canyon & Dark Sky Stargazing' },
      { day: 'Day 5', title: 'Banff Upper Hot Springs & Departure' }
    ]
  },
  {
    id: 'serengeti',
    title: 'Serengeti Great Migration',
    country: 'Tanzania',
    tag: 'Tanzania • Safari',
    category: 'wildlife',
    price: 3200,
    duration: '7 days',
    type: 'All-Inclusive',
    rating: 4.99,
    reviewsCount: 412,
    level: 'Luxury Safari',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC77yx8FASyUvsS65_pzMMyWc5V9egwvymDAugJYwK5YyPYzMCLOMSodHNWSGesGQAmuxuPWn2Z8V4rk-SkowrGNNdvjLD_PYPlmZd8WUMuVZRhujXAKj6sD-uUL3Wp5D-yHfpBU_YtoAK1siX3DVhnxsPPlFgehrOK3bToJQwnwHVX4fV9cFZxoHh7JksYkfO_FuPllkSeyTb8-TTsblksHWFaHoymgngmTylmzg',
    description: 'Witness the Great Migration across golden grasslands, hot air balloon flights at dawn, and five-star luxury tented eco-camps with Masai guides.',
    highlights: ['Dawn hot air balloon over Mara river', 'Big Five tracking with veteran trackers', 'Solar-powered luxury canvas suite', 'Sundowner cocktails under acacia trees'],
    itinerarySummary: [
      { day: 'Day 1', title: 'Fly to Serengeti Seronera Airstrip' },
      { day: 'Day 2', title: 'Central Serengeti Predator Safari Drive' },
      { day: 'Day 3', title: 'Dawn Hot Air Balloon & Bush Champagne Breakfast' },
      { day: 'Day 4-5', title: 'Northern Serengeti Mara River Crossing Watch' },
      { day: 'Day 6', title: 'Ngorongoro Crater Conservation Exploration' },
      { day: 'Day 7', title: 'Traditional Maasai Cultural Visit & Departure' }
    ]
  },
  {
    id: 'patagonia',
    title: 'Patagonia Ice Fjords & Peaks',
    country: 'Argentina & Chile',
    tag: 'Patagonia • Glacier',
    category: 'adventures',
    price: 2850,
    duration: '9 days',
    type: 'Wilderness Lodge',
    rating: 4.97,
    reviewsCount: 165,
    level: 'Alpine Adventure',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5rJOMDbECs9w04ChF3Krz6L5QYr0Qc2czEbPkdx8Q7qMh-RY_0CDQXXZ796N2L5C7Ho3pIZLzkY1AIMTJNzaBRVyec_y0YMZ5OcKYVRWvblexkyzH7c5_nrmJQUnop09PX6LrnatvBk9vd33U6Pz4_RK1FRQ-STLZ2DTOiKXDRI7EwNzn3fk8Xh2-KZ8ehnBMVPT7_xHXONfyaKteBE-zfqfmDnDoJjSHgr_fZA',
    description: 'Jagged granite spires of Los Glaciares and Torres del Paine, electric-blue glacial lagoons, and private expedition catamarans.',
    highlights: ['Perito Moreno ice trekking with crampons', 'Grey Glacier private navigation', 'EcoCamp Patagonia luxury dome suites', 'Gaucho barbecue & Patagonian wines'],
    itinerarySummary: [
      { day: 'Day 1-2', title: 'El Calafate & Glaciers National Park Base' },
      { day: 'Day 3', title: 'Perito Moreno Glacier Ice Walk Expedition' },
      { day: 'Day 4-6', title: 'Cross to Torres del Paine & French Valley Trek' },
      { day: 'Day 7-8', title: 'Laguna de los Tres & Mount Fitz Roy Vistas' },
      { day: 'Day 9', title: 'Southern Icefield Flyover & Return' }
    ]
  }
];

export const HIDDEN_GEMS = [
  {
    id: 'faroe',
    title: 'Gásadalur, Faroe Islands',
    region: 'North Atlantic',
    tag: 'Archipelago',
    badge: '99% Untouched',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpIGuytxiP3mYdXdN4iQc7xTWoxtpeoQH8a-oEd8rnFOOK_mC88NE1T8JHriZPMETbwLXJ555fdKToQl9mEZLPT7UFCyoDin1FR8OhOBtWpvtrNi6UOSdd7qDomORR4JjzWw92g_ej785r4FgGGoHB6IdnRmaVXawPNp0YjHaWVMgRlbQghNiGJTdO0BMOD4pWKB4Dg_wLCwVU1bRtxtrOr9OiZ0zcNyZ5ll8ImQ',
    description: 'Dramatic waterfall dropping directly into roaring Atlantic surf with ancient turf-roofed stone hamlets and shear basalt sea stacks.',
    coordinates: '62°06\'39.2"N 7°26\'12.4"W',
    elevation: '135m',
    bestSeason: 'June – August',
    secretTips: 'The historic postman trail through the mountain pass offers uninterrupted fog-break vistas before tour shuttles reach the tunnel entrance.'
  },
  {
    id: 'uyuni',
    title: 'Salar de Uyuni, Bolivia',
    region: 'Altiplano High Plateau',
    tag: 'Salt Flat Oasis',
    badge: 'Mirror Realm',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAXgNx-Y7gqnPZLwejxyA9jFy9_d49_8v5d3s7Rd--6T_GofCX-Nx-HAsTG4NxCpDYDLfx3QmC6VuvlolHYbVfS3EnF-GmLX38yXO5RoWF-WfKBWbhCofUp68MBmQeNzNIP5mNQPd51jCqhu0wooOv799iUlz7_ZTnu8VP1QUbV0VLWSJon2jogeMVdCTuman1ggTfRzpa_43PEWnNhiAZ3qry-xv_X--esV_2Cg',
    description: 'Infinite cosmic mirror flats with nocturnal celestial observation camps, incandescent Milky Way reflections, and futuristic dome pods at 3,600m.',
    coordinates: '20°08\'01.5"S 67°29\'20.8"W',
    elevation: '3,656m',
    bestSeason: 'Jan – March (Mirror effect) / May – Oct (Crisp stars)',
    secretTips: 'Book during the new moon in February when a thin film of rainwater transforms the crust into an absolute zero-distortion infinite sky reflection.'
  },
  {
    id: 'huacachina',
    title: 'Huacachina, Peru',
    region: 'Ica Desert Region',
    tag: 'Desert Haven',
    badge: 'Protected Oasis',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCln19BtRfjMiDD1BfgMyK9lekn_VtgIpBzNk7Vsc95yG28dR1YLzwAuHncH1e_M9tg_Hpf0PXkuF-ZfYiqlGjIw2b-YbagkcC2DU82XHxqR4CRX81KsMwIRkWlWvwEuZjFHCT9GHkpM_iLotbQweIqwEXqEfEtG8x7dKE1CedQSFdF54EYWgVHO-ruiRTjEy8GREnnOtV-UV0KOKhwHjR37uN-Uo-MpUhJj7JViQ',
    description: 'Lush natural palm lagoon enclosed by towering golden dunes with midnight sandboarding, private desert glamping, and Pisco tasting.',
    coordinates: '14°05\'15.0"S 75°45\'48.0"W',
    elevation: '407m',
    bestSeason: 'April – November',
    secretTips: 'Avoid the main lagoon perimeter at noon; head across the southwestern dune crest for sunset silence and untouched parabolic sand ripples.'
  }
];

export const STORIES = [
  {
    id: 'cyclades',
    title: 'The Ultimate Guide to Island Hopping in the Cyclades Without the Crowds',
    author: 'Camille Laurent',
    authorRole: 'Mediterranean Curation Specialist',
    category: 'Greece',
    readTime: '5 min read',
    date: 'Updated Oct 2025',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRvJ0ROir3ubn-8oVEizd-NSKzqKJAV8GGhPadLQKgOCS9Srh5FlWhRaS-StHclXu5PPde5YsSPRgUA6xP48YWh4EIKq-rBpMwst9WgTk33OBPbQ5UZ1uMgzkHxDoIIKTlOjzwlQUA2F4jbCcfSQzpPreLn7jSXQid2Vlkws4AoCr78NKlkuvC4Qf2eYw-zCFDCUlJq8uAsnin8rgoAzdC7s_mkKXYAHmx5f6ONw',
    excerpt: 'Step away from over-Instagrammed alleys. Discover Milos, Sifnos, and Folegandros through secluded white-stone fisherman villages and crystal turquoise coves.',
    content: [
      'While Santorini and Mykonos draw millions, the quieter arc of the Cyclades harbors untouched Cycladic soul. On the island of Sifnos, pottery traditions dating back thousands of years still thrive in cliffside workshops.',
      'Renting an electric boat allows spontaneous exploration of Milos sea caves inaccessible by foot, where sulfur-tinted emerald waters lap against chalky white volcanic cliffs.',
      'Our top recommendation: Book family-run tavernas serving freshly pulled octopus and chickpea revithada slow-cooked in earthenware pots overnight under olive embers.'
    ]
  },
  {
    id: 'sustainable',
    title: '10 Sustainable Travel Habits Every Modern Nomad Should Adopt',
    author: 'Liam Sterling',
    authorRole: 'Senior Eco-Expedition Lead',
    category: 'Ecology',
    readTime: '8 min read',
    date: 'Updated Nov 2025',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-tYAx6DZEcc0flp4ivEhujiTHrNMrRCRba2tUaOtrT2gYeLZNuJ2m4jhCM9r_CdmVTrAl2pb6NTxVPO_LK0UElcC-adTqFb2fKhbLacLjP6cdFrSueoyOhTt7Xy5fFf4zIy5vZPI9QYHpCfcqPPXNKP6mgJk7tTmDggQOumMMLeL94wh6i-RGNsv5R3HVcg10WFqvKNPaY0kz-609h3lJ8wRe9_8FFdD0pZ-oIg',
    excerpt: 'True exploration enriches the environments we visit. Learn how slow transit, carbon offset verification, and indigenous-owned lodgings build regenerative travel.',
    content: [
      'Mindful expedition planning starts well before stepping on the jet bridge. Packing ultralight reduces aircraft fuel consumption, while investing in durable technical gear eliminates single-use trail waste.',
      'Choose high-speed electric rail options over short-haul domestic flights across Western Europe and Japan whenever possible.',
      'ExploreVerse guarantees 120% verified carbon offset for every booked journey, directly financing rewilding corridors in the Scottish Highlands and Amazonian headwaters.'
    ]
  }
];

export const REVIEWS = [
  {
    id: 'rev-1',
    name: 'Elena Rostova',
    role: 'Verified Explorer',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdCeuyJXQwFq0rRbs-vKyPBZQ13lbhbm8dx_mrqxR9yHDhueioXUNi9uJJY3aDK4x3E-yXM_b51HNjtus6kKvtPHLeC_D4tYhdoJ6tsi6XCMPclCtjeeKNKqXHEAGUW1brNkWyvTC7HmMfOX3LvV-iRo0bwbvV4jU-jwPgYA6T-Yr1W1lqC-UVS3-OWIuAb6TRCxroRyV1MQJMnSwxap3yMqIDLHZ8Cq_rIB4wog',
    rating: 5,
    route: 'Fiordland & Queenstown',
    quote: 'ExploreVerse curated our dream honeymoon in New Zealand. Every trail, helicopter hop, and secret fjord lodge was utterly flawless!'
  },
  {
    id: 'rev-2',
    name: 'Marcus Vance',
    role: 'Verified Explorer',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuoW1S9z9LYJ7MgVPuHdbA9f25NOpxPRHqr9gRwC7X1X3htNYzjW3V1morK-zEnpoW95yTLwgeXKOk1VKZJCHylFXD53AjFxW0jOxpYAZyWrWzCZDHyg-1HgVp3ND10AgKEnR8eVt6jPNAypH02JjKGozaKOn-UsAXGoZt6XQQYlaCjBi3-4rNqb9z3wmwnF4qhwbzCSHPzVf8M7WrAR1EL44x2rMz2FOv16QdPw',
    rating: 5,
    route: 'Caucasus Wilderness',
    quote: 'The Hidden Gems guide took us to secluded mountain valleys in Georgia we never would have discovered on ordinary travel forums.'
  },
  {
    id: 'rev-3',
    name: 'Dr. Maya Chen',
    role: 'Verified Explorer',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWIXqXIDnEKnpoO2GbiPrgXPinRO-o8Ab_Uo1BLhzuYaCvKuNrRwX4P161Uh22TFmuwiec_pJ3KsF-87JAOpicPitwt71YXZF1HAMI4fl3ewKBZ4CLFXEzXJtUVzqNOwIEJgN1FYio3V5USLWLBo64h5n58ws2FXH1Axyljx1h6UsJYxKszLR3uailXvDF8ghPK3vuVw2PlQrB1WBLBO3jWKldr31igRyN2_V3SQ',
    rating: 5,
    route: 'Kyoto & Shiga Sanctuaries',
    quote: 'Carbon balancing combined with hyper-local indigenous culinary encounters. A masterclass in modern, responsible high-end luxury exploration.'
  }
];

export const RADAR_HUBS = [
  {
    id: 'reykjavik',
    name: 'Reykjavik & Aurora Fjord',
    type: 'Aurora Camp • 12 Active Expeditions',
    status: 'Optimal',
    statusClass: 'bg-secondary/10 text-secondary',
    lat: '64.1466° N',
    lng: '21.9426° W',
    temperature: '-2°C',
    weather: 'Clear Aurora Skies',
    activeExplorers: 142
  },
  {
    id: 'zermatt',
    name: 'Zermatt Matterhorn Pass',
    type: 'Alpine Traverse • 8 Expeditions',
    status: 'High Visibility',
    statusClass: 'bg-primary-container text-on-primary',
    lat: '45.9765° N',
    lng: '7.7491° E',
    temperature: '1°C',
    weather: 'Powder Snow',
    activeExplorers: 98
  },
  {
    id: 'kyoto_radar',
    name: 'Kyoto Bamboo Sanctuary',
    type: 'Zen Heritage • 15 Expeditions',
    status: 'Serene',
    statusClass: 'bg-secondary-container text-on-secondary-container',
    lat: '35.0116° N',
    lng: '135.7681° E',
    temperature: '14°C',
    weather: 'Misty Dawn',
    activeExplorers: 215
  }
];

export const PACKING_ITEMS = [
  { id: 'p1', category: 'Documentation', text: 'Biometric Passport & Digital Visa backups', checked: true },
  { id: 'p2', category: 'Documentation', text: 'ExploreVerse verified expedition itinerary PDF', checked: true },
  { id: 'p3', category: 'Gear & Tech', text: 'Universal travel adapter + 65W GaN charger', checked: true },
  { id: 'p4', category: 'Gear & Tech', text: 'Compact mirrorless camera or zoom lens', checked: false },
  { id: 'p5', category: 'Clothing', text: 'Breathable Merino wool base layers (2 pairs)', checked: false },
  { id: 'p6', category: 'Clothing', text: 'Gore-Tex waterproof packable windbreaker', checked: true },
  { id: 'p7', category: 'Health & Wellness', text: 'High-altitude hydration tablets & sunscreen SPF 50', checked: false },
  { id: 'p8', category: 'Sustainability', text: 'Self-cleaning UV water bottle & reusable linen tote', checked: true }
];

