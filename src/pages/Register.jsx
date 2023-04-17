import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login text-[#000000] ">
      <div className="flex flex-col gap-10 items-center justify-center px-6 ">
        <p className="text-[30px] font-semibold font-[miracle] tracking-widest capitalize">
          Create an account
        </p>
        <p className="font-light text-center text-[14px]">
          And get access to richest collection of articles gists <br /> and blog
          posts to keep you up to date
        </p>
        <form className="flex flex-col items-center gap-5">
          <input
            type="text"
            placeholder="johndgloe123"
            className="w-[300px] bg-transparent px-6 py-2 md:px-8 border font-[600] text-[#000000] focus:placeholder:text-[#000000]  placeholder:text-[#000000] placeholder:text-[12px] placeholder:opacity-50"
          />
          <input
            type="email"
            placeholder="john@doe.com"
            className="w-[300px] bg-transparent px-6 py-2 md:px-8 border font-[600] text-[#000000] focus:placeholder:text-[#000000]  placeholder:text-[#000000] placeholder:text-[12px] placeholder:opacity-50"
          />

          <input
            type="password"
            placeholder="............."
            className="w-[300px] bg-transparent px-6 py-2 md:px-8 border font-[600] text-[#000000] focus:placeholder:text-[#000000]  placeholder:text-[#000000] placeholder:text-[12px] placeholder:opacity-50"
          />
          <button className="w-[300px] bg-[#FDC77C] px-6 py-2 md:px-8 text-[#131d21] border font-[600]  border-none">
            Sign Up
          </button>
        </form>
        <div classname="text-[12px]">
          You already have an account ?
          <Link to="/login">
            {" "}
            <span className="text-blue-800 text-[12px]"> Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
