import { Link } from 'react-router-dom';

const FOOTER_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About',    href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Speaking', href: '/services#speaking' },
  { label: 'Contact',  href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#BBC0BB] border-t border-[#0B1220]/12">
      <div className="mx-auto w-full max-w-container px-8 max-sm:px-5 py-12">
        {/* Top row — stacks vertically on mobile */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-6 mb-8">
          <Link to="/" className="font-serif text-2xl font-semibold tracking-wider text-[#0F1524]">
            KAABOK
          </Link>

          {/* Links — column on mobile, row on sm+ */}
          <ul className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-end sm:gap-x-8 sm:gap-y-2">
            {FOOTER_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  to={href}
                  className="font-sans text-sm text-[#5A6478] hover:text-[#0F1524] transition-colors duration-200
                    min-h-[44px] flex items-center"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-[#0B1220]/12 pt-8">
          <p className="font-sans text-xs text-[#5A6478] text-center leading-relaxed max-w-2xl mx-auto">
            © {new Date().getFullYear()} Kaabok. AI strategy consultancy for governments, enterprises,
            and institutions across Africa. AI consulting · Executive education · Keynote speaking ·
            AI policy advisory.
          </p>
        </div>
      </div>
    </footer>
  );
}
