import { motion } from 'motion/react';
import { Globe, Layout, Search, Server, ShoppingBag, Smartphone } from 'lucide-react';
import { SERVICES_LIST, ServiceItem } from '../data/services';
import SpotlightCard from './SpotlightCard';

const ICON_MAP: Record<ServiceItem['iconName'], typeof Globe> = {
  globe: Globe,
  server: Server,
  smartphone: Smartphone,
  layout: Layout,
  'shopping-bag': ShoppingBag,
  search: Search,
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative border-b border-white/[0.06] bg-[#0B101D] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#38BDF8]">02. Services</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              End-to-End Engineering for Web, Mobile &amp; Growth.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#94A3B8]">
            Structured development tailored for startups, growing businesses, and product teams seeking dependable execution.
          </p>
        </motion.div>

        {/* Asymmetric 12-Column Agency Bento Grid with Cursor Spotlight */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {SERVICES_LIST.map((service, idx) => {
            const Icon = ICON_MAP[service.iconName];
            const spanClass = service.featured ? 'lg:col-span-6' : 'lg:col-span-3';

            return (
              <SpotlightCard
                key={service.id}
                delay={idx * 0.05}
                className={`rounded-2xl border border-white/10 bg-[#101827]/80 p-6 sm:p-7 transition-colors duration-200 hover:border-[#38BDF8]/40 hover:shadow-[0_16px_40px_rgba(56,189,248,0.08)] ${spanClass}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#38BDF8]/25 bg-[#38BDF8]/10 text-[#38BDF8] transition-all duration-200 group-hover:scale-105 group-hover:rotate-3 group-hover:bg-[#38BDF8] group-hover:text-[#080B14]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-xs font-medium text-[#94A3B8] tabular-nums">
                      {service.index}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
                    {service.description}
                  </p>
                </div>

                {/* Unboxed typographic deliverables */}
                <div className="mt-6 border-t border-white/[0.08] pt-4">
                  <p className="text-xs font-medium leading-relaxed text-[#CBD5E1]">
                    {service.deliverables.join(' · ')}
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
