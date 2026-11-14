import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { motion } from 'motion/react';
import {
  AlertCircle,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock,
  Copy,
  Github,
  Globe,
  Linkedin,
  Loader2,
  Mail,
  MessageSquare,
  Send,
  Sparkles,
} from 'lucide-react';
import { FormEvent, useState } from 'react';
import { PROFILE } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error' | 'unconfigured';

const INQUIRY_TOPICS = [
  'Full Stack Web App',
  'LMS / CRM Platform',
  'Android App (Kotlin)',
  'SEO & Growth',
  'Freelance / Hiring',
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [feedback, setFeedback] = useState('');

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
    setForm((prev) => ({
      ...prev,
      subject: `${topic} Inquiry`,
    }));
  };

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(PROFILE.contact.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setStatus('error');
      setFeedback('Please complete all required fields before sending.');
      return;
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    if (!emailValid) {
      setStatus('error');
      setFeedback('Please enter a valid email address.');
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const isPlaceholder =
      !serviceId ||
      !templateId ||
      !publicKey ||
      serviceId === 'your_service_id' ||
      templateId === 'your_template_id' ||
      publicKey === 'your_public_key';

    if (isPlaceholder) {
      setStatus('unconfigured');
      setFeedback(
        'EmailJS credentials are not configured in .env yet. You can still send your inquiry directly via email below.'
      );
      return;
    }

    try {
      setStatus('submitting');
      setFeedback('');

      const senderName = form.name.trim();
      const senderEmail = form.email.trim();
      const mailSubject = form.subject.trim();
      const mailMessage = form.message.trim();

      await emailjs.send(
        serviceId,
        templateId,
        {
          // Default EmailJS Contact Us template fields
          name: senderName,
          email: senderEmail,
          title: mailSubject,
          message: mailMessage,
          notes: mailMessage,
          // Standard & legacy EmailJS template field aliases
          from_name: senderName,
          from_email: senderEmail,
          user_name: senderName,
          user_email: senderEmail,
          sender_name: senderName,
          sender_email: senderEmail,
          reply_to: senderEmail,
          subject: mailSubject,
          to_name: PROFILE.name,
          to_email: PROFILE.contact.email,
          time: new Date().toLocaleString('en-IN', {
            dateStyle: 'medium',
            timeStyle: 'short',
          }),
        },
        { publicKey }
      );

      setStatus('success');
      setFeedback('Thank you! Your message has been delivered. Saurabh will respond shortly.');
      setForm({ name: '', email: '', subject: '', message: '' });
      setSelectedTopic('');
    } catch (err) {
      setStatus('error');
      const reason =
        err instanceof EmailJSResponseStatus && err.text ? ` (${err.text})` : '';
      setFeedback(
        `Unable to deliver message right now${reason}. Please try again or reach out directly via email or WhatsApp.`
      );
    }
  };

  const mailtoFallbackHref = `mailto:${PROFILE.contact.email}?subject=${encodeURIComponent(
    form.subject || 'Project Inquiry'
  )}&body=${encodeURIComponent(
    `Hi Saurabh,\n\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  )}`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B101D] py-20 sm:py-24"
    >
      {/* Ambient architectural background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-architectural-grid opacity-30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 h-[380px] w-[480px] rounded-full bg-[#6366F1]/[0.08] blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-[#38BDF8]/[0.09] blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header & Availability Strip */}
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-medium text-[#38BDF8]">08. Contact</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              Have an Idea? Let&apos;s Build Something Amazing.
            </h2>
            <p className="mt-3 text-base text-[#94A3B8]">
              Share your project scope, freelance requirements, or collaboration goals. I reply
              promptly with clear next steps.
            </p>
          </motion.div>

          {/* Clean Inline Availability Summary */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="flex flex-wrap items-center gap-5 border-t border-white/10 pt-4 lg:border-t-0 lg:pt-0 text-xs"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8]">
                <Clock className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <div className="font-semibold text-white">Fast Response</div>
                <div className="text-[#94A3B8]">Within 24 Hours</div>
              </div>
            </div>
            <div aria-hidden="true" className="hidden h-8 w-px bg-white/10 sm:block" />
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-indigo-400/30 bg-indigo-500/10 text-indigo-300">
                <Globe className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <div className="font-semibold text-white">Remote &amp; On-Site</div>
                <div className="text-[#94A3B8]">{PROFILE.location}</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Left Column: Direct Channels Card */}
          <div className="lg:col-span-5">
            <SpotlightCard
              spotlightColor="rgba(56, 189, 248, 0.14)"
              className="h-full rounded-2xl border border-white/12 bg-gradient-to-br from-[#101827] via-[#0E1525] to-[#0A101D] shadow-xl"
            >
              <div
                aria-hidden="true"
                className="h-[2px] w-full bg-gradient-to-r from-[#38BDF8] via-[#7DD3FC] to-[#6366F1]"
              />

              <div className="flex h-full flex-col justify-between gap-6 p-6 sm:p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      Direct Contact Channels
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
                      Prefer direct outreach? Connect via email, LinkedIn, GitHub, or WhatsApp.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {/* Email Card with Quick Copy */}
                    <div className="group flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-[#080B14]/75 p-4 transition-colors hover:border-[#38BDF8]/40">
                      <a
                        href={`mailto:${PROFILE.contact.email}`}
                        className="flex min-w-0 flex-1 items-center gap-3.5"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#38BDF8]/25 bg-[#38BDF8]/10 text-[#38BDF8] transition-colors group-hover:bg-[#38BDF8] group-hover:text-[#080B14]">
                          <Mail className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs text-[#94A3B8]">Email</div>
                          <div className="truncate text-sm font-semibold text-white">
                            {PROFILE.contact.email}
                          </div>
                        </div>
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        aria-label="Copy email address"
                        title="Copy email"
                        className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-white/12 bg-white/[0.04] px-2.5 py-1.5 text-[11px] font-semibold text-[#CBD5E1] transition-colors hover:border-[#38BDF8]/40 hover:text-white cursor-pointer"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="h-3 w-3 text-emerald-400" aria-hidden="true" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" aria-hidden="true" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    <a
                      href={PROFILE.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-white/10 bg-[#080B14]/75 p-4 transition-colors hover:border-[#38BDF8]/40"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#38BDF8]/25 bg-[#38BDF8]/10 text-[#38BDF8] transition-colors group-hover:bg-[#38BDF8] group-hover:text-[#080B14]">
                          <Linkedin className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs text-[#94A3B8]">LinkedIn</div>
                          <div className="truncate text-sm font-semibold text-white">
                            Connect on LinkedIn
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-[#94A3B8] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#38BDF8]" />
                    </a>

                    <a
                      href={PROFILE.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-white/10 bg-[#080B14]/75 p-4 transition-colors hover:border-[#38BDF8]/40"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#38BDF8]/25 bg-[#38BDF8]/10 text-[#38BDF8] transition-colors group-hover:bg-[#38BDF8] group-hover:text-[#080B14]">
                          <Github className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs text-[#94A3B8]">GitHub</div>
                          <div className="truncate text-sm font-semibold text-white">
                            github.com/Saurabh78811
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-[#94A3B8] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#38BDF8]" />
                    </a>

                    <a
                      href={PROFILE.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-white/10 bg-[#080B14]/75 p-4 transition-colors hover:border-[#38BDF8]/40"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#38BDF8]/25 bg-[#38BDF8]/10 text-[#38BDF8] transition-colors group-hover:bg-[#38BDF8] group-hover:text-[#080B14]">
                          <MessageSquare className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs text-[#94A3B8]">WhatsApp Chat</div>
                          <div className="truncate text-sm font-semibold text-white">
                            {PROFILE.contact.whatsappDisplay}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-[#94A3B8] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#38BDF8]" />
                    </a>
                  </div>
                </div>

                {/* Availability Footer Box */}
                <div className="rounded-xl border border-white/[0.08] bg-[#080B14]/65 p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#38BDF8]">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Open for New Collaborations</span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#94A3B8]">
                    Full Stack Web · LMS / CRM Systems · Kotlin Android Apps · Technical SEO
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Right Column: Interactive Project Inquiry Console */}
          <div className="lg:col-span-7">
            <SpotlightCard
              delay={0.08}
              spotlightColor="rgba(99, 102, 241, 0.14)"
              className="h-full rounded-2xl border border-white/12 bg-gradient-to-br from-[#101827] via-[#0E1525] to-[#0A101D] shadow-xl"
            >
              <div
                aria-hidden="true"
                className="h-[2px] w-full bg-gradient-to-r from-[#6366F1] via-[#38BDF8] to-[#7DD3FC]"
              />

              <div className="p-6 sm:p-8">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-5">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      Send a Project Inquiry
                    </h3>
                    <p className="mt-1 text-xs text-[#94A3B8]">
                      Select a service track below or describe your custom requirements.
                    </p>
                  </div>
                  <span className="font-mono text-[11px] text-[#38BDF8]">
                    Direct Delivery
                  </span>
                </div>

                {/* Quick Inquiry Topic Selector */}
                <div className="mb-6">
                  <p className="mb-2.5 text-xs font-semibold text-[#CBD5E1]">
                    What would you like to build?
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {INQUIRY_TOPICS.map((topic) => {
                      const isSelected = selectedTopic === topic;
                      return (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => handleTopicSelect(topic)}
                          className={`rounded-lg border px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                            isSelected
                              ? 'border-[#38BDF8] bg-[#38BDF8] text-[#080B14]'
                              : 'border-white/12 bg-[#080B14]/80 text-[#94A3B8] hover:border-[#38BDF8]/40 hover:text-white'
                          }`}
                        >
                          {topic}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-xs font-semibold text-[#E2E8F0]"
                      >
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full rounded-xl border border-white/12 bg-[#080B14] px-4 py-3 text-sm text-white placeholder-[#94A3B8]/50 transition-colors focus:border-[#38BDF8] focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/25"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-xs font-semibold text-[#E2E8F0]"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full rounded-xl border border-white/12 bg-[#080B14] px-4 py-3 text-sm text-white placeholder-[#94A3B8]/50 transition-colors focus:border-[#38BDF8] focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/25"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="mb-2 block text-xs font-semibold text-[#E2E8F0]"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="React.js Web App / Android Development Inquiry"
                      className="w-full rounded-xl border border-white/12 bg-[#080B14] px-4 py-3 text-sm text-white placeholder-[#94A3B8]/50 transition-colors focus:border-[#38BDF8] focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/25"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-xs font-semibold text-[#E2E8F0]"
                    >
                      Project Details / Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project scope, target timeline, and goals..."
                      className="w-full resize-y rounded-xl border border-white/12 bg-[#080B14] px-4 py-3 text-sm text-white placeholder-[#94A3B8]/50 transition-colors focus:border-[#38BDF8] focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/25"
                    />
                  </div>

                  {/* Status Feedback */}
                  {status === 'success' && (
                    <div
                      role="status"
                      className="flex items-start gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{feedback}</span>
                    </div>
                  )}

                  {(status === 'error' || status === 'unconfigured') && (
                    <div
                      role="alert"
                      className="flex flex-col gap-3 rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-sm text-amber-200"
                    >
                      <div className="flex items-start gap-2.5">
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                        <span>{feedback}</span>
                      </div>
                      {(status === 'unconfigured' || status === 'error') && (
                        <a
                          href={mailtoFallbackHref}
                          className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-[#38BDF8] px-3.5 py-2 text-xs font-semibold text-[#080B14]"
                        >
                          <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Open Email Client Instead</span>
                        </a>
                      )}
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                    <p className="text-xs text-[#94A3B8]">
                      All inquiries remain strictly confidential.
                    </p>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#38BDF8] px-6 py-3.5 text-sm font-semibold text-[#080B14] shadow-[0_0_28px_rgba(56,189,248,0.25)] transition-all duration-150 hover:bg-[#7DD3FC] disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer sm:w-auto"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" aria-hidden="true" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
