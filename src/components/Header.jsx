import { Menu01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { Link } from "react-router-dom";

import MobileSidebar from "./Sidebar";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-white/10 bg-[#087A3F]">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ----- LOGO ----- */}

        <Link to="/" className="flex items-center" aria-label="Local Sewa Home">
          <div className="flex h-13 w-30 items-center justify-center overflow-hidden">
            <img
              src="/logo 2.png"
              alt="Local Sewa"
              className="h-full w-full object-contain"
            />
          </div>
        </Link>

        {/* ----- MENU ----- */}

        <button
          type="button"
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open menu"
          className="
            flex h-11 w-11 items-center justify-center
            rounded-2xl
            border border-white/20
            bg-white/10
            text-white
            backdrop-blur-md
            transition
            hover:bg-white/20
            active:scale-95
          "
          aria-label="Open menu"
        >
          <HugeiconsIcon icon={Menu01Icon} size={23} strokeWidth={2} />
        </button>
      </div>
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </header>
  );
}

export default Header;
