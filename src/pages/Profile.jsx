import React from "react";
import Settings from "../components/settings/Settings";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";

const Profile = () => {
  return (
    <div>
      <Topbar />
      <div className="flex gap-1 ">
        <div className="min-h-screen md:basis-3/4 w-screen p-4 border-r border-[#a7a4a4] mt-[58px]">
          <Settings />
        </div>
        <div className="basis-1/4 h-screen hidden md:block p-2 mt-[58px]">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Profile;
