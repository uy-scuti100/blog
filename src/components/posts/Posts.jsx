import React from "react";
import Post from "../post/Post";

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Posts;
