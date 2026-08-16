import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HugeiconsIcon } from "@hugeicons/react";

import {
  Briefcase01Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";

/* ----- ROLES ----- */

const roles = [
  {
    id: "client",
    name: "Client",
    icon: UserIcon,
  },
  {
    id: "provider",
    name: "Service Provider",
    icon: Briefcase01Icon,
  },
];

/* =========================================================
   COMPONENT
========================================================= */

function SidebarRoleSwitcher() {
  const navigate = useNavigate();

  const [activeRole, setActiveRole] = useState("client");

  /* =======================================================
     ROLE SWITCH
  ======================================================= */

  const handleRoleSwitch = (roleId) => {
    setActiveRole(roleId);

    if (roleId === "provider") {
      navigate("/provider/dashboard");
      return;
    }

    if (roleId === "client") {
      navigate("/");
    }
  };

  return (
    <div className="px-4 py-3">
      {/* ----- LABEL ----- */}

      <p
        className="
          mb-1.5
          px-1
          text-[9px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-[#9CA3AF]
        "
      >
        Switch Mode
      </p>

      {/* ----- SWITCH ----- */}

      <div
        className="
          grid
          grid-cols-2
          rounded-xl
          border
          border-[#E5EDE8]
          bg-[#F1F5F3]
          p-1
        "
      >
        {roles.map((role) => {
          const isActive = activeRole === role.id;

          return (
            <button
              key={role.id}
              type="button"
              onClick={() => handleRoleSwitch(role.id)}
              className={`
                flex
                items-center
                justify-center
                gap-1.5
                rounded-lg
                px-2
                py-2
                text-[11px]
                font-semibold
                transition-all
                duration-200

                ${
                  isActive
                    ? "bg-white text-[#15803D] shadow-sm"
                    : "text-[#64748B] hover:text-[#15803D]"
                }
              `}
            >
              <HugeiconsIcon
                icon={role.icon}
                size={15}
                strokeWidth={isActive ? 2 : 1.6}
              />

              <span>{role.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SidebarRoleSwitcher;