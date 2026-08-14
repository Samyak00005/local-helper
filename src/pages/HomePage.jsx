import { HugeiconsIcon } from "@hugeicons/react";

import {
  Location01Icon,
  Menu01Icon,
  Search02Icon,
  FlashIcon,
  DropletsIcon,
  HammerIcon,
  CleanIcon,
  AirVentIcon,
  CarFrontIcon,
  ArrowRight02Icon,
  CheckmarkCircle01Icon,
  StarIcon,
  Call02Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";

const popularServices = [
  {
    name: "Electrician",
    icon: FlashIcon,
  },
  {
    name: "Plumber",
    icon: DropletsIcon,
  },
  {
    name: "Carpenter",
    icon: HammerIcon,
  },
  {
    name: "Cleaning",
    icon: CleanIcon,
  },
  {
    name: "AC Repair",
    icon: AirVentIcon,
  },
  {
    name: "Mechanic",
    icon: CarFrontIcon,
  },
];

const nearbyServices = [
  {
    name: "Raj Electrical Services",
    category: "Electrician",
    location: "Tukum, Chandrapur",
    rating: "4.7",
    reviews: 34,
    verified: true,
  },
  {
    name: "Suresh Plumbing Services",
    category: "Plumber",
    location: "Ramnagar, Chandrapur",
    rating: "4.6",
    reviews: 27,
    verified: true,
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827]">
      {/* ----- HEADER ----- */}

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
                <HugeiconsIcon
                  icon={Location01Icon}
                  size={13}
                  strokeWidth={2}
                />

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

      {/* ----- HERO ----- */}

      <section className="bg-white px-4 pb-5 pt-4">
        <div className="mx-auto max-w-7xl">
          {/* Small label */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#DCFCE7] px-3 py-1.5 text-xs font-semibold text-[#15803D]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
            Local services around you
          </div>

          {/* Heading */}
          <h1 className="max-w-xl text-[32px] font-bold leading-[1.12] tracking-[-0.03em] text-[#111827] sm:text-4xl">
            Find trusted local
            <br />
            services near you.
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-lg text-sm leading-6 text-[#6B7280]">
            Easily find electricians, plumbers, mechanics, cleaners and other
            local service providers.
          </p>

          {/* Search */}
          <div className="mt-4 flex min-h-14 items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] px-4 shadow-sm transition focus-within:border-[#16A34A] focus-within:ring-4 focus-within:ring-[#DCFCE7]">
            <HugeiconsIcon
              icon={Search02Icon}
              size={21}
              strokeWidth={2}
              className="shrink-0 text-[#6B7280]"
            />

            <input
              type="text"
              placeholder="What service do you need?"
              className="min-w-0 flex-1 bg-transparent text-sm font-medium text-[#111827] outline-none placeholder:text-[#9CA3AF]"
            />
          </div>

          {/* Quick location */}
          <button
            type="button"
            className="mt-3 flex items-center gap-1.5 text-xs font-medium text-[#6B7280] transition hover:text-[#15803D]"
          >
            <HugeiconsIcon icon={Location01Icon} size={14} strokeWidth={2} />

            <span>Showing services in Chandrapur</span>
          </button>
        </div>
      </section>

      {/* ----- POPULAR SERVICES ----- */}

      <section className="px-4 py-5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold tracking-tight text-[#111827]">
                Popular Services
              </h2>

              <p className="mt-1 text-xs text-[#6B7280]">
                Find help for everyday needs
              </p>
            </div>

            <button
              type="button"
              className="flex items-center gap-1 text-sm font-semibold text-[#15803D] transition hover:text-[#16A34A]"
            >
              See all
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                size={16}
                strokeWidth={2}
              />
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {popularServices.map((service) => (
              <button
                key={service.name}
                type="button"
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
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ----- SERVICES NEAR YOU ----- */}

      <section className="px-4 pb-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold tracking-tight text-[#111827]">
                Services near you
              </h2>

              <p className="mt-1 text-xs text-[#6B7280]">
                Local providers you can contact directly
              </p>
            </div>

            <button
              type="button"
              className="flex items-center gap-1 text-sm font-semibold text-[#15803D] transition hover:text-[#16A34A]"
            >
              See all
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                size={16}
                strokeWidth={2}
              />
            </button>
          </div>

          {/* Provider Cards */}
          <div className="space-y-3">
            {nearbyServices.map((service) => (
              <article
                key={service.name}
                className="rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-sm"
              >
                <div className="flex gap-3">
                  {/* Service Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#DCFCE7] text-[#15803D]">
                    <HugeiconsIcon
                      icon={
                        service.category === "Electrician"
                          ? FlashIcon
                          : DropletsIcon
                      }
                      size={23}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Provider Details */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="truncate font-semibold text-[#111827]">
                          {service.name}
                        </h3>

                        <p className="mt-0.5 text-xs text-[#6B7280]">
                          {service.category} · {service.location}
                        </p>
                      </div>

                      {/* Verified */}
                      {service.verified && (
                        <div className="flex shrink-0 items-center gap-1 rounded-full bg-[#DCFCE7] px-2 py-1 text-[10px] font-semibold text-[#15803D]">
                          <HugeiconsIcon
                            icon={CheckmarkCircle01Icon}
                            size={13}
                            strokeWidth={2}
                          />
                          Verified
                        </div>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="mt-2 flex items-center gap-1 text-xs">
                      <HugeiconsIcon
                        icon={StarIcon}
                        size={14}
                        strokeWidth={2}
                        className="text-[#F59E0B]"
                      />

                      <span className="font-semibold text-[#374151]">
                        {service.rating}
                      </span>

                      <span className="text-[#9CA3AF]">
                        ({service.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="flex h-10 items-center justify-center gap-2 rounded-xl bg-[#16A34A] text-sm font-semibold text-white transition hover:bg-[#15803D] active:scale-[0.98]"
                  >
                    <HugeiconsIcon
                      icon={Call02Icon}
                      size={17}
                      strokeWidth={2}
                    />
                    Call
                  </button>

                  <button
                    type="button"
                    className="flex h-10 items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white text-sm font-semibold text-[#374151] transition hover:bg-[#F1F5F9] active:scale-[0.98]"
                  >
                    <HugeiconsIcon
                      icon={WhatsappIcon}
                      size={17}
                      strokeWidth={2}
                    />
                    WhatsApp
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
