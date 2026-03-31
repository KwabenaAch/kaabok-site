import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  BrainCircuit, GraduationCap, LineChart, Mic2, CheckCircle2,
} from 'lucide-react';

import FloatingNavbar from '../components/shared/FloatingNavbar';
import SectionContainer from '../components/shared/SectionContainer';
import RevealWrapper from '../components/shared/RevealWrapper';
import MagneticButton from '../components/shared/MagneticButton';
import EyebrowLabel from '../components/shared/EyebrowLabel';
import Footer from '../components/shared/Footer';

gsap.registerPlugin(ScrollTrigger);

/* ─── content ─────────────────────────────────────────────────────────────── */

const AUDIENCE = [
  {
    n: '01',
    title: 'Companies',
    body: 'Companies and SMEs in Ghana seeking to improve efficiency and competitiveness through AI.',
  },
  {
    n: '02',
    title: 'Executive Teams',
    body: 'Executive teams responsible for AI investment decisions.',
  },
  {
    n: '03',
    title: 'Institutions',
    body: 'Institutions building internal AI capability.',
  },
  {
    n: '04',
    title: 'Advisory Clients',
    body: 'Organizations seeking vendor neutral AI advisory.',
  },
  {
    n: '05',
    title: 'AI Consulting for Companies',
    body: 'AI consulting services help organizations translate AI potential into operational outcomes. Engagements focus on AI strategy design, governance frameworks, implementation oversight, and data readiness.',
  },
  {
    n: '06',
    title: 'Executive AI Training',
    body: 'AI training services equip executives and leadership teams with the understanding required to govern AI effectively. Programs include executive masterclasses, corporate workshops, and leadership briefings.',
  },
  {
    n: '07',
    title: 'Insights and Applied Learning',
    body: 'Content focuses on AI adoption for businesses, executive decision making, and organizational readiness.',
  },
];

const SERVICES = [
  {
    Icon: BrainCircuit,
    eyebrow: 'Advisory',
    title: 'AI Consulting',
    desc: 'Vendor-agnostic strategy sessions that go from ambiguity to action.',
    bullets: ['AI readiness audits', 'Use-case prioritisation', 'Governance & ethics frameworks', 'Implementation roadmapping'],
    cta: 'Explore Consulting',
  },
  {
    Icon: GraduationCap,
    eyebrow: 'Education',
    title: 'AI Teaching',
    desc: 'Executive workshops and team training that build lasting AI fluency.',
    bullets: ['Bespoke workshop design', 'Executive cohort programmes', 'Hands-on tool labs', 'Ongoing curriculum support'],
    cta: 'View Training',
  },
  {
    Icon: LineChart,
    eyebrow: 'Research',
    title: 'AI Insights',
    desc: 'Evidence-led research, briefings, and thought leadership on AI in Africa.',
    bullets: ['Sector-specific reports', 'Policy briefings', 'Trend analysis', 'Commissioned research'],
    cta: 'Read Insights',
  },
  {
    Icon: Mic2,
    eyebrow: 'Speaking',
    title: 'AI Speaking',
    desc: 'Keynotes and panels that move audiences from curious to committed.',
    bullets: ['Conference keynotes', 'Panel moderation', 'Executive briefings', 'Media & podcast appearances'],
    cta: 'Invite to Speak',
  },
];

const CREDS = [
  'Corporate and SME focused advisory that connects AI initiatives to operational KPIs and measurable outcomes.',
  'Vendor neutral guidance that helps you choose the right approach for your business, not the loudest tools.',
  'Proven frameworks for AI readiness, governance, and adoption across leadership teams and operational units.',
  'Executive friendly delivery that simplifies complexity and supports confident decision making.',
];

/* ─── sections ────────────────────────────────────────────────────────────── */

