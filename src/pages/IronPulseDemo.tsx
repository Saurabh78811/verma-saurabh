import { useState } from 'react';
import {
  Calendar,
  CheckCircle2,
  Clock,
  Dumbbell,
  Flame,
  ShieldCheck,
  Users,
} from 'lucide-react';

type GymTab = 'memberships' | 'schedule' | 'trainers';
type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹999',
    period: '/month',
    badge: 'Essential Access',
    perks: [
      'Full cardio & strength floor access',
      'Locker & shower amenities',
      'Monthly body composition check',
    ],
  },
  {
    id: 'pro',
    name: 'Pro Athlete',
    price: '₹2,499',
    period: '/month',
    badge: 'Most Popular',
    perks: [
      'Unlimited group HIIT & Strength classes',
      'Customized 8-week workout split',
      '2 Personal Trainer assessment sessions',
    ],
  },
  {
    id: 'elite',
    name: 'Elite Coaching',
    price: '₹4,999',
    period: '/month',
    badge: '1-on-1 Coaching',
    perks: [
      'Dedicated personal coach & nutrition plan',
      'Weekly progress & macro adjustments',
      'Priority class booking & recovery zone',
    ],
  },
];

const SCHEDULE: Record<Weekday, { id: string; time: string; title: string; coach: string; spots: number }[]> = {
  Mon: [
    { id: 'm1', time: '06:30 AM', title: 'HIIT Conditioning', coach: 'Coach Alex', spots: 6 },
    { id: 'm2', time: '09:00 AM', title: 'Barbell Strength', coach: 'Coach Mike', spots: 4 },
    { id: 'm3', time: '06:00 PM', title: 'Athletic Mobility', coach: 'Coach Sarah', spots: 9 },
  ],
  Tue: [
    { id: 't1', time: '07:00 AM', title: 'Core & Kettlebell', coach: 'Coach Sarah', spots: 7 },
    { id: 't2', time: '05:30 PM', title: 'Powerlifting Lab', coach: 'Coach Mike', spots: 3 },
  ],
  Wed: [
    { id: 'w1', time: '06:30 AM', title: 'Metabolic Burn', coach: 'Coach Alex', spots: 5 },
    { id: 'w2', time: '07:00 PM', title: 'Strength & Hypertrophy', coach: 'Coach Jess', spots: 8 },
  ],
  Thu: [
    { id: 'th1', time: '08:00 AM', title: 'Functional Conditioning', coach: 'Coach Alex', spots: 6 },
    { id: 'th2', time: '06:30 PM', title: 'Yoga Recovery Flow', coach: 'Coach Jess', spots: 11 },
  ],
  Fri: [
    { id: 'f1', time: '06:30 AM', title: 'Full-Body Circuit', coach: 'Coach Mike', spots: 5 },
    { id: 'f2', time: '06:00 PM', title: 'Friday PR Session', coach: 'Coach Alex', spots: 4 },
  ],
};

const TRAINERS = [
  { id: 'tr1', name: 'Alex Sharma', specialty: 'Strength & HIIT Conditioning', experience: '7+ Years' },
  { id: 'tr2', name: 'Sarah Verma', specialty: 'Functional Mobility & Core', experience: '5+ Years' },
  { id: 'tr3', name: 'Mike Chauhan', specialty: 'Powerlifting & Hypertrophy', experience: '8+ Years' },
  { id: 'tr4', name: 'Jess Kapoor', specialty: 'Nutrition & Athletic Recovery', experience: '6+ Years' },
];

