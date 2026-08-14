import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";

import { Search02Icon } from "@hugeicons/core-free-icons";

function SearchBar({
  placeholder = "What service do you need?",
  value = "",
  onChange,
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 180);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-14">
      <div
        className={
          isScrolled
            ? "fixed left-0 right-0 top-0 z-50 px-6 pb-6 pt-6 transition"
            : ""
        }
      >
        <div className="mx-auto max-w-7xl">
          <div
            className={`flex min-h-14 items-center gap-3 rounded-4xl border border-gray-100 bg-white px-4 transition focus-within:border-[#16A34A] focus-within:ring-4 focus-within:ring-[#DCFCE7] ${
              isScrolled
                ? "shadow-[0_6px_20px_rgba(0,0,0,0.18)]"
                : "shadow-none"
            }`}
          >
            <HugeiconsIcon
              icon={Search02Icon}
              size={21}
              strokeWidth={2}
              className="shrink-0 text-[#6B7280]"
            />

            <input
              type="text"
              value={value}
              onChange={(event) => onChange?.(event.target.value)}
              placeholder={placeholder}
              className="min-w-0 flex-1 bg-transparent text-sm font-medium text-[#111827] outline-none placeholder:text-[#9CA3AF]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
