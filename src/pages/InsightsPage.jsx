import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar } from 'lucide-react';

import FloatingNavbar from '../components/shared/FloatingNavbar';
import SectionContainer from '../components/shared/SectionContainer';
import RevealWrapper from '../components/shared/RevealWrapper';
import MagneticButton from '../components/shared/MagneticButton';
import EyebrowLabel from '../components/shared/EyebrowLabel';
import Footer from '../components/shared/Footer';

gsap.registerPlugin(ScrollTrigger);

/* ─── content ─────────────────────────────────────────────────────────────── */

const CATEGORIES = [
  'All',
  'AI in Africa',
  'Public Sector Innovation',
  'Strategic Case Studies',
  'Leadership & Future Thinking',
];

const FEATURED = {
  category: 'Public Sector Innovation',
  date: 'January 2025',
  title: 'Why African Governments Must Lead the AI Conversation',
  summary:
    "Across the continent, AI is arriving faster than policy frameworks can respond. The question is no longer whether AI will transform public services — it's who will shape that transformation. Governments that wait for global consensus risk inheriting decisions made without African context, African data, or African priorities. This is why leadership must come from within.",
};

const ARTICLES = [
  {
    category: 'Leadership & Future Thinking',
    date: 'December 2024',
    title: 'AI Is Not the Strategy. Leadership Is.',
    summary:
      "The most common mistake executives make is treating AI as a destination. It isn't. AI is a capability — and capabilities require leadership, not just procurement.",
  },
  {
    category: 'Public Sector Innovation',
    date: 'November 2024',
    title: 'From Pilot to Policy: Governing AI in Institutions',
    summary:
      "Running a successful AI pilot is one thing. Turning it into institutionalised, scalable policy is another. Here's what separates the organisations that cross that bridge from those that don't.",
  },
  {
    category: 'Strategic Case Studies',
    date: 'October 2024',
    title: 'Executive Readiness Before AI Investment',
    summary:
      'Before any organisation invests in AI tooling, it must invest in executive understanding. The ROI on leadership clarity far outpaces the ROI on any single AI platform.',
  },
  {
    category: 'AI in Africa',
    date: 'September 2024',
    title: 'What Responsible AI Looks Like in Practice',
    summary:
      'Responsible AI is often discussed in abstract terms — fairness, accountability, transparency. But what does it actually look like on the ground, in African institutions, with African data?',
  },
];

/* ─── components ───────────────────────────────────────────────────────────── */

