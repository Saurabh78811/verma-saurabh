import { useMemo, useState } from 'react';
import {
  Award,
  BarChart3,
  CheckCircle2,
  CreditCard,
  Package,
  Search,
  ShoppingBag,
  Users,
} from 'lucide-react';

type DemoTab = 'customers' | 'orders' | 'loyalty';
type RewardTier = 'All' | 'Platinum' | 'Gold' | 'Silver' | 'Bronze';

interface CustomerRecord {
  id: string;
  name: string;
  email: string;
  lastVisit: string;
  orders: number;
  spend: string;
  tier: Exclude<RewardTier, 'All'>;
}

const CUSTOMERS: CustomerRecord[] = [
  {
    id: 'c1',
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    lastVisit: '14 Nov 2026',
    orders: 18,
    spend: '₹24,850',
    tier: 'Platinum',
  },
  {
    id: 'c2',
    name: 'Priya Verma',
    email: 'priya.verma@example.com',
    lastVisit: '13 Nov 2026',
    orders: 11,
    spend: '₹15,400',
    tier: 'Gold',
  },
  {
    id: 'c3',
    name: 'Rohan Mehta',
    email: 'rohan.mehta@example.com',
    lastVisit: '12 Nov 2026',
    orders: 9,
    spend: '₹12,150',
    tier: 'Gold',
  },
  {
    id: 'c4',
    name: 'Neha Kapoor',
    email: 'neha.kapoor@example.com',
    lastVisit: '10 Nov 2026',
    orders: 6,
    spend: '₹7,920',
    tier: 'Silver',
  },
  {
    id: 'c5',
    name: 'Vikram Singh',
    email: 'vikram.singh@example.com',
    lastVisit: '08 Nov 2026',
    orders: 3,
    spend: '₹3,480',
    tier: 'Bronze',
  },
];

const RECENT_ORDERS = [
  { id: '#INV-8842', customer: 'Aarav Sharma', items: '4 Items · Retail POS', total: '₹3,240', status: 'Completed' },
  { id: '#INV-8841', customer: 'Priya Verma', items: '2 Items · Online Pickup', total: '₹1,890', status: 'Completed' },
  { id: '#INV-8840', customer: 'Rohan Mehta', items: '5 Items · Home Delivery', total: '₹4,150', status: 'Dispatched' },
  { id: '#INV-8839', customer: 'Neha Kapoor', items: '3 Items · Retail POS', total: '₹2,110', status: 'Completed' },
];

const TIER_STYLES: Record<Exclude<RewardTier, 'All'>, string> = {
  Platinum: 'border-cyan-400/35 bg-cyan-400/15 text-cyan-300',
  Gold: 'border-amber-400/35 bg-amber-400/15 text-amber-300',
  Silver: 'border-slate-300/30 bg-slate-300/15 text-slate-200',
  Bronze: 'border-orange-400/35 bg-orange-400/15 text-orange-300',
};

