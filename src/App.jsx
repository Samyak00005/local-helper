import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ServiceCategoryPage from "./pages/ServiceCategoryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/services/:category" element={<ServiceCategoryPage />} />
    </Routes>
  );
}

export default App;
