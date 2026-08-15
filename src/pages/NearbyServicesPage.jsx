import { useMemo, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router-dom";

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

/* ----- SERVICE ICONS ----- */

const serviceIcons = {
  electrician: FlashIcon,
  plumber: DropletsIcon,
  carpenter: HammerIcon,
  cleaning: CleanIcon,
  "ac-repair": AirVentIcon,
  mechanic: CarFrontIcon,
};

/* ----- SERVICE NAMES ----- */

const serviceNames = {
  electrician: "Electrician",
  plumber: "Plumber",
  carpenter: "Carpenter",
  cleaning: "Cleaning",
  "ac-repair": "AC Repair",
  mechanic: "Mechanic",
};

/* ----- COMPONENT ----- */

function NearbyServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  /* ----- GET ALL PROVIDERS FROM JSON ----- */

  const allProviders = useMemo(() => {
    return Object.values(providersData).flat();
  }, []);

  /* ----- FILTER PROVIDERS ----- */

  const filteredProviders = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return allProviders;
    }

    return allProviders.filter((provider) => {
      const categoryName =
        serviceNames[provider.category] || provider.category || "";

      return (
        provider.name?.toLowerCase().includes(query) ||
        provider.location?.toLowerCase().includes(query) ||
        categoryName.toLowerCase().includes(query)
      );
    });
  }, [allProviders, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F7FAF8] text-[#111827] pb-24 md:pb-0">
      {/* ----- HEADER ----- */}

      <header className="sticky top-0 z-30 border-b border-[#E5E7EB] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4">
          <Link
            to="/"
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-[#F1F5F9]
              text-[#475569]
              transition
              hover:bg-[#E2E8F0]
              hover:text-[#15803D]
            "
            aria-label="Back to home"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={19} strokeWidth={2} />
          </Link>

          <div className="min-w-0">
            <h1 className="truncate text-base font-extrabold text-[#10231A]">
              Nearby Services
            </h1>

            <p className="text-[11px] text-[#6B7280]">
              Available around Chandrapur
            </p>
          </div>
        </div>
      </header>

      {/* ----- PAGE INTRO ----- */}

      <section className="bg-white px-4 pb-5 pt-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* ----- TITLE ----- */}

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
                text-2xl
                font-extrabold
                tracking-[-0.035em]
                text-[#10231A]
                sm:text-3xl
              "
            >
              Services near you
            </h2>

            <p className="mt-1 text-sm text-[#6B7280]">
              Local providers you can contact directly
            </p>
          </div>

          {/* ----- SEARCH BAR ----- */}

          <div className="mt-5">
            <SearchBar
              placeholder="Search services or helpers..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </div>

          {/* ----- RESULT COUNT ----- */}

          <p className="mt-3 text-xs text-[#9CA3AF]">
            {filteredProviders.length}{" "}
            {filteredProviders.length === 1 ? "helper" : "helpers"} available
          </p>
        </div>
      </section>

      {/* ----- PROVIDER LIST ----- */}

      <main className="px-4 pb-10 pt-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* ----- SECTION HEADER ----- */}

          <div className="mb-4">
            <h2 className="text-lg font-extrabold text-[#10231A]">
              Nearby helpers
            </h2>

            <p className="mt-1 text-xs text-[#6B7280]">
              Find trusted local professionals for your needs
            </p>
          </div>

          {/* ----- PROVIDER CARDS ----- */}

          {filteredProviders.length > 0 ? (
            <div className="space-y-3">
              {filteredProviders.map((provider) => {
                const categoryName =
                  serviceNames[provider.category] ||
                  provider.category ||
                  "Service";

                const serviceIcon =
                  serviceIcons[provider.category] || FlashIcon;

                return (
                  <article
                    key={provider.id}
                    className="
                      overflow-hidden
                      rounded-[20px]
                      border
                      border-[#E3ECE6]
                      bg-white
                      p-4
                      shadow-[0_4px_18px_rgba(15,23,42,0.04)]
                      transition
                      duration-300
                      hover:border-[#BBF7D0]
                      hover:shadow-[0_10px_25px_rgba(22,163,74,0.08)]
                    "
                  >
                    {/* ----- PROVIDER INFO ----- */}

                    <div className="flex gap-3">
                      {/* ----- SERVICE ICON ----- */}

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-[15px]
                          bg-[#DCFCE7]
                          text-[#15803D]
                        "
                      >
                        <HugeiconsIcon
                          icon={serviceIcon}
                          size={23}
                          strokeWidth={1.8}
                        />
                      </div>

                      {/* ----- DETAILS ----- */}

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <h3
                              className="
                                truncate
                                text-[15px]
                                font-extrabold
                                text-[#10231A]
                              "
                            >
                              {provider.name}
                            </h3>

                            {/* ----- CATEGORY + LOCATION ----- */}

                            <div
                              className="
                                mt-1
                                flex
                                min-w-0
                                items-center
                                gap-1.5
                                text-xs
                                text-[#6B7280]
                              "
                            >
                              <span className="shrink-0">{categoryName}</span>

                              <span className="text-[#CBD5E1]">•</span>

                              <HugeiconsIcon
                                icon={Location01Icon}
                                size={13}
                                strokeWidth={2}
                              />

                              <span className="truncate">
                                {provider.location}
                              </span>
                            </div>
                          </div>

                          {/* ----- VERIFIED ----- */}

                          {provider.verified && (
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
                                size={12}
                                strokeWidth={2}
                              />
                              Verified
                            </div>
                          )}
                        </div>

                        {/* ----- RATING / EXPERIENCE ----- */}

                        <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs">
                          <HugeiconsIcon
                            icon={StarIcon}
                            size={14}
                            strokeWidth={2}
                            className="text-[#F59E0B]"
                          />

                          <span className="font-bold text-[#334155]">
                            {provider.rating}
                          </span>

                          <span className="text-[#9CA3AF]">
                            ({provider.reviews} reviews)
                          </span>

                          <span className="text-[#CBD5E1]">•</span>

                          <span className="text-[#6B7280]">
                            {provider.experience} years
                          </span>
                        </div>

                        {/* ----- AVAILABILITY ----- */}

                        <div className="mt-2 flex items-center gap-1.5">
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              provider.available
                                ? "bg-[#16A34A]"
                                : "bg-[#9CA3AF]"
                            }`}
                          />

                          <span
                            className={`text-[11px] font-semibold ${
                              provider.available
                                ? "text-[#15803D]"
                                : "text-[#9CA3AF]"
                            }`}
                          >
                            {provider.available
                              ? "Available now"
                              : "Currently unavailable"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* ----- ACTIONS ----- */}

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {/* ----- CALL ----- */}

                      <a
                        href={`tel:${provider.phone}`}
                        className="
                          flex
                          h-10
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
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

                      {/* ----- WHATSAPP ----- */}

                      <a
                        href={`https://wa.me/${String(
                          provider.whatsapp || "",
                        ).replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          flex
                          h-10
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
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
          ) : (
            /* ----- EMPTY STATE ----- */

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
              <div
                className="
                  mx-auto
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#F1F5F9]
                  text-[#6B7280]
                "
              >
                <HugeiconsIcon
                  icon={Location01Icon}
                  size={23}
                  strokeWidth={1.8}
                />
              </div>

              <h3 className="mt-4 font-bold text-[#10231A]">
                No helpers found
              </h3>

              <p className="mt-1 text-sm text-[#6B7280]">
                Try searching for another service or helper.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default NearbyServicesPage;
