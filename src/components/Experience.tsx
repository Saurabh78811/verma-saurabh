import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import {
  ArrowRight,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Layers,
  List,
  MapPin,
} from 'lucide-react';
import { useRef, useState } from 'react';
import { EXPERIENCE_LIST } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

function ExperienceTimeline() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 80%'],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div ref={timelineRef} className="relative space-y-8 pl-6 sm:pl-10">
      <div
        aria-hidden="true"
        className="absolute top-3 bottom-3 left-2 sm:left-3.5 w-[1px] bg-white/10"
      />
      <motion.div
        aria-hidden="true"
        style={{ scaleY }}
        className="absolute top-3 bottom-3 left-2 sm:left-3.5 w-[2px] origin-top bg-gradient-to-b from-[#38BDF8] via-[#7DD3FC] to-[#6366F1]"
      />

      {EXPERIENCE_LIST.map((item, idx) => (
        <div key={item.id} className="relative">
          <motion.div
            aria-hidden="true"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: idx * 0.06 }}
            className="absolute -left-[23px] sm:-left-[33px] top-8 z-10 flex h-4 w-4 items-center justify-center rounded-full border border-[#38BDF8] bg-[#080B14] shadow-[0_0_14px_rgba(56,189,248,0.45)]"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
          </motion.div>

          <SpotlightCard
            delay={idx * 0.06}
            className="rounded-2xl border border-white/10 bg-[#101827]/80 p-6 sm:p-8 transition-colors hover:border-[#38BDF8]/40"
          >
            <div className="flex flex-col justify-between gap-4 border-b border-white/[0.08] pb-5 md:flex-row md:items-start">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#38BDF8]">
                  <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="font-semibold">{item.type}</span>
                </div>
                <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {item.role}
                </h3>
                <p className="mt-1 text-base font-medium text-[#CBD5E1]">
                  {item.organization}
                </p>
              </div>

              <div className="flex flex-col gap-1.5 text-xs text-[#94A3B8] md:text-right">
                <span className="inline-flex items-center gap-1.5 md:justify-end tabular-nums">
                  <Calendar className="h-3.5 w-3.5 text-[#38BDF8]" aria-hidden="true" />
                  {item.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 md:justify-end">
                  <MapPin className="h-3.5 w-3.5 text-[#94A3B8]" aria-hidden="true" />
                  {item.location}
                </span>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-[#CBD5E1] sm:text-base">
              {item.summary}
            </p>

            <ul className="mt-5 space-y-2.5">
              {item.responsibilities.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-[#94A3B8]">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#38BDF8]"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-white/[0.08] pt-4">
              <p className="text-xs font-medium text-[#CBD5E1]">
                {item.stack.join(' · ')}
              </p>
            </div>
          </SpotlightCard>
        </div>
      ))}
    </div>
  );
}

