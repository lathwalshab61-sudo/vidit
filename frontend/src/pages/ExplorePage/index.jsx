import React from 'react';
import { useApp } from '../../context/AppContext';
import { CATEGORIES, DESTINATIONS, HIDDEN_GEMS, REVIEWS } from '../../data/travelData';
import DestinationCard from '../../components/DestinationCard';
import HiddenGemCard from '../../components/HiddenGemCard';

export default function ExplorePage() {
  const { 
    selectedCategory, 
    setSelectedCategory, 
    setActiveTab, 
    setIsSearchOpen,
    searchQuery,
    setSearchQuery 
  } = useApp();

  const filteredDestinations = selectedCategory === 'all'
    ? DESTINATIONS
    : DESTINATIONS.filter(d => d.category === selectedCategory);

  return (
    <div className="flex flex-col w-full animate-fade-in">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-primary-container text-on-primary">
        <div className="relative w-full h-[520px]">
          {/* Background Aerial Patagonia Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA5rJOMDbECs9w04ChF3Krz6L5QYr0Qc2czEbPkdx8Q7qMh-RY_0CDQXXZ796N2L5C7Ho3pIZLzkY1AIMTJNzaBRVyec_y0YMZ5OcKYVRWvblexkyzH7c5_nrmJQUnop09PX6LrnatvBk9vd33U6Pz4_RK1FRQ-STLZ2DTOiKXDRI7EwNzn3fk8Xh2-KZ8ehnBMVPT7_xHXONfyaKteBE-zfqfmDnDoJjSHgr_fZA')`
            }}
          />

          {/* Editorial Gradient Scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container/80 via-transparent to-primary-container/40" />

          {/* Hero Content Stack */}
          <div className="relative z-10 flex flex-col justify-end h-full px-gutter-mobile pb-6 max-w-7xl mx-auto">
            {/* Trending Badge */}
            <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 mb-3 rounded-full bg-surface-container-lowest/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-label-caps text-label-caps text-secondary-fixed tracking-wider uppercase">
                Trending 2025: Patagonia Ice Fjords
              </span>
            </div>

            <h1 className="font-display-hero-mobile text-display-hero-mobile tracking-tight text-on-primary mb-2 max-w-xs drop-shadow-sm">
              Discover Places.<br />
              <span className="italic font-normal">Create Memories.</span>
            </h1>

            <p className="font-body-md text-body-md text-primary-fixed-dim/90 mb-5 max-w-sm leading-relaxed">
              Curated expeditions, uncharted wonders, and bespoke global journeys beyond the ordinary.
            </p>

            {/* CTA & Quick Search Deck */}
            <div className="flex flex-col gap-2.5 w-full max-w-md">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('planner')}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-secondary text-on-secondary font-label-lg text-label-lg shadow-lg shadow-secondary/25 active:scale-98 transition-transform hover:bg-[#007f74] cursor-pointer"
                  type="button"
                >
                  <span>Explore Now</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <button
                  onClick={() => setActiveTab('hidden-gems')}
                  aria-label="Save Expedition"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-on-primary active:scale-95 transition-transform hover:bg-surface-container-lowest/30 cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[22px]">bookmark_add</span>
                </button>
              </div>

              {/* Glassmorphic Quick Search Bar */}
              <div 
                onClick={() => setIsSearchOpen(true)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-full bg-surface-container-lowest/15 backdrop-blur-xl text-on-primary cursor-pointer hover:bg-surface-container-lowest/25 transition-colors border border-white/10"
              >
                <span className="material-symbols-outlined text-[20px] text-secondary-fixed">travel_explore</span>
                <span className="w-full font-body-sm text-body-sm text-primary-fixed-dim/70 truncate">
                  Search destinations, islands, trails...
                </span>
                <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim/60">search</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Strip */}
        <div className="w-full bg-primary/70 backdrop-blur-sm py-3.5 px-gutter-mobile border-t border-primary-container">
          <div className="max-w-md mx-auto grid grid-cols-3 gap-2 text-center">
            <div className="flex flex-col items-center">
              <span className="font-headline-sm text-headline-sm text-secondary-fixed font-bold leading-none">120+</span>
              <span className="font-label-caps text-label-caps uppercase text-primary-fixed-dim/80 pt-1 tracking-wider">
                Countries
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-headline-sm text-headline-sm text-secondary-fixed font-bold leading-none">45k+</span>
              <span className="font-label-caps text-label-caps uppercase text-primary-fixed-dim/80 pt-1 tracking-wider">
                Explorers
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-headline-sm text-headline-sm text-secondary-fixed font-bold leading-none flex items-center gap-0.5">
                4.9
                <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              </span>
              <span className="font-label-caps text-label-caps uppercase text-primary-fixed-dim/80 pt-1 tracking-wider">
                Global Rating
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ADVENTURE CATEGORIES RAIL */}
      <section className="w-full py-7 px-gutter-mobile max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-4">
          <div>
            <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-0.5">
              Curated Archetypes
            </span>
            <h2 className="font-headline-sm text-headline-sm text-primary tracking-tight">Adventure Categories</h2>
          </div>
          <button 
            onClick={() => setSelectedCategory('all')}
            className="font-label-md text-label-md text-secondary flex items-center gap-0.5 cursor-pointer hover:underline"
          >
            View All <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>

        {/* Horizontal Category Scroll */}
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-gutter-mobile px-gutter-mobile scrollbar-none snap-x">
          {CATEGORIES.map(cat => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`snap-start flex-shrink-0 flex items-center gap-2.5 pl-2 pr-4 py-2 rounded-full shadow-sm transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-primary-container text-on-primary ring-2 ring-secondary'
                    : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'
                }`}
                type="button"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isSelected ? 'bg-secondary text-on-secondary' : 'bg-surface-container-lowest text-secondary'
                }`}>
                  <span className="material-symbols-outlined text-[18px]">{cat.icon}</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className={`font-label-md text-label-md leading-none ${isSelected ? 'text-on-primary' : ''}`}>
                    {cat.name}
                  </span>
                  <span className={`font-label-caps text-[9px] leading-tight ${isSelected ? 'text-secondary-fixed/80' : 'text-on-surface-variant/70'}`}>
                    {cat.count}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. EXPLORE DESTINATIONS (POPULAR GLOBAL ESCAPES) */}
      <section className="w-full py-4 px-gutter-mobile max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-0.5">
              Premier Journeys
            </span>
            <h2 className="font-headline-sm text-headline-sm text-primary tracking-tight">Popular Global Escapes</h2>
          </div>
          <div className="flex gap-1.5">
            <button
              onClick={() => setSelectedCategory(selectedCategory === 'all' ? 'mountains' : 'all')}
              aria-label="Filter"
              className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">tune</span>
            </button>
          </div>
        </div>

        {/* Destinations Stack */}
        <div className="flex flex-col gap-6">
          {filteredDestinations.map(dest => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

      {/* 4. HIDDEN GEMS SPOTLIGHT (Secret Atlas) */}
      <section className="w-full py-8 px-gutter-mobile my-3 max-w-7xl mx-auto">
        <div className="relative w-full rounded-3xl bg-primary-container text-on-primary p-5 overflow-hidden shadow-xl">
          {/* Glow & Contour elements */}
          <div className="absolute -top-16 -right-16 w-52 h-52 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-tertiary-container/30 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="relative z-10 flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-1.5 text-secondary-fixed mb-1">
                <span className="material-symbols-outlined text-[18px]">diamond</span>
                <span className="font-label-caps text-label-caps uppercase tracking-widest font-bold">
                  Secret Atlas Curation
                </span>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-primary tracking-tight">Hidden Gems</h2>
            </div>
            <button 
              onClick={() => setActiveTab('hidden-gems')}
              className="px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-caps text-label-caps font-bold cursor-pointer hover:bg-secondary/90"
            >
              98% Untouched
            </button>
          </div>

          <p className="relative z-10 font-body-sm text-body-sm text-primary-fixed-dim/90 mb-5">
            Restricted-access sanctuaries and enigmatic locations off the commercial tourist radar.
          </p>

          {/* Horizontal Cards inside Secret Atlas */}
          <div className="relative z-10 flex gap-4 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-none snap-x">
            {HIDDEN_GEMS.map(gem => (
              <HiddenGemCard key={gem.id} gem={gem} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRAVELLER REVIEWS & TESTIMONIALS */}
      <section className="w-full py-6 px-gutter-mobile max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-0.5">
              Community Voices
            </span>
            <h2 className="font-headline-sm text-headline-sm text-primary tracking-tight">Traveller Dispatch</h2>
          </div>
          <div className="flex items-center gap-1 text-secondary">
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
            <span className="font-label-md text-label-md font-bold">4.9 / 5.0</span>
          </div>
        </div>

        {/* Review Horizontal Rail */}
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-gutter-mobile px-gutter-mobile scrollbar-none snap-x">
          {REVIEWS.map(rev => (
            <div
              key={rev.id}
              className="snap-start flex-shrink-0 w-72 p-4 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-surface-container-high/40"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container">
                      <img className="w-full h-full object-cover" src={rev.avatar} alt={rev.name} />
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md text-primary font-bold">{rev.name}</h4>
                      <span className="font-label-caps text-[10px] text-on-surface-variant flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-[12px] text-secondary">verified</span>
                        {rev.role}
                      </span>
                    </div>
                  </div>
                  <div className="flex text-tertiary-fixed-dim">
                    {[...Array(rev.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    ))}
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant italic leading-relaxed">
                  "{rev.quote}"
                </p>
              </div>
              <span className="font-label-caps text-[10px] text-on-surface-variant/60 uppercase pt-3">
                Route: {rev.route}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ABOUT US & MISSION */}
      <section className="w-full py-8 px-gutter-mobile max-w-7xl mx-auto">
        <div className="rounded-3xl bg-surface-container-high p-5 flex flex-col gap-4 border border-surface-container-highest">
          <div className="flex items-center gap-2 text-secondary">
            <span className="material-symbols-outlined text-[20px]">public</span>
            <span className="font-label-caps text-label-caps uppercase font-bold tracking-widest">Our Philosophy</span>
          </div>
          <h2 className="font-headline-sm text-headline-sm text-primary tracking-tight">
            Beyond Boundaries: Conscious Wanderlust
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            ExploreVerse was forged to replace tourist consumption with transformational expeditions. We partner exclusively with accredited local guides, protect wild biodiversity sanctuaries, and offset 120% of every journey's carbon footprint.
          </p>

          {/* Pillars */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-2xl bg-surface-container-lowest flex flex-col gap-1 shadow-sm">
              <span className="material-symbols-outlined text-secondary text-[22px]">eco</span>
              <span className="font-label-md text-label-md text-primary font-bold">120% Carbon Offset</span>
              <span className="font-body-sm text-[11px] text-on-surface-variant leading-tight">
                Every mile verified with climate partners.
              </span>
            </div>
            <div className="p-3 rounded-2xl bg-surface-container-lowest flex flex-col gap-1 shadow-sm">
              <span className="material-symbols-outlined text-secondary text-[22px]">handshake</span>
              <span className="font-label-md text-label-md text-primary font-bold">Indigenous Equity</span>
              <span className="font-body-sm text-[11px] text-on-surface-variant leading-tight">
                85% of funds go straight to host communities.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT & NEWSLETTER FOOTER */}
      <section className="w-full pt-4 pb-8 px-gutter-mobile max-w-7xl mx-auto">
        <div className="rounded-3xl bg-primary text-on-primary p-6 shadow-xl flex flex-col gap-5">
          <div>
            <span className="font-label-caps text-label-caps uppercase text-secondary-fixed font-bold tracking-widest block mb-1">
              The Weekly Dispatch
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-primary mb-2">
              Stay Curious. Never Settle.
            </h3>
            <p className="font-body-sm text-body-sm text-primary-fixed-dim/90 leading-relaxed">
              Receive Sunday secret coordinates, opening alerts for protected trails, and priority private jet allocations.
            </p>
          </div>

          {/* Email Subscription Form */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for joining the ExploreVerse Private Dispatch!');
            }}
            className="flex flex-col gap-2.5"
          >
            <div className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-surface-container-lowest/15 backdrop-blur-md border border-white/10">
              <span className="material-symbols-outlined text-[18px] text-secondary-fixed">mail</span>
              <input
                className="w-full bg-transparent font-body-sm text-body-sm text-on-primary placeholder-primary-fixed-dim/60 focus:outline-none"
                placeholder="Enter your email address..."
                required
                type="email"
              />
            </div>
            <button
              className="w-full py-3.5 px-4 rounded-full bg-secondary text-on-secondary font-label-md text-label-md font-bold shadow-md shadow-secondary/25 active:scale-98 transition-transform flex items-center justify-center gap-1.5 hover:bg-secondary/90 cursor-pointer"
              type="submit"
            >
              <span>Join Private Dispatch</span>
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </form>

          {/* Concierge & Socials */}
          <div className="flex flex-col gap-4 pt-3 border-t border-primary-container">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping" />
                <span className="font-label-md text-xs text-primary-fixed-dim">Concierge Desk Live</span>
              </div>
              <button 
                onClick={() => setActiveTab('profile')}
                className="font-label-md text-xs text-secondary-fixed flex items-center gap-1 cursor-pointer hover:underline" 
                type="button"
              >
                <span>Talk to Curator</span>
                <span className="material-symbols-outlined text-[14px]">headset_mic</span>
              </button>
            </div>

            {/* Social Media Icon Pill Rail */}
            <div className="flex items-center justify-center gap-3 pt-2">
              {['photo_camera', 'smart_display', 'auto_stories', 'share'].map((icon, idx) => (
                <button
                  key={idx}
                  aria-label={icon}
                  className="w-10 h-10 rounded-full bg-surface-container-lowest/10 flex items-center justify-center text-on-primary active:scale-95 transition-transform hover:bg-surface-container-lowest/20"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">{icon}</span>
                </button>
              ))}
            </div>

            <div className="text-center font-label-caps text-[10px] text-primary-fixed-dim/60 uppercase tracking-widest pt-2">
              © 2025 ExploreVerse Global Ltd. • All Rights Reserved
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

