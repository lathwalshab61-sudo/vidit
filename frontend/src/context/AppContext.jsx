import React, { createContext, useContext, useState, useEffect } from 'react';
import { DESTINATIONS, HIDDEN_GEMS, STORIES, PACKING_ITEMS } from '../data/travelData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('explore');
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedGem, setSelectedGem] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Bookmarks persistence
  const [savedIds, setSavedIds] = useState(() => {
    try {
      const stored = localStorage.getItem('exploreverse_bookmarks');
      return stored ? JSON.parse(stored) : ['amalfi', 'faroe'];
    } catch {
      return ['amalfi', 'faroe'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('exploreverse_bookmarks', JSON.stringify(savedIds));
    } catch (e) {
      console.error(e);
    }
  }, [savedIds]);

  const toggleBookmark = (id) => {
    setSavedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const isBookmarked = (id) => savedIds.includes(id);

  // Global search modal
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Notifications modal
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Aurora Borealis Alert',
      message: 'Optimal solar storm index tonight across Reykjavik sky corridors.',
      time: '15m ago',
      unread: true
    },
    {
      id: 2,
      title: 'Secret Atlas Release',
      message: 'New coordinates revealed for Gásadalur coastal path.',
      time: '2h ago',
      unread: true
    },
    {
      id: 3,
      title: 'Carbon Offset Certificate',
      message: 'Your 2025 eco-travel offset statement has been verified.',
      time: '1d ago',
      unread: false
    }
  ]);

  const markAllNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  // Planner state
  const [plannerDestination, setPlannerDestination] = useState('Reykjavik & South Coast, Iceland');
  const [plannerDates, setPlannerDates] = useState('Oct 14 - 22, 2025');
  const [plannerTravelers, setPlannerTravelers] = useState('2 Explorers • Duo');
  const [plannerBudget, setPlannerBudget] = useState(3200);
  const [generatedItinerary, setGeneratedItinerary] = useState(null);

  const calculateItinerary = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setGeneratedItinerary({
      destination: plannerDestination,
      dates: plannerDates,
      travelers: plannerTravelers,
      budget: plannerBudget,
      tier: plannerBudget > 5000 ? 'Ultra Luxury Private Expedition' : plannerBudget > 2500 ? 'Curated Premium Journey' : 'Essential Explorer Package',
      carbonOffsetKg: Math.round(plannerBudget * 0.45),
      includedPerks: [
        'Dedicated 24/7 Satellite Concierge Desk',
        'Private 4x4 Highland Glacier Transportation',
        'Eco-Luxury Geothermal Lagoon & Retreat Stays',
        '120% Certified UN Gold Standard Carbon Offset'
      ],
      days: [
        { day: 'Day 1', plan: 'Private arrival transfer to Reykjavik Blue Lagoon Silk Hotel' },
        { day: 'Day 2', plan: 'Golden Circle Superjeep expedition & Secret Waterfall caves' },
        { day: 'Day 3', plan: 'South Coast Black Sand Beach & Skógafoss glacial valley' },
        { day: 'Day 4', plan: 'Jökulsárlón Glacier Lagoon private zodiac boat navigation' },
        { day: 'Day 5', plan: 'Aurora Borealis midnight flight & mountain pass hot springs' }
      ]
    });
  };

  // Packing list checklist
  const [packingItems, setPackingItems] = useState(PACKING_ITEMS);
  const togglePackingItem = (id) => {
    setPackingItems(prev =>
      prev.map(item => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  // Switch tab helper with smooth scrolling
  const navigateToTab = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab: navigateToTab,
        selectedDestination,
        setSelectedDestination,
        selectedGem,
        setSelectedGem,
        selectedStory,
        setSelectedStory,
        selectedCategory,
        setSelectedCategory,
        savedIds,
        toggleBookmark,
        isBookmarked,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
        isNotificationsOpen,
        setIsNotificationsOpen,
        notifications,
        markAllNotificationsRead,
        plannerDestination,
        setPlannerDestination,
        plannerDates,
        setPlannerDates,
        plannerTravelers,
        setPlannerTravelers,
        plannerBudget,
        setPlannerBudget,
        generatedItinerary,
        calculateItinerary,
        packingItems,
        togglePackingItem
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

