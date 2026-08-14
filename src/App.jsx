import { Route, Routes } from "react-router-dom";

import BottomNavBar from "./components/BottomNavBar";
import AllServicesPage from "./pages/AllServicesPage";
import HomePage from "./pages/HomePage";
import ServiceCategoryPage from "./pages/ServiceCategoryPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/services" element={<AllServicesPage />} />

        <Route path="/services/:category" element={<ServiceCategoryPage />} />
      </Routes>

      <BottomNavBar />
    </>
  );
}

export default App;