export default function Experience() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'interactive' | 'timeline'>('interactive');

  const activeItem = EXPERIENCE_LIST[selectedIndex] ?? EXPERIENCE_LIST[0];

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#0B101D] py-20 sm:py-24"
    >
      {/* Subtle architectural depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-architectural-grid opacity-30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-[#38BDF8]/[0.07] blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-[#6366F1]/[0.07] blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header & Interactive View Mode Switcher */}
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-medium text-[#38BDF8]">06. Experience</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              Hands-On Engineering &amp; SEO Across Agency &amp; Travel Teams.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
              Combining full-stack software development with competitive Black Hat SEO execution
              across travel, freelance, and product engineering roles.
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center gap-5">
            {/* Inline Career Snapshot */}
            <div className="hidden sm:flex items-center gap-4 text-xs">
              <div>
                <div className="font-display text-lg font-bold text-white tabular-nums">
                  {EXPERIENCE_LIST.length} Roles
                </div>
                <div className="text-[#94A3B8]">Career Milestones</div>
              </div>
              <div aria-hidden="true" className="h-8 w-px bg-white/10" />
              <div>
                <div className="font-display text-lg font-bold text-[#38BDF8]">
                  Starlux Travel
                </div>
                <div className="text-[#94A3B8]">Currently Working</div>
              </div>
            </div>

            {/* View Switcher */}
            <div
              role="tablist"
              aria-label="Experience view mode"
              className="flex items-center gap-1 rounded-xl border border-white/10 bg-[#101827] p-1"
            >
              {[
                { id: 'interactive' as const, label: 'Focused View', icon: Layers },
                { id: 'timeline' as const, label: 'Full Timeline', icon: List },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = viewMode === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setViewMode(tab.id)}
                    className={`relative inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                      isActive ? 'text-[#080B14]' : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="exp-view-pill"
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 rounded-lg bg-[#38BDF8]"
                      />
                    )}
                    <Icon className="relative z-10 h-3.5 w-3.5" aria-hidden="true" />
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mode 1: Interactive Split Explorer */}
        {viewMode === 'interactive' ? (
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            {/* Left Column: Clickable Career Rail */}
            <div className="relative space-y-3 lg:col-span-5">
              {/* Vertical Connector Line */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-6 bottom-6 left-[27px] w-px bg-white/10"
              />

              {EXPERIENCE_LIST.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                const stepNum = String(idx + 1).padStart(2, '0');
                const isCurrent = item.duration.toLowerCase().includes('currently');

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedIndex(idx)}
                    className={`group relative flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'border-[#38BDF8]/45 bg-[#101827] shadow-[0_14px_35px_rgba(0,0,0,0.4)]'
                        : 'border-white/[0.07] bg-[#0E1525]/60 hover:border-white/20 hover:bg-[#101827]/80'
                    }`}
                  >
                    {/* Step Marker */}
                    <div
                      className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border font-mono text-xs font-bold transition-colors ${
                        isSelected
                          ? 'border-[#38BDF8] bg-[#38BDF8] text-[#080B14]'
                          : 'border-white/15 bg-[#080B14] text-[#94A3B8] group-hover:border-[#38BDF8]/40 group-hover:text-white'
                      }`}
                    >
                      {stepNum}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span
                          className={`text-xs font-semibold ${
                            isSelected ? 'text-[#38BDF8]' : 'text-[#94A3B8]'
                          }`}
                        >
                          {item.organization}
                        </span>
                        <span className="font-mono text-[11px] text-[#94A3B8] tabular-nums">
                          {isCurrent ? 'Current' : item.duration}
                        </span>
                      </div>

                      <h3 className="mt-1 font-display text-base font-bold text-white">
                        {item.role}
                      </h3>

                      <div className="mt-1.5 flex items-center justify-between gap-2 text-xs text-[#94A3B8]">
                        <span className="truncate">{item.location}</span>
                        <ArrowRight
                          className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${
                            isSelected
                              ? 'translate-x-0.5 text-[#38BDF8]'
                              : 'opacity-0 group-hover:opacity-100'
                          }`}
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Detailed Role Dossier */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <SpotlightCard
                    spotlightColor="rgba(56, 189, 248, 0.14)"
                    className="relative overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-[#101827] via-[#0E1525] to-[#0A101D] shadow-2xl"
                  >
                    {/* Top Gradient Accent Hairline */}
                    <div
                      aria-hidden="true"
                      className="h-[2px] w-full bg-gradient-to-r from-[#38BDF8] via-[#7DD3FC] to-[#6366F1]"
                    />

                    {/* Subtle Architectural Step Watermark */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute top-6 right-7 font-display text-7xl font-extrabold tracking-tighter text-white/[0.03] select-none"
                    >
                      {String(selectedIndex + 1).padStart(2, '0')}
                    </span>

                    <div className="p-6 sm:p-8">
                      {/* Role Header */}
                      <div className="flex flex-col justify-between gap-4 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-start">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#38BDF8]/30 bg-[#38BDF8]/12 text-[#38BDF8]">
                            <Building2 className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#38BDF8]">
                              <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                              <span>{activeItem.type}</span>
                            </div>
                            <h3 className="mt-1.5 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                              {activeItem.role}
                            </h3>
                            <p className="mt-1 text-base font-medium text-[#CBD5E1]">
                              {activeItem.organization}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5 text-xs text-[#94A3B8] sm:text-right shrink-0">
                          <span className="inline-flex items-center gap-1.5 sm:justify-end tabular-nums">
                            <Calendar className="h-3.5 w-3.5 text-[#38BDF8]" aria-hidden="true" />
                            <span className="text-white font-medium">{activeItem.duration}</span>
                          </span>
                          <span className="inline-flex items-center gap-1.5 sm:justify-end">
                            <MapPin className="h-3.5 w-3.5 text-[#94A3B8]" aria-hidden="true" />
                            <span>{activeItem.location}</span>
                          </span>
                        </div>
                      </div>

                      {/* Summary */}
                      <p className="mt-6 text-sm leading-relaxed text-[#CBD5E1] sm:text-base">
                        {activeItem.summary}
                      </p>

                      {/* Key Contributions */}
                      <div className="mt-6">
                        <h4 className="text-xs font-semibold tracking-wide text-[#94A3B8] uppercase">
                          Key Contributions &amp; Execution
                        </h4>
                        <ul className="mt-3.5 space-y-3">
                          {activeItem.responsibilities.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-[#080B14]/55 px-4 py-3 text-sm text-[#CBD5E1]"
                            >
                              <CheckCircle2
                                className="mt-0.5 h-4 w-4 shrink-0 text-[#38BDF8]"
                                aria-hidden="true"
                              />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Stack + Stepper Footer */}
                      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-5">
                        <p className="text-xs font-medium text-[#CBD5E1]">
                          {activeItem.stack.join(' · ')}
                        </p>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className="mr-1 font-mono text-xs text-[#94A3B8] tabular-nums">
                            {String(selectedIndex + 1).padStart(2, '0')} /{' '}
                            {String(EXPERIENCE_LIST.length).padStart(2, '0')}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedIndex(
                                (selectedIndex - 1 + EXPERIENCE_LIST.length) %
                                  EXPERIENCE_LIST.length
                              )
                            }
                            aria-label="Previous experience role"
                            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-[#080B14] text-[#94A3B8] transition-colors hover:border-[#38BDF8]/40 hover:text-white cursor-pointer"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedIndex((selectedIndex + 1) % EXPERIENCE_LIST.length)
                            }
                            aria-label="Next experience role"
                            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-[#080B14] text-[#94A3B8] transition-colors hover:border-[#38BDF8]/40 hover:text-white cursor-pointer"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <ExperienceTimeline />
        )}
      </div>
    </section>
  );
}
