import { Router } from 'express';
import { getDb } from '../data/db.js';

const router = Router();

// GET all stories
router.get('/', (req, res) => {
  const db = getDb();
  res.json({
    success: true,
    data: db.stories || []
  });
});

// GET single story by ID
router.get('/:id', (req, res) => {
  const db = getDb();
  const story = (db.stories || []).find(s => s.id === req.params.id);

  if (!story) {
    return res.status(404).json({ success: false, message: 'Story not found' });
  }

  res.json({ success: true, data: story });
});

export default router;

