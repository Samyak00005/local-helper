import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router-dom";

import { ArrowLeft01Icon, UserCircle02Icon } from "@hugeicons/core-free-icons";

function ProfileHeader() {
  return (
    <section className="bg-white px-4 pb-6 pt-4">
      <div className="mx-auto max-w-7xl">
        {/* Back */}
        <Link
          to="/"
          className="mb-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#6B7280] transition hover:text-[#15803D]"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} size={17} strokeWidth={2} />
          Home
        </Link>

        {/* Profile Intro */}
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#15803D]">
            <HugeiconsIcon
              icon={UserCircle02Icon}
              size={34}
              strokeWidth={1.8}
            />
          </div>

          <div>
            <h1 className="text-[28px] font-bold leading-tight tracking-[-0.03em] text-[#111827]">
              My Profile
            </h1>

            <p className="mt-1 text-sm text-[#6B7280]">
              Manage your details and preferences
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileHeader;
