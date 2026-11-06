import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { STORIES } from '../../data/travelData';

export default function GuidesPage() {
  const { setSelectedStory, packingItems, togglePackingItem } = useApp();
  const [newCheckItem, setNewCheckItem] = useState('');
  const [itemsList, setItemsList] = useState(packingItems);

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newCheckItem.trim()) return;
    setItemsList(prev => [
      ...prev,
      {
        id: `p-${Date.now()}`,
        category: 'Custom Field Item',
        text: newCheckItem.trim(),
        checked: false
      }
    ]);
    setNewCheckItem('');
  };

  const handleToggle = (id) => {
    setItemsList(prev =>
      prev.map(item => item.id === id ? { ...item, checked: !item.checked } : item)
    );
  };

  return (
    <div className="flex flex-col w-full py-4 max-w-7xl mx-auto px-gutter-mobile animate-fade-in">
      {/* Editorial Header */}
      <div className="mb-6">
        <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-0.5">
          Editorial In-Depth
        </span>
        <h1 className="font-headline-sm text-2xl text-primary font-bold tracking-tight">
          Travel Stories & Secrets
        </h1>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          Field journals, route notes, and ecological wisdom written by veteran expedition leaders.
        </p>
      </div>

      {/* Stories Stack */}
      <div className="flex flex-col gap-4 mb-8">
        {STORIES.map(story => (
          <article
            key={story.id}
            onClick={() => setSelectedStory(story)}
            className="flex flex-col sm:flex-row gap-4 p-4 rounded-3xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-surface-container-high/40"
          >
            <div className="w-full sm:w-36 h-36 rounded-2xl overflow-hidden flex-shrink-0 relative">
              <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-between flex-1 min-w-0">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-label-caps text-[11px] uppercase text-secondary font-bold">
                    {story.category}
                  </span>
                  <span className="text-on-surface-variant/40">•</span>
                  <span className="font-body-sm text-xs text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">schedule</span> {story.readTime}
                  </span>
                </div>
                <h2 className="font-headline-sm text-lg text-primary font-bold leading-snug mb-2 hover:text-secondary transition-colors">
                  {story.title}
                </h2>
                <p className="font-body-sm text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
                  {story.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 mt-2 border-t border-surface-container-high/30">
                <span className="font-label-md text-xs text-on-surface font-semibold">
                  By {story.author}
                </span>
                <span className="text-xs font-semibold text-secondary flex items-center gap-0.5">
                  Read Journal <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Interactive Nomad Packing Matrix */}
      <section className="w-full p-6 rounded-3xl bg-surface-container-lowest shadow-sm border border-surface-container-high/50">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[24px]">checklist</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-lg text-primary font-bold leading-tight">
                Nomad Expedition Packing Matrix
              </h3>
              <p className="font-body-sm text-xs text-on-surface-variant">
                Standardized gear checklist for remote sub-zero and tropical deployments.
              </p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-caps text-xs font-bold whitespace-nowrap">
            {itemsList.filter(i => i.checked).length} / {itemsList.length} Packed
          </span>
        </div>

        {/* Packing Checklist */}
        <div className="space-y-2 mb-4">
          {itemsList.map(item => (
            <div
              key={item.id}
              onClick={() => handleToggle(item.id)}
              className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-colors border ${
                item.checked 
                  ? 'bg-secondary-container/20 border-secondary-container/50 text-on-surface' 
                  : 'bg-surface-container-low border-transparent text-on-surface'
              }`}
            >
              <div className={`w-5 h-5 rounded-lg flex items-center justify-center border transition-colors ${
                item.checked ? 'bg-secondary border-secondary text-on-secondary' : 'border-outline'
              }`}>
                {item.checked && (
                  <span className="material-symbols-outlined text-[16px]">check</span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <span className={`text-xs font-medium ${item.checked ? 'line-through text-on-surface-variant' : 'text-primary'}`}>
                  {item.text}
                </span>
                <span className="block font-label-caps text-[9px] text-on-surface-variant/70 uppercase">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Add Item Input */}
        <form onSubmit={handleAddItem} className="flex gap-2">
          <input
            type="text"
            value={newCheckItem}
            onChange={(e) => setNewCheckItem(e.target.value)}
            placeholder="Add custom gear item..."
            className="flex-1 px-4 py-2.5 rounded-xl bg-surface-container-low border border-surface-container-high/40 text-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <button
            type="submit"
            className="px-4 py-2.5 rounded-xl bg-primary text-on-primary font-label-md text-xs font-bold flex items-center gap-1 active:scale-95 transition-transform cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">add</span>
            <span>Add</span>
          </button>
        </form>
      </section>
    </div>
  );
}

