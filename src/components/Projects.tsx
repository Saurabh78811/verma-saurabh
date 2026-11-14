import { AnimatePresence, motion } from 'motion/react';
import {
  AlertTriangle,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Code2,
  Copy,
  Download,
  ExternalLink,
  Eye,
  Github,
  Layers,
  LayoutDashboard,
  Loader2,
  Monitor,
  RefreshCw,
  Smartphone,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { PROFILE } from '../data/portfolioData';
import {
  PROJECT_CATEGORIES,
  PROJECTS_LIST,
  ProjectCategory,
  ProjectItem,
} from '../data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [liveDemoProject, setLiveDemoProject] = useState<ProjectItem | null>(null);
  const [liveDemoTab, setLiveDemoTab] = useState<'frontend' | 'admin'>('frontend');
  const [androidAlertProject, setAndroidAlertProject] = useState<ProjectItem | null>(null);
  const [isAndroidDevice, setIsAndroidDevice] = useState(false);
  const [copiedPlayLink, setCopiedPlayLink] = useState(false);
  const [demoLoading, setDemoLoading] = useState(true);
  const [demoViewport, setDemoViewport] = useState<'desktop' | 'mobile'>('desktop');
  const [iframeKey, setIframeKey] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS_LIST
      : PROJECTS_LIST.filter((p) => p.category === activeCategory);

  useEffect(() => {
    setIsAndroidDevice(/android/i.test(navigator.userAgent));

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setAndroidAlertProject(null);
        setLiveDemoProject(null);
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleAndroidDownloadClick = (project: ProjectItem) => {
    setCopiedPlayLink(false);
    setAndroidAlertProject(project);
  };

  const handleCopyPlayLink = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedPlayLink(true);
      window.setTimeout(() => setCopiedPlayLink(false), 2000);
    } catch {
      setCopiedPlayLink(false);
    }
  };

  const openLiveDemoPopup = (
    project: ProjectItem,
    initialTab: 'frontend' | 'admin' = 'frontend'
  ) => {
    const targetUrl =
      initialTab === 'admin' && project.adminUrl ? project.adminUrl : project.liveUrl;
    if (!targetUrl || targetUrl === '#') {
      setSelectedProject(project);
      return;
    }
    setSelectedProject(null);
    setLiveDemoTab(initialTab);
    setDemoLoading(true);
    setDemoViewport('desktop');
    setIframeKey((k) => k + 1);
    setLiveDemoProject(project);
  };

  return (
    <section
      id="projects"
      className="relative border-b border-white/[0.06] bg-[#0B101D] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header & Category Filter */}
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-medium text-[#38BDF8]">04. Featured Projects</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              Selected Digital Products &amp; Engineering Builds.
            </h2>
          </motion.div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-1.5 rounded-xl border border-white/10 bg-[#101827] p-1"
          >
            {PROJECT_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`relative rounded-lg px-4 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive ? 'text-[#080B14]' : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="projects-filter-pill"
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 rounded-lg bg-[#38BDF8]"
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Showcase Grid */}
        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const hasImgError = failedImages[project.id];

              return (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#101827]/85 transition-all duration-200 hover:-translate-y-1 hover:border-[#38BDF8]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                >
                  <div>
                    {/* Visual Preview Frame */}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="relative block aspect-[4/3] w-full overflow-hidden border-b border-white/[0.08] bg-[#080B14] text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                    >
                      {!hasImgError ? (
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          referrerPolicy="no-referrer"
                          onError={() =>
                            setFailedImages((prev) => ({ ...prev, [project.id]: true }))
                          }
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#101827] to-[#080B14] p-6 text-center">
                          <Layers className="h-10 w-10 text-[#38BDF8]/70" aria-hidden="true" />
                          <span className="mt-3 font-display text-base font-semibold text-white">
                            {project.title}
                          </span>
                        </div>
                      )}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080B14]/70 via-transparent to-transparent opacity-80"
                      />
                      <span className="absolute right-3 bottom-3 inline-flex items-center gap-1 rounded-lg border border-white/15 bg-[#080B14]/85 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <span>Inspect Build</span>
                        <ArrowUpRight className="h-3 w-3 text-[#38BDF8]" aria-hidden="true" />
                      </span>
                    </button>

                    {/* Card Body */}
                    <div className="p-6">
                      <div className="text-xs font-medium text-[#38BDF8]">
                        {project.category}
                      </div>

                      <h3 className="mt-1.5 font-display text-xl font-bold tracking-tight text-white">
                        {project.title}
                      </h3>

                      <p className="mt-2.5 text-sm leading-relaxed text-[#94A3B8]">
                        {project.shortDescription}
                      </p>

                      {/* Clean Unboxed Technology Metadata */}
                      <p className="mt-4 text-xs font-medium leading-relaxed text-[#CBD5E1]">
                        {project.techStack.join(' · ')}
                      </p>
                    </div>
                  </div>

                  {/* Action Footer */}
                  <div className="flex items-center gap-2.5 border-t border-white/[0.08] px-6 py-4">
                    {project.playStoreUrl ? (
                      <button
                        type="button"
                        onClick={() => handleAndroidDownloadClick(project)}
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#38BDF8]/12 border border-[#38BDF8]/30 px-3.5 py-2 text-xs font-semibold text-[#38BDF8] whitespace-nowrap transition-colors hover:bg-[#38BDF8] hover:text-[#080B14] cursor-pointer"
                      >
                        <Download className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Android Download</span>
                      </button>
                    ) : project.adminUrl ? (
                      <>
                        <button
                          type="button"
                          onClick={() => openLiveDemoPopup(project, 'frontend')}
                          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#38BDF8]/12 border border-[#38BDF8]/30 px-3 py-2 text-xs font-semibold text-[#38BDF8] whitespace-nowrap transition-colors hover:bg-[#38BDF8] hover:text-[#080B14] cursor-pointer"
                        >
                          <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Frontend</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => openLiveDemoPopup(project, 'admin')}
                          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-indigo-500/15 border border-indigo-400/35 px-3 py-2 text-xs font-semibold text-indigo-300 whitespace-nowrap transition-colors hover:bg-indigo-500 hover:text-white cursor-pointer"
                        >
                          <LayoutDashboard className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Admin</span>
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => openLiveDemoPopup(project)}
                          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#38BDF8]/12 border border-[#38BDF8]/30 px-3.5 py-2 text-xs font-semibold text-[#38BDF8] whitespace-nowrap transition-colors hover:bg-[#38BDF8] hover:text-[#080B14] cursor-pointer"
                        >
                          <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Live Demo</span>
                        </button>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title} in new tab`}
                            title="Open in new tab"
                            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8] transition-colors hover:bg-[#38BDF8] hover:text-[#080B14]"
                          >
                            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                          </a>
                        )}
                      </>
                    )}

                    <a
                      href={project.githubUrl || PROFILE.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-white whitespace-nowrap transition-colors hover:border-white/30 hover:bg-white/[0.08]"
                    >
                      <Github className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Architecture & Editable Link Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/15 bg-[#0F172A] shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-[#080B14]/85 text-white transition-colors hover:border-[#38BDF8] cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="aspect-[16/10] w-full overflow-hidden border-b border-white/10 bg-[#080B14]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="text-xs font-medium text-[#38BDF8]">
                  {selectedProject.category} · Case Study Overview
                </div>
                <h3
                  id="project-modal-title"
                  className="mt-1.5 font-display text-2xl font-bold text-white"
                >
                  {selectedProject.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#CBD5E1]">
                  {selectedProject.fullDescription}
                </p>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <h4 className="text-xs font-semibold text-white">Key Implementation Highlights</h4>
                  <ul className="mt-3 space-y-2.5">
                    {selectedProject.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-[#94A3B8]">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#38BDF8]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                    <Code2 className="h-4 w-4 text-[#38BDF8]" aria-hidden="true" />
                    <span className="font-medium text-white">
                      {selectedProject.techStack.join(' · ')}
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#080B14]/70 p-4">
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.playStoreUrl && (
                      <button
                        type="button"
                        onClick={() => handleAndroidDownloadClick(selectedProject)}
                        className="inline-flex items-center gap-2 rounded-lg bg-[#38BDF8] px-4 py-2 text-xs font-semibold text-[#080B14] whitespace-nowrap cursor-pointer hover:bg-[#7DD3FC]"
                      >
                        <Download className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Download on Android</span>
                      </button>
                    )}
                    {selectedProject.liveUrl && (
                      <>
                        <button
                          type="button"
                          onClick={() => openLiveDemoPopup(selectedProject, 'frontend')}
                          className="inline-flex items-center gap-2 rounded-lg bg-[#38BDF8] px-4 py-2 text-xs font-semibold text-[#080B14] whitespace-nowrap cursor-pointer hover:bg-[#7DD3FC]"
                        >
                          <Eye className="h-3.5 w-3.5" />
                          <span>{selectedProject.adminUrl ? 'Frontend Demo' : 'Preview Live Demo'}</span>
                        </button>
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-[#38BDF8]/35 bg-[#38BDF8]/10 px-4 py-2 text-xs font-semibold text-[#38BDF8] whitespace-nowrap hover:bg-[#38BDF8]/20"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          <span>{selectedProject.adminUrl ? 'Frontend New Tab' : 'Open in New Tab'}</span>
                        </a>
                      </>
                    )}
                    {selectedProject.adminUrl && (
                      <>
                        <button
                          type="button"
                          onClick={() => openLiveDemoPopup(selectedProject, 'admin')}
                          className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-xs font-semibold text-white whitespace-nowrap cursor-pointer hover:bg-indigo-400"
                        >
                          <LayoutDashboard className="h-3.5 w-3.5" />
                          <span>Admin Demo</span>
                        </button>
                        <a
                          href={selectedProject.adminUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-indigo-400/35 bg-indigo-500/15 px-4 py-2 text-xs font-semibold text-indigo-300 whitespace-nowrap hover:bg-indigo-500/25"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          <span>Admin New Tab</span>
                        </a>
                      </>
                    )}
                    <a
                      href={selectedProject.githubUrl || PROFILE.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-xs font-semibold text-white whitespace-nowrap hover:border-white/30 hover:bg-white/[0.06]"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>{selectedProject.githubUrl ? 'View Repository' : 'GitHub Profile'}</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Live Demo Popup Viewer Modal */}
      <AnimatePresence>
        {liveDemoProject && (() => {
          const activeDemoUrl =
            liveDemoTab === 'admin' && liveDemoProject.adminUrl
              ? liveDemoProject.adminUrl
              : liveDemoProject.liveUrl;

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLiveDemoProject(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-5 backdrop-blur-md"
              role="dialog"
              aria-modal="true"
              aria-labelledby="live-demo-modal-title"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 12 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0B1120] shadow-2xl"
              >
                {/* Browser-style Modal Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-[#0F172A] px-4 py-3 sm:px-5">
                  <div className="min-w-0">
                    <h3
                      id="live-demo-modal-title"
                      className="truncate font-display text-sm font-bold text-white sm:text-base"
                    >
                      {liveDemoProject.title}
                    </h3>
                    <p className="truncate font-mono text-[11px] text-[#38BDF8]">
                      {activeDemoUrl}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    {/* Dual Environment Switcher (Frontend / Admin Panel) */}
                    {liveDemoProject.adminUrl && (
                      <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-[#080B14] p-0.5">
                        <button
                          type="button"
                          onClick={() => {
                            if (liveDemoTab !== 'frontend') {
                              setLiveDemoTab('frontend');
                              setDemoLoading(true);
                              setIframeKey((k) => k + 1);
                            }
                          }}
                          className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-[11px] font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                            liveDemoTab === 'frontend'
                              ? 'bg-[#38BDF8] text-[#080B14]'
                              : 'text-[#94A3B8] hover:text-white'
                          }`}
                        >
                          <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Frontend</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (liveDemoTab !== 'admin') {
                              setLiveDemoTab('admin');
                              setDemoLoading(true);
                              setIframeKey((k) => k + 1);
                            }
                          }}
                          className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-[11px] font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                            liveDemoTab === 'admin'
                              ? 'bg-indigo-500 text-white'
                              : 'text-[#94A3B8] hover:text-white'
                          }`}
                        >
                          <LayoutDashboard className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Admin Panel</span>
                        </button>
                      </div>
                    )}

                    {/* Viewport Toggle (Desktop / Mobile) */}
                    <div className="hidden sm:flex items-center gap-1 rounded-lg border border-white/10 bg-[#080B14] p-0.5">
                      <button
                        type="button"
                        onClick={() => setDemoViewport('desktop')}
                        aria-label="Desktop viewport"
                        className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-[11px] font-semibold transition-colors cursor-pointer ${
                          demoViewport === 'desktop'
                            ? 'bg-[#38BDF8] text-[#080B14]'
                            : 'text-[#94A3B8] hover:text-white'
                        }`}
                      >
                        <Monitor className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Desktop</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setDemoViewport('mobile')}
                        aria-label="Mobile viewport"
                        className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-[11px] font-semibold transition-colors cursor-pointer ${
                          demoViewport === 'mobile'
                            ? 'bg-[#38BDF8] text-[#080B14]'
                            : 'text-[#94A3B8] hover:text-white'
                        }`}
                      >
                        <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Mobile</span>
                      </button>
                    </div>

                    {/* Reload Frame */}
                    <button
                      type="button"
                      onClick={() => {
                        setDemoLoading(true);
                        setIframeKey((k) => k + 1);
                      }}
                      aria-label="Reload live preview"
                      title="Reload preview"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-[#080B14] text-[#94A3B8] transition-colors hover:border-[#38BDF8]/40 hover:text-white cursor-pointer"
                    >
                      <RefreshCw className="h-4 w-4" aria-hidden="true" />
                    </button>

                    {/* Open in New Tab Option */}
                    <a
                      href={activeDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#38BDF8] px-3.5 py-2 text-xs font-semibold text-[#080B14] whitespace-nowrap transition-colors hover:bg-[#7DD3FC]"
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Open in New Tab</span>
                    </a>

                    {/* Close Modal */}
                    <button
                      type="button"
                      onClick={() => setLiveDemoProject(null)}
                      aria-label="Close live demo popup"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-[#080B14] text-white transition-colors hover:border-[#38BDF8] cursor-pointer"
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                {/* Embedded Live Demo Canvas */}
                <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#080B14] p-2 sm:p-4">
                  {demoLoading && (
                    <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#080B14]/85">
                      <Loader2 className="h-7 w-7 animate-spin text-[#38BDF8]" aria-hidden="true" />
                      <p className="text-xs font-medium text-[#94A3B8]">
                        Loading live application preview...
                      </p>
                    </div>
                  )}

                  <div
                    className={`h-full overflow-hidden rounded-xl border border-white/12 bg-white transition-all duration-300 ${
                      demoViewport === 'mobile' ? 'w-full max-w-[390px] shadow-2xl' : 'w-full'
                    }`}
                  >
                    <iframe
                      key={`${liveDemoProject.id}-${liveDemoTab}-${iframeKey}`}
                      src={activeDemoUrl}
                      title={`${liveDemoProject.title} Live Preview`}
                      onLoad={() => setDemoLoading(false)}
                      className="h-full w-full border-0"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                    />
                  </div>
                </div>

                {/* Footer Helper Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 bg-[#0F172A] px-4 py-2.5 text-xs text-[#94A3B8] sm:px-5">
                  <span>
                    Previewing live deployment inside modal. If your browser blocks embedding, use &ldquo;Open in New Tab&rdquo;.
                  </span>
                  <a
                    href={activeDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[#38BDF8] hover:underline"
                  >
                    <span>Launch in New Tab</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* Android-Only Download Alert Dialog */}
      <AnimatePresence>
        {androidAlertProject && androidAlertProject.playStoreUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setAndroidAlertProject(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="android-alert-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/15 bg-[#0F172A] p-6 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setAndroidAlertProject(null)}
                aria-label="Close alert"
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-[#080B14] text-[#94A3B8] transition-colors hover:border-[#38BDF8] hover:text-white cursor-pointer"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>

              <div className="flex items-start gap-3.5 pr-8">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
                    isAndroidDevice
                      ? 'border-[#38BDF8]/35 bg-[#38BDF8]/12 text-[#38BDF8]'
                      : 'border-amber-400/35 bg-amber-400/12 text-amber-300'
                  }`}
                >
                  {isAndroidDevice ? (
                    <Smartphone className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <AlertTriangle className="h-5 w-5" aria-hidden="true" />
                  )}
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-wide text-[#38BDF8]">
                    {isAndroidDevice ? 'Android Device Detected' : 'Android-Only Download Alert'}
                  </p>
                  <h3
                    id="android-alert-title"
                    className="mt-1 font-display text-lg font-bold text-white"
                  >
                    {isAndroidDevice
                      ? `Install ${androidAlertProject.title}`
                      : 'Available Exclusively on Android'}
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#CBD5E1]">
                {isAndroidDevice ? (
                  <>
                    This Android app is available exclusively for Android devices. Tap below to open
                    the official Google Play Store listing and download it directly on your phone.
                  </>
                ) : (
                  <>
                    <strong className="font-semibold text-white">
                      {androidAlertProject.title}
                    </strong>{' '}
                    can only be downloaded and installed on{' '}
                    <strong className="font-semibold text-white">Android devices</strong> via the
                    Google Play Store. Please open this link from an Android phone or tablet.
                  </>
                )}
              </p>

              {/* Play Store URL Display + Copy */}
              <div className="mt-4 flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-[#080B14] px-3.5 py-2.5">
                <span className="truncate font-mono text-[11px] text-[#94A3B8]">
                  {androidAlertProject.playStoreUrl}
                </span>
                <button
                  type="button"
                  onClick={() => handleCopyPlayLink(androidAlertProject.playStoreUrl!)}
                  className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-white/15 bg-white/[0.04] px-2.5 py-1 text-[11px] font-semibold text-white whitespace-nowrap transition-colors hover:border-[#38BDF8]/40 hover:text-[#38BDF8] cursor-pointer"
                >
                  {copiedPlayLink ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-400" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" aria-hidden="true" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setAndroidAlertProject(null)}
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-2.5 text-xs font-semibold text-white whitespace-nowrap transition-colors hover:bg-white/[0.06] cursor-pointer"
                >
                  Close
                </button>

                <a
                  href={androidAlertProject.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#38BDF8] px-4 py-2.5 text-xs font-semibold text-[#080B14] whitespace-nowrap transition-colors hover:bg-[#7DD3FC]"
                >
                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Download on Google Play</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
