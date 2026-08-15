import { HugeiconsIcon } from "@hugeicons/react";

import SearchBar from "./SearchBar";

import { Location01Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#087A3F] via-[#0A8F4B] to-[#12A85A] text-white">
      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top Right Circle */}
        <div
          className="
            absolute
            -right-24
            -top-28
            h-80
            w-80
            rounded-full
            bg-white/10
            blur-2xl
          "
        />

        {/* Bottom Left Circle */}
        <div
          className="
            absolute
            -bottom-32
            -left-28
            h-80
            w-80
            rounded-full
            bg-[#6EE7A0]/15
            blur-3xl
          "
        />

        {/* Middle Glow */}
        <div
          className="
            absolute
            right-[20%]
            top-[35%]
            h-48
            w-48
            rounded-full
            bg-white/5
            blur-3xl
          "
        />

        {/* Pattern */}
        <div
          className="
            absolute
            inset-0
            opacity-30
            [background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)]
            [background-size:22px_22px]
          "
        />
      </div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-5 sm:px-6 sm:pb-14 sm:pt-8 lg:px-8">
        {/* ================= LOCATION ================= */}

        <button
          type="button"
          className="
            mb-5
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/20
            bg-white/15
            px-4
            py-2
            text-sm
            font-semibold
            text-white
            shadow-sm
            backdrop-blur-md
            transition
            hover:bg-white/20
          "
        >
          <HugeiconsIcon icon={Location01Icon} size={17} strokeWidth={2} />

          <span>Chandrapur</span>

          <HugeiconsIcon icon={ArrowRight02Icon} size={14} strokeWidth={2} />
        </button>

        {/* ================= HEADING ================= */}

        <h1
          className="
            max-w-2xl
            text-[34px]
            font-extrabold
            leading-[1.06]
            tracking-[-0.045em]
            text-white
            sm:text-5xl
            lg:text-6xl
          "
        >
          Find trusted local
          <br />
          services near you.
        </h1>

        {/* ================= DESCRIPTION ================= */}

        <p
          className="
            mt-4
            max-w-xl
            text-sm
            leading-6
            text-white/80
            sm:text-base
            sm:leading-7
          "
        >
          Easily find electricians, plumbers, mechanics, cleaners and other
          trusted local service providers.
        </p>

        {/* ================= SEARCH ================= */}

        <div className="mt-6 max-w-3xl">
          <SearchBar placeholder="Search services..." />
        </div>

        {/* ================= CURRENT LOCATION ================= */}

        <button
          type="button"
          className="
            mt-4
            flex
            items-center
            gap-2
            text-xs
            font-medium
            text-white/75
            transition
            hover:text-white
          "
        >
          <HugeiconsIcon icon={Location01Icon} size={15} strokeWidth={2} />

          <span>Showing services in Chandrapur</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
