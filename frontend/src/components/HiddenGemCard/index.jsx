import React from 'react';
import { useApp } from '../../context/AppContext';

export default function HiddenGemCard({ gem }) {
  const { setSelectedGem } = useApp();

  return (
    <div className="snap-start flex-shrink-0 w-64 rounded-2xl bg-surface-container-lowest/10 backdrop-blur-md p-3.5 flex flex-col justify-between border border-white/10 hover:border-secondary/50 transition-colors">
      <div>
        <div className="relative w-full h-36 rounded-xl overflow-hidden mb-3">
          <img src={gem.image} alt={gem.title} className="w-full h-full object-cover" />
          <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-primary-container/80 backdrop-blur-sm text-secondary-fixed font-label-caps text-[10px] uppercase font-bold">
            {gem.tag}
          </span>
          <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-secondary/90 text-on-secondary font-label-caps text-[9px] uppercase font-bold">
            {gem.badge}
          </span>
        </div>
        <h4 className="font-headline-sm text-[18px] text-on-primary mb-1 line-clamp-1">{gem.title}</h4>
        <p className="font-body-sm text-xs text-primary-fixed-dim line-clamp-2 mb-3">
          {gem.description}
        </p>
      </div>
      <button
        onClick={() => setSelectedGem(gem)}
        className="w-full py-2 rounded-xl bg-secondary/20 hover:bg-secondary text-secondary-fixed hover:text-on-secondary font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        type="button"
      >
        <span className="material-symbols-outlined text-[16px]">lock_open</span>
        <span>Unlock Coordinates</span>
      </button>
    </div>
  );
}

