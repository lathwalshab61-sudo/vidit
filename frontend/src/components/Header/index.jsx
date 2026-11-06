import React from 'react';
import { useApp } from '../../context/AppContext';

export default function Header() {
  const { 
    activeTab, 
    setActiveTab, 
    setIsSearchOpen, 
    setIsNotificationsOpen, 
    notifications 
  } = useApp();

  const unreadCount = notifications.filter(n => n.unread).length;

  const getPageTitle = () => {
    switch (activeTab) {
      case 'explore': return 'Explore';
      case 'planner': return 'Trip Planner';
      case 'hidden-gems': return 'Secret Atlas';
      case 'guides': return 'Field Guides';
      case 'profile': return 'Explorer Profile';
      default: return 'Explore';
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_1px_12px_rgba(10,37,64,0.04)]">
      <div className="h-16 px-gutter-mobile flex items-center justify-between gap-space-sm max-w-7xl mx-auto">
        {/* Brand Logo & Subtitle */}
        <button 
          onClick={() => setActiveTab('explore')} 
          className="flex items-center gap-space-sm min-w-0 text-left cursor-pointer group"
        >
          <img 
            alt="ExploreVerse Compass Logo" 
            className="h-8 w-auto object-contain flex-shrink-0 transition-transform group-hover:rotate-12 duration-300" 
            src="https://lh3.googleusercontent.com/aida/AEtjO1UUBdagmofplYQFnX8L7e-wWFrJIlfbQ9J9Vj_W1i2pQ8J5hgjbaUlydstpJafIC1J1F34CSNaO-lBqztcXlJuuugy9ABb9fYUcSe6UG_RR1VeKoX3xGUAvk2FWbJ0E6XlPDgKEwEFOLdcJU2JpfYAP3fWF-OESSxQMfw1mOiTBLOsW3VuxwZHUrWNa93R7zNJUtnE6SCfEysREFZNYR4-ktHI7H0S0NNCXFs1PGpY"
          />
          <div className="flex flex-col min-w-0">
            <span className="font-headline-sm text-headline-sm tracking-tight text-primary leading-none truncate">
              ExploreVerse
            </span>
            <span className="font-label-caps text-label-caps tracking-widest uppercase text-on-surface-variant/70 leading-none truncate pt-0.5">
              {getPageTitle()}
            </span>
          </div>
        </button>

        {/* Action Controls */}
        <div className="flex items-center gap-space-xs flex-shrink-0">
          {/* Quick Search Trigger */}
          <button 
            aria-label="Search" 
            onClick={() => setIsSearchOpen(true)}
            className="w-11 h-11 flex items-center justify-center rounded-full text-primary hover:bg-surface-container transition-colors active:scale-95" 
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">search</span>
          </button>

          {/* Notifications Trigger */}
          <button 
            aria-label="Notifications" 
            onClick={() => setIsNotificationsOpen(true)}
            className="w-11 h-11 flex items-center justify-center rounded-full text-primary hover:bg-surface-container transition-colors relative active:scale-95" 
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">notifications</span>
            {unreadCount > 0 && (
              <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-secondary ring-2 ring-surface animate-pulse" />
            )}
          </button>

          {/* Profile Avatar Trigger */}
          <div className="pl-space-xs flex items-center">
            <button 
              onClick={() => setActiveTab('profile')}
              aria-label="View Profile"
              className={`rounded-full p-0.5 transition-transform active:scale-95 ${
                activeTab === 'profile' ? 'ring-2 ring-secondary' : 'hover:ring-1 hover:ring-secondary/50'
              }`}
            >
              <img 
                alt="Profile" 
                className="w-8 h-8 rounded-full object-cover ring-1 ring-secondary/30" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7kIrtd6RgIXtWkjSWxmjDq6kKCxlyFRwpmoH0181Ga4qmA7oTCSW2YYL4g8bYoAX3p7Q7_EcyZ0Q-bea-xE7roG6eYVkNnoXT-3PD21MhiGVaHp3W1XQ5QmqD_EMjPo4kBVlE9sNqKTLGFEgu_mB1pC6OZC6zeL9UNhR6iCheGWrb6qDyHytZRZXrwTeVfm16FeinbAX4Tzn4d8nolla40DwZ4ovZmWKnWmCAMg"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

