import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";

import { Search02Icon } from "@hugeicons/core-free-icons";

function SearchBar({ placeholder = "Search services...", value, onChange }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 180);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-[58px]">
      {/* ----- SEARCH BAR WRAPPER ----- */}

      <div
        className={
          isScrolled
            ? "fixed left-0 right-0 top-0 z-50 bg-transparent px-4 pb-3 pt-3 transition-all duration-200"
            : ""
        }
      >
        <div className="mx-auto max-w-7xl">
          {/* ----- SEARCH BAR ----- */}

          <div
            className={`
              flex
              min-h-[58px]
              w-full
              items-center
              gap-3
              rounded-4xl
              border
              border-white/30
              bg-white
              px-4
              py-2
              transition-all
              duration-200
              focus-within:ring-4
              focus-within:ring-white/20
              ${
                isScrolled
                  ? "shadow-[0_6px_20px_rgba(0,0,0,0.18)]"
                  : "shadow-[0_12px_35px_rgba(0,0,0,0.15)]"
              }
            `}
          >
            {/* ----- SEARCH ICON ----- */}

            <HugeiconsIcon
              icon={Search02Icon}
              size={22}
              strokeWidth={2}
              className="shrink-0 text-[#6B7280]"
            />

            {/* ----- INPUT ----- */}

            <input
              type="text"
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className="
                min-w-0
                flex-1
                bg-transparent
                text-sm
                font-medium
                text-[#111827]
                outline-none
                placeholder:text-[#9CA3AF]
                sm:text-base
              "
            />

            {/* ----- SEARCH BUTTON ----- */}

            <button
              type="button"
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#16A34A]
                text-white
                shadow-sm
                transition
                hover:bg-[#15803D]
                active:scale-95
              "
              aria-label="Search"
            >
              <HugeiconsIcon icon={Search02Icon} size={19} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
