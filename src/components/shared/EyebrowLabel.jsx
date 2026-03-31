export default function EyebrowLabel({ children, dark = false }) {
  return (
    <span
      className={`inline-block font-sans text-[0.75rem] font-semibold uppercase tracking-widest
        ${dark ? 'text-[#183A6B]' : 'text-[#B69B74]'}`}
    >
      {children}
    </span>
  );
}
