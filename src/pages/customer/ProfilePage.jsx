import Header from "../../components/common/Header";

import ProfileAbout from "../../components/customer/profile/ProfileAbout";
import ProfileActions from "../../components/customer/profile/ProfileActions";
import ProfileHeader from "../../components/customer/profile/ProfileHeader";
import ProfileInfo from "../../components/customer/profile/ProfileInfo";

function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20 text-[#111827]">
      <Header />

      <ProfileHeader />

      <main className="px-4 py-4">
        <div className="mx-auto max-w-7xl">
          <ProfileInfo />

          <ProfileActions />

          <ProfileAbout />
        </div>
      </main>
    </div>
  );
}

export default ProfilePage;
