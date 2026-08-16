import { useState } from "react";

import ProviderSidebar from "../../components/serviceprovider/ProviderSidebar";
import ProviderTopBar from "../../components/serviceprovider/ProviderTopBar";
import ProviderBottomNav from "../../components/serviceprovider/ProviderBottomNav";

import { providerData } from "../../data/providerDashboard";

function ProviderProfilePage() {
  const [form, setForm] = useState({
    businessName: providerData.businessName,
    ownerName: providerData.ownerName,
    category: providerData.category,
    phone: providerData.phone,
    location: providerData.location,
    description:
      "Professional electrician providing home electrical repair and installation services.",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#F7FAF8]">
      <div className="flex">
        <ProviderSidebar />

        <div className="min-w-0 flex-1">
          <ProviderTopBar />

          <main className="mx-auto max-w-4xl px-4 pb-28 pt-6 sm:px-6">
            <h1 className="text-2xl font-extrabold text-[#10231A]">
              Business Profile
            </h1>

            <p className="mt-1 text-sm text-[#64748B]">
              Keep your business information updated.
            </p>

            <div
              className="
                mt-6
                rounded-[24px]
                border
                border-[#E5EDE8]
                bg-white
                p-5
                sm:p-6
              "
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  label="Business Name"
                  name="businessName"
                  value={form.businessName}
                  onChange={handleChange}
                />

                <Input
                  label="Owner Name"
                  name="ownerName"
                  value={form.ownerName}
                  onChange={handleChange}
                />

                <Input
                  label="Category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                />

                <Input
                  label="Phone Number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />

                <div className="sm:col-span-2">
                  <Input
                    label="Business Location"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-bold text-[#475569]">
                    Business Description
                  </label>

                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows={5}
                    className="
                      mt-2
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-[#E5E7EB]
                      p-4
                      text-sm
                      outline-none
                      focus:border-[#16A34A]
                    "
                  />
                </div>
              </div>

              <button
                className="
                  mt-6
                  rounded-xl
                  bg-[#16A34A]
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-white
                  hover:bg-[#15803D]
                "
              >
                Save Changes
              </button>
            </div>
          </main>
        </div>
      </div>

      <ProviderBottomNav />
    </div>
  );
}

function Input({
  label,
  ...props
}) {
  return (
    <div>
      <label className="text-xs font-bold text-[#475569]">
        {label}
      </label>

      <input
        {...props}
        className="
          mt-2
          h-11
          w-full
          rounded-xl
          border
          border-[#E5E7EB]
          px-4
          text-sm
          outline-none
          transition
          focus:border-[#16A34A]
          focus:ring-4
          focus:ring-[#DCFCE7]
        "
      />
    </div>
  );
}

export default ProviderProfilePage;