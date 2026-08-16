import { NavLink } from "react-router-dom";

import { HugeiconsIcon } from "@hugeicons/react";

import {
  Home01Icon,
  Bookmark01Icon,
  GridViewIcon,
  UserIcon,
} from "@hugeicons/core-free-icons";

const navItems = [
  {
    name: "Dashboard",
    path: "/provider/dashboard",
    icon: Home01Icon,
  },

  {
    name: "Requests",
    path: "/provider/requests",
    icon: Bookmark01Icon,
  },

  {
    name: "Services",
    path: "/provider/services",
    icon: GridViewIcon,
  },

  {
    name: "Profile",
    path: "/provider/profile",
    icon: UserIcon,
  },
];

function ProviderBottomNav() {
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
        lg:hidden
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
                rounded-xl
                px-2
                py-1.5
                text-[10px]
                font-semibold
                ${
                  isActive
                    ? "text-[#16A34A]"
                    : "text-[#7A8580]"
                }
              `
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={`
                    flex
                    h-8
                    w-10
                    items-center
                    justify-center
                    rounded-xl

                    ${
                      isActive
                        ? "bg-[#ECFDF3]"
                        : ""
                    }
                  `}
                >
                  <HugeiconsIcon
                    icon={item.icon}
                    size={20}
                    strokeWidth={isActive ? 2.2 : 1.7}
                  />
                </div>

                {item.name}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default ProviderBottomNav;