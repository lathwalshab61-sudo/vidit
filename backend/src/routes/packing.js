import { Router } from 'express';
import { getDb, saveDb } from '../data/db.js';

const router = Router();

// GET all packing items
router.get('/', (req, res) => {
  const db = getDb();
  res.json({
    success: true,
    data: db.packingItems || []
  });
});

// POST toggle item checked
router.post('/toggle/:id', (req, res) => {
  const db = getDb();
  const item = (db.packingItems || []).find(p => p.id === req.params.id);

  if (!item) {
    return res.status(404).json({ success: false, message: 'Item not found' });
  }

  item.checked = !item.checked;
  saveDb(db);

  res.json({
    success: true,
    data: item
  });
});

// POST add new packing item
router.post('/add', (req, res) => {
  const { text, category } = req.body;

  if (!text || !text.trim()) {
    return res.status(400).json({ success: false, message: 'Item text is required' });
  }

  const db = getDb();
  if (!db.packingItems) db.packingItems = [];

  const newItem = {
    id: `p-${Date.now()}`,
    category: category || 'Custom Field Item',
    text: text.trim(),
    checked: false
  };

  db.packingItems.push(newItem);
  saveDb(db);

  res.status(201).json({
    success: true,
    data: newItem
  });
});

export default router;

