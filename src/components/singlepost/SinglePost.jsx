import React, { useContext, useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Context } from "../../context/Context";

const SinglePost = () => {
  const { user } = useContext(Context);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "https://blog-psi-plum.vercel.app/images/";
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  // request

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(
        "https://blog-psi-plum.vercel.app/api/posts/" + path
      );
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://blog-psi-plum.vercel.app/api/posts/${post._id}`,
        {
          data: { username: user.username },
        }
      );
      window.location.replace("/");
    } catch (error) {}
  };
  const handleUpdate = async () => {
    try {
      await axios.put(
        `https://blog-psi-plum.vercel.app/api/posts/${post._id}`,
        {
          username: user.username,
          title,
          desc,
        }
      );
      setUpdateMode(false);
    } catch (error) {}
  };
  return (
    <div className="mt-4">
      <div className="w-full">
        {/* post image */}
        {post.photo && (
          <img
            src={PF + post.photo}
            alt="/"
            className="rounded-md object-cover md:h-[500px] h-[250px] w-full mt-4"
          />
        )}
      </div>
      <div className="flex justify-between items-center my-5">
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="text-[18px] md:text-[24px] font-bold font-[miracle] capitalize"
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
        ) : (
          <h1 className="text-[18px] md:text-[24px] font-bold font-[miracle] capitalize">
            {title}
          </h1>
        )}
        {post.username === user?.username && (
          <div className="flex gap-5">
            <AiOutlineEdit
              size={24}
              style={{ color: "teal" }}
              onClick={() => setUpdateMode(!updateMode)}
              cursor="pointer"
            />
            <AiOutlineDelete
              size={24}
              style={{ color: "tomato" }}
              onClick={handleDelete}
              cursor="pointer"
            />
          </div>
        )}
      </div>
      <div className="flex justify-between my-5 text-[#be9656]">
        <span>
          Author:
          <Link to={`/?user=${post.username}`}>
            <b>{post.username}</b>
          </Link>
        </span>
        <span className="italic">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      {updateMode ? (
        <textarea
          cols="30"
          rows="10"
          className="text-[#666] text-[14px] md:text-[18px] leading-6 first-letter:md:text-[55px] w-full border-2"
          value={desc}
          autoFocus
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
      ) : (
        <p className="text-[#666] text-[14px] md:text-[18px] leading-6 first-letter:md:text-[55px] first-letter:text-[35px] first-letter:font-[montserrat] first-letter:ml-5 first-letter:font-semibold first-letter:uppercase  ">
          {desc}
        </p>
      )}
      {updateMode && (
        <div className="flex justify-end mt-5">
          <button
            className=" px-4 py-1 bg-[#000] text-white"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default SinglePost;
