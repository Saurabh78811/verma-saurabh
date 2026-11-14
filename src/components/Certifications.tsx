import { AnimatePresence, motion } from 'motion/react';
import {
  Award,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Eye,
  FileBadge2,
  Printer,
  ShieldCheck,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  CERTIFICATION_CATEGORIES,
  CERTIFICATIONS_LIST,
  CertificationCategory,
  CertificationItem,
} from '../data/certifications';
import { PROFILE } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState<CertificationCategory>('All');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredCerts =
    selectedCategory === 'All'
      ? CERTIFICATIONS_LIST
      : CERTIFICATIONS_LIST.filter((cert) => cert.category === selectedCategory);

  const showFeaturedSpotlight = selectedCategory === 'All' && filteredCerts.length > 1;
  const featuredCert = showFeaturedSpotlight ? filteredCerts[0] : null;
  const galleryCerts = showFeaturedSpotlight ? filteredCerts.slice(1) : filteredCerts;

  const selectedCert: CertificationItem | null =
    activeIndex !== null ? filteredCerts[activeIndex] ?? null : null;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null || filteredCerts.length === 0) return;
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredCerts.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredCerts.length) % filteredCerts.length
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, filteredCerts.length]);

  const handleCategoryChange = (cat: CertificationCategory) => {
    setActiveIndex(null);
    setSelectedCategory(cat);
  };

  const getCategoryCount = (cat: CertificationCategory) =>
    cat === 'All'
      ? CERTIFICATIONS_LIST.length
      : CERTIFICATIONS_LIST.filter((c) => c.category === cat).length;

  const galleryGridCols =
    galleryCerts.length === 1
      ? 'grid-cols-1 max-w-xl'
      : galleryCerts.length === 2
        ? 'grid-cols-1 md:grid-cols-2'
        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <section
      id="certifications"
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#080B14] py-20 sm:py-24"
    >
      {/* Subtle architectural background depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-architectural-grid opacity-30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#38BDF8]/[0.08] via-[#6366F1]/[0.05] to-transparent blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Header + Inline Credential Metrics */}
        <div className="mb-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-medium text-[#38BDF8]">05. Certifications</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              Verified Credentials &amp; Internship Certificates.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
              Industry internships, security training, and specialized engineering credentials—click
              any document to inspect signatures, IDs, and verification details.
            </p>
          </motion.div>

          {/* Clean Hairline Credential Summary Strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="flex flex-wrap items-center gap-6 border-t border-white/10 pt-4 lg:border-t-0 lg:pt-0"
          >
            <div>
              <div className="font-display text-2xl font-bold text-white tabular-nums">
                {CERTIFICATIONS_LIST.length}
              </div>
              <div className="text-xs text-[#94A3B8]">Verified Certificates</div>
            </div>
            <div aria-hidden="true" className="h-9 w-px bg-white/10" />
            <div>
              <div className="font-display text-2xl font-bold text-[#38BDF8] tabular-nums">
                {CERTIFICATION_CATEGORIES.length - 1}
              </div>
              <div className="text-xs text-[#94A3B8]">Skill Domains</div>
            </div>
            <div aria-hidden="true" className="hidden h-9 w-px bg-white/10 sm:block" />
            <div className="hidden sm:block">
              <div className="font-display text-sm font-bold text-white">
                HCLTech · IBM · DUCAT
              </div>
              <div className="text-xs text-[#94A3B8]">Recognized Issuers</div>
            </div>
          </motion.div>
        </div>

        {/* Interactive Category Filter Controls with Counts */}
        <div
          role="tablist"
          aria-label="Filter certifications by category"
          className="mb-10 flex flex-wrap items-center gap-1.5 rounded-xl border border-white/10 bg-[#101827]/90 p-1 w-fit backdrop-blur-sm"
        >
          {CERTIFICATION_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            const count = getCategoryCount(category);
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleCategoryChange(category)}
                className={`relative inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  isActive ? 'text-[#080B14]' : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="certs-filter-pill"
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 rounded-lg bg-[#38BDF8]"
                  />
                )}
                <span className="relative z-10">{category}</span>
                <span
                  className={`relative z-10 font-mono text-[10px] ${
                    isActive ? 'text-[#080B14]/75' : 'text-[#64748B]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Flagship Credential Spotlight (All view) */}
        {featuredCert && (
          <SpotlightCard
            spotlightColor="rgba(56, 189, 248, 0.16)"
            className="mb-8 rounded-2xl border border-[#38BDF8]/25 bg-gradient-to-br from-[#101827] via-[#0D1424] to-[#0A101D] shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
          >
            <div className="grid grid-cols-1 items-center gap-6 p-5 sm:p-7 lg:grid-cols-12 lg:gap-8">
              {/* Framed Archival Certificate Preview */}
              <button
                type="button"
                onClick={() => setActiveIndex(0)}
                aria-label={`Inspect ${featuredCert.title}`}
                className="group/doc relative overflow-hidden rounded-xl border border-white/15 bg-[#060911] p-3 text-left lg:col-span-5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              >
                {/* Corner Framing Hairlines */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-2 left-2 h-3 w-3 border-t border-l border-[#38BDF8]/50"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-2 right-2 h-3 w-3 border-t border-r border-[#38BDF8]/50"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-2 left-2 h-3 w-3 border-b border-l border-[#38BDF8]/50"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b border-r border-[#38BDF8]/50"
                />

                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-lg bg-[#080B14]">
                  {featuredCert.certificateImage && !failedImages[featuredCert.id] ? (
                    <img
                      src={featuredCert.certificateImage}
                      alt={`${featuredCert.title} — ${featuredCert.issuer}`}
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [featuredCert.id]: true }))
                      }
                      className="h-full w-full object-contain transition-transform duration-500 group-hover/doc:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Award className="h-12 w-12 text-[#38BDF8]/70" aria-hidden="true" />
                    </div>
                  )}
                </div>
              </button>

              {/* Editorial Credential Details */}
              <div className="flex flex-col justify-between lg:col-span-7">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="inline-flex items-center gap-1.5 font-semibold text-[#38BDF8]">
                      <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                      <span>Flagship Credential · {featuredCert.category}</span>
                    </span>
                    <span aria-hidden="true" className="text-white/20">
                      ·
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-[#94A3B8] tabular-nums">
                      <Calendar className="h-3.5 w-3.5 text-[#64748B]" aria-hidden="true" />
                      <span>{featuredCert.issueDate}</span>
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {featuredCert.title}
                  </h3>

                  <p className="mt-1.5 text-sm font-medium text-[#CBD5E1]">
                    {featuredCert.issuer}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[#94A3B8]">
                    {featuredCert.summary}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <div className="space-y-1">
                    <p className="font-mono text-[11px] text-[#94A3B8]">
                      ID: <span className="text-white">{featuredCert.credentialId}</span>
                    </p>
                    <p className="text-xs font-medium text-[#CBD5E1]">
                      {featuredCert.skillsCovered.join(' · ')}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveIndex(0)}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#38BDF8] px-4 py-2.5 text-xs font-semibold text-[#080B14] whitespace-nowrap shrink-0 transition-colors hover:bg-[#7DD3FC] cursor-pointer"
                  >
                    <Eye className="h-4 w-4" aria-hidden="true" />
                    <span>Inspect Certificate</span>
                  </button>
                </div>
              </div>
            </div>
          </SpotlightCard>
        )}

        {/* Museum-Framed Credentials Gallery */}
        <motion.div layout className={`grid gap-6 ${galleryGridCols}`}>
          <AnimatePresence mode="popLayout">
            {galleryCerts.map((cert) => {
              const globalIndex = filteredCerts.findIndex((c) => c.id === cert.id);
              const imgFailed = failedImages[cert.id];

              return (
                <motion.div
                  layout
                  key={cert.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <SpotlightCard className="h-full rounded-2xl border border-white/10 bg-[#101827]/85 transition-colors duration-200 hover:border-[#38BDF8]/40 hover:shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
                    <div>
                      {/* Archival Framed Certificate Mat */}
                      <button
                        type="button"
                        onClick={() => setActiveIndex(globalIndex)}
                        aria-label={`View ${cert.title} certificate`}
                        className="group/frame relative block w-full border-b border-white/[0.08] bg-[#070A12] p-3 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                      >
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-white/10 bg-[#0B101D]">
                          {cert.certificateImage && !imgFailed ? (
                            <img
                              src={cert.certificateImage}
                              alt={`${cert.title} — ${cert.issuer}`}
                              referrerPolicy="no-referrer"
                              onError={() =>
                                setFailedImages((prev) => ({ ...prev, [cert.id]: true }))
                              }
                              className="h-full w-full object-contain p-1 transition-transform duration-500 group-hover/frame:scale-[1.03]"
                            />
                          ) : (
                            <div className="flex h-full w-full flex-col items-center justify-center bg-[#0B101D] p-6 text-center">
                              <Award className="h-10 w-10 text-[#38BDF8]/70" aria-hidden="true" />
                              <span className="mt-2 font-display text-sm font-semibold text-white">
                                {cert.title}
                              </span>
                            </div>
                          )}

                          <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080B14]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/frame:opacity-100"
                          />

                          <span className="absolute right-2.5 bottom-2.5 inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-[#080B14]/90 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md transition-all duration-200 group-hover/frame:border-[#38BDF8]/50 group-hover/frame:text-[#38BDF8]">
                            <Eye className="h-3 w-3 text-[#38BDF8]" aria-hidden="true" />
                            <span>Inspect</span>
                          </span>
                        </div>
                      </button>

                      {/* Card Body */}
                      <div className="p-5 sm:p-6">
                        <div className="flex items-center justify-between gap-2 text-xs">
                          <span className="inline-flex items-center gap-1 font-medium text-[#38BDF8]">
                            <FileBadge2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            <span>{cert.category}</span>
                          </span>
                          <span className="font-mono text-[11px] text-[#94A3B8] tabular-nums">
                            {cert.issueDate}
                          </span>
                        </div>

                        <h3 className="mt-2.5 font-display text-lg font-bold tracking-tight text-white">
                          {cert.title}
                        </h3>

                        <p className="mt-1 text-xs font-medium text-[#CBD5E1]">{cert.issuer}</p>

                        <p className="mt-2.5 text-sm leading-relaxed text-[#94A3B8]">
                          {cert.summary}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="flex items-center justify-between gap-3 border-t border-white/[0.08] px-5 py-4 sm:px-6">
                      <div className="min-w-0">
                        <p className="truncate font-mono text-[11px] text-[#64748B]">
                          {cert.credentialId}
                        </p>
                        <p className="mt-0.5 truncate text-xs font-medium text-[#CBD5E1]">
                          {cert.skillsCovered.join(' · ')}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveIndex(globalIndex)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[#38BDF8]/35 bg-[#38BDF8]/10 px-3.5 py-2 text-xs font-semibold text-[#38BDF8] whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-[#38BDF8] hover:text-[#080B14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] cursor-pointer"
                      >
                        <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>View</span>
                      </button>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Certification Lightbox Popup Modal */}
      <AnimatePresence>
        {selectedCert && activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-5 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-popup-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/15 bg-[#0F172A] p-5 sm:p-7 shadow-2xl"
            >
              {/* Modal Top Toolbar */}
              <div className="mb-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 text-sm font-medium text-white min-w-0">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-[#38BDF8]" aria-hidden="true" />
                  <span id="cert-popup-title" className="truncate font-display font-bold">
                    {selectedCert.title}
                  </span>
                  <span className="shrink-0 font-mono text-xs text-[#94A3B8] tabular-nums">
                    ({activeIndex + 1} / {filteredCerts.length})
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(
                        (activeIndex - 1 + filteredCerts.length) % filteredCerts.length
                      )
                    }
                    aria-label="Previous certificate"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-[#080B14] text-[#94A3B8] transition-colors hover:border-[#38BDF8]/40 hover:text-white cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((activeIndex + 1) % filteredCerts.length)
                    }
                    aria-label="Next certificate"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-[#080B14] text-[#94A3B8] transition-colors hover:border-[#38BDF8]/40 hover:text-white cursor-pointer"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(null)}
                    aria-label="Close certificate popup"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-[#080B14] text-white transition-colors hover:border-[#38BDF8] cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Printable Certificate Content */}
              <div id="printable-certificate">
                {/* Full Certificate Image Viewer */}
                {selectedCert.certificateImage && !failedImages[selectedCert.id] ? (
                  <div className="flex items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-[#060911] p-2 sm:p-4">
                    <img
                      src={selectedCert.certificateImage}
                      alt={`${selectedCert.title} — ${selectedCert.issuer}`}
                      referrerPolicy="no-referrer"
                      className="max-h-[58vh] w-auto rounded-lg object-contain"
                    />
                  </div>
                ) : (
                  <div className="relative overflow-hidden rounded-xl border border-[#38BDF8]/30 bg-gradient-to-br from-[#0B1221] via-[#0F172A] to-[#080B14] p-7 sm:p-10 shadow-inner">
                    <div className="space-y-3 py-2">
                      <p className="text-xs font-semibold tracking-wider text-[#38BDF8]">
                        CERTIFICATE OF COMPLETION
                      </p>
                      <h3 className="font-display text-2xl font-extrabold text-white">
                        {PROFILE.name}
                      </h3>
                      <h4 className="font-display text-xl font-bold text-[#7DD3FC]">
                        {selectedCert.title}
                      </h4>
                      <p className="text-sm text-[#CBD5E1]">{selectedCert.summary}</p>
                    </div>
                  </div>
                )}

                {/* Credential Metadata Details Strip */}
                <div className="mt-4 grid grid-cols-1 gap-4 rounded-xl border border-white/10 bg-[#080B14]/70 p-4 sm:grid-cols-3">
                  <div>
                    <p className="text-[11px] text-[#94A3B8]">Issuing Organization</p>
                    <p className="mt-1 text-xs font-semibold text-white">{selectedCert.issuer}</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-[#94A3B8]">Issue Date &amp; Credential ID</p>
                    <p className="mt-1 font-mono text-xs font-semibold text-white tabular-nums">
                      {selectedCert.issueDate} · {selectedCert.credentialId}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-[#94A3B8]">Skills Validated</p>
                    <p className="mt-1 text-xs font-medium text-[#CBD5E1]">
                      {selectedCert.skillsCovered.join(' · ')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Filmstrip Thumbnail Selector */}
              {filteredCerts.length > 1 && (
                <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1">
                  {filteredCerts.map((item, thumbIdx) => {
                    const isCurrent = thumbIdx === activeIndex;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveIndex(thumbIdx)}
                        aria-label={`Jump to ${item.title}`}
                        className={`relative h-12 w-18 shrink-0 overflow-hidden rounded-lg border bg-[#060911] p-0.5 transition-all cursor-pointer ${
                          isCurrent
                            ? 'border-[#38BDF8] ring-2 ring-[#38BDF8]/40'
                            : 'border-white/10 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={item.certificateImage}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="h-full w-full rounded object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Modal Footer Actions */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-[#94A3B8]">
                  Use left/right arrows or Esc key to navigate credentials.
                </p>

                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:border-white/30 cursor-pointer"
                  >
                    <Printer className="h-3.5 w-3.5 text-[#38BDF8]" aria-hidden="true" />
                    <span>Print View</span>
                  </button>

                  {selectedCert.verifyUrl ? (
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#38BDF8] px-4 py-2 text-xs font-semibold text-[#080B14]"
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Verify Credential</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveIndex(null)}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#38BDF8] px-4 py-2 text-xs font-semibold text-[#080B14] cursor-pointer"
                    >
                      <span>Close Preview</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
