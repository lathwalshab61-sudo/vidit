import { Router } from 'express';
import { getDb, saveDb } from '../data/db.js';

const router = Router();

// POST concierge request
router.post('/message', (req, res) => {
  const { message, explorerName } = req.body;

  if (!message || !message.trim()) {
    return res.status(400).json({ success: false, message: 'Message content is required' });
  }

  const db = getDb();
  if (!db.conciergeMessages) db.conciergeMessages = [];

  const ticket = {
    id: `ticket-${Date.now()}`,
    explorerName: explorerName || 'Elena Rostova',
    message: message.trim(),
    status: 'received',
    receivedAt: new Date().toISOString(),
    estimatedResponseTimeMinutes: 12
  };

  db.conciergeMessages.push(ticket);
  saveDb(db);

  res.status(201).json({
    success: true,
    message: 'Your dispatch has reached the on-duty concierge desk.',
    data: ticket
  });
});

export default router;

