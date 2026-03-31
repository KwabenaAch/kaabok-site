import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

import FloatingNavbar from '../components/shared/FloatingNavbar';
import RevealWrapper from '../components/shared/RevealWrapper';
import MagneticButton from '../components/shared/MagneticButton';
import EyebrowLabel from '../components/shared/EyebrowLabel';
import Footer from '../components/shared/Footer';



gsap.registerPlugin(ScrollTrigger);

/* ─── content ─────────────────────────────────────────────────────────────── */

const SERVICES_LIST = [
  'AI Strategy Consulting',
  'Executive AI Training & Workshops',
  'Keynote Speaking & Panel Discussions',
  'Ongoing AI Advisory (Retainer)',
  'AI Policy & Governance Frameworks',
  'Commissioned AI Research & Insights',
];

const ENGAGEMENT_TYPES = [
  { value: '', label: 'Select engagement type…' },
  { value: 'consulting', label: 'AI Consulting' },
  { value: 'training', label: 'Executive AI Training' },
  { value: 'speaking', label: 'Speaking Engagement' },
  { value: 'advisory', label: 'Advisory Session' },
  { value: 'other', label: 'Other' },
];

const INITIAL_FORM = {
  fullName: '',
  email: '',
  organization: '',
  role: '',
  engagementType: '',
  country: '',
  message: '',
};

/* ─── form field components ────────────────────────────────────────────────── */

function Label({ htmlFor, children, required }) {
  return (
    <label htmlFor={htmlFor}
      className="block font-sans text-xs font-semibold uppercase tracking-widest text-[#5A6478] mb-2">
      {children}{required && <span className="text-[#B69B74] ml-0.5">*</span>}
    </label>
  );
}

const inputBase =
  'w-full bg-[#F6F3EE] border rounded-lg px-4 py-3 font-sans text-sm text-[#0B1220] placeholder-[#5A6478]/50 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#B69B74]/50';

function Field({ id, label, required, error, children }) {
  return (
    <div>
      <Label htmlFor={id} required={required}>{label}</Label>
      {children}
      {error && <p className="font-sans text-xs text-red-500 mt-1.5">{error}</p>}
    </div>
  );
}

/* ─── sections ─────────────────────────────────────────────────────────────── */

