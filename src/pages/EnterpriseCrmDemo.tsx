import { useMemo, useState } from 'react';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  Clock,
  DollarSign,
  Kanban,
  Search,
  TrendingUp,
} from 'lucide-react';

type PipelineStage = 'New Lead' | 'Qualified' | 'Proposal' | 'Closed Won';

interface DealItem {
  id: string;
  company: string;
  contact: string;
  value: number;
  stage: PipelineStage;
  owner: string;
  updated: string;
}

const STAGES: PipelineStage[] = ['New Lead', 'Qualified', 'Proposal', 'Closed Won'];

const INITIAL_DEALS: DealItem[] = [
  {
    id: 'd1',
    company: 'Aero Dynamics',
    contact: 'Karan Malhotra',
    value: 50000,
    stage: 'New Lead',
    owner: 'Saurabh V.',
    updated: '18 mins ago',
  },
  {
    id: 'd2',
    company: 'Vertex Cloud Labs',
    contact: 'Ananya Rao',
    value: 35000,
    stage: 'New Lead',
    owner: 'Saurabh V.',
    updated: '1 hr ago',
  },
  {
    id: 'd3',
    company: 'Innovate Solutions',
    contact: 'Rahul Verma',
    value: 120000,
    stage: 'Qualified',
    owner: 'Saurabh V.',
    updated: '2 hrs ago',
  },
  {
    id: 'd4',
    company: 'Aurora Logistics',
    contact: 'Meera Nair',
    value: 70000,
    stage: 'Qualified',
    owner: 'Saurabh V.',
    updated: '4 hrs ago',
  },
  {
    id: 'd5',
    company: 'Nordic FinTech',
    contact: 'Dev Kapoor',
    value: 95000,
    stage: 'Proposal',
    owner: 'Saurabh V.',
    updated: 'Yesterday',
  },
  {
    id: 'd6',
    company: 'Apex HealthTech',
    contact: 'Sonia Patel',
    value: 64000,
    stage: 'Closed Won',
    owner: 'Saurabh V.',
    updated: '2 days ago',
  },
];

const ACTIVITY_LOG = [
  {
    id: 'a1',
    title: 'Proposal sent to Nordic FinTech',
    detail: 'Enterprise annual SLA & custom integration scope',
    time: '18 mins ago',
  },
  {
    id: 'a2',
    title: 'Discovery call completed with Innovate Solutions',
    detail: 'Moved deal to Qualified stage ($120K est.)',
    time: '2 hours ago',
  },
  {
    id: 'a3',
    title: 'Contract signed with Apex HealthTech',
    detail: 'Deal marked Closed Won · Onboarding scheduled',
    time: '2 days ago',
  },
];

const STAGE_ACCENTS: Record<PipelineStage, string> = {
  'New Lead': 'border-slate-500/40 bg-slate-500/15 text-slate-200',
  Qualified: 'border-[#38BDF8]/40 bg-[#38BDF8]/15 text-[#38BDF8]',
  Proposal: 'border-indigo-400/40 bg-indigo-400/15 text-indigo-300',
  'Closed Won': 'border-emerald-400/40 bg-emerald-400/15 text-emerald-300',
};

