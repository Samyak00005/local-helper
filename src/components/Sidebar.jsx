import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink } from "react-router-dom";

import {
  Alert02Icon,
  ArrowRight02Icon,
  Cancel01Icon,
  File02Icon,
  HelpCircleIcon,
  Location01Icon,
  Logout01Icon,
  Message01Icon,
  Notification01Icon,
  Settings02Icon,
  Shield01Icon,
  UserAdd01Icon,
} from "@hugeicons/core-free-icons";

/* ----- SIDEBAR MENU ITEMS ----- */

const menuItems = [
  {
    name: "Messages",
    path: "/messages",
    icon: Message01Icon,
  },
  {
    name: "Notifications",
    path: "/notifications",
    icon: Notification01Icon,
  },
];

/* ----- SUPPORT MENU ITEMS ----- */

const supportItems = [
  {
    name: "Help & Support",
    path: "/support",
    icon: HelpCircleIcon,
  },
  {
    name: "Terms & Conditions",
    path: "/terms",
    icon: File02Icon,
  },
  {
    name: "Privacy Policy",
    path: "/privacy",
    icon: Shield01Icon,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings02Icon,
  },
];

function MobileSidebar({ isOpen, onClose }) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return createPortal(
    <>
      {/* ----- BACKDROP ----- */}
      <div
        onClick={onClose}
        className={`
    fixed
    inset-0
    z-[9998]
    bg-black/35
    backdrop-blur-[2px]
    transition-opacity
    duration-300
    md:hidden
    ${
      isOpen
        ? "pointer-events-auto opacity-100"
        : "pointer-events-none opacity-0"
    }
  `}
      />
      {/* ----- SIDEBAR ----- */}
      <aside
        className={`
    fixed
    right-0
    top-0
    z-[9999]
    flex
    h-full
    w-[78%]
    max-w-[320px]
    flex-col
    bg-white
    shadow-[-12px_0_40px_rgba(15,23,42,0.15)]
    transition-transform
    duration-300
    ease-out
    md:hidden
    ${isOpen ? "translate-x-0" : "translate-x-full"}
  `}
      >
        {/* ----- PROFILE HEADER ----- */}

        <div
          className="
    flex
    items-center
    justify-between
    border-b
    border-[#E5EDE8]
    px-4
    py-3
  "
        >
          {/* ----- PROFILE ----- */}

          <Link
            to="/profile"
            onClick={onClose}
            className="
      flex
      min-w-0
      items-center
      gap-3
      rounded-xl
      px-1
      py-1
      transition
      hover:bg-[#F7FAF8]
    "
          >
            {/* ----- PROFILE PHOTO ----- */}

            <div
              className="
        h-10
        w-10
        shrink-0
        overflow-hidden
        rounded-full
        border
        border-[#DDE9E1]
        bg-[#ECFDF3]
      "
            >
              <img
                src="/profile.jpg"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>

            {/* ----- PROFILE DETAILS ----- */}

            <div className="min-w-0">
              <p
                className="
          truncate
          text-lg
          font-extrabold
          text-[#10231A]
        "
              >
                Samyak
              </p>

              <p
                className="
          mt-0.5
          text-[10px]
          font-semibold
          text-[#16A34A]
        "
              >
                View Profile →
              </p>
            </div>
          </Link>

          {/* ----- CLOSE BUTTON ----- */}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="
      flex
      h-9
      w-9
      shrink-0
      items-center
      justify-center
      rounded-xl
      bg-[#F1F5F3]
      text-[#475569]
      transition
      hover:bg-[#E5EDE8]
      hover:text-[#15803D]
      active:scale-95
    "
          >
            <HugeiconsIcon icon={Cancel01Icon} size={19} strokeWidth={1.8} />
          </button>
        </div>

        {/* ----- SIDEBAR CONTENT ----- */}

        <nav className="flex-1 overflow-y-auto px-3 py-3">
          {/* ----- LOCATION ----- */}

          <div
            className="
              mb-4
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-[#DDE9E1]
              bg-[#F7FAF8]
              px-3
              py-2.5
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
                rounded-lg
                bg-[#ECFDF3]
                text-[#16A34A]
              "
            >
              <HugeiconsIcon
                icon={Location01Icon}
                size={18}
                strokeWidth={1.8}
              />
            </div>

            {/* ----- LOCATION TEXT ----- */}

            <div className="min-w-0 flex-1">
              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-wide
                  text-[#9CA3AF]
                "
              >
                Your location
              </p>

              <p
                className="
                  truncate
                  text-xs
                  font-bold
                  text-[#10231A]
                "
              >
                Chandrapur
              </p>
            </div>

            {/* ----- LOCATION ARROW ----- */}

            <HugeiconsIcon
              icon={ArrowRight02Icon}
              size={15}
              strokeWidth={1.8}
              className="text-[#9CA3AF]"
            />
          </div>

          {/* ----- QUICK ACTIONS ----- */}

          <SidebarSection
            label="Quick Access"
            items={menuItems}
            onClose={onClose}
          />

          {/* ----- EMERGENCY SERVICES ----- */}

          <div className="mt-5">
            <p
              className="
                mb-2
                px-2
                text-[9px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#9CA3AF]
              "
            >
              Emergency
            </p>

            <NavLink
              to="/emergency"
              onClick={onClose}
              className="
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-[#BBF7D0]
                bg-[#F0FDF4]
                px-3
                py-2.5
                text-[#15803D]
                transition
                hover:bg-[#DCFCE7]
              "
            >
              {/* ----- ICON ----- */}

              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-white
                  text-[#16A34A]
                "
              >
                <HugeiconsIcon icon={Alert02Icon} size={19} strokeWidth={1.8} />
              </div>

              {/* ----- LABEL ----- */}

              <div className="min-w-0 flex-1">
                <span className="block text-xs font-bold">
                  Emergency Services
                </span>

                <span className="block text-[10px] text-[#4D7C5D]">
                  Get urgent local help
                </span>
              </div>

              <HugeiconsIcon
                icon={ArrowRight02Icon}
                size={15}
                strokeWidth={1.8}
                className="text-[#16A34A]"
              />
            </NavLink>
          </div>

          {/* ----- SERVICE PROVIDER ----- */}

          <div className="mt-5">
            <p
              className="
                mb-2
                px-2
                text-[9px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#9CA3AF]
              "
            >
              For Helpers
            </p>

            <NavLink
              to="/become-provider"
              onClick={onClose}
              className="
                flex
                items-center
                gap-3
                rounded-xl
                px-2
                py-2
                text-[#475569]
                transition
                hover:bg-[#F7FAF8]
                hover:text-[#15803D]
              "
            >
              {/* ----- ICON ----- */}

              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#F7FAF8]
                  text-[#64748B]
                "
              >
                <HugeiconsIcon
                  icon={UserAdd01Icon}
                  size={19}
                  strokeWidth={1.7}
                />
              </div>

              {/* ----- LABEL ----- */}

              <span className="flex-1 text-xs font-semibold">
                Become a Service Provider
              </span>

              <HugeiconsIcon
                icon={ArrowRight02Icon}
                size={15}
                strokeWidth={1.7}
                className="text-[#9CA3AF]"
              />
            </NavLink>
          </div>

          {/* ----- SUPPORT ----- */}

          <div className="mt-5">
            <SidebarSection
              label="Support"
              items={supportItems}
              onClose={onClose}
            />
          </div>

          {/* ----- LOGOUT ----- */}

          <div className="mt-4 border-t border-[#E5EDE8] pt-3">
            <button
              type="button"
              onClick={() => setShowLogoutModal(true)}
              className="
      flex
      w-full
      items-center
      gap-3
      rounded-xl
      px-2
      py-2.5
      text-[#DC2626]
      transition
      hover:bg-[#FEF2F2]
      active:scale-[0.98]
    "
            >
              {/* ----- LOGOUT ICON ----- */}

              <div
                className="
        flex
        h-9
        w-9
        shrink-0
        items-center
        justify-center
        rounded-lg
        bg-[#FEF2F2]
        text-[#DC2626]
      "
              >
                <HugeiconsIcon
                  icon={Logout01Icon}
                  size={19}
                  strokeWidth={1.8}
                />
              </div>

              {/* ----- LABEL ----- */}

              <span className="text-xs font-bold">Logout</span>
            </button>
          </div>
        </nav>

        {/* ----- SIDEBAR FOOTER ----- */}

        <div
          className="
            border-t
            border-[#E5EDE8]
            bg-[#FAFCFB]
            px-4
            py-2.5
          "
        >
          <p className="text-center text-[10px] text-[#9CA3AF]">
            Find trusted local helpers near you
          </p>
        </div>
      </aside>

      {/* ----- LOGOUT CONFIRMATION MODAL ----- */}

      {showLogoutModal && (
        <div
          className="
      fixed
      inset-0
      z-[10000]
      flex
      items-center
      justify-center
      bg-black/40
      px-5
      backdrop-blur-[2px]
    "
        >
          <div
            className="
        w-full
        max-w-[320px]
        rounded-[22px]
        border
        border-[#E5EDE8]
        bg-white
        p-5
        shadow-[0_20px_60px_rgba(15,23,42,0.20)]
      "
          >
            {/* ----- MODAL ICON ----- */}

            <div
              className="
          mx-auto
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-[#FEF2F2]
          text-[#DC2626]
        "
            >
              <HugeiconsIcon icon={Logout01Icon} size={23} strokeWidth={1.8} />
            </div>

            {/* ----- MODAL TITLE ----- */}

            <h3
              className="
          mt-4
          text-center
          text-base
          font-extrabold
          text-[#10231A]
        "
            >
              Really logout?
            </h3>

            {/* ----- MODAL DESCRIPTION ----- */}

            <p
              className="
          mx-auto
          mt-1
          max-w-[240px]
          text-center
          text-xs
          leading-5
          text-[#6B7280]
        "
            >
              Are you sure you want to logout from your account?
            </p>

            {/* ----- MODAL ACTIONS ----- */}

            <div className="mt-5 grid grid-cols-2 gap-3">
              {/* ----- CANCEL ----- */}

              <button
                type="button"
                onClick={() => setShowLogoutModal(false)}
                className="
            h-10
            rounded-xl
            border
            border-[#DDE9E1]
            bg-white
            text-xs
            font-bold
            text-[#475569]
            transition
            hover:bg-[#F7FAF8]
            active:scale-[0.98]
          "
              >
                Cancel
              </button>

              {/* ----- LOGOUT ----- */}

              <button
                type="button"
                onClick={() => {
                  setShowLogoutModal(false);
                  onClose();

                  // ----- LOGOUT LOGIC WILL BE ADDED HERE -----
                }}
                className="
            h-10
            rounded-xl
            bg-[#DC2626]
            text-xs
            font-bold
            text-white
            shadow-sm
            transition
            hover:bg-[#B91C1C]
            active:scale-[0.98]
          "
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>,
    document.body,
  );
}
/* -----  SIDEBAR SECTION ----- */

function SidebarSection({ label, items, onClose }) {
  return (
    <>
      {/* ----- SECTION LABEL ----- */}

      <p
        className="
          mb-1.5
          px-2
          text-[9px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-[#9CA3AF]
        "
      >
        {label}
      </p>

      {/* ----- SECTION ITEMS ----- */}

      <div className="space-y-0.5">
        {items.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
              `
                flex
                items-center
                gap-3
                rounded-xl
                px-2
                py-2
                transition
                ${
                  isActive
                    ? "bg-[#F0FDF4] text-[#15803D]"
                    : "text-[#475569] hover:bg-[#F7FAF8] hover:text-[#15803D]"
                }
              `
            }
          >
            {({ isActive }) => (
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
                    rounded-lg
                    transition
                    ${
                      isActive
                        ? "bg-[#ECFDF3] text-[#16A34A]"
                        : "bg-[#F7FAF8] text-[#64748B]"
                    }
                  `}
                >
                  <HugeiconsIcon
                    icon={item.icon}
                    size={18}
                    strokeWidth={isActive ? 2 : 1.7}
                  />
                </div>

                {/* ----- LABEL ----- */}

                <span
                  className={`
                    flex-1
                    text-xs
                    ${isActive ? "font-bold" : "font-semibold"}
                  `}
                >
                  {item.name}
                </span>

                {/* ----- ACTIVE ARROW ----- */}

                {isActive && (
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
        ))}
      </div>
    </>
  );
}

export default MobileSidebar;
