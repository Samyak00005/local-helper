import { Route, Routes } from "react-router-dom";

import AllServicesPage from "./pages/AllServicesPage";
import BottomNavBar from "./components/BottomNavBar";
import HomePage from "./pages/HomePage";
import SavedPage from "./pages/SavedPage";
import ServiceCategoryPage from "./pages/ServiceCategoryPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/services" element={<AllServicesPage />} />

        <Route path="/services/:category" element={<ServiceCategoryPage />} />

        <Route path="/saved" element={<SavedPage />} />

        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

      <BottomNavBar />
    </div>
  );
}

export default App;
