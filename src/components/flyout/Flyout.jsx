import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";

const Flyout = ({ isOpen }) => {
  return (
    <div
      className={
        isOpen
          ? "fixed z-50 bg-white top-[50px] right-0 mt-2 duration-500 ease-in-out transition-opacity opacity-100"
          : "fixed top-[50px] right-0 mt-2 opacity-0 duration-500 ease-in-out transition-opacity"
      }
    >
      <div className="w-[250px] bg-white shadow-lg p-6 max-h-[95vh] flex flex-col gap-10 ">
        {/* profile svg  */}
        <Link to="/profile">
          <div className="flex gap-2  cursor-pointer text-[#757575] hover:text-black ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-label="Profile"
            >
              <circle cx="12" cy="7" r="4.5" stroke="currentColor"></circle>
              <path
                d="M3.5 21.5v-4.34C3.5 15.4 7.3 14 12 14s8.5 1.41 8.5 3.16v4.34"
                stroke="currentColor"
                stroke-linecap="round"
              ></path>
            </svg>
            <p>Profile</p>
          </div>
        </Link>
        {/* saved svg */}
        <div className="flex gap-2 cursor-pointer text-[#757575] hover:text-black">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-label="Lists"
          >
            <path
              d="M6.44 6.69h0a1.5 1.5 0 0 1 1.06-.44h9c.4 0 .78.16 1.06.44l.35-.35-.35.35c.28.28.44.66.44 1.06v14l-5.7-4.4-.3-.23-.3.23-5.7 4.4v-14c0-.4.16-.78.44-1.06z"
              stroke="currentColor"
            ></path>
            <path
              d="M12.5 2.75h-8a2 2 0 0 0-2 2v11.5"
              stroke="currentColor"
              stroke-linecap="round"
            ></path>
          </svg>

          <p>Saved</p>
        </div>
        {/* stories svg */}
        <div className="flex gap-2 cursor-pointer text-[#757575] hover:text-black">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-label="Stories"
          >
            <path
              d="M4.75 21.5h14.5c.14 0 .25-.11.25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .14.11.25.25.25z"
              stroke="currentColor"
            ></path>
            <path
              d="M8 8.5h8M8 15.5h5M8 12h8"
              stroke="currentColor"
              stroke-linecap="round"
            ></path>
          </svg>
          <p>Posts</p>
        </div>
        {/* info svg */}
        <div className="flex gap-2 cursor-pointer text-[#757575] hover:text-black">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-label="Stats"
          >
            <path
              d="M2.75 19h4.5c.14 0 .25-.11.25-.25v-6.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v6.5c0 .14.11.25.25.25zM9.75 19h4.5c.14 0 .25-.11.25-.25V8.25a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v10.5c0 .14.11.25.25.25zM16.75 19h4.5c.14 0 .25-.11.25-.25V4.25a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v14.5c0 .14.11.25.25.25z"
              stroke="currentColor"
            ></path>
          </svg>

          <p>Info</p>
        </div>
        {/* logout */}{" "}
        <div className="flex gap-2 cursor-pointer text-[#757575] hover:text-black">
          <CiLogout size="24" />

          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Flyout;
