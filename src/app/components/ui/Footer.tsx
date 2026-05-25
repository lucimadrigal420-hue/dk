import React from 'react';
import AppLogo from './AppLogo';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
];

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/drake-van-allen-a-nu%C3%B1ez-48a9163b7?skpRedirect=true',
    icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z',
  },
  {
    label: 'Email',
    href: 'mailto:drakevanallenunez@gmail.com',
    icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6',
  },
];

export default function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-border py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + Copyright */}
        <div className="flex items-center gap-3">
          <AppLogo size={28} />
          <span className="text-muted-foreground/60 text-sm font-medium">
            © {year} Drake Van Allen A. Nuñez
          </span>
        </div>

        {/* Links */}
        <nav
          className="flex flex-wrap items-center justify-center gap-6"
          aria-label="Footer navigation"
        >
          {footerLinks?.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-muted-foreground/60 hover:text-foreground transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {socials?.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-xl glass-panel hover:border-primary/40 hover:text-primary text-muted-foreground/60 transition-all duration-300"
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
              >
                <path d={icon} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
