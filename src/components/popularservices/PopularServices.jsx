import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router-dom";

import {
  AirVentIcon,
  ArrowRight02Icon,
  CarFrontIcon,
  CleanIcon,
  DropletsIcon,
  FlashIcon,
  HammerIcon,
} from "@hugeicons/core-free-icons";

import providersData from "../../data/providers.json";

/* =========================================================
   SERVICE ICONS
========================================================= */

const serviceIcons = {
  electrician: FlashIcon,
  plumber: DropletsIcon,
  carpenter: HammerIcon,
  cleaning: CleanIcon,
  "ac-repair": AirVentIcon,
  mechanic: CarFrontIcon,
};

/* =========================================================
   SERVICE NAMES
========================================================= */

const serviceNames = {
  electrician: "Electrician",
  plumber: "Plumber",
  carpenter: "Carpenter",
  cleaning: "Cleaning",
  "ac-repair": "AC Repair",
  mechanic: "Mechanic",
};

/* =========================================================
   COMPONENT
========================================================= */

function PopularServices() {
  const popularServices = Object.keys(providersData).map((category) => ({
    name: serviceNames[category] || category,
    slug: category,
    icon: serviceIcons[category],
    providerCount: providersData[category]?.length || 0,
  }));

  return (
    <section className="relative -mt-5 px-4 pb-5 sm:-mt-7 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* =================================================
            WHITE FLOATING CONTAINER
        ================================================= */}

        <div
          className="
            rounded-[26px]
            border
            border-[#E5EDE8]
            bg-white
            p-5
            shadow-[0_10px_40px_rgba(15,23,42,0.08)]
            sm:p-7
          "
        >
          {/* =================================================
              SECTION HEADER
          ================================================= */}

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
                Explore
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
                Popular Services
              </h2>

              <p className="mt-1 text-xs text-[#6B7280] sm:text-sm">
                Find help for everyday needs
              </p>
            </div>

            <Link
              to="/services"
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
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                size={17}
                strokeWidth={2}
              />
            </Link>
          </div>

          {/* =================================================
              SERVICES GRID
          ================================================= */}

          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {popularServices.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="
                  group
                  relative
                  flex
                  min-h-[96px]
                  flex-col
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-[#E5EDE8]
                  bg-[#FBFEFC]
                  px-2
                  py-3
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#BBF7D0]
                  hover:bg-[#F0FDF4]
                  hover:shadow-[0_10px_25px_rgba(22,163,74,0.10)]
                  active:scale-[0.97]
                "
              >
                {/* Decorative glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-6
                    -top-6
                    h-16
                    w-16
                    rounded-full
                    bg-[#DCFCE7]
                    opacity-0
                    blur-xl
                    transition
                    group-hover:opacity-100
                  "
                />

                {/* Icon */}

                <div
                  className="
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-[15px]
                    bg-[#EAF8EE]
                    text-[#15803D]
                    transition
                    duration-300
                    group-hover:bg-[#DCFCE7]
                    group-hover:text-[#087A3F]
                  "
                >
                  <HugeiconsIcon
                    icon={service.icon}
                    size={24}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Name */}

                <span
                  className="
                    relative
                    mt-2
                    text-center
                    text-xs
                    font-bold
                    leading-4
                    text-[#334155]
                    transition
                    group-hover:text-[#15803D]
                  "
                >
                  {service.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularServices;