function HomeHero({ sentinelRef }) {
  const portraitRef = useRef(null);
  const eyebrowRef  = useRef(null);
  const line1Ref    = useRef(null);
  const line2Ref    = useRef(null);
  const subcopyRef  = useRef(null);
  const ctaRef      = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(eyebrowRef.current,  { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
        .fromTo(line1Ref.current,    { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, '-=0.3')
        .fromTo(line2Ref.current,    { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, '-=0.5')
        .fromTo(subcopyRef.current,  { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 }, '-=0.4')
        .fromTo(ctaRef.current,      { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 }, '-=0.3')
        .fromTo(portraitRef.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 1.1, ease: 'power2.out' }, '-=0.6');
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative h-[100dvh] overflow-hidden bg-[#BBC0BB]">
      {/*
        Portrait:
        - Mobile (<sm): absolute bg layer, full height, low opacity
        - Desktop (sm+): right-anchored with soft left + bottom mask fade
      */}
      <div
        ref={portraitRef}
        className="
          absolute bottom-0 pointer-events-none select-none
          right-0 h-full opacity-[0.18] sm:h-[94%] sm:opacity-100
        "
        style={{
          maskImage: 'linear-gradient(to left, black 40%, transparent 90%), linear-gradient(to top, transparent 0%, black 15%)',
          maskComposite: 'intersect',
          WebkitMaskImage: 'linear-gradient(to left, black 40%, transparent 90%), linear-gradient(to top, transparent 0%, black 15%)',
          WebkitMaskComposite: 'source-in',
        }}
      >
        <img src="/Profile.JPG" alt="Boakye Acheampong" className="h-full w-auto object-cover object-top" />
      </div>

      <div ref={sentinelRef} className="absolute bottom-0 left-0 w-px h-px" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="relative z-10 mx-auto w-full max-w-container px-8 max-sm:px-5 pb-14 md:pb-20">
          <div className="max-w-[640px]">
            <div ref={eyebrowRef} className="mb-4 sm:mb-5">
              <EyebrowLabel>AI Consulting &amp; Executive Advisory</EyebrowLabel>
            </div>
            <h1 className="mb-5">
              {/* Sans line */}
              <span ref={line1Ref}
                className="block font-sans font-semibold text-[#1A2332]"
                style={{
                  fontSize: 'clamp(1.1rem, 2vw + 0.5rem, 2rem)',
                  lineHeight: '1.12',
                  letterSpacing: '-0.01em',
                }}
              >
                AI Consulting and Executive AI Training
              </span>
              {/* Serif italic line */}
              <span ref={line2Ref}
                className="block font-serif italic text-[#B69B74]"
                style={{
                  fontSize: 'clamp(1.4rem, 2.8vw + 0.4rem, 2.8rem)',
                  lineHeight: '1.1',
                }}
              >
                for Companies in Ghana and Beyond
              </span>
            </h1>
            <div ref={subcopyRef} className="mb-7 sm:mb-8 max-w-[520px]">
              <p className="font-sans text-[#3D4A5C] text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                Artificial Intelligence is transforming how companies operate, compete, and make decisions. For organizations in Ghana and across international markets, the priority is structured AI adoption that delivers measurable business value.
              </p>
              <p className="font-sans text-[#3D4A5C] text-sm sm:text-base md:text-lg leading-relaxed">
                This platform provides AI consulting and executive AI training for companies and SMEs seeking practical, responsible, and scalable AI adoption. The focus is on strategy, governance, and leadership capability rather than tools.
              </p>
            </div>
            {/* CTA row — stacks full-width on mobile */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3">
              <MagneticButton variant="primary" href="/contact" className="w-full sm:w-auto justify-center py-4 sm:py-3">
                Request AI Advisory
              </MagneticButton>
              <MagneticButton variant="primary" href="/contact"
                className="w-full sm:w-auto justify-center py-4 sm:py-3 !bg-transparent !text-[#1A2332] border border-[#1A2332]/25 hover:!bg-[#1A2332]/8">
                Invite Me to Speak
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* AUDIENCE — white, 1/2/4 col grid */
function AudienceSection() {
  return (
    <SectionContainer id="audience" className="bg-white py-14 md:py-24 lg:py-32">
      <RevealWrapper className="text-center mb-12 md:mb-16">
        <EyebrowLabel dark>Who This Is For</EyebrowLabel>
        <h2 className="font-serif font-semibold text-[#0B1220] mt-3 leading-snug"
          style={{ fontSize: 'clamp(1.9rem, 2.8vw, 2.6rem)' }}>
          WHO THIS IS FOR
        </h2>
      </RevealWrapper>

      <RevealWrapper stagger>
        {/* 1 col → 2 col (sm) → 4 col (lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px border border-[#0B1220]/10 rounded-card overflow-hidden">
          {AUDIENCE.map(({ n, title, body }) => (
            <div key={n} className="bg-white p-8 flex flex-col gap-4 hover:bg-[#F6F3EE] transition-colors duration-300">
              <span className="font-serif text-5xl font-light text-[#B69B74] leading-none">{n}</span>
              <h3 className="font-sans font-semibold text-lg text-[#0B1220]">{title}</h3>
              <p className="font-sans text-sm leading-relaxed text-[#5A6478]">{body}</p>
            </div>
          ))}
        </div>
      </RevealWrapper>
    </SectionContainer>
  );
}

/* SERVICES — warm off-white, 1 col → 2 col (md) */
function ServicesOverviewSection() {
  return (
    <SectionContainer id="services" className="bg-[#F6F3EE] py-14 md:py-24 lg:py-32">
      <RevealWrapper className="text-center mb-12 md:mb-16">
        <EyebrowLabel dark>What I Do</EyebrowLabel>
        <h2 className="font-serif font-semibold text-[#0B1220] mt-3 leading-snug"
          style={{ fontSize: 'clamp(1.9rem, 2.8vw, 2.6rem)' }}>
          AI services built for decision-makers
        </h2>
      </RevealWrapper>

      <RevealWrapper stagger>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {SERVICES.map(({ Icon, eyebrow, title, desc, bullets, cta }) => (
            <div key={title}
              className="group relative bg-white border border-[#0B1220]/10 rounded-card p-7 md:p-8 flex flex-col gap-5
                transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B69B74]/40 overflow-hidden shadow-soft hover:shadow-card">
              <div className="absolute top-0 left-0 right-0 h-px bg-[#B69B74]/0 group-hover:bg-[#B69B74]/50 transition-colors duration-300" />
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-[#183A6B]/10 text-[#183A6B]"><Icon size={20} /></span>
                <EyebrowLabel dark>{eyebrow}</EyebrowLabel>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-[1.2rem] text-[#0B1220] mb-2">{title}</h3>
                <p className="font-sans text-sm text-[#5A6478] leading-relaxed">{desc}</p>
              </div>
              <ul className="flex flex-col gap-2 mt-auto">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 font-sans text-xs text-[#5A6478]">
                    <span className="w-1 h-1 rounded-full bg-[#B69B74] shrink-0" />{b}
                  </li>
                ))}
              </ul>
              <div className="pt-1">
                <MagneticButton variant="ghost" href="#contact"
                  className="w-full sm:w-auto justify-center text-xs py-3 px-5 border-[#0B1220]/15 text-[#0B1220] hover:bg-[#0B1220]/5">
                  {cta}
                </MagneticButton>
              </div>
            </div>
          ))}
        </div>
      </RevealWrapper>
    </SectionContainer>
  );
}

/* QUOTE BAND */
function QuoteBand() {
  return (
    <section className="relative bg-[#BBC0BB] py-14 md:py-24 lg:py-32 overflow-hidden">
      <span
        className="absolute -top-8 left-1/2 -translate-x-1/2 font-serif text-[20rem] leading-none text-[#0F1524] pointer-events-none select-none"
        style={{ opacity: 0.06 }} aria-hidden
      >"</span>
      <RevealWrapper className="relative z-10 mx-auto w-full max-w-container px-8 max-sm:px-5 text-center">
        <blockquote
          className="font-serif italic text-[#0F1524] leading-snug max-w-3xl mx-auto mb-6"
          style={{ fontSize: 'clamp(1.4rem, 4vw, 2.2rem)' }}
        >
          "Great AI strategy isn't about buzzwords. It's about context, courage, and clarity."
        </blockquote>
        <cite className="not-italic font-sans text-sm text-[#5A6478] tracking-wide">
          Boakye Acheampong, AI Strategist
        </cite>
      </RevealWrapper>
    </section>
  );
}

/* CREDIBILITY — white, portrait stacks above on mobile */
function CredibilitySection() {
  return (
    <SectionContainer id="about" className="bg-white py-14 md:py-24 lg:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
        {/* Portrait — first in DOM = top on mobile */}
        <RevealWrapper delay={0.1}>
          <div className="rounded-frame overflow-hidden aspect-[3/4] md:aspect-[4/5] w-full max-w-sm mx-auto md:mx-0 shadow-card">
            <img src="/Profile.JPG" alt="Boakye Acheampong" className="w-full h-full object-cover object-top grayscale-[20%]" />
          </div>
        </RevealWrapper>

        <RevealWrapper delay={0.25}>
          <EyebrowLabel dark>Why Work With Me</EyebrowLabel>
          <h2 className="font-serif font-semibold text-[#0B1220] mt-3 mb-5 leading-snug"
            style={{ fontSize: 'clamp(1.9rem, 2.8vw, 2.6rem)' }}>
            Practical AI strategy for measurable business outcomes
          </h2>
          <p className="font-sans text-[#5A6478] text-base leading-relaxed mb-8">
            I focus on helping companies and SMEs adopt AI in a way that improves efficiency, decision making,
            and competitive advantage. Every engagement is built on clear strategy, governance, and practical
            execution guidance, so leaders can move from experimentation to outcomes with confidence.
          </p>
          <ul className="flex flex-col gap-4 mb-10">
            {CREDS.map((c) => (
              <li key={c} className="flex gap-3 font-sans text-sm text-[#0B1220]/80 leading-relaxed">
                <CheckCircle2 size={18} className="text-[#183A6B] mt-0.5 shrink-0" />{c}
              </li>
            ))}
          </ul>
          {/* Full-width on mobile */}
          <div className="flex flex-col sm:flex-row gap-3">
            <MagneticButton variant="primary" href="/contact" className="w-full sm:w-auto justify-center py-4 sm:py-3">
              Request AI Advisory
            </MagneticButton>
            <MagneticButton variant="ghost" href="#services"
              className="w-full sm:w-auto justify-center py-4 sm:py-3 border-[#0B1220]/20 text-[#0B1220] hover:bg-[#0B1220]/5">
              View Services
            </MagneticButton>
          </div>
        </RevealWrapper>
      </div>
    </SectionContainer>
  );
}

/* FINAL CTA */
function FinalCTASection() {
  return (
    <section id="contact" className="relative bg-[#BBC0BB] py-20 md:py-32 lg:py-40 overflow-hidden">
      <RevealWrapper className="relative z-10 mx-auto w-full max-w-container px-8 max-sm:px-5 text-center">
        <p className="font-sans text-sm text-[#5A6478] tracking-wide mb-5">
          The path forward starts with a single conversation.
        </p>
        <h2 className="font-serif italic text-[#0F1524] leading-snug mb-10 max-w-2xl mx-auto"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
          Ready to turn <span className="text-[#B69B74]">buzzword to blueprint?</span>
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-xs sm:max-w-none mx-auto">
          <MagneticButton variant="gold" href="/contact"
            className="w-full sm:w-auto justify-center py-4 sm:py-3">
            Book Discovery Call
          </MagneticButton>
          <MagneticButton variant="primary" href="#services"
            className="w-full sm:w-auto justify-center py-4 sm:py-3">
            Explore Services
          </MagneticButton>
        </div>
      </RevealWrapper>
    </section>
  );
}

/* ─── page ────────────────────────────────────────────────────────────────── */

export default function HomePage() {
  const heroSentinelRef = useRef(null);
  return (
    <>
      <FloatingNavbar sentinelRef={heroSentinelRef} />
      <main>
        <HomeHero sentinelRef={heroSentinelRef} />
        <AudienceSection />
        <ServicesOverviewSection />
        <QuoteBand />
        <CredibilitySection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