/* HERO — dark */
function ContactHero({ sentinelRef }) {
  const headingRef = useRef(null);
  const subRef     = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [headingRef.current, subRef.current],
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out', stagger: 0.18 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-[#BBC0BB] pt-28 pb-10 md:pt-44 md:pb-28 overflow-hidden">
      <div ref={sentinelRef} className="absolute top-1/2 left-0 w-px h-px" />

      <div className="relative z-10 mx-auto w-full max-w-container px-8 max-sm:px-5 text-center">
        <div className="mb-5"><EyebrowLabel dark>Contact</EyebrowLabel></div>
        <h1 ref={headingRef}
          className="font-serif italic text-[clamp(2.4rem,5vw,4.5rem)] font-semibold text-[#0F1524] leading-tight mb-6 max-w-3xl mx-auto">
          Let's Have a Conversation
        </h1>
        <p ref={subRef} className="font-sans text-[#3D4A5C] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          For consulting, executive training, speaking engagements, or strategic AI advisory inquiries.
        </p>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = 'Full name is required.';
    if (!form.email.trim()) next.email = 'Email address is required.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) next.email = 'Please enter a valid email.';
    if (!form.engagementType) next.engagementType = 'Please select an engagement type.';
    if (!form.message.trim()) next.message = 'Message is required.';
    return next;
  };

  const borderClass = (field) =>
    errors[field]
      ? 'border-red-400/60 focus:ring-red-400/40'
      : 'border-[#0B1220]/15 focus:border-[#B69B74]/50';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setSubmitting(true);
    try {
      await emailjs.send(
        'service_u5y4k1m',
        'template_ji2getm',
        {
          fullName: form.fullName,
          email: form.email,
          organization: form.organization,
          role: form.role,
          engagementType: form.engagementType,
          country: form.country,
          message: form.message,
        },
        '3y0UN2cjebtXBdR0B'
      );

      setSubmitted(true);
      setForm(INITIAL_FORM);
      setErrors({});
    } catch (error) {
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-16 text-center">
        <CheckCircle2 size={48} className="text-[#B69B74]" />
        <div>
          <h3 className="font-serif text-2xl font-semibold text-[#0B1220] mb-2">
            Thank you for reaching out.
          </h3>
          <p className="font-sans text-sm text-[#5A6478] leading-relaxed max-w-xs mx-auto">
            I'll review your inquiry and be in touch within 1 to 2 business days.
          </p>
        </div>
        <button
          onClick={() => {
            setForm(INITIAL_FORM);
            setSubmitted(false);
          }}
          className="font-sans text-xs text-[#B69B74] underline underline-offset-4 hover:text-[#0B1220] transition-colors"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="fullName" label="Full Name" required error={errors.fullName}>
          <input id="fullName" name="fullName" type="text" value={form.fullName} onChange={handleChange}
            placeholder="Kwame Mensah" className={`${inputBase} ${borderClass('fullName')}`} />
        </Field>
        <Field id="email" label="Email Address" required error={errors.email}>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
            placeholder="kwame@organisation.com" className={`${inputBase} ${borderClass('email')}`} />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="organization" label="Organisation" error={errors.organization}>
          <input id="organization" name="organization" type="text" value={form.organization} onChange={handleChange}
            placeholder="Ministry of Finance" className={`${inputBase} ${borderClass('organization')}`} />
        </Field>
        <Field id="role" label="Your Role" error={errors.role}>
          <input id="role" name="role" type="text" value={form.role} onChange={handleChange}
            placeholder="Director of Digital Transformation" className={`${inputBase} ${borderClass('role')}`} />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="engagementType" label="Engagement Type" required error={errors.engagementType}>
          <select id="engagementType" name="engagementType" value={form.engagementType} onChange={handleChange}
            className={`${inputBase} ${borderClass('engagementType')} cursor-pointer`}>
            {ENGAGEMENT_TYPES.map(({ value, label }) => (
              <option key={value} value={value} disabled={value === ''}>{label}</option>
            ))}
          </select>
        </Field>
        <Field id="country" label="Country" error={errors.country}>
          <input id="country" name="country" type="text" value={form.country} onChange={handleChange}
            placeholder="Ghana" className={`${inputBase} ${borderClass('country')}`} />
        </Field>
      </div>

      <Field id="message" label="Message" required error={errors.message}>
        <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange}
          placeholder="Tell me about your organisation, the challenge you're facing, and what kind of support you're looking for…"
          className={`${inputBase} ${borderClass('message')} resize-none`} />
      </Field>

      {errors.submit && (
        <p className="font-sans text-xs text-red-500 text-center">{errors.submit}</p>
      )}

      <button type="submit" disabled={submitting}
        className="w-full bg-[#B69B74] text-[#0B1220] font-sans font-semibold text-sm
          rounded-pill py-4 px-6 hover:bg-[#c9ae89] active:scale-[0.99]
          transition-all duration-200 mt-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
        {submitting ? 'Sending…' : 'Send Inquiry'}
      </button>
    </form>
  );
}

