import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { DESTINATIONS, HIDDEN_GEMS, STORIES } from '../../data/travelData';

export default function SearchModal() {
  const { 
    isSearchOpen, 
    setIsSearchOpen, 
    searchQuery, 
    setSearchQuery,
    setSelectedDestination,
    setSelectedGem,
    setSelectedStory
  } = useApp();

  if (!isSearchOpen) return null;

  const query = searchQuery.trim().toLowerCase();

  const filteredDestinations = query
    ? DESTINATIONS.filter(
        d => d.title.toLowerCase().includes(query) ||
             d.country.toLowerCase().includes(query) ||
             d.description.toLowerCase().includes(query)
      )
    : DESTINATIONS.slice(0, 3);

  const filteredGems = query
    ? HIDDEN_GEMS.filter(
        g => g.title.toLowerCase().includes(query) ||
             g.region.toLowerCase().includes(query) ||
             g.description.toLowerCase().includes(query)
      )
    : HIDDEN_GEMS.slice(0, 2);

  const filteredStories = query
    ? STORIES.filter(
        s => s.title.toLowerCase().includes(query) ||
             s.category.toLowerCase().includes(query)
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 bg-primary-container/70 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-surface-container-lowest rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-surface-container-high max-h-[80vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-surface-container-high flex items-center gap-3">
          <span className="material-symbols-outlined text-[22px] text-secondary">travel_explore</span>
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search destinations, islands, trails, hidden gems..."
            className="w-full bg-transparent font-body-sm text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none"
            autoFocus
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="text-on-surface-variant hover:text-on-surface"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">cancel</span>
            </button>
          )}
          <button 
            onClick={() => setIsSearchOpen(false)}
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Results Deck */}
        <div className="p-4 overflow-y-auto space-y-5">
          {/* Destinations */}
          <div>
            <span className="font-label-caps uppercase text-secondary font-bold tracking-wider text-[11px] block mb-2">
              Journeys & Destinations ({filteredDestinations.length})
            </span>
            <div className="space-y-2">
              {filteredDestinations.length === 0 ? (
                <p className="text-xs text-on-surface-variant italic">No matching destinations found.</p>
              ) : (
                filteredDestinations.map(d => (
                  <div 
                    key={d.id}
                    onClick={() => {
                      setSelectedDestination(d);
                      setIsSearchOpen(false);
                    }}
                    className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-surface-container-low cursor-pointer transition-colors"
                  >
                    <img src={d.image} alt={d.title} className="w-12 h-12 rounded-xl object-cover" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-headline-sm text-sm text-primary font-bold truncate">{d.title}</h4>
                      <p className="font-label-caps text-[11px] text-on-surface-variant">{d.tag} • ${d.price}</p>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-[18px]">chevron_right</span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Hidden Gems */}
          <div>
            <span className="font-label-caps uppercase text-secondary font-bold tracking-wider text-[11px] block mb-2">
              Secret Atlas Coordinates ({filteredGems.length})
            </span>
            <div className="space-y-2">
              {filteredGems.map(g => (
                <div 
                  key={g.id}
                  onClick={() => {
                    setSelectedGem(g);
                    setIsSearchOpen(false);
                  }}
                  className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-surface-container-low cursor-pointer transition-colors"
                >
                  <img src={g.image} alt={g.title} className="w-12 h-12 rounded-xl object-cover" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-headline-sm text-sm text-primary font-bold truncate">{g.title}</h4>
                    <p className="font-label-caps text-[11px] text-secondary font-mono">{g.coordinates}</p>
                  </div>
                  <span className="material-symbols-outlined text-secondary text-[18px]">lock_open</span>
                </div>
              ))}
            </div>
          </div>

          {/* Travel Stories */}
          {filteredStories.length > 0 && (
            <div>
              <span className="font-label-caps uppercase text-secondary font-bold tracking-wider text-[11px] block mb-2">
                Travel Guides ({filteredStories.length})
              </span>
              <div className="space-y-2">
                {filteredStories.map(s => (
                  <div 
                    key={s.id}
                    onClick={() => {
                      setSelectedStory(s);
                      setIsSearchOpen(false);
                    }}
                    className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-surface-container-low cursor-pointer transition-colors"
                  >
                    <img src={s.image} alt={s.title} className="w-12 h-12 rounded-xl object-cover" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-headline-sm text-sm text-primary font-bold truncate">{s.title}</h4>
                      <p className="font-label-caps text-[11px] text-on-surface-variant">By {s.author} • {s.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

