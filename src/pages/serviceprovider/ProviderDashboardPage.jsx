import ProviderSidebar from "../../components/serviceprovider/ProviderSidebar";
import ProviderTopBar from "../../components/serviceprovider/ProviderTopBar";
import ProviderStats from "../../components/serviceprovider/ProviderStats";
import ProviderProfileCard from "../../components/serviceprovider/ProviderProfileCard";
import ProviderQuickActions from "../../components/serviceprovider/ProviderQuickActions";
import ProviderRequests from "../../components/serviceprovider/ProviderRequests";
import ProviderBottomNav from "../../components/serviceprovider/ProviderBottomNav";

import { providerData } from "../../data/providerDashboard";

function ProviderDashboardPage() {
  return (
    <div className="min-h-screen bg-[#F7FAF8]">
      <div className="flex">

        {/* Desktop Sidebar */}

        <ProviderSidebar />

        {/* Main */}

        <div className="min-w-0 flex-1">
          <ProviderTopBar />

          <main
            className="
              mx-auto
              max-w-[1500px]
              space-y-6
              px-4
              pb-28
              pt-5
              sm:px-6
              lg:pb-10
              lg:pt-7
            "
          >
            {/* Welcome */}

            <section>
              <p className="text-sm font-medium text-[#64748B]">
                Welcome back,
              </p>

              <h2
                className="
                  mt-1
                  text-2xl
                  font-extrabold
                  tracking-[-0.035em]
                  text-[#10231A]
                  sm:text-3xl
                "
              >
                {providerData.ownerName} 👋
              </h2>

              <p className="mt-1 text-sm text-[#94A3B8]">
                Here's what's happening with your business today.
              </p>
            </section>

            {/* Stats */}

            <ProviderStats stats={providerData.stats} />

            {/* Desktop grid */}

            <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">

              {/* LEFT */}

              <div className="space-y-6">
                <ProviderQuickActions />

                <ProviderRequests
                  requests={providerData.requests}
                />
              </div>

              {/* RIGHT */}

              <div className="space-y-6">
                <ProviderProfileCard
                  provider={providerData}
                />

                {/* Profile Completion */}

                <section
                  className="
                    rounded-[22px]
                    border
                    border-[#E5EDE8]
                    bg-white
                    p-5
                  "
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-extrabold text-[#10231A]">
                        Profile Completion
                      </h3>

                      <p className="mt-1 text-xs text-[#64748B]">
                        Complete your profile to get more customers.
                      </p>
                    </div>

                    <span className="text-xl font-extrabold text-[#16A34A]">
                      {providerData.profileCompletion}%
                    </span>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#E5EDE8]">
                    <div
                      className="h-full rounded-full bg-[#16A34A]"
                      style={{
                        width: `${providerData.profileCompletion}%`,
                      }}
                    />
                  </div>

                  <button
                    className="
                      mt-4
                      w-full
                      rounded-xl
                      bg-[#ECFDF3]
                      py-2.5
                      text-sm
                      font-bold
                      text-[#15803D]
                      transition
                      hover:bg-[#DCFCE7]
                    "
                  >
                    Complete Profile
                  </button>
                </section>

                {/* Tips */}

                <section
                  className="
                    rounded-[22px]
                    border
                    border-[#FDE68A]
                    bg-[#FFFBEB]
                    p-5
                  "
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
                    Provider Tip
                  </p>

                  <h3 className="mt-2 font-extrabold text-[#78350F]">
                    Add business photos
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#92400E]">
                    Providers with good business and work photos can build
                    stronger trust with customers.
                  </p>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>

      <ProviderBottomNav />
    </div>
  );
}

export default ProviderDashboardPage;