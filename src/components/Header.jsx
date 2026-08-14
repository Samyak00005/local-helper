import { HugeiconsIcon } from "@hugeicons/react";

import { Menu01Icon } from "@hugeicons/core-free-icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b border-[#E5E7EB] bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-2">
        {/* Logo */}
        <Link to="/">
          <div className="flex h-16 w-26 items-center justify-center overflow-hidden rounded-xl">
            <img
              src="/logo 2.png"
              alt="Local Helper"
              className="h-full w-full object-contain"
            />
          </div>
        </Link>

        {/* Menu */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E7EB] bg-white text-[#374151] transition hover:bg-[#F1F5F9]"
          aria-label="Open menu"
        >
          <HugeiconsIcon icon={Menu01Icon} size={21} strokeWidth={2} />
        </button>
      </div>
    </header>
  );
}

export default Header;
