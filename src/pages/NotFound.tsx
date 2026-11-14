import { motion } from 'motion/react';
import { ArrowLeft, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROFILE } from '../data/portfolioData';

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#080B14] px-6 text-center text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-architectural-grid opacity-50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#38BDF8]/[0.1] blur-[140px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-md rounded-2xl border border-white/10 bg-[#101827]/85 p-8 sm:p-10 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8]">
          <Compass className="h-7 w-7" aria-hidden="true" />
        </div>

        <p className="mt-6 font-mono text-sm font-semibold text-[#38BDF8] tabular-nums">
          404 · Page Not Found
        </p>

        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-white">
          This route doesn&apos;t exist.
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
          The page you are looking for may have moved or been removed. Return to {PROFILE.name}&apos;s portfolio to explore projects, certifications, and services.
        </p>

        <Link
          to="/"
          className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-[#38BDF8] px-6 py-3 text-sm font-semibold text-[#080B14] transition-colors hover:bg-[#7DD3FC]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Back to Portfolio</span>
        </Link>
      </motion.div>
    </div>
  );
}
