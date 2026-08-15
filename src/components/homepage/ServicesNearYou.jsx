import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router-dom";

import {
  AirVentIcon,
  ArrowRight02Icon,
  Call02Icon,
  CarFrontIcon,
  CheckmarkCircle01Icon,
  CleanIcon,
  DropletsIcon,
  FlashIcon,
  HammerIcon,
  StarIcon,
  WhatsappIcon,
  Location01Icon,
} from "@hugeicons/core-free-icons";

import providersData from "../../data/providers.json";

const serviceIcons = {
  electrician: FlashIcon,
  plumber: DropletsIcon,
  carpenter: HammerIcon,
  cleaning: CleanIcon,
  "ac-repair": AirVentIcon,
  mechanic: CarFrontIcon,
};

function ServicesNearYou() {
  const nearbyServices = Object.values(providersData)
    .flat()
    .sort(() => Math.random() - 0.3)
    .slice(0, 3);

  return (
    <section className="bg-[#F7FAF8] px-4 pb-10 pt-2 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* ----- HEADER ----- */}

        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p
              className="
                mb-1
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#16A34A]
                sm:text-xs
              "
            >
              Nearby
            </p>

            <h2
              className="
                text-xl
                font-extrabold
                tracking-[-0.035em]
                text-[#10231A]
                sm:text-2xl
              "
            >
              Services near you
            </h2>

            <p className="mt-1 text-xs text-[#6B7280] sm:text-sm">
              Local providers you can contact directly
            </p>
          </div>

          <Link
            to="/nearby"
            className="
              flex
              shrink-0
              items-center
              gap-1
              text-sm
              font-bold
              text-[#15803D]
              transition
              hover:text-[#16A34A]
            "
          >
            See all
            <HugeiconsIcon icon={ArrowRight02Icon} size={17} strokeWidth={2} />
          </Link>
        </div>

        {/* ----- PROVIDER CARDS ----- */}

        <div className="space-y-4">
          {nearbyServices.map((service) => {
            const categoryName = service.category
              ? service.category
                  .replace("-", " ")
                  .replace(/\b\w/g, (letter) => letter.toUpperCase())
              : "Service";

            return (
              <article
                key={service.id}
                className="
                  group
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-[#E3ECE6]
                  bg-white
                  p-4
                  shadow-[0_4px_18px_rgba(15,23,42,0.04)]
                  transition
                  duration-300
                  hover:border-[#BBF7D0]
                  hover:shadow-[0_12px_30px_rgba(22,163,74,0.08)]
                  sm:p-5
                "
              >
                {/* ----- PROVIDER INFO ----- */}

                <div className="flex gap-3">
                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-[17px]
                      bg-[#DCFCE7]
                      text-[#15803D]
                      transition
                      group-hover:bg-[#BBF7D0]
                    "
                  >
                    <HugeiconsIcon
                      icon={serviceIcons[service.category] || FlashIcon}
                      size={25}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* DETAILS */}

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h3
                          className="
                            truncate
                            text-[15px]
                            font-extrabold
                            text-[#10231A]
                            sm:text-base
                          "
                        >
                          {service.name}
                        </h3>

                        <div className="mt-1 flex items-center gap-1.5 text-xs text-[#6B7280]">
                          <span>{categoryName}</span>

                          <span className="text-[#CBD5E1]">•</span>

                          <HugeiconsIcon
                            icon={Location01Icon}
                            size={13}
                            strokeWidth={2}
                          />

                          <span className="truncate">{service.location}</span>
                        </div>
                      </div>

                      {/* VERIFIED */}

                      {service.verified && (
                        <div
                          className="
                            flex
                            shrink-0
                            items-center
                            gap-1
                            rounded-full
                            bg-[#ECFDF3]
                            px-2
                            py-1
                            text-[10px]
                            font-bold
                            text-[#15803D]
                          "
                        >
                          <HugeiconsIcon
                            icon={CheckmarkCircle01Icon}
                            size={13}
                            strokeWidth={2}
                          />
                          Verified
                        </div>
                      )}
                    </div>

                    {/* =================================================
                        RATING
                    ================================================= */}

                    <div className="mt-2 flex items-center gap-1 text-xs">
                      <HugeiconsIcon
                        icon={StarIcon}
                        size={14}
                        strokeWidth={2}
                        className="text-[#F59E0B]"
                      />

                      <span className="font-bold text-[#334155]">
                        {service.rating}
                      </span>

                      <span className="text-[#9CA3AF]">
                        ({service.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    ACTIONS
                ================================================= */}

                <div className="mt-4 grid grid-cols-2 gap-2">
                  {/* CALL */}

                  <a
                    href={`tel:${service.phone}`}
                    className="
                      flex
                      h-11
                      items-center
                      justify-center
                      gap-2
                      rounded-[13px]
                      bg-[#16A34A]
                      text-sm
                      font-bold
                      text-white
                      shadow-sm
                      transition
                      hover:bg-[#15803D]
                      active:scale-[0.98]
                    "
                  >
                    <HugeiconsIcon
                      icon={Call02Icon}
                      size={17}
                      strokeWidth={2}
                    />
                    Call
                  </a>

                  {/* WHATSAPP */}

                  <a
                    href={`https://wa.me/${String(
                      service.whatsapp || "",
                    ).replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      h-11
                      items-center
                      justify-center
                      gap-2
                      rounded-[13px]
                      border
                      border-[#BBF7D0]
                      bg-[#F0FDF4]
                      text-sm
                      font-bold
                      text-[#15803D]
                      transition
                      hover:bg-[#DCFCE7]
                      active:scale-[0.98]
                    "
                  >
                    <HugeiconsIcon
                      icon={WhatsappIcon}
                      size={17}
                      strokeWidth={2}
                    />
                    WhatsApp
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* =================================================
            EMPTY STATE
        ================================================= */}

        {nearbyServices.length === 0 && (
          <div
            className="
              rounded-[22px]
              border
              border-[#E3ECE6]
              bg-white
              px-5
              py-12
              text-center
            "
          >
            <h3 className="font-bold text-[#10231A]">No providers nearby</h3>

            <p className="mt-1 text-sm text-[#6B7280]">
              We will show local providers here when available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ServicesNearYou;
