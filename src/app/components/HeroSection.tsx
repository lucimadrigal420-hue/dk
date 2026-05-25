'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from './ui/AppImage';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/drake-van-allen-a-nu%C3%B1ez-48a9163b7',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 40;
      const y = (e.clientY / innerHeight - 0.5) * 40;
      const blobs = document.querySelectorAll<HTMLElement>('.hero-blob');
      blobs.forEach((blob, i) => {
        const factor = (i + 1) * 0.4;
        blob.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let cancelled = false;
    import('gsap').then(({ gsap }) => {
      if (cancelled) return;
      const tl = gsap.timeline({ delay: 0.2 });
      tl.fromTo(
        '.hero-eyebrow',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      )
        .fromTo(
          '.hero-line',
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power4.out' },
          '-=0.4'
        )
        .fromTo(
          '.hero-sub',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          '.hero-ctas',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          '.hero-social',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
          '-=0.3'
        );
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="hero-blob blob-primary blob-morph absolute w-[600px] h-[600px] -top-32 -right-32 opacity-25 transition-transform duration-700 ease-out" />
        <div className="hero-blob blob-secondary blob-morph-slow absolute w-[500px] h-[500px] bottom-0 -left-48 opacity-20 transition-transform duration-1000 ease-out" />
        <div className="hero-blob blob-accent absolute w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 transition-transform duration-500 ease-out" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left: Text content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Eyebrow */}
            <div className="hero-eyebrow opacity-100 flex items-center gap-3">
              <div className="flex items-center gap-2 glass-panel px-4 py-2 rounded-full w-fit">
                <span className="w-2 h-2 rounded-full bg-primary status-pulse" />
                <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                  Available for Work
                </span>
              </div>
              <span className="hidden sm:block text-muted-foreground/40 text-xs font-medium">
                Cebu, Philippines
              </span>
            </div>

            {/* Headline — NUÑEZ with proper Ñ rendering */}
            <h1
              ref={headlineRef}
              className="text-hero-display font-black text-foreground leading-none tracking-tight"
            >
              <span className="hero-line block opacity-100">DRAKE</span>
              <span className="hero-line block opacity-100 shimmer-text">VAN ALLEN</span>
              <span className="hero-line block opacity-100 text-foreground/20">
                NU
                <span style={{ fontFeatureSettings: '"kern" 1', letterSpacing: '-0.01em' }}>Ñ</span>
                EZ.
              </span>
            </h1>

            {/* Sub */}
            <div className="hero-sub opacity-100 space-y-3 max-w-xl">
              <p className="text-lg sm:text-xl font-semibold text-foreground/80 leading-snug">
                Creative Professional & Management Accounting Student
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I turn ideas into polished visual content — from event photography and social media
                campaigns to AI-powered digital design. Based in Cebu, available globally.
              </p>
            </div>

            {/* CTAs */}
            <div className="hero-ctas opacity-100 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary text-accent-foreground text-sm font-bold uppercase tracking-widest rounded-full btn-glow magnetic-btn hover:bg-accent transition-all duration-300"
              >
                Hire Me
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 glass-panel text-foreground text-sm font-bold uppercase tracking-widest rounded-full hover:border-primary/40 hover:text-primary transition-all duration-300 magnetic-btn"
              >
                View Projects
              </a>
            </div>

            {/* Social quick-links replacing micro-stats */}
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/50">
                Connect
              </span>
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hero-social opacity-100 flex items-center gap-2 glass-panel px-4 py-2.5 rounded-full text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 group"
                >
                  <span className="group-hover:scale-110 transition-transform duration-200">
                    {icon}
                  </span>
                  <span className="text-xs font-semibold">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Photo + floating cards */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-80 lg:w-full max-w-sm">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden glass-panel glow-green relative">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1332a1d79-1772140965034.png"
                  alt="Professional young man in smart casual attire against dark background with green ambient lighting"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              <div className="float-medium absolute -left-6 top-12 glass-panel-strong px-4 py-3 rounded-2xl hidden sm:block">
                <p className="text-xs text-muted-foreground font-medium">Role</p>
                <p className="text-sm font-bold text-foreground">Creative & Admin Pro</p>
              </div>

              <div className="float-slow absolute -right-4 bottom-16 glass-panel-strong px-4 py-3 rounded-2xl hidden sm:block">
                <p className="text-xs text-muted-foreground font-medium">Tools</p>
                <div className="flex gap-1.5 mt-1">
                  {['Canva', 'AI', 'G-Suite'].map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="float-medium absolute -left-4 bottom-8 glass-panel-strong px-4 py-3 rounded-2xl hidden sm:block"
                style={{ animationDelay: '1s' }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-primary text-lg">🏆</span>
                  <div>
                    <p className="text-xs font-bold text-foreground">Best Ad Video</p>
                    <p className="text-[10px] text-muted-foreground">ASSETS 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-muted-foreground/40">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent scroll-bounce" />
      </div>
    </section>
  );
}