export default function EnterpriseCrmDemo() {
  const [deals, setDeals] = useState<DealItem[]>(INITIAL_DEALS);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'pipeline' | 'activity'>('pipeline');

  const filteredDeals = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return deals;
    return deals.filter(
      (d) => d.company.toLowerCase().includes(q) || d.contact.toLowerCase().includes(q)
    );
  }, [deals, searchQuery]);

  const metrics = useMemo(() => {
    const totalValue = deals.reduce((sum, d) => sum + d.value, 0);
    const wonCount = deals.filter((d) => d.stage === 'Closed Won').length;
    const winRate = Math.round((wonCount / deals.length) * 100);
    const avgDeal = Math.round(totalValue / deals.length);
    return {
      totalFormatted: `$${(totalValue / 1000).toFixed(0)}K`,
      winRate: `${winRate}%`,
      activeCount: `${deals.length}`,
      avgFormatted: `$${(avgDeal / 1000).toFixed(0)}K`,
    };
  }, [deals]);

  const advanceDealStage = (dealId: string) => {
    setDeals((prev) =>
      prev.map((deal) => {
        if (deal.id !== dealId) return deal;
        const idx = STAGES.indexOf(deal.stage);
        const nextStage = STAGES[(idx + 1) % STAGES.length];
        return { ...deal, stage: nextStage, updated: 'Just now' };
      })
    );
  };

  return (
    <div className="min-h-screen bg-[#080B14] text-slate-100">
      <header className="border-b border-white/10 bg-[#0F172A]/95 px-4 py-3 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#38BDF8]/30 bg-[#38BDF8]/15 text-[#38BDF8]">
              <Briefcase className="h-4 w-4" aria-hidden="true" />
            </div>
            <div>
              <h1 className="font-display text-sm font-bold text-white sm:text-base">
                Enterprise CRM &amp; Lead Pipeline
              </h1>
              <p className="text-[11px] text-[#94A3B8]">
                Kanban Deals Board, Lead Tracking &amp; Sales Analytics
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <div className="relative">
              <Search
                className="pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-[#94A3B8]"
                aria-hidden="true"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search deals..."
                className="rounded-xl border border-white/10 bg-[#080B14] py-1.5 pr-3 pl-8 text-xs text-white placeholder-[#64748B] focus:border-[#38BDF8] focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-[#080B14] p-1">
              <button
                type="button"
                onClick={() => setViewMode('pipeline')}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  viewMode === 'pipeline'
                    ? 'bg-[#38BDF8] text-[#080B14]'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                <Kanban className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Pipeline</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('activity')}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  viewMode === 'activity'
                    ? 'bg-[#38BDF8] text-[#080B14]'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                <Activity className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Timeline</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-6 p-4 sm:p-6">
        {/* Live Pipeline KPIs */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            { label: 'Total Pipeline', value: metrics.totalFormatted, icon: DollarSign },
            { label: 'Win Rate', value: metrics.winRate, icon: TrendingUp },
            { label: 'Active Deals', value: metrics.activeCount, icon: Briefcase },
            { label: 'Avg. Deal Size', value: metrics.avgFormatted, icon: BarChart3 },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-[#0F172A] p-4"
              >
                <div className="flex items-center justify-between text-xs text-[#94A3B8]">
                  <span>{item.label}</span>
                  <Icon className="h-4 w-4 text-[#38BDF8]" aria-hidden="true" />
                </div>
                <div className="mt-2 font-display text-2xl font-bold text-white">
                  {item.value}
                </div>
              </div>
            );
          })}
        </div>

        {viewMode === 'pipeline' ? (
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {STAGES.map((stage) => {
              const stageDeals = filteredDeals.filter((d) => d.stage === stage);
              return (
                <div
                  key={stage}
                  className="flex flex-col rounded-2xl border border-white/10 bg-[#0F172A] p-4"
                >
                  <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2.5">
                    <span
                      className={`inline-flex rounded-md border px-2 py-0.5 text-[11px] font-semibold ${STAGE_ACCENTS[stage]}`}
                    >
                      {stage}
                    </span>
                    <span className="font-mono text-xs text-[#94A3B8]">{stageDeals.length}</span>
                  </div>

                  <div className="space-y-3">
                    {stageDeals.map((deal) => (
                      <div
                        key={deal.id}
                        className="rounded-xl border border-white/10 bg-[#080B14] p-3.5 transition-colors hover:border-[#38BDF8]/40"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-display text-sm font-bold text-white">
                            {deal.company}
                          </h3>
                          <span className="font-mono text-xs font-semibold text-[#38BDF8]">
                            ${(deal.value / 1000).toFixed(0)}K
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-[#94A3B8]">{deal.contact}</p>

                        <div className="mt-3 flex items-center justify-between border-t border-white/[0.06] pt-2.5">
                          <span className="text-[11px] text-[#64748B]">{deal.updated}</span>
                          <button
                            type="button"
                            onClick={() => advanceDealStage(deal.id)}
                            className="inline-flex items-center gap-1 rounded-md border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-2 py-1 text-[11px] font-semibold text-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#080B14] cursor-pointer transition-colors"
                          >
                            <span>Advance</span>
                            <ArrowRight className="h-3 w-3" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    ))}
                    {stageDeals.length === 0 && (
                      <p className="py-6 text-center text-xs text-[#64748B]">No deals in stage</p>
                    )}
                  </div>
                </div>
              );
            })}
          </section>
        ) : (
          <section className="rounded-2xl border border-white/10 bg-[#0F172A] p-5">
            <h2 className="font-display text-lg font-bold text-white">
              Client Activity &amp; Follow-up Timeline
            </h2>
            <div className="mt-4 space-y-3">
              {ACTIVITY_LOG.map((entry) => (
                <div
                  key={entry.id}
                  className="flex items-start justify-between gap-3 rounded-xl border border-white/10 bg-[#080B14] p-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#38BDF8]"
                      aria-hidden="true"
                    />
                    <div>
                      <div className="text-sm font-semibold text-white">{entry.title}</div>
                      <div className="mt-0.5 text-xs text-[#94A3B8]">{entry.detail}</div>
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1 text-[11px] text-[#64748B]">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    <span>{entry.time}</span>
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
