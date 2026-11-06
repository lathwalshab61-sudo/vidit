import React from 'react';
import { useApp } from '../../context/AppContext';

export default function BottomNav() {
  const { activeTab, setActiveTab } = useApp();

  const navItems = [
    { id: 'explore', label: 'Explore', icon: 'explore' },
    { id: 'planner', label: 'Planner', icon: 'map' },
    { id: 'hidden-gems', label: 'Gems', icon: 'diamond' },
    { id: 'guides', label: 'Guides', icon: 'auto_stories' },
    { id: 'profile', label: 'Profile', icon: 'person' },
  ];

  return (
    <div className="fixed bottom-0 w-full z-50 pb-safe pointer-events-none px-gutter-mobile mb-space-sm">
      <nav 
        className="pointer-events-auto mx-auto max-w-md bg-surface-container-lowest/85 backdrop-blur-xl rounded-full shadow-[0_16px_36px_-4px_rgba(10,37,64,0.12)] p-1.5 border border-surface-container-high/60"
        aria-label="Main Navigation"
      >
        <div className="flex items-center justify-between gap-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex-1 flex flex-col items-center justify-center min-h-[44px] py-1 rounded-full transition-all duration-200 group ${
                  isActive
                    ? 'text-secondary font-bold scale-105'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container/50'
                }`}
                aria-current={isActive ? 'page' : undefined}
                type="button"
              >
                <span 
                  className={`material-symbols-outlined text-[22px] transition-transform group-active:scale-90 ${
                    isActive ? "font-variation-settings: 'FILL' 1" : ''
                  }`}
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {item.icon}
                </span>
                <span className="font-label-caps text-label-caps tracking-normal mt-0.5">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

