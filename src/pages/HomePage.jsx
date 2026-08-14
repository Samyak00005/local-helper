import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PopularServices from "../components/popularservices/PopularServices";

import ServicesNearYou from "../components/servicesnearyou/ServicesNearYou";

function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827]">
      <Header />

      <HeroSection />

      <PopularServices />

      <ServicesNearYou />
    </div>
  );
}

export default HomePage;
