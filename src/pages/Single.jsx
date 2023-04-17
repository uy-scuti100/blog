import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import SinglePost from "../components/singlepost/SinglePost";
import Topbar from "../components/topbar/Topbar";

const Single = () => {
  return (
    <div>
      <Topbar />
      <div className="flex gap-1 ">
        <div className="min-h-screen md:basis-3/4 w-screen p-4 border-r border-[#a7a4a4] mt-[58px]">
          <SinglePost />
        </div>
        <div className="basis-1/4 h-screen hidden md:block p-2 mt-[58px]">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Single;
