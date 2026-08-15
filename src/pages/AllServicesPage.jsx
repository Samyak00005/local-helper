import { HugeiconsIcon } from "@hugeicons/react";
import { useMemo, useState } from "react";
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
import SearchBar from "../components/SearchBar";
import providersData from "../data/providers.json";

/* =========================================================
   SERVICE CONFIG
========================================================= */

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

/* =========================================================
   SERVICE DESCRIPTIONS
========================================================= */

const serviceDescriptions = {
  electrician: "Wiring, switches, fans, lights & electrical repairs.",
  plumber: "Leakage, taps, pipes, bathroom & water-line repairs.",
  carpenter: "Furniture, doors, shelves & custom woodwork.",
  cleaning: "Home, bathroom, kitchen & deep cleaning services.",
  "ac-repair": "AC servicing, repair, installation & maintenance.",
  mechanic: "Bike, car, servicing, repair & roadside assistance.",
};

/* =========================================================
   SERVICE COLORS
========================================================= */

const serviceStyles = {
  electrician: {
    icon: "bg-amber-50 text-amber-600 group-hover:bg-amber-100",
  },

  plumber: {
    icon: "bg-sky-50 text-sky-600 group-hover:bg-sky-100",
  },

  carpenter: {
    icon: "bg-orange-50 text-orange-600 group-hover:bg-orange-100",
  },

  cleaning: {
    icon: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100",
  },

  "ac-repair": {
    icon: "bg-cyan-50 text-cyan-600 group-hover:bg-cyan-100",
  },

  mechanic: {
    icon: "bg-slate-100 text-slate-600 group-hover:bg-slate-200",
  },
};

/* =========================================================
   COMPONENT
========================================================= */

function AllServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  /* -------------------------------------------------------
     SERVICES
  ------------------------------------------------------- */

  const services = useMemo(() => {
    return Object.keys(providersData).map((category) => ({
      slug: category,
      name: serviceNames[category] || category,
      icon: serviceIcons[category],
      providerCount: providersData[category]?.length || 0,

      description:
        serviceDescriptions[category] ||
        "Find trusted local professionals for this service.",

      style: serviceStyles[category] || {
        icon: "bg-slate-100 text-slate-600 group-hover:bg-slate-200",
      },
    }));
  }, []);

  /* ----- FILTER----- */

  const filteredServices = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return services;
    }

    return services.filter(
      (service) =>
        service.name.toLowerCase().includes(query) ||
        service.slug.toLowerCase().includes(query),
    );
  }, [services, searchQuery]);

  /* ----- CLEAR SEARCH ----- */

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827]">
      <Header />

      {/* ----- PAGE HERO / HEADER ----- */}

      <section className="border-b border-[#E5E7EB] bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-7 pt-4 sm:px-6 lg:px-8">
          {/* ----- BACK ----- */}
          <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-1.5
              pt-1
              pb-5
              text-sm
              font-semibold
              text-[#6B7280]
              transition
              hover:text-[#15803D]
            "
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={17} strokeWidth={2} />
            Home
          </Link>

          {/* Heading */}

          <div className="max-w-2xl">
            <h1 className="text-3xl font-extrabold leading-[1.1] tracking-[-0.035em] text-[#111827] sm:text-4xl lg:text-[42px]">
              Find the right service
              <span className="text-[#16A34A]"> near you.</span>
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#6B7280] sm:text-[15px]">
              Browse trusted local professionals for home repairs, maintenance,
              cleaning and everyday services.
            </p>
          </div>

          {/* ----- SEARCH ----- */}

          <div className="mt-6 max-w-2xl">
            <SearchBar
              placeholder="What service do you need?"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />

            {/* Search Result Count */}

            <div className="mt-3 flex items-center justify-between text-xs">
              <p className="text-[#9CA3AF]">
                {searchQuery
                  ? `${filteredServices.length} service${
                      filteredServices.length === 1 ? "" : "s"
                    } found`
                  : `${services.length} services available`}
              </p>

              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="font-semibold text-[#15803D] transition hover:text-[#166534]"
                >
                  Clear search
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ----- SERVICES ----- */}

      <main className="px-4 py-7 sm:px-6 lg:px-8 lg:py-9">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}

          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold tracking-[-0.02em] text-[#111827] sm:text-2xl">
                Browse services
              </h2>

              <p className="mt-1.5 text-sm text-[#6B7280]">
                Choose a category to find local professionals.
              </p>
            </div>
          </div>

          {/* =================================================
              SERVICES GRID
          ================================================= */}

          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
              {filteredServices.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#E5E7EB]
                    bg-white
                    p-4
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-[#BBF7D0]
                    hover:shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                    active:scale-[0.985]
                    sm:p-5
                  "
                >
                  {/* Green Hover Line */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      top-0
                      h-[2px]
                      origin-left
                      scale-x-0
                      bg-[#16A34A]
                      transition-transform
                      duration-200
                      group-hover:scale-x-100
                    "
                  />

                  {/* Top Row */}

                  <div className="flex items-start justify-between gap-3">
                    {/* Icon */}

                    <div
                      className={`
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        transition-colors
                        duration-200
                        ${service.style.icon}
                      `}
                    >
                      <HugeiconsIcon
                        icon={service.icon}
                        size={24}
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* Arrow */}

                    <div
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-lg
                        bg-[#F8FAFC]
                        text-[#9CA3AF]
                        transition-all
                        duration-200
                        group-hover:bg-[#F0FDF4]
                        group-hover:text-[#15803D]
                      "
                    >
                      <HugeiconsIcon
                        icon={ArrowRight02Icon}
                        size={17}
                        strokeWidth={2}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>

                  {/* Content */}

                  <div className="mt-5">
                    <h3 className="text-[15px] font-bold text-[#111827]">
                      {service.name}
                    </h3>

                    <p className="mt-1.5 line-clamp-2 min-h-[36px] text-xs leading-5 text-[#6B7280]">
                      {service.description}
                    </p>
                  </div>

                  {/* Provider Count */}

                  <div className="mt-4 flex items-center justify-between border-t border-[#F1F5F9] pt-3">
                    <span className="text-xs font-medium text-[#6B7280]">
                      {service.providerCount}{" "}
                      {service.providerCount === 1
                        ? "local provider"
                        : "local providers"}
                    </span>

                    <span className="text-xs font-semibold text-[#15803D] opacity-0 transition-opacity group-hover:opacity-100">
                      View
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* =================================================
               EMPTY STATE
            ================================================= */

            <div className="rounded-2xl border border-dashed border-[#D1D5DB] bg-white px-5 py-14 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0FDF4] text-[#16A34A]">
                <HugeiconsIcon
                  icon={Search02Icon}
                  size={25}
                  strokeWidth={1.8}
                />
              </div>

              <h3 className="mt-4 text-base font-bold text-[#111827]">
                No services found
              </h3>

              <p className="mx-auto mt-1.5 max-w-sm text-sm leading-6 text-[#6B7280]">
                We couldn't find a service matching{" "}
                <span className="font-semibold text-[#374151]">
                  "{searchQuery}"
                </span>
                .
              </p>

              <button
                type="button"
                onClick={clearSearch}
                className="
                  mt-5
                  inline-flex
                  h-10
                  items-center
                  rounded-xl
                  bg-[#15803D]
                  px-5
                  text-sm
                  font-semibold
                  text-white
                  shadow-sm
                  transition
                  hover:bg-[#166534]
                  active:scale-[0.98]
                "
              >
                View all services
              </button>
            </div>
          )}
        </div>
      </main>

      {/* ===================================================
          BOTTOM CTA
      =================================================== */}

      {!searchQuery && filteredServices.length > 0 && (
        <section className="px-4 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-2xl bg-[#15803D] px-5 py-6 sm:px-8 sm:py-7">
              {/* Decorative Circles */}

              <div className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-white/10" />

              <div className="pointer-events-none absolute -bottom-20 right-24 h-32 w-32 rounded-full bg-white/5" />

              <div className="relative max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#BBF7D0]">
                  Need help?
                </p>

                <h2 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
                  Can't find the service you need?
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#DCFCE7]">
                  Tell us what you need and we'll help you find the right local
                  professional.
                </p>

                <Link
                  to="/"
                  className="
                    mt-5
                    inline-flex
                    h-10
                    items-center
                    gap-2
                    rounded-xl
                    bg-white
                    px-4
                    text-sm
                    font-semibold
                    text-[#15803D]
                    transition
                    hover:bg-[#F0FDF4]
                    active:scale-[0.98]
                  "
                >
                  Go to home
                  <HugeiconsIcon
                    icon={ArrowRight02Icon}
                    size={17}
                    strokeWidth={2}
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default AllServicesPage;
