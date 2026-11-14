import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  Cpu,
  Handshake,
  Layers,
  MapPin,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';
import { PROFILE, PROFILE_METRICS } from '../data/portfolioData';

type AboutTab = 'story' | 'craft' | 'process';

const ABOUT_TABS: { id: AboutTab; label: string }[] = [
  { id: 'story', label: 'My Story' },
  { id: 'craft', label: 'What I Build' },
  { id: 'process', label: 'How I Work' },
];

const CRAFT_PILLARS = [
  {
    icon: Code2,
    title: 'Frontend & React.js Systems',
    detail: 'Responsive, accessible interfaces built with React.js, Tailwind CSS, and smooth motion.',
  },
  {
    icon: Layers,
    title: 'Full-Stack Web Platforms',
    detail: 'Scalable Node.js, Express.js, and MongoDB backends with structured REST APIs and Stripe.',
  },
  {
    icon: Smartphone,
    title: 'Android & Storefronts',
    detail: 'Native Kotlin & Jetpack Compose apps alongside WordPress, Shopify, and Technical SEO/AEO.',
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Architecture',
    detail: 'Aligning on user goals, visual hierarchy, and clean data models before writing a line of code.',
  },
  {
    step: '02',
    title: 'Modular Engineering',
    detail: 'Building reusable components, responsive layouts, and well-tested endpoints with clear milestones.',
  },
  {
    step: '03',
    title: 'Optimization & Launch',
    detail: 'Polishing performance, mobile responsiveness, technical SEO/AEO metadata, and post-launch readiness.',
  },
];

const METRIC_ICONS = [Briefcase, Layers, Handshake, Cpu];

