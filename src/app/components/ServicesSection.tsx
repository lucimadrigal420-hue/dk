'use client';

import React, { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: '📸',
    title: 'Event Photography',
    tagline: 'Capture moments that matter',
    description:
      'Professional event coverage with high-quality image documentation and post-production. Experienced across 18+ school and community events using DSLR and AI enhancement tools.',
    benefits: ['High-res delivery', 'AI-enhanced editing', 'Fast turnaround', 'Portrait & event'],
    badge: 'Most Requested',
  },
  {
    icon: '📱',
    title: 'Social Media Management',
    tagline: 'Content that converts',
    description:
      'End-to-end social media handling — content planning, post creation, scheduling, and analytics. Proficient with Meta Business Suite and Canva for cohesive brand storytelling.',
    benefits: ['Content calendar', 'Canva graphics', 'Post scheduling', 'Analytics review'],
    badge: null,
  },
  {
    icon: '🎨',
    title: 'Digital Editing & Design',
    tagline: 'Polished visuals, fast',
    description:
      'From photo retouching in Lightroom to infographic design in Canva — award-winning design work recognized at ASSETS 2025 for Best Ad Video and Best Infographics.',
    benefits: ['Lightroom retouching', 'Canva infographics', 'AI upscaling', 'Video editing'],
    badge: '🏆 Award-Winning',
  },
  {
    icon: '💼',
    title: 'Administrative & Virtual Support',
    tagline: 'Organized, reliable, remote-ready',
    description:
      'Precision-focused administrative support including data entry, email correspondence, calendar management, and Google Workspace operations. US/UK/AU time zones available.',
    benefits: ['Data entry', 'Email management', 'G-Suite fluent', 'Remote-ready'],
    badge: null,
  },
];

// Pricing calculator config
const calculatorOptions = {
  eventHours: {
    label: 'Event Photography Hours',
    options: [
      { label: '2 hrs', value: 2, price: 40 },
      { label: '4 hrs', value: 4, price: 75 },
      { label: '8 hrs (Full Day)', value: 8, price: 130 },
    ],
  },
  socialPosts: {
    label: 'Social Media Posts / Week',
    options: [
      { label: '3 posts', value: 3, price: 30 },
      { label: '5 posts', value: 5, price: 50 },
      { label: '10 posts', value: 10, price: 90 },
    ],
  },
  adminHours: {
    label: 'Virtual Assistance Hours / Week',
    options: [
      { label: '5 hrs', value: 5, price: 25 },
      { label: '10 hrs', value: 10, price: 45 },
      { label: '20 hrs', value: 20, price: 80 },
    ],
  },
};

