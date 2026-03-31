import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, BriefcaseBusiness, Settings2, BarChart3, Cloud, ShieldCheck, BrainCircuit, CheckCircle2 } from 'lucide-react';

import FloatingNavbar from '../components/shared/FloatingNavbar';
import SectionContainer from '../components/shared/SectionContainer';
import RevealWrapper from '../components/shared/RevealWrapper';
import MagneticButton from '../components/shared/MagneticButton';
import EyebrowLabel from '../components/shared/EyebrowLabel';
import Footer from '../components/shared/Footer';

gsap.registerPlugin(ScrollTrigger);

/* ─── content ─────────────────────────────────────────────────────────────── */

const PHILOSOPHY = [
  {
    n: '01',
    title: 'Strategy before tech',
    body: 'Every AI engagement begins with a clear picture of the problem — not a solution in search of one. Technology follows strategy, not the other way around.',
  },
  {
    n: '02',
    title: 'Ethics before scale',
    body: "Responsible AI isn't a checkbox. It's a continuous commitment to fairness, accountability, and transparency — especially in contexts where AI is new and institutions are still forming norms.",
  },
  {
    n: '03',
    title: 'Context before imitation',
    body: 'What works in Silicon Valley rarely maps to Accra, Lagos, or Nairobi unchanged. Every strategy I build is rooted in local context, local data realities, and local leadership dynamics.',
  },
];

const EXPERIENCE = [
  {
    Icon: Building2,
    title: 'Financial Services and Enterprise Modernization',
    desc: 'Advisory and project work spanning banking, insurance, and large enterprise operations, focusing on technology strategy, operating model redesign, and governance.',
  },
  {
    Icon: Settings2,
    title: 'Operations and Process Automation',
    desc: 'Supporting organizations to improve efficiency and reduce operational friction through structured automation strategies and process reengineering.',
  },
  {
    Icon: BarChart3,
    title: 'Data and Analytics Strategy',
    desc: 'Helping leadership teams define data governance frameworks, analytics roadmaps, and readiness programs that connect data assets to decision making.',
  },
  {
    Icon: Cloud,
    title: 'Cloud and Infrastructure Modernization',
    desc: 'Guiding organizations through cloud migration planning, infrastructure rationalization, and modernization programs aligned to business objectives.',
  },
  {
    Icon: ShieldCheck,
    title: 'Cybersecurity and Risk Governance',
    desc: 'Supporting executives in understanding and managing technology risk, building governance structures, and ensuring compliance and resilience.',
  },
  {
    Icon: BrainCircuit,
    title: 'AI Adoption and Executive Enablement',
    desc: 'Designing and delivering AI adoption programs that equip leadership teams with the strategy, governance frameworks, and capability required for responsible and scalable AI use.',
  },
];

const HOW_I_WORK = [
  'Executive-level clarity: no jargon, no unnecessary complexity, just clear strategic thinking.',
  'Responsible AI advisory: ethics and governance are built in from day one, not added at the end.',
  'Institutional readiness focus: building the internal capability to sustain AI adoption beyond our engagement.',
  'Long-term capability building: the goal is always to leave your team more capable than I found them.',
];

/* ─── sections ────────────────────────────────────────────────────────────── */

