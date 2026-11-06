import React from 'react';
import { useApp } from '../../context/AppContext';

export default function StoryModal() {
  const { selectedStory, setSelectedStory } = useApp();

  if (!selectedStory) return null;

  const story = selectedStory;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-container/60 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg max-h-[90vh] bg-surface-container-lowest rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-surface-container-high"
        role="dialog"
        aria-modal="true"
      >
        <div className="relative w-full h-56 flex-shrink-0">
          <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-black/30" />
          
          <button 
            onClick={() => setSelectedStory(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-primary flex items-center justify-center shadow-md active:scale-90 transition-transform"
            type="button"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          <div className="absolute bottom-4 left-4 right-4 text-on-primary">
            <div className="flex items-center gap-2 mb-1.5 text-xs">
              <span className="font-label-caps uppercase text-secondary-fixed font-bold">{story.category}</span>
              <span className="text-on-primary/60">•</span>
              <span className="font-body-sm text-on-primary/80 flex items-center gap-1 text-[11px]">
                <span className="material-symbols-outlined text-[13px]">schedule</span> {story.readTime}
              </span>
            </div>
            <h2 className="font-headline-sm text-xl text-on-primary font-bold leading-tight">{story.title}</h2>
          </div>
        </div>

        <div className="p-5 overflow-y-auto flex-1 flex flex-col gap-4">
          <div className="flex items-center justify-between pb-3 border-b border-surface-container-high">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-xs">
                {story.author[0]}
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-xs font-bold text-primary">{story.author}</span>
                <span className="font-label-caps text-[10px] text-on-surface-variant">{story.authorRole}</span>
              </div>
            </div>
            <span className="font-label-caps text-[10px] text-on-surface-variant/70">{story.date}</span>
          </div>

          <div className="space-y-3 font-body-md text-body-sm text-on-surface-variant leading-relaxed">
            {story.content ? (
              story.content.map((p, idx) => <p key={idx}>{p}</p>)
            ) : (
              <p>{story.excerpt}</p>
            )}
          </div>
        </div>

        <div className="p-4 bg-surface-container-lowest border-t border-surface-container-high flex items-center justify-between">
          <span className="font-label-caps text-xs text-on-surface-variant">ExploreVerse Journal</span>
          <button 
            onClick={() => setSelectedStory(null)}
            className="px-4 py-2 rounded-full bg-primary-container text-on-primary font-label-md text-xs"
            type="button"
          >
            Done Reading
          </button>
        </div>
      </div>
    </div>
  );
}