export default function StoreFlowDemo() {
  const [activeTab, setActiveTab] = useState<DemoTab>('customers');
  const [searchQuery, setSearchQuery] = useState('');
  const [tierFilter, setTierFilter] = useState<RewardTier>('All');

  const filteredCustomers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return CUSTOMERS.filter((c) => {
      const matchesTier = tierFilter === 'All' || c.tier === tierFilter;
      const matchesQuery =
        !q || c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q);
      return matchesTier && matchesQuery;
    });
  }, [searchQuery, tierFilter]);

  return (
    <div className="min-h-screen bg-[#080B14] text-slate-100">
      {/* Top Bar */}
      <header className="border-b border-white/10 bg-[#0F172A]/95 px-4 py-3 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 text-[#38BDF8]">
              <ShoppingBag className="h-4 w-4" aria-hidden="true" />
            </div>
            <div>
              <h1 className="font-display text-sm font-bold text-white sm:text-base">
                StoreFlow CRM
              </h1>
              <p className="text-[11px] text-[#94A3B8]">
                Retail Customer &amp; Loyalty Management Preview
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-[#080B14] p-1">
            {[
              { id: 'customers' as const, label: 'Customers', icon: Users },
              { id: 'orders' as const, label: 'Orders', icon: Package },
              { id: 'loyalty' as const, label: 'Loyalty Tiers', icon: Award },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#38BDF8] text-[#080B14]'
                      : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-6 p-4 sm:p-6">
        {/* KPI Row */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            { label: 'Active Customers', value: '4,821', delta: '+12.4%', icon: Users },
            { label: 'Repeat Purchase Rate', value: '38.5%', delta: '+5.1%', icon: BarChart3 },
            { label: 'Monthly Store Sales', value: '₹8.4L', delta: '+8.9%', icon: CreditCard },
            { label: 'Loyalty Members', value: '3,150', delta: '+15.2%', icon: Award },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-[#0F172A] p-4"
              >
                <div className="flex items-center justify-between text-xs text-[#94A3B8]">
                  <span>{stat.label}</span>
                  <Icon className="h-4 w-4 text-[#38BDF8]" aria-hidden="true" />
                </div>
                <div className="mt-2 flex items-baseline justify-between gap-2">
                  <span className="font-display text-2xl font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-emerald-400">
                    {stat.delta}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active View */}
        {activeTab === 'customers' && (
          <section className="rounded-2xl border border-white/10 bg-[#0F172A] p-4 sm:p-6">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-display text-lg font-bold text-white">
                  Store Customers Directory
                </h2>
                <p className="text-xs text-[#94A3B8]">
                  Search shoppers and filter by loyalty reward tier
                </p>
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
                    placeholder="Search customer..."
                    className="rounded-xl border border-white/10 bg-[#080B14] py-2 pr-3 pl-8 text-xs text-white placeholder-[#64748B] focus:border-[#38BDF8] focus:outline-none"
                  />
                </div>

                <select
                  value={tierFilter}
                  onChange={(e) => setTierFilter(e.target.value as RewardTier)}
                  aria-label="Filter by reward tier"
                  className="rounded-xl border border-white/10 bg-[#080B14] px-3 py-2 text-xs text-white focus:border-[#38BDF8] focus:outline-none cursor-pointer"
                >
                  {(['All', 'Platinum', 'Gold', 'Silver', 'Bronze'] as const).map((t) => (
                    <option key={t} value={t}>
                      {t === 'All' ? 'All Tiers' : `${t} Tier`}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-[#94A3B8]">
                    <th className="py-3 pr-4 font-medium">Customer</th>
                    <th className="py-3 pr-4 font-medium">Last Visit</th>
                    <th className="py-3 pr-4 font-medium">Orders</th>
                    <th className="py-3 pr-4 font-medium">Lifetime Spend</th>
                    <th className="py-3 font-medium">Reward Tier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  {filteredCustomers.map((customer) => (
                    <tr key={customer.id} className="hover:bg-white/[0.02]">
                      <td className="py-3.5 pr-4">
                        <div className="font-semibold text-white">{customer.name}</div>
                        <div className="text-[11px] text-[#94A3B8]">{customer.email}</div>
                      </td>
                      <td className="py-3.5 pr-4 text-[#CBD5E1]">{customer.lastVisit}</td>
                      <td className="py-3.5 pr-4 font-semibold text-white">{customer.orders}</td>
                      <td className="py-3.5 pr-4 font-semibold text-[#38BDF8]">{customer.spend}</td>
                      <td className="py-3.5">
                        <span
                          className={`inline-flex rounded-md border px-2 py-0.5 text-[11px] font-semibold ${TIER_STYLES[customer.tier]}`}
                        >
                          {customer.tier}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {filteredCustomers.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-[#94A3B8]">
                        No matching customers found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activeTab === 'orders' && (
          <section className="rounded-2xl border border-white/10 bg-[#0F172A] p-4 sm:p-6">
            <h2 className="font-display text-lg font-bold text-white">Recent Store Invoices</h2>
            <p className="mt-1 text-xs text-[#94A3B8]">
              POS &amp; online order billing synced to customer profiles
            </p>
            <div className="mt-4 space-y-3">
              {RECENT_ORDERS.map((order) => (
                <div
                  key={order.id}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#080B14] p-4"
                >
                  <div>
                    <div className="font-mono text-xs font-semibold text-[#38BDF8]">
                      {order.id} · {order.customer}
                    </div>
                    <div className="mt-0.5 text-xs text-[#94A3B8]">{order.items}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-display text-sm font-bold text-white">{order.total}</span>
                    <span className="inline-flex items-center gap-1 rounded-md border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                      <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                      <span>{order.status}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'loyalty' && (
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                tier: 'Silver Member',
                threshold: '5+ Orders',
                perk: '3% Cashback Points & Priority Support',
                count: '1,620 Members',
              },
              {
                tier: 'Gold Member',
                threshold: '10+ Orders',
                perk: '6% Store Credit + Free Express Delivery',
                count: '1,090 Members',
              },
              {
                tier: 'Platinum Member',
                threshold: '15+ Orders',
                perk: '10% VIP Rewards & Early Sale Access',
                count: '440 Members',
              },
            ].map((item) => (
              <div
                key={item.tier}
                className="rounded-2xl border border-white/10 bg-[#0F172A] p-5"
              >
                <div className="text-xs font-semibold text-[#38BDF8]">{item.threshold}</div>
                <h3 className="mt-1 font-display text-lg font-bold text-white">{item.tier}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#94A3B8]">{item.perk}</p>
                <div className="mt-4 border-t border-white/10 pt-3 text-xs font-semibold text-white">
                  {item.count}
                </div>
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
