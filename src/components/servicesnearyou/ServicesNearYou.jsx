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
    .slice(0, 5);

  return (
    <section className="px-4 pb-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold tracking-tight text-[#111827]">
              Services near you
            </h2>

            <p className="mt-1 text-xs text-[#6B7280]">
              Local providers you can contact directly
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

        {/* Provider Cards */}
        <div className="space-y-3">
          {nearbyServices.map((service) => (
            <Link
              key={service.id}
              to={`/provider/${service.id}`}
              className="block rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-sm transition hover:border-[#BBF7D0] hover:shadow-md"
            >
              <div className="flex gap-3">
                {/* Service Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#DCFCE7] text-[#15803D]">
                  <HugeiconsIcon
                    icon={serviceIcons[service.category] || FlashIcon}
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
                        {service.category
                          .replace("-", " ")
                          .replace(/\b\w/g, (letter) =>
                            letter.toUpperCase(),
                          )}{" "}
                        · {service.location}
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
                <a
                  href={`tel:${service.phone}`}
                  onClick={(event) => event.stopPropagation()}
                  className="flex h-10 items-center justify-center gap-2 rounded-xl bg-[#16A34A] text-sm font-semibold text-white transition hover:bg-[#15803D] active:scale-[0.98]"
                >
                  <HugeiconsIcon icon={Call02Icon} size={17} strokeWidth={2} />
                  Call
                </a>

                <a
                  href={`https://wa.me/${service.whatsapp.replace(
                    /[^0-9]/g,
                    "",
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesNearYou;
