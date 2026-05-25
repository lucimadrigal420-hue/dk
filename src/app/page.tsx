'use client';

import React, { useState, useCallback } from 'react';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {/* Preloader */}
      {!loaded && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Scroll progress */}
      <ScrollProgress />

      {/* Cursor glow (desktop only) */}
      <CursorGlow />

      {/* Noise texture overlay */}
      <div className="noise-texture" aria-hidden="true" />

      {/* Main page */}
      <div
        className={`min-h-screen transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <Header />

        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ExperienceSection />
          <ProjectsSection />
          <TestimonialsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Drake Van Allen A. Nuñez',
            jobTitle: 'Creative Professional & Management Accounting Student',
            email: 'drakevanallenunez@gmail.com',
            telephone: '+63-967-374-6866',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Cebu City',
              addressCountry: 'PH',
            },
            url: 'https://drakeportfolio.com',
            sameAs: ['https://www.linkedin.com/in/drake-van-allen-a-nu%C3%B1ez-48a9163b7'],
            knowsAbout: [
              'Event Photography',
              'Social Media Management',
              'Digital Editing',
              'Canva',
              'Lightroom',
              'AI Tools',
            ],
            alumniOf: {
              '@type': 'CollegeOrUniversity',
              name: 'University of Cebu',
            },
          }),
        }}
      />
    </>
  );
}
