import { HugeiconsIcon } from "@hugeicons/react";

import { Location01Icon, Menu01Icon } from "@hugeicons/core-free-icons";

function Header() {
  return (
    <header className="border-b border-[#E5E7EB] bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#16A34A] text-white shadow-sm">
            <span className="text-lg font-bold">L</span>
          </div>

          <div>
            <p className="text-[15px] font-bold leading-none tracking-tight text-[#111827]">
              Local Helper
            </p>

            <div className="mt-1 flex items-center gap-1 text-xs text-[#6B7280]">
              <HugeiconsIcon icon={Location01Icon} size={13} strokeWidth={2} />

              <span>Chandrapur</span>
            </div>
          </div>
        </div>

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
