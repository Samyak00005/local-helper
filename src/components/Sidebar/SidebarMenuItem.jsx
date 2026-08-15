import { NavLink } from "react-router-dom";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

function SidebarMenuItem({ name, path, icon, onClick, highlight = false }) {
  return (
    <NavLink
      to={path}
      onClick={onClick}
      end={path === "/"}
      className={({ isActive }) => `
        group
        flex
        items-center
        gap-3
        rounded-xl
        px-3
        py-2.5
        transition
        duration-200
        ${
          highlight
            ? "bg-[#F0FDF4] text-[#15803D]"
            : isActive
              ? "bg-[#F0FDF4] text-[#15803D]"
              : "text-[#475569] hover:bg-[#F7FAF8] hover:text-[#15803D]"
        }
      `}
    >
      {({ isActive }) => (
        <>
          {/* ----- ICON ----- */}

          <div
            className={`
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-lg
              transition
              ${
                highlight || isActive
                  ? "bg-[#ECFDF3] text-[#16A34A]"
                  : "bg-[#F7FAF8] text-[#64748B]"
              }
            `}
          >
            <HugeiconsIcon
              icon={icon}
              size={17}
              strokeWidth={highlight || isActive ? 1.9 : 1.6}
            />
          </div>

          {/* ----- NAME ----- */}

          <span
            className={`
              flex-1
              text-sm
              ${highlight || isActive ? "font-bold" : "font-medium"}
            `}
          >
            {name}
          </span>

          {/* ----- ARROW ----- */}

          {(highlight || isActive) && (
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              size={15}
              strokeWidth={1.8}
              className="text-[#16A34A]"
            />
          )}
        </>
      )}
    </NavLink>
  );
}

export default SidebarMenuItem;
