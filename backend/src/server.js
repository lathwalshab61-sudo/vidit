import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import destinationsRouter from './routes/destinations.js';
import hiddenGemsRouter from './routes/hiddenGems.js';
import plannerRouter from './routes/planner.js';
import radarRouter from './routes/radar.js';
import storiesRouter from './routes/stories.js';
import newsletterRouter from './routes/newsletter.js';
import conciergeRouter from './routes/concierge.js';
import packingRouter from './routes/packing.js';
import bookingsRouter from './routes/bookings.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
app.use(express.json());

// API Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'ExploreVerse Full Stack API',
    version: '1.0.0'
  });
});

// Mount Routes
app.use('/api/destinations', destinationsRouter);
app.use('/api/hidden-gems', hiddenGemsRouter);
app.use('/api/planner', plannerRouter);
app.use('/api/radar', radarRouter);
app.use('/api/stories', storiesRouter);
app.use('/api/newsletter', newsletterRouter);
app.use('/api/concierge', conciergeRouter);
app.use('/api/packing', packingRouter);
app.use('/api/bookings', bookingsRouter);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ success: false, message: 'Internal Server Error', error: err.message });
});

// Start Server
app.listen(PORT, () => {
  console.log(`ExploreVerse API server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});

