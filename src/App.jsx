import { Route, Routes, useLocation } from "react-router-dom";

import BottomNavBar from "./components/common/BottomNavBar";
import ScrollToTop from "./components/common/ScrollToTop";

/* -----  CUSTOMER / MAIN PAGES -----*/

import AuthPage from "./pages/auth/AuthPage";
import HomePage from "./pages/common/HomePage";
import AllServicesPage from "./pages/customer/AllServicesPage";
import BookingsPage from "./pages/customer/BookingsPage";
import NearbyServicesPage from "./pages/customer/NearbyServicesPage";
import ProfilePage from "./pages/customer/ProfilePage";
import ServiceCategoryPage from "./pages/customer/ServiceCategoryPage";
import SavedPage from "./pages/customer/SavedPage";

/* ----- AUTHENTICATION PAGES ----- */

import CustomerLoginPage from "./pages/auth/CustomerLoginPage";
import CustomerRegisterPage from "./pages/auth/CustomerRegisterPage";
import ProviderLoginPage from "./pages/auth/ProviderLoginPage";
import ProviderRegisterPage from "./pages/auth/ProviderRegisterPage";

/* -----   SERVICE PROVIDER PAGES ----- */

import ProviderDashboardPage from "../src/pages/serviceprovider/ProviderDashboardPage";
import ProviderProfilePage from "./components/serviceprovider/ProviderProfilePage";
import ProviderRequestsPage from "./components/serviceprovider/ProviderRequestsPage";
import ProviderReviewsPage from "./components/serviceprovider/ProviderReviewsPage";
import ProviderServicesPage from "./components/serviceprovider/ProviderServicesPage";

function App() {
  const location = useLocation();

  /* ----- CHECK CURRENT ROUTE ----- */

  const isProviderRoute = location.pathname.startsWith("/provider");

  const isAuthRoute = location.pathname.startsWith("/auth");

  const showCustomerBottomNav = !isProviderRoute && !isAuthRoute;

  return (
    <div
      className={`min-h-screen ${showCustomerBottomNav ? "pb-24 md:pb-0" : ""}`}
    >
      <ScrollToTop />

      <Routes>
        {/* ----- AUTHENTICATION ----- */}

        <Route path="/auth" element={<AuthPage />} />

        {/* ----- CUSTOMER LOGIN ----- */}

        <Route path="/auth/customer/login" element={<CustomerLoginPage />} />

        <Route
          path="/auth/customer/register"
          element={<CustomerRegisterPage />}
        />

        {/* ----- PROVIDER  ----- */}

        <Route path="/auth/provider/login" element={<ProviderLoginPage />} />

        <Route
          path="/auth/provider/register"
          element={<ProviderRegisterPage />}
        />

        {/* ----- CUSTOMER / MAIN APP ----- */}

        {/* HOME */}

        <Route path="/" element={<HomePage />} />

        <Route path="/services" element={<AllServicesPage />} />

        <Route path="/services/:category" element={<ServiceCategoryPage />} />

        <Route path="/nearby" element={<NearbyServicesPage />} />

        <Route path="/bookings" element={<BookingsPage />} />

        <Route path="/saved" element={<SavedPage />} />

        {/* CUSTOMER PROFILE */}

        <Route path="/profile" element={<ProfilePage />} />

        {/* ===================================================
            SERVICE PROVIDER PANEL
        =================================================== */}

        {/* PROVIDER DASHBOARD */}

        <Route path="/provider/dashboard" element={<ProviderDashboardPage />} />

        {/* PROVIDER REQUESTS */}

        <Route path="/provider/requests" element={<ProviderRequestsPage />} />

        {/* PROVIDER SERVICES */}

        <Route path="/provider/services" element={<ProviderServicesPage />} />

        {/* PROVIDER REVIEWS */}

        <Route path="/provider/reviews" element={<ProviderReviewsPage />} />

        {/* PROVIDER BUSINESS PROFILE */}

        <Route path="/provider/profile" element={<ProviderProfilePage />} />
      </Routes>

      {/* =====================================================
          CUSTOMER BOTTOM NAVIGATION
      ===================================================== */}

      {showCustomerBottomNav && <BottomNavBar />}
    </div>
  );
}

export default App;
