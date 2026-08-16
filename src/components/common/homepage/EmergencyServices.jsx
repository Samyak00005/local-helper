import { HugeiconsIcon } from "@hugeicons/react";

import { ArrowRight02Icon, Shield01Icon } from "@hugeicons/core-free-icons";

import { Link } from "react-router-dom";

function EmergencyServices() {
  return (
    <section className="px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div
          className="
            relative
            overflow-hidden
            rounded-[26px]
            border
            border-[#CDEFD8]
            bg-gradient-to-br
            from-[#F0FDF4]
            via-[#E8F9ED]
            to-[#D7F5E1]
            p-5
            sm:p-7
          "
        >
          {/* Decorative Circle */}

          <div
            className="
              pointer-events-none
              absolute
              -right-10
              -top-10
              h-32
              w-32
              rounded-full
              bg-[#22C55E]/10
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-16
              right-20
              h-32
              w-32
              rounded-full
              bg-[#16A34A]/10
            "
          />

          <div className="relative flex items-center justify-between gap-5">
            <div className="max-w-xl">
              <div
                className="
                  mb-3
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white/80
                  px-3
                  py-1.5
                  text-[10px]
                  font-bold
                  text-[#15803D]
                  shadow-sm
                "
              >
                <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
                Available nearby
              </div>

              <h2
                className="
                  text-xl
                  font-extrabold
                  tracking-[-0.035em]
                  text-[#14532D]
                  sm:text-2xl
                "
              >
                Need help now?
              </h2>

              <p
                className="
                  mt-1.5
                  text-xs
                  leading-5
                  text-[#527060]
                  sm:text-sm
                "
              >
                Get instant help from nearby professionals for urgent service
                needs.
              </p>

              <Link
                to="/emergency"
                className="
                  mt-4
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#16A34A]
                  px-5
                  py-2.5
                  text-xs
                  font-bold
                  text-white
                  shadow-[0_8px_20px_rgba(22,163,74,0.20)]
                  transition
                  hover:bg-[#15803D]
                  active:scale-95
                "
              >
                Emergency Services
                <HugeiconsIcon
                  icon={ArrowRight02Icon}
                  size={16}
                  strokeWidth={2}
                />
              </Link>
            </div>

            {/* Right Icon */}

            <div className="hidden shrink-0 sm:flex">
              <div
                className="
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  shadow-[0_10px_30px_rgba(21,128,61,0.12)]
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-[#DCFCE7]
                    text-[#15803D]
                  "
                >
                  <HugeiconsIcon
                    icon={Shield01Icon}
                    size={30}
                    strokeWidth={1.8}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmergencyServices;
