import React from "react";
import Posts from "../posts/Posts.jsx";
import Sidebar from "../sidebar/Sidebar";

const Main = () => {
  return (
    <div className="flex gap-1 relative">
      <div className="min-h-screen md:basis-3/4 w-screen p-4 border-r border-[#a7a4a4] mt-[58px]">
        <Posts />
      </div>
      <div className="basis-1/4 hidden md:block p-2 mt-[58px]">
        <Sidebar />
      </div>
      <div className="fixed bottom-3 right-8 md:hidden p-2 rounded-full bg-slate-300 ">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          aria-label="Write"
        >
          <path
            d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
            fill="currentColor"
          ></path>
          <path
            d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
            stroke="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Main;
