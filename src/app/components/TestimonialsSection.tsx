'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  org: string;
  rating: number;
  avatar: string;
  avatarImg?: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Drake's photography skills are exceptional. He captured our event beautifully and delivered edited photos faster than expected. Highly professional for his age.",
    name: 'Ma. Cristina Reyes',
    role: 'Faculty Adviser, ABM Society',
    org: 'University of Cebu',
    rating: 5,
    avatar: 'CR',
    avatarImg: '',
  },
  {
    quote:
      'His leadership during the product stall project was impressive — organized, calm under pressure, and made sure everyone knew their role. The stall was a success.',
    name: 'Joshua Manlapaz',
    role: 'Classmate & Co-organizer',
    org: 'Nionang, UC-Pri',
    rating: 5,
    avatar: 'JM',
    avatarImg: '',
  },
  {
    quote:
      'The infographics Drake created for our campaign were stunning. They won Best in Infographics for a reason — clean, informative, and visually compelling.',
    name: 'Angelica Tiu',
    role: 'Marketing Head, ASSETS 2025',
    org: 'University of Cebu',
    rating: 5,
    avatar: 'AT',
    avatarImg: '',
  },
  {
    quote:
      'Very reliable with deadlines and incredibly detail-oriented. He manages social media with consistency and creativity. A real asset to any remote team.',
    name: 'Patrick Lim',
    role: 'Small Business Owner',
    org: 'Cebu City',
    rating: 5,
    avatar: 'PL',
    avatarImg: '',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-primary"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

interface AvatarProps {
  src?: string;
  initials: string;
  size?: 'sm' | 'md';
}

function Avatar({ src, initials, size = 'md' }: AvatarProps) {
  const [imgError, setImgError] = useState(false);
  const sizeClass = size === 'md' ? 'w-14 h-14 text-sm' : 'w-8 h-8 text-xs';

  if (src && !imgError) {
    return (
      <img
        src={src}
        alt={`${initials} headshot`}
        onError={() => setImgError(true)}
        className={`${sizeClass} rounded-full object-cover border-2 border-primary/30`}
      />
    );
  }

  return (
    <div
      className={`${sizeClass} rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-accent-foreground font-black border-2 border-primary/30`}
    >
      {initials}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleDotClick = (i: number) => {
    setActive(i);
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAutoplay();
  };

  useEffect(() => {
    let cancelled = false;
    import('gsap').then(({ gsap }) => {
      if (cancelled) return;
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray<HTMLElement>('.testimonial-reveal').forEach((el) => {
          gsap.fromTo(
            el,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
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

  const t = testimonials[active];

  return (
    <section id="testimonials" className="relative py-20 lg:py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/8 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 blob-accent opacity-10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="testimonial-reveal opacity-100 flex items-center gap-4 mb-14 justify-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/40 max-w-20" />
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary">
            Social Proof
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/40 max-w-20" />
        </div>

        <div className="testimonial-reveal opacity-100 text-center mb-12">
          <h2 className="text-section-title font-black text-foreground">
            What Others Say<span className="text-primary">.</span>
          </h2>
        </div>

        {/* Main testimonial */}
        <div className="testimonial-reveal opacity-100 glass-panel rounded-4xl p-8 sm:p-12 text-center space-y-8 relative overflow-hidden">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

          {/* Stars */}
          <div className="flex justify-center">
            <StarRating count={t.rating} />
          </div>

          {/* Quote */}
          <blockquote className="text-xl sm:text-2xl font-semibold text-foreground/90 leading-relaxed italic max-w-3xl mx-auto transition-all duration-500">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          {/* Avatar + Author */}
          <div className="flex flex-col items-center gap-3">
            <Avatar src={t.avatarImg} initials={t.avatar} size="md" />
            <div>
              <p className="font-bold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
              <p className="text-xs text-primary/70 font-semibold">{t.org}</p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? 'w-6 h-2 bg-primary'
                    : 'w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Floating mini cards */}
        <div className="testimonial-reveal opacity-100 grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              onClick={() => handleDotClick(i)}
              className={`glass-panel rounded-2xl p-4 text-left transition-all duration-300 hover:border-primary/40 ${
                i === active ? 'border-primary/40 bg-primary/5' : ''
              }`}
            >
              <div className="mb-2">
                <Avatar src={item.avatarImg} initials={item.avatar} size="sm" />
              </div>
              <p className="text-xs font-bold text-foreground truncate">{item.name}</p>
              <p className="text-[10px] text-muted-foreground truncate">{item.org}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
