import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Loader() {
  const isDemoRoute =
    typeof window !== 'undefined' &&
    (window.location.pathname.startsWith('/storeflow-demo') ||
      window.location.pathname.startsWith('/enterprise-crm-demo') ||
      window.location.pathname.startsWith('/ironpulse-demo'));
  const [visible, setVisible] = useState(!isDemoRoute);

  useEffect(() => {
    if (isDemoRoute) return;
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 700);
    return () => window.clearTimeout(timer);
  }, [isDemoRoute]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080B14]"
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-5"
          >
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#38BDF8]/30 bg-[#101827] shadow-[0_0_40px_rgba(56,189,248,0.16)]">
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                SV
              </span>
            </div>
            <div className="h-[2px] w-28 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="h-full w-full bg-gradient-to-r from-[#38BDF8] to-[#6366F1]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
