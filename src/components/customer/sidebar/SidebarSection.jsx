/* ----- SIDEBAR SECTION ----- */

function SidebarSection({ label, children }) {
  return (
    <section className="mb-4">
      {/* ----- SECTION LABEL ----- */}

      <p
        className="
          mb-1.5
          px-3
          text-[9px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-[#9CA3AF]
        "
      >
        {label}
      </p>

      {/* ----- SECTION ITEMS ----- */}

      <div className="space-y-0.5">{children}</div>
    </section>
  );
}

export default SidebarSection;
