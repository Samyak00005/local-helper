import { Route, Routes } from "react-router-dom";

import BottomNavBar from "./components/BottomNavBar";
import ScrollToTop from "./components/ScrollToTop";
import AllServicesPage from "./pages/AllServicesPage";
import HomePage from "./pages/HomePage";
import NearbyServicesPage from "./pages/NearbyServicesPage";
import ProfilePage from "./pages/ProfilePage";
import SavedPage from "./pages/SavedPage";
import ServiceCategoryPage from "./pages/ServiceCategoryPage";
import BookingsPage from "./pages/BookingsPage";

function App() {
  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <ScrollToTop />

      <Routes>
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