function SideCards() {
  return (
    <div className="flex flex-col gap-6">
      <RevealWrapper delay={0.1}>
        <div className="bg-white border border-[#0B1220]/10 rounded-card p-8 shadow-soft">
          <h3 className="font-sans font-semibold text-base text-[#0B1220] mb-6">How I Can Help</h3>
          <ul className="flex flex-col gap-4">
            {SERVICES_LIST.map((s) => (
              <li key={s} className="flex items-start gap-3 font-sans text-sm text-[#5A6478]">
                <ArrowRight size={15} className="text-[#B69B74] mt-0.5 shrink-0" />{s}
              </li>
            ))}
          </ul>
        </div>
      </RevealWrapper>

      <RevealWrapper delay={0.15}>
        <div className="bg-white border border-[#0B1220]/10 rounded-card p-8 shadow-soft">
          <h3 className="font-sans font-semibold text-base text-[#0B1220] mb-3">Email Directly</h3>
          <p className="font-sans text-sm text-[#5A6478] leading-relaxed mb-4">
            Prefer to reach out directly? Send me an email and I'll respond within 1–2 business days.
          </p>
          <a href="mailto:info@kaabok.com"
            className="flex items-center gap-3 bg-[#F6F3EE] rounded-lg px-4 py-3 group hover:bg-[#B69B74]/10 transition-colors duration-200">
            <Mail size={18} className="text-[#B69B74] shrink-0" />
            <span className="font-sans text-sm font-semibold text-[#0B1220] group-hover:text-[#B69B74] transition-colors duration-200">
              info@kaabok.com
            </span>
          </a>
        </div>
      </RevealWrapper>

      <RevealWrapper delay={0.2}>
        <div className="bg-[#183A6B]/08 border border-[#183A6B]/20 rounded-card p-8">
          <h3 className="font-sans font-semibold text-base text-[#0B1220] mb-3">Book a Discovery Call</h3>
          <p className="font-sans text-sm text-[#5A6478] leading-relaxed mb-6">
            Prefer to talk first? Book a complimentary 30-minute discovery call to explore
            how I can support your organisation's AI journey.
          </p>
          <MagneticButton variant="gold" onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })} className="w-full justify-center">
            Book Discovery Call
          </MagneticButton>
        </div>
      </RevealWrapper>
    </div>
  );
}

/* DISCOVERY CTA — dark */
function DiscoveryCTASection() {
  return (
    <section className="relative bg-[#BBC0BB] py-14 md:py-24 lg:py-32 overflow-hidden">
      <RevealWrapper className="relative z-10 mx-auto w-full max-w-container px-8 max-sm:px-5 text-center">
        <EyebrowLabel dark>Ready to begin?</EyebrowLabel>
        <h2 className="font-serif italic text-[clamp(2rem,4vw,3.2rem)] text-[#0F1524] mt-4 mb-5 leading-snug max-w-2xl mx-auto">
          The right AI path starts with the{' '}
          <span className="text-[#B69B74]">right conversation</span>
        </h2>
        <p className="font-sans text-[#3D4A5C] text-base leading-relaxed mb-10 max-w-md mx-auto">
          Whether you're ready to engage or still exploring, I'm happy to help you think through the options.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <MagneticButton variant="gold" href="/contact">Book Discovery Call</MagneticButton>
          <MagneticButton variant="primary" href="/services"
            className="!bg-transparent !text-[#0F1524] border !border-[#0F1524]/25 hover:!bg-[#0F1524]/8">
            View Services
          </MagneticButton>
        </div>
      </RevealWrapper>
    </section>
  );
}

/* ─── page ─────────────────────────────────────────────────────────────────── */

export default function ContactPage() {
  const heroSentinelRef = useRef(null);

  return (
    <>
      <FloatingNavbar sentinelRef={heroSentinelRef} />
      <main>
        <ContactHero sentinelRef={heroSentinelRef} />

        <section className="bg-[#F6F3EE] py-10 md:py-16 lg:py-24">
          <div className="mx-auto w-full max-w-container px-8 max-sm:px-5">
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-start">
              <RevealWrapper>
                <div id="contact-form" className="bg-white border border-[#0B1220]/10 rounded-card p-8 md:p-10 shadow-soft">
                  <h2 className="font-sans font-semibold text-xl text-[#0B1220] mb-8">Send an Inquiry</h2>
                  <ContactForm />
                </div>
              </RevealWrapper>
              <SideCards />
            </div>
          </div>
        </section>

        <DiscoveryCTASection />
      </main>
      <Footer />
    </>
  );
}