function PricingCalculator() {
  const [eventIdx, setEventIdx] = useState(0);
  const [socialIdx, setSocialIdx] = useState(0);
  const [adminIdx, setAdminIdx] = useState(0);

  const eventPrice = calculatorOptions.eventHours.options[eventIdx].price;
  const socialPrice = calculatorOptions.socialPosts.options[socialIdx].price;
  const adminPrice = calculatorOptions.adminHours.options[adminIdx].price;

  const totalMin = Math.round((eventPrice + socialPrice + adminPrice) * 0.9);
  const totalMax = Math.round((eventPrice + socialPrice + adminPrice) * 1.15);

  return (
    <div className="glass-panel-strong rounded-3xl p-7 sm:p-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-8 space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-base">
              🧮
            </div>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary">
              Package Calculator
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-foreground">
            Build Your Custom Package
          </h3>
          <p className="text-sm text-muted-foreground">
            Toggle your needs below and see an instant price estimate — no commitment required.
          </p>
        </div>

        {/* Options */}
        <div className="space-y-6">
          {/* Event Photography */}
          <div className="space-y-3">
            <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground flex items-center gap-2">
              <span>📸</span> {calculatorOptions.eventHours.label}
            </label>
            <div className="flex flex-wrap gap-2">
              {calculatorOptions.eventHours.options.map((opt, i) => (
                <button
                  key={opt.label}
                  onClick={() => setEventIdx(i)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                    eventIdx === i
                      ? 'bg-primary text-accent-foreground btn-glow scale-105'
                      : 'glass-panel text-muted-foreground hover:text-foreground hover:border-primary/30'
                  }`}
                >
                  {opt.label}
                  <span className="ml-1.5 opacity-60">${opt.price}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-3">
            <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground flex items-center gap-2">
              <span>📱</span> {calculatorOptions.socialPosts.label}
            </label>
            <div className="flex flex-wrap gap-2">
              {calculatorOptions.socialPosts.options.map((opt, i) => (
                <button
                  key={opt.label}
                  onClick={() => setSocialIdx(i)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                    socialIdx === i
                      ? 'bg-primary text-accent-foreground btn-glow scale-105'
                      : 'glass-panel text-muted-foreground hover:text-foreground hover:border-primary/30'
                  }`}
                >
                  {opt.label}
                  <span className="ml-1.5 opacity-60">${opt.price}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Admin Hours */}
          <div className="space-y-3">
            <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground flex items-center gap-2">
              <span>💼</span> {calculatorOptions.adminHours.label}
            </label>
            <div className="flex flex-wrap gap-2">
              {calculatorOptions.adminHours.options.map((opt, i) => (
                <button
                  key={opt.label}
                  onClick={() => setAdminIdx(i)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                    adminIdx === i
                      ? 'bg-primary text-accent-foreground btn-glow scale-105'
                      : 'glass-panel text-muted-foreground hover:text-foreground hover:border-primary/30'
                  }`}
                >
                  {opt.label}
                  <span className="ml-1.5 opacity-60">${opt.price}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Price display */}
        <div className="mt-8 p-6 rounded-2xl bg-primary/8 border border-primary/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
              Estimated Package Range
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-primary glow-text transition-all duration-300">
                ${totalMin}
              </span>
              <span className="text-lg font-bold text-muted-foreground">–</span>
              <span className="text-3xl sm:text-4xl font-black text-primary glow-text transition-all duration-300">
                ${totalMax}
              </span>
              <span className="text-xs text-muted-foreground font-medium">/ project</span>
            </div>
            <p className="text-[11px] text-muted-foreground/60 mt-1">
              Final pricing confirmed after discovery call · USD estimates
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 bg-primary text-accent-foreground text-sm font-bold uppercase tracking-widest rounded-full btn-glow hover:bg-accent transition-all duration-300"
          >
            Book this Package
            <svg
              width="14"
              height="14"
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
        </div>
      </div>
    </div>
  );
}

interface ServiceCardProps {
  service: (typeof services)[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x, y });
  };

  return (
    <div
      ref={cardRef}
      className="service-reveal opacity-100 relative glass-panel rounded-3xl p-7 cursor-default tilt-card overflow-hidden group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setTilt({ x: 0, y: 0 });
        setHovered(false);
      }}
      style={{
        transform: `perspective(800px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale(${hovered ? 1.02 : 1})`,
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Glow on hover */}
      {hovered && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent rounded-3xl pointer-events-none" />
      )}

      {/* Badge */}
      {service.badge && (
        <div className="absolute top-5 right-5">
          <span className="text-[10px] font-bold tracking-wide bg-primary/15 text-primary border border-primary/30 px-3 py-1 rounded-full">
            {service.badge}
          </span>
        </div>
      )}

      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl mb-5 group-hover:bg-primary/20 transition-colors duration-300">
        {service.icon}
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-xs text-primary font-semibold tracking-wide mt-0.5">
            {service.tagline}
          </p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>

        {/* Benefits */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {service.benefits.map((b) => (
            <span key={b} className="tech-badge">
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  useEffect(() => {
    let cancelled = false;
    import('gsap').then(({ gsap }) => {
      if (cancelled) return;
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray<HTMLElement>('.service-reveal').forEach((el, i) => {
          gsap.fromTo(
            el,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              delay: i * 0.1,
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
    <section id="services" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Blob */}
      <div
        className="absolute bottom-0 left-0 w-80 h-80 blob-primary opacity-10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="service-reveal opacity-100 flex items-end justify-between gap-8 mb-14">
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary">
                Services
              </span>
              <div className="w-16 h-px bg-gradient-to-r from-primary/40 to-transparent" />
            </div>
            <h2 className="text-section-title font-black text-foreground">
              What I Do<span className="text-primary">.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-300 shrink-0"
          >
            Get a Quote
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* BENTO AUDIT:
            Array: [EventPhoto, ContentMgmt, DigitalEditing, AdminOps]
            Row 1 (grid-cols-2): [col-1: EventPhoto] [col-2: ContentMgmt]
            Row 2 (grid-cols-2): [col-1: DigitalEditing] [col-2: AdminOps]
            Placed 4/4 ✓ */}
        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Pricing Calculator */}
        <div className="service-reveal opacity-100">
          <PricingCalculator />
        </div>
      </div>
    </section>
  );
}
