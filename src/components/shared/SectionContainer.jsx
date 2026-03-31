export default function SectionContainer({ children, className = '', id }) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto w-full max-w-container px-8 max-sm:px-5">
        {children}
      </div>
    </section>
  );
}
