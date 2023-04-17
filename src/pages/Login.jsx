import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="flex flex-col gap-10 items-center justify-center px-6 ">
        <span className="text-[50px] font-[miracle] pt-5 font-bold">
          Hello Again!
        </span>
        <span className="text-[20px] text-[#666] text-center">
          Welcome back you've been missed!
        </span>
        <form className="flex flex-col items-center gap-5">
          <input
            type="text"
            placeholder="Enter username..."
            className="rounded-full w-[300px] p-3 border-none outline-none focus:border-none focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password..."
            className="rounded-full p-3 w-[300px] border-none outline-none focus:border-none focus:outline-none "
          />
          <button className="w-[300px] bg-red-500 px-6 py-2 md:px-8 rounded-full text-white font-[600] ">
            Sign In
          </button>
        </form>
        <div>
          Not a member?{" "}
          <Link to="/register">
            <span className="text-blue-400 cursor-pointer">Register Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
