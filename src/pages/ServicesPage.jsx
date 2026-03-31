import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  BrainCircuit, GraduationCap, Mic2,
  CheckCircle2, Users, Building2, BookOpen,
} from 'lucide-react';

import FloatingNavbar from '../components/shared/FloatingNavbar';
import SectionContainer from '../components/shared/SectionContainer';
import RevealWrapper from '../components/shared/RevealWrapper';
import MagneticButton from '../components/shared/MagneticButton';
import EyebrowLabel from '../components/shared/EyebrowLabel';
import Footer from '../components/shared/Footer';

gsap.registerPlugin(ScrollTrigger);

/* ─── content ─────────────────────────────────────────────────────────────── */

const CONSULTING_FOR = [
  'Executive teams making AI investment decisions',
  'Institutions building AI readiness',
  'Organizations seeking vendor neutral AI advisory',
];

const OUTCOMES = [
  'Clear AI priorities',
  'Governance structure',
  'Implementation confidence',
  'Leadership alignment',
  'Execution roadmap',
];

const ENG_FORMATS = [
  'Advisory sprint',
  'Strategy workshop',
  'Executive briefing',
  'Ongoing strategic guidance',
];

const TEACHING_PROGRAMS = [
  {
    Icon: Users,
    title: 'Executive Masterclasses',
    desc: 'Intensive sessions designed for C-suite and senior leaders covering AI strategy, risk, and decision-making without jargon.',
  },
  {
    Icon: Building2,
    title: 'Corporate Workshops',
    desc: "Team-based training built around your organisation's actual AI challenges — practical, contextual, and immediately applicable.",
  },
  {
    Icon: BookOpen,
    title: 'Guest Lectures',
    desc: 'Keynote-style lectures for universities, business schools, and professional bodies on AI strategy and responsible adoption.',
  },
];

const TRAINING_FORMATS = [
  'Board sessions',
  'Leadership team workshops',
  'Sector briefings',
  'Institutional capability sessions',
];

const SPEAKING_FORMATS = ['Keynotes', 'Panels', 'Executive Briefings'];

const STEPS = [
  { n: '01', name: 'Clarify', desc: 'Define goals, context, and the decision at the centre of your AI ambition.' },
  { n: '02', name: 'Design', desc: 'Build a tailored strategy, roadmap, or programme fit for your organisation.' },
  { n: '03', name: 'Enable', desc: 'Deliver workshops, briefings, or advisory sessions that build real capability.' },
  { n: '04', name: 'Guide', desc: 'Ongoing support to keep you on course as the landscape evolves.' },
];

/* ─── sections ────────────────────────────────────────────────────────────── */

