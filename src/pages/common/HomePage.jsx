import Header from "../../components/common/Header";

import EmergencyServices from "../../components/common/homepage/EmergencyServices";
import HeroSection from "../../components/common/homepage/herosection/HeroSection";
import PopularServices from "../../components/common/homepage/PopularServices";
import ServicesNearYou from "../../components/common/homepage/ServicesNearYou";

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
