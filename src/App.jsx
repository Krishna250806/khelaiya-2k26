import React, { useState, useEffect } from 'react';
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
  // Check if user has previously opened doors or was at a specific section on refresh
  const [doorsOpen, setDoorsOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      const hasOpened = sessionStorage.getItem('nuv_doors_opened') === 'true';
      const hasHash = Boolean(window.location.hash);
      const lastSection = sessionStorage.getItem('nuv_last_section');
      return hasOpened || hasHash || Boolean(lastSection);
    }
    return false;
  });

  const handleDoorComplete = () => {
    sessionStorage.setItem('nuv_doors_opened', 'true');
    setDoorsOpen(true);
  };

  const handleReopenDoors = () => {
    sessionStorage.removeItem('nuv_doors_opened');
    sessionStorage.removeItem('nuv_last_section');
    setDoorsOpen(false);
  };

  const handleScrollToRegistration = () => {
    const el = document.getElementById('registration');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 1. Restore last visited section or hash on page reload/refresh
  useEffect(() => {
    if (!doorsOpen) return;

    const targetSection = window.location.hash.replace('#', '') || sessionStorage.getItem('nuv_last_section');
    if (targetSection) {
      const restore = () => {
        const el = document.getElementById(targetSection);
        if (el) {
          el.scrollIntoView({ behavior: 'auto' });
        }
      };

      restore();
      const t1 = setTimeout(restore, 100);
      const t2 = setTimeout(restore, 400);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [doorsOpen]);

  // 2. Track current visible section continuously as user scrolls
  useEffect(() => {
    if (!doorsOpen) return;

    const sectionIds = [
      'hero',
      'about',
      'organizer',
      'event',
      'registration',
      'sponsors',
      'team',
      'gallery',
      'faq',
    ];

    let ticking = false;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 250;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          sessionStorage.setItem('nuv_last_section', id);
          if (window.location.hash !== `#${id}`) {
            window.history.replaceState(null, '', `#${id}`);
          }
          break;
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [doorsOpen]);

  // 3. Clean any search query params on load to prevent form resubmission prompts
  useEffect(() => {
    if (window.location.search) {
      window.history.replaceState(null, '', window.location.pathname + window.location.hash);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#210314] text-[#fff0c2] selection:bg-[#febf4a] selection:text-[#3a0826] overflow-x-hidden">
      
      {/* 1. Custom 3D Ornate Door Entry Loader */}
      {!doorsOpen && (
        <DoorLoader onComplete={handleDoorComplete} />
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

          {/* 4. About NUV खेलैया */}
          <AboutSection />

          {/* 5. Organized by Cultural Committee */}
          <EventHighlights />

          {/* 6. Join NUV खेलैया Registration Section */}
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
