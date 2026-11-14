import {
  ArrowUp,
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
} from 'lucide-react';
import { useState } from 'react';
import { PROFILE } from '../data/portfolioData';

const EXPLORE_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Technical Skills' },
];

const WORK_LINKS = [
  { id: 'projects', label: 'Featured Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'experience', label: 'Experience' },
  { id: 'why-work-with-me', label: 'Why Work With Me' },
];

const SPECIALTIES = [
  'React.js & Full Stack',
  'Android App Development',
  'WordPress & Shopify',
  'SEO & AEO Strategy',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.contact.email}`;
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#080B14] pt-16 pb-10">
      {/* Top Rim Light & Subtle Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-12 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8]/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[320px] w-[640px] -translate-x-1/2 rounded-full bg-[#38BDF8]/[0.06] blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Upper Brand & Quick-Connect Split Banner */}
        <div className="flex flex-col justify-between gap-8 rounded-2xl border border-white/10 bg-[#101827]/75 p-6 sm:p-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <div className="flex items-center gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#38BDF8]/35 bg-gradient-to-br from-[#162238] to-[#080B14] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden="true">
                  <path
                    d="M14.5 9.5H9.2C7.98 9.5 7 10.48 7 11.7V13.6C7 14.82 7.98 15.8 9.2 15.8H12.8C14.02 15.8 15 16.78 15 18V20.3C15 21.52 14.02 22.5 12.8 22.5H7.5"
                    stroke="#FFFFFF"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 9.5L21.3 22.5L25.2 9.5"
                    stroke="#38BDF8"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <div className="font-display text-xl font-bold tracking-tight text-white">
                  {PROFILE.name}
                </div>
                <div className="text-xs font-medium text-[#38BDF8]">{PROFILE.shortRole}</div>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#94A3B8]">
              Crafting modern React.js web applications, full-stack platforms, native Android apps, and high-visibility search strategies.
            </p>

            <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#CBD5E1]">
              <MapPin className="h-3.5 w-3.5 text-[#38BDF8]" aria-hidden="true" />
              <span>{PROFILE.location}</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center shrink-0">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-[#080B14]/80 px-4 py-3 text-xs font-semibold text-white whitespace-nowrap transition-colors hover:border-[#38BDF8]/40 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                  <span className="text-emerald-300">Email Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-[#38BDF8]" aria-hidden="true" />
                  <span>{PROFILE.contact.email}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#38BDF8] px-5 py-3 text-xs font-semibold text-[#080B14] whitespace-nowrap shadow-[0_0_24px_rgba(56,189,248,0.22)] transition-all duration-150 hover:bg-[#7DD3FC] cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* 4-Column Structured Footer Links Grid */}
        <div className="mt-12 grid grid-cols-2 gap-8 border-b border-white/[0.08] pb-12 md:grid-cols-4">
          <div>
            <h3 className="font-display text-sm font-bold text-white">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className="text-sm text-[#94A3B8] transition-colors hover:text-[#38BDF8]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold text-white">Portfolio</h3>
            <ul className="mt-4 space-y-2.5">
              {WORK_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className="text-sm text-[#94A3B8] transition-colors hover:text-[#38BDF8]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold text-white">Capabilities</h3>
            <ul className="mt-4 space-y-2.5">
              {SPECIALTIES.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('services');
                    }}
                    className="text-sm text-[#94A3B8] transition-colors hover:text-[#38BDF8]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold text-white">Connect</h3>
            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href={`mailto:${PROFILE.contact.email}`}
                className="group inline-flex items-center gap-2.5 text-sm text-[#94A3B8] transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-[#38BDF8]" aria-hidden="true" />
                <span>Email</span>
              </a>
              <a
                href={PROFILE.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 text-sm text-[#94A3B8] transition-colors hover:text-white"
              >
                <Linkedin className="h-4 w-4 text-[#38BDF8]" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PROFILE.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 text-sm text-[#94A3B8] transition-colors hover:text-white"
              >
                <Github className="h-4 w-4 text-[#38BDF8]" aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href={PROFILE.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 text-sm text-[#94A3B8] transition-colors hover:text-white"
              >
                <MessageSquare className="h-4 w-4 text-[#38BDF8]" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Back-to-Top Row */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-[#94A3B8]">
            &copy; {currentYear} {PROFILE.name}. Crafted with React, Tailwind CSS &amp; Framer Motion.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 rounded-xl border border-white/12 bg-[#101827] px-4 py-2 text-xs font-semibold text-[#CBD5E1] transition-all duration-150 hover:-translate-y-0.5 hover:border-[#38BDF8]/45 hover:text-white cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp
              className="h-3.5 w-3.5 text-[#38BDF8] transition-transform duration-150 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
