import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function RevealWrapper({ children, delay = 0, stagger = false, className = '' }) {
  const wrapRef = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const targets = stagger ? el.children : el;

      gsap.fromTo(
        targets,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          delay,
          stagger: stagger ? 0.12 : 0,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, stagger]);

  return (
    <div ref={wrapRef} className={className}>
      {children}
    </div>
  );
}
