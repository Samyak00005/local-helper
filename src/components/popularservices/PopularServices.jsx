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

const serviceIcons = {
  electrician: FlashIcon,
  plumber: DropletsIcon,
  carpenter: HammerIcon,
  cleaning: CleanIcon,
  "ac-repair": AirVentIcon,
  mechanic: CarFrontIcon,
};

const serviceNames = {
  electrician: "Electrician",
  plumber: "Plumber",
  carpenter: "Carpenter",
  cleaning: "Cleaning",
  "ac-repair": "AC Repair",
  mechanic: "Mechanic",
};

function PopularServices() {
  const popularServices = Object.keys(providersData).map((category) => ({
    name: serviceNames[category] || category,
    slug: category,
    icon: serviceIcons[category],
  }));

  return (
    <section className="px-4 py-5">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold tracking-tight text-[#111827]">
              Popular Services
            </h2>

            <p className="mt-1 text-xs text-[#6B7280]">
              Find help for everyday needs
            </p>
          </div>

          <Link
            to="/services"
            className="flex items-center gap-1 text-sm font-semibold text-[#15803D] transition hover:text-[#16A34A]"
          >
            See all
            <HugeiconsIcon icon={ArrowRight02Icon} size={16} strokeWidth={2} />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {popularServices.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group flex min-h-[112px] flex-col items-center justify-center rounded-2xl border border-[#E5E7EB] bg-white px-2 py-4 transition active:scale-[0.98] hover:border-[#BBF7D0] hover:shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F1F5F9] text-[#374151] transition group-hover:bg-[#DCFCE7] group-hover:text-[#15803D]">
                <HugeiconsIcon
                  icon={service.icon}
                  size={23}
                  strokeWidth={1.8}
                />
              </div>

              <span className="mt-2.5 text-center text-xs font-semibold leading-4 text-[#374151]">
                {service.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularServices;
