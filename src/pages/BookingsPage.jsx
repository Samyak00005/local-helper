import { useState } from "react";
import { Link } from "react-router-dom";

import { HugeiconsIcon } from "@hugeicons/react";

import {
  ArrowLeft01Icon,
  Calendar03Icon,
  Call02Icon,
  CheckmarkCircle01Icon,
  Clock01Icon,
  Location01Icon,
  StarIcon,
} from "@hugeicons/core-free-icons";

import Header from "../components/Header";

/* ----- PAST BOOKINGS DATA ----- */

const pastBookings = [
  {
    id: 1,
    service: "Electrician",
    helper: "Raj Electrical Services",
    location: "Tukum, Chandrapur",
    date: "12 Aug 2026",
    time: "10:30 AM",
    status: "completed",
    rating: 4.7,
    canRate: false,
    canRebook: true,
  },
  {
    id: 2,
    service: "Plumber",
    helper: "Shree Pipe Solutions",
    location: "Wadgaon, Chandrapur",
    date: "05 Aug 2026",
    time: "2:00 PM",
    status: "completed",
    rating: null,
    canRate: true,
    canRebook: true,
  },
  {
    id: 3,
    service: "Cleaning",
    helper: "HomeCare Cleaning",
    location: "Padoli, Chandrapur",
    date: "28 Jul 2026",
    time: "11:00 AM",
    status: "completed",
    rating: 5.0,
    canRate: false,
    canRebook: true,
  },
  {
    id: 4,
    service: "Mechanic",
    helper: "Raj Auto Services",
    location: "Tukum, Chandrapur",
    date: "19 Jul 2026",
    time: "4:30 PM",
    status: "cancelled",
    rating: null,
    canRate: false,
    canRebook: true,
    reason: "Booking was cancelled before the service.",
  },
  {
    id: 5,
    service: "AC Repair",
    helper: "CoolCare AC Services",
    location: "Tukum, Chandrapur",
    date: "10 Jul 2026",
    time: "11:00 AM",
    status: "not_completed",
    rating: null,
    canRate: false,
    canRebook: true,
    reason: "Helper was unavailable to complete the service.",
  },
  {
    id: 6,
    service: "Carpenter",
    helper: "Mohan Carpenter Works",
    location: "Tukum, Chandrapur",
    date: "02 Jul 2026",
    time: "3:00 PM",
    status: "completed",
    rating: null,
    canRate: true,
    canRebook: true,
  },
];

