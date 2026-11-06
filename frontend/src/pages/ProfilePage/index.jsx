import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { DESTINATIONS, HIDDEN_GEMS } from '../../data/travelData';

export default function ProfilePage() {
  const { savedIds, toggleBookmark, setSelectedDestination, setSelectedGem, setActiveTab } = useApp();
  const [conciergeMsg, setConciergeMsg] = useState('');
  const [conciergeSent, setConciergeSent] = useState(false);

  // Find saved destinations and gems
  const savedDestinations = DESTINATIONS.filter(d => savedIds.includes(d.id));
  const savedGems = HIDDEN_GEMS.filter(g => savedIds.includes(g.id));

  const handleSendConcierge = (e) => {
    e.preventDefault();
    if (!conciergeMsg.trim()) return;
    setConciergeSent(true);
    setTimeout(() => {
      setConciergeSent(false);
      setConciergeMsg('');
    }, 3000);
  };

  return (
    <div className="flex flex-col w-full py-4 max-w-7xl mx-auto px-gutter-mobile animate-fade-in space-y-6">
      {/* 1. PROFILE HEADER CARD */}
      <div className="rounded-3xl bg-surface-container-lowest p-6 shadow-sm border border-surface-container-high/50 flex flex-col sm:flex-row items-center sm:items-start gap-5">
        <div className="relative">
          <img
            alt="Elena Rostova"
            className="w-24 h-24 rounded-full object-cover ring-4 ring-secondary/30 shadow-md"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7kIrtd6RgIXtWkjSWxmjDq6kKCxlyFRwpmoH0181Ga4qmA7oTCSW2YYL4g8bYoAX3p7Q7_EcyZ0Q-bea-xE7roG6eYVkNnoXT-3PD21MhiGVaHp3W1XQ5QmqD_EMjPo4kBVlE9sNqKTLGFEgu_mB1pC6OZC6zeL9UNhR6iCheGWrb6qDyHytZRZXrwTeVfm16FeinbAX4Tzn4d8nolla40DwZ4ovZmWKnWmCAMg"
          />
          <span className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-xs shadow">
            <span className="material-symbols-outlined text-[14px]">verified</span>
          </span>
        </div>

        <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h1 className="font-headline-sm text-2xl text-primary font-bold">Elena Rostova</h1>
              <p className="font-label-caps text-xs text-secondary font-bold uppercase tracking-wider">
                Elite Explorer • Tier III Patron
              </p>
            </div>
            <span className="self-center sm:self-auto px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-caps text-xs font-bold">
              120% Carbon Neutral
            </span>
          </div>

          <p className="font-body-sm text-xs text-on-surface-variant mt-2 leading-relaxed">
            Alpine backpacker and coastal sailing enthusiast. Currently tracking seasonal aurora patterns and high-altitude Andean trails.
          </p>

          {/* Metrics Ribbon */}
          <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-surface-container-high/40 text-center">
            <div className="flex flex-col">
              <span className="font-headline-sm text-lg text-primary font-bold">14</span>
              <span className="font-label-caps text-[10px] text-on-surface-variant/70 uppercase">Expeditions</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-lg text-primary font-bold">{savedIds.length}</span>
              <span className="font-label-caps text-[10px] text-on-surface-variant/70 uppercase">Saved Places</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-lg text-secondary font-bold">2.4 t</span>
              <span className="font-label-caps text-[10px] text-on-surface-variant/70 uppercase">CO₂ Balanced</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SAVED BUCKET LIST */}
      <section className="rounded-3xl bg-surface-container-lowest p-6 shadow-sm border border-surface-container-high/50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              favorite
            </span>
            <h2 className="font-headline-sm text-lg text-primary font-bold">Saved Journeys & Coordinates</h2>
          </div>
          <span className="font-label-caps text-xs text-on-surface-variant">
            {savedDestinations.length + savedGems.length} Items Saved
          </span>
        </div>

        {savedDestinations.length === 0 && savedGems.length === 0 ? (
          <div className="py-8 text-center text-on-surface-variant">
            <p className="text-sm">No saved places yet.</p>
            <button
              onClick={() => setActiveTab('explore')}
              className="mt-3 px-4 py-2 rounded-full bg-secondary text-on-secondary text-xs font-bold"
            >
              Browse Expeditions
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {savedDestinations.map(dest => (
              <div
                key={dest.id}
                className="flex items-center gap-3 p-3 rounded-2xl bg-surface-container-low border border-surface-container-high/40 hover:bg-surface-container transition-colors"
              >
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-16 h-16 rounded-xl object-cover cursor-pointer"
                  onClick={() => setSelectedDestination(dest)}
                />
                <div className="flex-1 min-w-0 cursor-pointer" onClick={() => setSelectedDestination(dest)}>
                  <h4 className="font-headline-sm text-sm text-primary font-bold truncate">{dest.title}</h4>
                  <p className="font-label-caps text-[11px] text-secondary">{dest.tag} • ${dest.price}</p>
                </div>
                <button
                  onClick={() => toggleBookmark(dest.id)}
                  className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary hover:text-red-500 transition-colors"
                  title="Remove from saved"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                </button>
              </div>
            ))}

            {savedGems.map(gem => (
              <div
                key={gem.id}
                className="flex items-center gap-3 p-3 rounded-2xl bg-surface-container-low border border-surface-container-high/40 hover:bg-surface-container transition-colors"
              >
                <img
                  src={gem.image}
                  alt={gem.title}
                  className="w-16 h-16 rounded-xl object-cover cursor-pointer"
                  onClick={() => setSelectedGem(gem)}
                />
                <div className="flex-1 min-w-0 cursor-pointer" onClick={() => setSelectedGem(gem)}>
                  <h4 className="font-headline-sm text-sm text-primary font-bold truncate">{gem.title}</h4>
                  <p className="font-mono text-[10px] text-secondary truncate">{gem.coordinates}</p>
                </div>
                <button
                  onClick={() => toggleBookmark(gem.id)}
                  className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary hover:text-red-500 transition-colors"
                  title="Remove from saved"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 3. 24/7 PRIVATE CONCIERGE CHAT WIDGET */}
      <section className="rounded-3xl bg-primary text-on-primary p-6 shadow-xl flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">headset_mic</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-base text-on-primary font-bold leading-tight">
                Private Satellite Concierge Desk
              </h3>
              <p className="font-body-sm text-xs text-primary-fixed-dim/80">
                Direct encrypted line to your dedicated global journey curator.
              </p>
            </div>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-caps text-[10px] font-bold uppercase">
            Live 24/7
          </span>
        </div>

        {conciergeSent ? (
          <div className="p-4 rounded-2xl bg-secondary text-on-secondary text-xs flex items-center gap-2 animate-fade-in font-medium">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            <span>Your dispatch has reached the on-duty concierge desk. Response time ~12 minutes.</span>
          </div>
        ) : (
          <form onSubmit={handleSendConcierge} className="flex flex-col gap-2.5">
            <textarea
              rows={2}
              value={conciergeMsg}
              onChange={(e) => setConciergeMsg(e.target.value)}
              placeholder="Ask about charter permits, helicopter luggage allowances, or secret villa availability..."
              className="w-full p-3 rounded-2xl bg-surface-container-lowest/15 text-xs text-on-primary placeholder-primary-fixed-dim/60 focus:outline-none border border-white/10 focus:border-secondary resize-none"
            />
            <button
              type="submit"
              className="self-end px-5 py-2.5 rounded-full bg-secondary text-on-secondary font-label-md text-xs font-bold flex items-center gap-1.5 active:scale-95 transition-transform hover:bg-[#007f74] cursor-pointer"
            >
              <span>Transmit Request</span>
              <span className="material-symbols-outlined text-[16px]">send</span>
            </button>
          </form>
        )}
      </section>

      {/* 4. EXPEDITION PREFERENCES */}
      <section className="rounded-3xl bg-surface-container-lowest p-6 shadow-sm border border-surface-container-high/50">
        <h3 className="font-headline-sm text-base text-primary font-bold mb-3">Travel DNA & Passports</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-2xl bg-surface-container-low flex flex-col gap-1">
            <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold">Rhythm & Pace</span>
            <span className="font-semibold text-primary">Slow & Immersive (6-10 days)</span>
          </div>
          <div className="p-3 rounded-2xl bg-surface-container-low flex flex-col gap-1">
            <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold">Preferred Terrains</span>
            <span className="font-semibold text-primary">Glacial Fjords & Island Coves</span>
          </div>
          <div className="p-3 rounded-2xl bg-surface-container-low flex flex-col gap-1">
            <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold">Culinary Tier</span>
            <span className="font-semibold text-primary">Hyper-Local & Michelin Foraging</span>
          </div>
        </div>
      </section>
    </div>
  );
}

