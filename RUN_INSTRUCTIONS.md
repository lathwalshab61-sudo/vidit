# ExploreVerse — Full Stack Setup & Run Instructions

This guide provides step-by-step instructions for running the **Node.js / Express Backend** and the **React + Vite Frontend** together or in separate terminal windows.

---

## 🏗️ Architecture Overview

| Service | Technology | Port | Purpose |
| :--- | :--- | :--- | :--- |
| **Backend API** | Node.js + Express + JSON DB | `5000` | REST API for destinations, hidden gems, AI trip planner, radar hubs & bookings |
| **Frontend UI** | React 18 + Vite + Tailwind CSS | `3000` | High-fidelity editorial web app with 5 dedicated page modules & interactive radar |

---

## ⚡ Option 1: Run Both Simultaneously (Single Command)

From the project root directory (`New folder (4)`):

```bash
npm run dev
```

This uses `concurrently` to spin up both the Express API and the Vite development server side-by-side with colored logs:
- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Backend API:** [http://localhost:5000](http://localhost:5000)
- **Health Check:** [http://localhost:5000/api/health](http://localhost:5000/api/health)

Press `Ctrl + C` at any time to gracefully stop both servers.

---

## 💻 Option 2: Run in Two Separate Terminals

If you prefer dedicated terminal tabs for cleaner debugging:

### Terminal 1: Backend Server
```bash
cd backend
npm run dev
```
*(Starts Express with Node 20+ built-in watch mode at `http://localhost:5000`)*

### Terminal 2: Frontend Client
```bash
cd frontend
npm run dev
```
*(Starts Vite dev server at `http://localhost:3000`)*

---

## 🧪 Testing & Verifying The Full Stack Connection

Once both servers are running:

1. **Open the Frontend:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your web browser.
   - Explore all 5 views using the floating bottom navigation bar: **Explore**, **Planner**, **Gems**, **Guides**, and **Profile**.
   - Test the interactive **Smart Expedition Planner** with the budget slider and custom itinerary generation.
   - Click **Unlock Coordinates** on any Secret Atlas gem to copy verified GPS coordinates.
   - Test the **Nomad Packing Matrix** by checking items or adding custom gear.

2. **Verify Backend Endpoints:**
   Open any of the following URLs in your browser or test with `curl` / Postman:
   - `GET http://localhost:5000/api/health` — Confirms server status
   - `GET http://localhost:5000/api/destinations` — Curated journeys dataset
   - `GET http://localhost:5000/api/hidden-gems` — Secret Atlas sanctuaries
   - `GET http://localhost:5000/api/radar/hubs` — Real-time telemetry coordinates & active explorers

---

## 📦 Building for Production

To create an optimized production build of the frontend:

```bash
cd frontend
npm run build
```

This outputs static HTML, CSS, and JS files to `frontend/dist/` ready for deployment to Vercel, Netlify, or AWS S3.

