import React from 'react';
import { useApp } from '../../context/AppContext';

export default function DestinationCard({ destination }) {
  const { setSelectedDestination, isBookmarked, toggleBookmark } = useApp();
  const bookmarked = isBookmarked(destination.id);

  return (
    <article className="flex flex-col rounded-3xl bg-surface-container-lowest overflow-hidden shadow-[0_4px_24px_-4px_rgba(10,37,64,0.08)] border border-surface-container-high/40 hover:shadow-xl transition-all duration-300">
      {/* Top Image Deck */}
      <div className="relative w-full h-56 group overflow-hidden">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-primary font-label-caps text-label-caps uppercase tracking-wider">
            {destination.tag}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleBookmark(destination.id);
            }}
            aria-label="Save Destination"
            className="w-9 h-9 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-primary flex items-center justify-center shadow-sm active:scale-90 transition-transform"
            type="button"
          >
            <span
              className={`material-symbols-outlined text-[18px] transition-colors ${
                bookmarked ? 'text-secondary' : 'text-on-surface'
              }`}
              style={bookmarked ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              favorite
            </span>
          </button>
        </div>

        {/* Bottom Image Micro-data */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-on-primary">
          <div className="flex items-center gap-1 bg-primary-container/60 backdrop-blur-md px-2.5 py-1 rounded-full">
            <span
              className="material-symbols-outlined text-[15px] text-tertiary-fixed-dim"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="font-label-caps text-label-caps font-bold">{destination.rating}</span>
            <span className="font-body-sm text-[11px] text-primary-fixed-dim/80">({destination.reviewsCount})</span>
          </div>
          <div className="bg-secondary/90 text-on-secondary px-2.5 py-1 rounded-full font-label-caps text-label-caps uppercase tracking-wider">
            Level: {destination.level}
          </div>
        </div>
      </div>

      {/* Body Details */}
      <div className="p-4 flex flex-col gap-3 flex-1 justify-between">
        <div>
          <h3 className="font-headline-sm text-headline-sm text-primary mb-1">{destination.title}</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
            {destination.description}
          </p>
        </div>

        {/* Price & CTA Action */}
        <div className="flex items-center justify-between pt-2 border-t border-surface-container-high/30">
          <div>
            <span className="font-label-caps text-label-caps text-on-surface-variant/70 uppercase block">
              {destination.type}
            </span>
            <span className="font-headline-sm text-headline-sm text-primary font-bold">
              ${destination.price.toLocaleString()}{' '}
              <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">
                / {destination.duration}
              </span>
            </span>
          </div>
          <button
            onClick={() => setSelectedDestination(destination)}
            className="px-4 py-2.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md shadow-sm active:scale-95 transition-transform flex items-center gap-1 hover:bg-primary cursor-pointer"
            type="button"
          >
            <span>View Journey</span>
            <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
          </button>
        </div>
      </div>
    </article>
  );
}

