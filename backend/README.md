# ExploreVerse — Node.js / Express Backend API

RESTful API backend for the ExploreVerse full-stack application.

---

## 🚀 Getting Started

### Install Dependencies
```bash
cd backend
npm install
```

### Run Server
```bash
npm run dev
# or production mode
npm start
```
Default server URL: `http://localhost:5000`

---

## 📡 API Endpoints

### 1. Destinations & Escapes
- `GET /api/destinations` — List all destinations (supports `?category=`, `?search=`, `?maxPrice=`)
- `GET /api/destinations/:id` — Get single destination details
- `POST /api/destinations` — Create a new curated journey

### 2. Secret Atlas Hidden Gems
- `GET /api/hidden-gems` — List all off-grid sanctuaries (`?region=`)
- `GET /api/hidden-gems/:id` — Get sanctuary details
- `POST /api/hidden-gems/:id/unlock` — Unlock GPS coordinates & field notes

### 3. Expedition Planner
- `POST /api/planner/calculate` — AI-driven route generator (payload: `{ destination, dates, travelers, budget }`)

### 4. Live Radar Telemetry
- `GET /api/radar/hubs` — Active world radar stations, weather, temperatures, active explorers

### 5. Travel Stories & Field Journals
- `GET /api/stories` — Editorial travel articles
- `GET /api/stories/:id` — Single article by ID

### 6. Bookings & Reservations
- `POST /api/bookings/reserve` — Reserve an expedition (`{ destinationId, destinationTitle, departureDate, price }`)
- `GET /api/bookings` — List confirmed reservations

### 7. Nomad Packing Matrix
- `GET /api/packing` — Fetch all checklist items
- `POST /api/packing/toggle/:id` — Toggle checked status
- `POST /api/packing/add` — Add custom expedition gear item (`{ text, category }`)

### 8. Concierge & Weekly Dispatch
- `POST /api/newsletter/subscribe` — Subscribe to Sunday Secret Coordinates newsletter
- `POST /api/concierge/message` — Transmit message to 24/7 Satellite Concierge Desk

