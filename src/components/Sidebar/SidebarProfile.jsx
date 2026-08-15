import { Link } from "react-router-dom";

import { HugeiconsIcon } from "@hugeicons/react";

import { ArrowRight02Icon, UserIcon } from "@hugeicons/core-free-icons";

/* ----- SIDEBAR PROFILE ----- */

function SidebarProfile({ onClose }) {
  return (
    <div
      className="
        border-b
        border-[#E5EDE8]
        px-4
        py-3
      "
    >
      <Link
        to="/profile"
        onClick={onClose}
        className="
          flex
          items-center
          gap-3
          rounded-xl
          p-2
          transition
          hover:bg-[#F7FAF8]
          active:scale-[0.99]
        "
      >
        {/* ----- PROFILE PHOTO ----- */}

        <div
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-full
            bg-[#ECFDF3]
            text-[#16A34A]
          "
        >
          {/* Replace this icon with the user's profile image later */}

          <HugeiconsIcon icon={UserIcon} size={22} strokeWidth={1.8} />
        </div>

        {/* ----- PROFILE DETAILS ----- */}

        <div className="min-w-0 flex-1">
          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#9CA3AF]
            "
          >
            Welcome back
          </p>

          <p
            className="
              mt-0.5
              truncate
              text-sm
              font-extrabold
              text-[#10231A]
            "
          >
            Samyak
          </p>

          <p
            className="
              mt-0.5
              text-[11px]
              font-medium
              text-[#16A34A]
            "
          >
            View Profile
          </p>
        </div>

        {/* ----- ARROW ----- */}

        <HugeiconsIcon
          icon={ArrowRight02Icon}
          size={17}
          strokeWidth={1.8}
          className="shrink-0 text-[#9CA3AF]"
        />
      </Link>
    </div>
  );
}

export default SidebarProfile;
