import { NavLink, Link } from "react-router-dom";

import { HugeiconsIcon } from "@hugeicons/react";

import {
  Home01Icon,
  GridViewIcon,
  Bookmark01Icon,
  StarIcon,
  UserIcon,
  ArrowLeft01Icon,
} from "@hugeicons/core-free-icons";

const menuItems = [
  {
    name: "Dashboard",
    path: "/provider/dashboard",
    icon: Home01Icon,
  },

  {
    name: "Service Requests",
    path: "/provider/requests",
    icon: Bookmark01Icon,
  },

  {
    name: "My Services",
    path: "/provider/services",
    icon: GridViewIcon,
  },

  {
    name: "Reviews",
    path: "/provider/reviews",
    icon: StarIcon,
  },

  {
    name: "Business Profile",
    path: "/provider/profile",
    icon: UserIcon,
  },
];

function ProviderSidebar() {
  return (
    <aside className="hidden min-h-screen w-[270px] shrink-0 border-r border-[#E5EDE8] bg-white lg:flex lg:flex-col">
      {/* Logo */}

      <div className="flex h-[82px] items-center border-b border-[#E5EDE8] px-5">
        <Link to="/">
          <img
            src="/logo 2.png"
            alt="Local Sewa"
            className="h-14 w-36 object-contain"
          />
        </Link>
      </div>

      {/* Provider label */}

      <div className="px-5 pb-3 pt-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9CA3AF]">
          Provider Panel
        </p>
      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-1 px-3">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `
                flex
                items-center
                gap-3
                rounded-[14px]
                px-4
                py-3
                text-sm
                font-semibold
                transition

                ${
                  isActive
                    ? "bg-[#ECFDF3] text-[#15803D]"
                    : "text-[#64748B] hover:bg-[#F7FAF8] hover:text-[#10231A]"
                }
              `
            }
          >
            {({ isActive }) => (
              <>
                <HugeiconsIcon
                  icon={item.icon}
                  size={20}
                  strokeWidth={isActive ? 2.2 : 1.8}
                />

                {item.name}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Back to customer */}

      <div className="border-t border-[#E5EDE8] p-4">
        <Link
          to="/"
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-[#F7FAF8]
            px-4
            py-3
            text-sm
            font-semibold
            text-[#64748B]
            transition
            hover:bg-[#ECFDF3]
            hover:text-[#15803D]
          "
        >
          <HugeiconsIcon
            icon={ArrowLeft01Icon}
            size={18}
            strokeWidth={2}
          />

          Switch to Customer
        </Link>
      </div>
    </aside>
  );
}

export default ProviderSidebar;