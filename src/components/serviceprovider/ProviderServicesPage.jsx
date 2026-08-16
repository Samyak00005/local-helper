import { useState } from "react";

import ProviderSidebar from "../../components/serviceprovider/ProviderSidebar";
import ProviderTopBar from "../../components/serviceprovider/ProviderTopBar";
import ProviderBottomNav from "../../components/serviceprovider/ProviderBottomNav";

function ProviderServicesPage() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Fan Repair",
      price: 250,
    },

    {
      id: 2,
      name: "Home Wiring",
      price: 500,
    },

    {
      id: 3,
      name: "Switch Board Repair",
      price: 200,
    },
  ]);

  const [serviceName, setServiceName] = useState("");
  const [price, setPrice] = useState("");

  const addService = () => {
    if (!serviceName.trim()) return;

    setServices((current) => [
      ...current,
      {
        id: Date.now(),
        name: serviceName,
        price: Number(price) || 0,
      },
    ]);

    setServiceName("");
    setPrice("");
  };

  const deleteService = (id) => {
    setServices((current) =>
      current.filter((service) => service.id !== id),
    );
  };

  return (
    <div className="min-h-screen bg-[#F7FAF8]">
      <div className="flex">
        <ProviderSidebar />

        <div className="min-w-0 flex-1">
          <ProviderTopBar />

          <main className="mx-auto max-w-5xl px-4 pb-28 pt-6 sm:px-6">
            <h1 className="text-2xl font-extrabold text-[#10231A]">
              My Services
            </h1>

            <p className="mt-1 text-sm text-[#64748B]">
              Add services that you provide to customers.
            </p>

            {/* Add service */}

            <div
              className="
                mt-6
                rounded-[22px]
                border
                border-[#E5EDE8]
                bg-white
                p-5
              "
            >
              <h2 className="font-bold text-[#10231A]">
                Add New Service
              </h2>

              <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_180px_auto]">
                <input
                  value={serviceName}
                  onChange={(e) =>
                    setServiceName(e.target.value)
                  }
                  placeholder="Service name"
                  className="
                    h-11
                    rounded-xl
                    border
                    border-[#E5E7EB]
                    px-4
                    text-sm
                    outline-none
                    focus:border-[#16A34A]
                  "
                />

                <input
                  type="number"
                  value={price}
                  onChange={(e) =>
                    setPrice(e.target.value)
                  }
                  placeholder="Starting price"
                  className="
                    h-11
                    rounded-xl
                    border
                    border-[#E5E7EB]
                    px-4
                    text-sm
                    outline-none
                    focus:border-[#16A34A]
                  "
                />

                <button
                  onClick={addService}
                  className="
                    h-11
                    rounded-xl
                    bg-[#16A34A]
                    px-5
                    text-sm
                    font-bold
                    text-white
                  "
                >
                  Add Service
                </button>
              </div>
            </div>

            {/* Service list */}

            <div className="mt-5 space-y-3">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-[18px]
                    border
                    border-[#E5EDE8]
                    bg-white
                    p-4
                  "
                >
                  <div>
                    <h3 className="font-bold text-[#10231A]">
                      {service.name}
                    </h3>

                    <p className="mt-1 text-sm text-[#16A34A]">
                      Starting ₹{service.price}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      deleteService(service.id)
                    }
                    className="
                      rounded-xl
                      bg-[#FEF2F2]
                      px-3
                      py-2
                      text-xs
                      font-bold
                      text-[#DC2626]
                    "
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      <ProviderBottomNav />
    </div>
  );
}

export default ProviderServicesPage;