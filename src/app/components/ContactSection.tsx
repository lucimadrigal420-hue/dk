'use client';

import React, { useState, useEffect } from 'react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function CalendlyWidget() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Load Calendly widget script
    const existing = document.getElementById('calendly-script');
    if (!existing) {
      const script = document.createElement('script');
      script.id = 'calendly-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => setLoaded(true);
      document.head.appendChild(script);
    } else {
      setLoaded(true);
    }
    return () => {};
  }, []);

  return (
    <div className="glass-panel rounded-3xl overflow-hidden border border-primary/20">
      {/* Header */}
      <div className="p-5 border-b border-border flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-base shrink-0">
          📅
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">Quick-Book a Discovery Call</p>
          <p className="text-[11px] text-muted-foreground">15 min · Free · No commitment</p>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-primary status-pulse" />
          <span className="text-[10px] font-semibold text-primary">Available</span>
        </div>
      </div>

      {/* Calendly inline widget */}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/lucimadrigal420?hide_gdpr_banner=1&background_color=0d1410&text_color=f8faf8&primary_color=10b981"
        style={{ minWidth: '280px', height: '630px' }}
      />

      {!loaded && (
        <div className="flex items-center justify-center py-16 text-muted-foreground text-sm">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-primary/40 border-t-primary rounded-full animate-spin" />
            <span>Loading calendar...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'form' | 'calendar'>('form');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full bg-input border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder-muted-foreground/40 transition-all duration-300 input-glow ${
      focused === field ? 'border-primary/50' : 'border-border'
    }`;

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      <div
        className="absolute top-0 left-0 w-96 h-96 blob-primary opacity-10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 blob-secondary opacity-15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-14">
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary">
            Contact
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: CTA + info */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <h2 className="text-section-title font-black text-foreground leading-tight">
                Let&apos;s Work
                <br />
                <span className="shimmer-text">Together.</span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Whether you need event photography, social media management, digital design, or
                remote administrative support — I&apos;m ready to deliver quality work on time.
              </p>
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 glass-panel px-5 py-4 rounded-2xl w-fit">
              <span className="w-2.5 h-2.5 rounded-full bg-primary status-pulse" />
              <div>
                <p className="text-xs font-bold text-foreground">Currently Available</p>
                <p className="text-[10px] text-muted-foreground">
                  US/UK/AU time zones · Flexible scheduling
                </p>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              {[
                {
                  icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6',
                  label: 'Email',
                  value: 'drakevanallenunez@gmail.com',
                  href: 'mailto:drakevanallenunez@gmail.com',
                },
                {
                  icon: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 013 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.92 14z',
                  label: 'Phone',
                  value: '+63 967 374 6866',
                  href: 'tel:+639673746866',
                },
                {
                  icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z',
                  label: 'LinkedIn',
                  value: 'View Profile',
                  href: 'https://www.linkedin.com/in/drake-van-allen-a-nu%C3%B1ez-48a9163b7',
                },
              ].map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/40 transition-all duration-300 shrink-0">
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
                      <path d={icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wide">
                      {label}
                    </p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick-book prompt */}
            <div className="glass-panel rounded-2xl p-5 border-primary/20 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-primary text-lg">⚡</span>
                <p className="text-sm font-bold text-foreground">Prefer a quick call?</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Skip the email back-and-forth. Book a free 15-minute discovery call directly into my
                calendar using the booking widget on the right.
              </p>
              <button
                onClick={() => setActiveTab('calendar')}
                className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
              >
                Open booking calendar →
              </button>
            </div>
          </div>

          {/* Right: Tabbed Form / Calendar */}
          <div className="lg:col-span-7">
            {/* Tab switcher */}
            <div className="flex gap-1 p-1 glass-panel rounded-2xl mb-6 w-fit">
              <button
                onClick={() => setActiveTab('form')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wide transition-all duration-300 ${
                  activeTab === 'form'
                    ? 'bg-primary text-accent-foreground btn-glow'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                📝 Send Message
              </button>
              <button
                onClick={() => setActiveTab('calendar')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wide transition-all duration-300 ${
                  activeTab === 'calendar'
                    ? 'bg-primary text-accent-foreground btn-glow'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                📅 Quick-Book Call
              </button>
            </div>

            {/* Contact Form */}
            {activeTab === 'form' && (
              <div className="glass-panel-strong rounded-4xl p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/4 to-transparent pointer-events-none" />

                {submitted ? (
                  <div className="relative z-10 flex flex-col items-center justify-center py-16 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center glow-green">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-black text-foreground">Message Sent!</h3>
                    <p className="text-muted-foreground text-sm max-w-xs">
                      Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="text-xs font-bold text-primary hover:underline mt-2"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative z-10 space-y-5" noValidate>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="name"
                          className="text-xs font-semibold text-muted-foreground uppercase tracking-wide"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          onFocus={() => setFocused('name')}
                          onBlur={() => setFocused(null)}
                          placeholder="Your full name"
                          className={inputClass('name')}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label
                          htmlFor="email"
                          className="text-xs font-semibold text-muted-foreground uppercase tracking-wide"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused(null)}
                          placeholder="you@company.com"
                          className={inputClass('email')}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="subject"
                        className="text-xs font-semibold text-muted-foreground uppercase tracking-wide"
                      >
                        Service Needed
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        onFocus={() => setFocused('subject')}
                        onBlur={() => setFocused(null)}
                        className={inputClass('subject')}
                      >
                        <option value="" disabled>
                          Select a service...
                        </option>
                        <option value="photography">Event Photography</option>
                        <option value="social-media">Social Media Management</option>
                        <option value="design">Digital Editing & Design</option>
                        <option value="admin">Administrative Support</option>
                        <option value="other">Other / Let&apos;s talk</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="text-xs font-semibold text-muted-foreground uppercase tracking-wide"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        placeholder="Tell me about your project, timeline, and budget..."
                        className={`${inputClass('message')} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-primary text-accent-foreground text-sm font-bold uppercase tracking-widest rounded-xl btn-glow magnetic-btn hover:bg-accent transition-all duration-300 flex items-center justify-center gap-2.5"
                    >
                      Send Message
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
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </button>

                    <p className="text-center text-xs text-muted-foreground/50">
                      Typically responds within 24 hours · Available for remote work globally
                    </p>
                  </form>
                )}
              </div>
            )}

            {/* Calendly Widget */}
            {activeTab === 'calendar' && <CalendlyWidget />}
          </div>
        </div>
      </div>
    </section>
  );
}
