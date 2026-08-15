import { HugeiconsIcon } from "@hugeicons/react";

import { ArrowRight02Icon, Location01Icon } from "@hugeicons/core-free-icons";

/* ----- SIDEBAR LOCATION ----- */

function SidebarLocation() {
  return (
    <div className="px-4 pt-3">
      <button
        type="button"
        className="
          flex
          w-full
          items-center
          gap-3
          rounded-xl
          border
          border-[#DDE9E1]
          bg-[#F7FAF8]
          px-3
          py-2.5
          text-left
          transition
          hover:border-[#BBF7D0]
          hover:bg-[#F0FDF4]
        "
      >
        {/* ----- LOCATION ICON ----- */}

        <div
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-[#ECFDF3]
            text-[#16A34A]
          "
        >
          <HugeiconsIcon icon={Location01Icon} size={19} strokeWidth={1.8} />
        </div>

        {/* ----- LOCATION DETAILS ----- */}

        <div className="min-w-0 flex-1">
          <p
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#9CA3AF]
            "
          >
            Your location
          </p>

          <p
            className="
              mt-0.5
              truncate
              text-xs
              font-bold
              text-[#10231A]
            "
          >
            Chandrapur
          </p>
        </div>

        {/* ----- ARROW ----- */}

        <HugeiconsIcon
          icon={ArrowRight02Icon}
          size={16}
          strokeWidth={1.8}
          className="shrink-0 text-[#9CA3AF]"
        />
      </button>
    </div>
  );
}

export default SidebarLocation;
