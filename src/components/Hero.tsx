import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  Bot,
  Briefcase,
  Cloud,
  Code2,
  Container,
  Cpu,
  Database,
  Download,
  Figma,
  FileCode2,
  GitBranch,
  Globe,
  Layers,
  Palette,
  Search,
  Server,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Terminal,
  Workflow,
} from 'lucide-react';
import { useState } from 'react';
import { PROFILE } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

const CODE_TABS = {
  profile: {
    filename: 'saurabh.config.ts',
    lines: [
      'export const developer = {',
      '  name: "Saurabh Verma",',
      '  role: "Software Developer & Freelancer",',
      '  stack: ["React.js", "Node.js", "MongoDB", "Kotlin"],',
      '  platforms: ["Web Apps", "Android", "Shopify", "WordPress"],',
      '  availability: "Open for client projects",',
      '};',
    ],
  },
  workflow: {
    filename: 'delivery.pipeline.ts',
    lines: [
      'async function shipDigitalProduct(idea: ClientBrief) {',
      '  const architecture = await designUI(idea);',
      '  const frontend = buildReactSystem(architecture);',
      '  const backend = connectSecureAPI(frontend);',
      '  return deployWithSEO(backend, { speed: "optimal" });',
      '}',
    ],
  },
};

const MARQUEE_SKILLS = [
  { name: 'React.js', category: 'Frontend', icon: Code2 },
  { name: 'JavaScript ES6+', category: 'Frontend', icon: Terminal },
  { name: 'Tailwind CSS', category: 'UI System', icon: Palette },
  { name: 'Node.js', category: 'Backend', icon: Server },
  { name: 'Express.js', category: 'APIs', icon: Layers },
  { name: 'MongoDB', category: 'NoSQL', icon: Database },
  { name: 'SQL', category: 'Database', icon: Database },
  { name: 'Python', category: 'Language', icon: FileCode2 },
  { name: 'Java', category: 'Language', icon: FileCode2 },
  { name: 'CUDA', category: 'GPU Compute', icon: Cpu },
  { name: 'AWS & Cloud', category: 'Infrastructure', icon: Cloud },
  { name: 'Docker', category: 'Containers', icon: Container },
  { name: 'CI/CD', category: 'DevOps', icon: Workflow },
  { name: 'Kotlin', category: 'Android', icon: Smartphone },
  { name: 'Jetpack Compose', category: 'Android UI', icon: Cpu },
  { name: 'Firebase', category: 'Cloud', icon: Database },
  { name: 'Claude AI', category: 'AI Stack', icon: Bot },
  { name: 'Google AI Studio', category: 'AI Studio', icon: Sparkles },
  { name: 'Figma UI/UX', category: 'Design', icon: Figma },
  { name: 'WordPress', category: 'CMS', icon: Globe },
  { name: 'Shopify', category: 'E-Commerce', icon: ShoppingCart },
  { name: 'Technical SEO & AEO', category: 'Growth', icon: Search },
  { name: 'Git & GitHub', category: 'Workflow', icon: GitBranch },
];

