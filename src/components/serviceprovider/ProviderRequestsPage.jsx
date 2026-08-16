import { useState } from "react";

import ProviderSidebar from "../../components/serviceprovider/ProviderSidebar";
import ProviderTopBar from "../../components/serviceprovider/ProviderTopBar";
import ProviderBottomNav from "../../components/serviceprovider/ProviderBottomNav";

import { providerData } from "../../data/providerDashboard";

function ProviderRequestsPage() {
  const [requests, setRequests] = useState(providerData.requests);

  const updateStatus = (id, status) => {
    setRequests((current) =>
      current.map((request) =>
        request.id === id
          ? {
              ...request,
              status,
            }
          : request,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-[#F7FAF8]">
      <div className="flex">
        <ProviderSidebar />

        <div className="min-w-0 flex-1">
          <ProviderTopBar />

          <main className="mx-auto max-w-5xl px-4 pb-28 pt-6 sm:px-6 lg:pb-10">
            <h1 className="text-2xl font-extrabold text-[#10231A]">
              Service Requests
            </h1>

            <p className="mt-1 text-sm text-[#64748B]">
              Manage customer service requests.
            </p>

            <div className="mt-6 space-y-4">
              {requests.map((request) => (
                <article
                  key={request.id}
                  className="
                    rounded-[22px]
                    border
                    border-[#E5EDE8]
                    bg-white
                    p-5
                  "
                >
                  <div className="flex justify-between gap-4">
                    <div>
                      <h2 className="font-extrabold text-[#10231A]">
                        {request.service}
                      </h2>

                      <p className="mt-1 text-sm text-[#475569]">
                        {request.customerName}
                      </p>

                      <p className="mt-2 text-xs text-[#94A3B8]">
                        📍 {request.location}
                      </p>

                      <p className="mt-1 text-xs text-[#94A3B8]">
                        🕐 {request.date} • {request.time}
                      </p>
                    </div>

                    <span
                      className={`
                        h-fit
                        rounded-full
                        px-3
                        py-1
                        text-xs
                        font-bold

                        ${
                          request.status === "Accepted"
                            ? "bg-[#DCFCE7] text-[#15803D]"
                            : request.status === "Rejected"
                              ? "bg-[#FEE2E2] text-[#B91C1C]"
                              : "bg-[#FEF3C7] text-[#B45309]"
                        }
                      `}
                    >
                      {request.status}
                    </span>
                  </div>

                  {request.status === "Pending" && (
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <button
                        onClick={() =>
                          updateStatus(request.id, "Rejected")
                        }
                        className="
                          h-11
                          rounded-xl
                          border
                          border-[#E5E7EB]
                          font-bold
                          text-[#64748B]
                        "
                      >
                        Reject
                      </button>

                      <button
                        onClick={() =>
                          updateStatus(request.id, "Accepted")
                        }
                        className="
                          h-11
                          rounded-xl
                          bg-[#16A34A]
                          font-bold
                          text-white
                        "
                      >
                        Accept Request
                      </button>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </main>
        </div>
      </div>

      <ProviderBottomNav />
    </div>
  );
}

export default ProviderRequestsPage;