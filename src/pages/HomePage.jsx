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
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          {/* Logo / Location */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
              <span className="text-lg font-bold">L</span>
            </div>

            <div>
              <p className="text-base font-bold leading-none">Local Helper</p>

              <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-50"
            aria-label="Open menu"
          >
            <HugeiconsIcon icon={Menu01Icon} size={22} strokeWidth={2} />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white px-4 pb-7 pt-2">
        <div className="mx-auto max-w-7xl">
          <h1 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Find local help,
            <br />
            when you need it.
          </h1>

          <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500">
            Find electricians, plumbers, mechanics, cleaners and more around
            Chandrapur.
          </p>

          {/* Search */}
          <div className="mt-4 flex h-14 items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 shadow-sm">
            <HugeiconsIcon
              icon={Search02Icon}
              size={21}
              strokeWidth={2}
              className="shrink-0 text-gray-400"
            />

            <input
              type="text"
              placeholder="What service do you need?"
              className="min-w-0 flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
            />
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="px-4 py-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold">Popular Services</h2>

            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-gray-600 transition hover:text-gray-900"
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
                className="group flex flex-col items-center rounded-2xl border border-gray-200 bg-white px-2 py-4 transition hover:border-gray-300 hover:shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition group-hover:bg-gray-900 group-hover:text-white">
                  <HugeiconsIcon
                    icon={service.icon}
                    size={23}
                    strokeWidth={1.8}
                  />
                </div>

                <span className="mt-2 text-center text-xs font-medium text-gray-700">
                  {service.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Near You */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold">Services near you</h2>

              <p className="mt-1 text-xs text-gray-500">
                Trusted local providers in Chandrapur
              </p>
            </div>

            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-gray-600 transition hover:text-gray-900"
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
                className="rounded-2xl border border-gray-200 bg-white p-4"
              >
                <div className="flex gap-3">
                  {/* Service Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
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
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {service.name}
                        </h3>

                        <p className="mt-0.5 text-xs text-gray-500">
                          {service.category} · {service.location}
                        </p>
                      </div>

                      {/* Verified */}
                      {service.verified && (
                        <HugeiconsIcon
                          icon={CheckmarkCircle01Icon}
                          size={18}
                          strokeWidth={2}
                          className="shrink-0 text-green-600"
                        />
                      )}
                    </div>

                    {/* Rating */}
                    <div className="mt-2 flex items-center gap-1 text-xs">
                      <HugeiconsIcon
                        icon={StarIcon}
                        size={14}
                        strokeWidth={2}
                        className="text-amber-500"
                      />

                      <span className="font-semibold">{service.rating}</span>

                      <span className="text-gray-400">
                        ({service.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="flex h-10 items-center justify-center gap-2 rounded-xl bg-gray-900 text-sm font-semibold text-white transition hover:bg-gray-800"
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
                    className="flex h-10 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
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
