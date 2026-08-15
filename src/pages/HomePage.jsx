import Header from "../components/Header";

import EmergencyServices from "../components/homepage/EmergencyServices";
import HeroSection from "../components/homepage/herosection/HeroSection";
import PopularServices from "../components/homepage/PopularServices";
import ServicesNearYou from "../components/homepage/ServicesNearYou";

function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827]">
      <Header />

      <HeroSection />

      <PopularServices />

      <EmergencyServices />

      <ServicesNearYou />
    </div>
  );
}

export default HomePage;
