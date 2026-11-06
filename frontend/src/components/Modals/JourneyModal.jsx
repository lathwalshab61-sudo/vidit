import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export default function JourneyModal() {
  const { selectedDestination, setSelectedDestination, isBookmarked, toggleBookmark } = useApp();
  const [isBooked, setIsBooked] = useState(false);
  const [selectedDate, setSelectedDate] = useState('2025-11-15');

  if (!selectedDestination) return null;

  const dest = selectedDestination;
  const bookmarked = isBookmarked(dest.id);

  const handleBook = () => {
    setIsBooked(true);
    setTimeout(() => {
      setIsBooked(false);
      setSelectedDestination(null);
    }, 2400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-container/60 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg max-h-[90vh] bg-surface-container-lowest rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-surface-container-high"
        role="dialog" 
        aria-modal="true"
      >
        {/* Header Image Deck */}
        <div className="relative w-full h-64 flex-shrink-0">
          <img 
            src={dest.image} 
            alt={dest.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-black/30" />
          
          {/* Top Controls */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-primary font-label-caps uppercase tracking-wider text-xs">
              {dest.tag}
            </span>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => toggleBookmark(dest.id)}
                className="w-10 h-10 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-primary flex items-center justify-center shadow-md active:scale-90 transition-transform"
                type="button"
                aria-label="Save"
              >
                <span 
                  className={`material-symbols-outlined text-[20px] ${bookmarked ? 'text-secondary' : ''}`}
                  style={bookmarked ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  favorite
                </span>
              </button>
              <button 
                onClick={() => setSelectedDestination(null)}
                className="w-10 h-10 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-primary flex items-center justify-center shadow-md active:scale-90 transition-transform"
                type="button"
                aria-label="Close"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
          </div>

          {/* Title & Rating */}
          <div className="absolute bottom-4 left-4 right-4 text-on-primary">
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-secondary/90 text-on-secondary px-2.5 py-0.5 rounded-full font-label-caps uppercase text-[11px] tracking-wider">
                Level: {dest.level}
              </span>
              <div className="flex items-center gap-1 bg-primary-container/80 backdrop-blur-md px-2.5 py-0.5 rounded-full">
                <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <span className="font-label-caps text-xs font-bold">{dest.rating}</span>
                <span className="text-[11px] text-primary-fixed-dim/80">({dest.reviewsCount})</span>
              </div>
            </div>
            <h2 className="font-headline-sm text-2xl text-on-primary font-bold">{dest.title}</h2>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 overflow-y-auto flex-1 flex flex-col gap-5">
          <div>
            <h3 className="font-label-caps uppercase text-secondary font-bold tracking-widest text-xs mb-1">Overview</h3>
            <p className="font-body-md text-body-sm text-on-surface-variant leading-relaxed">
              {dest.description}
            </p>
          </div>

          {/* Highlights */}
          {dest.highlights && (
            <div>
              <h3 className="font-label-caps uppercase text-secondary font-bold tracking-widest text-xs mb-2">Expedition Highlights</h3>
              <div className="grid grid-cols-2 gap-2">
                {dest.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-container-low text-on-surface text-xs font-medium">
                    <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Day by Day Itinerary */}
          {dest.itinerarySummary && (
            <div>
              <h3 className="font-label-caps uppercase text-secondary font-bold tracking-widest text-xs mb-2">Curated Route Itinerary</h3>
              <div className="space-y-2">
                {dest.itinerarySummary.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-surface-container-low border border-surface-container-high/40">
                    <span className="font-label-caps font-bold text-secondary text-xs uppercase px-2 py-0.5 rounded bg-secondary-container/50">
                      {item.day}
                    </span>
                    <span className="font-body-sm text-xs text-on-surface font-medium leading-snug">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Date Selector */}
          <div className="p-3.5 rounded-2xl bg-surface-container-low flex flex-col gap-1.5">
            <label className="font-label-caps uppercase text-on-surface-variant font-bold text-[10px]">Select Departure Window</label>
            <input 
              type="date" 
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-2 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
        </div>

        {/* Modal Footer Deck */}
        <div className="p-4 bg-surface-container-lowest border-t border-surface-container-high flex items-center justify-between gap-4">
          <div>
            <span className="font-label-caps text-on-surface-variant/70 uppercase block text-[10px]">{dest.type}</span>
            <span className="font-headline-sm text-xl text-primary font-bold">
              ${dest.price.toLocaleString()} <span className="font-body-sm text-xs text-on-surface-variant font-normal">/ {dest.duration}</span>
            </span>
          </div>

          <button 
            onClick={handleBook}
            disabled={isBooked}
            className={`px-5 py-3 rounded-full font-label-md text-sm shadow-md transition-all active:scale-95 flex items-center gap-2 ${
              isBooked 
                ? 'bg-secondary text-on-secondary' 
                : 'bg-primary-container text-on-primary hover:bg-primary'
            }`}
            type="button"
          >
            {isBooked ? (
              <>
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>Expedition Reserved!</span>
              </>
            ) : (
              <>
                <span>Reserve Expedition</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

