import { AnimatePresence, motion } from 'motion/react';
import {
  Check,
  Code2,
  Download,
  FileText,
  Printer,
  Smartphone,
  TrendingUp,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { CERTIFICATIONS_LIST } from '../data/certifications';
import { EXPERIENCE_LIST, PROFILE } from '../data/portfolioData';
import { PROJECTS_LIST } from '../data/projects';
import { SKILL_CATEGORIES } from '../data/skills';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

type ResumeTypeId = 'fullstack' | 'android' | 'seo';

interface ResumeTrack {
  id: ResumeTypeId;
  label: string;
  badge: string;
  tagline: string;
  headline: string;
  summary: string;
  fileName: string;
  icon: typeof Code2;
  accentText: string;
  accentBorder: string;
  accentBg: string;
  experienceIds: string[];
  projectIds: string[];
  skillCategoryIds: string[];
  certificationIds: string[];
}

const RESUME_TRACKS: ResumeTrack[] = [
  {
    id: 'fullstack',
    label: 'Full Stack Developer',
    badge: 'Web & MERN',
    tagline: 'React.js · Node.js · MongoDB · LMS / CRM',
    headline: 'Full Stack Web Developer | MERN Stack & React.js Engineer',
    summary:
      'Passionate and results-driven Full Stack Developer with hands-on experience in building responsive, user-friendly, and scalable web applications. Skilled in React.js, JavaScript, Tailwind CSS, Node.js, Express.js, MongoDB, and REST APIs. Experienced in developing frontend interfaces, backend services, database integration, user authentication, and API management. Familiar with Git, GitHub, Firebase, and modern development tools. Strong problem-solving abilities with a focus on clean code, performance optimization, and delivering high-quality digital solutions. Eager to learn new technologies and contribute to innovative software development projects.',
    fileName: 'Saurabh_Verma_Full_Stack_Resume.txt',
    icon: Code2,
    accentText: 'text-[#38BDF8]',
    accentBorder: 'border-[#38BDF8]',
    accentBg: 'bg-[#38BDF8]/12',
    experienceIds: ['appmingle', 'freelance-developer'],
    projectIds: [
      'lms-learning-platform',
      'crm-lead-management',
      'store-crm-platform',
      'freshmart-ecommerce-admin',
      'doctor-appointment-booking',
      'aquadrop-water-store',
      'foodie-frenzy',
      'ironpulse-gym-platform',
    ],
    skillCategoryIds: ['frontend', 'backend', 'cloud', 'tools'],
    certificationIds: [
      'cert-hcltech-mern',
      'cert-ten-mern',
      'cert-oasis-web',
      'cert-ibm-ml-python',
      'cert-cch-ethical-hacking',
      'cert-mindluster-js-es6',
    ],
  },
  {
    id: 'android',
    label: 'Android Developer',
    badge: 'Mobile & Kotlin',
    tagline: 'Kotlin · Jetpack Compose · Maps & GPS · Firebase',
    headline: 'Native Android App Developer | Kotlin, Maps SDK & Firebase',
    summary:
      'Passionate Android Developer with hands-on experience in developing user-friendly, responsive, and efficient Android applications. Skilled in Kotlin, Android Studio, XML, Jetpack Compose, Firebase, and Material Design 3. Familiar with implementing Firebase Authentication, MVVM architecture, Room Database, SQLite, and Android Navigation Components. Strong understanding of mobile application development, UI design, debugging, and performance optimization. Dedicated to building high-quality Android applications while continuously learning modern technologies and development practices.',
    fileName: 'Saurabh_Verma_Android_Developer_Resume.txt',
    icon: Smartphone,
    accentText: 'text-indigo-300',
    accentBorder: 'border-indigo-400',
    accentBg: 'bg-indigo-500/15',
    experienceIds: ['freelance-developer', 'appmingle'],
    projectIds: [
      'uber-clone-android',
      'tic-tac-toe-android',
      'doctor-appointment-booking',
      'ironpulse-gym-platform',
    ],
    skillCategoryIds: ['android', 'backend', 'cloud', 'tools'],
    certificationIds: [
      'cert-oasis-android',
      'cert-ducat-android',
      'cert-hcltech-mern',
      'cert-cch-ethical-hacking',
    ],
  },
  {
    id: 'seo',
    label: 'SEO & Growth Specialist',
    badge: 'SERP & Traffic',
    tagline: 'Black Hat SEO · SERP Strategy · AEO · CMS',
    headline: 'SEO Specialist & Growth Strategist | Competitive SERP & AEO',
    summary:
      'Results-driven SEO Specialist with hands-on experience in improving website visibility, organic traffic, and search engine rankings. Skilled in On-Page SEO, Off-Page SEO, Technical SEO, Keyword Research, Competitor Analysis, Content Optimization, Link Building, and Local SEO. Familiar with Google Search Console, Google Analytics, WordPress, and SEO optimization tools. Knowledge of Answer Engine Optimization (AEO) and strategies for improving content visibility across search engines and AI-powered search platforms. Focused on implementing effective SEO strategies, analyzing website performance, and driving organic growth.',
    fileName: 'Saurabh_Verma_SEO_Growth_Resume.txt',
    icon: TrendingUp,
    accentText: 'text-emerald-300',
    accentBorder: 'border-emerald-400',
    accentBg: 'bg-emerald-500/15',
    experienceIds: ['starlux-travel', 'welatino', 'freelance-developer'],
    projectIds: [
      'lms-learning-platform',
      'aquadrop-water-store',
      'freshmart-ecommerce-admin',
      'store-crm-platform',
    ],
    skillCategoryIds: ['other', 'frontend', 'tools'],
    certificationIds: [
      'cert-welatino-internship',
      'cert-oasis-web',
      'cert-mindluster-css-animation',
      'cert-cch-ethical-hacking',
    ],
  },
];

export default function ResumeModal({ open, onClose }: ResumeModalProps) {
  const [selectedType, setSelectedType] = useState<ResumeTypeId>('fullstack');

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose();
    };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [open, onClose]);

  const activeTrack =
    RESUME_TRACKS.find((track) => track.id === selectedType) ?? RESUME_TRACKS[0];

  const curatedExperiences = EXPERIENCE_LIST.filter((exp) =>
    activeTrack.experienceIds.includes(exp.id)
  );
  const curatedProjects = PROJECTS_LIST.filter((proj) =>
    activeTrack.projectIds.includes(proj.id)
  );
  const curatedSkills = SKILL_CATEGORIES.filter((cat) =>
    activeTrack.skillCategoryIds.includes(cat.id)
  );
  const curatedCertifications = CERTIFICATIONS_LIST.filter((cert) =>
    activeTrack.certificationIds.includes(cert.id)
  );

  const handleDownloadResume = (track: ResumeTrack = activeTrack) => {
    const expList = EXPERIENCE_LIST.filter((exp) => track.experienceIds.includes(exp.id));
    const projList = PROJECTS_LIST.filter((proj) => track.projectIds.includes(proj.id));
    const skillList = SKILL_CATEGORIES.filter((cat) =>
      track.skillCategoryIds.includes(cat.id)
    );
    const certList = CERTIFICATIONS_LIST.filter((cert) =>
      track.certificationIds.includes(cert.id)
    );

    const resumeText = [
      `${PROFILE.name} — ${track.label}`,
      `${track.headline}`,
      `Email: ${PROFILE.contact.email} | WhatsApp: ${PROFILE.contact.whatsappDisplay}`,
      `GitHub: ${PROFILE.contact.github} | Location: ${PROFILE.location}`,
      '',
      'PROFESSIONAL SUMMARY',
      track.summary,
      '',
      'EXPERIENCE',
      ...expList.map(
        (exp) =>
          `- ${exp.role} | ${exp.organization} (${exp.duration})\n  ${exp.summary}\n  ${exp.responsibilities.join(' ')}`
      ),
      '',
      'KEY PROJECTS',
      ...projList.map(
        (proj) => `- ${proj.title} [${proj.techStack.join(', ')}]: ${proj.shortDescription}`
      ),
      '',
      'TECHNICAL SKILLS',
      ...skillList.map(
        (cat) => `- ${cat.label}: ${cat.items.map((i) => i.name).join(', ')}`
      ),
      '',
      'CERTIFICATIONS',
      ...certList.map(
        (cert) => `- ${cert.title} (${cert.issuer}, ${cert.issueDate}) [${cert.credentialId}]`
      ),
    ].join('\n');

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = track.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/15 bg-[#0F172A] p-5 sm:p-8 shadow-2xl"
          >
            {/* Header Bar */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8]">
                  <FileText className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 id="resume-modal-title" className="font-display text-lg font-bold text-white">
                    Choose Resume Format — {PROFILE.name}
                  </h2>
                  <p className="text-xs text-[#94A3B8]">
                    Select from 3 role-tailored resumes to preview, save as PDF, or download.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close resume modal"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-[#080B14] text-white transition-colors hover:border-[#38BDF8] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* 3 Resume Type Selector Cards */}
            <div className="mb-6 grid grid-cols-1 gap-3.5 md:grid-cols-3">
              {RESUME_TRACKS.map((track, idx) => {
                const Icon = track.icon;
                const isSelected = track.id === selectedType;
                return (
                  <div
                    key={track.id}
                    onClick={() => setSelectedType(track.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedType(track.id);
                      }
                    }}
                    className={`group relative flex flex-col justify-between rounded-xl border p-4 text-left transition-all cursor-pointer ${
                      isSelected
                        ? `${track.accentBorder} bg-[#080B14] shadow-[0_0_24px_rgba(56,189,248,0.12)]`
                        : 'border-white/10 bg-[#080B14]/60 hover:border-white/25 hover:bg-[#080B14]/90'
                    }`}
                  >
                    <div>
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 ${track.accentBg} ${track.accentText}`}
                          >
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </div>
                          <span className="font-mono text-[11px] font-semibold text-[#94A3B8]">
                            0{idx + 1} · {track.badge}
                          </span>
                        </div>
                        {isSelected && (
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#38BDF8] text-[#080B14]">
                            <Check className="h-3 w-3 stroke-[3]" aria-hidden="true" />
                          </span>
                        )}
                      </div>

                      <h3 className="font-display text-sm font-bold text-white">
                        {track.label}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-[#94A3B8]">
                        {track.tagline}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center gap-2 border-t border-white/[0.08] pt-3">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedType(track.id);
                          handleDownloadResume(track);
                        }}
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/12 bg-white/[0.04] px-2.5 py-1.5 text-[11px] font-semibold text-white transition-colors hover:border-[#38BDF8]/50 hover:text-[#38BDF8] cursor-pointer"
                      >
                        <Download className="h-3 w-3" aria-hidden="true" />
                        <span>Download</span>
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedType(track.id);
                          window.setTimeout(() => window.print(), 80);
                        }}
                        className="inline-flex items-center justify-center gap-1 rounded-lg bg-[#38BDF8]/15 px-2.5 py-1.5 text-[11px] font-semibold text-[#38BDF8] transition-colors hover:bg-[#38BDF8] hover:text-[#080B14] cursor-pointer"
                        title="Save this resume as PDF"
                      >
                        <Printer className="h-3 w-3" aria-hidden="true" />
                        <span>PDF</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active Resume Action Bar */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#080B14]/70 px-4 py-3">
              <div className="text-xs text-[#CBD5E1]">
                Previewing:{' '}
                <span className="font-semibold text-white">{activeTrack.label} Resume</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#38BDF8] px-3.5 py-2 text-xs font-semibold text-[#080B14] hover:bg-[#7DD3FC] cursor-pointer"
                >
                  <Printer className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Save as PDF</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleDownloadResume(activeTrack)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-white hover:border-white/30 cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5 text-[#38BDF8]" aria-hidden="true" />
                  <span>Download (.txt)</span>
                </button>
              </div>
            </div>

            {/* Printable Resume Sheet */}
            <div
              id="printable-resume"
              className="space-y-6 rounded-xl border border-white/10 bg-[#080B14] p-6 sm:p-8 text-sm text-[#CBD5E1] print:text-slate-800"
            >
              <div className="border-b border-white/10 pb-5 print:border-slate-300">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl font-extrabold text-white print:text-slate-950">
                    {PROFILE.name}
                  </h3>
                  <span className="font-mono text-[11px] font-semibold text-[#38BDF8] print:text-slate-700">
                    {activeTrack.label}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-[#38BDF8] print:text-slate-700">
                  {activeTrack.headline}
                </p>
                <p className="mt-2 text-xs text-[#94A3B8] print:text-slate-600">
                  {PROFILE.contact.email} · {PROFILE.contact.whatsappDisplay} · github.com/Saurabh78811 ·{' '}
                  {PROFILE.location}
                </p>
              </div>

              <div>
                <h4 className="font-display text-xs font-bold tracking-wider text-white print:text-slate-950">
                  PROFESSIONAL SUMMARY
                </h4>
                <p className="mt-2 leading-relaxed">{activeTrack.summary}</p>
              </div>

              <div>
                <h4 className="font-display text-xs font-bold tracking-wider text-white print:text-slate-950">
                  RELEVANT EXPERIENCE
                </h4>
                <div className="mt-3 space-y-4">
                  {curatedExperiences.map((exp) => (
                    <div key={exp.id}>
                      <div className="flex flex-wrap justify-between gap-2 font-semibold text-white print:text-slate-950">
                        <span>
                          {exp.role} — {exp.organization}
                        </span>
                        <span className="text-xs font-normal text-[#94A3B8] print:text-slate-600">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-[#94A3B8] print:text-slate-600">
                        {exp.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-display text-xs font-bold tracking-wider text-white print:text-slate-950">
                  FEATURED PROJECTS
                </h4>
                <div className="mt-2.5 space-y-2">
                  {curatedProjects.map((proj) => (
                    <div key={proj.id} className="text-xs leading-relaxed">
                      <span className="font-semibold text-white print:text-slate-950">
                        {proj.title}:
                      </span>{' '}
                      <span className="text-[#94A3B8] print:text-slate-600">
                        {proj.shortDescription} ({proj.techStack.join(', ')})
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-display text-xs font-bold tracking-wider text-white print:text-slate-950">
                  CORE TECHNICAL SKILLS
                </h4>
                <div className="mt-2.5 space-y-1.5 text-xs">
                  {curatedSkills.map((cat) => (
                    <div key={cat.id}>
                      <span className="font-semibold text-white print:text-slate-950">
                        {cat.label}:
                      </span>{' '}
                      <span className="text-[#94A3B8] print:text-slate-600">
                        {cat.items.map((item) => item.name).join(', ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-display text-xs font-bold tracking-wider text-white print:text-slate-950">
                  VERIFIED CERTIFICATIONS
                </h4>
                <div className="mt-2.5 space-y-1.5 text-xs">
                  {curatedCertifications.map((cert) => (
                    <div key={cert.id}>
                      <span className="font-semibold text-white print:text-slate-950">
                        {cert.title}
                      </span>{' '}
                      <span className="text-[#94A3B8] print:text-slate-600">
                        — {cert.issuer} ({cert.issueDate}) · {cert.credentialId}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
