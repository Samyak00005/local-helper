import { HugeiconsIcon } from "@hugeicons/react";
import { Link, useParams } from "react-router-dom";

import SearchBar from "../components/SearchBar";

import {
  AirVentIcon,
  ArrowLeft01Icon,
  Call02Icon,
  CarFrontIcon,
  CheckmarkCircle01Icon,
  CleanIcon,
  DropletsIcon,
  FlashIcon,
  HammerIcon,
  Location01Icon,
  StarIcon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";

import providersData from "../data/providers.json";

const categoryData = {
  electrician: {
    name: "Electricians",
    singular: "Electrician",
    icon: FlashIcon,
    description: "Find trusted electricians near you.",
  },

  plumber: {
    name: "Plumbers",
    singular: "Plumber",
    icon: DropletsIcon,
    description: "Find reliable plumbers near you.",
  },

  carpenter: {
    name: "Carpenters",
    singular: "Carpenter",
    icon: HammerIcon,
    description: "Find skilled carpenters near you.",
  },

  cleaning: {
    name: "Cleaning Services",
    singular: "Cleaner",
    icon: CleanIcon,
    description: "Find reliable cleaning services near you.",
  },

  "ac-repair": {
    name: "AC Repair",
    singular: "AC Technician",
    icon: AirVentIcon,
    description: "Find AC repair technicians near you.",
  },

  mechanic: {
    name: "Mechanics",
    singular: "Mechanic",
    icon: CarFrontIcon,
    description: "Find trusted mechanics near you.",
  },
};

function ServiceCategoryPage() {
  const { category } = useParams();

  // Category information
  const currentCategory = categoryData[category];

  // Provider information comes from providers.json
  const providers = providersData[category] || [];

  /*
   * Invalid category
   */
  if (!currentCategory) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4">
        <div className="w-full max-w-sm text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#15803D]">
            <span className="text-xl font-bold">?</span>
          </div>

          <h1 className="mt-4 text-xl font-bold text-[#111827]">
            Service not found
          </h1>

          <p className="mt-2 text-sm leading-5 text-[#6B7280]">
            We couldn't find the service you're looking for.
          </p>

          <Link
            to="/"
            className="mt-5 inline-flex h-11 items-center justify-center rounded-xl bg-[#16A34A] px-5 text-sm font-semibold text-white transition hover:bg-[#15803D]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827]">
      {/* =====================================================
          HEADER
      ====================================================== */}
      <header className="sticky top-0 z-20 border-b border-[#E5E7EB] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4">
          {/* Back Button */}
          <Link
            to="/"
            aria-label="Back to home"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E5E7EB] bg-white text-[#374151] transition hover:bg-[#F1F5F9] active:scale-95"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={20} strokeWidth={2} />
          </Link>

          {/* Page Title */}
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-base font-bold text-[#111827]">
              {currentCategory.name}
            </h1>

            <div className="mt-0.5 flex items-center gap-1 text-xs text-[#6B7280]">
              <HugeiconsIcon icon={Location01Icon} size={13} strokeWidth={2} />

              <span>Chandrapur</span>
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          CATEGORY INTRO
      ====================================================== */}
      <section className="border-b border-[#E5E7EB] bg-white px-4 pb-5 pt-5">
        <div className="mx-auto max-w-7xl">
          {/* Category Information */}
          <div className="flex items-center gap-3">
            {/* Category Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#15803D]">
              <HugeiconsIcon
                icon={currentCategory.icon}
                size={28}
                strokeWidth={1.8}
              />
            </div>

            {/* Category Text */}
            <div className="min-w-0">
              <h2 className="text-xl font-bold tracking-tight text-[#111827]">
                {currentCategory.name}
              </h2>

              <p className="mt-1 text-sm leading-5 text-[#6B7280]">
                {currentCategory.description}
              </p>
            </div>
          </div>

          {/* ----- SEARCH ----- */}

          <SearchBar />
        </div>
      </section>

      {/* =====================================================
          PROVIDER RESULTS
      ====================================================== */}
      <main className="px-4 py-6">
        <div className="mx-auto max-w-7xl">
          {/* Results Heading */}
          <div className="mb-4">
            <h2 className="text-lg font-bold tracking-tight text-[#111827]">
              {providers.length} {currentCategory.name}
            </h2>

            <p className="mt-1 text-xs text-[#6B7280]">
              Local providers available around Chandrapur
            </p>
          </div>

          {/* =================================================
              PROVIDER LIST
          ================================================== */}
          {providers.length > 0 ? (
            <div className="space-y-3">
              {providers.map((provider) => (
                <article
                  key={provider.id}
                  className="rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-sm transition hover:border-[#BBF7D0] hover:shadow-md"
                >
                  {/* Provider Information */}
                  <div className="flex gap-3">
                    {/* Category Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F1F5F9] text-[#374151]">
                      <HugeiconsIcon
                        icon={currentCategory.icon}
                        size={23}
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* Provider Details */}
                    <div className="min-w-0 flex-1">
                      {/* Name + Verification */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className="truncate text-sm font-bold text-[#111827]">
                            {provider.name}
                          </h3>

                          {/* Location */}
                          <p className="mt-1 flex items-center gap-1 text-xs text-[#6B7280]">
                            <HugeiconsIcon
                              icon={Location01Icon}
                              size={13}
                              strokeWidth={2}
                            />

                            <span className="truncate">
                              {provider.location}
                            </span>
                          </p>
                        </div>

                        {/* Verified Badge */}
                        {provider.verified && (
                          <span className="flex shrink-0 items-center gap-1 rounded-full bg-[#DCFCE7] px-2 py-1 text-[10px] font-semibold text-[#15803D]">
                            <HugeiconsIcon
                              icon={CheckmarkCircle01Icon}
                              size={13}
                              strokeWidth={2}
                            />
                            Verified
                          </span>
                        )}
                      </div>

                      {/* Rating */}
                      <div className="mt-2 flex items-center gap-2 text-xs">
                        <span className="flex items-center gap-1 font-semibold text-[#374151]">
                          <HugeiconsIcon
                            icon={StarIcon}
                            size={14}
                            strokeWidth={2}
                            className="text-[#F59E0B]"
                          />

                          {provider.rating}
                        </span>

                        <span className="text-[#9CA3AF]">
                          ({provider.reviews} reviews)
                        </span>

                        <span className="text-[#D1D5DB]">•</span>

                        <span className="text-[#6B7280]">
                          {provider.experience} years
                        </span>
                      </div>

                      {/* Availability */}
                      <div className="mt-2">
                        {provider.available ? (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#15803D]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
                            Available now
                          </span>
                        ) : (
                          <span className="text-xs font-medium text-[#9CA3AF]">
                            Currently unavailable
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      ACTION BUTTONS
                  ================================================== */}
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {/* Call */}
                    <a
                      href={`tel:${provider.phone}`}
                      className="flex h-10 items-center justify-center gap-2 rounded-xl bg-[#16A34A] text-sm font-semibold text-white transition hover:bg-[#15803D] active:scale-[0.98]"
                    >
                      <HugeiconsIcon
                        icon={Call02Icon}
                        size={17}
                        strokeWidth={2}
                      />
                      Call
                    </a>

                    {/* WhatsApp */}
                    <a
                      href={`https://wa.me/${provider.whatsapp.replace(
                        /[^0-9]/g,
                        "",
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-10 items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white text-sm font-semibold text-[#374151] transition hover:bg-[#F1F5F9] active:scale-[0.98]"
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
              ))}
            </div>
          ) : (
            /* =================================================
               EMPTY STATE
            ================================================== */
            <div className="rounded-2xl border border-[#E5E7EB] bg-white px-5 py-10 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#F1F5F9] text-[#6B7280]">
                <HugeiconsIcon
                  icon={currentCategory.icon}
                  size={24}
                  strokeWidth={1.8}
                />
              </div>

              <h3 className="mt-4 font-semibold text-[#111827]">
                No providers found
              </h3>

              <p className="mt-1 text-sm leading-5 text-[#6B7280]">
                We don't have any providers listed for this service yet.
              </p>

              <Link
                to="/"
                className="mt-5 inline-flex h-10 items-center justify-center rounded-xl bg-[#16A34A] px-5 text-sm font-semibold text-white"
              >
                Browse Other Services
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default ServiceCategoryPage;
