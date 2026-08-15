import { NavLink } from "react-router-dom";

import { HugeiconsIcon } from "@hugeicons/react";

import {
  Home01Icon,
  GridViewIcon,
  Bookmark01Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";

const navItems = [
  {
    name: "Home",
    path: "/",
    icon: Home01Icon,
  },
  {
    name: "All Services",
    path: "/services",
    icon: GridViewIcon,
  },
  {
    name: "Saved",
    path: "/saved",
    icon: Bookmark01Icon,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: UserIcon,
  },
];

function BottomNavBar() {
  return (
    <nav
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        border-t
        border-[#E5EDE8]
        bg-white/95
        px-3
        pb-[env(safe-area-inset-bottom)]
        pt-2
        shadow-[0_-8px_25px_rgba(15,23,42,0.06)]
        backdrop-blur-xl
        md:hidden
      "
    >
      <div className="mx-auto flex max-w-md items-center justify-around">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `
                flex
                min-w-[68px]
                flex-col
                items-center
                gap-1
                rounded-2xl
                px-2
                py-1.5
                text-[10px]
                font-semibold
                transition
                ${
                  isActive
                    ? "text-[#16A34A]"
                    : "text-[#7A8580] hover:text-[#15803D]"
                }
              `
            }
          >
            {({ isActive }) => (
              <>
                {/* Icon background for active */}

                <div
                  className={`
                    flex
                    h-8
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    transition
                    ${isActive ? "bg-[#ECFDF3]" : "bg-transparent"}
                  `}
                >
                  <HugeiconsIcon
                    icon={item.icon}
                    size={21}
                    strokeWidth={isActive ? 2.2 : 1.7}
                  />
                </div>

                <span>{item.name}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default BottomNavBar;
