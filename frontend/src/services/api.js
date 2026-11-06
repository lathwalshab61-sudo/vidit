import { DESTINATIONS, HIDDEN_GEMS, STORIES, RADAR_HUBS, PACKING_ITEMS } from '../data/travelData';

const API_BASE = '/api';

/**
 * Robust fetch wrapper with timeout and fallback support
 */
async function apiFetch(endpoint, options = {}, fallbackData = null) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const response = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {})
      }
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} from ${endpoint}`);
    }

    const json = await response.json();
    return json.data !== undefined ? json.data : json;
  } catch (error) {
    console.warn(`[ExploreVerse API] Fallback active for ${endpoint}:`, error.message);
    return fallbackData;
  }
}

export const api = {
  // Destinations
  async getDestinations(params = {}) {
    const query = new URLSearchParams(params).toString();
    const endpoint = query ? `/destinations?${query}` : '/destinations';
    return apiFetch(endpoint, { method: 'GET' }, DESTINATIONS);
  },

  async getDestinationById(id) {
    const fallback = DESTINATIONS.find(d => d.id === id);
    return apiFetch(`/destinations/${id}`, { method: 'GET' }, fallback);
  },

  // Hidden Gems
  async getHiddenGems(region = '') {
    const endpoint = region && region !== 'all' ? `/hidden-gems?region=${region}` : '/hidden-gems';
    return apiFetch(endpoint, { method: 'GET' }, HIDDEN_GEMS);
  },

  async unlockGem(id) {
    return apiFetch(`/hidden-gems/${id}/unlock`, { method: 'POST' }, { unlocked: true });
  },

  // Smart Planner
  async calculateItinerary(payload) {
    return apiFetch('/planner/calculate', {
      method: 'POST',
      body: JSON.stringify(payload)
    }, {
      destination: payload.destination || 'Reykjavik & South Coast, Iceland',
      dates: payload.dates || 'Oct 14 - 22, 2025',
      travelers: payload.travelers || '2 Explorers • Duo',
      budget: payload.budget || 3200,
      tier: (payload.budget || 3200) > 5000 ? 'Ultra Luxury Private Expedition' : 'Curated Premium Journey',
      carbonOffsetKg: Math.round((payload.budget || 3200) * 0.45),
      includedPerks: [
        'Dedicated 24/7 Satellite Concierge Desk',
        'Private 4x4 Highland Glacier Transportation',
        'Eco-Luxury Geothermal Lagoon & Retreat Stays',
        '120% Certified UN Gold Standard Carbon Offset'
      ],
      days: [
        { day: 'Day 1', plan: 'Private arrival transfer to Reykjavik Blue Lagoon Silk Hotel' },
        { day: 'Day 2', plan: 'Golden Circle Superjeep expedition & Secret Waterfall caves' },
        { day: 'Day 3', plan: 'South Coast Black Sand Beach & Skógafoss glacial valley' },
        { day: 'Day 4', plan: 'Jökulsárlón Glacier Lagoon private zodiac boat navigation' },
        { day: 'Day 5', plan: 'Aurora Borealis midnight flight & mountain pass hot springs' }
      ]
    });
  },

  // Radar Hubs
  async getRadarHubs() {
    return apiFetch('/radar/hubs', { method: 'GET' }, RADAR_HUBS);
  },

  // Stories
  async getStories() {
    return apiFetch('/stories', { method: 'GET' }, STORIES);
  },

  // Bookings
  async reserveExpedition(payload) {
    return apiFetch('/bookings/reserve', {
      method: 'POST',
      body: JSON.stringify(payload)
    }, {
      bookingId: `BK-${Math.random().toString(36).substr(2, 7).toUpperCase()}`,
      status: 'confirmed',
      ...payload
    });
  },

  // Packing Checklist
  async getPackingItems() {
    return apiFetch('/packing', { method: 'GET' }, PACKING_ITEMS);
  },

  async togglePackingItem(id) {
    return apiFetch(`/packing/toggle/${id}`, { method: 'POST' }, { id, toggled: true });
  },

  async addPackingItem(payload) {
    return apiFetch('/packing/add', {
      method: 'POST',
      body: JSON.stringify(payload)
    }, {
      id: `p-${Date.now()}`,
      ...payload,
      checked: false
    });
  },

  // Newsletter
  async subscribeNewsletter(email) {
    return apiFetch('/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email })
    }, { success: true, message: 'Welcome to the ExploreVerse Private Dispatch!' });
  },

  // Concierge
  async sendConciergeMessage(message, explorerName) {
    return apiFetch('/concierge/message', {
      method: 'POST',
      body: JSON.stringify({ message, explorerName })
    }, {
      ticketId: `ticket-${Date.now()}`,
      status: 'received',
      estimatedResponseTimeMinutes: 12
    });
  }
};