export default function About() {
  const [imageError, setImageError] = useState(false);
  const [activeTab, setActiveTab] = useState<AboutTab>('story');

  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#080B14] py-20 sm:py-28"
    >
      {/* Subtle Ambient Section Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 left-0 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[#38BDF8]/[0.07] blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-20 h-[340px] w-[340px] translate-x-1/3 rounded-full bg-[#6366F1]/[0.07] blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#38BDF8]">01. About Me</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[42px] lg:leading-[1.12] [text-wrap:balance]">
              {PROFILE.aboutHeading}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#94A3B8]">
            Combining thoughtful product UI with clean full-stack and Android engineering to build software people enjoy using.
          </p>
        </motion.div>

        {/* Two-Column Balanced Editorial Grid */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Portrait Column with Editorial Caption Frame */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="group relative flex h-full min-h-[380px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101827] shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
              <div className="relative flex-1 overflow-hidden">
                {!imageError ? (
                  <img
                    src={PROFILE.portraitImage}
                    alt="Saurabh Verma studio portrait"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                ) : (
                  <div className="flex h-full min-h-[360px] flex-col items-center justify-center bg-[#101827] p-8 text-center">
                    <span className="font-display text-4xl font-bold text-[#38BDF8]">
                      {PROFILE.brandInitials}
                    </span>
                    <span className="mt-2 text-sm text-[#94A3B8]">{PROFILE.name}</span>
                  </div>
                )}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/70 to-transparent"
                />
              </div>

              {/* Clean Identity Footer Bar */}
              <div className="relative z-10 border-t border-white/[0.08] bg-[#0B1120]/95 px-6 py-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-display text-base font-bold text-white">
                      {PROFILE.name}
                    </div>
                    <div className="text-xs text-[#94A3B8]">{PROFILE.shortRole}</div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#38BDF8]">
                    <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>{PROFILE.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Narrative & Engineering Philosophy Panel */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#101827]/75 p-6 sm:p-9 lg:col-span-7"
          >
            <div>
              {/* Interactive Tab Switcher */}
              <div className="mb-7 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
                <div
                  role="tablist"
                  aria-label="About Saurabh Verma details"
                  className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-[#080B14]/80 p-1"
                >
                  {ABOUT_TABS.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative rounded-lg px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                          isActive ? 'text-[#080B14]' : 'text-[#94A3B8] hover:text-white'
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="about-active-tab"
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 rounded-lg bg-[#38BDF8]"
                          />
                        )}
                        <span className="relative z-10">{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#94A3B8]">
                  <Sparkles className="h-3.5 w-3.5 text-[#38BDF8]" aria-hidden="true" />
                  <span>{PROFILE.availabilityText}</span>
                </span>
              </div>

              {/* Animated Tab Content */}
              <AnimatePresence mode="wait">
                {activeTab === 'story' && (
                  <motion.div
                    key="story"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-5"
                  >
                    {PROFILE.aboutParagraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-base leading-relaxed text-[#CBD5E1] sm:text-[17px]"
                      >
                        {paragraph}
                      </p>
                    ))}

                    <div className="rounded-xl border border-white/[0.08] bg-[#080B14]/60 p-5">
                      <h3 className="font-display text-sm font-semibold text-white">
                        Core Technologies Worked With
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
                        React.js · JavaScript (ES6+) · Tailwind CSS · Node.js · Express.js ·
                        MongoDB · REST APIs · Kotlin · Jetpack Compose · XML · Firebase ·
                        WordPress · Shopify · Technical SEO &amp; AEO
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'craft' && (
                  <motion.div
                    key="craft"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3.5"
                  >
                    {CRAFT_PILLARS.map((pillar) => {
                      const Icon = pillar.icon;
                      return (
                        <div
                          key={pillar.title}
                          className="flex items-start gap-4 rounded-xl border border-white/[0.08] bg-[#080B14]/65 p-4 transition-colors hover:border-[#38BDF8]/30"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#38BDF8]/25 bg-[#38BDF8]/10 text-[#38BDF8]">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </div>
                          <div>
                            <h3 className="font-display text-sm font-bold text-white">
                              {pillar.title}
                            </h3>
                            <p className="mt-1 text-sm leading-relaxed text-[#94A3B8]">
                              {pillar.detail}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                )}

                {activeTab === 'process' && (
                  <motion.div
                    key="process"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3.5"
                  >
                    {PROCESS_STEPS.map((item) => (
                      <div
                        key={item.step}
                        className="flex items-start gap-4 rounded-xl border border-white/[0.08] bg-[#080B14]/65 p-4 transition-colors hover:border-[#38BDF8]/30"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#101827] font-mono text-xs font-bold text-[#38BDF8] tabular-nums">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="font-display text-sm font-bold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-[#94A3B8]">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Action Footer */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-6">
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <a
                  href="#experience"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-medium text-[#CBD5E1] transition-colors hover:text-white"
                >
                  View Experience
                </a>
                <span aria-hidden="true" className="text-white/20">
                  ·
                </span>
                <a
                  href="#certifications"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-medium text-[#CBD5E1] transition-colors hover:text-white"
                >
                  Certifications
                </a>
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#38BDF8]/35 bg-[#38BDF8]/10 px-4 py-2 text-xs font-semibold text-[#38BDF8] transition-colors hover:bg-[#38BDF8] hover:text-[#080B14]"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Architectural Metric Ledger */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {PROFILE_METRICS.map((metric, idx) => {
            const Icon = METRIC_ICONS[idx % METRIC_ICONS.length];
            return (
              <div
                key={metric.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#101827]/65 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#38BDF8]/35 hover:bg-[#141E30]/90"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8]/40 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                />
                <div className="flex items-center justify-between">
                  <div className="font-display text-3xl font-bold tracking-tight text-white tabular-nums sm:text-4xl">
                    {metric.value}
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#080B14]/70 text-[#38BDF8]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                </div>
                <div className="mt-3 text-sm font-semibold text-[#E2E8F0]">{metric.label}</div>
                <div className="mt-0.5 text-xs text-[#94A3B8]">{metric.hint}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
