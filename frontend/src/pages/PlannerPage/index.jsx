import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import RadarMap from '../../components/RadarMap';
import { DESTINATIONS } from '../../data/travelData';

export default function PlannerPage() {
  const {
    plannerDestination,
    setPlannerDestination,
    plannerDates,
    setPlannerDates,
    plannerTravelers,
    setPlannerTravelers,
    plannerBudget,
    setPlannerBudget,
    generatedItinerary,
    calculateItinerary,
    setSelectedDestination
  } = useApp();

  const [activeStep, setActiveStep] = useState(1);

  // Recommendations matching budget
  const recommendedDestinations = DESTINATIONS.filter(
    d => d.price <= plannerBudget
  );

  return (
    <div className="flex flex-col w-full py-4 max-w-7xl mx-auto animate-fade-in">
      {/* 1. INTERACTIVE TRIP PLANNER (WIDGET) */}
      <section className="w-full py-4 px-gutter-mobile">
        <div className="w-full rounded-3xl bg-surface-container-lowest p-6 shadow-[0_8px_30px_rgba(10,37,64,0.06)] border border-surface-container-high/40">
          <div className="flex items-center gap-2 mb-1">
            <span className="material-symbols-outlined text-secondary text-[22px]">tune</span>
            <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest">
              Tailored Journeys
            </span>
          </div>

          <h1 className="font-headline-sm text-headline-sm text-primary tracking-tight mb-2">
            Smart Expedition Planner
          </h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
            Configure your timeline and preferences; our AI travel desk maps out bespoke flights, eco-stays, and secret route passes.
          </p>

          <form className="flex flex-col gap-4" onSubmit={calculateItinerary}>
            {/* Destination Picker */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-label-md text-on-surface-variant font-medium">Where to?</label>
              <div className="flex items-center gap-2 px-3.5 py-3 rounded-2xl bg-surface-container-low text-on-surface border border-surface-container-high/40 focus-within:border-secondary transition-colors">
                <span className="material-symbols-outlined text-[20px] text-secondary">pin_drop</span>
                <input
                  className="w-full bg-transparent font-body-sm text-body-sm text-on-surface focus:outline-none font-medium"
                  type="text"
                  value={plannerDestination}
                  onChange={(e) => setPlannerDestination(e.target.value)}
                  placeholder="E.g. Reykjavik, Kyoto, Amalfi, Patagonia..."
                />
              </div>
            </div>

            {/* Dates & Travellers Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="font-label-md text-label-md text-on-surface-variant font-medium">Travel Dates</label>
                <div className="flex items-center gap-2 px-3.5 py-3 rounded-2xl bg-surface-container-low text-on-surface border border-surface-container-high/40">
                  <span className="material-symbols-outlined text-[18px] text-secondary">calendar_today</span>
                  <input
                    type="text"
                    value={plannerDates}
                    onChange={(e) => setPlannerDates(e.target.value)}
                    className="w-full bg-transparent font-body-sm text-xs font-medium focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-label-md text-label-md text-on-surface-variant font-medium">Travelers</label>
                <div className="flex items-center gap-2 px-3.5 py-3 rounded-2xl bg-surface-container-low text-on-surface border border-surface-container-high/40">
                  <span className="material-symbols-outlined text-[18px] text-secondary">group</span>
                  <select
                    value={plannerTravelers}
                    onChange={(e) => setPlannerTravelers(e.target.value)}
                    className="w-full bg-transparent font-body-sm text-xs font-medium focus:outline-none cursor-pointer"
                  >
                    <option value="1 Explorer • Solo">1 Explorer • Solo</option>
                    <option value="2 Explorers • Duo">2 Explorers • Duo</option>
                    <option value="3-4 Explorers • Small Squad">3-4 Explorers • Small Squad</option>
                    <option value="5+ Explorers • Private Charter">5+ Explorers • Private Charter</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Budget Slider Widget */}
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center justify-between">
                <label className="font-label-md text-label-md text-on-surface-variant font-medium">
                  Estimated Budget (USD)
                </label>
                <span className="font-headline-sm text-lg text-primary font-bold">
                  ${Number(plannerBudget).toLocaleString()}
                </span>
              </div>
              <input
                className="w-full accent-secondary h-2 bg-surface-container-high rounded-lg cursor-pointer"
                max="8000"
                min="1000"
                step="100"
                type="range"
                value={plannerBudget}
                onChange={(e) => setPlannerBudget(Number(e.target.value))}
              />
              <div className="flex justify-between font-label-caps text-[10px] text-on-surface-variant/70">
                <span>$1,000 (Compact)</span>
                <span>$4,000 (Premium)</span>
                <span>$8,000+ (Ultra Private)</span>
              </div>
            </div>

            {/* Action Button */}
            <button
              className="mt-2 w-full py-4 px-4 rounded-2xl bg-secondary text-on-secondary font-label-lg text-label-lg shadow-md shadow-secondary/20 flex items-center justify-center gap-2 active:scale-98 transition-transform hover:bg-[#007f74] cursor-pointer"
              type="submit"
            >
              <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
              <span>Calculate My Custom Itinerary</span>
            </button>
          </form>

          {/* Generated Bespoke Itinerary Result */}
          {generatedItinerary && (
            <div className="mt-6 p-5 rounded-2xl bg-secondary-container/20 border border-secondary-container/60 animate-fade-in flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-secondary text-on-secondary font-label-caps text-[10px] uppercase font-bold">
                    {generatedItinerary.tier}
                  </span>
                  <h3 className="font-headline-sm text-lg text-primary font-bold mt-1">
                    {generatedItinerary.destination}
                  </h3>
                  <p className="font-body-sm text-xs text-on-surface-variant">
                    {generatedItinerary.dates} • {generatedItinerary.travelers}
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-label-caps text-[10px] text-on-surface-variant/70 uppercase block">Estimated</span>
                  <span className="font-headline-sm text-lg text-primary font-bold">
                    ${generatedItinerary.budget.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Eco Badge */}
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-container-lowest text-secondary text-xs font-semibold">
                <span className="material-symbols-outlined text-[18px]">energy_savings_leaf</span>
                <span>{generatedItinerary.carbonOffsetKg} kg CO₂ balanced with 120% climate offset credit.</span>
              </div>

              {/* Day-by-Day Route */}
              <div className="space-y-2">
                <h4 className="font-label-caps uppercase text-secondary font-bold text-xs tracking-wider">
                  Engineered Route Schedule
                </h4>
                {generatedItinerary.days.map((d, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-surface-container-lowest border border-surface-container-high/40 text-xs">
                    <span className="font-bold text-secondary font-label-caps uppercase">{d.day}:</span>
                    <span className="text-on-surface font-medium">{d.plan}</span>
                  </div>
                ))}
              </div>

              {/* Perks */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                {generatedItinerary.includedPerks.map((perk, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[11px] text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary text-[14px]">check</span>
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 2. ACTIVE WORLD RADAR MAP */}
      <RadarMap />

      {/* 3. MATCHING EXPEDITIONS IN BUDGET */}
      <section className="w-full py-6 px-gutter-mobile">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-0.5">
              Available Within Budget
            </span>
            <h2 className="font-headline-sm text-headline-sm text-primary tracking-tight">
              Recommended for ${plannerBudget.toLocaleString()}
            </h2>
          </div>
          <span className="font-label-caps text-xs text-on-surface-variant">
            {recommendedDestinations.length} Journeys
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendedDestinations.slice(0, 4).map(dest => (
            <div
              key={dest.id}
              onClick={() => setSelectedDestination(dest)}
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-surface-container-lowest border border-surface-container-high/50 hover:shadow-md transition-shadow cursor-pointer"
            >
              <img src={dest.image} alt={dest.title} className="w-20 h-20 rounded-xl object-cover" />
              <div className="flex-1 min-w-0">
                <span className="font-label-caps text-[10px] text-secondary uppercase font-bold">{dest.tag}</span>
                <h4 className="font-headline-sm text-sm text-primary font-bold truncate">{dest.title}</h4>
                <p className="font-body-sm text-xs text-on-surface-variant line-clamp-1">{dest.description}</p>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-bold text-xs text-primary">${dest.price.toLocaleString()}</span>
                  <span className="text-[11px] text-secondary font-medium flex items-center gap-0.5">
                    View <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

