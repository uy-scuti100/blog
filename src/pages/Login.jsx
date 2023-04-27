import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import axios from "axios";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "loginInit" });
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "loginValid", payload: res.data });
    } catch (error) {
      dispatch({ type: "loginFailed" });
    }
  };
  return (
    <div className="login">
      <div className="flex flex-col gap-10 items-center justify-center px-6 ">
        <span className="text-[50px] font-[miracle] pt-5 font-bold">
          Hello Again!
        </span>
        <span className="text-[20px] text-[#666] text-center">
          Welcome back you've been missed!
        </span>
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center gap-5"
        >
          <input
            type="text"
            placeholder="Enter username..."
            className="rounded-full w-[300px] p-3 border-none outline-none focus:border-none focus:outline-none"
            ref={userRef}
          />

          <input
            type="password"
            placeholder="Password..."
            className="rounded-full p-3 w-[300px] border-none outline-none focus:border-none focus:outline-none "
            ref={passwordRef}
          />
          <button
            type="submit"
            className="w-[300px] bg-red-500 px-6 py-2 md:px-8 rounded-full text-white font-[600] disabled:opacity-25"
            disabled={isFetching}
          >
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
