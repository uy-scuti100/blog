import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Publish = () => {
  return (
    <div>
      <div>
        <img
          src="/images/jakob-owens-A1nc0u93y9w-unsplash.jpg"
          alt="/"
          className="h-[27vh] block w-full object-cover rounded-md"
        />
      </div>
      <form>
        <div className="flex items-center gap-1 md:gap-4 ">
          <label
            htmlFor="fileInput"
            className="text-[18px] md:text-[24px] cursor-pointer text-gray-500 p-1 md:p-3 border-2 border-text-gray-700 rounded-full"
          >
            <AiOutlinePlus />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            autoFocus={true}
            className="text-[18px] md:text-[30px] border-none p-5 w-[70vw] focus:outline-none"
          />
        </div>
        <div>
          <textarea
            type="text"
            placeholder="Your Article Goes Here..."
            className="p-2 w-full resize-none md:w-[70vw] h-[20vh] border border-gray-500 rounded-md mb-10 focus:outline-none"
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button type="submit" className=" px-4 py-1 bg-[#000] text-white ">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default Publish;
