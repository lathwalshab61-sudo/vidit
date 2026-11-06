import { Router } from 'express';
import { getDb, saveDb } from '../data/db.js';

const router = Router();

// GET all destinations with optional filter & search
router.get('/', (req, res) => {
  const { category, search, maxPrice } = req.query;
  const db = getDb();
  let results = db.destinations || [];

  if (category && category !== 'all') {
    results = results.filter(d => d.category?.toLowerCase() === category.toLowerCase());
  }

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(d => 
      d.title.toLowerCase().includes(q) ||
      d.country.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q)
    );
  }

  if (maxPrice) {
    const limit = parseFloat(maxPrice);
    if (!isNaN(limit)) {
      results = results.filter(d => d.price <= limit);
    }
  }

  res.json({
    success: true,
    count: results.length,
    data: results
  });
});

// GET single destination by ID
router.get('/:id', (req, res) => {
  const db = getDb();
  const dest = (db.destinations || []).find(d => d.id === req.params.id);

  if (!dest) {
    return res.status(404).json({ success: false, message: 'Destination not found' });
  }

  res.json({ success: true, data: dest });
});

// POST new destination
router.post('/', (req, res) => {
  const { title, country, category, price, duration, image, description } = req.body;

  if (!title || !price) {
    return res.status(400).json({ success: false, message: 'Title and price are required' });
  }

  const db = getDb();
  const newDest = {
    id: `dest-${Date.now()}`,
    title,
    country: country || 'Global',
    tag: `${country || 'Global'} • Curated`,
    category: category || 'adventures',
    price: Number(price),
    duration: duration || '5 days',
    type: 'Curated Journey',
    rating: 5.0,
    reviewsCount: 1,
    level: 'Bespoke',
    image: image || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800',
    description: description || 'Exclusive ExploreVerse private itinerary.',
    highlights: ['Bespoke Concierge', 'Sustainable Transport'],
    itinerarySummary: [{ day: 'Day 1', title: 'Arrival & Welcome' }]
  };

  db.destinations.push(newDest);
  saveDb(db);

  res.status(201).json({ success: true, data: newDest });
});

export default router;

