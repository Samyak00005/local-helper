import { HugeiconsIcon } from "@hugeicons/react";
import SearchBar from "./SearchBar";

import { Location01Icon } from "@hugeicons/core-free-icons";

function Hero() {
  return (
    <section className="bg-white px-4 pb-5 pt-4">
      <div className="mx-auto max-w-7xl">
        {/* Small Label */}
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#DCFCE7] px-3 py-1.5 text-xs font-semibold text-[#15803D]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
          Local services around you
        </div>

        {/* Heading */}
        <h1 className="max-w-xl text-[32px] font-bold leading-[1.12] tracking-[-0.03em] text-[#111827] sm:text-4xl">
          Find trusted local
          <br />
          services near you.
        </h1>

        {/* Description */}
        <p className="mt-3 max-w-lg text-sm leading-6 text-[#6B7280]">
          Easily find electricians, plumbers, mechanics, cleaners and other
          local service providers.
        </p>

        {/* Search */}
        <SearchBar placeholder="Search services..." />

        {/* Quick Location */}
        <button
          type="button"
          className="mt-3 flex items-center gap-1.5 text-xs font-medium text-[#6B7280] transition hover:text-[#15803D]"
        >
          <HugeiconsIcon icon={Location01Icon} size={14} strokeWidth={2} />

          <span>Showing services in Chandrapur</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
