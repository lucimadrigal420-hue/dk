'use client';

import React, { useEffect } from 'react';

const experiences = [
  {
    period: '2024 — 2025',
    role: 'ICT Committee (Photojournalist)',
    org: 'ABM Society of Solidarity, Excellence, and Teamwork for Success',
    location: 'University of Cebu · Cebu City',
    type: 'Volunteer',
    highlights: [
      'Photographed 18+ school events, capturing high-quality images for documentation and promotion',
      'Edited and enhanced photos using digital tools such as Canva and Lightroom',
      'Managed social media posts to showcase school activities and projects',
      'Applied basic AI tools to improve photography workflow and content creation',
      'Provided portrait and event photography services for students and community',
    ],
    tags: ['Photography', 'Lightroom', 'Social Media', 'AI Tools'],
  },
  {
    period: '2024 — 2025',
    role: 'Leader — Product Stall Project',
    org: 'Tabo Sa UC-Pri, Nionang',
    location: 'University of Cebu · Cebu City',
    type: 'Leadership',
    highlights: [
      "Led the design, planning, and development of a product stall using the 5P's framework",
      'Monitored daily operations, ensuring proper food handling and compliance with standards',
      'Assisted customers, recorded orders, and recommended menu options',
      'Coordinated team tasks to ensure smooth workflow and efficient service delivery',
    ],
    tags: ['Leadership', 'Operations', 'Planning', '5Ps Framework'],
  },
];

const certifications = [
  {
    title: 'Best in Advertisement Video',
    issuer: 'ASSETS 2025',
    year: '2025',
    icon: '🥇',
  },
  {
    title: 'Best in Infographics Design',
    issuer: 'ASSETS 2025',
    year: '2025',
    icon: '🥇',
  },
];

const education = [
  {
    degree: 'Bachelor of Science in Management Accounting',
    school: 'University of Cebu',
    location: 'Cebu City, Philippines',
    period: '2025 (1st Sem)',
    gpa: '1.56',
  },
  {
    degree: 'Senior High School — ABM Track',
    school: 'University of Cebu',
    location: 'Cebu City, Philippines',
    period: '2023–2025',
    gpa: '1.13 (High Honors)',
  },
];

export default function ExperienceSection() {
  useEffect(() => {
    let cancelled = false;
    import('gsap')?.then(({ gsap }) => {
      if (cancelled) return;
      import('gsap/ScrollTrigger')?.then(({ ScrollTrigger }) => {
        if (cancelled) return;
        gsap?.registerPlugin(ScrollTrigger);
        gsap?.utils?.toArray<HTMLElement>('.exp-reveal')?.forEach((el, i) => {
          gsap?.fromTo(
            el,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              delay: i * 0.08,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 90%',
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
    <section id="experience" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="exp-reveal opacity-100 flex items-center gap-4 mb-14">
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary">
            Experience
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: Experience rows */}
          <div className="lg:col-span-8">
            <h2 className="exp-reveal opacity-100 text-section-title font-black text-foreground mb-10">
              Where I&apos;ve
              <br />
              <span className="shimmer-text">Made Impact.</span>
            </h2>

            <div className="space-y-0 border-t border-border">
              {experiences?.map((exp, i) => (
                <div
                  key={exp?.role}
                  className="exp-reveal opacity-100 exp-row border-b border-border py-8 px-0 group cursor-default"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                    {/* Period + Type */}
                    <div className="sm:w-32 shrink-0 space-y-1">
                      <p className="text-xs font-mono text-muted-foreground/60">{exp?.period}</p>
                      <span className="text-[10px] font-bold tracking-wide text-primary/80 uppercase bg-primary/10 px-2 py-0.5 rounded-full inline-block">
                        {exp?.type}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {exp?.role}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium">{exp?.org}</p>
                        <p className="text-xs text-muted-foreground/50 mt-0.5">{exp?.location}</p>
                      </div>

                      {/* Highlights — collapsed by default, expanded on hover via CSS */}
                      <ul className="space-y-2">
                        {exp?.highlights?.slice(0, 3)?.map((h) => (
                          <li
                            key={h}
                            className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed"
                          >
                            <span className="text-primary mt-1.5 shrink-0 text-xs">▸</span>
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp?.tags?.map((tag) => (
                          <span key={tag} className="tech-badge">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Education + Certifications sticky panel */}
          <div className="lg:col-span-4 space-y-6">
            {/* Education */}
            <div className="exp-reveal opacity-100 glass-panel rounded-3xl p-6 space-y-5">
              <h3 className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                Education
              </h3>
              {education?.map((edu) => (
                <div
                  key={edu?.degree}
                  className="space-y-1.5 pb-5 border-b border-border last:border-0 last:pb-0"
                >
                  <p className="text-sm font-bold text-foreground leading-snug">{edu?.degree}</p>
                  <p className="text-xs text-muted-foreground">{edu?.school}</p>
                  <p className="text-[10px] text-muted-foreground/50">
                    {edu?.location} · {edu?.period}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[10px] font-bold tracking-wide text-primary/80 uppercase bg-primary/10 px-2 py-0.5 rounded-full">
                      GPA {edu?.gpa}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="exp-reveal opacity-100 glass-panel rounded-3xl p-6 space-y-4">
              <h3 className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                Certifications & Awards
              </h3>
              {certifications?.map((cert) => (
                <div
                  key={cert?.title}
                  className="flex gap-3 items-start p-3 rounded-xl bg-primary/5 border border-primary/15 hover:border-primary/30 transition-colors"
                >
                  <span className="text-xl shrink-0">{cert?.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-foreground leading-snug">{cert?.title}</p>
                    <p className="text-xs text-primary font-semibold">{cert?.issuer}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Remote Readiness */}
            <div className="exp-reveal opacity-100 glass-panel rounded-3xl p-6 space-y-4">
              <h3 className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                Remote Readiness
              </h3>
              <div className="space-y-2.5">
                {[
                  { label: 'Internet', value: 'Converge 100 Mbps primary' },
                  { label: 'Backup', value: 'Globe mobile data hotspot' },
                  { label: 'Power', value: 'UPS with 2-hour battery' },
                  { label: 'Availability', value: 'US/UK/AU time zones · Graveyard OK' },
                ]?.map(({ label, value }) => (
                  <div key={label} className="flex gap-2 text-xs">
                    <span className="text-primary font-bold w-20 shrink-0">{label}</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
