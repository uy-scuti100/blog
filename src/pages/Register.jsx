import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);

  const showToastMessage = () => {
    toast.success(" Registration Successful !", {
      position: toast.POSITION.TOP_LEFT,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://blog-psi-plum.vercel.app/api/auth/register",
        {
          username,
          email,
          password,
        }
      );
      showToastMessage();
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(!error);
    }
  };

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
        <form
          className="flex flex-col items-center gap-5"
          onSubmit={handleSubmit}
        >
          {/* username */}
          <input
            type="text"
            placeholder="johndoe123"
            className="w-[300px] bg-transparent px-6 py-2 md:px-8 border font-[600] text-[#000000] focus:placeholder:text-[#000000]  placeholder:text-[#000000] placeholder:text-[12px] placeholder:opacity-50"
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* email */}
          <input
            type="email"
            placeholder="john@doe.com"
            className="w-[300px] bg-transparent px-6 py-2 md:px-8 border font-[600] text-[#000000] focus:placeholder:text-[#000000]  placeholder:text-[#000000] placeholder:text-[12px] placeholder:opacity-50"
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* password */}
          <input
            type="password"
            placeholder="............."
            className="w-[300px] bg-transparent px-6 py-2 md:px-8 border font-[600] text-[#000000] focus:placeholder:text-[#000000]  placeholder:text-[#000000] placeholder:text-[12px] placeholder:opacity-50"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-[300px] bg-[#FDC77C] px-6 py-2 md:px-8 text-[#131d21] border font-[600]  border-none"
          >
            Sign Up
          </button>
        </form>
        <div className="text-[12px]">
          You already have an account ?
          <Link to="/login">
            {" "}
            <span className="text-blue-800 text-[12px]"> Sign in</span>
          </Link>
        </div>

        {error && (
          <div className="text-red-700 text-[20px]">
            Something Went Wrong !!!
          </div>
        )}
      </div>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
