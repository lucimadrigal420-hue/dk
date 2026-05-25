'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from './ui/AppImage';

const skills = [
  { name: 'Event Photography', icon: '📸' },
  { name: 'Social Media Management', icon: '📱' },
  { name: 'Digital Editing (Canva/Lightroom)', icon: '🎨' },
  { name: 'AI Tools (ChatGPT, Gemini, Grammarly)', icon: '🤖' },
  { name: 'Google Workspace', icon: '📊' },
  { name: 'Calendar & Project Management', icon: '📅' },
];

const techBadges = [
  'Canva',
  'Lightroom',
  'ChatGPT',
  'Gemini',
  'Grammarly',
  'Google Docs',
  'Google Sheets',
  'Google Slides',
  'Microsoft 365',
  'Zoom',
  'Slack',
  'Discord',
  'Meta Business Suite',
  'Google Meet',
];

const stats = [
  { value: 18, suffix: '+', label: 'School Events Photographed' },
  { value: 2, suffix: '', label: 'ASSETS Awards 2025' },
  { value: 1, suffix: '.56', label: 'University GPA' },
  { value: 99, suffix: '%', label: 'On-Time Delivery' },
];

interface CounterProps {
  target: number;
  suffix: string;
  active: boolean;
}

function Counter({ target, suffix, active }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 30);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span className="text-3xl font-black text-primary glow-text tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

// Decorative SVG graphic for the skills left panel
function SkillsGraphic() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center py-8 lg:py-0">
      {/* Outer glow ring */}
      <div className="relative w-56 h-56 sm:w-64 sm:h-64">
        <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />
        <div className="absolute inset-4 rounded-full border border-primary/15 animate-[spin_15s_linear_infinite_reverse]" />
        <div className="absolute inset-8 rounded-full border border-primary/10 animate-[spin_10s_linear_infinite]" />

        {/* Center icon cluster */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center glow-green">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
        </div>

        {/* Orbiting skill dots */}
        {[
          { angle: 0, emoji: '📸', label: 'Photo' },
          { angle: 60, emoji: '📱', label: 'Social' },
          { angle: 120, emoji: '🎨', label: 'Design' },
          { angle: 180, emoji: '🤖', label: 'AI' },
          { angle: 240, emoji: '📊', label: 'Data' },
          { angle: 300, emoji: '📅', label: 'Admin' },
        ].map(({ angle, emoji, label }) => {
          const rad = (angle * Math.PI) / 180;
          const r = 100;
          const x = 50 + r * Math.cos(rad);
          const y = 50 + r * Math.sin(rad);
          return (
            <div
              key={label}
              className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 glass-panel-strong rounded-full flex items-center justify-center text-sm hover:scale-110 transition-transform duration-300 cursor-default"
              style={{ left: `${x}%`, top: `${y}%` }}
              title={label}
            >
              {emoji}
            </div>
          );
        })}
      </div>

      {/* Label below */}
      <div className="mt-6 text-center space-y-1">
        <p className="text-xs font-bold tracking-widest uppercase text-primary">Skill Set</p>
        <p className="text-[11px] text-muted-foreground">6 Core Competencies</p>
      </div>

      {/* Floating stat badges */}
      <div className="flex gap-3 mt-4 flex-wrap justify-center">
        <div className="glass-panel px-3 py-2 rounded-xl text-center">
          <p className="text-lg font-black text-primary">3+</p>
          <p className="text-[10px] text-muted-foreground">Years Exp.</p>
        </div>
        <div className="glass-panel px-3 py-2 rounded-xl text-center">
          <p className="text-lg font-black text-primary">18+</p>
          <p className="text-[10px] text-muted-foreground">Events</p>
        </div>
        <div className="glass-panel px-3 py-2 rounded-xl text-center">
          <p className="text-lg font-black text-primary">2</p>
          <p className="text-[10px] text-muted-foreground">Awards</p>
        </div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [countersActive, setCountersActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCountersActive(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;
    import('gsap').then(({ gsap }) => {
      if (cancelled) return;
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray<HTMLElement>('.about-reveal').forEach((el) => {
          gsap.fromTo(
            el,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute top-0 right-0 w-96 h-96 blob-secondary opacity-15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <div className="about-reveal opacity-100 flex items-center gap-4 mb-12">
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary">
            About Me
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Image + floating badge */}
          <div className="lg:col-span-5 about-reveal opacity-100">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-panel relative">
                <AppImage
                  src="https://images.unsplash.com/photo-1568333261925-bec062e9bdfb"
                  alt="Young professional working on laptop in modern workspace with warm ambient lighting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-4 w-56 glass-panel-strong p-4 rounded-2xl rotate-2 shadow-xl hidden sm:block">
                <p className="text-xs text-muted-foreground leading-relaxed italic">
                  &quot;Reliability, adaptability, and a strong work ethic — always.&quot;
                </p>
                <p className="text-[10px] font-bold text-primary mt-2 tracking-wide">— Drake</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 space-y-10">
            <div className="about-reveal opacity-100 space-y-4">
              <h2 className="text-section-title font-black text-foreground leading-tight">
                Detail-Oriented.
                <br />
                <span className="shimmer-text">Creatively Wired.</span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                I&apos;m a Management Accounting student at the University of Cebu with a genuine
                passion for creative work. I&apos;ve photographed 18+ school events, managed social
                media channels, and built AI-augmented design workflows — all while maintaining a
                strong academic record.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                I&apos;m seeking an entry-level role where I can support teams with administrative
                precision, content creation, and digital operations. Available for US/UK/AU time
                zones — fully flexible for international schedules.
              </p>
            </div>

            {/* Stats bento grid */}
            <div className="about-reveal opacity-100 grid grid-cols-2 gap-3">
              {stats.map(({ value, suffix, label }) => (
                <div key={label} className="glass-panel p-5 rounded-2xl gradient-border">
                  <Counter target={value} suffix={suffix} active={countersActive} />
                  <p className="text-xs text-muted-foreground mt-1 font-medium">{label}</p>
                </div>
              ))}
            </div>

            {/* Core Skills — balanced layout with graphic on left */}
            <div className="about-reveal opacity-100 space-y-4">
              <h3 className="text-sm font-bold tracking-widest uppercase text-muted-foreground">
                Core Skills
              </h3>
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                {/* Left: decorative graphic */}
                <SkillsGraphic />
                {/* Right: skill grid */}
                <div className="grid grid-cols-2 gap-3">
                  {skills.map(({ name, icon }) => (
                    <div
                      key={name}
                      className="glass-panel rounded-2xl p-4 flex flex-col gap-2 hover:border-primary/40 transition-all duration-300 group"
                    >
                      <span className="text-2xl">{icon}</span>
                      <span className="text-xs font-semibold text-foreground/80 leading-snug group-hover:text-primary transition-colors duration-300">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="about-reveal opacity-100">
              <h3 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((badge) => (
                  <span key={badge} className="tech-badge">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* CV Download */}
            <div className="about-reveal opacity-100">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-3.5 glass-panel hover:border-primary/40 text-sm font-bold text-foreground hover:text-primary rounded-full transition-all duration-300 group"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-y-0.5 transition-transform"
                >
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download CV / Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
