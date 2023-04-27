import React from "react";
import { BsBookmarkPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const PF = "http://localhost:5000/images/";
  const currentDate = new Date();
  return (
    <div>
      <div className="w-full">
        {/* post image */}
        {post.photo && (
          <img
            src={PF + post.photo}
            alt="/"
            className="rounded-md object-cover w-full h-[450px] mt-4"
          />
        )}
      </div>
      <div className="pb-5">
        <div className="py-4 text-[#be9656] flex g ap-4 leading-[20px]cursor-pointer">
          {/* post categories or tags */}
          {post.categories.map((cat) => (
            <span key={cat._id}>{cat.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`}>
          <span className="text-[24px] font-bold mt-[15px] cursor-pointer font-[miracle] capitalize flex justify-between hover:text-[#D2793A]">
            {/* post title */}
            <span>{post.title}</span>
            <BsBookmarkPlus size={24} />
          </span>
        </Link>
        <hr />
        <span className="italic text-[13px] text-[#999] ">
          {/* post date */}
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <div>
        {/* post decsription*/}
        <p className="text-[14px] text-[#444] leading-6 mb-[15px] overflow-hidden overflow-ellipsis webkit">
          {post.desc}
        </p>
        <hr />
      </div>
    </div>
  );
};

export default Post;
