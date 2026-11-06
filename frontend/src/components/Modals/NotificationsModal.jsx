import React from 'react';
import { useApp } from '../../context/AppContext';

export default function NotificationsModal() {
  const { isNotificationsOpen, setIsNotificationsOpen, notifications, markAllNotificationsRead } = useApp();

  if (!isNotificationsOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 bg-primary-container/70 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-surface-container-lowest rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-surface-container-high max-h-[80vh]"
        role="dialog"
        aria-modal="true"
      >
        <div className="p-4 border-b border-surface-container-high flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[22px]">notifications</span>
            <h3 className="font-headline-sm text-base text-primary font-bold">Expedition Dispatches</h3>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={markAllNotificationsRead}
              className="text-xs text-secondary font-semibold hover:underline"
              type="button"
            >
              Mark all read
            </button>
            <button 
              onClick={() => setIsNotificationsOpen(false)}
              className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>

        <div className="p-4 overflow-y-auto space-y-3">
          {notifications.map(n => (
            <div 
              key={n.id}
              className={`p-3.5 rounded-2xl border transition-colors ${
                n.unread 
                  ? 'bg-secondary-container/20 border-secondary-container/60' 
                  : 'bg-surface-container-low border-transparent'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <h4 className="font-headline-sm text-sm text-primary font-bold">{n.title}</h4>
                <span className="font-label-caps text-[10px] text-on-surface-variant/70">{n.time}</span>
              </div>
              <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">{n.message}</p>
            </div>
          ))}
        </div>

        <div className="p-3 bg-surface-container-lowest border-t border-surface-container-high text-center">
          <button 
            onClick={() => setIsNotificationsOpen(false)}
            className="text-xs font-label-caps uppercase text-on-surface-variant tracking-wider font-semibold"
            type="button"
          >
            Close Feed
          </button>
        </div>
      </div>
    </div>
  );
}

