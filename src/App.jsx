import { useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HomePage      from './pages/HomePage';
import ServicesPage  from './pages/ServicesPage';
import AboutPage     from './pages/AboutPage';
import InsightsPage  from './pages/InsightsPage';
import ContactPage   from './pages/ContactPage';

import './index.css';

gsap.registerPlugin(ScrollTrigger);

function RouteTransitionWrapper({ children }) {
  const location  = useLocation();
  const mainRef   = useRef(null);
  const firstRender = useRef(true);

  useEffect(() => {
    // Skip fade-out on very first mount
    if (firstRender.current) {
      firstRender.current = false;
      gsap.fromTo(mainRef.current,
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
      );
      return;
    }

    // Fade out → scroll to top → fade in
    gsap.to(mainRef.current, {
      opacity: 0,
      y: 6,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        window.scrollTo({ top: 0 });
        ScrollTrigger.refresh();
        gsap.to(mainRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power3.out',
        });
      },
    });
  }, [location.pathname]);

  return <div ref={mainRef}>{children}</div>;
}

function AppRoutes() {
  return (
    <RouteTransitionWrapper>
      <Routes>
        <Route path="/"         element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about"    element={<AboutPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/contact"  element={<ContactPage />} />
      </Routes>
    </RouteTransitionWrapper>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
