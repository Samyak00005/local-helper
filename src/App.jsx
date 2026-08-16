import { Route, Routes } from "react-router-dom";

import BottomNavBar from "./components/BottomNavBar";
import ScrollToTop from "./components/ScrollToTop";
import AllServicesPage from "./pages/AllServicesPage";
import CustomerLoginPage from "./pages/auth/CustomerLoginPage";
import CustomerRegisterPage from "./pages/auth/CustomerRegisterPage";
import ProviderLoginPage from "./pages/auth/ProviderLoginPage";
import ProviderRegisterPage from "./pages/auth/ProviderRegisterPage";
import AuthPage from "./pages/AuthPage";
import BookingsPage from "./pages/BookingsPage";
import HomePage from "./pages/HomePage";
import NearbyServicesPage from "./pages/NearbyServicesPage";
import ProfilePage from "./pages/ProfilePage";
import SavedPage from "./pages/SavedPage";
import ServiceCategoryPage from "./pages/ServiceCategoryPage";

function App() {
  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <ScrollToTop />

      <Routes>
        {/* ----- AUTHENTICATION ----- */}

        <Route path="/auth" element={<AuthPage />} />

        <Route path="/auth/customer/login" element={<CustomerLoginPage />} />

        <Route
          path="/auth/customer/register"
          element={<CustomerRegisterPage />}
        />

        <Route path="/auth/provider/login" element={<ProviderLoginPage />} />

        <Route
          path="/auth/provider/register"
          element={<ProviderRegisterPage />}
        />

        {/* ----- MAIN APP ----- */}

        <Route path="/" element={<HomePage />} />

        <Route path="/services" element={<AllServicesPage />} />

        <Route path="/services/:category" element={<ServiceCategoryPage />} />

        <Route path="/nearby" element={<NearbyServicesPage />} />

        <Route path="/bookings" element={<BookingsPage />} />

        <Route path="/saved" element={<SavedPage />} />

        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

      <BottomNavBar />
    </div>
  );
}

export default App;
