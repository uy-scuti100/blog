import React from "react";
import { BsBookmarkPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <div>
      <div>
        {/* post image */}
        <img
          src="/images/hunter.webp"
          alt="/"
          className="rounded-md object-cover h-[350px] w-full mt-4"
        />
      </div>
      <div className="pb-5">
        <div className="py-4 text-[#be9656] flex gap-4 leading-[20px]cursor-pointer">
          {/* post categories or tags */}
          <span>#Nature</span>
          <span>#Lifestyle</span>
        </div>
        <Link to="/single">
          <span className="text-[24px] font-bold mt-[15px] cursor-pointer font-[miracle] capitalize flex justify-between">
            {/* post title */}
            <span>Lorem ipsum dolor sit amet.</span>
            <BsBookmarkPlus size={24} />
            {/* <svg
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
            </svg> */}
          </span>
        </Link>
        <hr />
        <span className="italic text-[13px] text-[#999] ">
          {/* post date */}1 hour ago
        </span>
      </div>
      <div>
        {/* post decsription*/}
        <p className="text-[14px] text-[#444] leading-6 mb-[15px] overflow-hidden overflow-ellipsis webkit">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          obcaecati maxime deleniti repudiandae, commodi odit eos itaque magni
          architecto alias amet sunt, perferendis praesentium at nisi, modi
          quibusdam in dolores. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Excepturi obcaecati maxime deleniti repudiandae,
          commodi odit eos itaque magni architecto alias amet sunt, perferendis
          praesentium at nisi, modi quibusdam in dolores. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Excepturi obcaecati maxime deleniti
          repudiandae, commodi odit eos itaque magni architecto alias amet sunt,
          perferendis praesentium at nisi, modi quibusdam in dolores. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Excepturi obcaecati
          maxime deleniti repudiandae, commodi odit eos itaque magni architecto
          alias amet sunt, perferendis praesentium at nisi, modi quibusdam in
          dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi obcaecati maxime deleniti repudiandae, commodi odit eos
          itaque magni architecto alias amet sunt, perferendis praesentium at
          nisi, modi quibusdam in dolores.
        </p>
        <hr />
      </div>
    </div>
  );
};

export default Post;
