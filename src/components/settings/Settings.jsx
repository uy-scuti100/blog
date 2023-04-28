import React, { useContext, useEffect, useState } from "react";
import { MdOutlineChangeCircle } from "react-icons/md";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import { Context } from "../../context/Context";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Settings = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const PF = "http://localhost:5000/images/";
  const { user, dispatch } = useContext(Context);

  const showToastMessage = () => {
    toast.success(" Updated Successfully !", {
      position: toast.POSITION.TOP_LEFT,
    });
  };

  useEffect(() => {
    setUsername(user.username);
    setEmail(user.email);
    setPassword("********");
  }, [user]);

  const handleSubmit = async (e) => {
    dispatch({ type: "updateInit" });
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (error) {}
    }
    try {
      const res = await axios.put(
        "http://localhost:5000/api/users/" + user._id,
        updatedUser
      );
      showToastMessage();
      dispatch({ type: "updateValid", payload: res.data });
      window.location.replace("/");
    } catch (error) {
      console.log(error);
      dispatch({ type: "updateFailed" });
    }
  };

  // Function to handle user delete
  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http//localhost:5000/api/users/${userId}`, {
        data: { userId: userId },
      });
      // Redirect to a success page or perform any other action
      window.location.replace("/register");
      console.log("User and associated posts have been deleted");
    } catch (error) {
      // Handle error
      console.error("Failed to delete user", error);
    }
  };
  let imageSrc = "/images/download.jpg";
  if (file) {
    imageSrc = URL.createObjectURL(file);
  } else {
    imageSrc = PF + user.profilePic;
  }

  return (
    <div>
      <Topbar />

      <div className="flex gap-1 ">
        <div className="min-h-screen md:basis-3/4 w-screen p-4 border-r border-[#a7a4a4] mt-16">
          <div className="flex justify-between items-center pb-5">
            <span className="md:text-[25px] font-bold text-[20px]">
              Update Account
            </span>
            {/* <span
              className="md:text-[12px] text-[10px] text-red-700 cursor-pointer bg-red-300 px-2 py-1 rounded-full"
              onClick={handleDelete}
            >
              Delete Account
            </span> */}
          </div>
          <form onSubmit={handleSubmit}>
            <label className="text-[#666]">Profile Picture</label>
            <div className="flex items-center gap-2 py-5">
              <img
                src={imageSrc}
                alt="/"
                className="w-[70px] h-[70px] object-cover rounded-lg"
              />
              <label htmlFor="fileInput" className="border-2 rounded-full p-2">
                <MdOutlineChangeCircle size={24} />
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="flex flex-col gap-5 ">
              <label>Username</label>
              <input
                type="text"
                placeholder={user.username}
                className="border-b border-[#ccc] focus:outline-none"
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Email</label>
              <input
                type="email"
                placeholder={user.email}
                className="border-b border-[#ccc] focus:outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Password</label>
              <input
                type="password"
                className="border-b border-[#ccc] focus:outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className=" flex items-center justify-center px-4 py-1 bg-[#000] text-white "
              >
                Update
              </button>
            </div>
            <div>
              <ToastContainer />
            </div>
          </form>
        </div>
        <div className="basis-1/4 hidden md:block p-2 mt-[58px]">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Settings;
