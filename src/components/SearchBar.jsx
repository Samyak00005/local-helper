import { HugeiconsIcon } from "@hugeicons/react";

import { Search02Icon } from "@hugeicons/core-free-icons";

function SearchBar({ placeholder = "Search services...", value, onChange }) {
  return (
    <div
      className="
        flex
        min-h-[58px]
        w-full
        items-center
        gap-3
        rounded-[20px]
        border
        border-white/30
        bg-white
        px-4
        py-2
        shadow-[0_12px_35px_rgba(0,0,0,0.15)]
        transition
        focus-within:ring-4
        focus-within:ring-white/20
      "
    >
      {/* Search Icon */}

      <HugeiconsIcon
        icon={Search02Icon}
        size={22}
        strokeWidth={2}
        className="shrink-0 text-[#6B7280]"
      />

      {/* Input */}

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

      {/* Search Button */}

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
  );
}

export default SearchBar;
