import { HugeiconsIcon } from "@hugeicons/react";

import {
    ArrowDown01Icon,
    Cancel01Icon,
    Location01Icon,
    Navigation03Icon,
    Search02Icon,
} from "@hugeicons/core-free-icons";

import { useEffect, useRef, useState } from "react";

function LocationLogic({ children }) {
  const [location, setLocation] = useState("Chandrapur");
  const [locationSearch, setLocationSearch] = useState("");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  const locationRef = useRef(null);

  /* =========================================================
     LOCATION DATA
  ========================================================= */

  const locations = [
    {
      name: "Chandrapur",
      subtitle: "Chandrapur, Maharashtra",
    },
    {
      name: "Nagpur",
      subtitle: "Nagpur, Maharashtra",
    },
    {
      name: "Wardha",
      subtitle: "Wardha, Maharashtra",
    },
    {
      name: "Gadchiroli",
      subtitle: "Gadchiroli, Maharashtra",
    },
    {
      name: "Bhandara",
      subtitle: "Bhandara, Maharashtra",
    },
    {
      name: "Ballarpur",
      subtitle: "Ballarpur, Maharashtra",
    },
    {
      name: "Bramhapuri",
      subtitle: "Bramhapuri, Maharashtra",
    },
    {
      name: "Mul",
      subtitle: "Mul, Maharashtra",
    },
  ];

  /* =========================================================
     FILTER LOCATION
  ========================================================= */

  const filteredLocations = locations.filter((item) => {
    const query = locationSearch.trim().toLowerCase();

    if (!query) return true;

    return (
      item.name.toLowerCase().includes(query) ||
      item.subtitle.toLowerCase().includes(query)
    );
  });

  /* =========================================================
     CLOSE DROPDOWN OUTSIDE
  ========================================================= */

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setShowLocationDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  /* =========================================================
     SELECT LOCATION
  ========================================================= */

  const selectLocation = (selectedLocation) => {
    setLocation(selectedLocation);
    setLocationSearch("");
    setShowLocationDropdown(false);
  };

  /* =========================================================
     CURRENT LOCATION
  ========================================================= */

  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Location is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      () => {
        setLocation("Current Location");
        setLocationSearch("");
        setShowLocationDropdown(false);
      },
      () => {
        alert(
          "Unable to get your location. Please allow location permission and try again.",
        );
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    );
  };

  return (
    <>
      {/* =====================================================
          LOCATION
      ===================================================== */}

      <div ref={locationRef} className="relative mb-5 w-fit">
        <button
          type="button"
          onClick={() => setShowLocationDropdown((previous) => !previous)}
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/20
            bg-white/15
            px-4
            py-2
            text-sm
            font-semibold
            text-white
            shadow-sm
            backdrop-blur-md
            transition
            hover:bg-white/20
          "
        >
          <HugeiconsIcon icon={Location01Icon} size={17} strokeWidth={2} />

          <span>{location}</span>

          <HugeiconsIcon
            icon={ArrowDown01Icon}
            size={14}
            strokeWidth={2}
            className={`transition-transform ${
              showLocationDropdown ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* ===================================================
            LOCATION DROPDOWN
        =================================================== */}

        {showLocationDropdown && (
          <div
            className="
              absolute
              left-0
              top-full
              z-50
              mt-2
              w-[290px]
              overflow-hidden
              rounded-2xl
              border
              border-white/20
              bg-white
              text-[#111827]
              shadow-[0_15px_40px_rgba(0,0,0,0.18)]
            "
          >
            {/* Search Location */}

            <div className="border-b border-[#F1F5F9] p-3">
              <div
                className="
                  flex
                  h-10
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-[#E5E7EB]
                  bg-[#F8FAFC]
                  px-3
                  transition
                  focus-within:border-[#16A34A]
                  focus-within:bg-white
                  focus-within:ring-4
                  focus-within:ring-[#DCFCE7]
                "
              >
                <HugeiconsIcon
                  icon={Search02Icon}
                  size={17}
                  strokeWidth={2}
                  className="shrink-0 text-[#9CA3AF]"
                />

                <input
                  autoFocus
                  type="text"
                  value={locationSearch}
                  onChange={(event) => setLocationSearch(event.target.value)}
                  placeholder="Search city or area..."
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    text-xs
                    font-medium
                    text-[#111827]
                    outline-none
                    placeholder:text-[#9CA3AF]
                  "
                />

                {locationSearch && (
                  <button
                    type="button"
                    onClick={() => setLocationSearch("")}
                    className="text-[#9CA3AF] hover:text-[#374151]"
                  >
                    <HugeiconsIcon
                      icon={Cancel01Icon}
                      size={15}
                      strokeWidth={2}
                    />
                  </button>
                )}
              </div>
            </div>

            {/* Current Location */}

            <button
              type="button"
              onClick={useCurrentLocation}
              className="
                flex
                w-full
                items-center
                gap-3
                border-b
                border-[#F1F5F9]
                px-4
                py-3
                text-left
                transition
                hover:bg-[#F0FDF4]
              "
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#DCFCE7]
                  text-[#15803D]
                "
              >
                <HugeiconsIcon
                  icon={Navigation03Icon}
                  size={17}
                  strokeWidth={2}
                />
              </div>

              <div>
                <p className="text-xs font-semibold text-[#15803D]">
                  Use current location
                </p>

                <p className="mt-0.5 text-[10px] text-[#9CA3AF]">
                  Find services around you
                </p>
              </div>
            </button>

            {/* Location Results */}

            <div className="max-h-[240px] overflow-y-auto py-1">
              {filteredLocations.length > 0 ? (
                filteredLocations.map((item) => {
                  const isSelected =
                    item.name.toLowerCase() === location.toLowerCase();

                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => selectLocation(item.name)}
                      className={`
                        flex
                        w-full
                        items-center
                        gap-3
                        px-4
                        py-2.5
                        text-left
                        transition
                        ${isSelected ? "bg-[#F0FDF4]" : "hover:bg-[#F8FAFC]"}
                      `}
                    >
                      <div
                        className={`
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          ${
                            isSelected
                              ? "bg-[#DCFCE7] text-[#15803D]"
                              : "bg-[#F1F5F9] text-[#6B7280]"
                          }
                        `}
                      >
                        <HugeiconsIcon
                          icon={Location01Icon}
                          size={16}
                          strokeWidth={2}
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p
                          className={`
                            truncate
                            text-xs
                            font-semibold
                            ${isSelected ? "text-[#15803D]" : "text-[#111827]"}
                          `}
                        >
                          {item.name}
                        </p>

                        <p className="mt-0.5 truncate text-[10px] text-[#9CA3AF]">
                          {item.subtitle}
                        </p>
                      </div>

                      {isSelected && (
                        <span className="text-[10px] font-bold text-[#16A34A]">
                          Selected
                        </span>
                      )}
                    </button>
                  );
                })
              ) : (
                <div className="px-4 py-6 text-center">
                  <HugeiconsIcon
                    icon={Search02Icon}
                    size={20}
                    strokeWidth={1.8}
                    className="mx-auto text-[#9CA3AF]"
                  />

                  <p className="mt-2 text-xs font-semibold text-[#374151]">
                    No location found
                  </p>

                  <p className="mt-1 text-[10px] text-[#9CA3AF]">
                    Try another city or area.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      {children}

      {/* =====================================================
          CURRENT LOCATION
      ===================================================== */}

      <button
        type="button"
        onClick={() => setShowLocationDropdown(true)}
        className="
          mt-4
          flex
          items-center
          gap-2
          text-xs
          font-medium
          text-white/75
          transition
          hover:text-white
        "
      >
        <HugeiconsIcon icon={Location01Icon} size={15} strokeWidth={2} />

        <span>Showing services in {location}</span>
      </button>
    </>
  );
}

export default LocationLogic;
