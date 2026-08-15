import { NavLink } from "react-router-dom";

import { HugeiconsIcon } from "@hugeicons/react";

import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

/* ----- SIDEBAR MENU ITEM ----- */

function SidebarMenuItem({
  name,
  path,
  icon,
  onClick,
  danger = false,
  highlight = false,
}) {
  return (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) =>
        `
          flex
          items-center
          gap-3
          rounded-xl
          px-3
          py-2.5
          transition
          ${
            danger
              ? "text-[#DC2626] hover:bg-[#FEF2F2]"
              : isActive || highlight
                ? "bg-[#F0FDF4] text-[#15803D]"
                : "text-[#475569] hover:bg-[#F7FAF8] hover:text-[#15803D]"
          }
        `
      }
    >
      {({ isActive }) => {
        const active = isActive || highlight;

        return (
          <>
            {/* ----- ICON ----- */}

            <div
              className={`
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                transition
                ${
                  danger
                    ? "bg-[#FEF2F2] text-[#DC2626]"
                    : active
                      ? "bg-[#ECFDF3] text-[#16A34A]"
                      : "bg-[#F7FAF8] text-[#64748B]"
                }
              `}
            >
              <HugeiconsIcon
                icon={icon}
                size={19}
                strokeWidth={active || danger ? 2 : 1.7}
              />
            </div>

            {/* ----- LABEL ----- */}

            <span
              className={`
                flex-1
                text-sm
                ${active || danger ? "font-bold" : "font-semibold"}
              `}
            >
              {name}
            </span>

            {/* ----- ARROW ----- */}

            {(active || danger) && (
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                size={15}
                strokeWidth={1.8}
                className={danger ? "text-[#DC2626]" : "text-[#16A34A]"}
              />
            )}
          </>
        );
      }}
    </NavLink>
  );
}

export default SidebarMenuItem;