export default function IronPulseDemo() {
  const [activeTab, setActiveTab] = useState<GymTab>('memberships');
  const [selectedPlan, setSelectedPlan] = useState<string>('pro');
  const [selectedDay, setSelectedDay] = useState<Weekday>('Mon');
  const [bookedClasses, setBookedClasses] = useState<Record<string, boolean>>({});
  const [requestedTrainer, setRequestedTrainer] = useState<string | null>(null);

  const toggleClassBooking = (classId: string) => {
    setBookedClasses((prev) => ({ ...prev, [classId]: !prev[classId] }));
  };

  return (
    <div className="min-h-screen bg-[#080B14] text-slate-100">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0F172A]/95 px-4 py-3 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#38BDF8]/30 bg-[#38BDF8]/15 text-[#38BDF8]">
              <Dumbbell className="h-4 w-4" aria-hidden="true" />
            </div>
            <div>
              <h1 className="font-display text-sm font-bold text-white sm:text-base">
                IronPulse Gym
              </h1>
              <p className="text-[11px] text-[#94A3B8]">
                Strength, Conditioning &amp; Member Portal Preview
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-[#080B14] p-1">
            {[
              { id: 'memberships' as const, label: 'Memberships', icon: ShieldCheck },
              { id: 'schedule' as const, label: 'Class Schedule', icon: Calendar },
              { id: 'trainers' as const, label: 'Trainers', icon: Users },
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
        {/* Hero Banner */}
        <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0F172A] via-[#0B1220] to-[#080B14] p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38BDF8]">
                <Flame className="h-4 w-4" aria-hidden="true" />
                <span>Peak Performance Facility</span>
              </div>
              <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                Transform Your Strength &amp; Conditioning
              </h2>
              <p className="mt-2 max-w-xl text-xs leading-relaxed text-[#94A3B8] sm:text-sm">
                Manage gym memberships, reserve weekly group training slots, and book 1-on-1 coaching
                inside one unified platform.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 shrink-0">
              <div className="rounded-xl border border-white/10 bg-[#080B14]/80 px-4 py-3 text-center">
                <div className="font-display text-xl font-bold text-white">450+</div>
                <div className="text-[11px] text-[#94A3B8]">Active Members</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#080B14]/80 px-4 py-3 text-center">
                <div className="font-display text-xl font-bold text-[#38BDF8]">28/wk</div>
                <div className="text-[11px] text-[#94A3B8]">Live Classes</div>
              </div>
            </div>
          </div>
        </section>

        {/* Active View */}
        {activeTab === 'memberships' && (
          <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {PLANS.map((plan) => {
              const isSelected = selectedPlan === plan.id;
              return (
                <div
                  key={plan.id}
                  className={`flex flex-col justify-between rounded-2xl border p-5 transition-colors ${
                    isSelected
                      ? 'border-[#38BDF8] bg-[#0F172A] shadow-[0_0_30px_rgba(56,189,248,0.12)]'
                      : 'border-white/10 bg-[#0F172A]/80'
                  }`}
                >
                  <div>
                    <div className="text-xs font-semibold text-[#38BDF8]">{plan.badge}</div>
                    <h3 className="mt-1 font-display text-xl font-bold text-white">{plan.name}</h3>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="font-display text-3xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="text-xs text-[#94A3B8]">{plan.period}</span>
                    </div>

                    <ul className="mt-4 space-y-2.5 border-t border-white/10 pt-4">
                      {plan.perks.map((perk) => (
                        <li key={perk} className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                          <CheckCircle2
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#38BDF8]"
                            aria-hidden="true"
                          />
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`mt-6 w-full rounded-xl py-2.5 text-xs font-semibold transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#38BDF8] text-[#080B14]'
                        : 'border border-white/15 bg-white/[0.04] text-white hover:border-[#38BDF8]/40'
                    }`}
                  >
                    {isSelected ? 'Selected Plan' : 'Choose Membership'}
                  </button>
                </div>
              );
            })}
          </section>
        )}

        {activeTab === 'schedule' && (
          <section className="rounded-2xl border border-white/10 bg-[#0F172A] p-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <h3 className="font-display text-lg font-bold text-white">Weekly Class Schedule</h3>
                <p className="text-xs text-[#94A3B8]">Select a day and reserve your workout slot</p>
              </div>
              <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-[#080B14] p-1">
                {(['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] as const).map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                      selectedDay === day
                        ? 'bg-[#38BDF8] text-[#080B14]'
                        : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {SCHEDULE[selectedDay].map((slot) => {
                const isBooked = !!bookedClasses[slot.id];
                return (
                  <div
                    key={slot.id}
                    className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#080B14] p-4"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs text-[#38BDF8]">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        <span className="font-mono font-semibold">{slot.time}</span>
                      </div>
                      <h4 className="mt-1 font-display text-base font-bold text-white">
                        {slot.title}
                      </h4>
                      <p className="text-xs text-[#94A3B8]">
                        {slot.coach} · {isBooked ? slot.spots - 1 : slot.spots} spots remaining
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleClassBooking(slot.id)}
                      className={`rounded-xl px-4 py-2 text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                        isBooked
                          ? 'border border-emerald-400/35 bg-emerald-400/15 text-emerald-300'
                          : 'bg-[#38BDF8] text-[#080B14] hover:bg-[#7DD3FC]'
                      }`}
                    >
                      {isBooked ? 'Slot Reserved' : 'Book Class'}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {activeTab === 'trainers' && (
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TRAINERS.map((trainer) => {
              const isRequested = requestedTrainer === trainer.id;
              return (
                <div
                  key={trainer.id}
                  className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0F172A] p-5"
                >
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#38BDF8]/30 bg-[#38BDF8]/12 font-display text-sm font-bold text-[#38BDF8]">
                      {trainer.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <h3 className="mt-3 font-display text-base font-bold text-white">
                      {trainer.name}
                    </h3>
                    <p className="mt-1 text-xs text-[#94A3B8]">{trainer.specialty}</p>
                    <p className="mt-2 font-mono text-[11px] text-[#38BDF8]">
                      {trainer.experience} Coaching
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setRequestedTrainer(isRequested ? null : trainer.id)}
                    className={`mt-5 w-full rounded-xl py-2 text-xs font-semibold transition-colors cursor-pointer ${
                      isRequested
                        ? 'border border-emerald-400/35 bg-emerald-400/15 text-emerald-300'
                        : 'border border-white/15 bg-white/[0.04] text-white hover:border-[#38BDF8]/40'
                    }`}
                  >
                    {isRequested ? 'Session Requested' : 'Book 1-on-1 Trial'}
                  </button>
                </div>
              );
            })}
          </section>
        )}
      </main>
    </div>
  );
}