/* HERO — dark */
function ServicesHero({ sentinelRef }) {
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const subcopyRef = useRef(null);
  const ctaRef     = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(eyebrowRef.current,  { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
        .fromTo(headingRef.current,  { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.3')
        .fromTo(subcopyRef.current,  { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 }, '-=0.4')
        .fromTo(ctaRef.current,      { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 }, '-=0.3');
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-[#BBC0BB] pt-28 pb-16 md:pt-44 md:pb-32 overflow-hidden">
      <div ref={sentinelRef} className="absolute top-1/2 left-0 w-px h-px" />

      <div className="relative z-10 mx-auto w-full max-w-container px-8 max-sm:px-5 text-center">
        <div ref={eyebrowRef} className="mb-5"><EyebrowLabel dark>AI Services</EyebrowLabel></div>
        <h1 ref={headingRef}
          className="font-serif italic text-[clamp(2.4rem,5vw,4.5rem)] font-semibold text-[#0F1524] leading-tight mb-6 max-w-3xl mx-auto">
          AI Services Built for Decision-Makers
        </h1>
        <p ref={subcopyRef} className="font-sans text-[#3D4A5C] text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          AI services structured to support organizations at different stages of AI adoption
          with strategy, governance, and leadership capability as the focus.
        </p>
        <div ref={ctaRef} className="flex flex-col sm:flex-row justify-center gap-3">
          <MagneticButton variant="gold" href="/contact">Book Discovery Call</MagneticButton>
          <MagneticButton variant="primary" href="/contact"
            className="!bg-transparent !text-[#0F1524] border !border-[#0F1524]/25 hover:!bg-[#0F1524]/8">
            Request Consultation
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

/* AI CONSULTING — white */
function AIConsultingSection() {
  return (
    <SectionContainer id="consulting" className="bg-white py-14 md:py-24 lg:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-12">

        <RevealWrapper>
          <EyebrowLabel dark>Core Practice</EyebrowLabel>
          <h2 className="font-serif text-[clamp(1.9rem,2.8vw,2.6rem)] font-semibold text-[#0B1220] leading-snug mt-3 mb-5">
            AI Consulting
          </h2>
          <p className="font-sans text-[#5A6478] text-base leading-relaxed mb-8">
            Most organisations know they need to act on AI — but don't know where to start,
            what to prioritise, or how to avoid expensive mistakes. I provide structured,
            independent advisory that cuts through the noise and delivers clarity.
          </p>
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#0B1220]/40 mb-4">
              Who it is for
            </p>
            <ul className="flex flex-col gap-3">
              {CONSULTING_FOR.map((item) => (
                <li key={item} className="flex items-start gap-2 font-sans text-sm text-[#5A6478]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#183A6B] shrink-0 mt-1.5" />{item}
                </li>
              ))}
            </ul>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={0.15}>
          <div className="mb-8">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#0B1220]/40 mb-5">
              Expected Outcomes
            </p>
            <ul className="flex flex-col gap-3">
              {OUTCOMES.map((o) => (
                <li key={o} className="flex gap-3 font-sans text-sm text-[#0B1220]/80">
                  <CheckCircle2 size={17} className="text-[#183A6B] mt-0.5 shrink-0" />{o}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#0B1220]/40 mb-4">
              Engagement Formats
            </p>
            <div className="flex flex-wrap gap-2">
              {ENG_FORMATS.map((f) => (
                <span key={f}
                  className="font-sans text-xs text-[#5A6478] border border-[#0B1220]/15 rounded-pill px-4 py-1.5">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </RevealWrapper>
      </div>

      <RevealWrapper delay={0.2} className="flex">
        <MagneticButton variant="primary" href="/contact">
          Request AI Consulting Session
        </MagneticButton>
      </RevealWrapper>
    </SectionContainer>
  );
}

/* AI TEACHING — warm off-white */
function AITeachingSection() {
  return (
    <SectionContainer id="teaching" className="bg-[#F6F3EE] py-14 md:py-24 lg:py-32">
      <RevealWrapper className="text-center mb-14">
        <EyebrowLabel dark>Executive Education</EyebrowLabel>
        <h2 className="font-serif text-[clamp(1.9rem,2.8vw,2.6rem)] font-semibold text-[#0B1220] mt-3 leading-snug">
          AI Teaching
        </h2>
        <p className="font-sans text-[#5A6478] text-base leading-relaxed mt-4 max-w-xl mx-auto">
          Executive education that builds lasting AI fluency — from board-level strategy
          sessions to institution-wide capability programmes.
        </p>
      </RevealWrapper>

      <RevealWrapper stagger>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {TEACHING_PROGRAMS.map(({ Icon, title, desc }) => (
            <div key={title}
              className="group relative bg-white border border-[#0B1220]/10 rounded-card p-8 flex flex-col gap-5
                transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B69B74]/40 overflow-hidden shadow-soft hover:shadow-card">
              <div className="absolute top-0 left-0 right-0 h-px bg-[#B69B74]/0 group-hover:bg-[#B69B74]/50 transition-colors duration-300" />
              <span className="p-2 rounded-lg bg-[#183A6B]/10 text-[#183A6B] w-fit"><Icon size={20} /></span>
              <div>
                <h3 className="font-sans font-semibold text-[1.1rem] text-[#0B1220] mb-2">{title}</h3>
                <p className="font-sans text-sm text-[#5A6478] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </RevealWrapper>

      <RevealWrapper delay={0.1} className="text-center">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TRAINING_FORMATS.map((f) => (
            <span key={f}
              className="font-sans text-xs text-[#5A6478] border border-[#0B1220]/15 rounded-pill px-4 py-1.5">
              {f}
            </span>
          ))}
        </div>
        <MagneticButton variant="primary" href="/contact">
          Request Executive AI Training
        </MagneticButton>
      </RevealWrapper>
    </SectionContainer>
  );
}

/* AI SPEAKING */
function AISpeakingSection() {
  return (
    <section id="speaking" className="relative bg-[#BBC0BB] py-14 md:py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10 mx-auto w-full max-w-container px-8 max-sm:px-5 text-center">
        <RevealWrapper>
          <EyebrowLabel dark>Keynotes and Panels</EyebrowLabel>
          <h2 className="font-serif text-[clamp(1.9rem,2.8vw,2.6rem)] font-semibold text-[#0F1524] mt-3 mb-5 leading-snug">
            AI Speaking
          </h2>
          <p className="font-sans text-[#3D4A5C] text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Keynotes, panels, and executive briefings designed to make AI strategy clear,
            credible, and relevant for decision makers.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {SPEAKING_FORMATS.map((f) => (
              <span key={f}
                className="font-sans text-sm text-[#0F1524] border border-[#0F1524]/20 rounded-pill px-6 py-2.5
                  hover:border-[#B69B74]/60 hover:text-[#B69B74] transition-colors duration-200">
                {f}
              </span>
            ))}
          </div>
          <MagneticButton variant="gold" href="/contact">Invite Me to Speak</MagneticButton>
        </RevealWrapper>
      </div>
    </section>
  );
}

/* ENGAGEMENT PATH — white */
function EngagementPathSection() {
  return (
    <SectionContainer id="process" className="bg-white py-14 md:py-24 lg:py-32">
      <RevealWrapper className="text-center mb-16">
        <EyebrowLabel dark>How We Work Together</EyebrowLabel>
        <h2 className="font-serif text-[clamp(1.9rem,2.8vw,2.6rem)] font-semibold text-[#0B1220] mt-3 leading-snug">
          Four steps from conversation to clarity
        </h2>
      </RevealWrapper>

      <RevealWrapper stagger>
        <div className="flex flex-col md:flex-row items-stretch">
          {STEPS.map(({ n, name, desc }, i) => (
            <div key={n} className="flex flex-col md:flex-row items-start md:items-stretch flex-1 min-w-0">
              <div className="flex flex-col gap-3 py-6 md:py-0 md:pr-8 w-full">
                <span className="font-serif text-4xl font-light text-[#B69B74] leading-none">{n}</span>
                <h3 className="font-sans font-semibold text-lg text-[#0B1220]">{name}</h3>
                <p className="font-sans text-sm text-[#5A6478] leading-relaxed">{desc}</p>
              </div>
              {i < STEPS.length - 1 && (
                <>
                  <div className="hidden md:block flex-shrink-0 w-px bg-[#0B1220]/10 mx-4 self-stretch" />
                  <div className="md:hidden w-full h-px bg-[#0B1220]/10 my-1" />
                </>
              )}
            </div>
          ))}
        </div>
      </RevealWrapper>
    </SectionContainer>
  );
}

/* FINAL CTA */
function FinalCTASection() {
  return (
    <section className="relative bg-[#BBC0BB] py-20 md:py-32 lg:py-40 overflow-hidden">
      <RevealWrapper className="relative z-10 mx-auto w-full max-w-container px-8 max-sm:px-5 text-center">
        <p className="font-sans text-sm text-[#5A6478] tracking-wide mb-5">
          Every engagement starts with a conversation.
        </p>
        <h2 className="font-serif italic text-[clamp(2rem,4vw,3.5rem)] text-[#0F1524] leading-snug mb-10 max-w-2xl mx-auto">
          Let us define the <span className="text-[#B69B74]">right AI path</span> for your organization
        </h2>
        <MagneticButton variant="gold" href="/contact">Book Discovery Call</MagneticButton>
      </RevealWrapper>
    </section>
  );
}

/* ─── page ────────────────────────────────────────────────────────────────── */

export default function ServicesPage() {
  const heroSentinelRef = useRef(null);
  return (
    <>
      <FloatingNavbar sentinelRef={heroSentinelRef} />
      <main>
        <ServicesHero sentinelRef={heroSentinelRef} />
        <AIConsultingSection />
        <AITeachingSection />
        <AISpeakingSection />
        <EngagementPathSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
