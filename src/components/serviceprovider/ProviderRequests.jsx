import { HugeiconsIcon } from "@hugeicons/react";

import {
  Call02Icon,
  Location01Icon,
  ArrowRight02Icon,
} from "@hugeicons/core-free-icons";

import { Link } from "react-router-dom";

function ProviderRequests({ requests }) {
  return (
    <section>
      {/* Header */}

      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-extrabold text-[#10231A]">
            Recent Requests
          </h2>

          <p className="mt-1 text-xs text-[#64748B]">
            Latest customer service requests
          </p>
        </div>

        <Link
          to="/provider/requests"
          className="flex items-center gap-1 text-sm font-bold text-[#15803D]"
        >
          View all

          <HugeiconsIcon
            icon={ArrowRight02Icon}
            size={16}
            strokeWidth={2}
          />
        </Link>
      </div>

      {/* Requests */}

      <div className="space-y-3">
        {requests.map((request) => (
          <div
            key={request.id}
            className="
              rounded-[20px]
              border
              border-[#E5EDE8]
              bg-white
              p-4
              shadow-[0_3px_14px_rgba(15,23,42,0.03)]
            "
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="font-bold text-[#10231A]">
                  {request.service}
                </h3>

                <p className="mt-1 text-sm font-medium text-[#475569]">
                  {request.customerName}
                </p>

                <div className="mt-2 flex items-center gap-1 text-xs text-[#94A3B8]">
                  <HugeiconsIcon
                    icon={Location01Icon}
                    size={13}
                    strokeWidth={2}
                  />

                  {request.location}
                </div>
              </div>

              <span
                className={`
                  shrink-0
                  rounded-full
                  px-2.5
                  py-1
                  text-[10px]
                  font-bold

                  ${
                    request.status === "Accepted"
                      ? "bg-[#DCFCE7] text-[#15803D]"
                      : "bg-[#FEF3C7] text-[#B45309]"
                  }
                `}
              >
                {request.status}
              </span>
            </div>

            {/* Date */}

            <div
              className="
                mt-4
                flex
                items-center
                justify-between
                border-t
                border-[#F1F5F9]
                pt-3
              "
            >
              <p className="text-xs font-medium text-[#64748B]">
                {request.date} • {request.time}
              </p>

              <a
                href={`tel:${request.phone}`}
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#ECFDF3]
                  text-[#15803D]
                "
              >
                <HugeiconsIcon
                  icon={Call02Icon}
                  size={16}
                  strokeWidth={2}
                />
              </a>
            </div>

            {/* Pending Actions */}

            {request.status === "Pending" && (
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button
                  className="
                    h-9
                    rounded-xl
                    border
                    border-[#E5E7EB]
                    text-xs
                    font-bold
                    text-[#64748B]
                    transition
                    hover:bg-[#F8FAFC]
                  "
                >
                  Reject
                </button>

                <button
                  className="
                    h-9
                    rounded-xl
                    bg-[#16A34A]
                    text-xs
                    font-bold
                    text-white
                    transition
                    hover:bg-[#15803D]
                  "
                >
                  Accept
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProviderRequests;