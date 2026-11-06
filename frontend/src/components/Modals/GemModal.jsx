import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export default function GemModal() {
  const { selectedGem, setSelectedGem, isBookmarked, toggleBookmark } = useApp();
  const [copied, setCopied] = useState(false);

  if (!selectedGem) return null;

  const gem = selectedGem;
  const bookmarked = isBookmarked(gem.id);

  const handleCopy = () => {
    navigator.clipboard?.writeText(gem.coordinates);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-container/60 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-surface-container-lowest rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-surface-container-high"
        role="dialog"
        aria-modal="true"
      >
        <div className="relative w-full h-56 flex-shrink-0">
          <img src={gem.image} alt={gem.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-black/30" />
          
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-caps text-xs uppercase tracking-wider font-bold">
              {gem.badge}
            </span>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => toggleBookmark(gem.id)}
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
                onClick={() => setSelectedGem(null)}
                className="w-10 h-10 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-primary flex items-center justify-center shadow-md active:scale-90 transition-transform"
                type="button"
                aria-label="Close"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-on-primary">
            <span className="font-label-caps text-xs text-secondary-fixed uppercase tracking-wider block mb-0.5">
              {gem.tag} • {gem.region}
            </span>
            <h2 className="font-headline-sm text-xl text-on-primary font-bold">{gem.title}</h2>
          </div>
        </div>

        <div className="p-5 flex flex-col gap-4 overflow-y-auto">
          {/* Coordinates Box */}
          <div className="p-3.5 rounded-2xl bg-primary-container text-on-primary flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-secondary-fixed text-[22px]">pin_drop</span>
              <div className="flex flex-col">
                <span className="font-label-caps uppercase text-primary-fixed-dim text-[10px]">Verified Coordinates</span>
                <span className="font-mono text-xs font-semibold text-on-primary tracking-wider">{gem.coordinates}</span>
              </div>
            </div>
            <button 
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-xl bg-secondary text-on-secondary font-label-caps text-xs flex items-center gap-1 active:scale-95 transition-transform"
              type="button"
            >
              <span className="material-symbols-outlined text-[14px]">
                {copied ? 'check' : 'content_copy'}
              </span>
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 rounded-xl bg-surface-container-low flex flex-col">
              <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Elevation</span>
              <span className="font-headline-sm text-sm text-primary font-bold">{gem.elevation}</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low flex flex-col">
              <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Best Season</span>
              <span className="font-headline-sm text-sm text-primary font-bold">{gem.bestSeason}</span>
            </div>
          </div>

          <div>
            <h3 className="font-label-caps uppercase text-secondary font-bold tracking-widest text-xs mb-1">Curation Dossier</h3>
            <p className="font-body-md text-body-sm text-on-surface-variant leading-relaxed">
              {gem.description}
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-secondary-container/40 border border-secondary-container text-on-surface">
            <div className="flex items-center gap-1.5 text-secondary font-bold mb-1">
              <span className="material-symbols-outlined text-[16px]">lock_open</span>
              <span className="font-label-caps text-xs uppercase tracking-wider">Curator's Secret Tip</span>
            </div>
            <p className="font-body-sm text-xs leading-relaxed text-on-surface-variant">
              {gem.secretTips}
            </p>
          </div>
        </div>

        <div className="p-4 bg-surface-container-lowest border-t border-surface-container-high">
          <button 
            onClick={() => setSelectedGem(null)}
            className="w-full py-3 rounded-full bg-primary-container text-on-primary font-label-md text-xs tracking-wider uppercase font-semibold hover:bg-primary transition-colors"
            type="button"
          >
            Close Coordinates Dossier
          </button>
        </div>
      </div>
    </div>
  );
}

