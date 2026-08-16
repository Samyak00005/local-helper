import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";

import {
  Call02Icon,
  CancelCircleIcon,
  PencilEdit02Icon,
  Location01Icon,
  Mail01Icon,
  SaveIcon,
  UserCircle02Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";

function ProfileInfo() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Username",
    phone: "",
    whatsapp: "",
    email: "",
    location: "Chandrapur",
  });

  const [originalProfile, setOriginalProfile] = useState(profile);

  const handleEdit = () => {
    setOriginalProfile(profile);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setProfile(originalProfile);
    setIsEditing(false);
  };

  const handleSave = () => {
    setOriginalProfile(profile);
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setProfile((current) => ({
      ...current,
      [field]: value,
    }));
  };

  return (
    <section>
      {/* Section Header */}
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold tracking-tight text-[#111827]">
            Profile Information
          </h2>

          <p className="mt-1 text-xs text-[#6B7280]">Your basic information</p>
        </div>

        {/* Edit Button */}
        {!isEditing && (
          <button
            type="button"
            onClick={handleEdit}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#E5E7EB] bg-white text-[#6B7280] transition hover:border-[#BBF7D0] hover:bg-[#F0FDF4] hover:text-[#15803D]"
            aria-label="Edit profile"
          >
            <HugeiconsIcon icon={PencilEdit02Icon} size={18} strokeWidth={2} />
          </button>
        )}
      </div>

      {/* Profile Details */}
      <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white">
        {/* Name */}
        <ProfileField
          icon={UserCircle02Icon}
          label="Name"
          value={profile.name}
          isEditing={isEditing}
          placeholder="Enter your name"
          onChange={(value) => handleChange("name", value)}
        />

        {/* Phone */}
        <ProfileField
          icon={Call02Icon}
          label="Phone"
          value={profile.phone}
          isEditing={isEditing}
          placeholder="Enter phone number"
          type="tel"
          isLast={false}
          onChange={(value) => handleChange("phone", value)}
        />

        {/* WhatsApp */}
        <ProfileField
          icon={WhatsappIcon}
          label="WhatsApp"
          value={profile.whatsapp}
          isEditing={isEditing}
          placeholder="Enter WhatsApp number"
          type="tel"
          isLast={false}
          onChange={(value) => handleChange("whatsapp", value)}
        />

        {/* Email */}
        <ProfileField
          icon={Mail01Icon}
          label="Email"
          value={profile.email}
          isEditing={isEditing}
          placeholder="Enter email address"
          type="email"
          isLast={false}
          onChange={(value) => handleChange("email", value)}
        />

        {/* Location */}
        <ProfileField
          icon={Location01Icon}
          label="Location"
          value={profile.location}
          isEditing={isEditing}
          placeholder="Enter your location"
          isLast
          onChange={(value) => handleChange("location", value)}
        />

        {/* Edit Actions */}
        {isEditing && (
          <div className="flex gap-2 border-t border-[#F1F5F9] bg-[#FAFAFA] p-3">
            {/* Cancel */}
            <button
              type="button"
              onClick={handleCancel}
              className="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white text-sm font-semibold text-[#374151] transition hover:bg-[#F1F5F9] active:scale-[0.98]"
            >
              <HugeiconsIcon
                icon={CancelCircleIcon}
                size={17}
                strokeWidth={2}
              />
              Cancel
            </button>

            {/* Save */}
            <button
              type="button"
              onClick={handleSave}
              className="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-[#16A34A] text-sm font-semibold text-white transition hover:bg-[#15803D] active:scale-[0.98]"
            >
              <HugeiconsIcon icon={SaveIcon} size={17} strokeWidth={2} />
              Save
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ----- Profile Field Component -------- */

function ProfileField({
  icon,
  label,
  value,
  isEditing,
  placeholder,
  type = "text",
  isLast = false,
  onChange,
}) {
  return (
    <div
      className={`flex items-center gap-3 p-4 ${
        !isLast ? "border-b border-[#F1F5F9]" : ""
      }`}
    >
      {/* Icon */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F1F5F9] text-[#6B7280]">
        <HugeiconsIcon icon={icon} size={20} strokeWidth={1.8} />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <p className="text-xs text-[#9CA3AF]">{label}</p>

        {isEditing ? (
          <input
            type={type}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder={placeholder}
            className="mt-1 w-full border-0 bg-transparent p-0 text-sm font-semibold text-[#111827] outline-none placeholder:text-[#9CA3AF]"
          />
        ) : (
          <p
            className={`mt-0.5 text-sm font-semibold ${
              value ? "text-[#111827]" : "text-[#9CA3AF]"
            }`}
          >
            {value || "Not added"}
          </p>
        )}
      </div>
    </div>
  );
}

export default ProfileInfo;
