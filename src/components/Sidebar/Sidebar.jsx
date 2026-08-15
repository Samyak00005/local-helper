import { createPortal } from "react-dom";

import SidebarLocation from "./SidebarLocation";
import SidebarLogout from "./SidebarLogout";
import SidebarNavigation from "./SidebarNavigation";
import SidebarProfile from "./SidebarProfile";

/* ------ COMPONENT ----- */

function MobileSidebar({ isOpen, onClose }) {
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
        {/* ----- PROFILE ----- */}

        <SidebarProfile onClose={onClose} />

        {/* ----- LOCATION ----- */}

        <SidebarLocation />

        {/* ----- NAVIGATION ----- */}

        <div className="flex-1 overflow-y-auto">
          <SidebarNavigation onClose={onClose} />
        </div>

        {/* ----- LOGOUT ----- */}

        <div className="shrink-0 bg-[#FAFCFB] pb-3 pt-1">
          <SidebarLogout onClose={onClose} />
        </div>
      </aside>
    </>,
    document.body,
  );
}

export default MobileSidebar;
