import { useState } from "react";
import { Link } from "react-router-dom";

import { HugeiconsIcon } from "@hugeicons/react";

import {
  ArrowLeft01Icon,
  ArrowRight02Icon,
  Briefcase01Icon,
  EyeIcon,
  EyeOffIcon,
  LockPasswordIcon,
  Mail01Icon,
  CallIcon,
  UserIcon,
} from "@hugeicons/core-free-icons";

function ProviderRegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-gradient-to-br
        from-[#F0FDF4]
        via-[#E8F9ED]
        to-[#D7F5E1]
        px-4
        py-8
        sm:px-6
      "
    >
      {/* ----- DECORATIVE BACKGROUND ----- */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-64
          w-64
          rounded-full
          bg-[#22C55E]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          -left-20
          h-72
          w-72
          rounded-full
          bg-[#16A34A]/10
        "
      />

      {/* ----- CONTENT ----- */}

      <div className="relative mx-auto w-full max-w-md">
        {/* ----- BACK ----- */}

        <Link
          to="/auth/provider/login"
          className="
            mb-4
            inline-flex
            items-center
            gap-1.5
            text-xs
            font-semibold
            text-[#527060]
            transition
            hover:text-[#15803D]
          "
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} size={16} strokeWidth={1.8} />
          Back to Login
        </Link>

        {/* ----- BRAND ----- */}

        <div className="mb-6 text-center">
          <h1
            className="
              text-2xl
              font-extrabold
              tracking-[-0.04em]
              text-[#14532D]
            "
          >
            Local Sewa
          </h1>

          <p className="mt-1 text-xs text-[#527060]">
            Grow your local service.
          </p>
        </div>

        {/* ----- REGISTER CARD ----- */}

        <div
          className="
            overflow-hidden
            rounded-[28px]
            border
            border-[#CDEFD8]
            bg-white
            shadow-[0_15px_45px_rgba(21,128,61,0.12)]
          "
        >
          {/* ----- HEADER ----- */}

          <div className="px-5 pb-5 pt-6 sm:px-7">
            <div
              className="
                mb-4
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-[#ECFDF3]
                text-[#16A34A]
              "
            >
              <HugeiconsIcon
                icon={Briefcase01Icon}
                size={24}
                strokeWidth={1.8}
              />
            </div>

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#16A34A]
              "
            >
              Service Provider Registration
            </p>

            <h2
              className="
                mt-1
                text-2xl
                font-extrabold
                tracking-[-0.035em]
                text-[#10231A]
              "
            >
              Become a provider
            </h2>

            <p className="mt-1.5 text-sm text-[#64748B]">
              Create your account and start offering your services locally.
            </p>
          </div>

          {/* ----- FORM ----- */}

          <form
            onSubmit={(event) => event.preventDefault()}
            className="space-y-4 px-5 pb-6 sm:px-7"
          >
            {/* ----- FULL NAME ----- */}

            <div>
              <label
                htmlFor="provider-name"
                className="mb-1.5 block text-[11px] font-bold text-[#334155]"
              >
                Full Name
              </label>

              <div
                className="
                  flex
                  h-12
                  items-center
                  gap-2.5
                  rounded-xl
                  border
                  border-[#DDE9E1]
                  bg-[#FAFCFB]
                  px-3
                  focus-within:border-[#86EFAC]
                  focus-within:bg-white
                  focus-within:ring-4
                  focus-within:ring-[#DCFCE7]
                "
              >
                <HugeiconsIcon
                  icon={UserIcon}
                  size={18}
                  strokeWidth={1.7}
                  className="text-[#94A3B8]"
                />

                <input
                  id="provider-name"
                  type="text"
                  placeholder="Enter your full name"
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#A0AAA5]"
                  required
                />
              </div>
            </div>

            {/* ----- MOBILE ----- */}

            <div>
              <label
                htmlFor="provider-mobile"
                className="mb-1.5 block text-[11px] font-bold text-[#334155]"
              >
                Mobile Number
              </label>

              <div
                className="
                  flex
                  h-12
                  items-center
                  gap-2.5
                  rounded-xl
                  border
                  border-[#DDE9E1]
                  bg-[#FAFCFB]
                  px-3
                  focus-within:border-[#86EFAC]
                  focus-within:bg-white
                  focus-within:ring-4
                  focus-within:ring-[#DCFCE7]
                "
              >
                <HugeiconsIcon
                  icon={CallIcon}
                  size={18}
                  strokeWidth={1.7}
                  className="text-[#94A3B8]"
                />

                <input
                  id="provider-mobile"
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#A0AAA5]"
                  required
                />
              </div>
            </div>

            {/* ----- EMAIL ----- */}

            <div>
              <label
                htmlFor="provider-email"
                className="mb-1.5 block text-[11px] font-bold text-[#334155]"
              >
                Email Address
              </label>

              <div
                className="
                  flex
                  h-12
                  items-center
                  gap-2.5
                  rounded-xl
                  border
                  border-[#DDE9E1]
                  bg-[#FAFCFB]
                  px-3
                  focus-within:border-[#86EFAC]
                  focus-within:bg-white
                  focus-within:ring-4
                  focus-within:ring-[#DCFCE7]
                "
              >
                <HugeiconsIcon
                  icon={Mail01Icon}
                  size={18}
                  strokeWidth={1.7}
                  className="text-[#94A3B8]"
                />

                <input
                  id="provider-email"
                  type="email"
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#A0AAA5]"
                />
              </div>
            </div>

            {/* ----- PASSWORD ----- */}

            <div>
              <label
                htmlFor="provider-password"
                className="mb-1.5 block text-[11px] font-bold text-[#334155]"
              >
                Password
              </label>

              <div
                className="
                  flex
                  h-12
                  items-center
                  gap-2.5
                  rounded-xl
                  border
                  border-[#DDE9E1]
                  bg-[#FAFCFB]
                  px-3
                  focus-within:border-[#86EFAC]
                  focus-within:bg-white
                  focus-within:ring-4
                  focus-within:ring-[#DCFCE7]
                "
              >
                <HugeiconsIcon
                  icon={LockPasswordIcon}
                  size={18}
                  strokeWidth={1.7}
                  className="text-[#94A3B8]"
                />

                <input
                  id="provider-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#A0AAA5]"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((previous) => !previous)}
                  className="text-[#94A3B8] hover:text-[#16A34A]"
                >
                  <HugeiconsIcon
                    icon={showPassword ? EyeOffIcon : EyeIcon}
                    size={18}
                    strokeWidth={1.7}
                  />
                </button>
              </div>
            </div>

            {/* ----- CONFIRM PASSWORD ----- */}

            <div>
              <label
                htmlFor="provider-confirm-password"
                className="mb-1.5 block text-[11px] font-bold text-[#334155]"
              >
                Confirm Password
              </label>

              <div
                className="
                  flex
                  h-12
                  items-center
                  gap-2.5
                  rounded-xl
                  border
                  border-[#DDE9E1]
                  bg-[#FAFCFB]
                  px-3
                  focus-within:border-[#86EFAC]
                  focus-within:bg-white
                  focus-within:ring-4
                  focus-within:ring-[#DCFCE7]
                "
              >
                <HugeiconsIcon
                  icon={LockPasswordIcon}
                  size={18}
                  strokeWidth={1.7}
                  className="text-[#94A3B8]"
                />

                <input
                  id="provider-confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#A0AAA5]"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword((previous) => !previous)
                  }
                  className="text-[#94A3B8] hover:text-[#16A34A]"
                >
                  <HugeiconsIcon
                    icon={showConfirmPassword ? EyeOffIcon : EyeIcon}
                    size={18}
                    strokeWidth={1.7}
                  />
                </button>
              </div>
            </div>

            {/* ----- TERMS ----- */}

            <label className="flex items-start gap-2 pt-1">
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 accent-[#16A34A]"
                required
              />

              <span className="text-[10px] leading-4 text-[#64748B]">
                I agree to the{" "}
                <Link to="/terms" className="font-bold text-[#15803D]">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="font-bold text-[#15803D]">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>

            {/* ----- CREATE ACCOUNT ----- */}

            <button
              type="submit"
              className="
                flex
                h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#16A34A]
                text-sm
                font-bold
                text-white
                shadow-[0_8px_20px_rgba(22,163,74,0.18)]
                transition
                hover:bg-[#15803D]
                active:scale-[0.99]
              "
            >
              Create Provider Account
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                size={17}
                strokeWidth={2}
              />
            </button>
          </form>

          {/* ----- LOGIN ----- */}

          <div
            className="
              border-t
              border-[#EEF3F0]
              bg-[#FAFCFB]
              px-5
              py-4
              text-center
            "
          >
            <p className="text-xs text-[#64748B]">
              Already a service provider?{" "}
              <Link
                to="/auth/provider/login"
                className="font-bold text-[#16A34A]"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProviderRegisterPage;