function CategoryFilter({ active, onChange }) {
  const btnRefs = useRef([]);

  const handlePointerEnter = (i) => {
    gsap.to(btnRefs.current[i], { y: -1, scale: 1.02, duration: 0.2, ease: 'power2.out' });
  };
  const handlePointerLeave = (i) => {
    gsap.to(btnRefs.current[i], { y: 0, scale: 1, duration: 0.25, ease: 'power2.inOut' });
  };

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {CATEGORIES.map((cat, i) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            ref={(el) => (btnRefs.current[i] = el)}
            onClick={() => onChange(cat)}
            onPointerEnter={() => handlePointerEnter(i)}
            onPointerLeave={() => handlePointerLeave(i)}
            className={`font-sans text-sm rounded-pill px-5 py-2 transition-colors duration-200 cursor-pointer
              ${isActive
                ? 'bg-[#B69B74] text-[#0B1220] font-medium'
                : 'border border-[#0B1220]/15 text-[#5A6478] hover:text-[#0B1220] hover:border-[#0B1220]/30'
              }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

/* Light-mode featured card */
function FeaturedCard({ article }) {
  const Wrapper = article.href ? 'a' : 'div';
  const wrapperProps = article.href ? { href: article.href } : {};
  return (
    <RevealWrapper>
      <Wrapper
        {...wrapperProps}
        className="group block bg-white border border-[#0B1220]/10 rounded-frame p-10 md:p-14
          transition-all duration-300 overflow-hidden relative shadow-soft"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-[#B69B74]/50" />
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#B69B74] border border-[#B69B74]/40 rounded-pill px-3 py-1">
            {article.category}
          </span>
          <span className="flex items-center gap-1.5 font-sans text-xs text-[#5A6478]">
            <Calendar size={13} />{article.date}
          </span>
        </div>
        <h2 className="font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-semibold text-[#0B1220] leading-snug mb-5 max-w-3xl">
          {article.title}
        </h2>
        <p className="font-sans text-[#5A6478] text-base leading-relaxed max-w-2xl">{article.summary}</p>
      </Wrapper>
    </RevealWrapper>
  );
}

/* Light-mode article card */
function ArticleCard({ article }) {
  const Wrapper = article.href ? 'a' : 'div';
  const wrapperProps = article.href ? { href: article.href } : {};
  return (
    <Wrapper
      {...wrapperProps}
      className="flex flex-col bg-white border border-[#0B1220]/10 rounded-card p-8
        transition-all duration-300 overflow-hidden relative shadow-soft"
    >
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#B69B74]">{article.category}</span>
        <span className="w-1 h-1 rounded-full bg-[#5A6478]/40" />
        <span className="flex items-center gap-1.5 font-sans text-xs text-[#5A6478]">
          <Calendar size={12} />{article.date}
        </span>
      </div>
      <h3 className="font-sans font-semibold text-lg text-[#0B1220] mb-3 leading-snug">{article.title}</h3>
      <p className="font-sans text-sm text-[#5A6478] leading-relaxed flex-1">{article.summary}</p>
    </Wrapper>
  );
}

/* ─── sections ────────────────────────────────────────────────────────────── */

/* HERO — dark */
function InsightsHero({ sentinelRef }) {
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
    <section className="relative bg-[#BBC0BB] pt-28 pb-14 md:pt-44 md:pb-32 overflow-hidden">
      <div ref={sentinelRef} className="absolute top-1/2 left-0 w-px h-px" />

      <div className="relative z-10 mx-auto w-full max-w-container px-8 max-sm:px-5 text-center">
        <div className="mb-5"><EyebrowLabel dark>Insights</EyebrowLabel></div>
        <h1 ref={headingRef}
          className="font-serif italic text-[clamp(2.4rem,5vw,5rem)] font-semibold text-[#0F1524] leading-tight mb-6 max-w-4xl mx-auto">
          AI Insights and<br className="hidden sm:block" /> Thought Leadership
        </h1>
        <p ref={subRef} className="font-sans text-[#3D4A5C] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          Perspectives on AI strategy, policy, and responsible adoption — written for
          leaders who need clarity, not hype.
        </p>
      </div>
    </section>
  );
}

/* ARTICLES — warm off-white, light cards */
function ArticlesSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === activeCategory);

  const showFeatured = activeCategory === 'All' || FEATURED.category === activeCategory;

  return (
    <SectionContainer className="bg-[#F6F3EE] py-10 md:py-16">
      <RevealWrapper className="mb-14">
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
      </RevealWrapper>

      {showFeatured && (
        <div className="mb-8"><FeaturedCard article={FEATURED} /></div>
      )}

      {filtered.length > 0 && (
        <RevealWrapper stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((article) => (
              <ArticleCard key={article.title} article={article} />
            ))}
          </div>
        </RevealWrapper>
      )}

      {filtered.length === 0 && !showFeatured && (
        <RevealWrapper>
          <p className="font-sans text-[#5A6478] text-center py-16">No articles in this category yet.</p>
        </RevealWrapper>
      )}
    </SectionContainer>
  );
}

/* UPDATES CTA */
function UpdatesCTASection() {
  return (
    <section className="relative bg-[#BBC0BB] py-14 md:py-24 lg:py-32 overflow-hidden">
      <RevealWrapper className="relative z-10 mx-auto w-full max-w-container px-8 max-sm:px-5 text-center">
        <EyebrowLabel dark>Stay Informed</EyebrowLabel>
        <h2 className="font-serif text-[clamp(1.9rem,2.8vw,2.6rem)] font-semibold text-[#0F1524] mt-4 mb-5 leading-snug">
          Get the Latest AI Updates
        </h2>
        <p className="font-sans text-[#3D4A5C] text-base leading-relaxed mb-10 max-w-lg mx-auto">
          Be the first to read new insights on AI strategy, policy, and responsible
          adoption across Africa — delivered when it matters.
        </p>
        <MagneticButton variant="gold" href="/contact">Book Discovery Call</MagneticButton>
      </RevealWrapper>
    </section>
  );
}

/* ─── page ────────────────────────────────────────────────────────────────── */

export default function InsightsPage() {
  const heroSentinelRef = useRef(null);
  return (
    <>
      <FloatingNavbar sentinelRef={heroSentinelRef} />
      <main>
        <InsightsHero sentinelRef={heroSentinelRef} />
        <ArticlesSection />
        <UpdatesCTASection />
      </main>
      <Footer />
    </>
  );
}
