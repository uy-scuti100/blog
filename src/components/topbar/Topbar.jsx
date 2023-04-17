import React, { useState } from "react";
import Flyout from "../flyout/Flyout";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="fixed z-50
       px-6 w-full h-[57px] bg-white flex justify-between items-center border-b border-[#f2f2f2]"
      >
        <div className="flex items-center gap-4 ">
          <Link to="/">
            <div>
              <img
                src="/images/Annotation 2023-04-14 065203.jpg"
                alt="/"
                className="md:w-[44px] md:h-[25px] w-[24px] h-[24px] cursor-pointer"
              />
            </div>
          </Link>
          <div className="text-gray bg-[#fafafa] rounded-full hidden md:flex items-center w-[240px] h-[40px] px-2 py-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              cursor="pointer"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.1 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0zm6.94-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .8-.79l-3.74-3.73A8.05 8.05 0 0 0 11.04 3v.01z"
                fill="currentColor"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none "
            />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="items-center gap-1 cursor-pointer hidden md:flex">
            <div className="inline-block">
              <svg
                width="24"
                height="24"
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
            <Link to="/write">
              <span className="inline-block text-[#757575]">Write</span>
            </Link>
          </div>
          <div className="md:hidden">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              cursor="pointer"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.1 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0zm6.94-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .8-.79l-3.74-3.73A8.05 8.05 0 0 0 11.04 3v.01z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-label="Notifications"
            cursor="pointer"
          >
            <path
              d="M15 18.5a3 3 0 1 1-6 0"
              stroke="currentColor"
              stroke-linecap="round"
            ></path>
            <path
              d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z"
              stroke="currentColor"
              stroke-linejoin="round"
            ></path>
          </svg>
          <div className="flex items-center gap-2">
            <img
              src="/images/download.jpg"
              alt="/"
              className="w-[32px] h-[32px] rounded-full object-cover cursor-pointer"
            />
            <svg
              width="12px"
              height="12px"
              viewBox="0 0 15 15"
              cursor="pointer"
              onClick={handleOpen}
            >
              <path
                d="M3.85 5.15a.5.5 0 0 0-.7.7l4.35 4.36 4.35-4.36a.5.5 0 1 0-.7-.7L7.5 8.79 3.85 5.15z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <Flyout isOpen={isOpen} />
    </div>
  );
};

export default Topbar;
