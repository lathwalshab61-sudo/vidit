import { Router } from 'express';
import { getDb, saveDb } from '../data/db.js';

const router = Router();

// GET all hidden gems
router.get('/', (req, res) => {
  const { region } = req.query;
  const db = getDb();
  let results = db.hiddenGems || [];

  if (region && region !== 'all') {
    results = results.filter(g => g.tag.toLowerCase().includes(region.toLowerCase()));
  }

  res.json({
    success: true,
    count: results.length,
    data: results
  });
});

// GET single gem
router.get('/:id', (req, res) => {
  const db = getDb();
  const gem = (db.hiddenGems || []).find(g => g.id === req.params.id);

  if (!gem) {
    return res.status(404).json({ success: false, message: 'Hidden gem not found' });
  }

  res.json({ success: true, data: gem });
});

// POST unlock coordinates
router.post('/:id/unlock', (req, res) => {
  const db = getDb();
  const index = (db.hiddenGems || []).findIndex(g => g.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Hidden gem not found' });
  }

  db.hiddenGems[index].unlocked = true;
  saveDb(db);

  res.json({
    success: true,
    message: 'Coordinates unlocked successfully',
    data: db.hiddenGems[index]
  });
});

export default router;

