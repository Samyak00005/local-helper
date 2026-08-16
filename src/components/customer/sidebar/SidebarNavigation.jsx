import {
  Alert02Icon,
  Bookmark01Icon,
  File02Icon,
  HelpCircleIcon,
  Home01Icon,
  Message01Icon,
  Notification01Icon,
  Settings02Icon,
  Shield01Icon,
  UserAdd01Icon,
} from "@hugeicons/core-free-icons";

import SidebarMenuItem from "./SidebarMenuItem";
import SidebarSection from "./SidebarSection";

/* ----- QUICK ACCESS ----- */

const quickAccessItems = [
  {
    name: "Home",
    path: "/",
    icon: Home01Icon,
  },
  {
    name: "Saved Services",
    path: "/saved",
    icon: Bookmark01Icon,
  },
  {
    name: "Messages",
    path: "/messages",
    icon: Message01Icon,
  },
  {
    name: "Notifications",
    path: "/notifications",
    icon: Notification01Icon,
  },
];

/* ----- SUPPORT ----- */

const supportItems = [
  {
    name: "Help & Support",
    path: "/support",
    icon: HelpCircleIcon,
  },
  {
    name: "Terms & Conditions",
    path: "/terms",
    icon: File02Icon,
  },
  {
    name: "Privacy Policy",
    path: "/privacy",
    icon: Shield01Icon,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings02Icon,
  },
];

/* =========================================================
   COMPONENT
========================================================= */

function SidebarNavigation({ onClose }) {
  return (
    <nav className="px-3 pt-4">
      {/* ----- QUICK ACCESS ----- */}

      <SidebarSection label="Quick Access">
        {quickAccessItems.map((item) => (
          <SidebarMenuItem
            key={item.name}
            name={item.name}
            path={item.path}
            icon={item.icon}
            onClick={onClose}
          />
        ))}
      </SidebarSection>

      {/* ----- EMERGENCY SERVICES ----- */}

      <SidebarSection label="Emergency">
        <SidebarMenuItem
          name="Emergency Services"
          path="/emergency"
          icon={Alert02Icon}
          onClick={onClose}
          highlight
        />
      </SidebarSection>

      {/* ----- FOR HELPERS ----- */}

      <SidebarSection label="For Helpers">
        <SidebarMenuItem
          name="Become a Service Provider"
          path="/become-provider"
          icon={UserAdd01Icon}
          onClick={onClose}
        />
      </SidebarSection>

      {/* ----- SUPPORT ----- */}

      <SidebarSection label="Support">
        {supportItems.map((item) => (
          <SidebarMenuItem
            key={item.name}
            name={item.name}
            path={item.path}
            icon={item.icon}
            onClick={onClose}
          />
        ))}
      </SidebarSection>
    </nav>
  );
}

export default SidebarNavigation;
