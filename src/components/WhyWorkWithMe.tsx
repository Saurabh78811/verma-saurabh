import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Code,
  Gauge,
  HeartHandshake,
  MonitorSmartphone,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

const ICON_LIST = [Code, Sparkles, MonitorSmartphone, Clock, Gauge, HeartHandshake];

const PILLAR_DELIVERABLES: Record<string, string[]> = {
  'clean-code': [
    'Modular component hierarchy & typed APIs',
    'Consistent Git commits & clean repo structure',
  ],
  'modern-ui': [
    'High-contrast dark/light interface craft',
    'Purposeful Framer Motion micro-interactions',
  ],
  'responsive-design': [
    'Adaptive mobile, tablet & widescreen breakpoints',
    'Accessible keyboard & touch interactions',
  ],
  'on-time-delivery': [
    'Milestone-driven execution & clear timelines',
    'Proactive progress previews before launch',
  ],
  performance: [
    'Lean bundle budgets & optimized image loading',
    'Technical SEO, metadata & semantic structure',
  ],
  'client-focused': [
    'Direct founder/client communication without friction',
    'Post-launch refinements & deployment support',
  ],
};

const WORKFLOW_STEPS = [
  { step: '01', title: 'Discovery & Scope', detail: 'Align goals, timeline & feature list' },
  { step: '02', title: 'UI & Architecture', detail: 'Design system & clean data structure' },
  { step: '03', title: 'Iterative Build', detail: 'Full-stack / Android execution with previews' },
  { step: '04', title: 'QA & Launch', detail: 'Speed tuning, SEO checks & production deploy' },
];

export default function WhyWorkWithMe() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = WHY_WORK_WITH_ME[activeIndex] ?? WHY_WORK_WITH_ME[0];
  const ActiveIcon = ICON_LIST[activeIndex % ICON_LIST.length];
  const activeDeliverables = PILLAR_DELIVERABLES[activeItem.id] ?? [];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="why-work-with-me"
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#080B14] py-20 sm:py-24"
    >
      {/* Ambient architectural background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-architectural-grid opacity-30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/3 h-[420px] w-[520px] -translate-x-1/2 rounded-full bg-[#38BDF8]/[0.07] blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 h-[360px] w-[420px] rounded-full bg-[#6366F1]/[0.08] blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-10">
          {/* Left Sticky Column: Editorial Headline + Active Pillar Spotlight */}
          <div className="lg:sticky lg:top-24 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-sm font-medium text-[#38BDF8]">07. Why Work With Me</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
                Engineering Discipline Built Around Real Business Outcomes.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
                Every build pairs sharp visual craft with dependable architecture, transparent
                updates, and production-ready speed.
              </p>
            </motion.div>

            {/* Interactive Active Pillar Showcase Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="relative mt-7 overflow-hidden rounded-2xl border border-[#38BDF8]/30 bg-gradient-to-br from-[#101827] via-[#0D1424] to-[#090E1A] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#38BDF8] via-[#7DD3FC] to-[#6366F1]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-4 right-5 font-display text-6xl font-extrabold text-white/[0.04] select-none"
                >
                  {activeItem.index}
                </span>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#38BDF8]/35 bg-[#38BDF8]/12 text-[#38BDF8]">
                    <ActiveIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] font-semibold text-[#38BDF8]">
                      Principle {activeItem.index}
                    </p>
                    <h3 className="font-display text-lg font-bold text-white">
                      {activeItem.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#CBD5E1]">
                  {activeItem.description}
                </p>

                {activeDeliverables.length > 0 && (
                  <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                    {activeDeliverables.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                        <CheckCircle2
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#38BDF8]"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs text-[#94A3B8]">Ready to collaborate?</span>
                  <button
                    type="button"
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#38BDF8] px-3.5 py-2 text-xs font-semibold text-[#080B14] whitespace-nowrap transition-colors hover:bg-[#7DD3FC] cursor-pointer"
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Interactive 6-Pillar Bento Matrix */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {WHY_WORK_WITH_ME.map((item, idx) => {
              const Icon = ICON_LIST[idx % ICON_LIST.length];
              const isActive = idx === activeIndex;

              return (
                <SpotlightCard
                  key={item.id}
                  delay={idx * 0.05}
                  className={`rounded-2xl border transition-all duration-200 ${
                    isActive
                      ? 'border-[#38BDF8]/50 bg-[#121C2F] shadow-[0_14px_35px_rgba(0,0,0,0.4)]'
                      : 'border-white/10 bg-[#101827]/75 hover:border-[#38BDF8]/35'
                  }`}
                >
                  <button
                    type="button"
                    onMouseEnter={() => setActiveIndex(idx)}
                    onFocus={() => setActiveIndex(idx)}
                    onClick={() => setActiveIndex(idx)}
                    className="flex h-full w-full flex-col justify-between p-6 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-200 ${
                            isActive
                              ? 'border-[#38BDF8] bg-[#38BDF8] text-[#080B14]'
                              : 'border-[#38BDF8]/25 bg-[#38BDF8]/10 text-[#38BDF8] group-hover:scale-105 group-hover:bg-[#38BDF8] group-hover:text-[#080B14]'
                          }`}
                        >
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>

                        <span
                          className={`font-mono text-xs tabular-nums ${
                            isActive ? 'font-bold text-[#38BDF8]' : 'text-[#64748B]'
                          }`}
                        >
                          {item.index}
                        </span>
                      </div>

                      <h3 className="mt-5 font-display text-lg font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-3 text-xs">
                      <span
                        className={`font-medium transition-colors ${
                          isActive ? 'text-[#38BDF8]' : 'text-[#64748B] group-hover:text-[#CBD5E1]'
                        }`}
                      >
                        {isActive ? 'Active Focus' : 'Inspect Standard'}
                      </span>
                      <ArrowRight
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          isActive
                            ? 'translate-x-0.5 text-[#38BDF8]'
                            : 'text-[#64748B] group-hover:translate-x-0.5 group-hover:text-white'
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  </button>
                </SpotlightCard>
              );
            })}
          </div>
        </div>

        {/* Bottom Client Delivery Process Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-12 rounded-2xl border border-white/10 bg-[#0D1322]/90 p-5 sm:p-6"
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold tracking-wide text-[#38BDF8] uppercase">
              How Every Project Ships
            </span>
            <span className="text-xs text-[#94A3B8]">
              Structured 4-stage engineering workflow
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WORKFLOW_STEPS.map((phase, idx) => (
              <div
                key={phase.step}
                className="relative flex items-start gap-3 rounded-xl border border-white/[0.06] bg-[#080B14]/70 p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#38BDF8]/30 bg-[#38BDF8]/10 font-mono text-xs font-bold text-[#38BDF8]">
                  {phase.step}
                </span>
                <div className="min-w-0">
                  <h4 className="font-display text-sm font-bold text-white">{phase.title}</h4>
                  <p className="mt-0.5 text-xs text-[#94A3B8]">{phase.detail}</p>
                </div>
                {idx < WORKFLOW_STEPS.length - 1 && (
                  <ArrowRight
                    className="hidden lg:block absolute top-1/2 -right-3 z-10 h-4 w-4 -translate-y-1/2 text-[#38BDF8]/60"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
