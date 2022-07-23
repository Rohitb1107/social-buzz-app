import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div className="container text-center">
      <div className="row">
        <Post />
      </div>
    </div>
  );
};

export default Posts;
