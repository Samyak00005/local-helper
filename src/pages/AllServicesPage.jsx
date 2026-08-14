import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router-dom";

import {
  AirVentIcon,
  ArrowLeft01Icon,
  ArrowRight02Icon,
  CarFrontIcon,
  CleanIcon,
  DropletsIcon,
  FlashIcon,
  HammerIcon,
  Search02Icon,
} from "@hugeicons/core-free-icons";

import Header from "../components/Header";
import providersData from "../data/providers.json";

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

function AllServicesPage() {
  const services = Object.keys(providersData).map((category) => ({
    slug: category,
    name: serviceNames[category] || category,
    icon: serviceIcons[category],
    providerCount: providersData[category]?.length || 0,
  }));

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827]">
      <Header />

      {/* ----- PAGE HEADER----- */}

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

          <h1 className="text-[28px] font-bold leading-tight tracking-[-0.03em] text-[#111827] sm:text-4xl">
            All Services
          </h1>

          <p className="mt-2 max-w-lg text-sm leading-6 text-[#6B7280]">
            Find trusted local professionals for your everyday needs.
          </p>

          {/* Search */}
          <div className="mt-5 flex min-h-14 items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] px-4 shadow-sm transition focus-within:border-[#16A34A] focus-within:ring-4 focus-within:ring-[#DCFCE7]">
            <HugeiconsIcon
              icon={Search02Icon}
              size={21}
              strokeWidth={2}
              className="shrink-0 text-[#6B7280]"
            />

            <input
              type="text"
              placeholder="Search for a service..."
              className="min-w-0 flex-1 bg-transparent text-sm font-medium text-[#111827] outline-none placeholder:text-[#9CA3AF]"
            />
          </div>
        </div>
      </section>

      {/* -----SERVICES----- */}

      <main className="px-4 py-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4">
            <h2 className="text-lg font-bold tracking-tight text-[#111827]">
              Services
            </h2>

            <p className="mt-1 text-xs text-[#6B7280]">
              Choose a service to find local providers
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group rounded-2xl border border-[#E5E7EB] bg-white p-4 transition active:scale-[0.98] hover:border-[#BBF7D0] hover:shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F1F5F9] text-[#374151] transition group-hover:bg-[#DCFCE7] group-hover:text-[#15803D]">
                    <HugeiconsIcon
                      icon={service.icon}
                      size={23}
                      strokeWidth={1.8}
                    />
                  </div>

                  <HugeiconsIcon
                    icon={ArrowRight02Icon}
                    size={17}
                    strokeWidth={2}
                    className="mt-1 text-[#9CA3AF] transition group-hover:translate-x-0.5 group-hover:text-[#15803D]"
                  />
                </div>

                <h3 className="mt-4 text-sm font-semibold text-[#111827]">
                  {service.name}
                </h3>

                <p className="mt-1 text-xs text-[#6B7280]">
                  {service.providerCount} local{" "}
                  {service.providerCount === 1 ? "provider" : "providers"}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AllServicesPage;
