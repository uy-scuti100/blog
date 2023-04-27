import axios from "axios";
import { useContext, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Context } from "../../context/Context";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const res = await axios.post("http://localhost:5000/api/posts", newPost);
      window.location.replace("http://localhost:5173/post/" + res.data._id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-[50px]">
      <div>
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt="/"
            className="h-[27vh] block w-full object-contain rounded-md"
          />
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-1 md:gap-4 ">
          <label
            htmlFor="fileInput"
            className="text-[18px] md:text-[24px] cursor-pointer text-gray-500 p-1 md:p-3 border-2 border-text-gray-700 rounded-full"
          >
            <AiOutlinePlus />
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            autoFocus={true}
            className="text-[18px] md:text-[30px] border-none p-5 w-[70vw] focus:outline-none"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <textarea
            type="text"
            placeholder="Your Article Goes Here..."
            className="p-2 w-full resize-none md:w-[70vw] h-[20vh] border border-gray-500 rounded-md mb-10 focus:outline-none"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <div className="flex items-center justify-center" type="submit">
          <button type="submit" className=" px-4 py-1 bg-[#000] text-white ">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default Publish;
