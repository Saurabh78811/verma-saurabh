import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { ArrowUpRight, Download, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { PROFILE } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection, onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) setMobileOpen(false);
    };
    window.addEventListener('keydown', onEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onEsc);
    };
  }, [mobileOpen]);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full px-3 pt-2.5 sm:px-6 sm:pt-3.5 pointer-events-none">
        <div
          className={`pointer-events-auto relative mx-auto max-w-7xl overflow-hidden rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'border border-white/[0.12] bg-[#0B1120]/85 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]'
              : 'border border-white/[0.07] bg-[#0B1120]/65 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.28)]'
          }`}
        >
          {/* Subtle Top Architectural Rim Highlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-10 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8]/45 to-transparent"
          />

          <div className="flex h-14 sm:h-16 items-center justify-between gap-6 px-4 sm:px-6">
            {/* Zone 1: Custom Geometric SV Crest + Single-Line Wordmark */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className="group flex items-center gap-3 whitespace-nowrap shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
            >
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-[#38BDF8]/30 bg-gradient-to-br from-[#162238] to-[#080B14] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-200 group-hover:border-[#38BDF8]/70 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.22)]">
                <svg
                  viewBox="0 0 32 32"
                  className="h-5 w-5"
                  fill="none"
                  aria-hidden="true"
                >
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

              <span className="font-display text-[15px] sm:text-base font-bold tracking-tight text-white transition-colors group-hover:text-[#7DD3FC]">
                {PROFILE.name}
              </span>
            </a>

            {/* Zone 2: Recessed Glass Track Navigation with Fluid Hover & Active Spotlight */}
            <nav
              aria-label="Primary Navigation"
              onMouseLeave={() => setHoveredId(null)}
              className="hidden lg:flex items-center gap-0.5 rounded-xl border border-white/[0.07] bg-[#080B14]/70 p-1"
            >
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                const isHovered = hoveredId === link.id;

                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onMouseEnter={() => setHoveredId(link.id)}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.id);
                    }}
                    className={`relative rounded-lg px-3 py-1.5 text-[13px] font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] ${
                      isActive ? 'text-white' : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    {isHovered && !isActive && (
                      <motion.span
                        layoutId="nav-hover-spotlight"
                        transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 rounded-lg bg-white/[0.06]"
                      />
                    )}

                    {isActive && (
                      <motion.span
                        layoutId="nav-active-capsule"
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 rounded-lg border border-[#38BDF8]/35 bg-gradient-to-b from-[#38BDF8]/18 to-[#6366F1]/12 shadow-[0_0_16px_rgba(56,189,248,0.16)]"
                      />
                    )}

                    <span className="relative z-10">{link.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Gradient-Rimmed Primary Action + Mobile Trigger */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={onOpenResume}
                className="group relative hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#38BDF8]/40 via-[#6366F1]/40 to-[#38BDF8]/40 p-[1px] whitespace-nowrap shrink-0 transition-all duration-200 hover:from-[#38BDF8] hover:to-[#6366F1] hover:shadow-[0_0_24px_rgba(56,189,248,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] cursor-pointer"
              >
                <span className="inline-flex items-center gap-2 rounded-[11px] bg-[#0B1120] px-4 py-2 text-xs font-semibold text-white transition-colors duration-150 group-hover:bg-[#38BDF8] group-hover:text-[#080B14]">
                  <Download className="h-3.5 w-3.5 text-[#38BDF8] transition-colors group-hover:text-[#080B14]" aria-hidden="true" />
                  <span>Download Resume</span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-[#101827] text-white transition-colors hover:border-[#38BDF8]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] cursor-pointer"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Scroll Progress Hairline Along Bottom Edge */}
          <motion.div
            aria-hidden="true"
            style={{ scaleX: smoothProgress }}
            className="h-[2px] w-full origin-left bg-gradient-to-r from-[#38BDF8] via-[#7DD3FC] to-[#6366F1]"
          />
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 lg:hidden bg-[#080B14]/96 backdrop-blur-2xl flex flex-col justify-between p-6"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#38BDF8]/35 bg-[#101827] font-display text-sm font-bold text-white">
                  {PROFILE.brandInitials}
                </span>
                <span className="font-display text-base font-bold text-white">
                  {PROFILE.name}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-[#101827] text-white cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav aria-label="Mobile Navigation" className="my-auto flex flex-col gap-1.5 py-6">
              {NAV_LINKS.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.a
                    key={link.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.id);
                    }}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-lg font-medium transition-colors ${
                      isActive
                        ? 'border border-[#38BDF8]/35 bg-[#101827] text-[#38BDF8]'
                        : 'text-[#94A3B8] hover:bg-white/[0.04] hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="inline-flex items-center gap-2 font-mono text-xs text-[#94A3B8]/70 tabular-nums">
                      0{idx + 1}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </motion.a>
                );
              })}
            </nav>

            <div className="border-t border-white/10 pt-5">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenResume();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#38BDF8] px-5 py-3.5 text-sm font-semibold text-[#080B14] transition-opacity hover:opacity-95 cursor-pointer"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>Download Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
