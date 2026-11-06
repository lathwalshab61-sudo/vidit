import { Router } from 'express';
import { getDb, saveDb } from '../data/db.js';

const router = Router();

// GET all bookings
router.get('/', (req, res) => {
  const db = getDb();
  res.json({
    success: true,
    data: db.bookings || []
  });
});

// POST reserve an expedition
router.post('/reserve', (req, res) => {
  const { destinationId, destinationTitle, departureDate, price, explorerName } = req.body;

  if (!destinationId) {
    return res.status(400).json({ success: false, message: 'Destination ID is required' });
  }

  const db = getDb();
  if (!db.bookings) db.bookings = [];

  const reservation = {
    bookingId: `BK-${Math.random().toString(36).substr(2, 7).toUpperCase()}`,
    destinationId,
    destinationTitle: destinationTitle || 'Expedition Journey',
    departureDate: departureDate || '2025-11-15',
    price: price || 0,
    explorerName: explorerName || 'Elena Rostova',
    status: 'confirmed',
    reservedAt: new Date().toISOString()
  };

  db.bookings.push(reservation);
  saveDb(db);

  res.status(201).json({
    success: true,
    message: 'Expedition reservation confirmed!',
    data: reservation
  });
});

export default router;

