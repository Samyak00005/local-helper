import { Route, Routes, useLocation } from "react-router-dom";

import BottomNavBar from "./components/BottomNavBar";
import ScrollToTop from "./components/ScrollToTop";

/* =========================================================
   CUSTOMER / MAIN PAGES
========================================================= */

import AllServicesPage from "./pages/AllServicesPage";
import AuthPage from "./pages/AuthPage";
import BookingsPage from "./pages/BookingsPage";
import HomePage from "./pages/HomePage";
import NearbyServicesPage from "./pages/NearbyServicesPage";
import ProfilePage from "./pages/ProfilePage";
import SavedPage from "./pages/SavedPage";
import ServiceCategoryPage from "./pages/ServiceCategoryPage";

/* =========================================================
   AUTHENTICATION PAGES
========================================================= */

import CustomerLoginPage from "./pages/auth/CustomerLoginPage";
import CustomerRegisterPage from "./pages/auth/CustomerRegisterPage";
import ProviderLoginPage from "./pages/auth/ProviderLoginPage";
import ProviderRegisterPage from "./pages/auth/ProviderRegisterPage";

/* =========================================================
   SERVICE PROVIDER PAGES
   NOTE:
   Provider page files currently exist inside:
   src/components/serviceprovider/
========================================================= */

import ProviderDashboardPage from "./components/serviceprovider/ProviderDashboardPage";
import ProviderRequestsPage from "./components/serviceprovider/ProviderRequestsPage";
import ProviderServicesPage from "./components/serviceprovider/ProviderServicesPage";
import ProviderProfilePage from "./components/serviceprovider/ProviderProfilePage";
import ProviderReviewsPage from "./components/serviceprovider/ProviderReviewsPage";

/* =========================================================
   APP
========================================================= */

function App() {
  const location = useLocation();

  /* =======================================================
     CHECK CURRENT ROUTE
  ======================================================= */

  const isProviderRoute = location.pathname.startsWith("/provider");

  const isAuthRoute = location.pathname.startsWith("/auth");

  /*
    Customer bottom navigation:
    - Customer pages = show
    - Auth pages = hide
    - Provider pages = hide

    Provider pages already use ProviderBottomNav.
  */

  const showCustomerBottomNav = !isProviderRoute && !isAuthRoute;

  return (
    <div
      className={`min-h-screen ${
        showCustomerBottomNav ? "pb-24 md:pb-0" : ""
      }`}
    >
      {/* =====================================================
          SCROLL TO TOP
      ===================================================== */}

      <ScrollToTop />

      {/* =====================================================
          ROUTES
      ===================================================== */}

      <Routes>
        {/* ===================================================
            AUTHENTICATION
        =================================================== */}

        <Route path="/auth" element={<AuthPage />} />

        {/* CUSTOMER LOGIN */}

        <Route
          path="/auth/customer/login"
          element={<CustomerLoginPage />}
        />

        {/* CUSTOMER REGISTER */}

        <Route
          path="/auth/customer/register"
          element={<CustomerRegisterPage />}
        />

        {/* PROVIDER LOGIN */}

        <Route
          path="/auth/provider/login"
          element={<ProviderLoginPage />}
        />

        {/* PROVIDER REGISTER */}

        <Route
          path="/auth/provider/register"
          element={<ProviderRegisterPage />}
        />

        {/* ===================================================
            CUSTOMER / MAIN APP
        =================================================== */}

        {/* HOME */}

        <Route path="/" element={<HomePage />} />

        {/* ALL SERVICES */}

        <Route
          path="/services"
          element={<AllServicesPage />}
        />

        {/* SERVICE CATEGORY */}

        <Route
          path="/services/:category"
          element={<ServiceCategoryPage />}
        />

        {/* NEARBY SERVICES */}

        <Route
          path="/nearby"
          element={<NearbyServicesPage />}
        />

        {/* CUSTOMER BOOKINGS */}

        <Route
          path="/bookings"
          element={<BookingsPage />}
        />

        {/* SAVED SERVICES */}

        <Route
          path="/saved"
          element={<SavedPage />}
        />

        {/* CUSTOMER PROFILE */}

        <Route
          path="/profile"
          element={<ProfilePage />}
        />

        {/* ===================================================
            SERVICE PROVIDER PANEL
        =================================================== */}

        {/* PROVIDER DASHBOARD */}

        <Route
          path="/provider/dashboard"
          element={<ProviderDashboardPage />}
        />

        {/* PROVIDER REQUESTS */}

        <Route
          path="/provider/requests"
          element={<ProviderRequestsPage />}
        />

        {/* PROVIDER SERVICES */}

        <Route
          path="/provider/services"
          element={<ProviderServicesPage />}
        />

        {/* PROVIDER REVIEWS */}

        <Route
          path="/provider/reviews"
          element={<ProviderReviewsPage />}
        />

        {/* PROVIDER BUSINESS PROFILE */}

        <Route
          path="/provider/profile"
          element={<ProviderProfilePage />}
        />
      </Routes>

      {/* =====================================================
          CUSTOMER BOTTOM NAVIGATION
      ===================================================== */}

      {showCustomerBottomNav && <BottomNavBar />}
    </div>
  );
}

export default App;