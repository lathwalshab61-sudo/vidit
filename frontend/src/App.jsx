import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import ExplorePage from './pages/ExplorePage';
import PlannerPage from './pages/PlannerPage';
import HiddenGemsPage from './pages/HiddenGemsPage';
import GuidesPage from './pages/GuidesPage';
import ProfilePage from './pages/ProfilePage';
import JourneyModal from './components/Modals/JourneyModal';
import GemModal from './components/Modals/GemModal';
import StoryModal from './components/Modals/StoryModal';
import SearchModal from './components/Modals/SearchModal';
import NotificationsModal from './components/Modals/NotificationsModal';

function AppContent() {
  const { activeTab } = useApp();

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface antialiased flex flex-col selection:bg-secondary-container selection:text-on-secondary-container">
      {/* Fixed Header */}
      <Header />

      {/* Main Page Area */}
      <main className="flex flex-col relative w-full pt-16 pb-28 min-h-screen bg-surface">
        {activeTab === 'explore' && <ExplorePage />}
        {activeTab === 'planner' && <PlannerPage />}
        {activeTab === 'hidden-gems' && <HiddenGemsPage />}
        {activeTab === 'guides' && <GuidesPage />}
        {activeTab === 'profile' && <ProfilePage />}
      </main>

      {/* Floating Bottom Nav */}
      <BottomNav />

      {/* Modals & Overlays */}
      <JourneyModal />
      <GemModal />
      <StoryModal />
      <SearchModal />
      <NotificationsModal />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

