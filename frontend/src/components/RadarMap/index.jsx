import React, { useState } from 'react';
import { RADAR_HUBS } from '../../data/travelData';
import { useApp } from '../../context/AppContext';

export default function RadarMap() {
  const [selectedHub, setSelectedHub] = useState(RADAR_HUBS[0]);
  const { setSelectedDestination, DESTINATIONS } = useApp();

  return (
    <section className="w-full py-6 px-gutter-mobile">
      <div className="flex items-end justify-between mb-4">
        <div>
          <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-0.5">
            Live Coordinates
          </span>
          <h2 className="font-headline-sm text-headline-sm text-primary tracking-tight">Active World Radar</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-caps text-label-caps font-bold">
            {RADAR_HUBS.length} Live Hubs
          </span>
        </div>
      </div>

      {/* Map Canvas Card */}
      <div className="relative w-full rounded-3xl overflow-hidden bg-primary-container shadow-lg">
        {/* Background Canvas */}
        <div
          className="w-full h-80 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYHmqq7vVTlLrgvgi2C-6RpTdF_kB9Zq6X7RwpmjOLob00B4J7cO6vsiFsPECrSTgH0eIUcxIR-D_9Hpx4y1UUH5eVa1vbijU2aiE6yZvh8OQvuN4tmr_TU37UfRuQcbmuo8Kf36hDOtdX6tf3FHebCBstwEBPb8QTiQxrftXB9bhxzGMUtJHLk1Jr0rTr6OvkbPkdUsJnEq3LWXJh5Eh8u-3ueMkY0HIpmIg-XQ')`
          }}
        />

        {/* Gradient Map Overlays */}
        <div className="absolute inset-0 bg-primary-container/30 pointer-events-none" />

        {/* Pulsing Pin 1 - Reykjavik */}
        <button
          onClick={() => setSelectedHub(RADAR_HUBS[0])}
          className="absolute top-1/4 left-1/3 flex items-center justify-center cursor-pointer group focus:outline-none"
          title="Reykjavik & Aurora Fjord"
          type="button"
        >
          <span className="absolute w-8 h-8 rounded-full bg-secondary/40 animate-ping" />
          <div className={`relative w-5 h-5 rounded-full flex items-center justify-center shadow-lg transition-transform ${
            selectedHub.id === 'reykjavik' ? 'bg-secondary ring-4 ring-secondary/30 scale-125' : 'bg-secondary'
          }`}>
            <div className="w-1.5 h-1.5 rounded-full bg-on-secondary" />
          </div>
          <span className="absolute -top-7 px-2 py-0.5 rounded bg-primary-container/90 text-[10px] text-on-primary font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Reykjavik Hub
          </span>
        </button>

        {/* Pulsing Pin 2 - Zermatt Pass */}
        <button
          onClick={() => setSelectedHub(RADAR_HUBS[1])}
          className="absolute top-1/2 right-1/4 flex items-center justify-center cursor-pointer group focus:outline-none"
          title="Zermatt Matterhorn Pass"
          type="button"
        >
          <span className="absolute w-6 h-6 rounded-full bg-secondary-fixed/30 animate-pulse" />
          <div className={`relative w-4 h-4 rounded-full flex items-center justify-center shadow transition-transform ${
            selectedHub.id === 'zermatt' ? 'bg-secondary-fixed ring-4 ring-secondary-fixed/30 scale-125' : 'bg-secondary-fixed'
          }`}>
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>
          <span className="absolute -top-7 px-2 py-0.5 rounded bg-primary-container/90 text-[10px] text-on-primary font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Zermatt Hub
          </span>
        </button>

        {/* Pulsing Pin 3 - Kyoto Sanctuary */}
        <button
          onClick={() => setSelectedHub(RADAR_HUBS[2])}
          className="absolute bottom-1/3 left-1/4 flex items-center justify-center cursor-pointer group focus:outline-none"
          title="Kyoto Bamboo Sanctuary"
          type="button"
        >
          <span className="absolute w-6 h-6 rounded-full bg-secondary-fixed/30 animate-pulse" />
          <div className={`relative w-4 h-4 rounded-full flex items-center justify-center shadow transition-transform ${
            selectedHub.id === 'kyoto_radar' ? 'bg-secondary-fixed ring-4 ring-secondary-fixed/30 scale-125' : 'bg-secondary-fixed'
          }`}>
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>
          <span className="absolute -top-7 px-2 py-0.5 rounded bg-primary-container/90 text-[10px] text-on-primary font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Kyoto Hub
          </span>
        </button>

        {/* Bottom Floating Live Preview Card */}
        <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-2xl bg-surface-container-lowest/95 backdrop-blur-xl shadow-xl flex flex-col gap-2.5 border border-surface-container-high/50">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container flex-shrink-0">
                <span className="material-symbols-outlined text-[20px]">explore</span>
              </div>
              <div className="min-w-0">
                <h4 className="font-headline-sm text-[16px] text-primary leading-tight truncate">
                  {selectedHub.name}
                </h4>
                <p className="font-body-sm text-xs text-on-surface-variant truncate">
                  {selectedHub.type}
                </p>
              </div>
            </div>
            <span className={`font-label-caps text-label-caps font-bold px-2 py-0.5 rounded ${selectedHub.statusClass}`}>
              {selectedHub.status}
            </span>
          </div>

          {/* Hub Live Stats Ribbon */}
          <div className="grid grid-cols-3 gap-2 py-1 px-2 rounded-xl bg-surface-container-low text-center">
            <div className="flex flex-col">
              <span className="font-label-caps text-[9px] uppercase text-on-surface-variant/70">Coords</span>
              <span className="font-mono text-[11px] font-bold text-primary truncate">{selectedHub.lat}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-caps text-[9px] uppercase text-on-surface-variant/70">Conditions</span>
              <span className="font-body-sm text-[11px] font-bold text-primary truncate">{selectedHub.temperature} • {selectedHub.weather}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-caps text-[9px] uppercase text-on-surface-variant/70">In Field</span>
              <span className="font-headline-sm text-[11px] font-bold text-secondary truncate">{selectedHub.activeExplorers} Explorers</span>
            </div>
          </div>

          <div className="flex gap-2">
            {RADAR_HUBS.map(hub => (
              <button
                key={hub.id}
                onClick={() => setSelectedHub(hub)}
                className={`flex-1 py-1.5 rounded-lg text-xs font-label-md transition-colors ${
                  selectedHub.id === hub.id 
                    ? 'bg-primary text-on-primary font-bold' 
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
                type="button"
              >
                {hub.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

