import { useEffect, useState } from "react";
import Main from "../components/main/Main";
import Topbar from "../components/topbar/Topbar";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          "https://blog-psi-plum.vercel.app/api/posts" + search
        );
        const posts = res.data;
        posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setPosts(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, [search]);

  return (
    <div>
      <Topbar />
      <Main posts={posts} />
    </div>
  );
};

export default Home;
