import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import MagneticButton from './MagneticButton';

const NAV_LINKS = [
  { label: 'Home',      href: '/' },
  { label: 'Services',  href: '/services' },
  { label: 'About',     href: '/about' },
  { label: 'Insights',  href: '/insights' },
  { label: 'Speaking',  href: '/services#speaking' },
  { label: 'Contact',   href: '/contact' },
];

export default function FloatingNavbar({ sentinelRef, heroLight = true }) {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location  = useLocation();
  const drawerRef = useRef(null);

  // Close on route change
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  // Sentinel scroll detection
  useEffect(() => {
    if (!sentinelRef?.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [sentinelRef]);

  // GSAP mobile drawer animation
  useEffect(() => {
    const el = drawerRef.current;
    if (!el) return;
    if (mobileOpen) {
      gsap.set(el, { display: 'flex' });
      gsap.fromTo(el,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, ease: 'power3.out' }
      );
      // Stagger the links
      gsap.fromTo(el.querySelectorAll('.drawer-link'),
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out', stagger: 0.06, delay: 0.1 }
      );
    } else {
      gsap.to(el, {
        y: -20, opacity: 0, duration: 0.25, ease: 'power2.in',
        onComplete: () => gsap.set(el, { display: 'none' }),
      });
    }
  }, [mobileOpen]);

  const logoColor   = scrolled ? '#0B1220' : (heroLight ? '#1A2332' : '#F5F2EC');
  const linkColor   = scrolled ? '#5A6478' : (heroLight ? 'rgba(26,35,50,0.62)' : 'rgba(245,242,236,0.75)');
  const activeColor = scrolled ? '#0B1220' : (heroLight ? '#1A2332' : '#F5F2EC');
  const burgerColor = scrolled ? '#0B1220' : (heroLight ? '#1A2332' : '#F5F2EC');

  return (
    <>
      <nav
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6
          px-5 py-3 rounded-pill transition-all duration-500
          ${scrolled
            ? 'bg-white/85 backdrop-blur-xl border border-[#0B1220]/10 shadow-soft'
            : 'bg-transparent border border-transparent'
          }`}
        style={{ width: 'min(960px, calc(100vw - 24px))' }}
      >
        {/* Wordmark */}
        <Link
          to="/"
          className="font-serif text-xl font-semibold tracking-wider mr-auto shrink-0"
          style={{ color: logoColor, transition: 'color 0.4s' }}
        >
          KAABOK
        </Link>

        {/* Desktop links — hidden below md */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = location.pathname === href || location.pathname === href.split('#')[0];
            return (
              <li key={label}>
                <Link
                  to={href}
                  className="font-sans text-[0.9rem]"
                  style={{
                    color: isActive ? activeColor : linkColor,
                    transition: 'color 0.4s',
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block shrink-0">
          <MagneticButton variant="gold" href="/contact" className="text-xs py-2 px-5">
            Book Discovery Call
          </MagneticButton>
        </div>

        {/* Hamburger — visible below md, min 44px touch target */}
        <button
          className="md:hidden ml-auto flex items-center justify-center w-11 h-11 rounded-lg"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{ color: burgerColor, transition: 'color 0.4s' }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer — always in DOM, GSAP controls display */}
      <div
        ref={drawerRef}
        style={{ display: 'none' }}
        className="fixed inset-0 z-40 bg-[#0B1220]/96 backdrop-blur-xl flex-col items-center justify-center gap-2 md:hidden"
      >
        {/* Close button */}
        <button
          className="absolute top-6 right-6 flex items-center justify-center w-11 h-11 text-[#F5F2EC] rounded-lg"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={label}
            to={href}
            onClick={() => setMobileOpen(false)}
            className="drawer-link font-serif text-3xl text-[#F5F2EC] hover:text-[#B69B74] transition-colors
              min-h-[48px] flex items-center px-8"
          >
            {label}
          </Link>
        ))}

        <div className="drawer-link mt-6 w-full px-8 max-w-xs">
          <MagneticButton
            variant="gold"
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="w-full justify-center py-4"
          >
            Book Discovery Call
          </MagneticButton>
        </div>
      </div>
    </>
  );
}
