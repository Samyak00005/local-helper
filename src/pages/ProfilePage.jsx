import Header from "../components/Header";

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProfileActions from "../components/profile/ProfileActions";
import ProfileAbout from "../components/profile/ProfileAbout";

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
