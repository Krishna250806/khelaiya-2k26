import React, { useState } from 'react';
import DoorLoader from './components/DoorLoader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PassTiersSection from './components/PassTiersSection';
import RegisterCtaSection from './components/RegisterCtaSection';
import CommitteeSection from './components/CommitteeSection';
import SponsorsSection from './components/SponsorsSection';
import GallerySection from './components/GallerySection';
import ScheduleFaqSection from './components/ScheduleFaqSection';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import AudioPlayerToggle from './components/AudioPlayerToggle';

export default function App() {
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [passModalOpen, setPassModalOpen] = useState(false);
  const [selectedPassTier, setSelectedPassTier] = useState("early-bird");
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const handleOpenPassModal = (tierId = "early-bird") => {
    setSelectedPassTier(tierId);
    setPassModalOpen(true);
  };

  const handleToggleAudio = () => {
    setIsAudioPlaying(prev => !prev);
  };

  const handleReopenDoors = () => {
    setDoorsOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#210314] text-[#fff0c2] selection:bg-[#febf4a] selection:text-[#3a0826] overflow-x-hidden">
      
      {/* 1. Custom 3D Ornate Door Entry Loader */}
      {!doorsOpen && (
        <DoorLoader onComplete={() => setDoorsOpen(true)} />
      )}

      {/* 2. Main Festival Experience */}
      <div className={`transition-opacity duration-1000 ${doorsOpen ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Sticky Translucent to Gradient Navbar */}
        <Navbar
          onOpenPassModal={() => handleOpenPassModal("early-bird")}
          onReopenDoors={handleReopenDoors}
          isAudioPlaying={isAudioPlaying}
          onToggleAudio={handleToggleAudio}
        />

        <main>
          {/* Hero Section with Three.js 3D Dandiya Centerpiece & Countdown */}
          <HeroSection onOpenPassModal={() => handleOpenPassModal("early-bird")} />

          {/* About Section: Legacy, Highlights & Counters */}
          <AboutSection />

          {/* Pass Tiers & Pricing Section */}
          <PassTiersSection onSelectPass={(tierId) => handleOpenPassModal(tierId)} />

          {/* Committee Members Grid & Category Filters */}
          <CommitteeSection />

          {/* Sponsors Showcase with Infinite Marquee */}
          <SponsorsSection />

          {/* Standalone Urgency Register CTA Section */}
          <RegisterCtaSection onOpenPassModal={() => handleOpenPassModal("early-bird")} />

          {/* Masonry / Grid Gallery with Lightbox */}
          <GallerySection />

          {/* Schedule Timeline & FAQs */}
          <ScheduleFaqSection />
        </main>

        {/* Ornate Footer */}
        <Footer onOpenPassModal={() => handleOpenPassModal("early-bird")} />

        {/* Ambient Festive Sound Generator Toggle */}
        <AudioPlayerToggle
          isPlaying={isAudioPlaying}
          onToggle={handleToggleAudio}
        />

        {/* Pass Registration & Digital QR E-Pass Modal */}
        <RegistrationModal
          isOpen={passModalOpen}
          onClose={() => setPassModalOpen(false)}
          preselectedTierId={selectedPassTier}
        />

      </div>

    </div>
  );
}
