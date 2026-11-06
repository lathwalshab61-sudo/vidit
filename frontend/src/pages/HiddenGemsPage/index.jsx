import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { HIDDEN_GEMS } from '../../data/travelData';

export default function HiddenGemsPage() {
  const { setSelectedGem, toggleBookmark, isBookmarked } = useApp();
  const [filterRegion, setFilterRegion] = useState('all');

  const filteredGems = filterRegion === 'all'
    ? HIDDEN_GEMS
    : HIDDEN_GEMS.filter(g => g.tag.toLowerCase().includes(filterRegion.toLowerCase()));

  return (
    <div className="flex flex-col w-full py-4 max-w-7xl mx-auto px-gutter-mobile animate-fade-in">
      {/* Page Header */}
      <div className="relative w-full rounded-3xl bg-primary-container text-on-primary p-6 mb-6 overflow-hidden shadow-xl">
        <div className="absolute -top-16 -right-16 w-52 h-52 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-1.5 text-secondary-fixed mb-1.5">
            <span className="material-symbols-outlined text-[20px]">diamond</span>
            <span className="font-label-caps text-label-caps uppercase tracking-widest font-bold">
              The Secret Atlas 2025
            </span>
          </div>
          <h1 className="font-headline-sm text-2xl text-on-primary font-bold tracking-tight mb-2">
            Restricted & Off-Grid Sanctuaries
          </h1>
          <p className="font-body-sm text-body-sm text-primary-fixed-dim/90 max-w-xl leading-relaxed">
            Locations that refuse mass commercialization. Each coordinate requires verified access, localized guides, and strict leave-no-trace protocols.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
        {[
          { id: 'all', label: 'All Sanctuaries' },
          { id: 'Archipelago', label: 'Remote Archipelagos' },
          { id: 'Salt Flat', label: 'Cosmic Salt Flats' },
          { id: 'Desert', label: 'Desert Oases' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setFilterRegion(tab.id)}
            className={`px-4 py-2 rounded-full text-xs font-label-md transition-all whitespace-nowrap cursor-pointer ${
              filterRegion === tab.id
                ? 'bg-secondary text-on-secondary shadow-md font-bold'
                : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'
            }`}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Gems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGems.map(gem => {
          const bookmarked = isBookmarked(gem.id);
          return (
            <article
              key={gem.id}
              className="flex flex-col rounded-3xl bg-surface-container-lowest overflow-hidden shadow-sm border border-surface-container-high/50 hover:shadow-xl transition-all"
            >
              <div className="relative w-full h-52 group">
                <img
                  src={gem.image}
                  alt={gem.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-primary-container/80 backdrop-blur-md text-secondary-fixed font-label-caps text-xs uppercase font-bold">
                    {gem.tag}
                  </span>
                  <button
                    onClick={() => toggleBookmark(gem.id)}
                    className="w-9 h-9 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-primary flex items-center justify-center shadow-sm active:scale-90 transition-transform"
                    type="button"
                    aria-label="Save"
                  >
                    <span
                      className={`material-symbols-outlined text-[18px] ${bookmarked ? 'text-secondary' : 'text-on-surface'}`}
                      style={bookmarked ? { fontVariationSettings: "'FILL' 1" } : {}}
                    >
                      favorite
                    </span>
                  </button>
                </div>

                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-on-primary">
                  <span className="font-mono text-xs text-secondary-fixed bg-primary-container/70 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                    {gem.coordinates}
                  </span>
                  <span className="bg-secondary text-on-secondary px-2.5 py-0.5 rounded-full font-label-caps text-[10px] uppercase font-bold">
                    {gem.badge}
                  </span>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-3 flex-1 justify-between">
                <div>
                  <h3 className="font-headline-sm text-lg text-primary font-bold mb-1">{gem.title}</h3>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed mb-3">
                    {gem.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 py-2 px-3 rounded-xl bg-surface-container-low text-xs">
                    <div>
                      <span className="text-[10px] text-on-surface-variant uppercase font-label-caps block">Elevation</span>
                      <span className="font-bold text-primary">{gem.elevation}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-on-surface-variant uppercase font-label-caps block">Season</span>
                      <span className="font-bold text-primary">{gem.bestSeason}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedGem(gem)}
                  className="w-full py-2.5 rounded-xl bg-secondary text-on-secondary font-label-md text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-secondary/20 hover:bg-[#007f74] active:scale-98 transition-transform cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">lock_open</span>
                  <span>Unlock Coordinates & Field Notes</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

