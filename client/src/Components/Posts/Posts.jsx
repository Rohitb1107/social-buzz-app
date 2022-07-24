import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div>
      <div className="container text-center">
        {posts.map((post) => (
          <div className="row" key={post._id}>
            <Post post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
