import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const SinglePost = () => {
  return (
    <div>
      <div>
        {/* post image */}
        <img
          src="/images/hunter.webp"
          alt="/"
          className="rounded-md object-cover md:h-[500px] h-[250px] w-full mt-4"
        />
      </div>
      <div className="flex justify-between items-center my-5">
        <h1 className="text-[18px] md:text-[24px] font-bold font-[miracle] capitalize">
          Lorem ipsum dolor sit amet.
        </h1>
        <div className="flex gap-5">
          <AiOutlineEdit size={24} style={{ color: "teal" }} />
          <AiOutlineDelete size={24} style={{ color: "tomato" }} />
        </div>
      </div>
      <div className="flex justify-between my-5 text-[#be9656]">
        <span>
          Author: <b>Uy Scuti</b>
        </span>
        <span className="italic">1 hour ago</span>
      </div>
      <p className="text-[#666] text-[14px] md:text-[18px] leading-6 first-letter:md:text-[55px] first-letter:text-[35px] first-letter:font-[montserrat] first-letter:ml-5 first-letter:font-semibold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus
        voluptatem nihil omnis eos accusamus laborum quaerat aperiam nemo
        dignissimos sequi provident laudantium natus tempora quod, quidem beatae
        voluptates veniam, quos et id inventore numquam impedit voluptate
        pariatur. Possimus reprehenderit placeat illo eos quae culpa quasi
        magnam dolorem voluptate voluptates, beatae unde tenetur corporis
        repellat consequatur sequi quas iste minus hic accusantium adipisci?
        Fuga commodi esse ex doloremque mollitia unde maiores voluptates
        repellendus itaque voluptate! Esse amet nam ducimus, alias quisquam
        obcaecati facilis impedit tempore eos deleniti facere nihil recusandae.
        Earum id praesentium repellendus tempore odio vero eum delectus,
        veritatis similique ullam dignissimos, ipsam vitae perferendis? Tenetur
        quos at, deleniti reprehenderit magni rem fugiat iste ipsa eos!
        Exercitationem a minima dolorem vero. Facilis repellendus repellat vitae
        similique maiores molestias, minus eos, officia ipsa quasi quis
        voluptate debitis? Enim atque vero id odio eius ab esse non laudantium
        suscipit blanditiis culpa commodi quod omnis ipsum reprehenderit itaque
        perferendis vel dolorum, sit nostrum doloribus maiores ullam similique.
        Aperiam, cumque assumenda vel eius praesentium delectus beatae veritatis
        exercitationem nam laudantium nisi impedit aliquid perferendis eligendi
        ipsam, facere quis autem vero modi id similique eos quia quo? Aliquam
        aspernatur autem repellat vel ab labore optio?
      </p>
    </div>
  );
};

export default SinglePost;
