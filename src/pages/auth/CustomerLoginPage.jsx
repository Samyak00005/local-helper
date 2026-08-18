import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { HugeiconsIcon } from "@hugeicons/react";

import {
  ArrowLeft01Icon,
  ArrowRight02Icon,
  EyeIcon,
  EyeOffIcon,
  LockPasswordIcon,
  Mail01Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";

/* =========================================================
   API CONFIG

   Later production me .env me:
   VITE_API_BASE_URL=https://api.yourdomain.com
========================================================= */

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

function CustomerLoginPage() {
  const navigate = useNavigate();

  /* =======================================================
     FORM STATE
  ======================================================= */

  const [showPassword, setShowPassword] = useState(false);

  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  /* =======================================================
     PHONE NORMALIZER
  ======================================================= */

  const normalizePhone = (value) => {
    return String(value || "")
      .replace(/\D/g, "")
      .slice(0, 15);
  };

  /* ----- LOGIN ----- */

  const handleLogin = async (event) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    setError("");
    setSuccessMessage("");

    const cleanPhone = normalizePhone(phone);

    const cleanPassword = password.trim();

    /* =====================================================
       FRONTEND VALIDATION
    ===================================================== */

    if (!cleanPhone) {
      setError("Please enter your mobile number.");

      return;
    }

    if (cleanPhone.length < 10 || cleanPhone.length > 15) {
      setError("Please enter a valid mobile number.");

      return;
    }

    if (!cleanPassword) {
      setError("Please enter your password.");

      return;
    }

    if (cleanPassword.length < 6) {
      setError("Password must be at least 6 characters.");

      return;
    }

    setLoading(true);

    try {
      /* ===================================================
         STEP 1
         LOGIN API
      =================================================== */

      const loginResponse = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",

          Accept: "application/json",
        },

        body: JSON.stringify({
          phone: cleanPhone,
          password: cleanPassword,
        }),
      });

      let loginData = null;

      try {
        loginData = await loginResponse.json();
      } catch {
        throw new Error("Invalid response received from server.");
      }

      if (!loginResponse.ok || !loginData?.success) {
        throw new Error(
          loginData?.message ||
            "Login failed. Please check your mobile number and password.",
        );
      }

      /* ===================================================
         CHECK TOKEN
      =================================================== */

      const token = loginData?.token;

      if (!token) {
        throw new Error("Authentication token was not received.");
      }

      /* ===================================================
         STEP 2
         VERIFY TOKEN USING /ME
      =================================================== */

      const meResponse = await fetch(`${API_BASE_URL}/api/auth/me`, {
        method: "GET",

        headers: {
          Accept: "application/json",

          Authorization: `Bearer ${token}`,
        },
      });

      let meData = null;

      try {
        meData = await meResponse.json();
      } catch {
        throw new Error("Unable to verify login session.");
      }

      if (!meResponse.ok || !meData?.success || !meData?.user) {
        throw new Error(meData?.message || "Unable to verify your account.");
      }

      /* ===================================================
         CUSTOMER ROLE CHECK
      =================================================== */

      const roles = Array.isArray(meData.user.roles) ? meData.user.roles : [];

      if (!roles.includes("CUSTOMER")) {
        throw new Error("This account does not have customer access.");
      }

      /* ===================================================
         SAVE AUTH DATA
      =================================================== */

      localStorage.setItem("local_sewa_token", token);

      localStorage.setItem("local_sewa_user", JSON.stringify(meData.user));

      localStorage.setItem("local_sewa_active_role", "CUSTOMER");

      /* ===================================================
         SUCCESS
      =================================================== */

      setSuccessMessage(`Welcome back, ${meData.user.full_name}!`);

      /*
       * Small delay so success message
       * is visible before redirect.
       */

      setTimeout(() => {
        navigate("/", {
          replace: true,
        });
      }, 500);
    } catch (error) {
      console.error("CUSTOMER LOGIN ERROR:", error);

      setError(error?.message || "Unable to login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  /* =======================================================
     UI
  ======================================================= */

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
      {/* ===================================================
          DECORATIVE BACKGROUND
      =================================================== */}

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

      {/* ===================================================
          PAGE
      =================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-[calc(100vh-4rem)]
          w-full
          max-w-md
          items-center
          justify-center
        "
      >
        <div className="w-full">
          {/* =================================================
              BACK
          ================================================= */}

          <Link
            to="/auth"
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
            Choose account type
          </Link>

          {/* =================================================
              BRAND
          ================================================= */}

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
              Local help. Trusted people.
            </p>
          </div>

          {/* =================================================
              LOGIN CARD
          ================================================= */}

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
            {/* ===============================================
                HEADER
            =============================================== */}

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
                <HugeiconsIcon icon={UserIcon} size={24} strokeWidth={1.8} />
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
                Customer
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
                Welcome back
              </h2>

              <p className="mt-1.5 text-sm text-[#64748B]">
                Login to find and book local services.
              </p>
            </div>

            {/* ===============================================
                FORM
            =============================================== */}

            <form
              onSubmit={handleLogin}
              className="
                space-y-4
                px-5
                pb-6
                sm:px-7
              "
            >
              {/* =============================================
                  ERROR
              ============================================= */}

              {error && (
                <div
                  role="alert"
                  className="
                    rounded-xl
                    border
                    border-red-200
                    bg-red-50
                    px-3.5
                    py-3
                    text-xs
                    font-semibold
                    leading-5
                    text-red-700
                  "
                >
                  {error}
                </div>
              )}

              {/* =============================================
                  SUCCESS
              ============================================= */}

              {successMessage && (
                <div
                  className="
                    rounded-xl
                    border
                    border-green-200
                    bg-green-50
                    px-3.5
                    py-3
                    text-xs
                    font-semibold
                    leading-5
                    text-green-700
                  "
                >
                  {successMessage}
                </div>
              )}

              {/* =============================================
                  MOBILE
              ============================================= */}

              <div>
                <label
                  htmlFor="customer-login-phone"
                  className="
                    mb-1.5
                    block
                    text-[11px]
                    font-bold
                    text-[#334155]
                  "
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
                    transition
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
                    className="
                      shrink-0
                      text-[#94A3B8]
                    "
                  />

                  <input
                    id="customer-login-phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    placeholder="Enter mobile number"
                    value={phone}
                    disabled={loading}
                    onChange={(event) => {
                      setPhone(normalizePhone(event.target.value));

                      if (error) {
                        setError("");
                      }
                    }}
                    className="
                      min-w-0
                      flex-1
                      bg-transparent
                      text-sm
                      font-medium
                      text-[#10231A]
                      outline-none
                      placeholder:text-[#A0AAA5]
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  />
                </div>
              </div>

              {/* =============================================
                  PASSWORD
              ============================================= */}

              <div>
                <div
                  className="
                    mb-1.5
                    flex
                    items-center
                    justify-between
                  "
                >
                  <label
                    htmlFor="customer-login-password"
                    className="
                      text-[11px]
                      font-bold
                      text-[#334155]
                    "
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    disabled={loading}
                    onClick={() => {
                      setError(
                        "Forgot password feature will be available soon.",
                      );
                    }}
                    className="
                      text-[10px]
                      font-semibold
                      text-[#16A34A]
                      hover:text-[#15803D]
                      hover:underline
                      disabled:cursor-not-allowed
                      disabled:opacity-50
                    "
                  >
                    Forgot password?
                  </button>
                </div>

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
                    transition
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
                    className="
                      shrink-0
                      text-[#94A3B8]
                    "
                  />

                  <input
                    id="customer-login-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={password}
                    disabled={loading}
                    onChange={(event) => {
                      setPassword(event.target.value);

                      if (error) {
                        setError("");
                      }
                    }}
                    className="
                      min-w-0
                      flex-1
                      bg-transparent
                      text-sm
                      font-medium
                      text-[#10231A]
                      outline-none
                      placeholder:text-[#A0AAA5]
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  />

                  <button
                    type="button"
                    disabled={loading}
                    onClick={() => setShowPassword((previous) => !previous)}
                    className="
                      text-[#94A3B8]
                      hover:text-[#16A34A]
                      disabled:cursor-not-allowed
                      disabled:opacity-50
                    "
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    <HugeiconsIcon
                      icon={showPassword ? EyeOffIcon : EyeIcon}
                      size={18}
                      strokeWidth={1.7}
                    />
                  </button>
                </div>
              </div>

              {/* =============================================
                  LOGIN
              ============================================= */}

              <button
                type="submit"
                disabled={loading}
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
                  disabled:cursor-not-allowed
                  disabled:bg-[#86CFA0]
                  disabled:active:scale-100
                "
              >
                {loading ? (
                  <>
                    <span
                      className="
                        h-4
                        w-4
                        animate-spin
                        rounded-full
                        border-2
                        border-white/40
                        border-t-white
                      "
                    />
                    Logging in...
                  </>
                ) : (
                  <>
                    Login as Customer
                    <HugeiconsIcon
                      icon={ArrowRight02Icon}
                      size={17}
                      strokeWidth={2}
                    />
                  </>
                )}
              </button>
            </form>

            {/* ===============================================
                REGISTER
            =============================================== */}

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
                Don't have a customer account?{" "}
                <Link
                  to="/auth/customer/register"
                  className="
                    font-bold
                    text-[#16A34A]
                    hover:text-[#15803D]
                  "
                >
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CustomerLoginPage;
