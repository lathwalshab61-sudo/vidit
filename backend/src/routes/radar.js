import { Router } from 'express';
import { getDb } from '../data/db.js';

const router = Router();

// GET all radar hubs
router.get('/hubs', (req, res) => {
  const db = getDb();
  res.json({
    success: true,
    data: db.radarHubs || []
  });
});

export default router;

