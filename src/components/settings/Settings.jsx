import React from "react";
import { MdOutlineChangeCircle } from "react-icons/md";

const Settings = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center pb-5">
          <span className="md:text-[25px] font-bold text-[20px]">
            Update Account
          </span>
          <span className="md:text-[12px] text-[10px] text-red-700 cursor-pointer bg-red-300 px-2 py-1 rounded-full">
            Delete Account
          </span>
        </div>
        <form>
          <label className="text-[#666]">Profile Picture</label>
          <div className="flex items-center gap-2 py-5">
            <img
              src="/images/megan-ruth-cAUdMUoE-B8-unsplash.jpg"
              alt="/"
              className="w-[70px] h-[70px] object-cover rounded-lg"
            />
            <label htmlFor="fileInput" className="border-2 rounded-full p-2">
              <MdOutlineChangeCircle size={24} />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <div className="flex flex-col gap-5 ">
            <label>Username</label>
            <input
              type="text"
              placeholder="scuti"
              className="border-b border-[#ccc] focus:outline-none"
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="scuti@gmail.com"
              className="border-b border-[#ccc] focus:outline-none"
            />
            <label>Password</label>
            <input
              type="password"
              className="border-b border-[#ccc] focus:outline-none"
            />
            <button type="submit" className="px-4 py-1 bg-[#000] text-white ">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
