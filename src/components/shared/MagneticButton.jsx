import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const variants = {
  primary: {
    outer: 'bg-[#183A6B] text-[#F5F2EC] hover:bg-[#1E4A87]',
    inner: 'before:absolute before:inset-0 before:bg-[#1E4A87] before:translate-x-[-101%] before:hover:translate-x-0 before:transition-transform before:duration-300 before:ease-out',
  },
  ghost: {
    outer: 'bg-transparent text-[#F5F2EC] border border-white/10 hover:bg-white/5',
    inner: '',
  },
  gold: {
    outer: 'bg-[#B69B74] text-[#0B1220]',
    inner: '',
  },
};

export default function MagneticButton({
  variant = 'primary',
  children,
  href,
  onClick,
  className = '',
}) {
  const btnRef = useRef(null);

  const handlePointerMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    gsap.to(btn, {
      x: offsetX * 0.08,
      y: offsetY * 0.08,
      scale: 1.03,
      duration: 0.25,
      ease: 'power2.out',
    });
  };

  const handlePointerLeave = () => {
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.35,
      ease: 'power2.inOut',
    });
  };

  const { outer, inner } = variants[variant] || variants.primary;

  const baseClasses = `relative inline-flex items-center justify-center overflow-hidden rounded-pill
    px-7 py-3 font-sans font-medium text-sm tracking-wide transition-colors duration-200 cursor-pointer
    ${outer} ${inner} ${className}`;

  const props = {
    ref: btnRef,
    className: baseClasses,
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave,
    onClick,
  };

  if (href) {
    if (href.startsWith('/')) {
      return (
        <Link to={href} {...props}>
          <span className="relative z-10">{children}</span>
        </Link>
      );
    }
    return (
      <a href={href} {...props}>
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button {...props}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
