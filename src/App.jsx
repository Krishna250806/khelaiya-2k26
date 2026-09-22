import React, { useState } from 'react';
import DoorLoader from './components/DoorLoader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventHighlights from './components/EventHighlights';
import RegistrationSection from './components/RegistrationSection';
import SponsorsSection from './components/SponsorsSection';
import TeamSection from './components/TeamSection';
import RegisterCtaSection from './components/RegisterCtaSection';
import GallerySection from './components/GallerySection';
import ScheduleFaqSection from './components/ScheduleFaqSection';
import Footer from './components/Footer';

export default function App() {
  const [doorsOpen, setDoorsOpen] = useState(false);

  const handleReopenDoors = () => {
    setDoorsOpen(false);
  };

  const handleScrollToRegistration = () => {
    const el = document.getElementById('registration');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#210314] text-[#fff0c2] selection:bg-[#febf4a] selection:text-[#3a0826] overflow-x-hidden">
      
      {/* 1. Custom 3D Ornate Door Entry Loader */}
      {!doorsOpen && (
        <DoorLoader onComplete={() => setDoorsOpen(true)} />
      )}

      {/* 2. Main Festival Experience */}
      <div className={`transition-opacity duration-1000 ${doorsOpen ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Sticky Glassmorphic Navbar */}
        <Navbar
          onRegisterClick={handleScrollToRegistration}
          onReopenDoors={handleReopenDoors}
        />

        <main>
          {/* 3. Hero Section */}
          <HeroSection onRegisterClick={handleScrollToRegistration} />

          {/* 4. About NUV Khelaiya */}
          <AboutSection />

          {/* 5. Event Highlights */}
          <EventHighlights />

          {/* 6. Join NUV Khelaiya Registration Section */}
          <RegistrationSection onRegisterClick={handleScrollToRegistration} />

          {/* 7. Sponsors */}
          <SponsorsSection />

          {/* 8. The Team (Leadership & Team Heads) */}
          <TeamSection />

          {/* 9. Visual Impact CTA: Come. Dance. Celebrate. */}
          <RegisterCtaSection onRegisterClick={handleScrollToRegistration} />

          {/* 10. Gallery (The Moments) */}
          <GallerySection />

          {/* 11. Event Information & FAQs */}
          <ScheduleFaqSection />
        </main>

        {/* 12. Footer */}
        <Footer onRegisterClick={handleScrollToRegistration} />

      </div>

    </div>
  );
}