/* HERO — dark */
function AboutHero({ sentinelRef }) {
  const leftRef     = useRef(null);
  const portraitRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(leftRef.current.children,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, stagger: 0.14 }
      ).fromTo(portraitRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 1, ease: 'power2.out' },
        '-=0.6'
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-[#BBC0BB] pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div ref={sentinelRef} className="absolute top-1/2 left-0 w-px h-px" />

      <div className="relative z-10 mx-auto w-full max-w-container px-8 max-sm:px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div ref={leftRef} className="flex flex-col gap-6">
            <EyebrowLabel dark>About</EyebrowLabel>
            <h1 className="font-serif text-[clamp(2rem,3.8vw,3.2rem)] font-semibold text-[#0F1524] leading-snug">
              I Help Organizations Navigate Responsible AI and Digital Transformation
            </h1>
            <p className="font-sans text-[#3D4A5C] text-base leading-relaxed">
              I'm Boakye Acheampong — an AI strategist and digital transformation advisor
              working with companies, executives, and institutions to navigate complex technology
              decisions with confidence. My approach is built on clear strategy, responsible
              governance, and practical execution guidance that translates ambition into
              measurable outcomes.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <MagneticButton variant="primary" href="/contact">Book Discovery Call</MagneticButton>
              <MagneticButton variant="primary" href="/services"
                className="!bg-transparent !text-[#0F1524] border !border-[#0F1524]/25 hover:!bg-[#0F1524]/8">
                View Services
              </MagneticButton>
            </div>
          </div>

          <div ref={portraitRef} className="rounded-frame overflow-hidden aspect-[4/5] max-w-sm mx-auto md:mx-0 shadow-card">
            <img src="/Profile.JPG" alt="Boakye Acheampong" className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* VISION — white */
function VisionSection() {
  return (
    <SectionContainer id="philosophy" className="bg-white py-14 md:py-24 lg:py-32">
      <RevealWrapper className="text-center mb-16">
        <EyebrowLabel dark>Vision &amp; Philosophy</EyebrowLabel>
        <h2 className="font-serif text-[clamp(1.9rem,2.8vw,2.6rem)] font-semibold text-[#0B1220] mt-3 leading-snug">
          Principles that guide every client engagement
        </h2>
      </RevealWrapper>

      <RevealWrapper stagger>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PHILOSOPHY.map(({ n, title, body }) => (
            <div key={n}
              className="bg-[#F6F3EE] border border-[#0B1220]/08 rounded-card p-8 flex flex-col gap-4
                shadow-soft hover:shadow-card transition-shadow duration-300">
              <span className="font-serif text-5xl font-light text-[#B69B74] leading-none">{n}</span>
              <h3 className="font-sans font-semibold text-lg text-[#0B1220]">{title}</h3>
              <p className="font-sans text-sm text-[#5A6478] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </RevealWrapper>
    </SectionContainer>
  );
}

/* EXPERIENCE — warm off-white, light cards */
function ExperienceSection() {
  return (
    <SectionContainer id="experience" className="bg-[#F6F3EE] py-14 md:py-24 lg:py-32">
      <RevealWrapper className="text-center mb-16">
        <EyebrowLabel dark>Experience</EyebrowLabel>
        <h2 className="font-serif text-[clamp(1.9rem,2.8vw,2.6rem)] font-semibold text-[#0B1220] mt-3 leading-snug">
          Where I've delivered transformation work
        </h2>
        <p className="font-sans text-[#5A6478] text-base leading-relaxed mt-5 max-w-2xl mx-auto">
          My work spans digital transformation initiatives across multiple industries, helping
          organizations modernize technology foundations, improve operational efficiency, strengthen
          governance, and build leadership capability. Engagements typically combine strategy,
          execution oversight, and enablement to ensure teams can adopt new ways of working with
          confidence.
        </p>
      </RevealWrapper>

      <RevealWrapper stagger>
        <div className="flex flex-col gap-4">
          {EXPERIENCE.map(({ Icon, title, desc }) => (
            <div key={title}
              className="group flex gap-6 items-start bg-white border border-[#0B1220]/10 rounded-card p-8
                hover:border-[#B69B74]/40 hover:shadow-card transition-all duration-300">
              <span className="p-3 rounded-lg bg-[#183A6B]/10 text-[#183A6B] shrink-0 mt-0.5"><Icon size={22} /></span>
              <div>
                <h3 className="font-sans font-semibold text-lg text-[#0B1220] mb-2">{title}</h3>
                <p className="font-sans text-sm text-[#5A6478] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </RevealWrapper>
    </SectionContainer>
  );
}

/* HOW I WORK — soft warm, dark text */
function HowIWorkSection() {
  return (
    <section className="bg-[#EEE9E1] border-y border-[#0B1220]/08 py-14 md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-container px-8 max-sm:px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <RevealWrapper>
            <EyebrowLabel dark>My Approach</EyebrowLabel>
            <h2 className="font-serif text-[clamp(1.9rem,2.8vw,2.6rem)] font-semibold text-[#0B1220] mt-3 mb-5 leading-snug">
              How I Work
            </h2>
            <p className="font-sans text-[#5A6478] text-base leading-relaxed">
              Every engagement is different, but the principles never change. Here's what you
              can expect when we work together — regardless of whether it's a one-day workshop
              or an ongoing advisory relationship.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={0.15} stagger>
            <ul className="flex flex-col gap-5">
              {HOW_I_WORK.map((item) => (
                <li key={item} className="flex gap-4 font-sans text-sm text-[#0B1220]/80 leading-relaxed">
                  <CheckCircle2 size={18} className="text-[#B69B74] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

/* FINAL CTA */
function FinalCTASection() {
  return (
    <section className="relative bg-[#BBC0BB] py-20 md:py-32 lg:py-40 overflow-hidden">
      <RevealWrapper className="relative z-10 mx-auto w-full max-w-container px-8 max-sm:px-5 text-center">
        <p className="font-sans text-sm text-[#5A6478] tracking-wide mb-5">The work starts with a single, honest conversation.</p>
        <h2 className="font-serif italic text-[clamp(2rem,4vw,3.5rem)] text-[#0F1524] leading-snug mb-10 max-w-2xl mx-auto">
          Let us work together on{' '}
          <span className="text-[#B69B74]">responsible AI adoption</span>
        </h2>
        <MagneticButton variant="gold" href="/contact">Book Discovery Call</MagneticButton>
      </RevealWrapper>
    </section>
  );
}

/* ─── page ────────────────────────────────────────────────────────────────── */

export default function AboutPage() {
  const heroSentinelRef = useRef(null);
  return (
    <>
      <FloatingNavbar sentinelRef={heroSentinelRef} />
      <main>
        <AboutHero sentinelRef={heroSentinelRef} />
        <VisionSection />
        <ExperienceSection />
        <HowIWorkSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
