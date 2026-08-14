import { Route, Routes } from "react-router-dom";

import AllServicesPage from "./pages/AllServicesPage";
import BottomNavBar from "./components/BottomNavBar";
import HomePage from "./pages/HomePage";
import ServiceCategoryPage from "./pages/ServiceCategoryPage";

function App() {
  return (
    <div className="min-h-screen pb-20">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/services" element={<AllServicesPage />} />

        <Route path="/services/:category" element={<ServiceCategoryPage />} />
      </Routes>

      <BottomNavBar />
    </div>
  );
}

export default App;
