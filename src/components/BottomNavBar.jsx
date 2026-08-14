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
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#E5E7EB] bg-white/95 px-3 pb-[env(safe-area-inset-bottom)] pt-2 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-around">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex min-w-16 flex-col items-center gap-1 rounded-xl px-3 py-1.5 text-[11px] font-medium transition ${
                isActive
                  ? "text-[#16A34A]"
                  : "text-[#6B7280] hover:text-[#111827]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <HugeiconsIcon
                  icon={item.icon}
                  size={21}
                  strokeWidth={isActive ? 2 : 1.7}
                />

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
