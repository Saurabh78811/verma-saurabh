import { AnimatePresence, motion } from 'motion/react';
import {
  Bot,
  Cloud,
  Code2,
  Container,
  Cpu,
  Database,
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
  Wrench,
} from 'lucide-react';
import { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/skills';

function getSkillIcon(name: string) {
  const lower = name.toLowerCase();
  if (lower.includes('cloud') || lower === 'aws') return Cloud;
  if (lower.includes('docker')) return Container;
  if (lower.includes('ci/cd')) return Workflow;
  if (lower.includes('cuda')) return Cpu;
  if (lower.includes('claude')) return Bot;
  if (lower.includes('google ai')) return Sparkles;
  if (lower.includes('python') || lower === 'java') return FileCode2;
  if (lower === 'sql' || lower.includes('mongo') || lower.includes('firebase')) return Database;
  if (lower.includes('react') || lower.includes('javascript') || lower.includes('html')) return Code2;
  if (lower.includes('tailwind') || lower.includes('css')) return Palette;
  if (lower.includes('node') || lower.includes('express') || lower.includes('rest')) return Server;
  if (lower.includes('kotlin') || lower.includes('compose') || lower.includes('xml')) return Smartphone;
  if (lower.includes('git')) return GitBranch;
  if (lower.includes('figma')) return Figma;
  if (lower.includes('vs code')) return FileCode2;
  if (lower.includes('postman')) return Terminal;
  if (lower.includes('shopify')) return ShoppingCart;
  if (lower.includes('wordpress')) return Globe;
  if (lower.includes('seo') || lower.includes('aeo')) return Search;
  if (lower.includes('tools')) return Wrench;
  return Layers;
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const visibleCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  return (
    <section
      id="skills"
      className="relative border-b border-white/[0.06] bg-[#080B14] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-medium text-[#38BDF8]">03. Technical Skills</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              Production Stack Across Web, Cloud, AI &amp; Android.
            </h2>
          </motion.div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter technical skills by category"
            className="flex flex-wrap items-center gap-1.5 rounded-xl border border-white/10 bg-[#101827] p-1"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'all'}
              onClick={() => setSelectedCategory('all')}
              className={`relative rounded-lg px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'text-[#080B14]'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              {selectedCategory === 'all' && (
                <motion.span
                  layoutId="skills-filter-pill"
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 rounded-lg bg-[#38BDF8]"
                />
              )}
              <span className="relative z-10">All Stack</span>
            </button>
            {SKILL_CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`relative rounded-lg px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  selectedCategory === category.id
                    ? 'text-[#080B14]'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                {selectedCategory === category.id && (
                  <motion.span
                    layoutId="skills-filter-pill"
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 rounded-lg bg-[#38BDF8]"
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="space-y-8"
          >
            {visibleCategories.map((category, catIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: catIndex * 0.04 }}
                className="rounded-2xl border border-white/10 bg-[#101827]/60 p-6 sm:p-7"
              >
                <div className="mb-5 flex flex-col justify-between gap-2 border-b border-white/[0.08] pb-4 sm:flex-row sm:items-center">
                  <h3 className="font-display text-lg font-bold text-white">{category.label}</h3>
                  <p className="text-xs text-[#94A3B8]">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {category.items.map((skill, skillIdx) => {
                    const Icon = getSkillIcon(skill.name);
                    return (
                      <motion.div
                        key={`${category.id}-${skill.name}`}
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        whileHover={{ y: -3, scale: 1.01 }}
                        transition={{
                          duration: 0.25,
                          delay: Math.min(skillIdx * 0.025, 0.2),
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="group flex items-center gap-3.5 rounded-xl border border-white/[0.08] bg-[#080B14]/70 px-4 py-3.5 transition-colors duration-150 hover:border-[#38BDF8]/40 hover:bg-[#141E30]"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] transition-all duration-150 group-hover:scale-105 group-hover:rotate-3 group-hover:bg-[#38BDF8] group-hover:text-[#080B14]">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <div className="truncate text-sm font-semibold text-white">
                            {skill.name}
                          </div>
                          <div className="truncate text-xs text-[#94A3B8]">{skill.role}</div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
