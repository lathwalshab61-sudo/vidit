import { Router } from 'express';

const router = Router();

// POST calculate custom itinerary
router.post('/calculate', (req, res) => {
  const { destination, dates, travelers, budget } = req.body;

  if (!destination) {
    return res.status(400).json({ success: false, message: 'Destination is required' });
  }

  const numericBudget = Number(budget) || 3200;
  const tier = numericBudget > 5000 
    ? 'Ultra Luxury Private Expedition' 
    : numericBudget > 2500 
    ? 'Curated Premium Journey' 
    : 'Essential Explorer Package';

  const carbonOffsetKg = Math.round(numericBudget * 0.45);

  const perks = [
    'Dedicated 24/7 Satellite Concierge Desk',
    'Private High-Altitude / Glacier Transportation',
    'Eco-Luxury Geothermal Stays & Indigenous Hospitality',
    '120% Certified UN Gold Standard Carbon Offset'
  ];

  if (numericBudget > 5000) {
    perks.push('Private Helicopter Transfers', 'Michelin-Starred Field Chef');
  }

  const itinerary = {
    destination: destination || 'Reykjavik & South Coast, Iceland',
    dates: dates || 'Oct 14 - 22, 2025',
    travelers: travelers || '2 Explorers • Duo',
    budget: numericBudget,
    tier,
    carbonOffsetKg,
    includedPerks: perks,
    days: [
      { day: 'Day 1', plan: `Private arrival transfer & welcome orientation in ${destination}` },
      { day: 'Day 2', plan: 'Highland 4x4 expedition & secluded geological exploration' },
      { day: 'Day 3', plan: 'Glacial sanctuary navigation & private zodiac excursion' },
      { day: 'Day 4', plan: 'Indigenous culinary masterclass & evening dark-sky stargazing' },
      { day: 'Day 5', plan: 'Alpine pass hot spring retreat & departure send-off' }
    ]
  };

  res.json({
    success: true,
    data: itinerary
  });
});

export default router;