const HERO_CONTAINER = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const HERO_ITEM = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero({ onOpenResume }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'workflow'>('profile');
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#080B14] pt-10 pb-0 sm:pt-14 lg:pt-16"
    >
      {/* Ambient architectural background lighting with subtle smooth drift */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-architectural-grid opacity-70"
      />
      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, 35, -15, 0],
          y: [0, 20, -25, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-40 left-1/4 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#38BDF8]/[0.12] blur-[140px]"
      />
      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, -30, 20, 0],
          y: [0, -25, 20, 0],
          scale: [1, 0.95, 1.07, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-1/3 right-0 h-[440px] w-[440px] rounded-full bg-[#6366F1]/[0.11] blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Staggered Editorial Value Proposition */}
          <motion.div
            variants={HERO_CONTAINER}
            initial="hidden"
            animate="show"
            className="flex flex-col justify-center lg:col-span-7"
          >
            {/* Availability & Identity Kicker */}
            <motion.div
              variants={HERO_ITEM}
              className="mb-5 flex flex-wrap items-center gap-3 text-sm text-[#94A3B8]"
            >
              <span className="inline-flex items-center gap-2 font-medium text-[#38BDF8]">
                <Briefcase className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{PROFILE.availabilityText}</span>
              </span>
              <span aria-hidden="true" className="text-white/25">
                ·
              </span>
              <span>{PROFILE.location}</span>
            </motion.div>

            {/* Dominant Display Headline */}
            <motion.h1
              variants={HERO_ITEM}
              className="font-display text-[clamp(2.35rem,4.4vw,3.9rem)] font-extrabold leading-[1.08] tracking-tight text-white [text-wrap:balance]"
            >
              Building Digital Experiences That{' '}
              <span className="bg-gradient-to-r from-[#38BDF8] via-[#7DD3FC] to-[#818CF8] bg-clip-text text-transparent">
                Make an Impact.
              </span>
            </motion.h1>

            {/* Name & Professional Title */}
            <motion.div variants={HERO_ITEM} className="mt-6 space-y-1.5">
              <p className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                {PROFILE.name}
              </p>
              <p className="text-sm font-medium text-[#38BDF8] sm:text-base">
                {PROFILE.title}
              </p>
            </motion.div>

            {/* Lead Description */}
            <motion.p
              variants={HERO_ITEM}
              className="mt-5 max-w-2xl text-base leading-relaxed text-[#94A3B8] sm:text-[17px]"
            >
              {PROFILE.heroDescription}
            </motion.p>

            {/* Primary & Secondary Action Group */}
            <motion.div variants={HERO_ITEM} className="mt-8 flex flex-wrap items-center gap-3.5">
              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 rounded-xl bg-[#38BDF8] px-6 py-3.5 text-sm font-semibold text-[#080B14] whitespace-nowrap shrink-0 shadow-[0_0_32px_rgba(56,189,248,0.28)] transition-colors duration-150 hover:bg-[#7DD3FC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] cursor-pointer"
              >
                <span>Let&apos;s Work Together</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#101827]/90 px-6 py-3.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#38BDF8]/50 hover:bg-[#141E30] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] cursor-pointer"
              >
                <span>Explore My Work</span>
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-transparent px-5 py-3.5 text-sm font-medium text-[#94A3B8] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] cursor-pointer"
              >
                <Download className="h-4 w-4 text-[#38BDF8]" aria-hidden="true" />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column: Portrait + Interactive Terminal + Floating Tech Anchors */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col justify-between gap-5 lg:col-span-5"
          >
            {/* Visual Portrait Frame */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101827] shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
            >
              <div className="relative aspect-[4/4] sm:aspect-[4/3] lg:aspect-[4/4] w-full overflow-hidden">
                {!imageError ? (
                  <img
                    src={PROFILE.portraitImage}
                    alt="Saurabh Verma — Software Developer and Freelancer"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#101827] via-[#0B1220] to-[#080B14] p-8 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[#38BDF8]/30 bg-[#38BDF8]/10 font-display text-3xl font-bold text-white">
                      {PROFILE.brandInitials}
                    </div>
                    <p className="mt-4 font-display text-lg font-semibold text-white">
                      {PROFILE.name}
                    </p>
                    <p className="text-sm text-[#94A3B8]">{PROFILE.shortRole}</p>
                  </div>
                )}

                {/* Subtle bottom scrim */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080B14] via-[#080B14]/60 to-transparent"
                />
              </div>

              {/* Floating Tech Icons inside portrait corner */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.06 }}
                className="absolute top-4 right-4 flex items-center gap-2 rounded-xl border border-white/15 bg-[#080B14]/80 px-3 py-2 backdrop-blur-md shadow-lg"
              >
                <Code2 className="h-4 w-4 text-[#38BDF8]" aria-hidden="true" />
                <span className="font-mono text-xs font-medium text-white">React.js</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                whileHover={{ scale: 1.06 }}
                className="absolute top-16 left-4 flex items-center gap-2 rounded-xl border border-white/15 bg-[#080B14]/80 px-3 py-2 backdrop-blur-md shadow-lg"
              >
                <Smartphone className="h-4 w-4 text-[#818CF8]" aria-hidden="true" />
                <span className="font-mono text-xs font-medium text-white">Kotlin</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                whileHover={{ scale: 1.06 }}
                className="absolute bottom-12 right-4 hidden sm:flex items-center gap-2 rounded-xl border border-white/15 bg-[#080B14]/80 px-3 py-2 backdrop-blur-md shadow-lg"
              >
                <Cloud className="h-4 w-4 text-[#7DD3FC]" aria-hidden="true" />
                <span className="font-mono text-xs font-medium text-white">AWS · AI</span>
              </motion.div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-xs text-[#94A3B8]">
                  <span className="inline-flex items-center gap-1.5 text-white/90">
                    <Layers className="h-3.5 w-3.5 text-[#38BDF8]" aria-hidden="true" />
                    Full Stack
                  </span>
                  <span aria-hidden="true" className="text-white/25">
                    ·
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-white/90">
                    <Cpu className="h-3.5 w-3.5 text-[#818CF8]" aria-hidden="true" />
                    Android &amp; SEO
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Interactive Terminal / Code Snippet Card with Animated Tab Switch */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#101827]/90 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-2.5">
                <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                  <Terminal className="h-3.5 w-3.5 text-[#38BDF8]" aria-hidden="true" />
                  <span className="font-mono">{CODE_TABS[activeTab].filename}</span>
                </div>
                <div className="flex items-center gap-1 rounded-lg bg-[#080B14]/80 p-0.5">
                  <button
                    type="button"
                    onClick={() => setActiveTab('profile')}
                    className={`rounded-md px-2.5 py-1 font-mono text-[11px] transition-colors cursor-pointer ${
                      activeTab === 'profile'
                        ? 'bg-[#1E293B] text-[#38BDF8]'
                        : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    profile
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('workflow')}
                    className={`rounded-md px-2.5 py-1 font-mono text-[11px] transition-colors cursor-pointer ${
                      activeTab === 'workflow'
                        ? 'bg-[#1E293B] text-[#38BDF8]'
                        : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    workflow
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.pre
                  key={activeTab}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="overflow-x-auto p-4 font-mono text-[12px] leading-relaxed text-[#E2E8F0]"
                >
                  <code>
                    {CODE_TABS[activeTab].lines.map((line, i) => (
                      <motion.div
                        key={line}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: i * 0.03 }}
                        className="flex gap-3"
                      >
                        <span className="select-none text-[#94A3B8]/40 tabular-nums">
                          {i + 1}
                        </span>
                        <span>{line}</span>
                      </motion.div>
                    ))}
                  </code>
                </motion.pre>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Skills Marquee Strip */}
      <div
        aria-label="Core Technologies Marquee"
        className="group/marquee relative border-t border-white/[0.07] bg-[#0B101D]/90 py-4 backdrop-blur-sm"
      >
        {/* Left & Right Smooth Fade Masks */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28 bg-gradient-to-r from-[#080B14] to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28 bg-gradient-to-l from-[#080B14] to-transparent"
        />

        <div className="flex overflow-hidden select-none">
          <div className="animate-hero-marquee flex w-max shrink-0 items-center">
            {[...MARQUEE_SKILLS, ...MARQUEE_SKILLS].map((skill, index) => {
              const Icon = skill.icon;
              return (
                <button
                  key={`${skill.name}-${index}`}
                  type="button"
                  onClick={() => scrollToSection('skills')}
                  className="group/item mx-3 inline-flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-[#101827]/75 px-4 py-2 text-left whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#38BDF8]/40 hover:bg-[#141E30] cursor-pointer"
                >
                  <Icon
                    className="h-4 w-4 text-[#38BDF8] transition-transform duration-150 group-hover/item:scale-110"
                    aria-hidden="true"
                  />
                  <span className="font-display text-xs font-semibold text-white">
                    {skill.name}
                  </span>
                  <span aria-hidden="true" className="text-white/20">
                    ·
                  </span>
                  <span className="text-[11px] text-[#94A3B8]">{skill.category}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
