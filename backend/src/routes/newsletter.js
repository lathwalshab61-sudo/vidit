import { Router } from 'express';
import { getDb, saveDb } from '../data/db.js';

const router = Router();

// POST subscribe to weekly dispatch
router.post('/subscribe', (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ success: false, message: 'Valid email address is required' });
  }

  const db = getDb();
  if (!db.newsletterSubscribers) db.newsletterSubscribers = [];

  const existing = db.newsletterSubscribers.find(s => s.email?.toLowerCase() === email.toLowerCase());
  if (existing) {
    return res.json({ success: true, message: 'Already subscribed to ExploreVerse Weekly Dispatch.' });
  }

  db.newsletterSubscribers.push({
    email,
    subscribedAt: new Date().toISOString()
  });

  saveDb(db);

  res.status(201).json({
    success: true,
    message: 'Welcome to the ExploreVerse Private Dispatch!'
  });
});

export default router;

