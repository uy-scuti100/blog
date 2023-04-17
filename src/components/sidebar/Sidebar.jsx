import { BsTwitter } from "react-icons/bs";
import { BsPinterest, BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="fixed px-4">
      <div>
        <h1 className="text-[16px] font-bold uppercase mb-2 p-2 font-[poppins]">
          About Me
        </h1>
        <img
          src="/images/about.webp"
          alt="/"
          className="object-cover rounded-lg mb-2"
        />
        <p className="font-[300] text-[14px] pb-2 font-[poppins] text-[#565555] ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div>
        <h1 className="font-bold mb-4 p-2 border-y border-[#a7a4a4] font-[poppins]">
          My Tags
        </h1>
        <span>
          <ul className="text-[#565555] flex flex-col gap-5 pb-5 font-[roboto]">
            <li>#Music</li>
            <li>#Nature</li>
            <li>#Tech</li>
            <li>#Lifestyle</li>
          </ul>
        </span>

        <h1 className="font-bold pb-2 font-[poppins]">Reach Us On </h1>
        <span className="text-[24px] flex justify-evenly pb-2">
          <BsTwitter />
          <BsGithub />
          <BsPinterest />
          <AiFillInstagram />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;