function BookingsPage() {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="min-h-screen bg-[#F7FAF8] pb-24 text-[#111827] md:pb-0">
      <Header />

      {/* ----- PAGE HEADER ----- */}
      <header className="border-b border-[#E5EDE8] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          {/* ----- BACK ----- */}

          <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-1.5
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

          {/* ----- TITLE ----- */}

          <div className="mt-4">
            <h1
              className="
                text-3xl
                font-extrabold
                tracking-[-0.035em]
                text-[#10231A]
                sm:text-3xl
              "
            >
              My Bookings
            </h1>

            <p className="mt-1 text-sm text-[#6B7280]">
              Manage your current and past service bookings
            </p>
          </div>
        </div>
      </header>

      {/* ----- BOOKING TABS ----- */}

      <section className="bg-white px-4 pb-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 rounded-2xl bg-[#F1F5F3] p-1">
            {/* ----- UPCOMING ----- */}

            <button
              type="button"
              onClick={() => setActiveTab("upcoming")}
              className={`
                rounded-xl
                px-3
                py-2.5
                text-sm
                font-bold
                transition
                ${
                  activeTab === "upcoming"
                    ? "bg-white text-[#15803D] shadow-sm"
                    : "text-[#6B7280] hover:text-[#15803D]"
                }
              `}
            >
              Upcoming
            </button>

            {/* ----- PAST ----- */}

            <button
              type="button"
              onClick={() => setActiveTab("past")}
              className={`
                rounded-xl
                px-3
                py-2.5
                text-sm
                font-bold
                transition
                ${
                  activeTab === "past"
                    ? "bg-white text-[#15803D] shadow-sm"
                    : "text-[#6B7280] hover:text-[#15803D]"
                }
              `}
            >
              Past
            </button>
          </div>
        </div>
      </section>

      {/* ----- BOOKING CONTENT ----- */}

      <main className="px-4 pb-10 pt-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {activeTab === "upcoming" ? (
            /* ----- UPCOMING BOOKINGS ----- */

            <section>
              <div className="mb-4">
                <h2 className="text-lg font-extrabold text-[#10231A]">
                  Upcoming bookings
                </h2>

                <p className="mt-1 text-xs text-[#6B7280]">
                  Your current and scheduled services
                </p>
              </div>

              <EmptyBookingsState
                title="No upcoming bookings"
                description="Your scheduled services will appear here."
              />
            </section>
          ) : (
            /* ----- PAST BOOKINGS ----- */

            <section>
              <div className="mb-4">
                <h2 className="text-lg font-extrabold text-[#10231A]">
                  Past bookings
                </h2>

                <p className="mt-1 text-xs text-[#6B7280]">
                  Services you have previously booked
                </p>
              </div>

              {/* ----- PAST BOOKING LIST ----- */}

              <div className="space-y-3">
                {pastBookings.map((booking) => (
                  <PastBookingCard key={booking.id} booking={booking} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

/* ----- PAST BOOKING CARD ----- */

function PastBookingCard({ booking }) {
  const isCompleted = booking.status === "completed";
  const isCancelled = booking.status === "cancelled";
  const isNotCompleted = booking.status === "not_completed";

  return (
    <article
      className="
        rounded-[22px]
        border
        border-[#E3ECE6]
        bg-white
        p-4
        shadow-[0_4px_20px_rgba(15,23,42,0.04)]
        sm:p-5
      "
    >
      {/* ----- BOOKING HEADER ----- */}

      <div className="flex items-start justify-between gap-3">
        {/* ----- SERVICE INFO ----- */}

        <div className="flex min-w-0 items-center gap-3">
          <div
            className={`
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-[14px]
              ${
                isCompleted
                  ? "bg-[#ECFDF3] text-[#16A34A]"
                  : isNotCompleted
                    ? "bg-[#FFF7ED] text-[#EA580C]"
                    : "bg-[#FEF2F2] text-[#DC2626]"
              }
            `}
          >
            <HugeiconsIcon icon={Calendar03Icon} size={22} strokeWidth={1.8} />
          </div>

          {/* ----- HELPER INFO ----- */}

          <div className="min-w-0">
            <h3 className="truncate text-sm font-extrabold text-[#10231A]">
              {booking.helper}
            </h3>

            <p className="mt-0.5 text-xs font-medium text-[#6B7280]">
              {booking.service}
            </p>
          </div>
        </div>

        {/* ----- STATUS ----- */}

        {isCompleted && (
          <div
            className="
              flex
              shrink-0
              items-center
              gap-1
              rounded-full
              bg-[#ECFDF3]
              px-2.5
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
            Completed
          </div>
        )}

        {isNotCompleted && (
          <div
            className="
              flex
              shrink-0
              items-center
              rounded-full
              bg-[#FFF7ED]
              px-2.5
              py-1
              text-[10px]
              font-bold
              text-[#C2410C]
            "
          >
            Not completed
          </div>
        )}

        {isCancelled && (
          <div
            className="
              flex
              shrink-0
              items-center
              rounded-full
              bg-[#FEF2F2]
              px-2.5
              py-1
              text-[10px]
              font-bold
              text-[#B91C1C]
            "
          >
            Cancelled
          </div>
        )}
      </div>

      {/* ----- BOOKING DETAILS ----- */}

      <div
        className="
          mt-4
          grid
          grid-cols-1
          gap-2
          rounded-2xl
          bg-[#F8FAF9]
          p-3
          sm:grid-cols-2
        "
      >
        {/* ----- DATE ----- */}

        <div className="flex items-center gap-2.5">
          <HugeiconsIcon
            icon={Calendar03Icon}
            size={17}
            strokeWidth={1.8}
            className="shrink-0 text-[#16A34A]"
          />

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-[#9CA3AF]">
              Date
            </p>

            <p className="mt-0.5 text-xs font-bold text-[#334155]">
              {booking.date}
            </p>
          </div>
        </div>

        {/* ----- TIME ----- */}

        <div className="flex items-center gap-2.5">
          <HugeiconsIcon
            icon={Clock01Icon}
            size={17}
            strokeWidth={1.8}
            className="shrink-0 text-[#16A34A]"
          />

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-[#9CA3AF]">
              Time
            </p>

            <p className="mt-0.5 text-xs font-bold text-[#334155]">
              {booking.time}
            </p>
          </div>
        </div>

        {/* ----- LOCATION ----- */}

        <div className="flex items-center gap-2.5 sm:col-span-2">
          <HugeiconsIcon
            icon={Location01Icon}
            size={17}
            strokeWidth={1.8}
            className="shrink-0 text-[#16A34A]"
          />

          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-[#9CA3AF]">
              Location
            </p>

            <p className="mt-0.5 truncate text-xs font-bold text-[#334155]">
              {booking.location}
            </p>
          </div>
        </div>
      </div>

      {/* ----- NOT COMPLETED / CANCELLED REASON ----- */}

      {(isNotCompleted || isCancelled) && booking.reason && (
        <div
          className={`
            mt-3
            rounded-xl
            px-3
            py-2.5
            text-xs
            ${
              isNotCompleted
                ? "bg-[#FFF7ED] text-[#9A3412]"
                : "bg-[#FEF2F2] text-[#991B1B]"
            }
          `}
        >
          <span className="font-bold">
            {isNotCompleted ? "Reason: " : "Cancellation: "}
          </span>

          {booking.reason}
        </div>
      )}

      {/* ----- RATING ----- */}

      {isCompleted && booking.rating !== null && (
        <div className="mt-3 flex items-center justify-between">
          <p className="text-xs text-[#6B7280]">Your rating</p>

          <div className="flex items-center gap-1">
            <HugeiconsIcon
              icon={StarIcon}
              size={15}
              strokeWidth={2}
              className="text-[#F59E0B]"
            />

            <span className="text-xs font-bold text-[#334155]">
              {booking.rating.toFixed(1)}
            </span>
          </div>
        </div>
      )}

      {/* ----- UNRATED ----- */}

      {isCompleted && booking.canRate && <RatingSection />}

      {/* ----- ACTIONS ----- */}

      {booking.canRebook && (
        <div className="mt-4 grid grid-cols-2 gap-2">
          {/* ----- REBOOK ----- */}

          <button
            type="button"
            className="
              flex
              h-10
              items-center
              justify-center
              rounded-xl
              bg-[#16A34A]
              text-sm
              font-bold
              text-white
              transition
              hover:bg-[#15803D]
              active:scale-[0.98]
            "
          >
            Rebook
          </button>

          {/* ----- CONTACT ----- */}

          <button
            type="button"
            className="
              flex
              h-10
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-[#E3ECE6]
              bg-white
              text-sm
              font-bold
              text-[#334155]
              transition
              hover:bg-[#F1F5F3]
              active:scale-[0.98]
            "
          >
            <HugeiconsIcon icon={Call02Icon} size={16} strokeWidth={2} />
            Contact
          </button>
        </div>
      )}
    </article>
  );
}

/* ----- RATING SECTION ----- */

function RatingSection() {
  const [rating, setRating] = useState(0);

  return (
    <div
      className="
        mt-3
        rounded-2xl
        border
        border-[#BBF7D0]
        bg-[#F0FDF4]
        px-4
        py-4
      "
    >
      {/* ----- RATING MESSAGE ----- */}

      <div className="text-center">
        <p className="text-sm font-bold text-[#15803D]">
          How was your service?
        </p>

        <p className="mt-1 text-xs text-[#6B7280]">
          Rate your experience with this helper.
        </p>
      </div>

      {/* ----- STAR RATING ----- */}

      <div className="mt-3 flex justify-center gap-1.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              transition
              hover:bg-[#DCFCE7]
              active:scale-90
            "
            aria-label={`Rate ${star} out of 5`}
          >
            <HugeiconsIcon
              icon={StarIcon}
              size={25}
              strokeWidth={1.8}
              className={star <= rating ? "text-[#F59E0B]" : "text-[#CBD5E1]"}
            />
          </button>
        ))}
      </div>

      {/* ----- SELECTED RATING ----- */}

      {rating > 0 && (
        <p className="mt-1 text-center text-xs font-semibold text-[#6B7280]">
          You selected {rating} {rating === 1 ? "star" : "stars"}
        </p>
      )}

      {/* ----- SUBMIT RATING ----- */}

      {rating > 0 && (
        <button
          type="button"
          className="
            mx-auto
            mt-3
            flex
            h-9
            items-center
            justify-center
            rounded-xl
            bg-[#16A34A]
            px-4
            text-xs
            font-bold
            text-white
            transition
            hover:bg-[#15803D]
            active:scale-[0.97]
          "
        >
          Submit Rating
        </button>
      )}
    </div>
  );
}

/* ----- EMPTY BOOKING STATE ----- */

function EmptyBookingsState({ title, description }) {
  return (
    <div
      className="
        rounded-[22px]
        border
        border-[#E3ECE6]
        bg-white
        px-5
        py-12
        text-center
        shadow-[0_4px_20px_rgba(15,23,42,0.04)]
      "
    >
      {/* ----- ICON ----- */}

      <div
        className="
          mx-auto
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-[#ECFDF3]
          text-[#16A34A]
        "
      >
        <HugeiconsIcon icon={Calendar03Icon} size={26} strokeWidth={1.8} />
      </div>

      {/* ----- TITLE ----- */}

      <h3 className="mt-4 text-base font-extrabold text-[#10231A]">{title}</h3>

      {/* ----- DESCRIPTION ----- */}

      <p className="mx-auto mt-1 max-w-xs text-sm leading-5 text-[#6B7280]">
        {description}
      </p>

      {/* ----- BROWSE SERVICES ----- */}

      <Link
        to="/services"
        className="
          mt-5
          inline-flex
          h-10
          items-center
          justify-center
          rounded-xl
          bg-[#16A34A]
          px-5
          text-sm
          font-bold
          text-white
          transition
          hover:bg-[#15803D]
          active:scale-[0.98]
        "
      >
        Browse Services
      </Link>
    </div>
  );
}

export default BookingsPage;
