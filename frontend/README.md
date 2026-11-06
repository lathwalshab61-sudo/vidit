# ExploreVerse — React + Vite Full Stack Frontend

A high-end editorial travel discovery application built with **React**, **Vite**, and **Tailwind CSS**, designed based on the **ExploreVerse Narrative System** Google Stitch specification.

---

## 📁 Architecture & Page Directory Structure

Each page is modularized into its own dedicated directory under `src/pages/`:

```
frontend/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── context/
    │   └── AppContext.jsx          # Central reactive state (active tab, bookmarks, modals, planner)
    ├── data/
    │   └── travelData.js           # Structured datasets (destinations, gems, stories, radar hubs)
    ├── pages/
    │   ├── ExplorePage/
    │   │   └── index.jsx           # Editorial Hero, Category Rail, Escapes, Reviews, Mission & Footer
    │   ├── PlannerPage/
    │   │   └── index.jsx           # Smart Expedition Planner, Budget Slider, Bespoke Generator, Radar Map
    │   ├── HiddenGemsPage/
    │   │   └── index.jsx           # Secret Atlas Curation, Off-grid Sanctuaries & Coordinate Unlocks
    │   ├── GuidesPage/
    │   │   └── index.jsx           # In-Depth Travel Stories & Interactive Nomad Packing Matrix
    │   └── ProfilePage/
    │       └── index.jsx           # Explorer Profile, Saved Bookmarks & 24/7 Satellite Concierge
    └── components/
        ├── Header/
        │   └── index.jsx           # Top App Bar with brand logo, quick search & dispatches
        ├── BottomNav/
        │   └── index.jsx           # Floating glassmorphic tab bar with active indicator
        ├── DestinationCard/
        │   └── index.jsx           # Interactive journey cards with pricing & favorite toggles
        ├── HiddenGemCard/
        │   └── index.jsx           # Frosted secret atlas gem cards
        ├── RadarMap/
        │   └── index.jsx           # Interactive live coordinate radar with telemetry pins
        └── Modals/
            ├── JourneyModal.jsx    # Complete journey details, itinerary schedule & booking
            ├── GemModal.jsx        # Verified coordinates, elevation, season & secret tips
            ├── StoryModal.jsx      # Editorial journal reader
            ├── SearchModal.jsx     # Live universal search across all categories & destinations
            └── NotificationsModal.jsx # Real-time dispatch drawer
```

---

## 🚀 Running the Project

### Development Server
```bash
cd frontend
npm run dev
```

### Production Build
```bash
cd frontend
npm run build
```

### Preview Production Build
```bash
cd frontend
npm run preview
```

