import { Link } from "react-router-dom";

import { HugeiconsIcon } from "@hugeicons/react";

import {
  GridViewIcon,
  Bookmark01Icon,
  UserIcon,
  StarIcon,
} from "@hugeicons/core-free-icons";

function ProviderQuickActions() {
  const actions = [
    {
      name: "Requests",
      description: "View new customer requests",
      path: "/provider/requests",
      icon: Bookmark01Icon,
    },

    {
      name: "My Services",
      description: "Add or manage services",
      path: "/provider/services",
      icon: GridViewIcon,
    },

    {
      name: "Profile",
      description: "Update business profile",
      path: "/provider/profile",
      icon: UserIcon,
    },

    {
      name: "Reviews",
      description: "See customer feedback",
      path: "/provider/reviews",
      icon: StarIcon,
    },
  ];

  return (
    <section>
      <div className="mb-4">
        <h2 className="text-lg font-extrabold text-[#10231A]">
          Quick Actions
        </h2>

        <p className="mt-1 text-xs text-[#64748B]">
          Manage your business quickly
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {actions.map((action) => (
          <Link
            key={action.name}
            to={action.path}
            className="
              group
              rounded-[18px]
              border
              border-[#E5EDE8]
              bg-white
              p-4
              transition
              hover:-translate-y-0.5
              hover:border-[#BBF7D0]
              hover:shadow-md
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-[#ECFDF3]
                text-[#15803D]
              "
            >
              <HugeiconsIcon
                icon={action.icon}
                size={21}
                strokeWidth={1.9}
              />
            </div>

            <h3 className="mt-3 text-sm font-bold text-[#10231A]">
              {action.name}
            </h3>

            <p className="mt-1 hidden text-xs leading-5 text-[#94A3B8] sm:block">
              {action.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProviderQuickActions;