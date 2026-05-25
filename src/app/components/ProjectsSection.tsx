'use client';

import React, { useEffect, useState } from 'react';
import AppImage from './ui/AppImage';

const categories = ['All', 'Photography', 'Design', 'Social Media', 'Operations'];

interface CaseStudy {
  challenge: string;
  execution: string;
  result: string;
}

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  badge: string | null;
  links: { demo: string; github: string | null };
  caseStudy: CaseStudy;
}

const projects: Project[] = [
  {
    title: 'ASSETS 2025 Ad Campaign',
    category: 'Design',
    description:
      'Award-winning advertisement video and infographics series for the ASSETS school event. Best in Advertisement Video + Best in Infographics Design.',
    tags: ['Canva', 'Video', 'Infographics'],
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_11ba60dc7-1772888679548.png',
    imageAlt:
      'Vibrant graphic design workspace with colorful digital artwork and creative tools on a dark desk',
    badge: '🏆 Award-Winning',
    links: { demo: '#', github: '#' },
    caseStudy: {
      challenge:
        'The ASSETS 2025 school event needed a cohesive visual identity — a compelling ad video and a series of infographics that would stand out among competing student organizations and drive event attendance.',
      execution:
        'Designed a full campaign in Canva with a unified color palette and motion-inspired layouts. Produced a 60-second advertisement video with animated text overlays and crafted 5 data-driven infographics highlighting event highlights and schedules.',
      result:
        'Won Best in Advertisement Video and Best in Infographics Design at ASSETS 2025. Campaign materials were shared across all official school social media channels, reaching 1,000+ students.',
    },
  },
  {
    title: 'School Event Photography Series',
    category: 'Photography',
    description:
      '18+ school events documented with professional photography, post-processed in Lightroom with AI enhancement for social media distribution.',
    tags: ['Lightroom', 'DSLR', 'AI Tools'],
    image: 'https://images.unsplash.com/photo-1652250142060-b5febeaf63e6',
    imageAlt:
      'Professional DSLR camera on tripod capturing a vibrant school event with stage lighting and crowd',
    badge: '18+ Events',
    links: { demo: '#', github: null },
    caseStudy: {
      challenge:
        'School organizations needed high-quality, fast-turnaround event documentation for social media and official records, but lacked a dedicated photographer with post-production skills.',
      execution:
        'Covered 18+ events using a DSLR camera, applying professional composition techniques. Post-processed all images in Lightroom with AI-assisted color grading and delivered optimized exports for web and print.',
      result:
        'Delivered 100+ edited photos per event within 24 hours. Images were used in official school publications and social media posts, consistently receiving the highest engagement of any content type.',
    },
  },
  {
    title: 'Social Media Content Calendar',
    category: 'Social Media',
    description:
      'Systematic social media content management for ABM Society — content planning, Canva graphics, post scheduling, and performance tracking.',
    tags: ['Meta Suite', 'Canva', 'Scheduling'],
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_11220fc01-1772193958009.png',
    imageAlt:
      'Social media content calendar displayed on laptop with colorful post previews and scheduling timeline',
    badge: null,
    links: { demo: '#', github: null },
    caseStudy: {
      challenge:
        "The ABM Society's social media presence was inconsistent — posts were irregular, visually mismatched, and generating low engagement with no clear content strategy.",
      execution:
        'Built a 30-day content calendar in Google Sheets, designed branded post templates in Canva, and scheduled content via Meta Business Suite. Tracked weekly analytics to refine posting times and content types.',
      result:
        'Increased average post engagement by 25% within the first month. Established a consistent posting cadence of 5x per week, growing the page following by 15% over one semester.',
    },
  },
  {
    title: 'Product Stall Operations — Tabo Sa UC-Pri',
    category: 'Operations',
    description:
      "Led full product stall from concept to execution using the 5P's business framework. Managed daily ops, food standards compliance, and customer service.",
    tags: ['5Ps Framework', 'Leadership', 'Operations'],
    image: 'https://images.unsplash.com/photo-1569095723914-2f8d7d3de475',
    imageAlt:
      'Organized product stall with neatly arranged items and professional signage at an outdoor market event',
    badge: 'Leadership',
    links: { demo: '#', github: null },
    caseStudy: {
      challenge:
        'The class project required a fully operational product stall at the UC-Pri market event, demanding end-to-end business planning, team coordination, and real-time customer service under time pressure.',
      execution:
        "Applied the 5P's business framework (Product, Price, Place, Promotion, People) to plan the stall. Led a team of 4, managed inventory, enforced food safety standards, and handled customer interactions throughout the event day.",
      result:
        'Successfully sold out 90% of inventory by event close. Received commendation from faculty for operational efficiency and team leadership. Project earned a top grade in the Business Operations module.',
    },
  },
  {
    title: 'Portrait Photography — UC Community',
    category: 'Photography',
    description:
      'Portrait and event photography services for students and community members, leveraging AI-assisted editing for consistent professional results.',
    tags: ['Portrait', 'Lightroom', 'AI Enhancement'],
    image: 'https://images.unsplash.com/photo-1674400038037-8095840ad4a2',
    imageAlt:
      'Close-up portrait photography with professional soft lighting, sharp focus on subject against blurred background',
    badge: null,
    links: { demo: '#', github: null },
    caseStudy: {
      challenge:
        'Students and community members needed affordable, professional-quality portrait photos for IDs, LinkedIn profiles, and school requirements, but professional studios were inaccessible or too expensive.',
      execution:
        'Set up a portable portrait studio using natural light and a reflector. Shot with a DSLR and applied AI-enhanced retouching in Lightroom for skin tone consistency, background cleanup, and sharpness optimization.',
      result:
        'Delivered 50+ portrait sessions with a 100% satisfaction rate. Clients reported using photos for LinkedIn profiles, scholarship applications, and school IDs. Built a referral-based client base within the university.',
    },
  },
  {
    title: 'Digital Infographics Series',
    category: 'Design',
    description:
      'Award-recognized infographics series combining data visualization with compelling visual design, created in Canva with AI-assisted layout refinement.',
    tags: ['Canva', 'Data Viz', 'Infographics'],
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_147397ec6-1772803956682.png',
    imageAlt:
      'Clean infographic design displayed on screen with colorful data charts and modern typography in bright workspace',
    badge: '🏆 Best Infographics',
    links: { demo: '#', github: null },
    caseStudy: {
      challenge:
        'Complex event data and organizational information needed to be communicated visually to a student audience that responds better to graphics than text-heavy reports.',
      execution:
        'Designed a 6-piece infographic series in Canva using a consistent visual language — custom icons, color-coded data sections, and AI-assisted layout suggestions. Each piece was optimized for both digital sharing and print display.',
      result:
        "Won Best in Infographics Design at ASSETS 2025. The series was printed and displayed at the event venue, and digital versions achieved 3x higher share rates compared to text posts on the organization's social media.",
    },
  },
];

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Case study: ${project.title}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-panel-strong rounded-3xl border border-primary/20 shadow-2xl">
        {/* Header image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-t-3xl">
          <AppImage
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
          {project.badge && (
            <div className="absolute top-4 left-4">
              <span className="text-[10px] font-bold bg-primary/90 text-accent-foreground px-3 py-1 rounded-full">
                {project.badge}
              </span>
            </div>
          )}
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full glass-panel flex items-center justify-center text-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
            aria-label="Close case study"
          >
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
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title & category */}
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-primary">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-foreground mt-1">{project.title}</h3>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.tags.map((tag) => (
                <span key={tag} className="tech-badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Case study sections */}
          <div className="space-y-5">
            {/* Challenge */}
            <div className="glass-panel rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0">
                  <span className="text-xs">⚡</span>
                </div>
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wide">
                  The Challenge
                </h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                {project.caseStudy.challenge}
              </p>
            </div>

            {/* Execution */}
            <div className="glass-panel rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                  <span className="text-xs">🛠</span>
                </div>
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wide">
                  The Execution
                </h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                {project.caseStudy.execution}
              </p>
            </div>

            {/* Result */}
            <div className="glass-panel rounded-2xl p-5 space-y-2 border-primary/30">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0">
                  <span className="text-xs">✅</span>
                </div>
                <h4 className="text-sm font-bold text-primary uppercase tracking-wide">
                  The Result
                </h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                {project.caseStudy.result}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-3 pt-2">
            <a
              href="#contact"
              onClick={onClose}
              className="flex-1 py-3 bg-primary text-accent-foreground text-sm font-bold uppercase tracking-widest rounded-xl btn-glow text-center hover:bg-accent transition-all duration-300"
            >
              Work With Me
            </a>
            <button
              onClick={onClose}
              className="px-5 py-3 glass-panel text-sm font-semibold text-muted-foreground hover:text-foreground rounded-xl transition-all duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const filtered =
    activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  const handleFilterChange = (cat: string) => {
    if (cat === activeFilter) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveFilter(cat);
      setIsTransitioning(false);
    }, 200);
  };

  useEffect(() => {
    let cancelled = false;
    import('gsap')?.then(({ gsap }) => {
      if (cancelled) return;
      import('gsap/ScrollTrigger')?.then(({ ScrollTrigger }) => {
        if (cancelled) return;
        gsap?.registerPlugin(ScrollTrigger);
        gsap?.utils?.toArray<HTMLElement>('.projects-header-reveal')?.forEach((el) => {
          gsap?.fromTo(
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

  return (
    <>
      <section id="projects" className="relative py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute top-1/3 right-0 w-64 h-64 blob-primary opacity-10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="projects-header-reveal opacity-100 flex items-center gap-4 mb-6">
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary">
              Portfolio
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
          </div>

          <div className="projects-header-reveal opacity-100 flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <h2 className="text-section-title font-black text-foreground">
              Selected Work<span className="text-primary">.</span>
            </h2>
            {/* Filter buttons with smooth transitions */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleFilterChange(cat)}
                  className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform ${
                    activeFilter === cat
                      ? 'bg-primary text-accent-foreground btn-glow scale-105'
                      : 'glass-panel text-muted-foreground hover:text-foreground hover:border-primary/30 hover:scale-105'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project grid with smooth transition */}
          <div
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-200 ease-in-out ${
              isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}
          >
            {filtered.map((project, i) => (
              <article
                key={project.title}
                className="project-card glass-panel rounded-3xl overflow-hidden group cursor-pointer hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 40}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden relative">
                  <AppImage
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover project-card-img"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  {project.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold bg-primary/90 text-accent-foreground px-3 py-1 rounded-full">
                        {project.badge}
                      </span>
                    </div>
                  )}
                  {/* Hover overlay with "View Case Study" prompt */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="glass-panel-strong text-xs font-bold text-foreground px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      View Case Study →
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-primary">
                      {project.category}
                    </span>
                    <h3 className="text-base font-bold text-foreground mt-1 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-badge">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2 border-t border-border">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                      View Project
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}
