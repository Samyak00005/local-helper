import { HugeiconsIcon } from "@hugeicons/react";

import {
  Menu01Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";

function ProviderTopBar() {
  return (
    <header
      className="
        sticky
        top-0
        z-40
        flex
        h-[72px]
        items-center
        justify-between
        border-b
        border-[#E5EDE8]
        bg-white/95
        px-4
        backdrop-blur-xl
        sm:px-6
      "
    >
      <div>
        <p className="text-xs font-medium text-[#16A34A]">
          Local Sewa Provider
        </p>

        <h1 className="text-lg font-extrabold text-[#10231A]">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-2">
        {/* Mobile menu */}

        <button
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-[#E5EDE8]
            bg-white
            text-[#475569]
            lg:hidden
          "
        >
          <HugeiconsIcon
            icon={Menu01Icon}
            size={21}
            strokeWidth={2}
          />
        </button>

        {/* Profile */}

        <button
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[#ECFDF3]
            text-[#15803D]
          "
        >
          <HugeiconsIcon
            icon={UserIcon}
            size={21}
            strokeWidth={2}
          />
        </button>
      </div>
    </header>
  );
}

export default ProviderTopBar;